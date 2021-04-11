import React from "react";
import "./Sidebar.css";
import { FaGreaterThan } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <p className="sidebar--active">Electronics (12)</p>
      <p>Facemasks (3)</p>
      <p>Fresh Food (8)</p>
      <p>Grocery (6)</p>
      <p>Home (24)</p>
      <p>Electronics (12)</p>

      <div className="categories">
        <p>View all categories</p>
        <FaGreaterThan />
      </div>
    </div>
  );
}

export default Sidebar;
