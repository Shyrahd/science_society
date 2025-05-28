
import { useState } from "react"
import Navbar from "./Navbar"

function Jadwal() {
  return (
    <>
      <Navbar />
      <Pelatihan />
    </>
  )
}

export default Jadwal

function Pelatihan() {
  const [selectedWeek, setSelectedWeek] = useState("current")

  const scheduleData = {
    current: [
      {
        id: 1,
        day: "Senin",
        date: "27 Mei 2024",
        sessions: [
          {
            time: "08:00 - 10:00",
            subject: "PU - Penalaran Umum",
            level: "UTBK Intensif",
            type: "Logika Matematika",
            students: 25,
            room: "Ruang A1",
          },
          {
            time: "14:00 - 16:00",
            subject: "PU - Penalaran Umum",
            level: "SNBT Persiapan",
            type: "Penalaran Verbal",
            students: 20,
            room: "Ruang B2",
          },
        ],
      },
      {
        id: 2,
        day: "Selasa",
        date: "28 Mei 2024",
        sessions: [
          {
            time: "09:00 - 11:00",
            subject: "PU - Penalaran Umum",
            level: "Sekolah Kedinasan",
            type: "Analisis Data",
            students: 18,
            room: "Ruang C1",
          },
          {
            time: "15:00 - 17:00",
            subject: "PU - Penalaran Umum",
            level: "UTBK Reguler",
            type: "Problem Solving",
            students: 30,
            room: "Ruang A2",
          },
        ],
      },
      {
        id: 3,
        day: "Rabu",
        date: "29 Mei 2024",
        sessions: [
          {
            time: "08:00 - 10:00",
            subject: "PU - Penalaran Umum",
            level: "SNBT Intensif",
            type: "Penalaran Kuantitatif",
            students: 22,
            room: "Ruang B1",
          },
          {
            time: "13:00 - 15:00",
            subject: "PU - Penalaran Umum",
            level: "Try Out UTBK",
            type: "Simulasi Ujian",
            students: 35,
            room: "Aula Utama",
          },
        ],
      },
      {
        id: 4,
        day: "Kamis",
        date: "30 Mei 2024",
        sessions: [
          {
            time: "10:00 - 12:00",
            subject: "PU - Penalaran Umum",
            level: "Sekolah Kedinasan",
            type: "Penalaran Figural",
            students: 16,
            room: "Ruang C2",
          },
          {
            time: "16:00 - 18:00",
            subject: "PU - Penalaran Umum",
            level: "UTBK Intensif",
            type: "Review & Pembahasan",
            students: 25,
            room: "Ruang A1",
          },
        ],
      },
      {
        id: 5,
        day: "Jumat",
        date: "31 Mei 2024",
        sessions: [
          {
            time: "08:00 - 10:00",
            subject: "PU - Penalaran Umum",
            level: "SNBT Persiapan",
            type: "Strategi Pengerjaan",
            students: 20,
            room: "Ruang B2",
          },
          {
            time: "14:00 - 16:00",
            subject: "PU - Penalaran Umum",
            level: "Konsultasi Individu",
            type: "Bimbingan Personal",
            students: 8,
            room: "Ruang Konsultasi",
          },
        ],
      },
    ],
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "UTBK Intensif":
        return "badge-error"
      case "UTBK Reguler":
        return "badge-warning"
      case "SNBT Intensif":
        return "badge-info"
      case "SNBT Persiapan":
        return "badge-primary"
      case "Sekolah Kedinasan":
        return "badge-success"
      case "Try Out UTBK":
        return "badge-secondary"
      case "Konsultasi Individu":
        return "badge-accent"
      default:
        return "badge-neutral"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Jadwal Pelatihan Penalaran Umum</h1>
          <p className="text-gray-600">Persiapan UTBK, SNBT, dan Sekolah Kedinasan - Dr. Rika Susanti, M.Kom</p>
        </div>

        {/* Week Selector */}
        <div className="mb-6">
          <div className="tabs tabs-boxed bg-white shadow-sm">
            <a
              className={`tab ${selectedWeek === "current" ? "tab-active" : ""}`}
              onClick={() => setSelectedWeek("current")}
            >
              Minggu Ini
            </a>
          </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {scheduleData[selectedWeek].map((daySchedule) => (
            <div key={daySchedule.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Day Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
                <h3 className="text-xl font-bold">{daySchedule.day}</h3>
                <p className="text-blue-100">{daySchedule.date}</p>
              </div>

              {/* Sessions */}
              <div className="p-4 space-y-4">
                {daySchedule.sessions.map((session, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                    {/* Time */}
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-lg font-semibold text-gray-800">{session.time}</span>
                      <div className={`badge ${getLevelColor(session.level)} badge-sm`}>{session.level}</div>
                    </div>

                    {/* Subject & Type */}
                    <h4 className="font-medium text-gray-700 mb-1">{session.subject}</h4>
                    <p className="text-sm text-gray-600 mb-3">{session.type}</p>

                    {/* Details */}
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                          {session.students} siswa
                        </span>
                        <span className="flex items-center">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                            />
                          </svg>
                          {session.room}
                        </span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="mt-3">
                      <button className="btn btn-primary btn-sm w-full">Lihat Detail</button>
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
            <div className="text-3xl font-bold text-blue-600">12</div>
            <div className="text-gray-600">Sesi Minggu Ini</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-green-600">248</div>
            <div className="text-gray-600">Total Siswa</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">24</div>
            <div className="text-gray-600">Jam Mengajar</div>
          </div>
          <div className="bg-white rounded-lg shadow p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">5</div>
            <div className="text-gray-600">Program Aktif</div>
          </div>
        </div>
      </div>
    </div>
  )
}
