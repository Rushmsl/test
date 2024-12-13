import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home,
  FileText,
  Users,
  Settings,
  Clock,
  FileCheck,
  LayoutTemplate
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '/' },
  { name: 'Documents', icon: FileText, href: '/documents' },
  { name: 'Approvals', icon: FileCheck, href: '/approvals' },
  { name: 'Templates', icon: LayoutTemplate, href: '/templates' },
  { name: 'Users', icon: Users, href: '/users' },
  { name: 'Activity', icon: Clock, href: '/activity' },
  { name: 'Settings', icon: Settings, href: '/settings' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:flex md:flex-shrink-0">
      <div className="flex flex-col w-64">
        <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto bg-white border-r border-gray-200">
          <div className="flex flex-col flex-grow">
            <nav className="flex-1 px-2 space-y-1">
              {navigation.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className={({ isActive }) =>
                    `flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    } group`
                  }
                >
                  <item.icon
                    className="w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                  {item.name}
                </NavLink>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;