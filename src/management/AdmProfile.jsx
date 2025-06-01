"use client";
import { useState } from "react";
import ManageSide from "./ManageSide";
import TopBar from "./TopBar";

function AdmProfile() {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        <TopBar />
        <div className="flex">
          <div className="sticky top-0 h-screen">
            <ManageSide />
          </div>
          <ProfileCard />
        </div>
      </div>
    </>
  );
}

export default AdmProfile;

function ProfileCard() {
  const [activeTab, setActiveTab] = useState("profile");
  const [isEditing, setIsEditing] = useState(false);

  // Admin data
  const adminData = {
    name: "Flendi Mandala Sukma",
    role: "Administrator",
    email: "flendi.mandala@sciencesociety.id",
    phone: "+62 812-3456-7890",
    joinDate: "15 Januari 2023",
    lastActive: "Hari ini, 10:45",
    avatar: null, // No image, will use initials
    department: "Manajemen Akademik",
    location: "Jakarta, Indonesia",
    bio: "Administrator Science Society dengan pengalaman 2 tahun dalam manajemen bimbel dan persiapan tes SNBT, UTBK, dan Kedinasan.",
    stats: {
      mentorsManaged: 11,
      applicantsProcessed: 48,
      interviewsScheduled: 22,
      testsAdministered: 6,
    },
    recentActivities: [
      {
        id: 2,
        activity: "Meninjau hasil tes lanjutan untuk 3 calon mentor",
        timestamp: "Kemarin, 14:20",
      },
      {
        id: 3,
        activity: "Memperbarui jadwal mentor untuk program SNBT",
        timestamp: "2 hari yang lalu, 11:15",
      },
      {
        id: 4,
        activity: "Menambahkan materi baru untuk persiapan Tes Kedinasan",
        timestamp: "3 hari yang lalu, 16:40",
      },
      {
        id: 5,
        activity: "Evaluasi kinerja mentor semester genap",
        timestamp: "1 minggu yang lalu, 13:25",
      },
    ],
    permissions: [
      { name: "Manajemen Mentor", granted: true },
      { name: "Manajemen Pelamar", granted: false },
      { name: "Manajemen Jadwal", granted: true },
      { name: "Manajemen Keuangan", granted: false },
      { name: "Manajemen Konten", granted: true },
      { name: "Pengaturan Sistem", granted: false },
    ],
  };

  // Form state for editing profile
  const [formData, setFormData] = useState({
    name: adminData.name,
    email: adminData.email,
    phone: adminData.phone,
    department: adminData.department,
    location: adminData.location,
    bio: adminData.bio,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSaveProfile = () => {
    // In a real app, this would save to backend
    // For now, just toggle editing state
    setIsEditing(false);
  };

  return (
    <div className="flex-1 p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">Profil Administrator</h1>
        <p className="text-gray-400 mt-1">
          Kelola informasi profil dan pengaturan akun Anda
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="lg:col-span-1">
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            {/* Profile Header */}
            <div className="p-6 text-center border-b border-gray-700">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-semibold text-white">
                  {adminData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .substring(0, 2)}
                </span>
              </div>
              <h2 className="text-xl font-bold text-white">{adminData.name}</h2>
              <p className="text-blue-400 font-medium">{adminData.role}</p>
              <p className="text-gray-400 text-sm mt-1">
                {adminData.department}
              </p>

              <div className="mt-4 flex justify-center">
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                >
                  Edit Profil
                </button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="p-6 border-b border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">
                Informasi Kontak
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">📧</span>
                  <span className="text-gray-300">{adminData.email}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">📱</span>
                  <span className="text-gray-300">{adminData.phone}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-400 mr-2">📍</span>
                  <span className="text-gray-300">{adminData.location}</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-6">
              <h3 className="text-lg font-semibold text-white mb-4">
                Statistik Admin
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-400">
                    {adminData.stats.mentorsManaged}
                  </p>
                  <p className="text-xs text-gray-400">Mentor Dikelola</p>
                </div>
                <div className="bg-gray-700 p-3 rounded-lg text-center">
                  <p className="text-2xl font-bold text-purple-400">
                    {adminData.stats.testsAdministered}
                  </p>
                  <p className="text-xs text-gray-400">Tes Dilaksanakan</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Tabs */}
        <div className="lg:col-span-2">
          <div className="bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-gray-700">
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "profile"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("profile")}
              >
                Profil
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "activity"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("activity")}
              >
                Aktivitas
              </button>
              <button
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === "permissions"
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab("permissions")}
              >
                Hak Akses
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-6">
              {/* Profile Tab */}
              {activeTab === "profile" && (
                <div>
                  {isEditing ? (
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Edit Profil
                      </h3>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Nomor Telepon
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Departemen
                        </label>
                        <input
                          type="text"
                          name="department"
                          value={formData.department}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Lokasi
                        </label>
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-400 mb-1">
                          Bio
                        </label>
                        <textarea
                          name="bio"
                          value={formData.bio}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                        />
                      </div>
                      <div className="flex gap-3 pt-2">
                        <button
                          onClick={handleSaveProfile}
                          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
                        >
                          Simpan Perubahan
                        </button>
                        <button
                          onClick={() => setIsEditing(false)}
                          className="px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors"
                        >
                          Batal
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-4">
                        Informasi Profil
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-1">
                            Bio
                          </h4>
                          <p className="text-gray-300">{adminData.bio}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-1">
                            Tanggal Bergabung
                          </h4>
                          <p className="text-gray-300">{adminData.joinDate}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-1">
                            Terakhir Aktif
                          </h4>
                          <p className="text-gray-300">
                            {adminData.lastActive}
                          </p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-400 mb-1">
                            Pengaturan Keamanan
                          </h4>
                          <div className="mt-2">
                            <button className="px-4 py-2 border border-gray-600 hover:bg-gray-700 text-gray-300 rounded-lg text-sm font-medium transition-colors">
                              Ubah Kata Sandi
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Activity Tab */}
              {activeTab === "activity" && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Aktivitas Terbaru
                  </h3>
                  <div className="space-y-4">
                    {adminData.recentActivities.map((activity) => (
                      <div
                        key={activity.id}
                        className="bg-gray-700 p-4 rounded-lg border border-gray-600"
                      >
                        <p className="text-gray-300">{activity.activity}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {activity.timestamp}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Permissions Tab */}
              {activeTab === "permissions" && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">
                    Hak Akses
                  </h3>
                  <div className="space-y-3">
                    {adminData.permissions.map((permission, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-3 bg-gray-700 rounded-lg border border-gray-600"
                      >
                        <span className="text-gray-300">{permission.name}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            permission.granted
                              ? "bg-green-900 text-green-200 border border-green-700"
                              : "bg-red-900 text-red-200 border border-red-700"
                          }`}
                        >
                          {permission.granted ? "Diizinkan" : "Tidak Diizinkan"}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <p className="text-sm text-gray-400">
                      Untuk perubahan hak akses, silakan hubungi administrator
                      sistem.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
