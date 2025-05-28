"use client";

import { useState } from "react";
import NewNav from "./NewNav";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    department: "Computer Science",
    studentId: "CS2024001",
    joinDate: "September 2024",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };

  return (
    <div>
      <NewNav />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            User Profile
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="lg:col-span-1">
              <ProfileCard
                userInfo={userInfo}
                isEditing={isEditing}
                onEdit={handleEdit}
                onSave={handleSave}
              />
            </div>

            {/* Account Details */}
            <div className="lg:col-span-2">
              <AccountDetails
                userInfo={userInfo}
                setUserInfo={setUserInfo}
                isEditing={isEditing}
              />
            </div>
          </div>

          {/* Activity Section */}
          <div className="mt-8">
            <ActivitySection />
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileCard({ userInfo, isEditing, onEdit, onSave }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      {/* Profile Picture */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">
              {userInfo.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <button className="absolute bottom-0 right-0 bg-gray-100 hover:bg-gray-200 text-gray-600 p-2 rounded-full transition-colors border border-gray-300">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </button>
        </div>
        <h2 className="text-xl font-semibold text-gray-900">{userInfo.name}</h2>
        <p className="text-gray-600">{userInfo.department}</p>
        <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mt-2 border border-green-200">
          Active Member
        </span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {!isEditing ? (
          <button
            onClick={onEdit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Edit Profile
          </button>
        ) : (
          <div className="space-y-2">
            <button
              onClick={onSave}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={onEdit}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        )}

        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors border border-gray-300">
          Change Password
        </button>
      </div>
    </div>
  );
}

function AccountDetails({ userInfo, setUserInfo, isEditing }) {
  const handleInputChange = (field, value) => {
    setUserInfo((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Account Details
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Full Name
          </label>
          {isEditing ? (
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              {userInfo.name}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email Address
          </label>
          {isEditing ? (
            <input
              type="email"
              value={userInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              {userInfo.email}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Phone Number
          </label>
          {isEditing ? (
            <input
              type="tel"
              value={userInfo.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              {userInfo.phone}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Department
          </label>
          {isEditing ? (
            <select
              value={userInfo.department}
              onChange={(e) => handleInputChange("department", e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="Computer Science">Computer Science</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Biology">Biology</option>
              <option value="Mathematics">Mathematics</option>
            </select>
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              {userInfo.department}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Student ID
          </label>
          <p className="text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
            {userInfo.studentId}
          </p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Member Since
          </label>
          <p className="text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
            {userInfo.joinDate}
          </p>
        </div>
      </div>
    </div>
  );
}

function ActivitySection() {
  const activities = [
    {
      action: "Anda telah mengajukan lamaran sebagai mentor",
      date: "Hari ini",
      type: "application",
    },
    {
      action: "Anda telah membuat akun",
      date: "Hari ini",
      type: "profile",
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "event":
        return "📅";
      case "profile":
        return "👤";
      case "project":
        return "📋";
      case "application":
        return "📝";
      default:
        return "📝";
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">
        Aktivitas Terbaru
      </h3>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-100"
          >
            <div className="text-2xl">{getActivityIcon(activity.type)}</div>
            <div className="flex-1">
              <p className="text-gray-900 font-medium">{activity.action}</p>
              <p className="text-gray-600 text-sm">{activity.date}</p>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 text-blue-600 hover:text-blue-700 text-sm transition-colors font-medium">
        Lihat Semua Aktivitas
      </button>
    </div>
  );
}

export default UserProfile;
