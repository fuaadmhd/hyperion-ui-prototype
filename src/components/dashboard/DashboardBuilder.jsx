import { useState } from 'react';
import { Share, Download, Edit, Eye, FileText, Presentation } from 'lucide-react';
import Button from '../common/Button';
import Modal from '../common/Modal';
import KPICard from './KPICard';
import { RevenueChart, SegmentChart, SensitivityTable } from './ChartComponents';

export default function DashboardBuilder() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  
  return (
    <div className="flex-1 bg-gray-950 overflow-auto">
      <div className="p-6">
        {/* Toolbar */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-bold text-gray-100">Executive Dashboard</h2>
            <p className="text-sm text-gray-400 mt-1">TechCorp DCF Valuation</p>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-2 ${
                isEditMode
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {isEditMode ? (
                <>
                  <Edit className="w-4 h-4" />
                  <span>Edit Mode</span>
                </>
              ) : (
                <>
                  <Eye className="w-4 h-4" />
                  <span>View Mode</span>
                </>
              )}
            </button>
            
            <Button variant="secondary" onClick={() => setShowShareModal(true)}>
              <Share className="w-4 h-4 mr-2" />
              Share
            </Button>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <KPICard
            title="Revenue"
            value="$5.2M"
            change="+15%"
            trend="up"
          />
          <KPICard
            title="EBITDA Margin"
            value="32%"
            change="+2%"
            trend="up"
          />
          <KPICard
            title="Free Cash Flow"
            value="$1.8M"
            change="+12%"
            trend="up"
          />
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <RevenueChart />
          <SegmentChart />
        </div>
        
        {/* Sensitivity Table */}
        <div className="mb-6">
          <SensitivityTable />
        </div>
        
        {/* Interactive Assumption Slider */}
        <div className="card">
          <h3 className="text-sm font-medium text-gray-300 mb-4">
            Interactive Assumptions (Decision-Maker View)
          </h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-400">WACC</label>
                <span className="text-sm font-mono text-blue-400">9.2%</span>
              </div>
              <input
                type="range"
                min="7"
                max="12"
                step="0.1"
                defaultValue="9.2"
                className="w-full"
                disabled={!isEditMode}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>7%</span>
                <span>12%</span>
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-400">Revenue Growth Rate</label>
                <span className="text-sm font-mono text-blue-400">15%</span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                defaultValue="15"
                className="w-full"
                disabled={!isEditMode}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>5%</span>
                <span>30%</span>
              </div>
            </div>
          </div>
          
          {!isEditMode && (
            <p className="text-xs text-gray-500 mt-4">
              Enable Edit Mode to adjust assumptions and see real-time impacts
            </p>
          )}
        </div>
      </div>
      
      {/* Share Modal */}
      <Modal
        isOpen={showShareModal}
        onClose={() => setShowShareModal(false)}
        title="Share Dashboard"
        size="md"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left">
              <FileText className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-sm font-medium text-gray-100">Export to PDF</div>
              <div className="text-xs text-gray-500 mt-1">
                Static report with all charts
              </div>
            </button>
            
            <button className="p-4 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-left">
              <Presentation className="w-6 h-6 text-blue-400 mb-2" />
              <div className="text-sm font-medium text-gray-100">Export to PowerPoint</div>
              <div className="text-xs text-gray-500 mt-1">
                Editable presentation deck
              </div>
            </button>
          </div>
          
          <div className="border-t border-gray-800 pt-4">
            <h4 className="text-sm font-medium text-gray-300 mb-3">Generate Live Link</h4>
            
            <div className="space-y-2">
              <label className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-750">
                <input type="radio" name="permission" defaultChecked className="text-blue-600" />
                <div>
                  <div className="text-sm text-gray-100">View Only</div>
                  <div className="text-xs text-gray-500">Recipients can only view the dashboard</div>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-750">
                <input type="radio" name="permission" className="text-blue-600" />
                <div>
                  <div className="text-sm text-gray-100">Can Comment</div>
                  <div className="text-xs text-gray-500">Recipients can add comments</div>
                </div>
              </label>
              
              <label className="flex items-center space-x-3 p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-750">
                <input type="radio" name="permission" className="text-blue-600" />
                <div>
                  <div className="text-sm text-gray-100">Can Edit Assumptions</div>
                  <div className="text-xs text-gray-500">
                    Recipients can adjust assumptions and see impacts
                  </div>
                </div>
              </label>
            </div>
            
            <Button variant="primary" className="w-full mt-4">
              Generate Link
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
