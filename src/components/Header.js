import React from "react";

function Header() {
  return (
    <div className="header">
      <img
        className="header-picture"
        src={`${process.env.PUBLIC_URL}/images/bg-header-desktop.svg`}
        alt=""
      ></img>
    </div>
  );
}
export default Header;
