import ManageSide from "./ManageSide";

function Interview() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <ManageSide />
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold mb-6">Jadwal Interview</h1>
        <InterviewCard />
      </div>
    </div>
  );
}

export default Interview;

function InterviewCard() {
  // Data jadwal interview untuk bimbel
  const jadwalInterview = [
    {
      id: 1,
      kandidat: {
        nama: "Sari Dewi Lestari",
        posisi: "Tutor SNBT Matematika",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-02",
      waktu: "10:00 - 11:00",
      lokasi: "Ruang Meeting 1",
      status: "terjadwal",
      keterangan: "Interview untuk posisi tutor matematika SNBT",
    },
    {
      id: 2,
      kandidat: {
        nama: "Ahmad Rizki Pratama",
        posisi: "Tutor TWK & TIU",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-02",
      waktu: "13:30 - 14:30",
      lokasi: "Virtual (Zoom)",
      status: "terjadwal",
      keterangan: "Interview untuk tutor tes kedinasan",
    },
    {
      id: 3,
      kandidat: {
        nama: "Putri Maharani",
        posisi: "Tutor Bahasa Indonesia SNBT",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-03",
      waktu: "11:00 - 12:00",
      lokasi: "Ruang Meeting 2",
      status: "dikonfirmasi",
      keterangan: "Interview untuk tutor Bahasa Indonesia",
    },
    {
      id: 4,
      kandidat: {
        nama: "Budi Santoso",
        posisi: "Admin Akademik",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-04",
      waktu: "15:00 - 16:00",
      lokasi: "Ruang HRD",
      status: "dijadwal_ulang",
      keterangan: "Interview untuk posisi admin akademik",
    },
    {
      id: 5,
      kandidat: {
        nama: "Indira Sari",
        posisi: "Tutor TKP & SKD",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      tanggal: "2025-06-05",
      waktu: "09:00 - 10:00",
      lokasi: "Ruang Meeting 1",
      status: "terjadwal",
      keterangan: "Interview untuk tutor tes karakteristik pribadi",
    },
  ];

  // Fungsi untuk mendapatkan warna badge berdasarkan status
  const getWarnaStatus = (status) => {
    switch (status) {
      case "terjadwal":
        return "bg-blue-100 text-blue-800";
      case "dikonfirmasi":
        return "bg-green-100 text-green-800";
      case "dijadwal_ulang":
        return "bg-amber-100 text-amber-800";
      case "dibatalkan":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
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
    <div className="w-full bg-white rounded-lg shadow-sm border">
      {/* Header */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-5 h-5 text-gray-600">🎓</div>
          <h2 className="text-xl font-semibold">Jadwal Interview Bimbel</h2>
        </div>
        <p className="text-gray-600 text-sm">
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
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4 mb-3 lg:mb-0 flex-1">
                {/* Avatar */}
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-sm font-medium text-gray-600">
                  {interview.kandidat.nama
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">
                    {interview.kandidat.nama}
                  </h3>
                  <p className="text-sm text-blue-600 font-medium">
                    {interview.kandidat.posisi}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {interview.keterangan}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 w-full lg:w-auto lg:items-center">
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-500">📅</span>
                  <span className="text-sm">
                    {formatTanggal(interview.tanggal)}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-500">🕐</span>
                  <span className="text-sm">{interview.waktu}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-500">📍</span>
                  <span className="text-sm">{interview.lokasi}</span>
                </div>
                <span
                  className={`${getWarnaStatus(
                    interview.status
                  )} text-xs px-2 py-1 rounded-full font-medium`}
                >
                  {formatStatus(interview.status)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {jadwalInterview.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            <div className="text-4xl mb-4">🎓</div>
            <p>Belum ada jadwal interview yang tersedia</p>
          </div>
        )}
      </div>
    </div>
  );
}
