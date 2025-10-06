import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import mockFinancialData from '../../data/mockFinancialData.json';

export function RevenueChart() {
  const data = [
    ...mockFinancialData.revenue.historical.map(d => ({
      quarter: d.quarter,
      value: d.value / 1000000,
      type: 'Historical'
    })),
    ...mockFinancialData.revenue.forecast.map(d => ({
      quarter: d.quarter,
      value: d.value / 1000000,
      type: 'Forecast'
    }))
  ];
  
  return (
    <div className="card">
      <h3 className="text-sm font-medium text-gray-300 mb-4">Quarterly Revenue Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="quarter" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#f3f4f6',
            }}
            formatter={(value) => [`$${value.toFixed(1)}M`, 'Revenue']}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#3b82f6"
            strokeWidth={2}
            dot={{ fill: '#3b82f6', r: 4 }}
            name="Revenue ($M)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SegmentChart() {
  const data = [
    { segment: 'Enterprise', revenue: 3.2, growth: 18 },
    { segment: 'SMB', revenue: 1.5, growth: 12 },
    { segment: 'Consumer', revenue: 0.5, growth: 8 },
  ];
  
  return (
    <div className="card">
      <h3 className="text-sm font-medium text-gray-300 mb-4">Segment Performance</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="segment" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#f3f4f6',
            }}
            formatter={(value) => [`$${value}M`, '']}
          />
          <Legend />
          <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($M)" />
          <Bar dataKey="growth" fill="#10b981" name="Growth (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SensitivityTable() {
  const waccRates = [7, 8, 9, 10, 11, 12];
  const growthRates = [2, 3, 4, 5, 6];
  
  const calculateValue = (wacc, growth) => {
    const baseValue = 125;
    const waccImpact = (9 - wacc) * 8;
    const growthImpact = (growth - 3) * 15;
    return baseValue + waccImpact + growthImpact;
  };
  
  return (
    <div className="card">
      <h3 className="text-sm font-medium text-gray-300 mb-4">
        Sensitivity Analysis: Valuation vs WACC & Growth Rate
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="px-3 py-2 text-left text-gray-400">WACC \ Growth</th>
              {growthRates.map(rate => (
                <th key={rate} className="px-3 py-2 text-center text-gray-400">
                  {rate}%
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {waccRates.map(wacc => (
              <tr key={wacc} className="border-b border-gray-800">
                <td className="px-3 py-2 text-gray-400">{wacc}%</td>
                {growthRates.map(growth => {
                  const value = calculateValue(wacc, growth);
                  const isBase = wacc === 9 && growth === 3;
                  return (
                    <td
                      key={`${wacc}-${growth}`}
                      className={`px-3 py-2 text-center font-mono ${
                        isBase
                          ? 'bg-blue-600/20 text-blue-400 font-bold'
                          : 'text-gray-300'
                      }`}
                    >
                      ${value.toFixed(0)}M
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
