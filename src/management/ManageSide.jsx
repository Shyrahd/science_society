"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ManageSide() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsSidebarOpen(false); // Close sidebar on mobile by default
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {/* Mobile overlay */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Mobile toggle button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-16 left-4 z-50 p-2 bg-gray-800 text-white rounded-lg shadow-lg hover:bg-gray-700 transition-colors md:hidden"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Desktop toggle button - always visible */}
      <button
        onClick={toggleSidebar}
        className={`hidden md:block fixed top-20 z-50 p-2 bg-gray-700 text-white rounded-full shadow-lg hover:bg-gray-600 transition-all duration-300 ${
          isSidebarOpen ? "left-[300px]" : "left-4"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isSidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          )}
        </svg>
      </button>

      <div
        className={`${
          isSidebarOpen
            ? "translate-x-0"
            : "-translate-x-full md:-translate-x-0"
        } ${
          isSidebarOpen ? "md:w-80" : "md:w-0"
        } fixed md:relative z-40 transition-all duration-300 ease-in-out w-80 flex-shrink-0 overflow-hidden`}
      >
        <SideBar />
      </div>
    </>
  );
}

export default ManageSide;

function SideBar() {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isRecruitmentOpen, setIsRecruitmentOpen] = useState(false);
  const [isPerformanceOpen, setIsPerformanceOpen] = useState(false);

  const toggleDashboard = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleRecruitment = () => {
    setIsRecruitmentOpen(!isRecruitmentOpen);
  };

  const togglePerformance = () => {
    setIsPerformanceOpen(!isPerformanceOpen);
  };

  return (
    <div className="relative flex h-screen w-full flex-col rounded-xl bg-gray-900 bg-clip-border p-4 text-gray-100 shadow-xl shadow-black/20">
      <div className="p-4 pt-10 md:pt-4 mb-2">
        <div className="flex items-center space-x-2">
          <Link to="/Dashboard" className="flex">
            <img
              src="/logo_ss.png?height=24&width=24"
              alt="Logo"
              className="w-6 h-6 mr-3"
            />
            <h5 className="font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-white">
              Science Society HR
            </h5>
          </Link>
        </div>
      </div>
      <nav className="flex min-w-[240px] flex-col gap-1 p-2 font-sans text-base font-normal text-gray-300">
        <button
          onClick={() => (window.location.href = "/Dashboard")}
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100 cursor-pointer"
        >
          <div className="grid mr-4 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
            </svg>
          </div>
          Dashboard
        </button>
        <div className="relative block w-full">
          <div
            role="button"
            className="flex items-center w-full p-0 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100"
          >
            <button
              type="button"
              onClick={toggleRecruitment}
              className="flex items-center justify-between w-full p-3 font-sans text-xl antialiased font-semibold leading-snug text-left transition-colors border-b-0 select-none border-b-gray-700 text-gray-300 hover:text-gray-100"
            >
              <div className="grid mr-4 place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              </div>
              <p className="block mr-auto font-sans text-base antialiased font-normal leading-relaxed text-white">
                Recruitment
              </p>
              <span className="ml-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className={`w-4 h-4 mx-auto transition-transform ${
                    isRecruitmentOpen ? "rotate-180" : ""
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  ></path>
                </svg>
              </span>
            </button>
          </div>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isRecruitmentOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-400">
              <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-gray-300">
                <Link
                  to="/Pelamar"
                  className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100"
                >
                  <div className="grid mr-4 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </div>
                  Applications
                </Link>
                <Link to="/Interview">
                  <button className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100">
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    Interviews
                  </button>
                </Link>
                <Link to="/TesLanjutan">
                  <button className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100">
                    <div className="grid mr-4 place-items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="3"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="w-5 h-3"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        ></path>
                      </svg>
                    </div>
                    Advanced Test
                  </button>
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="relative block w-full">
          <div
            className={`overflow-hidden transition-all duration-300 ${
              isPerformanceOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="block w-full py-1 font-sans text-sm antialiased font-light leading-normal text-gray-400">
              <nav className="flex min-w-[240px] flex-col gap-1 p-0 font-sans text-base font-normal text-gray-300">
                <button className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100">
                  <div className="grid mr-4 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </div>
                  Evaluations
                </button>
                <button className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100">
                  <div className="grid mr-4 place-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="3"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="w-5 h-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                      ></path>
                    </svg>
                  </div>
                  Feedback
                </button>
              </nav>
            </div>
          </div>
        </div>
        <Link to="/Mentor">
          <button className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100">
            <div className="grid mr-4 place-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
              </svg>
            </div>
            Mentors Directory
            <div className="grid ml-auto place-items-center justify-self-end">
              <div className="relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-full select-none whitespace-nowrap bg-gray-600/50 text-gray-200">
                <span className="">11</span>
              </div>
            </div>
          </button>
        </Link>
        <button
          onClick={() => (window.location.href = "/AdmProfile")}
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100"
        >
          <div className="grid mr-4 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Profile
        </button>
        <button
          onClick={() => (window.location.href = "/")}
          className="flex items-center w-full p-3 leading-tight transition-all rounded-lg outline-none text-start hover:bg-gray-700 hover:bg-opacity-80 hover:text-gray-100 focus:bg-gray-700 focus:bg-opacity-80 focus:text-gray-100 active:bg-gray-700 active:bg-opacity-80 active:text-gray-100 cursor-pointer"
        >
          <div className="grid mr-4 place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          Log out
        </button>
      </nav>
    </div>
  );
}

export { ManageSide };

function TopView() {
  return (
    <div className="bg-gray-900 border-b border-gray-800 p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Science Society - Dashboard Manajemen
        </h1>
        <div className="flex items-center space-x-4">
          <span className="text-gray-300">Admin</span>
          <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
