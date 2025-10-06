import { Clock, MoreVertical } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ModelCard({ model }) {
  const navigate = useNavigate();
  
  const statusColors = {
    'In Progress': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Completed': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Shared with team': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  };
  
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    return date.toLocaleDateString();
  };
  
  return (
    <div
      onClick={() => navigate(`/model/${model.id}`)}
      className="card cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-lg font-medium text-gray-100 group-hover:text-blue-400 transition-colors">
            {model.name}
          </h3>
          <p className="text-sm text-gray-400 mt-1">{model.description}</p>
        </div>
        
        <button
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="p-1 hover:bg-gray-800 rounded transition-colors opacity-0 group-hover:opacity-100"
        >
          <MoreVertical className="w-4 h-4 text-gray-400" />
        </button>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-3">
        {model.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between pt-3 border-t border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs">
            {model.owner.avatar}
          </div>
          <span className="text-sm text-gray-400">{model.owner.name}</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1 text-gray-500 text-xs">
            <Clock className="w-3 h-3" />
            <span>{formatDate(model.lastModified)}</span>
          </div>
          
          <span
            className={`px-2 py-1 text-xs rounded border ${statusColors[model.status]}`}
          >
            {model.status}
          </span>
        </div>
      </div>
    </div>
  );
}
