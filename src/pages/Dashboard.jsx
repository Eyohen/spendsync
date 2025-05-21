// src/pages/Dashboard.jsx
import React,{ useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';
import { useAuth } from '../context/AuthContext';



const Dashboard = () => {
    const { user, logout } = useAuth();

    console.log("layout user", user)
  // Mock data for the dashboard
  const stats = [
    { title: "Total Emails Sent", value: "125,492", change: "+12.3%" },
    { title: "Delivery Rate", value: "99.2%", change: "+0.5%" },
    { title: "Open Rate", value: "32.7%", change: "-1.2%" },
    { title: "API Calls", value: "3.2M", change: "+8.7%" }
  ];

  const recentEmails = [
    { id: 1, campaign: "Welcome Series", sent: 2150, delivered: 2142, opened: 1254, date: "1h ago" },
    { id: 2, campaign: "March Newsletter", sent: 8750, delivered: 8731, opened: 3245, date: "6h ago" },
    { id: 3, campaign: "Product Update", sent: 5320, delivered: 5298, opened: 2187, date: "1d ago" },
    { id: 4, campaign: "Promo Code", sent: 4250, delivered: 4231, opened: 1876, date: "2d ago" }
  ];

  return (
    <>
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-sm font-medium text-gray-500">{stat.title}</h3>
            <div className="flex items-end mt-2 justify-between">
              <span className="text-2xl font-bold">{stat.value}</span>
              <span className={`text-sm ${stat.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                {stat.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Email Activity Chart Placeholder */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Email Activity</h2>
          <select className="border border-gray-300 rounded-md px-2 py-1 text-sm">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
        <div className="bg-gray-100 rounded-md h-64 flex items-center justify-center">
          <p className="text-gray-500">Email activity chart will display here</p>
        </div>
      </div>

      {/* Recent Email Campaigns */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">Recent Email Campaigns</h2>
          <Link 
            to="/campaigns"
            className="text-sm text-black border border-gray-300 hover:bg-gray-100 px-3 py-1 rounded-md"
          >
            View All
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b border-gray-200">
                <th className="pb-3 font-medium">Campaign</th>
                <th className="pb-3 font-medium">Sent</th>
                <th className="pb-3 font-medium">Delivered</th>
                <th className="pb-3 font-medium">Opened</th>
                <th className="pb-3 font-medium">When</th>
                <th className="pb-3 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {recentEmails.map(email => (
                <tr key={email.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-4">{email.campaign}</td>
                  <td className="py-4">{email.sent.toLocaleString()}</td>
                  <td className="py-4">{email.delivered.toLocaleString()}</td>
                  <td className="py-4">
                    {email.opened.toLocaleString()} ({Math.round(email.opened / email.delivered * 100)}%)
                  </td>
                  <td className="py-4 text-gray-500">{email.date}</td>
                  <td className="py-4">
                    <button className="text-black hover:underline">Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;