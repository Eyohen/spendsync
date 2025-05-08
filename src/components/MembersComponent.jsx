import { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  User, 
  Edit, 
  Trash, 
  Eye, 
  CreditCard, 
  ShieldCheck, 
  ShieldOff, 
  ChevronLeft, 
  ChevronRight, 
  X,
  Check,
  Mail,
  Phone,
  Building,
  Briefcase
} from 'lucide-react';

// Sample members data
const membersData = [
  {
    id: 1,
    name: 'Jane Doe',
    email: 'jane.doe@alaralogistics.com',
    phone: '+234 801 234 5678',
    department: 'Sales',
    position: 'Sales Manager',
    status: 'Active',
    role: 'User',
    hasCard: true,
    cardId: 'CARD001',
    lastLogin: '2025-05-05T08:30:15',
    joinDate: '2023-06-15'
  },
  {
    id: 2,
    name: 'John Smith',
    email: 'john.smith@alaralogistics.com',
    phone: '+234 802 345 6789',
    department: 'Operations',
    position: 'Operations Lead',
    status: 'Active',
    role: 'User',
    hasCard: true,
    cardId: 'CARD002',
    lastLogin: '2025-05-04T14:22:30',
    joinDate: '2023-08-10'
  },
  {
    id: 3,
    name: 'Sarah Johnson',
    email: 'sarah.johnson@alaralogistics.com',
    phone: '+234 803 456 7890',
    department: 'Marketing',
    position: 'Marketing Director',
    status: 'Active',
    role: 'Admin',
    hasCard: true,
    cardId: 'CARD003',
    lastLogin: '2025-05-03T09:15:45',
    joinDate: '2022-11-05'
  },
  {
    id: 4,
    name: 'Michael Brown',
    email: 'michael.brown@alaralogistics.com',
    phone: '+234 804 567 8901',
    department: 'IT',
    position: 'IT Manager',
    status: 'Inactive',
    role: 'User',
    hasCard: true,
    cardId: 'CARD004',
    lastLogin: '2025-04-28T16:40:22',
    joinDate: '2023-02-20'
  },
  {
    id: 5,
    name: 'Emily Davis',
    email: 'emily.davis@alaralogistics.com',
    phone: '+234 805 678 9012',
    department: 'HR',
    position: 'HR Manager',
    status: 'Active',
    role: 'User',
    hasCard: true,
    cardId: 'CARD005',
    lastLogin: '2025-05-01T11:10:05',
    joinDate: '2022-09-15'
  },
  {
    id: 6,
    name: 'David Wilson',
    email: 'david.wilson@alaralogistics.com',
    phone: '+234 806 789 0123',
    department: 'Finance',
    position: 'Financial Analyst',
    status: 'Active',
    role: 'User',
    hasCard: true,
    cardId: 'CARD006',
    lastLogin: '2025-05-02T13:25:40',
    joinDate: '2023-04-10'
  },
  {
    id: 7,
    name: 'Jessica Taylor',
    email: 'jessica.taylor@alaralogistics.com',
    phone: '+234 807 890 1234',
    department: 'Sales',
    position: 'Sales Representative',
    status: 'Active',
    role: 'User',
    hasCard: false,
    cardId: null,
    lastLogin: '2025-05-04T10:05:30',
    joinDate: '2024-01-15'
  }
];

// Sample departments data
const departments = [
  'All',
  'Sales',
  'Operations',
  'Marketing',
  'IT',
  'HR',
  'Finance'
];

// Sample roles data
const roles = [
  'All',
  'Admin',
  'Manager',
  'User'
];

// Sample statuses data
const statuses = [
  'All',
  'Active',
  'Inactive'
];

// Format date
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-NG', { 
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Format datetime
const formatDateTime = (dateString) => {
  return new Date(dateString).toLocaleString('en-NG', { 
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

// Member Modal Component
const MemberModal = ({ isOpen, onClose, isEditing = false, memberData = null }) => {
    if (!isOpen) return null;
    
    const modalTitle = isEditing ? 'Edit Member' : 'Add New Member';
    const buttonText = isEditing ? 'Update Member' : 'Add Member';
    
    const [formData, setFormData] = useState({
      name: memberData?.name || '',
      email: memberData?.email || '',
      phone: memberData?.phone || '',
      department: memberData?.department || '',
      position: memberData?.position || '',
      role: memberData?.role || 'User',
      status: memberData?.status || 'Active',
      password: '',
      confirmPassword: '',
      assignCard: memberData?.hasCard || false
    });
    
    const handleInputChange = (field, value) => {
      setFormData({
        ...formData,
        [field]: value
      });
    };
    
    const handleSubmit = () => {
      // Validation could be added here
      console.log('Form submitted:', formData);
      onClose();
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">{modalTitle}</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter email address"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={formData.department}
                  onChange={(e) => handleInputChange('department', e.target.value)}
                >
                  <option value="" disabled>Select department</option>
                  {departments.slice(1).map((department) => (
                    <option key={department} value={department}>{department}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={formData.position}
                  onChange={(e) => handleInputChange('position', e.target.value)}
                  placeholder="Enter position/title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={formData.role}
                  onChange={(e) => handleInputChange('role', e.target.value)}
                >
                  <option value="Admin">Admin</option>
                  <option value="Manager">Manager</option>
                  <option value="User">User</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={formData.status}
                  onChange={(e) => handleInputChange('status', e.target.value)}
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
              
              {!isEditing && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      placeholder="Enter password"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      placeholder="Confirm password"
                    />
                  </div>
                </>
              )}
              
              <div className="md:col-span-2">
                <div className="flex items-center mt-2">
                  <input
                    type="checkbox"
                    id="assignCard"
                    className="h-4 w-4 text-sky-600 focus:ring-sky-500 border-gray-300 rounded"
                    checked={formData.assignCard}
                    onChange={(e) => handleInputChange('assignCard', e.target.checked)}
                  />
                  <label htmlFor="assignCard" className="ml-2 block text-sm text-gray-900">
                    Assign Virtual Card to this user
                  </label>
                </div>
                {isEditing && memberData?.hasCard && (
                  <p className="text-sm text-gray-500 mt-1">
                    Currently assigned card: {memberData.cardId}
                  </p>
                )}
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button 
                type="button" 
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                onClick={onClose}
              >
                Cancel
              </button>
              <button 
                type="button" 
                className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
                onClick={handleSubmit}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  // Card Assignment Modal Component
const CardAssignmentModal = ({ isOpen, onClose, memberData }) => {
    if (!isOpen || !memberData) return null;
    
    const [cardLimit, setCardLimit] = useState('50000');
    const [cardExpiry, setCardExpiry] = useState('');
    
    // Calculate default expiry date (2 years from now)
    const getDefaultExpiry = () => {
      const date = new Date();
      date.setFullYear(date.getFullYear() + 2);
      return date.toISOString().substr(0, 10);
    };
    
    // Set default expiry date when component mounts
    useEffect(() => {
      setCardExpiry(getDefaultExpiry());
    }, []);
    
    const handleSubmit = () => {
      console.log('Card assigned with limit:', cardLimit);
      onClose();
    };
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-md">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Assign Card</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold">
                {memberData.name.charAt(0)}
              </div>
              <div className="ml-3">
                <p className="font-medium text-gray-900">{memberData.name}</p>
                <p className="text-sm text-gray-500">{memberData.department}</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Type</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  defaultValue="virtual"
                >
                  <option value="virtual">Virtual Card</option>
                  <option value="physical">Physical Card</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Spending Limit</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500">₦</span>
                  </div>
                  <input
                    type="number"
                    className="pl-8 w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Enter amount"
                    value={cardLimit}
                    onChange={(e) => setCardLimit(e.target.value)}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  value={cardExpiry}
                  onChange={(e) => setCardExpiry(e.target.value)}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Brand</label>
                <select
                  className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  defaultValue="visa"
                >
                  <option value="visa">Visa</option>
                  <option value="mastercard">Mastercard</option>
                </select>
              </div>
              
              <button
                className="w-full py-3 mt-2 bg-sky-600 hover:bg-sky-700 text-white font-medium rounded-lg"
                onClick={handleSubmit}
              >
                Assign Card
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  // Member Details Modal Component
const MemberDetailsModal = ({ isOpen, onClose, memberData }) => {
    if (!isOpen || !memberData) return null;
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-800">Member Details</h2>
            <button className="text-gray-500 hover:text-gray-700" onClick={onClose}>
              <X size={24} />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 mb-6 md:mb-0 md:pr-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 text-4xl font-bold mb-4">
                    {memberData.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{memberData.name}</h3>
                  <p className="text-gray-500">{memberData.position}</p>
                  <div className="mt-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      memberData.status === 'Active' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {memberData.status}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 md:border-l md:border-gray-200 md:pl-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Contact Information</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <Mail size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-900">{memberData.email}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-900">{memberData.phone}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Work Information</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-center">
                        <Building size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-900">{memberData.department} Department</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-900">{memberData.position}</span>
                      </div>
                      <div className="flex items-center">
                        <ShieldCheck size={16} className="text-gray-400 mr-2" />
                        <span className="text-gray-900">Role: {memberData.role}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Card Information</h4>
                    <div className="mt-2">
                      {memberData.hasCard ? (
                        <div className="p-3 bg-green-50 rounded-lg">
                          <div className="flex items-center">
                            <CreditCard size={16} className="text-green-600 mr-2" />
                            <span className="text-green-700 font-medium">Virtual Card Assigned</span>
                          </div>
                          <p className="text-sm text-green-600 ml-6 mt-1">Card ID: {memberData.cardId}</p>
                        </div>
                      ) : (
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <div className="flex items-center">
                            <CreditCard size={16} className="text-gray-400 mr-2" />
                            <span className="text-gray-500">No card assigned</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-500">Account Information</h4>
                    <div className="mt-2 space-y-2">
                      <div className="flex items-start">
                        <span className="text-gray-500 w-32">Join Date:</span>
                        <span className="text-gray-900">{formatDate(memberData.joinDate)}</span>
                      </div>
                      <div className="flex items-start">
                        <span className="text-gray-500 w-32">Last Login:</span>
                        <span className="text-gray-900">{formatDateTime(memberData.lastLogin)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6 pt-6 border-t border-gray-200">
              <button 
                type="button" 
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                onClick={onClose}
              >
                Close
              </button>
              {!memberData.hasCard && (
                <button 
                  type="button" 
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                >
                  <CreditCard size={16} className="mr-2" />
                  Assign Card
                </button>
              )}
              <button 
                type="button" 
                className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
              >
                <Edit size={16} className="mr-2" />
                Edit Member
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };


  // Main MembersComponent
const MembersComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [departmentFilter, setDepartmentFilter] = useState('All');
    const [roleFilter, setRoleFilter] = useState('All');
    const [statusFilter, setStatusFilter] = useState('All');
    const [cardFilter, setCardFilter] = useState('All');
    const [showFilters, setShowFilters] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [editingMember, setEditingMember] = useState(null);
    const [showCardModal, setShowCardModal] = useState(false);
    const [cardAssignMember, setCardAssignMember] = useState(null);
    const [showDetailsModal, setShowDetailsModal] = useState(false);
    const [detailsMember, setDetailsMember] = useState(null);
    
    const itemsPerPage = 5;
    
    // Filter members based on search and filters
    const filteredMembers = membersData.filter(member => {
      const matchesSearch = 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.position.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesDepartment = departmentFilter === 'All' || member.department === departmentFilter;
      const matchesRole = roleFilter === 'All' || member.role === roleFilter;
      const matchesStatus = statusFilter === 'All' || member.status === statusFilter;
      const matchesCard = 
        cardFilter === 'All' || 
        (cardFilter === 'Has Card' && member.hasCard) || 
        (cardFilter === 'No Card' && !member.hasCard);
      
      return matchesSearch && matchesDepartment && matchesRole && matchesStatus && matchesCard;
    });
    
    // Paginate members
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentMembers = filteredMembers.slice(indexOfFirstItem, indexOfLastItem);
    
    // Calculate total pages
    const totalPages = Math.ceil(filteredMembers.length / itemsPerPage);
    
    // Handle page change
    const handlePageChange = (pageNumber) => {
      if (pageNumber > 0 && pageNumber <= totalPages) {
        setCurrentPage(pageNumber);
      }
    };
    
    // Add new member
    const handleAddMember = () => {
      setIsEditing(false);
      setEditingMember(null);
      setIsModalOpen(true);
    };
    
    // Edit member
    const handleEditMember = (member) => {
      setIsEditing(true);
      setEditingMember(member);
      setIsModalOpen(true);
    };
    
  // Assign card
  const handleAssignCard = (member) => {
    setCardAssignMember(member);
    setShowCardModal(true);
  };
  
  // View member details
  const handleViewDetails = (member) => {
    setDetailsMember(member);
    setShowDetailsModal(true);
  };
  
  // Reset filters
  const resetFilters = () => {
    setDepartmentFilter('All');
    setRoleFilter('All');
    setStatusFilter('All');
    setCardFilter('All');
  };
  
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Team Members</h1>
        <button 
          className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center"
          onClick={handleAddMember}
        >
          <Plus size={16} className="mr-2" />
          Add Member
        </button>
      </div>
      
      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
          <div className="flex-1 relative mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search members..."
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <button
            className="flex items-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={16} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showFilters && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map((department) => (
                  <option key={department} value={department}>{department}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
              >
                {roles.map((role) => (
                  <option key={role} value={role}>{role}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                {statuses.map((status) => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Card Status</label>
              <select
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                value={cardFilter}
                onChange={(e) => setCardFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Has Card">Has Card</option>
                <option value="No Card">No Card</option>
              </select>
            </div>
            
            <div className="md:col-span-4 flex justify-end mt-2">
              <button
                className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
                onClick={resetFilters}
              >
                Reset Filters
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Members Table */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Card</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentMembers.length > 0 ? (
                currentMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-sky-100 flex items-center justify-center text-sky-600 font-semibold">
                          {member.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{member.name}</div>
                          <div className="text-sm text-gray-500">{member.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        member.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{member.department}</div>
                      <div className="text-xs text-gray-500">{member.position}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {member.role}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {member.hasCard ? (
                        <div className="flex items-center">
                          <CreditCard size={16} className="text-green-500 mr-2" />
                          <span className="text-sm text-green-600">{member.cardId}</span>
                        </div>
                      ) : (
                        <button
                          className="px-2 py-1 border border-gray-300 rounded text-xs text-gray-600 hover:bg-gray-50 flex items-center"
                          onClick={() => handleAssignCard(member)}
                        >
                          <CreditCard size={12} className="mr-1" />
                          Assign Card
                        </button>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {formatDateTime(member.lastLogin)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        className="text-sky-600 hover:text-sky-900 mr-3"
                        onClick={() => handleViewDetails(member)}
                      >
                        <Eye size={18} />
                      </button>
                      <button
                        className="text-gray-600 hover:text-gray-900 mr-3"
                        onClick={() => handleEditMember(member)}
                      >
                        <Edit size={18} />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <Trash size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="px-6 py-4 text-center text-sm text-gray-500">
                    No members found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        {filteredMembers.length > 0 && (
          <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, filteredMembers.length)} of {filteredMembers.length} members
            </div>
            <div className="flex space-x-1">
              <button
                className={`px-3 py-1 rounded-md ${
                  currentPage === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </button>
              
              {[...Array(totalPages)].map((_, index) => (
                <button
                  key={index + 1}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === index + 1
                      ? 'bg-sky-600 text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-50'
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
              
              <button
                className={`px-3 py-1 rounded-md ${
                  currentPage === totalPages
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-white text-gray-600 hover:bg-gray-50'
                }`}
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>


      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Total Members</p>
              <h3 className="text-xl font-bold mt-1">{membersData.length}</h3>
            </div>
            <div className="p-3 rounded-full bg-sky-100 text-sky-600">
              <User size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Active Members</p>
              <h3 className="text-xl font-bold mt-1">{membersData.filter(m => m.status === 'Active').length}</h3>
            </div>
            <div className="p-3 rounded-full bg-green-100 text-green-600">
              <ShieldCheck size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Inactive Members</p>
              <h3 className="text-xl font-bold mt-1">{membersData.filter(m => m.status === 'Inactive').length}</h3>
            </div>
            <div className="p-3 rounded-full bg-red-100 text-red-600">
              <ShieldOff size={20} />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Assigned Cards</p>
              <h3 className="text-xl font-bold mt-1">{membersData.filter(m => m.hasCard).length}</h3>
            </div>
            <div className="p-3 rounded-full bg-purple-100 text-purple-600">
              <CreditCard size={20} />
            </div>
          </div>
        </div>
      </div>
      
      {/* Member Modal */}
      <MemberModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        isEditing={isEditing}
        memberData={editingMember}
      />
      
      {/* Card Assignment Modal */}
      <CardAssignmentModal
        isOpen={showCardModal}
        onClose={() => setShowCardModal(false)}
        memberData={cardAssignMember}
      />
      
      {/* Member Details Modal */}
      <MemberDetailsModal
        isOpen={showDetailsModal}
        onClose={() => setShowDetailsModal(false)}
        memberData={detailsMember}
      />
    </div>
  );
};

export default MembersComponent;