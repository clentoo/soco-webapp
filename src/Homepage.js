import React from "react";
import "./Homepage.css";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Bag from "./Bag";

function Homepage() {
  return (
    <div className="homepage">
      <Sidebar />
      <Feed />
      <Bag />
    </div>
  );
}

export default Homepage;
