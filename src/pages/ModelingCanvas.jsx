import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Save, Share, ZoomIn, ZoomOut, Grid, Eye, Code, MessageSquare, GitBranch, Clock, LayoutDashboard } from 'lucide-react';
import Header from '../components/common/Header';
import Sidebar from '../components/workspace/Sidebar';
import ComponentPalette from '../components/canvas/ComponentPalette';
import NodeCanvas from '../components/canvas/NodeCanvas';
import GridView from '../components/canvas/GridView';
import ConfigPanel from '../components/canvas/ConfigPanel';
import CoPilotChat from '../components/ai/CoPilotChat';
import AuditPanel from '../components/ai/AuditPanel';
import VersionHistory from '../components/version-control/VersionHistory';
import BranchView from '../components/version-control/BranchView';
import ScenarioCompare from '../components/version-control/ScenarioCompare';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';

export default function ModelingCanvas() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeView, setActiveView] = useState('visual'); // visual, grid, code
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeRightPanel, setActiveRightPanel] = useState('config'); // config, versions, audit, comments
  const [showCoPilot, setShowCoPilot] = useState(true);
  const [isCoPilotMinimized, setIsCoPilotMinimized] = useState(false);
  
  const handleNodeSelect = (node) => {
    setSelectedNode(node);
    setActiveRightPanel('config');
  };
  
  return (
    <div className="h-screen flex flex-col">
      <Header />
      
      {/* Model Toolbar */}
      <div className="bg-gray-900 border-b border-gray-800 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h2 className="text-lg font-medium text-gray-100">TechCorp DCF Valuation</h2>
          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 text-xs rounded border border-yellow-500/30">
            In Progress
          </span>
        </div>
        
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ZoomOut className="w-4 h-4 text-gray-400" />
          </button>
          <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors">
            <ZoomIn className="w-4 h-4 text-gray-400" />
          </button>
          
          <div className="w-px h-6 bg-gray-700 mx-2"></div>
          
          <Button variant="secondary" size="sm">
            <Save className="w-4 h-4 mr-2" />
            Save
          </Button>
          
          <Button variant="secondary" size="sm">
            <Share className="w-4 h-4 mr-2" />
            Share
          </Button>
          
          <Button
            variant="primary"
            size="sm"
            onClick={() => navigate(`/dashboard/${id}`)}
          >
            <LayoutDashboard className="w-4 h-4 mr-2" />
            Dashboard
          </Button>
        </div>
      </div>
      
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Component Palette */}
        <ComponentPalette />
        
        {/* Main Canvas Area */}
        <div className="flex-1 flex flex-col">
          {/* View Tabs */}
          <div className="bg-gray-900 border-b border-gray-800 flex items-center px-6">
            <button
              onClick={() => setActiveView('visual')}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                activeView === 'visual'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <Eye className="w-4 h-4" />
              <span>Visual</span>
            </button>
            
            <button
              onClick={() => setActiveView('grid')}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                activeView === 'grid'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <Grid className="w-4 h-4" />
              <span>Grid</span>
            </button>
            
            <button
              onClick={() => setActiveView('code')}
              className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors flex items-center space-x-2 ${
                activeView === 'code'
                  ? 'border-blue-500 text-blue-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              <Code className="w-4 h-4" />
              <span>Code</span>
            </button>
          </div>
          
          {/* Canvas Content */}
          {activeView === 'visual' && <NodeCanvas onNodeSelect={handleNodeSelect} />}
          {activeView === 'grid' && <GridView />}
          {activeView === 'code' && (
            <div className="flex-1 bg-gray-950 flex items-center justify-center">
              <div className="text-center">
                <Code className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500">Code view placeholder</p>
                <p className="text-sm text-gray-600 mt-2">
                  Would show Python/JavaScript code for model logic
                </p>
              </div>
            </div>
          )}
        </div>
        
        {/* Right Panel */}
        <div className="w-80 bg-gray-900 border-l border-gray-800 flex flex-col">
          {/* Right Panel Tabs */}
          <div className="flex border-b border-gray-800">
            <button
              onClick={() => setActiveRightPanel('config')}
              className={`flex-1 px-3 py-3 text-xs font-medium transition-colors ${
                activeRightPanel === 'config'
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Config
            </button>
            <button
              onClick={() => setActiveRightPanel('versions')}
              className={`flex-1 px-3 py-3 text-xs font-medium transition-colors ${
                activeRightPanel === 'versions'
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <GitBranch className="w-3 h-3 mx-auto mb-1" />
              Versions
            </button>
            <button
              onClick={() => setActiveRightPanel('audit')}
              className={`flex-1 px-3 py-3 text-xs font-medium transition-colors ${
                activeRightPanel === 'audit'
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Audit
            </button>
            <button
              onClick={() => setActiveRightPanel('comments')}
              className={`flex-1 px-3 py-3 text-xs font-medium transition-colors ${
                activeRightPanel === 'comments'
                  ? 'bg-gray-800 text-blue-400'
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              <MessageSquare className="w-3 h-3 mx-auto mb-1" />
              Comments
            </button>
          </div>
          
          {/* Right Panel Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {activeRightPanel === 'config' && (
              <ConfigPanel
                selectedNode={selectedNode}
                onClose={() => setSelectedNode(null)}
              />
            )}
            
            {activeRightPanel === 'versions' && (
              <div className="space-y-6">
                <VersionHistory />
                <div className="border-t border-gray-800 pt-6">
                  <BranchView />
                </div>
                <div className="border-t border-gray-800 pt-6">
                  <ScenarioCompare />
                </div>
              </div>
            )}
            
            {activeRightPanel === 'audit' && <AuditPanel />}
            
            {activeRightPanel === 'comments' && (
              <div className="text-center py-8">
                <MessageSquare className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <p className="text-gray-500 text-sm">No comments yet</p>
                <p className="text-gray-600 text-xs mt-2">
                  Collaborators can leave comments here
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* AI Co-Pilot */}
      {showCoPilot && (
        <CoPilotChat
          isMinimized={isCoPilotMinimized}
          onToggleMinimize={() => setIsCoPilotMinimized(!isCoPilotMinimized)}
          onClose={() => setShowCoPilot(false)}
        />
      )}
    </div>
  );
}
