import { navigate } from 'astro:transitions/client';
import React, { useState } from 'react';
import "./SearchBar.css"


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
        <input
          type="text"
          name="searchTerm"
          aria-label="search-img"
          placeholder="Search for free photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <i className="uis uis-search"></i>
        </button>
      </div>
    </form>
  );
}

export default Searchbar;

// .searchbar{
    
//   width:100%;
//   display : flex;
//   align-items: center;
//   border:1px solid lightgray;
//   height:30px;
//   padding :10px 15px;
//   width: 500px;
//   margin:0px;
//   margin-top:40px;
//   border-radius:10px;
//   justify-content: space-between;
//   margin-left: auto;
//   margin-right: auto;
//   margin-top: 0;
// }

// .input{
//   padding:8px 13px;
//   font-size:medium;
//   border:0;
//   outline:0;
//   width: 100%;
// }
// .search-box {
//   /* height: 55px; */
//   position: relative;
//   display: flex;
//   width: 100%;
//   background: #333;
// }
// .uis-search {
//   /* position: absolute;
//   left: 20px;
//   top: 50%; */
//   cursor: pointer;
//   color: #8D8D8D;
//   font-size: 1.4rem;
//   /* transform: translateY(-50%); */

// }
// .search-box input {
//   width: 100%;
//   height: 55px;
//   outline: none;
//   border: none;
//   font-size: 1.1rem;
//   padding-left: 55px;
//   background: #fff;
//   /* border-radius: 5px; */
// }
// .search-box input:focus{
//   border: 2px solid black;
// }
// .search-box input::placeholder {
//   color: #929292;
// }
// .search-box input:focus::placeholder {
//   color: #bfbfbf;
// }
