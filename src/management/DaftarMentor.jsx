import ManageSide from "./ManageSide";

function DaftarMentor() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <ManageSide />
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Daftar Mentor</h1>
          <p className="text-gray-600 mt-2">
            Tim pengajar terbaik untuk persiapan SNBT, UTBK, dan Tes Kedinasan
          </p>
        </div>
        <MentorCard />
      </div>
    </div>
  );
}

export default DaftarMentor;

function MentorCard() {
  const mentors = [
    {
      id: 1,
      name: "Dr. Ahmad Wijaya, S.Pd., M.Pd",
      education: "S3 Pendidikan Matematika - UGM",
      experience: "8 tahun",
      rating: 4.9,
      subjects: ["TIU", "Matematika", "Logika"],
      specialization: "Mentor Ahli TIU untuk Tes Kedinasan dan SNBT",
    },
    {
      id: 2,
      name: "Sari Indrawati, S.H., M.H",
      education: "S2 Hukum Tata Negara - UI",
      experience: "6 tahun",
      rating: 4.8,
      subjects: ["TWK", "Pancasila", "UUD 1945"],
      specialization: "Spesialis TWK untuk Seleksi Kedinasan dan UTBK",
    },
    {
      id: 3,
      name: "Prof. Budi Santoso, M.Psi",
      education: "S2 Psikologi - UNPAD",
      experience: "10 tahun",
      rating: 4.9,
      subjects: ["TKP", "Psikologi", "Kepribadian"],
      specialization: "Ahli TKP dan Pengembangan Karakter untuk Tes Masuk",
    },
    {
      id: 4,
      name: "Dewi Lestari, S.S., M.Hum",
      education: "S2 Linguistik - UGM",
      experience: "7 tahun",
      rating: 4.7,
      subjects: ["Bahasa Indonesia", "PUEBI", "Sastra"],
      specialization: "Instruktur Bahasa Indonesia untuk UTBK dan Kedinasan",
    },
    {
      id: 5,
      name: "James Richardson, M.A",
      education: "Master of Arts - Oxford University",
      experience: "9 tahun",
      rating: 4.8,
      subjects: ["Bahasa Inggris", "TOEFL", "Grammar"],
      specialization: "Pengajar Bahasa Inggris untuk SNBT dan UTBK",
    },
    {
      id: 6,
      name: "Dr. Rina Kartika, S.Pd., M.Pd",
      education: "S3 Pendidikan Sejarah - UNJ",
      experience: "12 tahun",
      rating: 4.9,
      subjects: ["Sejarah", "TWK", "Wawasan Nusantara"],
      specialization: "Mentor TWK Sejarah & Kebangsaan untuk Tes Kedinasan",
    },
    {
      id: 7,
      name: "Agus Prasetyo, S.E., M.M",
      education: "S2 Manajemen - ITB",
      experience: "5 tahun",
      rating: 4.6,
      subjects: ["Ekonomi", "Manajemen", "TIU"],
      specialization: "Pengajar Ekonomi & TIU untuk SNBT dan UTBK",
    },
    {
      id: 8,
      name: "Dr. Maya Sari, S.Sos., M.Si",
      education: "S3 Sosiologi - UNAIR",
      experience: "8 tahun",
      rating: 4.8,
      subjects: ["Sosiologi", "Antropologi", "TWK"],
      specialization: "Mentor TWK Sosial Budaya untuk Kedinasan",
    },
    {
      id: 9,
      name: "Hendra Gunawan, S.Pd., M.Pd",
      education: "S2 Pendidikan Geografi - UPI",
      experience: "6 tahun",
      rating: 4.7,
      subjects: ["Geografi", "Lingkungan", "TWK"],
      specialization: "Ahli TWK Lingkungan & Geografi untuk Tes Masuk",
    },
    {
      id: 10,
      name: "Tri Aji Alhuda",
      education: "D4 Manajemen Informatika - POLSRI",
      experience: "2 tahun",
      rating: 4.8,
      subjects: ["PU", "Konseling", "Motivasi"],
      specialization: "Mentor Konseling & Motivasi Belajar Tes SNBT",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {mentors.map((mentor) => (
        <div
          key={mentor.id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
        >
          <div className="p-6 text-center border-b border-gray-100">
            <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-lg font-semibold text-blue-600">
                {mentor.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")
                  .slice(0, 2)}
              </span>
            </div>
            <h3 className="font-bold text-lg text-gray-900 leading-tight">
              {mentor.name}
            </h3>
            <p className="text-sm text-blue-600 font-medium mt-1">
              {mentor.specialization}
            </p>
          </div>

          <div className="p-6 space-y-4">
            <div className="flex items-start gap-2 text-sm text-gray-600">
              <span className="text-blue-500 font-medium">🎓</span>
              <span className="text-xs leading-tight">{mentor.education}</span>
            </div>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <span className="text-green-500">📚</span>
                <span className="text-gray-600">{mentor.experience}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">⭐</span>
                <span className="font-medium text-gray-700">
                  {mentor.rating}
                </span>
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">
                Mata Pelajaran:
              </p>
              <div className="flex flex-wrap gap-1">
                {mentor.subjects.map((subject, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 text-xs bg-blue-50 text-blue-700 rounded-md border border-blue-200"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
