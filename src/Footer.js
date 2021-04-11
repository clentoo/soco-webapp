import React from "react";
import "./Footer.css";
import { ImTruck } from "react-icons/im";
import { IoRibbon } from "react-icons/io5";
import { GiCycle } from "react-icons/gi";

function Footer() {
  return (
    <div className="footer">
      <div className="delivery">
        <ImTruck className="icon" />
        <p>Fast delivery</p>
      </div>
      <div className="buyer">
        <IoRibbon className="icon" />
        <p>Buyer Protection</p>
      </div>

      <div className="customer">
        <GiCycle className="icon" />
        <p>Customer Support</p>
      </div>
    </div>
  );
}

export default Footer;
