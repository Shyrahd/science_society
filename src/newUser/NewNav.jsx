import React from "react";
import { Link } from "react-router-dom";

function NewNav() {
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
              className="menu menu-sm dropdown-content bg-[#1c2953] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/Home" className="font-bold font-montserrat">
                  HomePage
                </Link>
              </li>
              <li>
                <Link to="/User" className="font-bold font-montserrat">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/Lamar" className="font-bold font-montserrat">
                  Lamar
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/Home">
            <a className=" text-xl">
              <img src="/science_society.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/Home" className="font-bold font-montserrat">
                Home
              </Link>
            </li>
            <li>
              <Link to="/User" className="font-bold font-montserrat">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/Lamar" className="font-bold font-montserrat">
                Lamar
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end bg-[#1c2953]">
          <NewNotif />
          <Link to="/" className="btn font-bold font-montserrat">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default NewNav;

function NewNotif() {
  return (
    <>
      <ul className="menu bg- lg:menu-horizontal rounded-box">
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Inbox
            <span className="badge badge-xs">99+</span>
          </a>
        </li>
        <li>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Updates
            <span className="badge badge-xs badge-warning">NEW</span>
          </a>
        </li>
        <li>
          <a>
            Stats
            <span className="badge badge-xs badge-info"></span>
          </a>
        </li>
      </ul>
    </>
  );
}
