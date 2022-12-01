import React from 'react';
import './Header.css';
function header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="C:\Users\User\Desktop\amazon-clone\img\amazon_PNG11.webp"
        alt=""
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        {/*Logo */}
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Hello guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">and Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default header;
