
import React, { useState } from 'react';
import { ArrowRight, Eye, EyeOff, Mail, Lock } from 'lucide-react';
import axios from 'axios';
import { URL } from '../url';
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

    const navigate = useNavigate()

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async () => {
    // Handle login logic here
    console.log('Login submitted with:', { email, password, rememberMe });
    const res = await axios.post(`${URL}/api/merchants/login`, {email, password, })
    console.log("")
    if(res.status === 200){
      navigate('/')
    }

  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-teal-50 flex flex-col justify-center">
      {/* Login decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full  transform origin-top-right opacity-5 hidden lg:block"></div>
      <div className="absolute top-10 right-10 w-72 h-72 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full opacity-10 blur-3xl"></div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
        <div className="text-center">
          <span className="text-3xl font-bold">
            <span className="bg-clip-text text-transparent ">SpendSync</span>
          </span>
          <h2 className="mt-4 text-2xl font-extrabold text-gray-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-gray-600">
            Or {" "}
            <Link to="/register" className="font-medium text-teal-600 hover:text-teal-500 transition duration-300">
              create a new account
            </Link>
          </p>

        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 shadow-xl rounded-2xl sm:px-10 transform transition-all duration-500 hover:shadow-2xl">
            <div className="space-y-6">
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
                    placeholder="name@company.com"
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
                    autoComplete="current-password"
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
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-teal-600 hover:text-teal-500 transition duration-300">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  onClick={handleLogin}
                  className="group relative w-full flex justify-center py-3 px-4 border border-transparent rounded-full text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-green-600 hover:from-teal-600 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition duration-300 transform hover:scale-105 shadow-md"
                >
                  <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                    <Lock className="h-5 w-5 text-teal-50 group-hover:text-white" />
                  </span>
                  Sign in
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5 text-teal-50 group-hover:text-white" />
                </button>
              </div>
            </div>

        
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