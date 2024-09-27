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
    <form onSubmit={handleSubmit} className="w-full relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search MDB"
        className="w-full py-3 px-4 pr-12 rounded-full bg-[#98FB98] text-[#282c34] placeholder-[#282c34] focus:outline-none"
      />
      <button type="submit" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#282c34]">
        <Search size={24} />
      </button>
    </form>
  );
}

export default SearchBar;