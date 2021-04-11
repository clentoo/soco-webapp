import React from "react";
import { BiConfused } from "react-icons/bi";
import "./Bag.css";

function Bag() {
  return (
    <div className="bag">
      <div className="item__aggregate">
        <p className="bag__text">Bag</p>
        <button>0</button>
      </div>

      <BiConfused className="emoji" />
      <div className="bagContainer">
        <p className="description">It's Empty Here</p>
        <p className="advertisement">Start shopping to add items to your bag</p>
      </div>
    </div>
  );
}

export default Bag;
