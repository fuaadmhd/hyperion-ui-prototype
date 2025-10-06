import { AlertTriangle, Info, CheckCircle } from 'lucide-react';

const auditIssues = [
  {
    type: 'warning',
    icon: AlertTriangle,
    color: 'text-yellow-400',
    bgColor: 'bg-yellow-500/10',
    borderColor: 'border-yellow-500/30',
    title: 'Hard-Coded Value Detected',
    description: "Found hard-coded value in 'CapEx Forecast' node. Consider using a variable or assumption.",
    node: 'CapEx Forecast',
  },
  {
    type: 'info',
    icon: Info,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    title: 'Terminal Growth Rate Review',
    description: 'Terminal growth rate of 4.5% exceeds risk-free rate. Consider revision based on current market conditions.',
    node: 'DCF Valuation',
  },
  {
    type: 'success',
    icon: CheckCircle,
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    title: 'Best Practices',
    description: 'Model structure follows financial modeling best practices with proper data flow and calculations.',
    node: null,
  },
];

export default function AuditPanel() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">AI Audit Results</h3>
        <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded border border-green-500/30">
          3 Issues Found
        </span>
      </div>
      
      <div className="space-y-3">
        {auditIssues.map((issue, index) => {
          const Icon = issue.icon;
          
          return (
            <div
              key={index}
              className={`p-3 rounded-lg border ${issue.bgColor} ${issue.borderColor}`}
            >
              <div className="flex items-start space-x-3">
                <Icon className={`w-5 h-5 flex-shrink-0 ${issue.color}`} />
                
                <div className="flex-1 min-w-0">
                  <h4 className={`text-sm font-medium ${issue.color}`}>
                    {issue.title}
                  </h4>
                  <p className="text-sm text-gray-400 mt-1">
                    {issue.description}
                  </p>
                  
                  {issue.node && (
                    <div className="mt-2">
                      <span className="text-xs text-gray-500">
                        Node: <span className="text-gray-400 font-mono">{issue.node}</span>
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="pt-3 border-t border-gray-800">
        <p className="text-xs text-gray-500">
          Last audit: 2 minutes ago • Auto-audit on save
        </p>
      </div>
    </div>
  );
}
