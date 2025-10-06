import { Database, CheckCircle, Clock, Plus, Settings } from 'lucide-react';
import Header from '../components/common/Header';
import Sidebar from '../components/workspace/Sidebar';
import Button from '../components/common/Button';

const dataSources = [
  {
    id: 1,
    name: 'Bloomberg Terminal',
    status: 'connected',
    lastSync: '2 min ago',
    description: 'Real-time market data and financial analytics',
    icon: '🔷',
  },
  {
    id: 2,
    name: 'Internal ERP',
    status: 'connected',
    lastSync: '5 min ago',
    description: 'Company financial and operational data',
    icon: '📊',
  },
  {
    id: 3,
    name: 'FactSet',
    status: 'connected',
    lastSync: '10 min ago',
    description: 'Financial data and analytics platform',
    icon: '📈',
  },
  {
    id: 4,
    name: 'Satellite Imagery API',
    status: 'configured',
    lastSync: 'Never',
    description: 'Alternative data from satellite imagery',
    icon: '🛰️',
  },
  {
    id: 5,
    name: 'Custom SQL Database',
    status: 'connected',
    lastSync: '1 hour ago',
    description: 'Internal proprietary datasets',
    icon: '💾',
  },
];

const statusConfig = {
  connected: {
    icon: CheckCircle,
    color: 'text-green-400',
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    label: 'Connected',
  },
  configured: {
    icon: Clock,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/20',
    borderColor: 'border-yellow-500/30',
    label: 'Configured',
  },
};

export default function DataSources() {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-100">Data Sources</h2>
                <p className="text-gray-400 mt-1">
                  Manage your connected data providers
                </p>
              </div>
              
              <Button variant="primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Data Source
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {dataSources.map((source) => {
                const statusInfo = statusConfig[source.status];
                const StatusIcon = statusInfo.icon;
                
                return (
                  <div key={source.id} className="card group">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start space-x-3">
                        <div className="text-3xl">{source.icon}</div>
                        
                        <div className="flex-1">
                          <h3 className="text-lg font-medium text-gray-100 group-hover:text-blue-400 transition-colors">
                            {source.name}
                          </h3>
                          <p className="text-sm text-gray-400 mt-1">
                            {source.description}
                          </p>
                        </div>
                      </div>
                      
                      <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                        <Settings className="w-4 h-4 text-gray-400" />
                      </button>
                    </div>
                    
                    <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                      <div
                        className={`flex items-center space-x-2 px-2 py-1 rounded border ${statusInfo.bgColor} ${statusInfo.borderColor}`}
                      >
                        <StatusIcon className={`w-3 h-3 ${statusInfo.color}`} />
                        <span className={`text-xs ${statusInfo.color}`}>
                          {statusInfo.label}
                        </span>
                      </div>
                      
                      <div className="flex items-center space-x-1 text-xs text-gray-500">
                        <Clock className="w-3 h-3" />
                        <span>Last sync: {source.lastSync}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Configuration Panel Placeholder */}
            <div className="mt-6 card">
              <h3 className="text-sm font-medium text-gray-300 mb-3">
                Connection Details
              </h3>
              <p className="text-sm text-gray-500">
                Select a data source to view and configure connection settings.
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
