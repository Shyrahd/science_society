"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="navbar px-4 shadow-sm text-white relative"
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
              className="menu menu-sm dropdown-content bg-[#1c2953] rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/Home" className="font-bold font-montserrat">
                  HomePage
                </Link>
              </li>
              <li>
                <Link to="/Profil" className="font-bold font-montserrat">
                  Profil
                </Link>
              </li>
              <li>
                <Link to="/Jadwal" className="font-bold font-montserrat">
                  Jadwal
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/Home">
            <div className="text-xl">
              <img src="/science_society.png" alt="Science Society" />
            </div>
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
              <Link to="/Profil" className="font-bold font-montserrat">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/Jadwal" className="font-bold font-montserrat">
                Jadwal
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end bg-[#1c2953]">
          <NotifBar />
          <Link to="/" className="btn font-bold font-montserrat">
            Logout
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;

function NotifBar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showNotifMenu, setShowNotifMenu] = useState(false);
  const dropdownRefs = useRef({});
  const notifMenuRef = useRef(null);

  // Handle clicks outside the dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      // Close notification options menu if clicked outside
      if (
        showNotifMenu &&
        notifMenuRef.current &&
        !notifMenuRef.current.contains(event.target)
      ) {
        setShowNotifMenu(false);
      }

      // Close active dropdown if clicked outside
      if (
        activeDropdown &&
        dropdownRefs.current[activeDropdown] &&
        !dropdownRefs.current[activeDropdown].contains(event.target)
      ) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeDropdown, showNotifMenu]);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
    setShowNotifMenu(false); // Close the notification menu when opening a dropdown
  };

  const toggleNotifMenu = () => {
    setShowNotifMenu(!showNotifMenu);
    setActiveDropdown(null); // Close any open dropdown when toggling notification menu
  };

  // Count of total notifications
  const totalNotifications = 6; // 5 inbox + 1 update

  return (
    <>
      {/* Desktop Version - Original 3 buttons */}
      <div className="hidden md:flex items-center gap-1 sm:gap-2">
        {/* Inbox Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("inbox")}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#263761] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2-2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m16 0l-2-2m-14 2l2-2"
              />
            </svg>
            <span className="text-sm">Kotak Masuk</span>
            <span className="bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center sm:text-xs sm:px-2 sm:min-w-[20px]">
              5
            </span>
          </button>
          {activeDropdown === "inbox" && (
            <div
              ref={(el) => (dropdownRefs.current.inbox = el)}
              className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg text-white">
                  Pesan Masuk
                </h3>
                <p className="text-blue-100 text-xs sm:text-sm">
                  Anda memiliki 2 pesan belum dibaca
                </p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                <div className="p-3 sm:p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate text-sm">
                        Pertanyaan dari peserta kursus
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Ahmad bertanya tentang soal latihan PU nomor 15
                      </p>
                      <p className="text-xs text-gray-400 mt-2">1 jam lalu</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate text-sm">
                        Sesi mentoring dijadwalkan
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Sesi mentoring grup besok pukul 14.00
                      </p>
                      <p className="text-xs text-gray-400 mt-2">3 jam lalu</p>
                    </div>
                  </div>
                </div>
                <div className="p-3 sm:p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 truncate text-sm">
                        Tugas peserta sudah dikumpulkan
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        5 peserta telah mengumpulkan latihan soal PU
                      </p>
                      <p className="text-xs text-gray-400 mt-2">5 jam lalu</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
                <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 hover:bg-blue-50 rounded-lg transition-colors text-sm">
                  Lihat Semua Pesan
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Updates Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("updates")}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#263761] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
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
            <span className="text-sm">Pembaruan</span>
            <span className="bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full sm:text-xs sm:px-2">
              BARU
            </span>
          </button>
          {activeDropdown === "updates" && (
            <div
              ref={(el) => (dropdownRefs.current.updates = el)}
              className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-3 sm:p-4">
                <h3 className="font-semibold text-base sm:text-lg text-white">
                  Pembaruan Kursus
                </h3>
                <p className="text-orange-100 text-xs sm:text-sm">
                  Update terbaru untuk mentor
                </p>
              </div>
              <div className="max-h-80 overflow-y-auto">
                <div className="p-3 sm:p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg
                        className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                        />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-900 text-sm">
                        Materi PU baru ditambahkan
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">
                        Modul latihan soal analogi verbal tersedia
                      </p>
                      <p className="text-xs text-gray-400 mt-2">Baru saja</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
                <button className="w-full text-center text-orange-600 hover:text-orange-700 font-medium py-2 hover:bg-orange-50 rounded-lg transition-colors text-sm">
                  Lihat Semua Pembaruan
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Stats Dropdown */}
        <div className="relative">
          <button
            onClick={() => toggleDropdown("stats")}
            className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 rounded-lg hover:bg-[#263761] transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-5 sm:w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span className="text-sm">Statistik</span>
          </button>
          {activeDropdown === "stats" && (
            <div
              ref={(el) => (dropdownRefs.current.stats = el)}
              className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-3 sm:p-4">
                <div className="flex items-center gap-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-white flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-white">
                      Statistik Mentoring
                    </h3>
                    <p className="text-purple-100 text-xs sm:text-sm">
                      Kinerja sebagai mentor PU
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium text-sm">
                      Peserta Dibimbing
                    </span>
                    <span className="font-bold text-green-600">24</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium text-sm">
                      Tingkat Kehadiran
                    </span>
                    <span className="font-bold text-blue-600">92%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                      style={{ width: "92%" }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                    <p className="text-2xl sm:text-3xl font-bold text-blue-700">
                      120
                    </p>
                    <p className="text-xs sm:text-sm text-blue-600 font-medium">
                      Jam Mentoring
                    </p>
                  </div>
                  <div className="text-center p-3 sm:p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <p className="text-2xl sm:text-3xl font-bold text-green-700">
                      8
                    </p>
                    <p className="text-xs sm:text-sm text-green-600 font-medium">
                      Sesi Grup
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200">
                <button className="w-full text-center text-purple-600 hover:text-purple-700 font-medium py-2 hover:bg-purple-50 rounded-lg transition-colors text-sm">
                  Lihat Statistik Detail
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Version - Single notification icon with dropdown */}
      <div className="md:hidden relative mr-2">
        {/* Main notification button */}
        <button
          onClick={toggleNotifMenu}
          className="flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-[#263761] transition-colors duration-200 relative"
          aria-label="Notifications"
        >
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
            {totalNotifications}
          </span>
        </button>

        {/* Notification options menu */}
        {showNotifMenu && (
          <div
            ref={notifMenuRef}
            className="absolute top-full right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-3">
              <h3 className="font-semibold text-base text-white">Notifikasi</h3>
            </div>
            <div className="p-2">
              {/* Inbox Button */}
              <button
                onClick={() => toggleDropdown("inbox")}
                className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2-2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0H4m16 0l-2-2m-14 2l2-2"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  Kotak Masuk
                </span>
                <span className="ml-auto bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                  5
                </span>
              </button>

              {/* Updates Button */}
              <button
                onClick={() => toggleDropdown("updates")}
                className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-orange-600"
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
                <span className="text-sm font-medium text-gray-800">
                  Pembaruan
                </span>
                <span className="ml-auto bg-orange-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                  BARU
                </span>
              </button>

              {/* Stats Button */}
              <button
                onClick={() => toggleDropdown("stats")}
                className="flex items-center gap-2 w-full p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-gray-800">
                  Statistik
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Inbox Dropdown Content */}
        {activeDropdown === "inbox" && (
          <div
            ref={(el) => (dropdownRefs.current.inbox = el)}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4">
              <h3 className="font-semibold text-lg text-white">Pesan Masuk</h3>
              <p className="text-blue-100 text-sm">
                Anda memiliki 2 pesan belum dibaca
              </p>
            </div>
            <div className="max-h-80 overflow-y-auto">
              <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate text-sm">
                      Pertanyaan dari peserta kursus
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Ahmad bertanya tentang soal latihan PU nomor 15
                    </p>
                    <p className="text-xs text-gray-400 mt-2">1 jam lalu</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate text-sm">
                      Sesi mentoring dijadwalkan
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Sesi mentoring grup besok pukul 14.00
                    </p>
                    <p className="text-xs text-gray-400 mt-2">3 jam lalu</p>
                  </div>
                </div>
              </div>
              <div className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 truncate text-sm">
                      Tugas peserta sudah dikumpulkan
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      5 peserta telah mengumpulkan latihan soal PU
                    </p>
                    <p className="text-xs text-gray-400 mt-2">5 jam lalu</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full text-center text-blue-600 hover:text-blue-700 font-medium py-2 hover:bg-blue-50 rounded-lg transition-colors text-sm">
                Lihat Semua Pesan
              </button>
            </div>
          </div>
        )}

        {/* Updates Dropdown Content */}
        {activeDropdown === "updates" && (
          <div
            ref={(el) => (dropdownRefs.current.updates = el)}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-4">
              <h3 className="font-semibold text-lg text-white">
                Pembaruan Kursus
              </h3>
              <p className="text-orange-100 text-sm">
                Update terbaru untuk mentor
              </p>
            </div>
            <div className="max-h-80 overflow-y-auto">
              <div className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                      />
                    </svg>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 text-sm">
                      Materi PU baru ditambahkan
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Modul latihan soal analogi verbal tersedia
                    </p>
                    <p className="text-xs text-gray-400 mt-2">Baru saja</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full text-center text-orange-600 hover:text-orange-700 font-medium py-2 hover:bg-orange-50 rounded-lg transition-colors text-sm">
                Lihat Semua Pembaruan
              </button>
            </div>
          </div>
        )}

        {/* Stats Dropdown Content */}
        {activeDropdown === "stats" && (
          <div
            ref={(el) => (dropdownRefs.current.stats = el)}
            className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4">
              <div className="flex items-center gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
                <div>
                  <h3 className="font-semibold text-lg text-white">
                    Statistik Mentoring
                  </h3>
                  <p className="text-purple-100 text-sm">
                    Kinerja sebagai mentor PU
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Peserta Dibimbing
                  </span>
                  <span className="font-bold text-green-600">24</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-green-500 to-green-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium text-sm">
                    Tingkat Kehadiran
                  </span>
                  <span className="font-bold text-blue-600">92%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-300"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <p className="text-3xl font-bold text-blue-700">120</p>
                  <p className="text-sm text-blue-600 font-medium">
                    Jam Mentoring
                  </p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                  <p className="text-3xl font-bold text-green-700">8</p>
                  <p className="text-sm text-green-600 font-medium">
                    Sesi Grup
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <button className="w-full text-center text-purple-600 hover:text-purple-700 font-medium py-2 hover:bg-purple-50 rounded-lg transition-colors text-sm">
                Lihat Statistik Detail
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
