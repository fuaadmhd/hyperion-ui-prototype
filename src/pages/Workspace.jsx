import { useState } from 'react';
import { Plus } from 'lucide-react';
import Header from '../components/common/Header';
import Sidebar from '../components/workspace/Sidebar';
import ModelCard from '../components/workspace/ModelCard';
import ModelLibrary from '../components/workspace/ModelLibrary';
import Button from '../components/common/Button';
import mockModels from '../data/mockModels.json';

export default function Workspace() {
  const [showLibrary, setShowLibrary] = useState(false);
  
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        
        <main className="flex-1 overflow-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-100">My Workspace</h2>
                <p className="text-gray-400 mt-1">
                  Your financial models and analyses
                </p>
              </div>
              
              <div className="flex items-center space-x-3">
                <Button
                  variant="secondary"
                  onClick={() => setShowLibrary(true)}
                >
                  Model Library
                </Button>
                
                <Button variant="primary" onClick={() => setShowLibrary(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Model
                </Button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {mockModels.map((model) => (
                <ModelCard key={model.id} model={model} />
              ))}
            </div>
            
            {/* Empty State for when no models */}
            {mockModels.length === 0 && (
              <div className="text-center py-12">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Plus className="w-8 h-8 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-300 mb-2">
                    No models yet
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Get started by creating your first financial model or browse the template library.
                  </p>
                  <Button variant="primary" onClick={() => setShowLibrary(true)}>
                    <Plus className="w-4 h-4 mr-2" />
                    Create Your First Model
                  </Button>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
      
      <ModelLibrary isOpen={showLibrary} onClose={() => setShowLibrary(false)} />
    </div>
  );
}
