import { Search, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <h1 className="text-xl font-bold text-blue-500">Project Hyperion</h1>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search models, data sources..."
            className="bg-gray-800 border border-gray-700 rounded-lg pl-10 pr-4 py-2 w-96 text-sm focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="relative p-2 hover:bg-gray-800 rounded-lg transition-colors">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-2 px-3 py-2 hover:bg-gray-800 rounded-lg cursor-pointer transition-colors">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">MC</span>
          </div>
          <span className="text-sm text-gray-300">Maya Chen</span>
        </div>
      </div>
    </header>
  );
}
