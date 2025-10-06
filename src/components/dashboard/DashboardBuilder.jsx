import { useState, useMemo } from 'react';
import { Share, Edit, Eye, FileText, Presentation } from 'lucide-react';
import Button from '../common/Button';
import Modal from '../common/Modal';
import KPICard from './KPICard';
import { RevenueChart, SegmentChart, SensitivityTable, EBITDAChart, FCFChart } from './ChartComponents';
import mockScenarios from '../../data/mockScenarios.json';

export default function DashboardBuilder() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [selectedScenario, setSelectedScenario] = useState('base-case');
  const [wacc, setWacc] = useState(9.2);
  const [revenueGrowth, setRevenueGrowth] = useState(15);
  
  // Get current scenario data
  const currentScenario = useMemo(() => {
    return mockScenarios.scenarios.find(s => s.id === selectedScenario) || mockScenarios.scenarios[0];
  }, [selectedScenario]);
  
  // Calculate dynamic KPIs based on assumptions
  const dynamicKPIs = useMemo(() => {
    const baseRevenue = 5.2;
    const baseEBITDA = 1.664;
    const baseFCF = 1.04;
    
    // Apply growth rate adjustments
    const growthFactor = revenueGrowth / 15; // 15% is base
    
    const adjustedRevenue = baseRevenue * (1 + (growthFactor - 1) * 0.3);
    const adjustedEBITDA = baseEBITDA * (1 + (growthFactor - 1) * 0.35);
    const adjustedFCF = baseFCF * (1 + (growthFactor - 1) * 0.4);
    
    return {
      revenue: adjustedRevenue,
      ebitda: adjustedEBITDA,
      fcf: adjustedFCF,
      revenueChange: ((adjustedRevenue / baseRevenue - 1) * 100).toFixed(1),
      ebitdaChange: ((adjustedEBITDA / baseEBITDA - 1) * 100).toFixed(1),
      fcfChange: ((adjustedFCF / baseFCF - 1) * 100).toFixed(1)
    };
  }, [revenueGrowth]);
  
  const handleWaccChange = (e) => {
    setWacc(parseFloat(e.target.value));
  };
  
  const handleGrowthChange = (e) => {
    setRevenueGrowth(parseFloat(e.target.value));
  };
  
  const handleScenarioChange = (e) => {
    const scenarioId = e.target.value;
    setSelectedScenario(scenarioId);
    const scenario = mockScenarios.scenarios.find(s => s.id === scenarioId);
    if (scenario) {
      setWacc(scenario.assumptions.wacc * 100);
      setRevenueGrowth(scenario.assumptions.revenueGrowth * 100);
    }
  };
  
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
        
        {/* Scenario Selector */}
        <div className="mb-4">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-sm font-medium text-gray-400 mr-3">Scenario:</label>
                <select 
                  value={selectedScenario}
                  onChange={handleScenarioChange}
                  className="bg-gray-800 text-gray-100 rounded px-3 py-2 text-sm border border-gray-700 focus:border-blue-500 focus:outline-none"
                >
                  {mockScenarios.scenarios.map(scenario => (
                    <option key={scenario.id} value={scenario.id}>
                      {scenario.name}
                    </option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-gray-500">{currentScenario.description}</p>
            </div>
          </div>
        </div>
        
        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <KPICard
            title="Revenue (Q4 2024)"
            value={`$${dynamicKPIs.revenue.toFixed(1)}M`}
            change={`${dynamicKPIs.revenueChange > 0 ? '+' : ''}${dynamicKPIs.revenueChange}%`}
            trend={dynamicKPIs.revenueChange >= 0 ? 'up' : 'down'}
          />
          <KPICard
            title="EBITDA"
            value={`$${dynamicKPIs.ebitda.toFixed(1)}M`}
            change={`${dynamicKPIs.ebitdaChange > 0 ? '+' : ''}${dynamicKPIs.ebitdaChange}%`}
            trend={dynamicKPIs.ebitdaChange >= 0 ? 'up' : 'down'}
          />
          <KPICard
            title="EBITDA Margin"
            value="32%"
            change="+2%"
            trend="up"
          />
          <KPICard
            title="Free Cash Flow"
            value={`$${dynamicKPIs.fcf.toFixed(1)}M`}
            change={`${dynamicKPIs.fcfChange > 0 ? '+' : ''}${dynamicKPIs.fcfChange}%`}
            trend={dynamicKPIs.fcfChange >= 0 ? 'up' : 'down'}
          />
        </div>
        
        {/* Charts */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <RevenueChart />
          <SegmentChart />
        </div>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <EBITDAChart />
          <FCFChart />
        </div>
        
        {/* Sensitivity Table */}
        <div className="mb-6">
          <SensitivityTable wacc={wacc} growth={revenueGrowth / 5} />
        </div>
        
        {/* Interactive Assumption Slider */}
        <div className="card">
          <h3 className="text-sm font-medium text-gray-300 mb-4">
            Interactive Assumptions (Decision-Maker View)
          </h3>
          
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-400">WACC (Weighted Average Cost of Capital)</label>
                <span className={`text-sm font-mono ${isEditMode ? 'text-green-400' : 'text-blue-400'}`}>
                  {wacc.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="7"
                max="12"
                step="0.1"
                value={wacc}
                onChange={handleWaccChange}
                onInput={handleWaccChange}
                className="w-full"
                disabled={!isEditMode}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>7% (Aggressive)</span>
                <span>9.2% (Base)</span>
                <span>12% (Conservative)</span>
              </div>
              {isEditMode && (
                <p className="text-xs text-gray-500 mt-2">
                  Lower WACC increases valuation. Industry range: 7-12%
                </p>
              )}
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm text-gray-400">Revenue Growth Rate (Annual)</label>
                <span className={`text-sm font-mono ${isEditMode ? 'text-green-400' : 'text-blue-400'}`}>
                  {revenueGrowth.toFixed(0)}%
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="1"
                value={revenueGrowth}
                onChange={handleGrowthChange}
                onInput={handleGrowthChange}
                className="w-full"
                disabled={!isEditMode}
              />
              <div className="flex justify-between text-xs text-gray-600 mt-1">
                <span>5% (Slow)</span>
                <span>15% (Base)</span>
                <span>30% (High Growth)</span>
              </div>
              {isEditMode && (
                <p className="text-xs text-gray-500 mt-2">
                  Higher growth increases future revenue and valuation
                </p>
              )}
            </div>
            
            {isEditMode && (
              <div className="p-3 bg-blue-600/10 border border-blue-600/30 rounded-lg">
                <h4 className="text-sm font-medium text-blue-400 mb-2">Real-time Impact</h4>
                <div className="space-y-1 text-xs text-gray-400">
                  <div className="flex justify-between">
                    <span>Valuation Adjustment:</span>
                    <span className="text-green-400 font-mono">
                      {((dynamicKPIs.revenue / 5.2 - 1) * 100).toFixed(1)}%
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Enterprise Value Estimate:</span>
                    <span className="text-blue-400 font-mono">
                      ${(currentScenario.valuation.enterpriseValue / 1000000 * (dynamicKPIs.revenue / 5.2)).toFixed(0)}M
                    </span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          {!isEditMode && (
            <p className="text-xs text-gray-500 mt-4">
              💡 Enable Edit Mode to adjust assumptions and see real-time impacts on KPIs and valuation
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
