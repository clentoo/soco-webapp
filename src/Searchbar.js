import React from "react";
import "./Searchbar.css";
import { AiOutlineSearch } from "react-icons/ai";

function Searchbar() {
  return (
    <div className="search__bar">
      <input
        type="text"
        placeholder="Search for products..."
        className="search__input"
      />
      <AiOutlineSearch className="search__icon" />
    </div>
  );
}

export default Searchbar;
