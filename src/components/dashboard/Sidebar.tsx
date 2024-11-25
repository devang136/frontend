import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Building2, 
  FileText,
  DollarSign,
  LogOut 
} from 'lucide-react';

interface SidebarProps {
  onLogout: () => void;
}

export function Sidebar({ onLogout }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, path: '/dashboard' },
    { id: 'residents', label: 'Resident Management', icon: Users, path: '/residents' },
    { id: 'financial', label: 'Financial Management', icon: DollarSign, subItems: [
      { id: 'income', label: 'Income', path: '/financial/income' },
      { id: 'expense', label: 'Expense', path: '/financial/expense' },
      { id: 'note', label: 'Note', path: '/financial/note' },
    ]},
    { id: 'facility', label: 'Facility Management', icon: Building2, path: '/facility' },
    { id: 'complaints', label: 'Complaint Tracking', icon: FileText, subItems: [
      { id: 'create-complaint', label: 'Create Complaint', path: '/complaints/create' },
      { id: 'request-tracking', label: 'Request Tracking', path: '/complaints/requests' },
    ]},
  ];

  return (
    <div className="w-64 bg-white h-screen border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-orange-500">DashStack</h1>
      </div>
      
      <nav className="flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.subItems ? (
                <div>
                  <button className="w-full flex items-center px-6 py-3 text-sm text-gray-600">
                    <item.icon className="w-5 h-5 mr-3" />
                    {item.label}
                  </button>
                  <ul className="ml-12 space-y-2">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id}>
                        <button
                          onClick={() => navigate(subItem.path)}
                          className={`w-full text-left px-4 py-2 text-sm ${
                            currentPath === subItem.path
                              ? 'text-orange-600'
                              : 'text-gray-600 hover:text-gray-900'
                          }`}
                        >
                          {subItem.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <button
                  onClick={() => navigate(item.path)}
                  className={`w-full flex items-center px-6 py-3 text-sm ${
                    currentPath === item.path
                      ? 'text-orange-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.label}
                </button>
              )}
            </li>
          ))}
          <li>
            <button
              onClick={onLogout}
              className="w-full flex items-center px-6 py-3 text-sm text-red-600 hover:text-red-700"
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}