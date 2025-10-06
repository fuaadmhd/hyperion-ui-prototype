export default function GridView() {
  const sampleData = [
    { period: 'Q1 2024', revenue: 4300000, ebitda: 1376000, margin: 0.32, fcf: 860000 },
    { period: 'Q2 2024', revenue: 4650000, ebitda: 1488000, margin: 0.32, fcf: 930000 },
    { period: 'Q3 2024', revenue: 4950000, ebitda: 1584000, margin: 0.32, fcf: 990000 },
    { period: 'Q4 2024', revenue: 5200000, ebitda: 1664000, margin: 0.32, fcf: 1040000 },
    { period: 'Q1 2025', revenue: 5500000, ebitda: 1760000, margin: 0.32, fcf: 1100000 },
    { period: 'Q2 2025', revenue: 5850000, ebitda: 1872000, margin: 0.32, fcf: 1170000 },
  ];
  
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(value);
  };
  
  const formatPercent = (value) => {
    return (value * 100).toFixed(1) + '%';
  };
  
  return (
    <div className="flex-1 bg-gray-950 overflow-auto p-6">
      <div className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden">
        <div className="p-4 border-b border-gray-800">
          <h3 className="font-medium text-gray-100">Financial Data Grid</h3>
          <p className="text-sm text-gray-400 mt-1">
            Spreadsheet view of selected node data
          </p>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-800">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">
                  Period
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-300">
                  Revenue
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-300">
                  EBITDA
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-300">
                  Margin
                </th>
                <th className="px-4 py-3 text-right text-sm font-medium text-gray-300">
                  FCF
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {sampleData.map((row, index) => (
                <tr key={index} className="hover:bg-gray-800/50 transition-colors">
                  <td className="px-4 py-3 text-sm text-gray-300">{row.period}</td>
                  <td className="px-4 py-3 text-sm text-gray-100 text-right font-mono">
                    {formatCurrency(row.revenue)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-100 text-right font-mono">
                    {formatCurrency(row.ebitda)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-100 text-right font-mono">
                    {formatPercent(row.margin)}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-100 text-right font-mono">
                    {formatCurrency(row.fcf)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="p-4 border-t border-gray-800 bg-gray-800/50">
          <p className="text-xs text-gray-500">
            In a functional version, this grid would allow cell editing and formula management.
          </p>
        </div>
      </div>
    </div>
  );
}
