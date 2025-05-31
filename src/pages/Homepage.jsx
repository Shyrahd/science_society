"use client";

import { useState, useRef } from "react";
import Navbar from "./Navbar";
import Footerr from "./Footerr";

function Homepage() {
  const scheduleRef = useRef(null);

  const scrollToSchedule = () => {
    scheduleRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <Navbar />
      <Hero scrollToSchedule={scrollToSchedule} />
      <NewsSection />
      <ScheduleSection ref={scheduleRef} />
      <StatsSection />
      <Footerr />
    </>
  );
}

export default Homepage;

function Hero({ scrollToSchedule }) {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/IMG_2513.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-2xl">
          <h1 className="mb-5 text-5xl font-bold">
            Selamat Datang, Tri Aji Alhuda!
          </h1>
          <p className="mb-5 text-xl">
            Portal Mentor Bimbingan Belajar UTBK - Penalaran Umum
          </p>
          <p className="mb-8 text-lg opacity-90">
            Akses informasi terbaru tentang UTBK, tes kedinasan, dan kelola
            jadwal mengajar Anda dengan mudah
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="btn btn-primary btn-lg"
              onClick={scrollToSchedule}
            >
              Lihat Jadwal Hari Ini
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function NewsSection() {
  const [activeTab, setActiveTab] = useState("utbk");

  const utbkNews = [
    {
      title: "Pengumuman Jadwal UTBK 2025",
      date: "15 Januari 2025",
      content:
        "Pendaftaran UTBK 2025 dibuka mulai 20 Februari - 15 Maret 2025. Pelaksanaan ujian dijadwalkan pada 29 April - 10 Mei 2025.",
      type: "announcement",
      urgent: true,
    },
    {
      title: "Perubahan Materi Tes Penalaran Umum",
      date: "12 Januari 2025",
      content:
        "LTMPT mengumumkan penyesuaian materi TPS khususnya pada bagian Penalaran Umum dengan penambahan soal analisis data.",
      type: "update",
      urgent: false,
    },
    {
      title: "Tips Sukses UTBK dari Alumni",
      date: "10 Januari 2025",
      content:
        "Simak strategi belajar efektif dari alumni yang berhasil masuk PTN favorit melalui jalur UTBK-SNBT.",
      type: "tips",
      urgent: false,
    },
  ];

  const kedinasanNews = [
    {
      title: "Pembukaan Pendaftaran CPNS 2025",
      date: "14 Januari 2025",
      content:
        "BKN membuka pendaftaran CPNS 2025 untuk 2.3 juta formasi di seluruh Indonesia. Pendaftaran dibuka 1-31 Maret 2025.",
      type: "announcement",
      urgent: true,
    },
    {
      title: "Rekrutmen TNI-POLRI 2025",
      date: "13 Januari 2025",
      content:
        "Pendaftaran Taruna/Taruni TNI dan POLRI gelombang I dibuka Februari 2025 dengan persyaratan yang telah diperbarui.",
      type: "announcement",
      urgent: true,
    },
    {
      title: "STAN Buka Pendaftaran PKN",
      date: "11 Januari 2025",
      content:
        "Politeknik Keuangan Negara STAN membuka pendaftaran Program Diploma I dan III untuk tahun akademik 2025/2026.",
      type: "announcement",
      urgent: false,
    },
    {
      title: "Sekolah Kedinasan Favorit 2025",
      date: "8 Januari 2025",
      content:
        "Daftar 15 sekolah kedinasan paling diminati tahun 2025 beserta passing grade dan tips persiapannya.",
      type: "info",
      urgent: false,
    },
  ];

  const bimbelNews = [
    {
      title: "Pembukaan Kelas Intensif UTBK",
      date: "16 Januari 2025",
      content:
        "Bimbel Excellence membuka kelas intensif UTBK dengan metode pembelajaran terbaru dan try out berkala setiap minggu.",
      type: "announcement",
      urgent: true,
    },
    {
      title: "Prestasi Siswa Bimbel Excellence",
      date: "14 Januari 2025",
      content:
        "85% siswa bimbel Excellence berhasil lolos PTN favorit tahun 2024. Tertinggi di antara bimbel se-Jakarta.",
      type: "achievement",
      urgent: false,
    },
    {
      title: "Workshop Metode Mengajar Baru",
      date: "12 Januari 2025",
      content:
        "Seluruh mentor mengikuti workshop metode pembelajaran interaktif untuk meningkatkan efektivitas belajar siswa.",
      type: "training",
      urgent: false,
    },
    {
      title: "Fasilitas Baru: Lab Komputer",
      date: "9 Januari 2025",
      content:
        "Bimbel Excellence menambah fasilitas lab komputer dengan 50 unit PC untuk simulasi UTBK berbasis komputer.",
      type: "facility",
      urgent: false,
    },
  ];

  const getNewsData = () => {
    switch (activeTab) {
      case "utbk":
        return utbkNews;
      case "kedinasan":
        return kedinasanNews;
      case "bimbel":
        return bimbelNews;
      default:
        return utbkNews;
    }
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "announcement":
        return "📢";
      case "update":
        return "🔄";
      case "tips":
        return "💡";
      case "info":
        return "ℹ️";
      case "achievement":
        return "🏆";
      case "training":
        return "🎓";
      case "facility":
        return "🏢";
      default:
        return "📰";
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Berita & Pengumuman Terkini
          </h2>
          <p className="text-xl text-gray-600">
            Tetap update dengan informasi terbaru seputar UTBK dan tes kedinasan
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="tabs tabs-boxed bg-white shadow-lg">
            <button
              className={`tab tab-lg ${
                activeTab === "utbk" ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab("utbk")}
            >
              📚 UTBK & SNBT
            </button>
            <button
              className={`tab tab-lg ${
                activeTab === "kedinasan" ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab("kedinasan")}
            >
              🏛️ Tes Kedinasan
            </button>
            <button
              className={`tab tab-lg ${
                activeTab === "bimbel" ? "tab-active" : ""
              }`}
              onClick={() => setActiveTab("bimbel")}
            >
              🎯 Bimbel Excellence
            </button>
          </div>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getNewsData().map((news, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="card-body">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-2xl">{getTypeIcon(news.type)}</span>
                  {news.urgent && (
                    <span className="badge badge-error text-white">URGENT</span>
                  )}
                </div>
                <h3 className="card-title text-lg mb-2">{news.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{news.content}</p>
                <div className="card-actions justify-between items-center">
                  <span className="text-xs text-gray-500">{news.date}</span>
                  <button className="btn btn-primary btn-sm">
                    Baca Selengkapnya
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const ScheduleSection = ({ ref }) => {
  // Data jadwal yang lebih realistis berdasarkan file jadwal.tsx
  const todaySchedule = [
    {
      time: "08:00 - 10:00",
      subject: "PU - Penalaran Umum",
      level: "UTBK Intensif",
      type: "Logika Matematika",
      students: 10,
      room: "Ruang B2",
      levelColor: "badge-error",
    },
    {
      time: "14:00 - 16:00",
      subject: "PU - Penalaran Umum",
      level: "SNBT Persiapan",
      type: "Penalaran Verbal",
      students: 5,
      room: "Ruang Konsultasi",
      levelColor: "badge-primary",
    },
  ];

  const weeklySchedule = [
    {
      day: "Selasa",
      date: "27 Mei 2024",
      sessions: 2,
      hours: "08:00 - 16:00",
      topics: ["Logika Matematika", "Penalaran Verbal"],
    },
    {
      day: "Rabu",
      date: "28 Mei 2024",
      sessions: 2,
      hours: "09:00 - 17:00",
      topics: ["Analisis Data", "Problem Solving"],
    },
    {
      day: "Kamis",
      date: "29 Mei 2024",
      sessions: 2,
      hours: "08:00 - 15:00",
      topics: ["Penalaran Kuantitatif", "Simulasi Ujian"],
    },
    {
      day: "Jumat",
      date: "30 Mei 2024",
      sessions: 2,
      hours: "10:00 - 18:00",
      topics: ["Penalaran Figural", "Review & Pembahasan"],
    },
    {
      day: "Sabtu",
      date: "31 Mei 2024",
      sessions: 2,
      hours: "08:00 - 16:00",
      topics: ["Strategi Pengerjaan", "Bimbingan Personal"],
    },
    {
      day: "Minggu",
      date: "1 Juni 2024",
      sessions: 1,
      hours: "09:00 - 11:00",
      topics: ["Try Out UTBK"],
    },
    {
      day: "Senin",
      date: "2 Juni 2024",
      sessions: 0,
      hours: "Libur",
      topics: [],
    },
  ];

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Jadwal Mengajar Anda
          </h2>
          <p className="text-xl text-gray-600">
            Kelola dan pantau jadwal mengajar harian dan mingguan
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Today's Schedule */}
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6 text-blue-800">
                📅 Jadwal Hari Ini
                <span className="badge badge-primary">
                  {new Date().toLocaleDateString("id-ID", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </h3>

              <div className="space-y-4">
                {todaySchedule.map((schedule, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-gray-800">
                        {schedule.subject}
                      </h4>
                      <span className="badge badge-outline">
                        {schedule.time}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`badge ${schedule.levelColor} badge-sm`}>
                        {schedule.level}
                      </span>
                      <span className="text-sm text-blue-600 font-medium">
                        {schedule.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      📍 {schedule.room} • 👥 {schedule.students} siswa
                    </p>
                  </div>
                ))}
              </div>

              <div className="card-actions justify-end mt-6">
                <button className="btn btn-primary">
                  Lihat Detail Lengkap
                </button>
              </div>
            </div>
          </div>

          {/* Weekly Overview */}
          <div className="card bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-2xl mb-6 text-green-800">
                📊 Ringkasan Mingguan
              </h3>

              <div className="space-y-3">
                {weeklySchedule.map((day, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm p-3"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="font-semibold text-gray-800 w-16">
                          {day.day}
                        </span>
                        <span className="text-sm text-gray-600">
                          {day.date}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="badge badge-success">
                          {day.sessions} sesi
                        </span>
                      </div>
                    </div>
                    <div className="text-xs text-gray-500">
                      <span className="mr-4">⏰ {day.hours}</span>
                      {day.topics.length > 0 && (
                        <span>📖 {day.topics.join(", ")}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="stats stats-vertical lg:stats-horizontal shadow mt-6">
                <div className="stat">
                  <div className="stat-title">Total Sesi</div>
                  <div className="stat-value text-primary">11</div>
                  <div className="stat-desc">per minggu</div>
                </div>
                <div className="stat">
                  <div className="stat-title">Jam Mengajar</div>
                  <div className="stat-value text-secondary">22</div>
                  <div className="stat-desc">jam per minggu</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">11</div>
            <div className="text-gray-600">Sesi Minggu Ini</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600">248</div>
            <div className="text-gray-600">Total Siswa</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">22</div>
            <div className="text-gray-600">Jam Mengajar</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">5</div>
            <div className="text-gray-600">Program Aktif</div>
          </div>
        </div>
      </div>
    </section>
  );
};

function StatsSection() {
  const stats = [
    {
      title: "Siswa Aktif",
      value: "248",
      description: "siswa dalam bimbingan",
      icon: "👥",
      color: "text-blue-600",
    },
    {
      title: "Tingkat Kelulusan",
      value: "92%",
      description: "siswa lolos PTN favorit",
      icon: "🎯",
      color: "text-green-600",
    },
    {
      title: "Rata-rata Skor",
      value: "650",
      description: "skor UTBK siswa",
      icon: "📈",
      color: "text-purple-600",
    },
    {
      title: "Pengalaman",
      value: "5+",
      description: "tahun mengajar",
      icon: "⭐",
      color: "text-yellow-600",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Prestasi & Pencapaian
          </h2>
          <p className="text-xl text-blue-100">
            Rekam jejak mengajar Tri Aji Alhuda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="card-body text-center">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                  {stat.value}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">
                  {stat.title}
                </h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="card bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="card-body">
              <h3 className="text-2xl font-bold text-white mb-4">
                🏆 Penghargaan Terbaru
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white">
                <div className="text-center">
                  <div className="text-lg font-semibold">
                    Pengajar Terbaik 2024
                  </div>
                  <div className="text-sm opacity-80">Bimbel Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">
                    Inovasi Pembelajaran
                  </div>
                  <div className="text-sm opacity-80">Metode PU Interaktif</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-semibold">Mentor Favorit</div>
                  <div className="text-sm opacity-80">Pilihan Siswa 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
