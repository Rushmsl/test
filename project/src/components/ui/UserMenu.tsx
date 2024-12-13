import React from 'react';
import { Bell, User } from 'lucide-react';

const UserMenu: React.FC = () => {
  return (
    <>
      <button className="p-2 text-gray-400 hover:text-gray-500">
        <Bell className="h-5 w-5" />
      </button>
      <button className="p-2 text-gray-400 hover:text-gray-500">
        <User className="h-5 w-5" />
      </button>
    </>
  );
};

export default UserMenu;