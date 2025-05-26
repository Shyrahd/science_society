import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="navbar px-4 shadow-sm text-white"
        style={{ backgroundColor: "rgb(28, 41, 83)" }}
      >
        {/* Navbar Start */}
        <div className="navbar-start flex items-center gap-2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Profil</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">
            <img src="src\assets\science_society.png" alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/" className="font-bold font-montserrat">
                Home
              </Link>
            </li>
            <li>
              <details>
                <summary className="font-bold font-montserrat">Profile</summary>
                <ul className="p-2">
                  <li>
                    <Link
                      to="/Profil"
                      className="font-bold font-montserrat text-color"
                      style={{ color: "rgb(247, 152, 52)" }}
                    >
                      Profil
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/Jadwal"
                      className="font-bold font-montserrat text-color"
                      style={{ color: "rgb(247, 152, 52)" }}
                    >
                      Jadwal
                    </Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/Lamar" className="font-bold font-montserrat">
                Lamar
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">
            <Link to="/Daftar" className="font-bold font-montserrat">
              Lamar
            </Link>
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
