"use client";

import { useState } from "react";
import Navbar from "./Navbar";

function profil() {
  return (
    <>
      <div className="sticky top-0 z-50 bg-[#1c2953]">
        <Navbar />
      </div>

      <Profilhome />
    </>
  );
}

function InstructorIdCard() {
  return (
    <div className="w-64 mt-4 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-lg shadow-lg">
      <div className="p-4">
        <div className="text-center space-y-3">
          {/* Header */}
          <div className="flex items-center justify-center space-x-2 mb-3">
            <svg
              className="h-5 w-5 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
            </svg>
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
              ID Pengajar
            </span>
          </div>

          {/* Name */}
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <span className="text-xs text-gray-600 font-medium">Nama</span>
            </div>
            <h3 className="font-bold text-gray-900 text-sm leading-tight">
              Tri Aji Alhuda
            </h3>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <div className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full inline-block">
              Mentor Penalaran Umum
            </div>
          </div>

          {/* Course */}
          <div className="space-y-1">
            <div className="flex items-center justify-center space-x-2">
              <svg
                className="h-4 w-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="text-xs text-gray-600 font-medium">
                Spesialisasi
              </span>
            </div>
            <p className="text-sm font-semibold text-blue-700">
              Penalaran Umum
            </p>
          </div>

          {/* Department */}
          <div className="pt-2 border-t border-blue-200">
            <p className="text-xs text-gray-600">Bimbel Science Society</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProfileMenu({ activeSection, onSectionChange }) {
  return (
    <>
      <ul className="menu bg-base-200 rounded-box">
        <li>
          <a
            className={`tooltip tooltip-right ${
              activeSection === "biodata"
                ? "active bg-primary text-primary-content"
                : ""
            }`}
            data-tip="Biodata"
            onClick={() => onSectionChange("biodata")}
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
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={`tooltip tooltip-right ${
              activeSection === "details"
                ? "active bg-primary text-primary-content"
                : ""
            }`}
            data-tip="Detail"
            onClick={() => onSectionChange("details")}
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
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={`tooltip tooltip-right ${
              activeSection === "stats"
                ? "active bg-primary text-primary-content"
                : ""
            }`}
            data-tip="Statistik"
            onClick={() => onSectionChange("stats")}
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
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={`tooltip tooltip-right ${
              activeSection === "akun"
                ? "active bg-primary text-primary-content"
                : ""
            }`}
            data-tip="Akun"
            onClick={() => onSectionChange("akun")}
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}

function Profilhome() {
  const [activeSection, setActiveSection] = useState("home");

  const renderContent = () => {
    switch (activeSection) {
      case "biodata":
        return <Biodata />;
      case "details":
        return <MentorDetail />;
      case "stats":
        return <Performa />;
      case "akun":
        return <Akun />;
      default:
        return (
          <div className="w-full bg-white rounded-lg shadow-lg p-6 mb-6">
            <p>
              Selamat datang di profil Anda! Di halaman ini, Anda dapat melihat
              biodata lengkap, informasi detail tentang aktivitas mengajar,
              serta melakukan pengaturan akun sesuai kebutuhan Anda.
            </p>
          </div>
        );
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-base-100 py-4 px-6 shadow-sm">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Halo Tri Aji Alhuda!
          </h1>
        </div>
      </div>

      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row w-full max-w-7xl">
          <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-6 w-full">
            {/* Fixed Left Side - Profile Photo, ID Card and Menu */}
            <div className="flex flex-col items-center lg:items-start space-y-4 lg:w-80 flex-shrink-0">
              <div className="flex flex-col">
                <div className="flex">
                  <img
                    src="/pp_aji.jpg"
                    className="w-64 h-80 object-cover rounded-lg shadow-2xl"
                    alt="Profile Picture"
                  />
                  <div className="w-full flex justify-center lg:justify-start mt-4">
                    <ProfileMenu
                      activeSection={activeSection}
                      onSectionChange={setActiveSection}
                    />
                  </div>
                </div>

                {/* ID Card below the picture */}
                <InstructorIdCard />
              </div>
            </div>

            {/* Dynamic Content Area */}
            <div className="flex-1 min-h-[600px] w-full lg:w-auto mt-6 lg:mt-0">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Biodata() {
  return (
    <div className="flex justify-center items-center min-h-full bg-transparent p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <h2 className="text-2xl font-bold mt-4 text-gray-800">
            Tri Aji Alhuda
          </h2>
          <p className="text-sm text-gray-500">
            Mentor Penalaran Umum - Bimbel Science Society
          </p>
        </div>
        <div className="px-6 pb-6 text-sm text-gray-700">
          <p>
            <span className="font-semibold">ID Mentor:</span> PU2024001
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            triaji.alhuda@bimbelSS.com
          </p>
          <p>
            <span className="font-semibold">No. Telepon:</span> +62
            812-3456-7890
          </p>
          <p>
            <span className="font-semibold">Alamat:</span> Jl. Gub H Bastari E4,
            Palembang
          </p>
          <p>
            <span className="font-semibold">Bidang Keahlian:</span> Penalaran
            Umum, Logika Matematika, Strategi UTBK
          </p>
          <p>
            <span className="font-semibold">Riwayat Pendidikan:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>S1 Manajemen Informatika - Polsri</li>
          </ul>
          <p className="mt-2">
            <span className="font-semibold">Pengalaman Mengajar:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Penalaran Umum UTBK - 2 tahun</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function MentorDetail() {
  return (
    <div className="flex justify-center items-center min-h-full p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Detail Mentor</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Pengalaman Mengajar
              </h3>
              <p className="text-gray-600">Pengajar PU selama 2 Tahun</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Spesialisasi
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Penalaran Umum UTBK & SNBT</li>
                <li>Persiapan Sekolah Kedinasan</li>
                <li>Logika Matematika & Figural</li>
                <li>Strategi Pengerjaan Soal</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Metode Mengajar
              </h3>
              <p className="text-gray-600">
                Pendekatan personal dengan kelas kecil (5-12 siswa) untuk hasil
                optimal
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Siswa Dibimbing
              </h3>
              <p className="text-2xl font-bold text-primary">25</p>
              <p className="text-sm text-gray-500">siswa aktif saat ini</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Tingkat Kelulusan
              </h3>
              <p className="text-2xl font-bold text-success">92%</p>
              <p className="text-sm text-gray-500">siswa lolos PTN/Kedinasan</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Jam Mengajar
              </h3>
              <p className="text-gray-600">20 jam/minggu</p>
              <p className="text-sm text-gray-500">10 sesi per minggu</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">
            Pencapaian Terbaru
          </h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">
                Mentor Terbaik Bimbel Science Society 2024
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">
                Mengembangkan metode pembelajaran kelas kecil
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">
                Membimbing 25 siswa lolos PTN favorit tahun ini
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Performa() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">
        Ringkasan Kinerja
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-primary">Sesi Minggu Ini</h2>
            <div className="text-3xl font-bold text-gray-700">10</div>
            <p className="text-gray-600">
              Sesi pembelajaran yang telah dilaksanakan
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-success">Tingkat Kelulusan</h2>
            <div className="text-3xl font-bold text-gray-700">92%</div>
            <p className="text-gray-600">
              Persentase siswa yang berhasil lolos ujian
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-success btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-warning">Siswa Aktif</h2>
            <div className="text-3xl font-bold text-gray-700">25</div>
            <p className="text-gray-600">Total siswa yang sedang dibimbing</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-info">Jam Mengajar</h2>
            <div className="text-3xl font-bold text-gray-700">20</div>
            <p className="text-gray-600">Jam mengajar per minggu</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-secondary">Program Aktif</h2>
            <div className="text-3xl font-bold text-gray-700">5</div>
            <p className="text-gray-600">
              Program pembelajaran yang sedang berjalan
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-accent">Evaluasi Siswa</h2>
            <div className="text-3xl font-bold text-gray-700">4.8/5</div>
            <p className="text-gray-600">Rata-rata penilaian dari siswa</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Akun() {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: "Tri Aji Alhuda",
    email: "triaji.alhuda@bimbelScience Society.com",
    phone: "+62 812-3456-7890",
    department: "Bimbel Science Society",
    employeeId: "PU2024001",
    joinDate: "Januari 2024",
    position: "Mentor Penalaran Umum",
  });

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add save logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Pengaturan Akun
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
  );
}

function ProfileCard({ userInfo, isEditing, onEdit, onSave }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
      {/* Profile Picture */}
      <div className="text-center mb-6">
        <div className="relative inline-block">
          <img
            src="/ji.jpeg"
            alt="Profile Picture"
            className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-gray-200"
          />
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
        <p className="text-gray-600">{userInfo.position}</p>
        <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mt-2 border border-green-200">
          Mentor Aktif
        </span>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        {!isEditing ? (
          <button
            onClick={onEdit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors"
          >
            Edit Profil
          </button>
        ) : (
          <div className="space-y-2">
            <button
              onClick={onSave}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Simpan Perubahan
            </button>
            <button
              onClick={onEdit}
              className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded-lg transition-colors"
            >
              Batal
            </button>
          </div>
        )}

        <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors border border-gray-300">
          Ubah Kata Sandi
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
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Detail Akun</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Nama Lengkap
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
            Alamat Email
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
            Nomor Telepon
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
            Institusi
          </label>
          {isEditing ? (
            <select
              value={userInfo.department}
              onChange={(e) => handleInputChange("department", e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="Bimbel Science Society">
                Bimbel Science Society
              </option>
              <option value="Bimbel Neutron">Bimbel Neutron</option>
              <option value="Bimbel Ganesha">Bimbel Ganesha</option>
              <option value="Bimbel Primagama">Bimbel Primagama</option>
            </select>
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              {userInfo.department}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            ID Mentor
          </label>
          <p className="text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
            {userInfo.employeeId}
          </p>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Bergabung Sejak
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
      action: "Mengajar kelas UTBK Intensif",
      date: "Hari ini",
      type: "teaching",
    },
    {
      action: "Konsultasi personal dengan 5 siswa",
      date: "Kemarin",
      type: "consultation",
    },
    {
      action: "Memperbarui materi Penalaran Figural",
      date: "2 hari yang lalu",
      type: "content",
    },
    {
      action: "Try Out UTBK dengan 11 siswa",
      date: "3 hari yang lalu",
      type: "evaluation",
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "teaching":
        return "👨‍🏫";
      case "consultation":
        return "💬";
      case "content":
        return "📚";
      case "evaluation":
        return "📝";
      default:
        return "📋";
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

export default profil;
