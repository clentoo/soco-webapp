import React from "react";
import "./SearchResult.css";

function SearchResult({ img, title, price, priceSlash, btn }) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <div className="searchResult__container">
        <p className="title">{title}</p>
        <p className="price">{price}</p>

        <div className="searchResult__bottom">
          <p>{priceSlash}</p>
        </div>
        <button className="addButton">{btn}</button>
      </div>
    </div>
  );
}

export default SearchResult;
