import TopBar from "./TopBar";
import ManageSide from "./ManageSide";

function TesLanjutan() {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        <TopBar />
        <div className="flex">
          <div className="sticky top-0 h-screen">
            <ManageSide />
          </div>
          <CalonLanjutan />
        </div>
      </div>
    </>
  );
}

export default TesLanjutan;

function CalonLanjutan() {
  // Data calon yang lolos interview
  const calonLolos = [
    {
      id: 1,
      name: "Siti Nurhaliza",
      email: "siti.nurhaliza@gmail.com",
      phone: "081234567891",
      education: "S2 Kimia ITB",
      interviewDate: "2025-05-16",
      testDate: "2025-06-05",
      ruang: "Ruang A1",
      waktu: "08:00 - 12:00",
      subjects: ["Literasi Bahasa Indonesia", "Penalaran Matematika", "TWK"],
      specialization: "SNBT & Kedinasan",
      status: "Siap Tes",
      score: 85,
      notes: "Sangat baik dalam komunikasi dan penguasaan materi",
    },
    {
      id: 2,
      name: "Gunawan Wibisono",
      email: "gunawan.wibisono@gmail.com",
      phone: "081234567896",
      education: "S1 Ekonomi UI",
      interviewDate: "2025-05-18",
      testDate: "2025-06-05",
      ruang: "Ruang A2",
      waktu: "08:00 - 12:00",
      subjects: ["TKP", "TWK", "TIU"],
      specialization: "Tes Kedinasan",
      status: "Siap Tes",
      score: 88,
      notes: "Pengalaman mengajar yang baik, cocok untuk TKP",
    },
    {
      id: 3,
      name: "Joko Widodo",
      email: "joko.widodo@gmail.com",
      phone: "081234567899",
      education: "S1 Teknik UNS",
      interviewDate: "2025-05-21",
      testDate: "2025-06-06",
      ruang: "Ruang B1",
      waktu: "13:00 - 17:00",
      subjects: ["Penalaran Matematika", "TIU", "PU"],
      specialization: "UTBK & SNBT",
      status: "Persiapan",
      score: 82,
      notes: "Kuat di bidang teknik dan matematika",
    },
    {
      id: 4,
      name: "Surya Mesiah",
      email: "nanda.pratama@gmail.com",
      phone: "081234567813",
      education: "S1 Geografi UGM",
      interviewDate: "2025-05-25",
      testDate: "2025-06-06",
      ruang: "Ruang B2",
      waktu: "13:00 - 17:00",
      subjects: ["TWK", "TKP", "Geografi"],
      specialization: "Kedinasan",
      status: "Persiapan",
      score: 90,
      notes: "Pengetahuan yang sangat baik dalam geografi dan ilmu sosial.",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Siap Tes":
        return "bg-green-900 text-green-200 border-green-700";
      case "Persiapan":
        return "bg-yellow-900 text-yellow-200 border-yellow-700";
      case "Lulus":
        return "bg-blue-900 text-blue-200 border-blue-700";
      default:
        return "bg-gray-700 text-gray-200 border-gray-600";
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const getScoreColor = (score) => {
    if (score >= 85) return "text-green-400";
    if (score >= 75) return "text-yellow-400";
    return "text-red-400";
  };

  return (
    <div className="flex-1 p-6 space-y-6">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white mb-2">
          Calon Mentor - Tes Lanjutan
        </h1>
        <p className="text-gray-400">
          Daftar calon mentor yang telah lolos tahap interview dan siap
          mengikuti tes lanjutan untuk program SNBT, UTBK, dan Tes Kedinasan.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Siap Tes</h3>
              <p className="text-3xl font-bold">
                {calonLolos.filter((c) => c.status === "Siap Tes").length}
              </p>
              <p className="text-green-200 text-sm mt-1">Calon mentor</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-green-200 text-2xl">
              ✅
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Persiapan</h3>
              <p className="text-3xl font-bold">
                {calonLolos.filter((c) => c.status === "Persiapan").length}
              </p>
              <p className="text-yellow-200 text-sm mt-1">Calon mentor</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-yellow-200 text-2xl">
              ⏳
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Rata-rata Skor</h3>
              <p className="text-3xl font-bold">
                {Math.round(
                  calonLolos.reduce((acc, c) => acc + c.score, 0) /
                    calonLolos.length
                )}
              </p>
              <p className="text-blue-200 text-sm mt-1">Interview score</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-blue-200 text-2xl">
              📊
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-700 rounded-xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">Total Calon</h3>
              <p className="text-3xl font-bold">{calonLolos.length}</p>
              <p className="text-purple-200 text-sm mt-1">Lolos interview</p>
            </div>
            <div className="w-12 h-12 flex items-center justify-center text-purple-200 text-2xl">
              👥
            </div>
          </div>
        </div>
      </div>

      {/* Calon List */}
      <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Daftar Calon Mentor</h2>
          <div className="flex gap-2">
          </div>
        </div>

        <div className="space-y-4">
          {calonLolos.map((calon) => (
            <div
              key={calon.id}
              className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-200 border border-gray-600"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                {/* Calon Info */}
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">
                      {calon.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg">
                      {calon.name}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">
                      {calon.specialization}
                    </p>
                    <p className="text-gray-400 text-sm">{calon.education}</p>
                    <p className="text-gray-400 text-xs mt-1">{calon.notes}</p>
                  </div>
                </div>

                {/* Test Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                  <div className="text-center lg:text-left">
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      Tanggal Tes
                    </p>
                    <p className="text-white text-sm font-medium">
                      {formatDate(calon.testDate)}
                    </p>
                    <p className="text-gray-400 text-xs">{calon.waktu}</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      Ruang
                    </p>
                    <p className="text-white text-sm font-medium">
                      {calon.ruang}
                    </p>
                    <p className="text-gray-400 text-xs">Lokasi tes</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      Skor Interview
                    </p>
                    <p
                      className={`text-lg font-bold ${getScoreColor(
                        calon.score
                      )}`}
                    >
                      {calon.score}
                    </p>
                    <p className="text-gray-400 text-xs">dari 100</p>
                  </div>

                  <div className="text-center lg:text-left">
                    <p className="text-gray-400 text-xs uppercase tracking-wide">
                      Status
                    </p>
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(
                        calon.status
                      )}`}
                    >
                      {calon.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Subjects */}
              <div className="mt-4 pt-4 border-t border-gray-600">
                <p className="text-gray-400 text-xs uppercase tracking-wide mb-2">
                  Mata Pelajaran
                </p>
                <div className="flex flex-wrap gap-2">
                  {calon.subjects.map((subject, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-blue-900 text-blue-200 rounded-md border border-blue-700"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="mt-4 pt-4 border-t border-gray-600">
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">📧</span>
                    <span className="text-gray-300">{calon.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">📱</span>
                    <span className="text-gray-300">{calon.phone}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="text-gray-400">📅</span>
                    <span className="text-gray-300">
                      Interview: {formatDate(calon.interviewDate)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {calonLolos.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Belum Ada Calon
            </h3>
            <p className="text-gray-400">
              Belum ada calon mentor yang lolos tahap interview.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
