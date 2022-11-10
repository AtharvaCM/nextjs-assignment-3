import React, { useState } from "react";

const Header: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="stikcy top-0 z-[1000]">
      <div className="px-4 py-2 text-white flex  justify-between items-center bg-black">
        <h1 className="text-lg">Drive</h1>
        <div
          className={
            toggleMenu
              ? "md:flex  md:pt-0 pt-10 w-full md:w-auto"
              : "hidden md:flex"
          }
          id="menu"
        >
          <ul>
            <li className="md:inline-block cursor-pointer hover:text-blue-400 border-b md:border-none py-2 px-3">
              Home
            </li>
            <li className="dropdown md:inline-block cursor-pointer hover:text-blue-400 border-b md:border-none py-2 px-3 relative">
              <a>Products</a>
            </li>
            <li className="md:inline-block cursor-pointer hover:text-blue-400 border-b md:border-none py-2 px-3">
              AboutUs
            </li>
            <li className="md:inline-block cursor-pointer hover:text-blue-400 border-b md:border-none py-2 px-3">
              ContactUs
            </li>
          </ul>
        </div>
        <div className="cursor-pointer md:hidden">
          <input className="menu-btn hidden" type="checkbox" id="menu-btn" />
          <label
            className="menu-icon block cursor-pointer md:hidden px-2 py-4 relative select-none"
            htmlFor="menu-btn"
          >
            <span
              onClick={handleToggle}
              className="navicon bg-white-darkest flex items-center relative"
            ></span>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
