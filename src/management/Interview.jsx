import ManageSide from "./ManageSide";
import TopBar from "./TopBar";

function Interview() {
  return (
    <>
      <TopBar />
      <div className="flex min-h-screen bg-gray-950">
        <div className="sticky top-0 h-screen">
          <ManageSide />
        </div>
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6 text-white">
            Jadwal Interview
          </h1>
          <InterviewCard />
        </div>
      </div>
    </>
  );
}

export default Interview;

function InterviewCard() {
  // Data jadwal interview untuk bimbel
  const jadwalInterview = [
    {
      id: 1,
      kandidat: {
        nama: "Nanda Pratama",
        posisi: "Tutor TWK & TKP",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-02",
      waktu: "10:00 - 11:00",
      status: "terjadwal",
      keterangan: "Interview untuk posisi tutor matematika SNBT",
      lokasi: "Zoom Meeting A",
    },
    {
      id: 2,
      kandidat: {
        nama: "Joko Dodi",
        posisi: "Tutor Penalaran Matematika & TIU",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-02",
      waktu: "13:30 - 14:30",
      status: "terjadwal",
      keterangan: "Interview untuk tutor tes kedinasan",
      lokasi: "Zoom Meeting B",
    },
    {
      id: 3,
      kandidat: {
        nama: "Gunawan Wibisono",
        posisi: "Tutor TKP % TWK",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-03",
      waktu: "11:00 - 12:00",
      status: "dikonfirmasi",
      keterangan: "Interview untuk tutor Bahasa Indonesia",
      lokasi: "Zoom Meeting A",
    },
    {
      id: 4,
      kandidat: {
        nama: "Siti Nurhaliza",
        posisi: "Tutor Bahasa Indonesia & Penalaran Matematika",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-04",
      waktu: "15:00 - 16:00",
      status: "dijadwal_ulang",
      keterangan: "Interview untuk posisi admin akademik",
      lokasi: "Zoom Meeting C",
    },
  ];

  // Fungsi untuk mendapatkan warna badge berdasarkan status
  const getWarnaStatus = (status) => {
    switch (status) {
      case "terjadwal":
        return "bg-blue-900 text-blue-200 border-blue-700";
      case "dikonfirmasi":
        return "bg-green-900 text-green-200 border-green-700";
      case "dijadwal_ulang":
        return "bg-amber-900 text-amber-200 border-amber-700";
      case "dibatalkan":
        return "bg-red-900 text-red-200 border-red-700";
      default:
        return "bg-gray-700 text-gray-200 border-gray-600";
    }
  };

  // Fungsi untuk format tanggal dalam bahasa Indonesia
  const formatTanggal = (tanggalString) => {
    const tanggal = new Date(tanggalString);
    const hari = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const bulan = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];

    return `${hari[tanggal.getDay()]}, ${tanggal.getDate()} ${
      bulan[tanggal.getMonth()]
    } ${tanggal.getFullYear()}`;
  };

  // Fungsi untuk format status
  const formatStatus = (status) => {
    switch (status) {
      case "terjadwal":
        return "Terjadwal";
      case "dikonfirmasi":
        return "Dikonfirmasi";
      case "dijadwal_ulang":
        return "Dijadwal Ulang";
      case "dibatalkan":
        return "Dibatalkan";
      default:
        return status;
    }
  };

  return (
    <div className="w-full bg-gray-800 rounded-lg shadow-lg border border-gray-700">
      {/* Header */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 text-blue-400">🎓</div>
          <h2 className="text-xl font-semibold text-white">
            Jadwal Interview Bimbel
          </h2>
        </div>
        <p className="text-gray-400 text-sm">
          Daftar jadwal interview calon tutor dan staff untuk program SNBT &
          Kedinasan
        </p>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="space-y-4">
          {jadwalInterview.map((interview) => (
            <div
              key={interview.id}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 border border-gray-700 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <div className="flex items-start gap-4 mb-3 lg:mb-0 flex-1">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-sm font-medium text-white">
                  {interview.kandidat.nama
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">
                    {interview.kandidat.nama}
                  </h3>
                  <p className="text-sm text-blue-400 font-medium">
                    {interview.kandidat.posisi}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    {interview.keterangan}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto lg:items-center">
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-400">📅</span>
                  <span className="text-sm text-gray-300">
                    {formatTanggal(interview.tanggal)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-400">🕐</span>
                  <span className="text-sm text-gray-300">
                    {interview.waktu}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-400">📍</span>
                  <span className="text-sm text-gray-300">
                    {interview.lokasi}
                  </span>
                </div>
                <span
                  className={`${getWarnaStatus(
                    interview.status
                  )} text-xs px-2 py-1 rounded-full font-medium border`}
                >
                  {formatStatus(interview.status)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {jadwalInterview.length === 0 && (
          <div className="text-center py-8 text-gray-400">
            <div className="text-4xl mb-4">🎓</div>
            <p>Belum ada jadwal interview yang tersedia</p>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="p-6 border-t border-gray-700 bg-gray-900 rounded-b-lg">
        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="text-sm text-gray-400">
            Total:{" "}
            <span className="text-white font-medium">
              {jadwalInterview.length}
            </span>{" "}
            jadwal interview
          </div>
        </div>
      </div>
    </div>
  );
}
