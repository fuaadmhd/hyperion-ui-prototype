import { X } from 'lucide-react';

export default function ConfigPanel({ selectedNode, onClose }) {
  if (!selectedNode) {
    return (
      <div className="w-80 bg-gray-900 border-l border-gray-800 p-4 flex items-center justify-center">
        <p className="text-sm text-gray-500">Select a node to configure</p>
      </div>
    );
  }
  
  return (
    <div className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <h3 className="font-medium text-gray-100">Node Configuration</h3>
        <button
          onClick={onClose}
          className="p-1 hover:bg-gray-800 rounded transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Label
          </label>
          <input
            type="text"
            value={selectedNode.data.label}
            readOnly
            className="input w-full"
          />
        </div>
        
        {selectedNode.data.value && (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Value
            </label>
            <input
              type="text"
              value={selectedNode.data.value}
              readOnly
              className="input w-full"
            />
          </div>
        )}
        
        {selectedNode.data.formula && (
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Formula
            </label>
            <textarea
              value={selectedNode.data.formula}
              readOnly
              rows={3}
              className="input w-full resize-none"
            />
          </div>
        )}
        
        {selectedNode.data.editable && (
          <div className="p-3 bg-blue-600/10 border border-blue-600/30 rounded-lg">
            <p className="text-sm text-blue-400">
              This is an editable assumption. In a functional version, you could modify this value.
            </p>
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Node Type
          </label>
          <input
            type="text"
            value={selectedNode.type}
            readOnly
            className="input w-full capitalize"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-2">
            Connections
          </label>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Inputs:</span>
              <span className="text-gray-300">2</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-400">Outputs:</span>
              <span className="text-gray-300">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
