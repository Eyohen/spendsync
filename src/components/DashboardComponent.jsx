import { useState } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CreditCard, ArrowUpCircle, Users, Wallet, TrendingUp, Filter, MoreHorizontal } from 'lucide-react';

// Sample data for charts
const transactionData = [
  { name: 'Jan', amount: 4000 },
  { name: 'Feb', amount: 3000 },
  { name: 'Mar', amount: 5000 },
  { name: 'Apr', amount: 2780 },
  { name: 'May', amount: 1890 },
  { name: 'Jun', amount: 2390 },
  { name: 'Jul', amount: 3490 },
];

const categoryData = [
  { name: 'Transport', value: 35 },
  { name: 'Office', value: 25 },
  { name: 'Entertainment', value: 15 },
  { name: 'Utilities', value: 20 },
  { name: 'Others', value: 5 },
];

const recentTransactions = [
  {
    id: 1,
    name: 'Jane Doe',
    department: 'Sales',
    amount: 25000,
    date: '03 May, 2025',
    category: 'Transport',
    status: 'Completed'
  },
  {
    id: 2,
    name: 'John Smith',
    department: 'Operations',
    amount: 15000,
    date: '02 May, 2025',
    category: 'Office Supplies',
    status: 'Pending'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    department: 'Marketing',
    amount: 35000,
    date: '01 May, 2025',
    category: 'Client Entertainment',
    status: 'Completed'
  },
  {
    id: 4,
    name: 'Michael Brown',
    department: 'IT',
    amount: 12500,
    date: '30 Apr, 2025',
    category: 'Equipment',
    status: 'Declined'
  },
];

const formatCurrency = (value) => {
  return `₦${value.toLocaleString()}`;
};

const StatCard = ({ title, value, icon, change, changeType }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
        </div>
        <div className={`p-3 rounded-full ${title === 'Wallet Balance' ? 'bg-green-100 text-green-600' :
            title === 'Active Cards' ? 'bg-sky-100 text-sky-600' :
              title === 'Total Employees' ? 'bg-purple-100 text-purple-600' :
                'bg-amber-100 text-amber-600'
          }`}>
          {icon}
        </div>
      </div>
      <div className="mt-4 flex items-center">
        <span className={`text-sm font-medium ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
          {changeType === 'positive' ? '+' : '-'}{change}
        </span>
        <span className="text-sm text-gray-500 ml-2">vs last month</span>
      </div>
    </div>
  );
};

const DashboardComponent = () => {
  const [timeRange, setTimeRange] = useState('monthly');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700 flex items-center">
            <Filter size={16} className="mr-2" />
            Filter
          </button>
          <select
            className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-700"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Wallet Balance"
          value="₦4,500,000"
          icon={<Wallet size={24} />}
          change="12%"
          changeType="positive"
        />
        <StatCard
          title="Active Cards"
          value="24"
          icon={<CreditCard size={24} />}
          change="8%"
          changeType="positive"
        />
        <StatCard
          title="Total Employees"
          value="45"
          icon={<Users size={24} />}
          change="5%"
          changeType="positive"
        />
        <StatCard
          title="Monthly Spend"
          value="₦3,250,000"
          icon={<TrendingUp size={24} />}
          change="3%"
          changeType="negative"
        />
      </div>

      {/* Charts Row */}
      <div className="grid max-w-[1000px]">
        {/*  <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
         <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Transaction Overview</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={transactionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip
                formatter={(value) => formatCurrency(value)}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem'
                }}
              />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#0ea5e9"
                strokeWidth={2}
                activeDot={{ r: 6, fill: '#0ea5e9', stroke: 'white', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div> */}

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-800">Spending by Category</h2>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal size={20} />
            </button>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" horizontal={false} />
              <XAxis type="number" stroke="#9ca3af" />
              <YAxis
                dataKey="name"
                type="category"
                stroke="#9ca3af"
                width={100}
                tickLine={false}
                axisLine={false}
              />
              <Tooltip
                formatter={(value) => `${value}%`}
                contentStyle={{
                  backgroundColor: 'white',
                  border: '1px solid #e5e7eb',
                  borderRadius: '0.5rem'
                }}
              />
              <Bar
                dataKey="value"
                fill="#0ea5e9"
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100">
        <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">Recent Transactions</h2>
          <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentTransactions.map((transaction) => (
                <tr key={transaction.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-8 w-8 rounded-full bg-sky-100 flex items-center justify-center text-sky-600">
                        {transaction.name.charAt(0)}
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{transaction.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{formatCurrency(transaction.amount)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${transaction.status === 'Completed' ? 'bg-green-100 text-green-800' :
                        transaction.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                      }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button className="text-sky-600 hover:text-sky-800 mr-3">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;