// src/pages/Analytics.jsx
import React, { useState } from 'react';
import { 
  Download, 
  Eye, 
  MousePointer, 
  RefreshCw, 
  Calendar, 
  ArrowUp, 
  ArrowDown,
  Users,
  Mail,
  Clock
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('3months');
  
  // Mock data for analytics
  const emailMetrics = {
    summary: [
      { title: "Average Open Rate", value: "32.7%", change: "-1.2%", icon: <Eye size={20} /> },
      { title: "Average Click Rate", value: "5.9%", change: "+0.2%", icon: <MousePointer size={20} /> },
      { title: "Average Bounce Rate", value: "0.7%", change: "-0.2%", icon: <RefreshCw size={20} /> }
    ],
    monthlyData: [
      { name: 'Jan', sent: 42500, opened: 13600, clicked: 7650, bounced: 340 },
      { name: 'Feb', sent: 44200, opened: 14800, clicked: 8100, bounced: 310 },
      { name: 'Mar', sent: 48750, opened: 15950, clicked: 9150, bounced: 340 }
    ],
    hourlyPerformance: [
      { hour: '12am', rate: 22.4 },
      { hour: '2am', rate: 21.1 },
      { hour: '4am', rate: 20.8 },
      { hour: '6am', rate: 25.3 },
      { hour: '8am', rate: 31.2 },
      { hour: '10am', rate: 36.5 },
      { hour: '12pm', rate: 42.7 },
      { hour: '2pm', rate: 43.8 },
      { hour: '4pm', rate: 40.1 },
      { hour: '6pm', rate: 35.6 },
      { hour: '8pm', rate: 30.2 },
      { hour: '10pm', rate: 24.5 }
    ],
    deviceBreakdown: [
      { name: 'Mobile', value: 58 },
      { name: 'Desktop', value: 32 },
      { name: 'Tablet', value: 10 }
    ],
    topPerformers: [
      { name: "Welcome Series", sent: 2150, openRate: 68.5, clickRate: 42.3 },
      { name: "March Newsletter", sent: 8750, openRate: 37.8, clickRate: 12.5 },
      { name: "Product Update", sent: 5320, openRate: 41.2, clickRate: 18.4 },
      { name: "Promo Code", sent: 4250, openRate: 44.1, clickRate: 23.7 },
      { name: "Weekly Digest", sent: 3680, openRate: 35.2, clickRate: 14.3 }
    ],
    growthMetrics: [
      { name: 'Jan', subscribers: 18450, unsubscribed: 145 },
      { name: 'Feb', subscribers: 19250, unsubscribed: 156 },
      { name: 'Mar', subscribers: 20120, unsubscribed: 162 }
    ]
  };

  // Colors for charts
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  // Format percentage values
  const formatPercent = (value) => `${value}%`;

  return (
    <>
      {/* Time Period Selector */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Email Performance Analytics</h2>
        <div className="flex gap-2">
          <select 
            className="border border-gray-300 rounded-md px-3 py-1.5 text-sm"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="3months">Last 3 months</option>
            <option value="6months">Last 6 months</option>
            <option value="12months">Last 12 months</option>
            <option value="custom">Custom range</option>
          </select>
          <button className="p-1.5 text-gray-500 border border-gray-300 rounded-md hover:bg-gray-50 flex items-center">
            <Download size={18} />
          </button>
        </div>
      </div>
      
      {/* Key Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {emailMetrics.summary.map((metric, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-sm font-medium text-gray-500">{metric.title}</h3>
                <div className="flex items-end mt-2">
                  <span className="text-2xl font-bold">{metric.value}</span>
                  <span className={`ml-2 text-sm ${metric.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
              <div className="p-2 bg-gray-100 rounded-md">
                {metric.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Charts - 2 column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Open & Click Rates Over Time */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium mb-4">Open & Click Rates Over Time</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={emailMetrics.monthlyData}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => `${value.toLocaleString()}`} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="opened" 
                  name="Opened" 
                  stroke="#0088FE" 
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="clicked" 
                  name="Clicked" 
                  stroke="#00C49F" 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Hourly Open Rate Performance */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium mb-4">Hourly Open Rate Performance</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={emailMetrics.hourlyPerformance}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="hour" />
                <YAxis tickFormatter={formatPercent} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Bar dataKey="rate" name="Open Rate" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Additional Analytics - 2 column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Device Breakdown */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-base font-medium mb-4">Device Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={emailMetrics.deviceBreakdown}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {emailMetrics.deviceBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        {/* Subscriber Growth */}
        <div className="bg-white rounded-lg shadow-sm p-6 col-span-2">
          <h3 className="text-base font-medium mb-4">Subscriber Growth</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={emailMetrics.growthMetrics}
                margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => value.toLocaleString()} />
                <Legend />
                <Bar dataKey="subscribers" name="New Subscribers" fill="#0088FE" />
                <Bar dataKey="unsubscribed" name="Unsubscribed" fill="#FF8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      {/* Campaign Insights */}
      <div className="grid grid-cols-1 gap-6 mb-8">
        {/* Top Performing Campaigns */}
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
                {emailMetrics.topPerformers.map((campaign, idx) => (
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
      </div>
      
      {/* Analytics Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            title: "Best Sending Time",
            icon: <Clock size={20} />,
            value: "2PM - 4PM",
            insight: "Emails sent during this time have 43% higher open rates"
          },
          {
            title: "Most Engaged Audience",
            icon: <Users size={20} />,
            value: "New Subscribers",
            insight: "First 30 days subscribers open 62% of emails"
          },
          {
            title: "Best Performing Subject",
            icon: <Mail size={20} />,
            value: "Personalized",
            insight: "Personalized subjects see 27% higher engagement"
          }
        ].map((insight, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-sm p-6 border-t-4 border-black">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-base font-medium">{insight.title}</h3>
              <div className="p-2 bg-gray-100 rounded-md">
                {insight.icon}
              </div>
            </div>
            <div className="text-2xl font-bold mb-2">{insight.value}</div>
            <p className="text-sm text-gray-600">{insight.insight}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Analytics;