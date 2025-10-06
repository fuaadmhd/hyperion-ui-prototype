import { useState } from 'react';
import { Search, Calculator, TrendingUp, FileText, GitMerge, Calendar, Layers, Activity, Repeat, LineChart } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';
import mockComponents from '../../data/mockComponents.json';
import { useNavigate } from 'react-router-dom';

const iconMap = {
  Calculator,
  TrendingUp,
  FileText,
  GitMerge,
  Calendar,
  Layers,
  Activity,
  Repeat,
  LineChart,
};

export default function ModelLibrary({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('templates');
  const navigate = useNavigate();
  
  const filteredItems = activeTab === 'templates' 
    ? mockComponents.templates.filter(item => 
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockComponents.components.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
  
  const handleSelectTemplate = (template) => {
    navigate(`/model/new-${template.id}`);
    onClose();
  };
  
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Model Library" size="xl">
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search templates and components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input w-full pl-10"
          />
        </div>
        
        <div className="flex space-x-2 border-b border-gray-800">
          <button
            onClick={() => setActiveTab('templates')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'templates'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            Full Templates
          </button>
          <button
            onClick={() => setActiveTab('components')}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'components'
                ? 'border-blue-500 text-blue-400'
                : 'border-transparent text-gray-400 hover:text-gray-300'
            }`}
          >
            Components
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto">
          {filteredItems.map((item) => {
            const Icon = iconMap[item.icon] || Calculator;
            
            return (
              <div
                key={item.id}
                className="card group cursor-pointer"
                onClick={() => handleSelectTemplate(item)}
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-400" />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-100 group-hover:text-blue-400 transition-colors">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400 mt-1">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mt-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 bg-gray-800 text-gray-400 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No items found matching "{searchQuery}"
          </div>
        )}
      </div>
    </Modal>
  );
}
