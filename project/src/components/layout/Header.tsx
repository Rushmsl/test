import React from 'react';
import { Bell, Search, User, LayoutIcon } from 'lucide-react';
import Logo from './Logo';
import SearchBar from '../ui/SearchBar';
import UserMenu from '../ui/UserMenu';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <h1 className="text-xl font-semibold text-gray-900">
                Document Approval System
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <SearchBar />
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;