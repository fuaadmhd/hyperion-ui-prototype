import { useCallback } from 'react';
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
} from 'reactflow';
import 'reactflow/dist/style.css';
import CustomNode from './CustomNode';
import mockNodes from '../../data/mockNodes.json';

const nodeTypes = {
  dataInput: (props) => <CustomNode {...props} type="dataInput" />,
  assumption: (props) => <CustomNode {...props} type="assumption" />,
  calculation: (props) => <CustomNode {...props} type="calculation" />,
  pythonScript: (props) => <CustomNode {...props} type="pythonScript" />,
  forecast: (props) => <CustomNode {...props} type="forecast" />,
  visualization: (props) => <CustomNode {...props} type="visualization" />,
};

export default function NodeCanvas({ onNodeSelect }) {
  const [nodes, , onNodesChange] = useNodesState(mockNodes.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(mockNodes.edges);
  
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );
  
  const onNodeClick = useCallback((event, node) => {
    onNodeSelect(node);
  }, [onNodeSelect]);
  
  return (
    <div className="flex-1 bg-gray-950">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onNodeClick={onNodeClick}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gray-950"
      >
        <Background color="#374151" gap={16} />
        <Controls className="!bg-gray-900 !border-gray-800 [&_button]:!bg-gray-800 [&_button]:!border-gray-700 [&_button]:!text-gray-300 [&_button:hover]:!bg-gray-700" />
        <MiniMap
          className="!bg-gray-900 !border-gray-800"
          nodeColor={(node) => {
            const colors = {
              dataInput: '#3b82f6',
              assumption: '#10b981',
              calculation: '#8b5cf6',
              pythonScript: '#f97316',
              forecast: '#14b8a6',
              visualization: '#ec4899',
            };
            return colors[node.type] || '#6b7280';
          }}
        />
      </ReactFlow>
    </div>
  );
}
