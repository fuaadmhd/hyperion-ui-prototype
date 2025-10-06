import { Handle, Position } from 'reactflow';
import { Database, Settings, Code, TrendingUp, BarChart } from 'lucide-react';

const nodeIcons = {
  dataInput: Database,
  assumption: Settings,
  calculation: Settings,
  pythonScript: Code,
  forecast: TrendingUp,
  visualization: BarChart,
};

const nodeColors = {
  dataInput: 'bg-blue-600/20 border-blue-600 text-blue-400',
  assumption: 'bg-green-600/20 border-green-600 text-green-400',
  calculation: 'bg-purple-600/20 border-purple-600 text-purple-400',
  pythonScript: 'bg-orange-600/20 border-orange-600 text-orange-400',
  forecast: 'bg-teal-600/20 border-teal-600 text-teal-400',
  visualization: 'bg-pink-600/20 border-pink-600 text-pink-400',
};

export default function CustomNode({ data, type }) {
  const Icon = nodeIcons[type] || Settings;
  const colorClass = nodeColors[type] || 'bg-gray-600/20 border-gray-600 text-gray-400';
  
  return (
    <div className={`px-4 py-3 border-2 rounded-lg min-w-[200px] ${colorClass} bg-opacity-90 backdrop-blur`}>
      <Handle type="target" position={Position.Left} className="!bg-gray-600" />
      
      <div className="flex items-start space-x-2">
        <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" />
        <div className="flex-1">
          <div className="font-medium text-sm">{data.label}</div>
          {data.subtitle && (
            <div className="text-xs opacity-75 mt-0.5">{data.subtitle}</div>
          )}
          {data.value && (
            <div className="text-xs font-semibold mt-1">{data.value}</div>
          )}
          {data.formula && (
            <div className="text-xs opacity-75 mt-1 italic">{data.formula}</div>
          )}
          {data.language && (
            <div className="text-xs opacity-75 mt-1">{data.language}</div>
          )}
          {data.periods && (
            <div className="text-xs opacity-75 mt-1">{data.periods}</div>
          )}
          {data.chartType && (
            <div className="text-xs opacity-75 mt-1">{data.chartType} Chart</div>
          )}
        </div>
      </div>
      
      <Handle type="source" position={Position.Right} className="!bg-gray-600" />
    </div>
  );
}
