"use client";

import { useState } from "react";
import NewNav from "./NewNav";

function Pelatihan() {
  // Current phase in the training program (1-3)
  const [currentPhase, setCurrentPhase] = useState(1);

  return (
    <>
      <div className="sticky top-0 z-50 bg-[#1c2953]">
        <NewNav />
      </div>

      <div className="container mx-auto px-4 py-8">
        <HeaderSection />
        <ProgressSection
          currentPhase={currentPhase}
          setCurrentPhase={setCurrentPhase}
        />
        <TrainingPhases currentPhase={currentPhase} />
        <UpcomingSchedule />
        <ContinuousLearning />
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
      <p className="text-gray-600 mb-4">
        Selamat datang di program pelatihan mentor Science Society. Kami
        investasikan waktu dan biaya untuk mengembangkan kemampuan Anda menjadi
        mentor terbaik dalam 12 minggu pelatihan intensif.
      </p>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">
          💡 Program Overview:
        </h3>
        <p className="text-sm text-blue-700">
          Program pelatihan terdiri dari 3 fase: Onboarding & Orientasi (2
          minggu), Pelatihan Intensif (6 minggu), dan Sertifikasi & Deployment
          (4 minggu). Total durasi 12 minggu dengan sertifikasi resmi di akhir
          program.
        </p>
      </div>
    </div>
  );
}

function ProgressSection({ currentPhase, setCurrentPhase }) {
  const phases = [
    {
      id: 1,
      name: "Onboarding & Orientasi",
      duration: "2 Minggu",
      weeks: "Minggu 1-2",
    },
    {
      id: 2,
      name: "Pelatihan Intensif",
      duration: "6 Minggu",
      weeks: "Minggu 3-8",
    },
    {
      id: 3,
      name: "Sertifikasi & Deployment",
      duration: "4 Minggu",
      weeks: "Minggu 9-12",
    },
  ];

  // Calculate progress percentage based on phase
  const progressPercentage = Math.round((currentPhase / 3) * 100);

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

      <div className="w-full bg-gray-200 rounded-full h-4 mb-6">
        <div
          className="bg-[#1c2953] h-4 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {phases.map((phase) => (
          <div
            key={phase.id}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentPhase >= phase.id
                ? "border-[#1c2953] bg-[#1c2953] text-white"
                : "border-gray-200 bg-gray-50 hover:border-[#1c2953]"
            }`}
          >
            <div className="text-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-2 ${
                  currentPhase >= phase.id
                    ? "bg-white text-[#1c2953]"
                    : "bg-[#1c2953] text-white"
                }`}
              >
                {phase.id}
              </div>
              <h3 className="font-semibold text-sm mb-1">{phase.name}</h3>
              <p className="text-xs opacity-75">{phase.duration}</p>
              <p className="text-xs opacity-75">{phase.weeks}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TrainingPhases({ currentPhase }) {
  const getPhaseContent = (phase) => {
    const content = {
      1: {
        title: "Fase 1: Onboarding & Orientasi",
        duration: "2 Minggu",
        description:
          "Pengenalan mendalam tentang Science Society dan persiapan dasar mengajar",
        materials: [
          {
            title: "Pengenalan Budaya Perusahaan",
            description:
              "Memahami visi, misi, nilai-nilai, dan budaya kerja Science Society",
            progress: currentPhase > 1 ? 100 : 75,
            week: "Minggu 1",
          },
          {
            title: "Sistem dan Metodologi Science Society",
            description:
              "Mempelajari sistem pembelajaran dan metodologi pengajaran yang digunakan",
            progress: currentPhase > 1 ? 100 : 60,
            week: "Minggu 1",
          },
          {
            title: "Platform Teknologi Pembelajaran",
            description:
              "Pelatihan penggunaan platform digital dan tools pembelajaran online",
            progress: currentPhase > 1 ? 100 : 40,
            week: "Minggu 2",
          },
          {
            title: "Standar Kualitas Mengajar",
            description:
              "Memahami standar dan ekspektasi kualitas mengajar di Science Society",
            progress: currentPhase > 1 ? 100 : 20,
            week: "Minggu 2",
          },
        ],
      },
      2: {
        title: "Fase 2: Pelatihan Intensif",
        duration: "6 Minggu",
        description:
          "Pelatihan mendalam teknik mengajar dan manajemen kelas yang efektif",
        materials: [
          {
            title: "Teknik Mengajar yang Efektif",
            description:
              "Metode dan strategi mengajar yang terbukti efektif untuk berbagai tipe siswa",
            progress: currentPhase > 2 ? 100 : currentPhase === 2 ? 80 : 0,
            week: "Minggu 3-4",
          },
          {
            title: "Manajemen Kelas dan Siswa",
            description:
              "Cara mengelola kelas, memotivasi siswa, dan menangani berbagai situasi",
            progress: currentPhase > 2 ? 100 : currentPhase === 2 ? 60 : 0,
            week: "Minggu 4-5",
          },
          {
            title: "Analisis Soal dan Pembahasan",
            description:
              "Teknik menganalisis soal UTBK/Kedinasan dan menyusun pembahasan yang jelas",
            progress: currentPhase > 2 ? 100 : currentPhase === 2 ? 40 : 0,
            week: "Minggu 5-6",
          },
          {
            title: "Simulasi Mengajar dengan Feedback",
            description:
              "Praktik mengajar di hadapan mentor senior dengan feedback konstruktif",
            progress: currentPhase > 2 ? 100 : currentPhase === 2 ? 20 : 0,
            week: "Minggu 7-8",
          },
        ],
      },
      3: {
        title: "Fase 3: Sertifikasi & Deployment",
        duration: "4 Minggu",
        description:
          "Ujian sertifikasi dan persiapan penempatan di kelas reguler",
        materials: [
          {
            title: "Ujian Sertifikasi Internal",
            description:
              "Ujian komprehensif untuk menguji kemampuan mengajar dan penguasaan materi",
            progress: currentPhase === 3 ? 75 : 0,
            week: "Minggu 9-10",
          },
          {
            title: "Praktik Mengajar Terbimbing",
            description:
              "Mengajar di kelas nyata dengan supervisi mentor senior",
            progress: currentPhase === 3 ? 50 : 0,
            week: "Minggu 10-11",
          },
          {
            title: "Evaluasi dan Improvement",
            description:
              "Evaluasi performa dan rencana pengembangan berkelanjutan",
            progress: currentPhase === 3 ? 25 : 0,
            week: "Minggu 11-12",
          },
          {
            title: "Penempatan di Kelas Reguler",
            description:
              "Penempatan resmi sebagai mentor di kelas reguler dengan tanggung jawab penuh",
            progress: currentPhase === 3 ? 10 : 0,
            week: "Minggu 12",
          },
        ],
      },
    };
    return content[phase] || content[1];
  };

  const phaseData = getPhaseContent(currentPhase);

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-[#1c2953] mb-2">
          {phaseData.title}
        </h2>
        <div className="flex items-center gap-4 mb-3">
          <span className="badge badge-primary">{phaseData.duration}</span>
          <span className="text-sm text-gray-600">{phaseData.description}</span>
        </div>
      </div>

      <div className="space-y-4">
        {phaseData.materials.map((material, index) => (
          <MaterialCard
            key={index}
            title={material.title}
            description={material.description}
            progress={material.progress}
            week={material.week}
          />
        ))}
      </div>
    </div>
  );
}

function UpcomingSchedule() {
  const scheduleData = [
    {
      title: "Orientasi Budaya Perusahaan",
      date: "1 Juni 2025",
      time: "09:00 - 12:00",
      instructor: "HR Team & Management",
      location: "Zoom Meeting Room A",
      type: "Online",
      phase: "Fase 1",
    },
    {
      title: "Workshop Teknik Mengajar Efektif",
      date: "5 Juni 2025",
      time: "13:00 - 16:00",
      instructor: "Dr. Budi Santoso",
      location: "Zoom Meeting Room B",
      type: "Online",
      phase: "Fase 2",
    },
    {
      title: "Simulasi Mengajar & Feedback",
      date: "15 Juni 2025",
      time: "10:00 - 15:00",
      instructor: "Senior Mentor Team",
      location: "Science Society HQ",
      type: "Hybrid",
      phase: "Fase 2",
    },
    {
      title: "Ujian Sertifikasi Internal",
      date: "1 Juli 2025",
      time: "09:00 - 12:00",
      instructor: "Certification Board",
      location: "Science Society HQ",
      type: "Offline",
      phase: "Fase 3",
    },
  ];

  return (
    <>
      <h2 className="text-xl font-semibold text-[#1c2953] mb-4">
        Jadwal Pelatihan Mendatang
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {scheduleData.map((schedule, index) => (
          <TrainingCard
            key={index}
            title={schedule.title}
            date={schedule.date}
            time={schedule.time}
            instructor={schedule.instructor}
            location={schedule.location}
            type={schedule.type}
            phase={schedule.phase}
          />
        ))}
      </div>
    </>
  );
}

function ContinuousLearning() {
  return (
    <div className="bg-gradient-to-r from-[#1c2953] to-[#2d3a6b] text-white rounded-lg p-8 mb-8">
      <h2 className="text-2xl font-bold mb-4">
        💡 Continuous Learning Program
      </h2>
      <p className="text-lg mb-6 opacity-90">
        Setelah menyelesaikan program pelatihan 12 minggu, Anda akan mendapat
        akses ke program pembelajaran berkelanjutan
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl mb-2">📊</div>
          <div className="font-semibold mb-1">Monthly Workshop</div>
          <div className="text-sm opacity-75">
            Update metode & materi terbaru setiap bulan
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl mb-2">🎓</div>
          <div className="font-semibold mb-1">Certification Program</div>
          <div className="text-sm opacity-75">
            Sertifikasi nasional & internasional
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <div className="text-2xl mb-2">🚀</div>
          <div className="font-semibold mb-1">Leadership Training</div>
          <div className="text-sm opacity-75">
            Persiapan jenjang karir selanjutnya
          </div>
        </div>
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
        👥 Komunitas Mentor Trainee
      </h2>
      <p className="text-gray-600 mb-4">
        Bergabunglah dengan komunitas mentor trainee untuk berbagi pengalaman
        dan saling mendukung selama pelatihan.
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="badge badge-outline">50+ Trainee Aktif</span>
        <span className="badge badge-outline">Daily Discussion</span>
        <span className="badge badge-outline">Peer Support</span>
      </div>
      <button className="btn btn-primary w-full">Gabung Grup WhatsApp</button>
    </div>
  );
}

function SupportCard() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-[#1c2953] mb-4">
        🆘 Dukungan Pelatihan
      </h2>
      <p className="text-gray-600 mb-4">
        Tim training support kami siap membantu Anda 24/7 selama program
        pelatihan berlangsung.
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
          text="training@sciencesociety.id"
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
          text="+62 812-3456-7890 (Training Hotline)"
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
      <span className="text-sm">{text}</span>
    </div>
  );
}

function TrainingCard({
  title,
  date,
  time,
  instructor,
  location,
  type,
  phase,
}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex">
        <div
          className={`p-2 text-white text-center flex-1 ${
            type === "Online"
              ? "bg-blue-500"
              : type === "Offline"
              ? "bg-green-500"
              : "bg-purple-500"
          }`}
        >
          {type}
        </div>
        <div className="p-2 bg-[#1c2953] text-white text-center flex-1">
          {phase}
        </div>
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
            Daftar Sekarang
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

function MaterialCard({ title, description, progress, week }) {
  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <div className="flex-1">
          <h3 className="font-medium">{title}</h3>
          <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded mt-1 inline-block">
            {week}
          </span>
        </div>
        <span className="badge badge-primary ml-2">{progress}%</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-3">
        <div
          className="bg-[#1c2953] h-2.5 rounded-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">
          {progress === 100
            ? "✅ Selesai"
            : progress > 0
            ? "🔄 Sedang Berlangsung"
            : "⏳ Belum Dimulai"}
        </span>
        <button className="btn btn-xs btn-outline">
          {progress === 100 ? "Review" : progress > 0 ? "Lanjutkan" : "Mulai"}
        </button>
      </div>
    </div>
  );
}
