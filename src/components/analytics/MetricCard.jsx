// src/components/analytics/MetricCard.jsx
import React from 'react';

const MetricCard = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="flex items-end mt-2">
            <span className="text-2xl font-bold">{value}</span>
            {change && (
              <span className={`ml-2 text-sm ${change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {change}
              </span>
            )}
          </div>
        </div>
        <div className="p-2 bg-gray-100 rounded-md">
          {icon}
        </div>
      </div>
    </div>
  );
};

// src/components/analytics/LineChartCard.jsx
import React from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const LineChartCard = ({ title, data, lines, height = 300 }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-base font-medium mb-4">{title}</h3>
      <div style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip formatter={(value) => `${value.toLocaleString()}`} />
            <Legend />
            {lines.map((line, index) => (
              <Line 
                key={index}
                type="monotone" 
                dataKey={line.dataKey} 
                name={line.name} 
                stroke={line.color} 
                activeDot={{ r: 8 }} 
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// src/components/analytics/BarChartCard.jsx
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const BarChartCard = ({ title, data, bars, formatYAxis, formatTooltip, height = 300 }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-base font-medium mb-4">{title}</h3>
      <div style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={formatYAxis} />
            <Tooltip formatter={formatTooltip || ((value) => value.toLocaleString())} />
            <Legend />
            {bars.map((bar, index) => (
              <Bar 
                key={index}
                dataKey={bar.dataKey} 
                name={bar.name} 
                fill={bar.color} 
              />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// src/components/analytics/PieChartCard.jsx
import React from 'react';
import { 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const PieChartCard = ({ title, data, dataKey, nameKey, colors, height = 300 }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-base font-medium mb-4">{title}</h3>
      <div style={{ height: `${height}px` }}>
        <ResponsiveContainer width="100%" height="100%">
          <RechartsPieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={80}
              fill="#8884d8"
              dataKey={dataKey}
              nameKey={nameKey}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${value}%`} />
            <Legend />
          </RechartsPieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

// src/components/analytics/InsightCard.jsx
import React from 'react';

const InsightCard = ({ title, icon, value, insight }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-black">
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-base font-medium">{title}</h3>
        <div className="p-2 bg-gray-100 rounded-md">
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold mb-2">{value}</div>
      <p className="text-sm text-gray-600">{insight}</p>
    </div>
  );
};

// src/components/analytics/CampaignPerformanceTable.jsx
import React from 'react';

const CampaignPerformanceTable = ({ campaigns }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-medium">Top Performing Campaigns</h3>
        <button className="text-sm text-black border border-gray-300 hover:bg-gray-100 px-3 py-1 rounded-md">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-500 border-b border-gray-200">
              <th className="pb-3 font-medium">Campaign</th>
              <th className="pb-3 font-medium text-right">Emails Sent</th>
              <th className="pb-3 font-medium text-right">Open Rate</th>
              <th className="pb-3 font-medium text-right">Click Rate</th>
              <th className="pb-3 font-medium text-right">Performance</th>
            </tr>
          </thead>
          <tbody>
            {campaigns.map((campaign, idx) => (
              <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 font-medium">{campaign.name}</td>
                <td className="py-4 text-right">{campaign.sent.toLocaleString()}</td>
                <td className="py-4 text-right">{campaign.openRate}%</td>
                <td className="py-4 text-right">{campaign.clickRate}%</td>
                <td className="py-4 text-right">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    campaign.openRate > 40 ? 'bg-green-100 text-green-800' :
                    campaign.openRate > 30 ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {campaign.openRate > 40 ? 'Excellent' :
                     campaign.openRate > 30 ? 'Good' : 'Average'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { 
  MetricCard, 
  LineChartCard, 
  BarChartCard, 
  PieChartCard, 
  InsightCard, 
  CampaignPerformanceTable 
};