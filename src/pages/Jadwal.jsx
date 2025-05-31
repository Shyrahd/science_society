"use client";

import { useState } from "react";
import Navbar from "./Navbar";

function Jadwal() {
  return (
    <>
      <Navbar />
      <Pelatihan />
    </>
  );
}

function Pelatihan() {
  const [selectedWeek, setSelectedWeek] = useState("current");

  const scheduleData = {
    current: [
      {
        id: 1,
        day: "Selasa",
        date: "27 Mei 2025",
        sessions: [
          {
            time: "08:00 - 10:00",
            subject: "Penalaran Umum",
            level: "UTBK Intensif",
            type: "Logika Matematika",
            students: 8,
            room: "Ruang A1",
          },
          {
            time: "14:00 - 16:00",
            subject: "Penalaran Umum",
            level: "SNBT Persiapan",
            type: "Penalaran Verbal",
            students: 10,
            room: "Ruang B2",
          },
        ],
      },
      {
        id: 2,
        day: "Rabu",
        date: "28 Mei 2025",
        sessions: [
          {
            time: "09:00 - 11:00",
            subject: "Penalaran Umum",
            level: "Sekolah Kedinasan",
            type: "Analisis Data",
            students: 7,
            room: "Ruang C1",
          },
          {
            time: "15:00 - 17:00",
            subject: "Penalaran Umum",
            level: "UTBK Reguler",
            type: "Problem Solving",
            students: 12,
            room: "Ruang A2",
          },
        ],
      },
      {
        id: 3,
        day: "Kamis",
        date: "29 Mei 2025",
        sessions: [
          {
            time: "08:00 - 10:00",
            subject: "Penalaran Umum",
            level: "SNBT Intensif",
            type: "Penalaran Kuantitatif",
            students: 9,
            room: "Ruang B1",
          },
          {
            time: "13:00 - 15:00",
            subject: "Penalaran Umum",
            level: "Try Out",
            type: "Simulasi Ujian",
            students: 11,
            room: "Ruang Ujian",
          },
        ],
      },
      {
        id: 4,
        day: "Jumat",
        date: "30 Mei 2025",
        sessions: [
          {
            time: "10:00 - 12:00",
            subject: "Penalaran Umum",
            level: "Sekolah Kedinasan",
            type: "Penalaran Figural",
            students: 6,
            room: "Ruang C2",
          },
          {
            time: "16:00 - 18:00",
            subject: "Penalaran Umum",
            level: "UTBK Intensif",
            type: "Review & Pembahasan",
            students: 8,
            room: "Ruang A1",
          },
        ],
      },
      {
        id: 5,
        day: "Sabtu",
        date: "31 Mei 2025",
        sessions: [
          {
            time: "08:00 - 10:00",
            subject: "Penalaran Umum",
            level: "SNBT Persiapan",
            type: "Strategi Pengerjaan",
            students: 10,
            room: "Ruang B2",
          },
          {
            time: "14:00 - 16:00",
            subject: "Penalaran Umum",
            level: "Konsultasi",
            type: "Bimbingan Personal",
            students: 5,
            room: "Ruang Konsultasi",
          },
        ],
      },
    ],
  };

  const getLevelColor = (level) => {
    switch (level) {
      case "UTBK Intensif":
        return "badge-error";
      case "UTBK Reguler":
        return "badge-warning";
      case "SNBT Intensif":
        return "badge-info";
      case "SNBT Persiapan":
        return "badge-primary";
      case "Sekolah Kedinasan":
        return "badge-success";
      case "Try Out":
        return "badge-secondary";
      case "Konsultasi":
        return "badge-accent";
      default:
        return "badge-neutral";
    }
  };

  const totalStudents = scheduleData[selectedWeek].reduce(
    (total, day) =>
      total +
      day.sessions.reduce(
        (dayTotal, session) => dayTotal + session.students,
        0
      ),
    0
  );

  const totalSessions = scheduleData[selectedWeek].reduce(
    (total, day) => total + day.sessions.length,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Jadwal Mengajar Penalaran Umum
          </h1>
          <p className="text-gray-600">
            Persiapan UTBK, SNBT, dan Sekolah Kedinasan - Tri Aji Alhuda
          </p>
        </div>

        {/* Week Selector */}
        <div className="mb-6">
          <div className="tabs tabs-boxed bg-white shadow-sm">
            <a
              className={`tab ${
                selectedWeek === "current" ? "tab-active" : ""
              }`}
              onClick={() => setSelectedWeek("current")}
            >
              📅 Minggu Ini
            </a>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {scheduleData[selectedWeek].map((daySchedule) => (
            <div
              key={daySchedule.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Day Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <h3 className="text-xl font-bold">{daySchedule.day}</h3>
                <p className="text-blue-100">{daySchedule.date}</p>
              </div>

              {/* Sessions */}
              <div className="p-4 space-y-4">
                {daySchedule.sessions.map((session, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    {/* Time & Level */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-gray-800">
                        {session.time}
                      </span>
                      <div
                        className={`badge ${getLevelColor(
                          session.level
                        )} badge-sm text-white`}
                      >
                        {session.level}
                      </div>
                    </div>

                    {/* Subject & Topic */}
                    <h4 className="font-medium text-gray-700 mb-1">
                      {session.subject}
                    </h4>
                    <p className="text-sm text-blue-600 font-medium mb-3">
                      {session.type}
                    </p>

                    {/* Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span className="flex items-center">
                        👥 {session.students} siswa
                      </span>
                      <span className="flex items-center">
                        📍 {session.room}
                      </span>
                    </div>

                    {/* Action Button */}
                    <div className="mt-3">
                      <button className="btn btn-primary btn-sm w-full">
                        Kelola Kelas
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">
              {totalSessions}
            </div>
            <div className="text-gray-600">Sesi Minggu Ini</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600">25</div>
            <div className="text-gray-600">Total Siswa</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">
              {totalSessions * 2}
            </div>
            <div className="text-gray-600">Jam Mengajar</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">5</div>
            <div className="text-gray-600">Program Aktif</div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-white rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Aksi Cepat
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="btn btn-outline btn-primary">
              📝 Buat Materi Baru
            </button>
            <button className="btn btn-outline btn-success">
              📊 Lihat Laporan Siswa
            </button>
            <button className="btn btn-outline btn-info">
              📅 Atur Jadwal Tambahan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jadwal;
