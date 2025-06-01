"use client";

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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#1c2953] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/LandPage" className="font-bold font-montserrat">
                  HomePage
                </Link>
              </li>
              <li>
                <Link to="/User" className="font-bold font-montserrat">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/Pelatihan" className="font-bold font-montserrat">
                  Pelatihan
                </Link>
              </li>
              <li>
                <Link to="/Lamar" className="font-bold font-montserrat">
                  Lamar
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/LandPage">
            <a className=" text-xl">
              <img src="/science_society.png" alt="" />
            </a>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/LandPage" className="font-bold font-montserrat">
                Home
              </Link>
            </li>
            <li>
              <Link to="/User" className="font-bold font-montserrat">
                Profil
              </Link>
            </li>
            <li>
              <Link to="/Pelatihan" className="font-bold font-montserrat">
                Pelatihan
              </Link>
            </li>
            <li>
              <Link to="/Lamar" className="font-bold font-montserrat">
                Lamar
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end bg-[#1c2953] flex items-center gap-2">
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
  const notifications = [
    {
      id: 5,
      title: "Selamat ! Anda Diterima",
      message: "Anda telah diterima menjadi Mentor dan akan memulai pelatihan",
      time: "2 Minggu yang lalu",
      isRead: true,
    },
    {
      id: 4,
      title: "Anda lolos ketahap Tes Lanjutan",
      message:
        "Anda akan mendapatkan jadwal Tes Lanjutan melalui WA, Silahkan Mengonfirmasi Jadwal",
      time: "3 Minggu yang lalu",
      isRead: true,
    },
    {
      id: 3,
      title: "Anda lolos ketahap Interview",
      message:
        "Anda akan segera mendapatkan pesan melalui WA, Silahkan Mengonfirmasi Jadwal",
      time: "3 Minggu yang lalu",
      isRead: true,
    },
    {
      id: 2,
      title: "Lamaran Terkirim",
      message: "Lamaran Anda telah berhasil dikirim",
      time: "4 Minggu yang lalu",
      isRead: true,
    },
    {
      id: 1,
      title: "Akun Berhasil Dibuat",
      message: "Anda berhasil membuat akun baru",
      time: "4 Minggu yang lalu",
      isRead: true,
    },
  ];

  const unreadCount = notifications.filter((notif) => !notif.isRead).length;

  const toggleDropdown = (e) => {
    const dropdown = e.currentTarget.parentElement;
    dropdown?.classList.toggle("dropdown-open");
  };

  const markAllAsRead = () => {
    console.log("Marking all notifications as read");
  };

  React.useEffect(() => {
    function handleClickOutside(event) {
      const dropdowns = document.querySelectorAll(".dropdown-open");
      dropdowns.forEach((dropdown) => {
        if (!dropdown.contains(event.target)) {
          dropdown.classList.remove("dropdown-open");
        }
      });
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle relative"
        onClick={toggleDropdown}
      >
        {/* Simple white bell icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="badge badge-sm badge-error absolute -top-1 -right-1">
            {unreadCount}
          </span>
        )}
      </div>

      <div
        tabIndex={0}
        className="dropdown-content card card-compact w-80 p-2 shadow bg-base-100 text-base-content mt-3"
      >
        <div className="card-body">
          <h3 className="font-bold text-lg mb-3">Notifikasi</h3>
          <div className="space-y-3">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-3 rounded-lg border-l-4 ${
                  notification.isRead
                    ? "border-gray-300 bg-gray-50"
                    : "border-primary bg-primary/5"
                }`}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h4
                      className={`font-semibold text-sm ${
                        notification.isRead
                          ? "text-gray-600"
                          : "text-base-content"
                      }`}
                    >
                      {notification.title}
                    </h4>
                    <p
                      className={`text-xs mt-1 ${
                        notification.isRead
                          ? "text-gray-500"
                          : "text-base-content/70"
                      }`}
                    >
                      {notification.message}
                    </p>
                    <span className="text-xs text-gray-400 mt-2 block">
                      {notification.time}
                    </span>
                  </div>
                  {!notification.isRead && (
                    <div className="w-2 h-2 bg-primary rounded-full ml-2 mt-1"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="card-actions justify-end mt-4"></div>
        </div>
      </div>
    </div>
  );
}
