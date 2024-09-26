import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

function SearchBar() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search MDB"
        className="w-full px-4 py-2 rounded-l-full bg-teal-200 text-navy-900 placeholder-navy-600 focus:outline-none focus:ring-2 focus:ring-teal-400"
      />
      <button type="submit" className="bg-teal-300 text-navy-900 px-4 py-2 rounded-r-full hover:bg-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-400">
        <Search size={24} />
      </button>
    </form>
  );
}

export default SearchBar;