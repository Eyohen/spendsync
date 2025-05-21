

import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, Mail, Lock, User, Building, CheckCircle } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { Link, useNavigate } from 'react-router-dom'



export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreed, setAgreed] = useState(false);

  const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignup = async () => {
    // Handle signup logic here
    console.log('Signup submitted with:', { firstName, lastName, businessName, email, password, });
    const res = await axios.post(`${URL}/api/merchants/register`, { firstName, lastName, businessName, email, password, })
    console.log("register ish")
    if(res.status === 201){
      navigate('/registration-success')
    }

  };

  return (
    <div className="min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Signup decoration */}
      <div className="absolute top-0 left-0 w-1/2 h-full transform origin-top-left opacity-5 hidden lg:block"></div>
      <div className="absolute top-10 left-10 w-72 h-72  rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72  rounded-full opacity-10 blur-3xl"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center">
          <span className="text-3xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-green-700">SpendSync</span>
          </span>
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Create your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{' '}
            <a href="#" className="font-medium text-teal-600 hover:text-teal-500 transition duration-300">
              Sign in
            </a>
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 transform transition-all duration-500 hover:shadow-2xl">
          <div className="space-y-6">
            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
             
                  type="text"
                  
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  className="block w-full pl-10 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="John"
                />
              </div>
            </div>

            <div>
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
            
                  type="text"
          
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  className="block w-full pl-10 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">
                Company Name
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Building className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="company-name"
                  name="company-name"
                  type="text"
                  autoComplete="organization"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="block w-full pl-10 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Alara Logistics"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-12 py-3 border-gray-300 rounded-lg shadow-sm focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="••••••••"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="text-gray-400 hover:text-gray-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
              <p className="mt-2 text-xs text-gray-500">
                Password must be at least 8 characters with 1 uppercase, 1 number, and 1 special character.
              </p>
            </div>

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="terms"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-gray-600">
                  I agree to the{' '}
                  <a href="#" className="text-teal-600 hover:text-teal-500 font-medium">
                    Terms of Service
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-teal-600 hover:text-teal-500 font-medium">
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <div>
              <button
                onClick={handleSignup}
                disabled={!agreed}
                className={`group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-sm font-medium text-white ${agreed
                    ? 'bg-gradient-to-r from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 cursor-pointer'
                    : 'bg-gray-300 cursor-not-allowed'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 transform hover:scale-105 shadow-md`}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  {agreed ? (
                    <CheckCircle className="h-5 w-5 text-teal-50 group-hover:text-white" />
                  ) : (
                    <Lock className="h-5 w-5 text-gray-400" />
                  )}
                </span>
                Create account
                <ArrowRight className="ml-2 -mr-1 h-5 w-5 text-teal-50 group-hover:text-white" />
              </button>
            </div>
          </div>


          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By clicking "Create account" or signing up with social providers, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-sm text-gray-600 relative z-10">
        <p>&copy; {new Date().getFullYear()} SpendSync. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="text-gray-600 hover:text-teal-500 transition duration-300">Privacy Policy</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-600 hover:text-teal-500 transition duration-300">Terms of Service</a>
          <span className="text-gray-400">•</span>
          <a href="#" className="text-gray-600 hover:text-teal-500 transition duration-300">Contact</a>
        </div>
      </div>
    </div>
  );
}