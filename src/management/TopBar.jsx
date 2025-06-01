function TopBar() {
    return (
      <div className="bg-gray-900 border-b border-gray-700 px-6 py-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src="/logo_ss.png?height=32&width=32" alt="Logo" className="w-8 h-8" />
            <h1 className="text-xl font-semibold text-white">Science Society Management System</h1>
          </div>
  
          {/* Optional: Add user info or actions on the right */}
          <div className="flex items-center space-x-4">
            <div className="text-sm text-gray-300">Welcome, Flendi</div>
            <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default TopBar
  