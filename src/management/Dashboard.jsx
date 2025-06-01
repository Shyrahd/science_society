"use client";

import ManageSide from "./ManageSide";
import TopBar from "./TopBar";

function Dashboard() {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        <TopBar />
        <div className="flex">
          <div className="sticky top-0 h-screen">
            <ManageSide />
          </div>
          <HomeDash />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

function HomeDash() {
  const mentors = [
    {
      id: 1,
      name: "Dr. Ahmad Wijaya, S.Pd., M.Pd",
      education: "S3 Pendidikan Matematika - UGM",
      experience: "8 tahun",
      rating: 4.9,
      subjects: ["TIU", "Matematika", "Logika"],
      specialization: "Mentor Ahli TIU untuk Tes Kedinasan dan SNBT",
      status: "Aktif",
    },
    {
      id: 2,
      name: "Sari Indrawati, S.H., M.H",
      education: "S2 Hukum Tata Negara - UI",
      experience: "6 tahun",
      rating: 4.8,
      subjects: ["TWK", "Pancasila", "UUD 1945"],
      specialization: "Spesialis TWK untuk Seleksi Kedinasan dan UTBK",
      status: "Aktif",
    },
    {
      id: 3,
      name: "Prof. Budi Santoso, M.Psi",
      education: "S2 Psikologi - UNPAD",
      experience: "10 tahun",
      rating: 4.9,
      subjects: ["TKP", "Psikologi", "Kepribadian"],
      specialization: "Ahli TKP dan Pengembangan Karakter untuk Tes Masuk",
      status: "Aktif",
    },
    {
      id: 4,
      name: "Dewi Lestari, S.S., M.Hum",
      education: "S2 Linguistik - UGM",
      experience: "7 tahun",
      rating: 4.7,
      subjects: ["Bahasa Indonesia", "PUEBI", "Sastra"],
      specialization: "Instruktur Bahasa Indonesia untuk UTBK dan Kedinasan",
      status: "Aktif",
    },
    {
      id: 5,
      name: "James Richardson, M.A",
      education: "Master of Arts - Oxford University",
      experience: "9 tahun",
      rating: 4.8,
      subjects: ["Bahasa Inggris", "TOEFL", "Grammar"],
      specialization: "Pengajar Bahasa Inggris untuk SNBT dan UTBK",
      status: "Aktif",
    },
    {
      id: 6,
      name: "Dr. Rina Kartika, S.Pd., M.Pd",
      education: "S3 Pendidikan Sejarah - UNJ",
      experience: "12 tahun",
      rating: 4.9,
      subjects: ["Sejarah", "TWK", "Wawasan Nusantara"],
      specialization: "Mentor TWK Sejarah & Kebangsaan untuk Tes Kedinasan",
      status: "Aktif",
    },
    {
      id: 7,
      name: "Agus Prasetyo, S.E., M.M",
      education: "S2 Manajemen - ITB",
      experience: "5 tahun",
      rating: 4.6,
      subjects: ["Ekonomi", "Manajemen", "TIU"],
      specialization: "Pengajar Ekonomi & TIU untuk SNBT dan UTBK",
      status: "Aktif",
    },
    {
      id: 8,
      name: "Dr. Maya Sari, S.Sos., M.Si",
      education: "S3 Sosiologi - UNAIR",
      experience: "8 tahun",
      rating: 4.8,
      subjects: ["Sosiologi", "Antropologi", "TWK"],
      specialization: "Mentor TWK Sosial Budaya untuk Kedinasan",
      status: "Aktif",
    },
    {
      id: 9,
      name: "Hendra Gunawan, S.Pd., M.Pd",
      education: "S2 Pendidikan Geografi - UPI",
      experience: "6 tahun",
      rating: 4.7,
      subjects: ["Geografi", "Lingkungan", "TWK"],
      specialization: "Ahli TWK Lingkungan & Geografi untuk Tes Masuk",
      status: "Aktif",
    },
    {
      id: 10,
      name: "Tri Aji Alhuda",
      education: "D4 Manajemen Informatika - POLSRI",
      experience: "2 tahun",
      rating: 4.8,
      subjects: ["PU", "Konseling", "Motivasi"],
      specialization: "Mentor Konseling & Motivasi Belajar Tes SNBT",
      status: "Aktif",
    },
    {
      id: 11,
      name: "Musyafa Nabil Ihsan",
      education: "D4 Manajemen Informatika - POLSRI",
      experience: " - ",
      rating: "-",
      subjects: ["TWK", "Konseling", "Motivasi"],
      specialization: "Mentor Konseling & Motivasi Belajar Tes SNBT",
      status: "Pelatihan",
    },
  ];

  const handleCardClick = (cardType) => {
    // Navigation logic would go here
    console.log(`Navigating to ${cardType} page`);
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Pelamar Card */}
        <div
          className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          onClick={() => handleCardClick("pelamar")}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Total Pelamar</h3>
              <p className="text-3xl font-bold">247</p>
              <p className="text-blue-200 text-sm mt-1">+12 bulan ini</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-blue-200 text-2xl">
              👥
            </div>
          </div>
        </div>

        {/* Interview Card */}
        <div
          className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          onClick={() => handleCardClick("interview")}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Interview</h3>
              <p className="text-3xl font-bold">89</p>
              <p className="text-green-200 text-sm mt-1">Menunggu jadwal</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-green-200 text-2xl">
              🤝
            </div>
          </div>
        </div>

        {/* Aktif Card */}
        <div
          className="bg-gradient-to-br from-orange-600 to-orange-700 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          onClick={() => handleCardClick("Aktif")}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Dalam Aktif</h3>
              <p className="text-3xl font-bold">34</p>
              <p className="text-orange-200 text-sm mt-1">Mentor baru</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-orange-200 text-2xl">
              🎓
            </div>
          </div>
        </div>

        {/* Active Mentors Card */}
        <div
          className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          onClick={() => handleCardClick("mentor-aktif")}
        >
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Mentor Aktif</h3>
              <p className="text-3xl font-bold">10</p>
              <p className="text-purple-200 text-sm mt-1">Dari 11 mentor</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-purple-200 text-2xl">
              🏆
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
          onClick={() => handleCardClick("jadwal-interview")}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center text-blue-400 text-xl">
              📅
            </div>
            <div>
              <h3 className="text-white font-semibold">Jadwal Interview</h3>
              <p className="text-gray-400 text-sm">
                Atur jadwal interview pelamar
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
          onClick={() => handleCardClick("evaluasi-mentor")}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center text-green-400 text-xl">
              🎯
            </div>
            <div>
              <h3 className="text-white font-semibold">Evaluasi Mentor</h3>
              <p className="text-gray-400 text-sm">Review performa mentor</p>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800 rounded-xl p-6 cursor-pointer hover:bg-gray-700 transition-colors duration-200"
          onClick={() => handleCardClick("laporan")}
        >
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center text-orange-400 text-xl">
              📊
            </div>
            <div>
              <h3 className="text-white font-semibold">Laporan Bulanan</h3>
              <p className="text-gray-400 text-sm">Lihat statistik lengkap</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mentor List */}
      <div className="bg-gray-800 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Daftar Mentor</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {mentors.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-gray-700 rounded-lg p-4 cursor-pointer hover:bg-gray-600 transition-colors duration-200"
              onClick={() => handleCardClick(`mentor-${mentor.id}`)}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {mentor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium text-sm truncate">
                    {mentor.name}
                  </h3>
                  <p className="text-gray-400 text-xs">{mentor.subject}</p>
                </div>
              </div>

              <div className="space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Pengalaman:</span>
                  <span className="text-gray-300 text-xs">
                    {mentor.experience}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-xs">Status:</span>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      mentor.status === "Aktif"
                        ? "bg-green-600 text-green-100"
                        : "bg-orange-600 text-orange-100"
                    }`}
                  >
                    {mentor.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
