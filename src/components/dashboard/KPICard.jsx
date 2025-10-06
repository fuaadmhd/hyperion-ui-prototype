import { TrendingUp, TrendingDown } from 'lucide-react';

export default function KPICard({ title, value, change, trend, icon: Icon }) {
  const isPositive = trend === 'up';
  
  return (
    <div className="card">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-gray-400">{title}</span>
        {Icon && <Icon className="w-5 h-5 text-gray-500" />}
      </div>
      
      <div className="flex items-end justify-between">
        <div>
          <div className="text-2xl font-bold text-gray-100">{value}</div>
          {change && (
            <div className="flex items-center space-x-1 mt-2">
              {isPositive ? (
                <TrendingUp className="w-4 h-4 text-green-400" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-400" />
              )}
              <span
                className={`text-sm ${
                  isPositive ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {change}
              </span>
              <span className="text-sm text-gray-500">vs last quarter</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
