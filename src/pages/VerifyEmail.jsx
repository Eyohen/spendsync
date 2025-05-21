

import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { URL } from '../url';
import { 
  RiCheckboxCircleFill, 
  RiErrorWarningFill, 
  RiMailLine,
  RiTimeLine,
  RiRefreshLine
} from 'react-icons/ri';
import coinleylogo from '../assets/logo.png';

const VerifyEmail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get token from URL query params
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  
  const [status, setStatus] = useState('verifying'); // verifying, success, error
  const [message, setMessage] = useState('');
  const [isResending, setIsResending] = useState(false);
  const [email, setEmail] = useState('');
  const [resendSuccess, setResendSuccess] = useState(false);
  
  // Verify email token on component mount
  useEffect(() => {
    if (token) {
      verifyToken();
    } else {
      setStatus('error');
      setMessage('Verification token is missing. Please check your email link and try again.');
    }
  }, [token]);
  
  // Verify the token with the server
  const verifyToken = async () => {
    try {
      const response = await axios.get(`${URL}/api/merchants/verify-email`, {
        params: { token }
      });
      
      if (response.data && response.data.success) {
        setStatus('success');
        setMessage(response.data.message || 'Your email has been successfully verified!');
        
        // Redirect to login page after 3 seconds
        setTimeout(() => {
          navigate('/');
        }, 3000);
      } else {
        throw new Error('Verification failed');
      }
    } catch (error) {
      console.error('Verification error:', error);
      setStatus('error');
      
      if (error.response && error.response.data) {
        setMessage(error.response.data.error || 'Email verification failed. Please try again.');
      } else {
        setMessage('Network error. Please check your connection and try again.');
      }
    }
  };
  
  // Handle resend verification email
  const handleResendVerification = async () => {
    if (!email) {
      setMessage('Please enter your email address');
      return;
    }
    
    setIsResending(true);
    
    try {
      const response = await axios.post(`${URL}/api/merchants/resend-verification`, {
        email
      });
      
      if (response.data && response.data.success) {
        setResendSuccess(true);
        setMessage('Verification email has been resent. Please check your inbox.');
      }
    } catch (error) {
      console.error('Resend verification error:', error);
      
      if (error.response && error.response.data) {
        setMessage(error.response.data.error || 'Failed to resend verification email. Please try again.');
      } else {
        setMessage('Network error. Please check your connection and try again.');
      }
    } finally {
      setIsResending(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        {/* Logo */}
        <div className="flex justify-center">
          <img src={coinleylogo} className="h-12 object-contain" alt="Coinley Logo" />
        </div>
        
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Email Verification
        </h2>
        
        {/* Status Messages */}
        <div className="mt-4">
          {status === 'verifying' && (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mb-4"></div>
              <p className="text-gray-600">Verifying your email...</p>
            </div>
          )}
          
          {status === 'success' && (
            <div className="rounded-md bg-green-50 p-4 text-center">
              <div className="flex justify-center mb-2">
                <RiCheckboxCircleFill className="h-12 w-12 text-green-500" />
              </div>
              <h3 className="text-lg font-medium text-green-800 mb-2">Verification Successful!</h3>
              <p className="text-sm text-green-700">{message}</p>
              <p className="text-sm text-green-700 mt-4">Redirecting you to login page...</p>
            </div>
          )}
          
          {status === 'error' && (
            <div className="rounded-md bg-red-50 p-4 text-center">
              <div className="flex justify-center mb-2">
                <RiErrorWarningFill className="h-12 w-12 text-red-500" />
              </div>
              <h3 className="text-lg font-medium text-red-800 mb-2">Verification Failed</h3>
              <p className="text-sm text-red-700 mb-4">{message}</p>
              
              {/* Resend verification section */}
              {!resendSuccess && (
                <div className="mt-6 border-t border-gray-200 pt-6">
                  <h4 className="text-md font-medium text-gray-800 mb-4 flex items-center justify-center">
                    <RiMailLine className="mr-2" />
                    Resend Verification Email
                  </h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Enter your email address to receive a new verification link:
                  </p>
                  <div className="flex items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-[#7042D2] focus:border-[#7042D2]"
                      placeholder="Email address"
                    />
                    <button
                      onClick={handleResendVerification}
                      disabled={isResending}
                      className="ml-3 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    >
                      {isResending ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          <span>Sending</span>
                        </>
                      ) : (
                        <>
                          <RiRefreshLine className="mr-2" />
                          <span>Resend</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              )}
              
              {/* Resend success message */}
              {resendSuccess && (
                <div className="mt-6 rounded-md bg-green-50 p-4">
                  <div className="flex">
                    <RiCheckboxCircleFill className="h-5 w-5 text-green-400" />
                    <div className="ml-3">
                      <p className="text-sm font-medium text-green-800">
                        Verification email has been resent. Please check your inbox.
                      </p>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Link to login page */}
              <div className="mt-6">
                <button
                  onClick={() => navigate('/')}
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7042D2]"
                >
                  <RiTimeLine className="mr-2" />
                  Return to Login
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;