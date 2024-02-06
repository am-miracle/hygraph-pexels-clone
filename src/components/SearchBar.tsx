import { navigate } from 'astro:transitions/client';
import React, { useState } from 'react';


function Searchbar() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`, history);
    } else {
      window.alert("input a text")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="search-box">
        <i className="uis uis-search"></i>
        <input
          type="text"
          name="searchTerm"
          aria-label="search-img"
          placeholder="Search images"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default Searchbar;
