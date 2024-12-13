import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <button className="p-2 text-gray-400 hover:text-gray-500">
      <Search className="h-5 w-5" />
    </button>
  );
};

export default SearchBar;