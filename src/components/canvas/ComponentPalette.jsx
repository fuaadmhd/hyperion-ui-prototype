import { Database, Settings, Calculator, Code, TrendingUp, BarChart } from 'lucide-react';

const categories = [
  {
    name: 'Data Inputs',
    icon: Database,
    color: 'text-blue-400',
    nodes: [
      { type: 'dataInput', label: 'Market Data', icon: Database },
      { type: 'dataInput', label: 'Database Query', icon: Database },
    ],
  },
  {
    name: 'Assumptions',
    icon: Settings,
    color: 'text-green-400',
    nodes: [
      { type: 'assumption', label: 'Growth Rate', icon: Settings },
      { type: 'assumption', label: 'Discount Rate', icon: Settings },
    ],
  },
  {
    name: 'Calculations',
    icon: Calculator,
    color: 'text-purple-400',
    nodes: [
      { type: 'calculation', label: 'Formula', icon: Calculator },
      { type: 'calculation', label: 'Aggregation', icon: Calculator },
    ],
  },
  {
    name: 'Logic',
    icon: Code,
    color: 'text-orange-400',
    nodes: [
      { type: 'pythonScript', label: 'Python Script', icon: Code },
      { type: 'pythonScript', label: 'Custom Function', icon: Code },
    ],
  },
  {
    name: 'Visualizations',
    icon: BarChart,
    color: 'text-pink-400',
    nodes: [
      { type: 'visualization', label: 'Line Chart', icon: TrendingUp },
      { type: 'visualization', label: 'Bar Chart', icon: BarChart },
    ],
  },
];

export default function ComponentPalette() {
  const onDragStart = (event, nodeType, label) => {
    event.dataTransfer.setData('application/reactflow', JSON.stringify({ type: nodeType, label }));
    event.dataTransfer.effectAllowed = 'move';
  };
  
  return (
    <div className="w-64 bg-gray-900 border-r border-gray-800 overflow-y-auto">
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-400 mb-4">Components</h3>
        
        <div className="space-y-4">
          {categories.map((category) => {
            const CategoryIcon = category.icon;
            
            return (
              <div key={category.name}>
                <div className="flex items-center space-x-2 mb-2">
                  <CategoryIcon className={`w-4 h-4 ${category.color}`} />
                  <h4 className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {category.name}
                  </h4>
                </div>
                
                <div className="space-y-1">
                  {category.nodes.map((node, index) => {
                    const NodeIcon = node.icon;
                    
                    return (
                      <div
                        key={index}
                        draggable
                        onDragStart={(e) => onDragStart(e, node.type, node.label)}
                        className="flex items-center space-x-2 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg cursor-move transition-colors"
                      >
                        <NodeIcon className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-300">{node.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
