import React from "react";
import "./Header.css";
import { FaHome } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { BiMessageSquareDetail } from "react-icons/bi";

function Header() {
  return (
    <>
      <div className="header__home">
        <div className="header__right">
          <FaHome className="home__icon" />

          <div className="header__description">
            <strong className>Target</strong>
            <p>Cham Towers, Plot 12 Nkruma Rd, Kampala Ug. </p>
          </div>
        </div>

        <div className="header__left">
          <div className="header__bag">
            <GiShoppingBag className="bag__icon" />
            <p>Bag</p>
          </div>

          <div className="header__orders">
            <BiMessageSquareDetail className="orders__icon" />
            <p>Orders</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
