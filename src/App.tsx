import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Dashboard } from './components/dashboard/Dashboard';
import  ResidentManagement  from './components/residentmanagement/ResidentManagement';
import { FinancialIncome } from './components/financialman/income/FinancialIncome';
import { FinancialExpense } from './components/financialman/expense/FinancialExpense';
import { FinancialNote } from './components/financialman/note/FinancialNote';
import  FacilityManagement  from './components/facility/components/FacilityManagement';
import  LoginForm  from './components/LoginForm';
import { AuthLayout } from './components/layout/AuthLayout';

interface LoginFormProps {
  onLoginSuccess: () => void;
  onForgotPassword: () => void;
  onRegister: () => void;
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return (
      <LoginForm 
        onLoginSuccess={handleLogin}
        onForgotPassword={() => {}}
        onRegister={() => {}}
      />
    );
  }

  return (
    <Router>
      <AuthLayout onLogout={handleLogout}>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard onLogout={handleLogout} />} />
          <Route path="/residents" element={<ResidentManagement />} />
          <Route path="/financial">
            <Route path="income" element={<FinancialIncome />} />
            <Route path="expense" element={<FinancialExpense />} />
            <Route path="note" element={<FinancialNote />} />
          </Route>
          <Route path="/facility" element={<FacilityManagement />} />
        </Routes>
      </AuthLayout>
    </Router>
  );
}

export default App;