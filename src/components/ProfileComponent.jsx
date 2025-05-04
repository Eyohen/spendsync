import { useState } from 'react';
import { Mail, Phone, Edit, Camera, Building, Calendar, FileText, CreditCard, Activity } from 'lucide-react';

const ProfileComponent = () => {
  // Sample user data
  const [userData, setUserData] = useState({
    name: 'John Adebayo',
    email: 'john.adebayo@alaralogistics.com',
    phone: '+234 801 234 5678',
    role: 'Finance Manager',
    company: 'Alara Logistics',
    address: '15 Broad Street, Lagos Island, Lagos',
    joinDate: '2022-06-15',
    department: 'Finance',
    bio: 'Experienced finance professional with a focus on optimizing company expenditure and streamlining financial processes.'
  });
  
  // Sample recent activity data
  const recentActivity = [
    {
      id: 1,
      type: 'transaction',
      description: 'Approved transaction for Jane Doe',
      amount: 25000,
      date: '2025-05-03T14:32:00'
    },
    {
      id: 2,
      type: 'card',
      description: 'Issued new card for Michael Brown',
      date: '2025-05-02T10:15:00'
    },
    {
      id: 3,
      type: 'wallet',
      description: 'Topped up company wallet',
      amount: 500000,
      date: '2025-05-01T16:45:00'
    },
    {
      id: 4,
      type: 'transaction',
      description: 'Declined transaction for David Wilson',
      amount: 75000,
      date: '2025-04-30T11:20:00'
    },
    {
      id: 5,
      type: 'settings',
      description: 'Updated company information',
      date: '2025-04-29T09:10:00'
    }
  ];
  
  // Format date to readable string
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-NG', options);
  };
  
  // Format datetime to readable string
  const formatDateTime = (dateTimeString) => {
    const options = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateTimeString).toLocaleDateString('en-NG', options);
  };
  
  // Format currency
  const formatCurrency = (value) => {
    return `₦${value.toLocaleString()}`;
  };
  
  // Get activity icon based on type
  const getActivityIcon = (type) => {
    switch (type) {
      case 'transaction':
        return <FileText size={18} className="text-blue-500" />;
      case 'card':
        return <CreditCard size={18} className="text-green-500" />;
      case 'wallet':
        return <CreditCard size={18} className="text-purple-500" />;
      case 'settings':
        return <Edit size={18} className="text-orange-500" />;
      default:
        return <Activity size={18} className="text-gray-500" />;
    }
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Profile</h1>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-sky-600 to-sky-400 h-24 relative">
              <button className="absolute bottom-0 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white bg-opacity-80 text-sky-600 transform translate-y-1/2">
                <Camera size={16} />
              </button>
            </div>
            
            <div className="pt-8 pb-6 px-6 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 border-4 border-white text-3xl font-bold">
                  {userData.name.charAt(0)}
                </div>
              </div>
              
              <h2 className="text-xl font-bold text-gray-800 mt-2">{userData.name}</h2>
              <p className="text-gray-500">{userData.role}</p>
              
              <button className="mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center justify-center mx-auto">
                <Edit size={16} className="mr-2" />
                Edit Profile
              </button>
            </div>
            
            <div className="px-6 pb-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium text-gray-900">{userData.email}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Phone</p>
                    <p className="font-medium text-gray-900">{userData.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 flex-shrink-0">
                    <Building size={16} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Company</p>
                    <p className="font-medium text-gray-900">{userData.company}</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-sky-100 text-sky-600 flex-shrink-0">
                    <Calendar size={16} />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-500">Joined</p>
                    <p className="font-medium text-gray-900">{formatDate(userData.joinDate)}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="font-medium text-gray-900 mb-2">About</h3>
                <p className="text-gray-600 text-sm">{userData.bio}</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recent Activity and Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Total Transactions</p>
                  <h3 className="text-xl font-bold mt-1">235</h3>
                </div>
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <FileText size={20} />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Cards Managed</p>
                  <h3 className="text-xl font-bold mt-1">18</h3>
                </div>
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <CreditCard size={20} />
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">Approved Amount</p>
                  <h3 className="text-xl font-bold mt-1">{formatCurrency(2850000)}</h3>
                </div>
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <Activity size={20} />
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Activity */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Recent Activity</h2>
            </div>
            
            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex items-start">
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 flex-shrink-0">
                      {getActivityIcon(activity.type)}
                    </div>
                    <div className="ml-3 flex-1">
                      <div className="flex items-center justify-between">
                        <p className="font-medium text-gray-900">{activity.description}</p>
                        <span className="text-sm text-gray-500">{formatDateTime(activity.date)}</span>
                      </div>
                      {activity.amount && (
                        <p className="text-sm text-gray-600 mt-1">{formatCurrency(activity.amount)}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="px-6 py-4 border-t border-gray-100 text-center">
              <button className="text-sky-600 hover:text-sky-700 text-sm font-medium">
                View All Activity
              </button>
            </div>
          </div>
          
          {/* Account Information */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Account Information</h2>
            </div>
            
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Full Name</h3>
                  <p className="text-gray-900">{userData.name}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Email Address</h3>
                  <p className="text-gray-900">{userData.email}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Phone Number</h3>
                  <p className="text-gray-900">{userData.phone}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Job Title</h3>
                  <p className="text-gray-900">{userData.role}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Department</h3>
                  <p className="text-gray-900">{userData.department}</p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Joined Date</h3>
                  <p className="text-gray-900">{formatDate(userData.joinDate)}</p>
                </div>
                
                <div className="md:col-span-2">
                  <h3 className="text-sm font-medium text-gray-500 mb-2">Address</h3>
                  <p className="text-gray-900">{userData.address}</p>
                </div>
              </div>
              
              <div className="mt-6 flex justify-end">
                <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center">
                  <Edit size={16} className="mr-2" />
                  Edit Information
                </button>
              </div>
            </div>
          </div>
          
          {/* Permissions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-800">Account Permissions</h2>
            </div>
            
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">Manage Transactions</h3>
                    <p className="text-sm text-gray-500">Approve, decline, and manage all transactions</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Granted
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">Manage Cards</h3>
                    <p className="text-sm text-gray-500">Create, edit, and deactivate cards</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Granted
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">Manage Wallet</h3>
                    <p className="text-sm text-gray-500">Top up wallet and manage funds</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Granted
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">Manage Users</h3>
                    <p className="text-sm text-gray-500">Add, edit, and deactivate user accounts</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Granted
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">Export Reports</h3>
                    <p className="text-sm text-gray-500">Export financial reports and data</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Granted
                  </span>
                </div>
                
                <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                  <div>
                    <h3 className="font-medium text-gray-800">System Settings</h3>
                    <p className="text-sm text-gray-500">Modify system settings and configurations</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    Granted
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;