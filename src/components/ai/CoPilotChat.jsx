import { useState } from 'react';
import { Send, Bot, User, X, Minimize2, Maximize2 } from 'lucide-react';

const sampleConversation = [
  {
    role: 'user',
    content: 'Forecast operating expenses for the next 5 years starting from last reported P&L value, growing at 3% annually',
  },
  {
    role: 'assistant',
    content: 'I\'ve created an operating expense forecast model with the following components:\n\n1. **Data Input Node**: Pulls last reported OpEx value from your P&L\n2. **Growth Assumption Node**: Set to 3% annual growth\n3. **Forecast Calculator Node**: Applies compound growth over 5 years\n4. **Visualization Node**: Line chart showing the projection\n\nThe forecast shows OpEx growing from $2.1M to $2.4M over the 5-year period. Would you like me to add sensitivity analysis around the growth rate?',
  },
];

export default function CoPilotChat({ isMinimized, onToggleMinimize, onClose }) {
  const [messages, setMessages] = useState(sampleConversation);
  const [inputValue, setInputValue] = useState('');
  
  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={onToggleMinimize}
          className="flex items-center space-x-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-colors"
        >
          <Bot className="w-5 h-5" />
          <span className="font-medium">AI Co-Pilot</span>
        </button>
      </div>
    );
  }
  
  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    setMessages([...messages, { role: 'user', content: inputValue }]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'I understand your request. In a functional version, I would process this and generate the appropriate model components.',
        },
      ]);
    }, 1000);
  };
  
  return (
    <div className="fixed bottom-6 right-6 w-96 h-[500px] bg-gray-900 border border-gray-800 rounded-lg shadow-2xl flex flex-col z-50">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-2">
          <Bot className="w-5 h-5 text-blue-400" />
          <h3 className="font-medium text-gray-100">AI Co-Pilot</h3>
        </div>
        
        <div className="flex items-center space-x-1">
          <button
            onClick={onToggleMinimize}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
          >
            <Minimize2 className="w-4 h-4 text-gray-400" />
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-800 rounded transition-colors"
          >
            <X className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className="flex items-start space-x-2 max-w-[85%]">
              {message.role === 'assistant' && (
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
              )}
              
              <div
                className={`px-3 py-2 rounded-lg text-sm ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-800 text-gray-100'
                }`}
              >
                {message.content}
              </div>
              
              {message.role === 'user' && (
                <div className="w-6 h-6 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask AI Co-Pilot..."
            className="flex-1 input"
          />
          <button
            onClick={handleSend}
            className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
