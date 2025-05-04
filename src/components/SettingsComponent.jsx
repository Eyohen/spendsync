import { useState } from 'react';
import { Save, Bell, Lock, User, CreditCard, Building, HelpCircle, Mail, Phone, Key } from 'lucide-react';

const SettingsComponent = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Sample user data
  const [userData, setUserData] = useState({
    name: 'John Adebayo',
    email: 'john.adebayo@alaralogistics.com',
    phone: '+234 801 234 5678',
    role: 'Finance Manager',
    company: 'Alara Logistics',
    address: '15 Broad Street, Lagos Island, Lagos',
    companyEmail: 'info@alaralogistics.com',
    companyPhone: '+234 700 ALARA LG',
    notificationSettings: {
      emailAlerts: true,
      transactionAlerts: true,
      cardAlerts: true,
      weeklyReports: true,
      monthlyReports: true
    },
    securitySettings: {
      twoFactorAuth: true,
      requirePasswordChange: false,
      loginNotifications: true
    },
    paymentSettings: {
      defaultPaymentMethod: 'Bank Transfer',
      autoTopUp: false,
      minBalanceAlert: 500000
    }
  });
  
  const [formData, setFormData] = useState({...userData});
  
  // Handle form input changes
  const handleInputChange = (section, field, value) => {
    if (section) {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: value
        }
      });
    } else {
      setFormData({
        ...formData,
        [field]: value
      });
    }
  };
  
  // Handle checkbox changes for notification settings
  const handleCheckboxChange = (section, field) => {
    if (section) {
      setFormData({
        ...formData,
        [section]: {
          ...formData[section],
          [field]: !formData[section][field]
        }
      });
    }
  };
  
  // Save changes
  const saveChanges = () => {
    setUserData(formData);
    // In a real app, you would send this data to your backend
    alert('Settings saved successfully');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Settings</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-gray-50 border-r border-gray-100">
            <nav className="p-4">
              <ul className="space-y-1">
                <li>
                  <button
                    className={`flex items-center w-full px-4 py-3 rounded-lg ${
                      activeTab === 'profile' ? 'bg-sky-100 text-sky-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('profile')}
                  >
                    <User size={18} className="mr-3" />
                    <span className="font-medium">Profile Settings</span>
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full px-4 py-3 rounded-lg ${
                      activeTab === 'company' ? 'bg-sky-100 text-sky-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('company')}
                  >
                    <Building size={18} className="mr-3" />
                    <span className="font-medium">Company Information</span>
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full px-4 py-3 rounded-lg ${
                      activeTab === 'notifications' ? 'bg-sky-100 text-sky-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('notifications')}
                  >
                    <Bell size={18} className="mr-3" />
                    <span className="font-medium">Notification Settings</span>
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full px-4 py-3 rounded-lg ${
                      activeTab === 'security' ? 'bg-sky-100 text-sky-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('security')}
                  >
                    <Lock size={18} className="mr-3" />
                    <span className="font-medium">Security Settings</span>
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full px-4 py-3 rounded-lg ${
                      activeTab === 'payment' ? 'bg-sky-100 text-sky-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('payment')}
                  >
                    <CreditCard size={18} className="mr-3" />
                    <span className="font-medium">Payment Settings</span>
                  </button>
                </li>
                <li>
                  <button
                    className={`flex items-center w-full px-4 py-3 rounded-lg ${
                      activeTab === 'help' ? 'bg-sky-100 text-sky-600' : 'text-gray-600 hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab('help')}
                  >
                    <HelpCircle size={18} className="mr-3" />
                    <span className="font-medium">Help & Support</span>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          
          {/* Content */}
          <div className="flex-1 p-6">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Profile Settings</h2>
                <p className="text-gray-600">Manage your personal information and account details.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      value={formData.name}
                      onChange={(e) => handleInputChange(null, 'name', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      value={formData.role}
                      onChange={(e) => handleInputChange(null, 'role', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <div className="flex">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg">
                        <Mail size={18} className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        className="flex-1 border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        value={formData.email}
                        onChange={(e) => handleInputChange(null, 'email', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <div className="flex">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg">
                        <Phone size={18} className="text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        className="flex-1 border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        value={formData.phone}
                        onChange={(e) => handleInputChange(null, 'phone', e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
                    onClick={saveChanges}
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Company Information */}
            {activeTab === 'company' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Company Information</h2>
                <p className="text-gray-600">Manage your company details and business information.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      value={formData.company}
                      onChange={(e) => handleInputChange(null, 'company', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Email</label>
                    <div className="flex">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg">
                        <Mail size={18} className="text-gray-500" />
                      </div>
                      <input
                        type="email"
                        className="flex-1 border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        value={formData.companyEmail}
                        onChange={(e) => handleInputChange(null, 'companyEmail', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Phone</label>
                    <div className="flex">
                      <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg">
                        <Phone size={18} className="text-gray-500" />
                      </div>
                      <input
                        type="tel"
                        className="flex-1 border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        value={formData.companyPhone}
                        onChange={(e) => handleInputChange(null, 'companyPhone', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Company Address</label>
                    <textarea
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      rows="3"
                      value={formData.address}
                      onChange={(e) => handleInputChange(null, 'address', e.target.value)}
                    ></textarea>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
                    onClick={saveChanges}
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Notification Settings */}
            {activeTab === 'notifications' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Notification Settings</h2>
                <p className="text-gray-600">Manage how you receive notifications and alerts.</p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Email Alerts</h3>
                      <p className="text-sm text-gray-500">Receive important notifications via email</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.notificationSettings.emailAlerts}
                        onChange={() => handleCheckboxChange('notificationSettings', 'emailAlerts')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Transaction Alerts</h3>
                      <p className="text-sm text-gray-500">Get notified about new transactions</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.notificationSettings.transactionAlerts}
                        onChange={() => handleCheckboxChange('notificationSettings', 'transactionAlerts')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Card Alerts</h3>
                      <p className="text-sm text-gray-500">Receive notifications about card activities</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.notificationSettings.cardAlerts}
                        onChange={() => handleCheckboxChange('notificationSettings', 'cardAlerts')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Weekly Reports</h3>
                      <p className="text-sm text-gray-500">Get a summary of weekly activities</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.notificationSettings.weeklyReports}
                        onChange={() => handleCheckboxChange('notificationSettings', 'weeklyReports')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Monthly Reports</h3>
                      <p className="text-sm text-gray-500">Get a summary of monthly activities</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.notificationSettings.monthlyReports}
                        onChange={() => handleCheckboxChange('notificationSettings', 'monthlyReports')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
                    onClick={saveChanges}
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Security Settings */}
            {activeTab === 'security' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Security Settings</h2>
                <p className="text-gray-600">Manage your account security and authentication settings.</p>
                
                <div className="space-y-4 mt-6">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Two-Factor Authentication</h3>
                      <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.securitySettings.twoFactorAuth}
                        onChange={() => handleCheckboxChange('securitySettings', 'twoFactorAuth')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Login Notifications</h3>
                      <p className="text-sm text-gray-500">Get notified when your account is accessed</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.securitySettings.loginNotifications}
                        onChange={() => handleCheckboxChange('securitySettings', 'loginNotifications')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Require Password Change</h3>
                      <p className="text-sm text-gray-500">Force users to change passwords periodically</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.securitySettings.requirePasswordChange}
                        onChange={() => handleCheckboxChange('securitySettings', 'requirePasswordChange')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">Change Password</h3>
                    
                    <div className="space-y-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Current Password</label>
                        <div className="flex">
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg">
                            <Key size={18} className="text-gray-500" />
                          </div>
                          <input
                            type="password"
                            className="flex-1 border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Enter current password"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">New Password</label>
                        <div className="flex">
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg">
                            <Lock size={18} className="text-gray-500" />
                          </div>
                          <input
                            type="password"
                            className="flex-1 border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Enter new password"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Confirm New Password</label>
                        <div className="flex">
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 border border-gray-300 border-r-0 rounded-l-lg">
                            <Lock size={18} className="text-gray-500" />
                          </div>
                          <input
                            type="password"
                            className="flex-1 border border-gray-300 rounded-r-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                            placeholder="Confirm new password"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
                          Change Password
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
                    onClick={saveChanges}
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Payment Settings */}
            {activeTab === 'payment' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Payment Settings</h2>
                <p className="text-gray-600">Manage your payment methods and preferences.</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Default Payment Method</label>
                    <select
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      value={formData.paymentSettings.defaultPaymentMethod}
                      onChange={(e) => handleInputChange('paymentSettings', 'defaultPaymentMethod', e.target.value)}
                    >
                      <option>Bank Transfer</option>
                      <option>Paystack</option>
                      <option>Flutterwave</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Minimum Balance Alert (₦)</label>
                    <input
                      type="number"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      value={formData.paymentSettings.minBalanceAlert}
                      onChange={(e) => handleInputChange('paymentSettings', 'minBalanceAlert', parseInt(e.target.value))}
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div>
                      <h3 className="font-medium text-gray-800">Auto Top-Up</h3>
                      <p className="text-sm text-gray-500">Automatically top up wallet when balance is low</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={formData.paymentSettings.autoTopUp}
                        onChange={() => handleCheckboxChange('paymentSettings', 'autoTopUp')}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-sky-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-sky-600"></div>
                    </label>
                  </div>
                </div>
                
                <div className="mt-6">
                  <button
                    className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
                    onClick={saveChanges}
                  >
                    <Save size={16} className="mr-2" />
                    Save Changes
                  </button>
                </div>
              </div>
            )}
            
            {/* Help & Support */}
            {activeTab === 'help' && (
              <div className="space-y-6">
                <h2 className="text-xl font-bold text-gray-800">Help & Support</h2>
                <p className="text-gray-600">Get help and support for your account.</p>
                
                <div className="space-y-4 mt-6">
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Contact Support</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Our support team is available to help you with any questions or issues you may have.
                    </p>
                    <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
                      Contact Support
                    </button>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Frequently Asked Questions</h3>
                    <div className="space-y-3 mt-4">
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex justify-between items-center w-full p-3 text-left font-medium text-gray-700 hover:bg-gray-50">
                          <span>How do I top up my wallet?</span>
                          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex justify-between items-center w-full p-3 text-left font-medium text-gray-700 hover:bg-gray-50">
                          <span>How do I issue a new card?</span>
                          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex justify-between items-center w-full p-3 text-left font-medium text-gray-700 hover:bg-gray-50">
                          <span>How do I manage user permissions?</span>
                          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                      
                      <div className="border border-gray-200 rounded-lg overflow-hidden">
                        <button className="flex justify-between items-center w-full p-3 text-left font-medium text-gray-700 hover:bg-gray-50">
                          <span>How do I export transaction history?</span>
                          <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 border border-gray-200 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-2">Documentation</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      View our comprehensive documentation to learn more about SpendSync.
                    </p>
                    <button className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700">
                      View Documentation
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsComponent;