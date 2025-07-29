import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { FaBars, FaTimes, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { navlinks } from "../constants/properties";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState([]); // Array for multiple open menus

  const handleClick = () => setIsOpen(!isOpen);

  const toggleSubmenu = (id) => {
    if (openMenus.includes(id)) {
      setOpenMenus(openMenus.filter((menuId) => menuId !== id)); // Close if open
    } else {
      setOpenMenus([...openMenus, id]); // Open if closed
    }
  };

  return (
    <div className="flex justify-between items-center px-4 py-4 bg-transparent relative">
      <img src={logo} alt="logo" />

      {/* Hamburger Button */}
      <button onClick={handleClick}>
        {isOpen ? (
          <FaTimes size={40} className="text-secondary1" style={{ strokeWidth: 0.1 }}  />
        ) : (
          <FaBars size={40} className="text-secondary1" style={{ strokeWidth: 0.1 }} />
        )}
      </button>

      {/* Backdrop */}
      <div
        onClick={handleClick}
        className={`fixed top-0 left-0 w-full h-full bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sliding Mobile Nav */}
      <nav
        className={`fixed top-0 right-0 w-1/2 h-screen bg-white shadow-lg flex flex-col px-6 py-7 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          onClick={handleClick}
          className="absolute top-4 right-4 text-secondary1"
        >
          <FaTimes size={30} />
        </button>

        {/* Nav Links */}
        <div className="mt-12 space-y-4">
          {navlinks.map((link) => (
            <div key={link.id}>
              {/* Main Link Row */}
              <div className="flex justify-between items-center">
                <span className="text-[18px] font-semibold">{link.title}</span>

                {link.sublinks && (
                  <button onClick={() => toggleSubmenu(link.id)}>
                    {openMenus.includes(link.id) ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </button>
                )}
              </div>

              {/* Submenu */}
              {link.sublinks && openMenus.includes(link.id) && (
                <ul className="pl-4 mt-2 space-y-2">
                  {link.sublinks.map((sublink) => (
                    <li
                      key={sublink.id}
                      className="flex items-center gap-2 text-[18px] text-gray-600 hover:text-black cursor-pointer"
                    >
                      {/* Show icon only if it exists */}
                      {sublink.icon && (
                        <img src={sublink.icon} alt="" className="w-4.5 h-4.5" />
                      )}
                      {sublink.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <button className="bg-transparent text-center self-center text-[18px] mt-3">Login</button>
        <button className="bg-transparent border-2 border-secondary1 rounded-2xl text-center px-5 py-1.5 mt-2 w-full cursor-pointer reg-btn">Register</button>
      </nav>
      {/* End of Sliding Mobile Nav */}
      

    </div>
  );
}
