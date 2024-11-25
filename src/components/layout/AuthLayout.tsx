import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Sidebar } from '../dashboard/Sidebar';
import { ComplaintTracking } from '../complaintracking/createcomplain/ComplaintTracking';
import { RequestTracking } from '../requesttracking/RequestTracking';

interface AuthLayoutProps {
  children: React.ReactNode;
  onLogout: () => void;
}

export function AuthLayout({ children, onLogout }: AuthLayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar onLogout={onLogout} />
      <div className="flex-1 overflow-auto">
        <Routes>
          <Route path="/complaints/create/*" element={<ComplaintTracking />} />
          <Route path="/complaints/requests/*" element={<RequestTracking />} />
          <Route path="/*" element={children} />
        </Routes>
      </div>
    </div>
  );
} 