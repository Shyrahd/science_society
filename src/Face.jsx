import React from "react";
import { Link } from "react-router-dom";

function Face() {
  return (
    <>
      <UserLog />
    </>
  );
}

export default Face;

function UserLog() {
  return (
    <>
      <div className="min-h-screen flex">
        {/* Left Side - User Login */}
        <div className="flex-1 bg-[#1c2953] flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">User Login</h2>
            <Userbtn />
          </div>
        </div>

        {/* Right Side - Management Login */}
        <div className="flex-1 bg-base-300 flex justify-center items-center">
          <div className="text-center">
            <caption></caption>
            <h2 className="text-2xl font-bold mb-4">Management Login</h2>
            <Managebtn />
          </div>
        </div>
      </div>
    </>
  );
}

function Userbtn() {
  return (
    <>
      <Link
        to="/Home"
        className="btn bg-blue-500 text-white border border-purple-500 hover:bg-blue-600 font-bold font-montserrat transition-all duration-300"
      >
        User
      </Link>
    </>
  );
}

function Managebtn() {
  return (
    <>
      <Link
        to="/Dashboard"
        className="btn bg-white text-gray-800 border border-gray-300 hover:bg-gray-100 font-bold font-montserrat transition-all duration-300 shadow-sm"
      >
        Management
      </Link>
    </>
  );
}
