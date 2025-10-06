import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';
import mockFinancialData from '../../data/mockFinancialData.json';
import mockSegments from '../../data/mockSegments.json';

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
  const data = mockSegments.segments.map(segment => ({
    segment: segment.name,
    revenue: segment.revenue.current / 1000000,
    growth: segment.growthRate * 100,
    customers: segment.customers
  }));
  
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
            formatter={(value, name) => {
              if (name === 'Revenue ($M)') return [`$${value.toFixed(1)}M`, name];
              if (name === 'Growth (%)') return [`${value.toFixed(1)}%`, name];
              return [value, name];
            }}
          />
          <Legend />
          <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($M)" />
          <Bar dataKey="growth" fill="#10b981" name="Growth (%)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function EBITDAChart() {
  const data = [
    ...mockFinancialData.ebitda.historical.map(d => ({
      quarter: d.quarter,
      ebitda: d.value / 1000000,
      margin: d.margin * 100,
      type: 'Historical'
    })),
    ...mockFinancialData.ebitda.forecast.map(d => ({
      quarter: d.quarter,
      ebitda: d.value / 1000000,
      margin: d.margin * 100,
      type: 'Forecast'
    }))
  ];
  
  return (
    <div className="card">
      <h3 className="text-sm font-medium text-gray-300 mb-4">EBITDA & Margin Trend</h3>
      <ResponsiveContainer width="100%" height={300}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
          <XAxis dataKey="quarter" stroke="#9ca3af" fontSize={12} />
          <YAxis yAxisId="left" stroke="#9ca3af" fontSize={12} />
          <YAxis yAxisId="right" orientation="right" stroke="#9ca3af" fontSize={12} />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              border: '1px solid #374151',
              borderRadius: '0.5rem',
              color: '#f3f4f6',
            }}
            formatter={(value, name) => {
              if (name === 'EBITDA ($M)') return [`$${value.toFixed(1)}M`, name];
              if (name === 'Margin (%)') return [`${value.toFixed(1)}%`, name];
              return [value, name];
            }}
          />
          <Legend />
          <Bar yAxisId="left" dataKey="ebitda" fill="#8b5cf6" name="EBITDA ($M)" />
          <Line yAxisId="right" type="monotone" dataKey="margin" stroke="#f59e0b" strokeWidth={2} name="Margin (%)" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}

export function FCFChart() {
  const data = [
    ...mockFinancialData.freeCashFlow.historical.map(d => ({
      quarter: d.quarter,
      fcf: d.value / 1000000,
      type: 'Historical'
    })),
    ...mockFinancialData.freeCashFlow.forecast.map(d => ({
      quarter: d.quarter,
      fcf: d.value / 1000000,
      type: 'Forecast'
    }))
  ];
  
  return (
    <div className="card">
      <h3 className="text-sm font-medium text-gray-300 mb-4">Free Cash Flow Trend</h3>
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
            formatter={(value) => [`$${value.toFixed(1)}M`, 'FCF']}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="fcf"
            stroke="#10b981"
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
            name="Free Cash Flow ($M)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SensitivityTable({ wacc = 9.2, growth = 3 }) {
  const waccRates = [7, 8, 9, 10, 11, 12];
  const growthRates = [2, 3, 4, 5, 6];
  
  const calculateValue = (w, g) => {
    const baseValue = 125;
    const waccImpact = (9 - w) * 8;
    const growthImpact = (g - 3) * 15;
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
            {waccRates.map(w => (
              <tr key={w} className="border-b border-gray-800">
                <td className="px-3 py-2 text-gray-400">{w}%</td>
                {growthRates.map(g => {
                  const value = calculateValue(w, g);
                  const isSelected = Math.abs(w - wacc) < 0.5 && g === Math.round(growth);
                  const isBase = w === 9 && g === 3;
                  return (
                    <td
                      key={`${w}-${g}`}
                      className={`px-3 py-2 text-center font-mono ${
                        isSelected
                          ? 'bg-green-600/20 text-green-400 font-bold ring-2 ring-green-500/50'
                          : isBase
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
