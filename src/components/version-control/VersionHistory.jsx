import { GitCommit, Clock, User } from 'lucide-react';

const commits = [
  {
    id: 'commit-3',
    message: 'Added sensitivity analysis',
    author: 'Maya Chen',
    avatar: 'MC',
    timestamp: '3 hours ago',
    branch: 'main',
  },
  {
    id: 'commit-2',
    message: 'Updated WACC assumptions',
    author: 'David Park',
    avatar: 'DP',
    timestamp: '1 day ago',
    branch: 'main',
  },
  {
    id: 'commit-1',
    message: 'Initial DCF setup',
    author: 'Maya Chen',
    avatar: 'MC',
    timestamp: '2 days ago',
    branch: 'main',
  },
];

export default function VersionHistory() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">Version History</h3>
        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          View All
        </button>
      </div>
      
      <div className="space-y-3">
        {commits.map((commit) => (
          <div
            key={commit.id}
            className="p-3 bg-gray-800 hover:bg-gray-750 rounded-lg transition-colors cursor-pointer"
          >
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-xs flex-shrink-0">
                {commit.avatar}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2">
                  <GitCommit className="w-3 h-3 text-gray-500 flex-shrink-0" />
                  <p className="text-sm text-gray-100 font-medium truncate">
                    {commit.message}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
                  <div className="flex items-center space-x-1">
                    <User className="w-3 h-3" />
                    <span>{commit.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{commit.timestamp}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
