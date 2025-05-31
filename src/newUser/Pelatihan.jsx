"use client";

import { useState } from "react";
import NewNav from "./NewNav";

function Pelatihan() {
  // Current month in the training program (1-3)
  const [currentMonth, setCurrentMonth] = useState(1);

  return (
    <>
      <NewNav />
      <div className="container mx-auto px-4 py-8">
        <HeaderSection />
        <ProgressSection
          currentMonth={currentMonth}
          setCurrentMonth={setCurrentMonth}
        />
        <UpcomingSchedule />
        <TrainingMaterials currentMonth={currentMonth} />
        <CommunitySupport />
      </div>
    </>
  );
}

export default Pelatihan;

function HeaderSection() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-[#1c2953] mb-2">
        Program Pelatihan Mentor
      </h1>
      <p className="text-gray-600">
        Selamat datang di program pelatihan mentor Science Society. Program ini
        akan mempersiapkan Anda menjadi tutor handal untuk UTBK, Kedinasan, dan
        Tes Masuk Perguruan Tinggi selama 3 bulan.
      </p>
    </div>
  );
}

function ProgressSection({ currentMonth, setCurrentMonth }) {
  // Calculate progress percentage (1/3 = 33%, 2/3 = 67%, 3/3 = 100%)
  const progressPercentage = Math.round((currentMonth / 3) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#1c2953]">
          Progress Pelatihan
        </h2>
        <span className="badge badge-primary">
          {progressPercentage}% Selesai
        </span>
      </div>

      <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
        <div
          className="bg-[#1c2953] h-4 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-sm text-gray-600">
        <div
          className={`flex flex-col items-center ${
            currentMonth >= 1 ? "text-[#1c2953] font-medium" : ""
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentMonth >= 1 ? "bg-[#1c2953] text-white" : "bg-gray-200"
            }`}
          >
            1
          </div>
          <span>Bulan 1</span>
        </div>
        <div
          className={`flex flex-col items-center ${
            currentMonth >= 2 ? "text-[#1c2953] font-medium" : ""
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentMonth >= 2 ? "bg-[#1c2953] text-white" : "bg-gray-200"
            }`}
          >
            2
          </div>
          <span>Bulan 2</span>
        </div>
        <div
          className={`flex flex-col items-center ${
            currentMonth >= 3 ? "text-[#1c2953] font-medium" : ""
          }`}
        >
          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
              currentMonth >= 3 ? "bg-[#1c2953] text-white" : "bg-gray-200"
            }`}
          >
            3
          </div>
          <span>Bulan 3</span>
        </div>
      </div>

      {/* Month selector */}
      <div className="mt-6 flex justify-center gap-2">
        <button
          className={`btn btn-sm ${
            currentMonth === 1 ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setCurrentMonth(1)}
        >
          Bulan 1
        </button>
        <button
          className={`btn btn-sm ${
            currentMonth === 2 ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setCurrentMonth(2)}
        >
          Bulan 2
        </button>
        <button
          className={`btn btn-sm ${
            currentMonth === 3 ? "btn-primary" : "btn-outline"
          }`}
          onClick={() => setCurrentMonth(3)}
        >
          Bulan 3
        </button>
      </div>
    </div>
  );
}

function UpcomingSchedule() {
  const scheduleData = [
    {
      title: "Strategi Mengajar UTBK Saintek",
      date: "15 Juni 2025",
      time: "09:00 - 12:00",
      instructor: "Dr. Budi Santoso",
      location: "Zoom Meeting Room A",
      type: "Online",
    },
    {
      title: "Teknik Pembahasan Soal Kedinasan",
      date: "18 Juni 2025",
      time: "13:00 - 15:00",
      instructor: "Prof. Siti Aminah",
      location: "Zoom Meeting Room B",
      type: "Online",
    },
    {
      title: "Metode Drill Soal Tes Masuk PTN",
      date: "22 Juni 2025",
      time: "10:00 - 12:30",
      instructor: "Dr. Ahmad Wijaya",
      location: "Zoom Meeting Room C",
      type: "Online",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold text-[#1c2953] mb-4">
        Jadwal Pelatihan Mendatang
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {scheduleData.map((schedule, index) => (
          <LatihCard
            key={index}
            title={schedule.title}
            date={schedule.date}
            time={schedule.time}
            instructor={schedule.instructor}
            location={schedule.location}
            type={schedule.type}
          />
        ))}
      </div>
    </>
  );
}

function TrainingMaterials({ currentMonth }) {
  const getMonthMaterials = (month) => {
    const materials = {
      1: [
        {
          title: "Pengenalan Science Society & Sistem Bimbel",
          description:
            "Memahami visi, misi, dan nilai-nilai Science Society sebagai lembaga bimbingan belajar.",
          progress: 100,
        },
        {
          title: "Analisis Kisi-kisi UTBK dan Tes Kedinasan",
          description:
            "Mempelajari struktur dan pola soal UTBK serta tes kedinasan untuk strategi mengajar yang tepat.",
          progress: 80,
        },
        {
          title: "Teknik Mengajar Matematika untuk UTBK",
          description:
            "Metode efektif dalam mengajarkan konsep matematika untuk persiapan UTBK.",
          progress: 60,
        },
        {
          title: "Strategi Pembahasan Soal Fisika dan Kimia",
          description:
            "Teknik pembahasan soal fisika dan kimia yang mudah dipahami siswa.",
          progress: 30,
        },
      ],
      2: [
        {
          title: "Metode Drill dan Latihan Soal Intensif",
          description:
            "Teknik drill yang efektif untuk meningkatkan kemampuan siswa dalam mengerjakan soal.",
          progress: 70,
        },
        {
          title: "Teknik Motivasi Siswa Bimbel",
          description:
            "Cara memotivasi dan mempertahankan semangat belajar siswa selama persiapan ujian.",
          progress: 50,
        },
        {
          title: "Analisis Kesalahan Umum Siswa UTBK",
          description:
            "Mengidentifikasi dan mengatasi kesalahan yang sering dilakukan siswa dalam UTBK.",
          progress: 20,
        },
        {
          title: "Manajemen Waktu dalam Tes",
          description:
            "Mengajarkan siswa strategi manajemen waktu yang efektif saat mengerjakan tes.",
          progress: 10,
        },
      ],
      3: [
        {
          title: "Simulasi Mengajar UTBK",
          description:
            "Praktik mengajar langsung dengan feedback dari mentor senior dan rekan sejawat.",
          progress: 0,
        },
        {
          title: "Evaluasi Progress Siswa Bimbel",
          description:
            "Metode evaluasi dan tracking progress siswa selama mengikuti bimbingan belajar.",
          progress: 0,
        },
        {
          title: "Teknik Try Out dan Pembahasan",
          description:
            "Cara merancang try out yang efektif dan teknik pembahasan yang komprehensif.",
          progress: 0,
        },
        {
          title: "Sertifikasi Tutor Science Society",
          description:
            "Persiapan ujian sertifikasi dan proses menjadi tutor resmi Science Society.",
          progress: 0,
        },
      ],
    };
    return materials[month] || [];
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-semibold text-[#1c2953] mb-4">
        Materi Pelatihan Bulan {currentMonth}
      </h2>
      <div className="space-y-4">
        {getMonthMaterials(currentMonth).map((material, index) => (
          <MaterialCard
            key={index}
            title={material.title}
            description={material.description}
            progress={material.progress}
          />
        ))}
      </div>
    </div>
  );
}

function CommunitySupport() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      <CommunityCard />
      <SupportCard />
    </div>
  );
}

function CommunityCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#1c2953] mb-4">
        Komunitas Tutor UTBK & Kedinasan
      </h2>
      <p className="text-gray-600 mb-4">
        Bergabunglah dengan komunitas mentor Science Society untuk berbagi
        pengalaman dan mendapatkan dukungan.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="badge badge-outline">30 Tutor Aktif</span>
        <span className="badge badge-outline">15 Diskusi Soal</span>
        <span className="badge badge-outline">8 Try Out Mendatang</span>
      </div>
      <button className="btn btn-primary w-full">Gabung Grup WhatsApp</button>
    </div>
  );
}

function SupportCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#1c2953] mb-4">
        Dukungan Pelatihan
      </h2>
      <p className="text-gray-600 mb-4">
        Butuh bantuan selama program pelatihan? Tim kami siap membantu Anda.
      </p>
      <div className="space-y-3">
        <ContactItem
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          }
          text="support@sciencesociety.id"
        />
        <ContactItem
          icon={
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          }
          text="+62 812-3456-7890"
        />
      </div>
    </div>
  );
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-[#1c2953] text-white p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icon}
        </svg>
      </div>
      <span>{text}</span>
    </div>
  );
}

function LatihCard({ title, date, time, instructor, location, type }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div
        className={`p-2 text-white text-center ${
          type === "Online" ? "bg-blue-500" : "bg-green-500"
        }`}
      >
        {type}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <div className="space-y-2">
          <ScheduleItem
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            }
            text={date}
          />
          <ScheduleItem
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            }
            text={time}
          />
          <ScheduleItem
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            }
            text={instructor}
          />
          <ScheduleItem
            icon={
              <>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </>
            }
            text={location}
          />
        </div>
        <div className="mt-4">
          <button className="btn btn-sm btn-outline btn-primary w-full">
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}

function ScheduleItem({ icon, text }) {
  return (
    <div className="flex items-center text-sm">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 mr-2 text-gray-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {icon}
      </svg>
      <span>{text}</span>
    </div>
  );
}

function MaterialCard({ title, description, progress }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{title}</h3>
        <span className="badge badge-primary">{progress}%</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-[#1c2953] h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="mt-3 flex justify-end">
        <button className="btn btn-xs">Lanjutkan</button>
      </div>
    </div>
  );
}
