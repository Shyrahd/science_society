"use client";

import { useState } from "react";
import Navbar from "./Navbar";

function profil() {
  return (
    <>
      <Navbar />
      <Profilhome />
    </>
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

export default profil;

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
          <div>
            <h1 className="text-5xl font-bold">Halo Tri Aji Alhuda!</h1>
            <p className="py-6">
              Selamat datang di profil Anda. Sebagai pengajar Penalaran Umum
              dengan latar belakang Sarjana Ilmu Komputer, Anda dapat mengelola
              informasi profil, melihat statistik mengajar, dan mengatur
              pengaturan akun di sini.
            </p>
            <button className="btn btn-primary">Mulai</button>
          </div>
        );
    }
  };

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/pp_aji.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-50"
          />
          <ProfileMenu
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          <div className="flex-1">{renderContent()}</div>
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
            Pengajar PU (Penalaran Umum) - Ilmu Komputer
          </p>
        </div>
        <div className="px-6 pb-6 text-sm text-gray-700">
          <p>
            <span className="font-semibold">NIDN:</span> 0123456789
          </p>
          <p>
            <span className="font-semibold">Email:</span>{" "}
            triaji.alhuda@universitas.ac.id
          </p>
          <p>
            <span className="font-semibold">No. Telepon:</span> +62
            812-3456-7890
          </p>
          <p>
            <span className="font-semibold">Alamat:</span> Jl. Pendidikan No.
            15, Jakarta Selatan
          </p>
          <p>
            <span className="font-semibold">Bidang Keahlian:</span> Penalaran
            Umum, Logika Matematika, Pemrograman
          </p>
          <p>
            <span className="font-semibold">Riwayat Pendidikan:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>S1 Ilmu Komputer - Universitas Indonesia</li>
            <li>Sertifikasi Pengajar Penalaran Umum</li>
            <li>Pelatihan Metode Pembelajaran Modern</li>
          </ul>
          <p className="mt-2">
            <span className="font-semibold">Pengalaman Mengajar:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Penalaran Umum - 5 tahun</li>
            <li>Logika dan Algoritma - 3 tahun</li>
            <li>Dasar-dasar Pemrograman - 2 tahun</li>
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
        <h2 className="text-3xl font-bold mb-6 text-gray-800">
          Detail Pengajar
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Pengalaman Mengajar
              </h3>
              <p className="text-gray-600">
                5+ tahun mengajar Penalaran Umum dan mata kuliah terkait
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Spesialisasi
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Penalaran Umum (PU)</li>
                <li>Logika Matematika</li>
                <li>Pemrograman Dasar</li>
                <li>Algoritma dan Struktur Data</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Metode Mengajar
              </h3>
              <p className="text-gray-600">
                Pendekatan interaktif dengan studi kasus dan latihan praktis
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Mahasiswa Dibimbing
              </h3>
              <p className="text-2xl font-bold text-primary">200+</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Tingkat Kelulusan
              </h3>
              <p className="text-2xl font-bold text-success">92%</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">
                Jam Mengajar
              </h3>
              <p className="text-gray-600">Senin - Jumat: 08:00 - 16:00</p>
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
                Pengajar Terbaik Fakultas 2023
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">
                Mengembangkan modul pembelajaran PU terbaru
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">
                Membimbing 15 mahasiswa berprestasi tahun ini
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
            <h2 className="card-title text-primary">Modul Pembelajaran</h2>
            <div className="text-3xl font-bold text-gray-700">12</div>
            <p className="text-gray-600">
              Modul PU yang telah dikembangkan dan digunakan
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
              Persentase mahasiswa yang berhasil lulus mata kuliah
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-success btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-warning">Kelas Aktif</h2>
            <div className="text-3xl font-bold text-gray-700">6</div>
            <p className="text-gray-600">
              Kelas yang sedang diampu semester ini
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-info">Jam Mengajar</h2>
            <div className="text-3xl font-bold text-gray-700">480</div>
            <p className="text-gray-600">Total jam mengajar semester ini</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-secondary">Penghargaan</h2>
            <div className="text-3xl font-bold text-gray-700">5</div>
            <p className="text-gray-600">
              Penghargaan dalam bidang pengajaran dan pendidikan
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary btn-sm">Lihat Detail</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-accent">Evaluasi Mahasiswa</h2>
            <div className="text-3xl font-bold text-gray-700">4.7/5</div>
            <p className="text-gray-600">
              Rata-rata penilaian dari evaluasi mahasiswa
            </p>
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
    email: "triaji.alhuda@universitas.ac.id",
    phone: "+62 812-3456-7890",
    department: "Ilmu Komputer",
    employeeId: "PU2024001",
    joinDate: "Januari 2019",
    position: "Pengajar PU (Penalaran Umum)",
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
        <p className="text-gray-600">{userInfo.position}</p>
        <span className="inline-block bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm mt-2 border border-green-200">
          Pengajar Aktif
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
            Departemen
          </label>
          {isEditing ? (
            <select
              value={userInfo.department}
              onChange={(e) => handleInputChange("department", e.target.value)}
              className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            >
              <option value="Ilmu Komputer">Ilmu Komputer</option>
              <option value="Matematika">Matematika</option>
              <option value="Fisika">Fisika</option>
              <option value="Kimia">Kimia</option>
              <option value="Biologi">Biologi</option>
            </select>
          ) : (
            <p className="text-gray-900 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              {userInfo.department}
            </p>
          )}
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            ID Pegawai
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
      action: "Mengajar kelas PU Pagi",
      date: "2 hari yang lalu",
      type: "teaching",
    },
    {
      action: "Memperbarui modul pembelajaran",
      date: "1 minggu yang lalu",
      type: "content",
    },
    {
      action: "Evaluasi ujian tengah semester",
      date: "2 minggu yang lalu",
      type: "evaluation",
    },
    {
      action: "Workshop metode pembelajaran",
      date: "3 minggu yang lalu",
      type: "training",
    },
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case "teaching":
        return "👨‍🏫";
      case "content":
        return "📚";
      case "evaluation":
        return "📝";
      case "training":
        return "🎓";
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
