import React, { useState } from 'react';
import axios from 'axios';
import {Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Documentation from './pages/Documentation';

// Layout


import AdminDashboardLayout from './components/layout/AdminDashboardLayout';

// Pages
import VerifyEmail from './pages/VerifyEmail';
import DashboardComponent from './components/DashboardComponent';
import TransactionsComponent from './components/TransactionsComponent';
import CardComponent from './components/CardComponent';
import ProfileComponent from './components/ProfileComponent';
import SettingsComponent from './components/SettingsComponent';
import AuditLogsAndReportingComponent from './components/AuditLogsAndReportingComponent';
import MembersComponent from './components/MembersComponent';
import MemberLogin from './pages/MemberLogin';
import MemberDashboard from './components/MemberDashboard';
import PasswordReset from './pages/PasswordReset';

// import Settings from './pages/Settings';
// import Help from './pages/Help';
// import NotFound from './pages/NotFound';


const App = () => {

  const isAuthenticated = true;

return (
  <Routes>
  {/* <Route exact path="/" element={<Home/>}/> */}
  <Route path="/contact" element={<Contact />} />
  <Route path="/login" element={<Login />} />
  <Route path="/member/reset-password" element={<PasswordReset />} />
  {/* <Route path="/member-login" element={<MemberLogin />} /> */}
  <Route path="/signup" element={<Register />} />
  <Route path="/verify-email" element={<VerifyEmail />} />
  <Route path="/documentation" element={<Documentation />} />
 

  <Route path="/member/login" element={<MemberLogin />} />
      <Route 
        path="/member/dashboard" 
        element={
          // <ProtectedRoute>
            <MemberDashboard />
          // </ProtectedRoute>
        } 
      />


  <Route path="/" element={<AdminDashboardLayout />}>
          <Route exact path="/dashboard" element={<DashboardComponent />} />
          <Route path="/transactions" element={<TransactionsComponent />} />
          <Route path="/cards" element={<CardComponent />} />
          <Route path="/members" element={<MembersComponent />} />
          <Route path="/profile" element={<ProfileComponent />} />
          <Route path="/settings" element={<SettingsComponent />} />
          <Route path="audit-logs" element={<AuditLogsAndReportingComponent />} />
        </Route>

      {/* Protected routes with dashboard layout */}
   
        
        {/* Default redirect to dashboard */}
        {/* <Route path="/dashboard" element={<Navigate to="/dashboard" replace />} /> */}
        
        {/* 404 Page */}
        {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
)
}

export default App