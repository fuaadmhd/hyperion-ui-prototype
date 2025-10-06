import { GitBranch, Plus } from 'lucide-react';
import Button from '../common/Button';

const branches = [
  {
    id: 'main',
    name: 'Base Case',
    isMain: true,
    commits: 12,
    lastUpdate: '3 hours ago',
  },
  {
    id: 'aggressive',
    name: 'Aggressive Growth Scenario',
    isMain: false,
    commits: 5,
    lastUpdate: '1 day ago',
  },
  {
    id: 'recession',
    name: 'Recession Scenario',
    isMain: false,
    commits: 8,
    lastUpdate: '2 days ago',
  },
  {
    id: 'high-interest',
    name: 'High Interest Rate Case',
    isMain: false,
    commits: 3,
    lastUpdate: '3 days ago',
  },
];

export default function BranchView() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">Scenarios (Branches)</h3>
        <Button size="sm" variant="primary">
          <Plus className="w-4 h-4 mr-1" />
          New Scenario
        </Button>
      </div>
      
      <div className="space-y-2">
        {branches.map((branch) => (
          <div
            key={branch.id}
            className={`p-3 rounded-lg border transition-colors cursor-pointer ${
              branch.isMain
                ? 'bg-blue-600/10 border-blue-600/30 hover:border-blue-600/50'
                : 'bg-gray-800 border-gray-700 hover:border-gray-600'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <GitBranch
                  className={`w-4 h-4 ${
                    branch.isMain ? 'text-blue-400' : 'text-gray-400'
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    branch.isMain ? 'text-blue-400' : 'text-gray-300'
                  }`}
                >
                  {branch.name}
                </span>
                {branch.isMain && (
                  <span className="px-2 py-0.5 bg-blue-600 text-white text-xs rounded">
                    Main
                  </span>
                )}
              </div>
            </div>
            
            <div className="flex items-center space-x-4 mt-2 text-xs text-gray-500">
              <span>{branch.commits} commits</span>
              <span>•</span>
              <span>Updated {branch.lastUpdate}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
