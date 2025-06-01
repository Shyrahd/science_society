"use client";

import { useState } from "react";
import NewNav from "./NewNav";

function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Musyafa Nabil Ihsan",
    email: "Musya.Fanabil@gmail.com",
    phone: "+62812 3456 7890",
    department: "Manajemen Informatika",
    studentId: "CS2024001",
    joinDate: "April 2025",
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
      <div className="sticky top-0 z-50 bg-[#1c2953]">
        <NewNav />
      </div>

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

          {/* Application Progress Section */}
          <div className="mt-8">
            <ApplicationProgressCard />
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

function ApplicationProgressCard() {
  const [currentStage, setCurrentStage] = useState(4); // Currently in "Pelatihan" stage

  const stages = [
    {
      id: 1,
      name: "Kirim Lamaran",
      description: "Pengiriman berkas lamaran dan CV",
      date: "1 Mei 2025",
      status: "completed",
      icon: "📄",
      details: {
        title: "Pengiriman Lamaran",
        content:
          "Berkas lamaran telah dikirim dan diterima oleh tim rekrutmen. Semua dokumen persyaratan telah lengkap.",
        requirements: [
          "CV terbaru",
          "Surat lamaran",
          "Transkrip nilai",
          "Portofolio",
        ],
      },
    },
    {
      id: 2,
      name: "Interview",
      description: "Wawancara dengan tim rekrutmen",
      date: "5 Mei 2025",
      status: "completed",
      icon: "💬",
      details: {
        title: "Tahap Interview",
        content:
          "Interview telah dilaksanakan dengan hasil memuaskan. Diskusi meliputi motivasi, pengalaman, dan visi sebagai mentor.",
        requirements: [
          "Interview HR",
          "Interview teknis",
          "Presentasi diri",
          "Diskusi kasus",
        ],
      },
    },
    {
      id: 3,
      name: "Tes Lanjutan",
      description: "Tes kemampuan dan psikologi",
      date: "9 Mei 2025",
      status: "completed",
      icon: "📝",
      details: {
        title: "Tes Lanjutan",
        content:
          "Berhasil menyelesaikan tes kemampuan akademik dan tes psikologi dengan skor yang memenuhi standar.",
        requirements: [
          "Tes akademik",
          "Tes psikologi",
          "Tes mengajar",
          "Assessment center",
        ],
      },
    },
    {
      id: 4,
      name: "Pelatihan",
      description: "Program pelatihan mentor 12 minggu",
      date: "16 Mei 2025",
      status: "current",
      icon: "🎓",
      details: {
        title: "Program Pelatihan",
        content:
          "Sedang mengikuti program pelatihan mentor intensif selama 12 minggu. Saat ini berada di fase onboarding.",
        requirements: [
          "Orientasi",
          "Pelatihan intensif",
          "Sertifikasi",
          "Deployment",
        ],
      },
    },
  ];

  const currentStageData = stages.find((stage) => stage.id === currentStage);
  const progressPercentage = Math.round((currentStage / stages.length) * 100);

  // Calculate the width for the progress connector line
  // We need to adjust this so it doesn't extend too far when at the last stage
  const calculateProgressWidth = () => {
    if (currentStage === 1) return "0%";
    if (currentStage === stages.length) return "calc(100% - 24px)"; // Subtract half the width of the last circle

    // For stages in between, calculate proportionally
    return `calc(${((currentStage - 1) / (stages.length - 1)) * 100}% - 12px)`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-4 md:p-6">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-3">
        <h2 className="text-xl font-semibold text-gray-900">
          Progress Rekrutmen
        </h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full self-start sm:self-auto">
          {progressPercentage}% Selesai
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
        <div
          className="bg-gradient-to-r from-blue-500 to-green-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      {/* Desktop Timeline */}
      <div className="hidden md:block mb-8">
        <div className="relative">
          {/* Background connector line */}
          <div className="absolute top-6 left-6 right-6 h-0.5 bg-gray-300 z-0"></div>

          {/* Progress connector line - adjusted width calculation */}
          <div
            className="absolute top-6 left-6 h-0.5 bg-green-500 transition-all duration-500 z-0"
            style={{ width: calculateProgressWidth() }}
          ></div>

          <div className="grid grid-cols-4 gap-4">
            {stages.map((stage, index) => (
              <div
                key={stage.id}
                className={`relative cursor-pointer transition-all ${
                  stage.status === "completed"
                    ? "text-green-600"
                    : stage.status === "current"
                    ? "text-blue-600"
                    : "text-gray-400"
                }`}
                onClick={() => setCurrentStage(stage.id)}
              >
                {/* Stage Circle */}
                <div
                  className={`relative z-20 w-12 h-12 rounded-full flex items-center justify-center text-xl mb-3 mx-auto border-4 ${
                    stage.status === "completed"
                      ? "bg-green-500 text-white border-green-500"
                      : stage.status === "current"
                      ? "bg-blue-500 text-white border-blue-500"
                      : "bg-white text-gray-500 border-gray-300"
                  }`}
                >
                  {stage.status === "completed" ? "✓" : stage.icon}
                </div>

                {/* Stage Info */}
                <div className="text-center">
                  <h3 className="font-semibold text-sm mb-1">{stage.name}</h3>
                  <p className="text-xs opacity-75 mb-1">{stage.description}</p>
                  <p className="text-xs font-medium">{stage.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Timeline */}
      <div className="md:hidden mb-6">
        <div className="space-y-4">
          {stages.map((stage, index) => (
            <div
              key={stage.id}
              className={`flex items-center gap-4 p-3 rounded-lg border-2 cursor-pointer transition-all ${
                currentStage === stage.id
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-200 bg-white hover:border-gray-300"
              }`}
              onClick={() => setCurrentStage(stage.id)}
            >
              {/* Stage Circle */}
              <div
                className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                  stage.status === "completed"
                    ? "bg-green-500 text-white"
                    : stage.status === "current"
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {stage.status === "completed" ? "✓" : stage.icon}
              </div>

              {/* Stage Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-sm text-gray-900">
                    {stage.name}
                  </h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full flex-shrink-0 ${
                      stage.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : stage.status === "current"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {stage.status === "completed"
                      ? "Selesai"
                      : stage.status === "current"
                      ? "Aktif"
                      : "Pending"}
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-1">
                  {stage.description}
                </p>
                <p className="text-xs font-medium text-gray-500">
                  {stage.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Stage Details */}
      {currentStageData && (
        <div className="bg-gray-50 rounded-lg p-4 md:p-6 border border-gray-200">
          <div className="flex items-start gap-3 mb-4">
            <span className="text-2xl flex-shrink-0">
              {currentStageData.icon}
            </span>
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {currentStageData.details.title}
              </h3>
              <span
                className={`inline-block text-sm px-3 py-1 rounded-full ${
                  currentStageData.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : currentStageData.status === "current"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-gray-100 text-gray-800"
                }`}
              >
                {currentStageData.status === "completed"
                  ? "Selesai"
                  : currentStageData.status === "current"
                  ? "Sedang Berlangsung"
                  : "Belum Dimulai"}
              </span>
            </div>
          </div>

          <p className="text-gray-700 mb-4 text-sm md:text-base">
            {currentStageData.details.content}
          </p>

          <div>
            <h4 className="font-medium text-gray-900 mb-3">Komponen:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentStageData.details.requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span
                    className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      currentStageData.status === "completed"
                        ? "bg-green-500"
                        : currentStageData.status === "current"
                        ? "bg-blue-500"
                        : "bg-gray-300"
                    }`}
                  />
                  <span className="text-sm text-gray-600">{req}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
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
      action: "Selamat ! Anda lulus menjadi Mentor",
      date: "2 Minggu yang Lalu",
      type: "congrats",
    },
    {
      action: "Anda Lolos Ke Tahap Tes Lanjutan",
      date: "3 Minggu yang Lalu",
      type: "application",
    },
    {
      action: "Anda Lolos Ke Tahap Interview",
      date: "3 Minggu yang Lalu",
      type: "application",
    },
    {
      action: "Lamaran Terkirim",
      date: "4 Minggu yang Lalu",
      type: "profile",
    },
    {
      action: "Anda telah membuat akun",
      date: "4 Minggu yang Lalu",
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
      case "congrats":
        return "🎉";
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
