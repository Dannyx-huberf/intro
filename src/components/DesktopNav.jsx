import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { navlinks } from "../constants/properties";

export default function DesktopNav() {
  const [openMenus, setOpenMenus] = useState([]);

  const toggleSubmenu = (id) => {
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((menuId) => menuId !== id) : [...prev, id]
    );
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-transparent">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-18 cursor-pointer" />

      {/* Nav Links */}
      <nav className="flex items-center gap-8 flex-1 ml-10">
        {navlinks.map((link) => (
          <div key={link.id} className="relative">
            <button
              onClick={() => link.sublinks && toggleSubmenu(link.id)}
              className="flex items-center gap-2 text-[18px] font-semibold hover:text-secondary1 transition hover:font-bold cursor-pointer"
            >
              {link.title}
              {link.sublinks &&
                (openMenus.includes(link.id) ? (
                  <FaChevronUp className="text-sm" />
                ) : (
                  <FaChevronDown className="text-sm" />
                ))}
            </button>

            {/* Submenu (optional, you can style further) */}
            {link.sublinks && openMenus.includes(link.id) && (
              <ul className={`absolute mt-2 bg-white shadow-2xl rounded-lg px-5 py-3 pl-9 space-y-2 min-w-[180px] ${link.title === "Features" ? "-translate-x-20" : "translate-x-0"}`}>
                {link.sublinks.map((sublink) => (
                  <li
                    key={sublink.id}
                    className="text-secondary1 cursor-pointer flex items-center gap-2 text-[18px] font-bold "
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
      </nav>

      {/* Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-[18px] hover:text-secondary1 transition-all duration-150 ease-in-out hover:font-bold cursor-pointer">
          Login
        </button>
        <button className="border-2 border-secondary1 rounded-2xl px-5 py-1.5 hover:border-4 hover:border-secondary1 transition-all duration-150 ease-in-out cursor-pointer">
          Register
        </button>
      </div>
    </header>
  );
}
