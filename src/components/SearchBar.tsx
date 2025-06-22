
import React from 'react';
import { Search } from 'lucide-react';
import { useAppContext } from '../context/AppContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  return (
    <div className="relative max-w-md mx-auto md:mx-0">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Rechercher des tissus..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-afrochic-orange focus:border-transparent"
      />
    </div>
  );
};

export default SearchBar;
