import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/logo.svg";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="shadow-sm bg-white w-full fixed z-10">
      <div className="w-10/12 m-auto flex justify-between items-center py-5">
        <div
          className="lg:hidden rounded-sm w-7 h-6 flex justify-center items-center cursor-pointer gap-5"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <i className="fa-solid fa-xmark"></i>
          ) : (
            <i className="fa-solid fa-bars"></i>
          )}
        </div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-10/12 md:w-full" />
        </Link>
        <ul className="lg:flex gap-10 hidden">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive && "text-red-600 transition-all"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive && "text-red-600 transition-all"
              }
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
      {menu && (
        <div className="bg-white border">
          <ul className="space-y-5 py-5 w-10/12 m-auto border-t block lg:hidden">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive && "text-red-600 transition-all"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive && "text-red-600 transition-all"
                }
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
