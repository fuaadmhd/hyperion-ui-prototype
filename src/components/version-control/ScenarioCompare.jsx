import { TrendingUp, TrendingDown } from 'lucide-react';

const comparisonData = [
  {
    metric: 'Enterprise Value',
    baseCase: 125000000,
    aggressive: 185000000,
    unit: 'currency',
  },
  {
    metric: 'Revenue Growth',
    baseCase: 0.15,
    aggressive: 0.25,
    unit: 'percent',
  },
  {
    metric: 'EBITDA Margin',
    baseCase: 0.32,
    aggressive: 0.35,
    unit: 'percent',
  },
  {
    metric: 'WACC',
    baseCase: 0.092,
    aggressive: 0.085,
    unit: 'percent',
  },
];

export default function ScenarioCompare() {
  const formatValue = (value, unit) => {
    if (unit === 'currency') {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
      }).format(value);
    } else if (unit === 'percent') {
      return (value * 100).toFixed(1) + '%';
    }
    return value;
  };
  
  const calculateVariance = (base, comparison) => {
    const variance = ((comparison - base) / base) * 100;
    return variance;
  };
  
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-300">Scenario Comparison</h3>
        <div className="flex items-center space-x-2">
          <select className="input text-xs py-1">
            <option>Base Case</option>
            <option>Recession Scenario</option>
          </select>
          <span className="text-gray-500">vs</span>
          <select className="input text-xs py-1">
            <option>Aggressive Growth</option>
            <option>High Interest Rate</option>
          </select>
        </div>
      </div>
      
      <div className="bg-gray-800 rounded-lg overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-900">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-medium text-gray-400">
                Metric
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-400">
                Base Case
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-400">
                Aggressive
              </th>
              <th className="px-4 py-3 text-right text-xs font-medium text-gray-400">
                Variance
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {comparisonData.map((row, index) => {
              const variance = calculateVariance(row.baseCase, row.aggressive);
              const isPositive = variance > 0;
              
              return (
                <tr key={index} className="hover:bg-gray-750">
                  <td className="px-4 py-3 text-sm text-gray-300">{row.metric}</td>
                  <td className="px-4 py-3 text-sm text-gray-100 text-right font-mono">
                    {formatValue(row.baseCase, row.unit)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-100 text-right font-mono">
                    {formatValue(row.aggressive, row.unit)}
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <div className="flex items-center justify-end space-x-1">
                      {isPositive ? (
                        <TrendingUp className="w-3 h-3 text-green-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-400" />
                      )}
                      <span
                        className={isPositive ? 'text-green-400' : 'text-red-400'}
                      >
                        {Math.abs(variance).toFixed(1)}%
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
