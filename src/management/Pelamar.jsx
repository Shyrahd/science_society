"use client";

import { useState, useEffect } from "react";
import ManageSide from "./ManageSide";
import TopBar from "./TopBar";
import { jsPDF } from "jspdf";

function Pelamar() {
  return (
    <>
      <div className="min-h-screen bg-gray-950">
        <TopBar />
        <div className="flex relative">
          <div className="sticky top-0 h-screen z-40">
            <ManageSide />
          </div>
          <ListPelamar />
        </div>
      </div>
    </>
  );
}

export default Pelamar;

function ListPelamar() {
  const [applicants, setApplicants] = useState([]);
  const [filteredApplicants, setFilteredApplicants] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("date");
  const [isLoading, setIsLoading] = useState(true);

  // Mock data - in a real app, this would come from an API
  useEffect(() => {
    setTimeout(() => {
      const mockApplicants = [
        {
          id: 1,
          name: "Ahmad Rizki",
          email: "ahmad.rizki@gmail.com",
          phone: "081234567890",
          education: "S1 Matematika UI",
          applyDate: "2025-05-15",
          status: "review",
          subjects: ["Penalaran Matematika", "TPS"],
          experience: "2 tahun",
        },
        {
          id: 2,
          name: "Siti Nurhaliza",
          email: "siti.nurhaliza@gmail.com",
          phone: "081234567891",
          education: "S2 Kimia ITB",
          applyDate: "2025-05-16",
          status: "interview",
          subjects: ["Literasi Bahasa Indonesia", "Penalaran Matematika"],
          experience: "3 tahun",
        },
        {
          id: 3,
          name: "Budi Santoso",
          email: "budi.santoso@gmail.com",
          phone: "081234567892",
          education: "S1 Fisika ITB",
          applyDate: "2025-05-14",
          status: "review",
          subjects: ["TPS", "Penalaran Matematika"],
          experience: "1 tahun",
        },
        {
          id: 5,
          name: "Eko Prasetyo",
          email: "eko.prasetyo@gmail.com",
          phone: "081234567894",
          education: "S1 Pendidikan Matematika UGM",
          applyDate: "2025-05-12",
          status: "review",
          subjects: ["Penalaran Matematika", "TIU"],
          experience: "2 tahun",
        },
        {
          id: 6,
          name: "Fitri Handayani",
          email: "fitri.handayani@gmail.com",
          phone: "081234567895",
          education: "S2 Biologi ITB",
          applyDate: "2025-05-17",
          status: "review",
          subjects: ["TWK", "TIU"],
          experience: "5 tahun",
        },
        {
          id: 7,
          name: "Gunawan Wibisono",
          email: "gunawan.wibisono@gmail.com",
          phone: "081234567896",
          education: "S1 Ekonomi UI",
          applyDate: "2025-05-18",
          status: "interview",
          subjects: ["TKP", "TWK"],
          experience: "3 tahun",
        },
        {
          id: 8,
          name: "Hani Pratiwi",
          email: "hani.pratiwi@gmail.com",
          phone: "081234567897",
          education: "S1 Kimia ITS",
          applyDate: "2025-05-19",
          status: "review",
          subjects: ["TIU", "TKP"],
          experience: "1 tahun",
        },
        {
          id: 9,
          name: "Irfan Hakim",
          email: "irfan.hakim@gmail.com",
          phone: "081234567898",
          education: "S1 Fisika USU",
          applyDate: "2025-05-20",
          status: "review",
          subjects: ["Penalaran Matematika", "TPS"],
          experience: "2 tahun",
        },
        {
          id: 10,
          name: "Joko Dodi",
          email: "joko.Dodi@gmail.com",
          phone: "081234567899",
          education: "S1 Teknik UNS",
          applyDate: "2025-05-21",
          status: "interview",
          subjects: ["Penalaran Matematika", "TIU"],
          experience: "6 tahun",
        },
        {
          id: 11,
          name: "Kartika Sari",
          email: "kartika.sari@gmail.com",
          phone: "081234567810",
          education: "S2 Pendidikan UNY",
          applyDate: "2025-05-22",
          status: "review",
          subjects: ["Literasi Bahasa Indonesia", "TWK"],
          experience: "4 tahun",
        },
        {
          id: 12,
          name: "Lukman Hakim",
          email: "lukman.hakim@gmail.com",
          phone: "081234567811",
          education: "S1 Matematika UNPAD",
          applyDate: "2025-05-23",
          status: "review",
          subjects: ["Penalaran Matematika", "TIU"],
          experience: "2 tahun",
        },
        {
          id: 13,
          name: "Maya Sari",
          email: "maya.sari@gmail.com",
          phone: "081234567812",
          education: "S1 Sastra Indonesia UI",
          applyDate: "2025-05-24",
          status: "review",
          subjects: ["Literasi Bahasa Indonesia", "TPS"],
          experience: "3 tahun",
        },
        {
          id: 14,
          name: "Nanda Pratama",
          email: "nanda.pratama@gmail.com",
          phone: "081234567813",
          education: "S1 Geografi UGM",
          applyDate: "2025-05-25",
          status: "interview",
          subjects: ["TWK", "TKP"],
          experience: "2 tahun",
        },
        {
          id: 15,
          name: "Olivia Putri",
          email: "olivia.putri@gmail.com",
          phone: "081234567814",
          education: "S1 Psikologi UNPAD",
          applyDate: "2025-05-26",
          status: "review",
          subjects: ["TKP", "TPS"],
          experience: "1 tahun",
        },
      ]; // your current dummy list

      // Check if there's new form data in localStorage
      const newApplicant = JSON.parse(sessionStorage.getItem("newApplicant"));

      if (newApplicant) {
        const newApplicantFormatted = {
          id: mockApplicants.length + 1,
          name: newApplicant.namaLengkap,
          email: newApplicant.email,
          phone: newApplicant.nomorTelepon,
          education: `${newApplicant.pendidikanTerakhir} ${newApplicant.jurusan} ${newApplicant.namaInstitusi}`,
          applyDate: new Date().toISOString().split("T")[0],
          status: "accepted",
          subjects: newApplicant.materiUTBK || [],
          experience: newApplicant.lamaPengalaman || "N/A",
        };

        mockApplicants.unshift(newApplicantFormatted);
      }

      setApplicants(mockApplicants);
      setFilteredApplicants(mockApplicants);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter applicants based on search query
  useEffect(() => {
    let result = [...applicants];

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (applicant) =>
          applicant.name.toLowerCase().includes(query) ||
          applicant.email.toLowerCase().includes(query) ||
          applicant.education.toLowerCase().includes(query) ||
          applicant.subjects.some((subject) =>
            subject.toLowerCase().includes(query)
          )
      );
    }

    // Sort applicants
    if (sortBy === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "date") {
      result.sort((a, b) => new Date(b.applyDate) - new Date(a.applyDate));
    } else if (sortBy === "status") {
      const statusOrder = { interview: 1, review: 2, accepted: 3, rejected: 4 };
      result.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    }

    setFilteredApplicants(result);
  }, [applicants, searchQuery, sortBy]);

  return (
    <main className="flex-1 overflow-auto relative z-0">
      <div className="container mx-auto px-4 py-8">
        <HeaderSection />
        <FilterSection
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalApplicants={filteredApplicants.length}
        />
        {isLoading ? (
          <LoadingState />
        ) : filteredApplicants.length > 0 ? (
          <ApplicantsList applicants={filteredApplicants} />
        ) : (
          <EmptyState searchQuery={searchQuery} />
        )}
      </div>
    </main>
  );
}

function HeaderSection() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-white mb-2">
        Daftar Pelamar Mentor
      </h1>
      <p className="text-gray-400">
        Kelola dan pantau status pelamar mentor Science Society untuk program
        SNBT, UTBK, dan Tes Kedinasan.
      </p>
    </div>
  );
}

function FilterSection({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  totalApplicants,
}) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-6 mb-8 border border-gray-700 relative z-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="flex-1">
          <div className="relative z-10">
            <input
              type="text"
              placeholder="Cari nama, email, pendidikan, atau mata pelajaran..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 relative z-10"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white relative z-10"
            >
              <option value="date">Terbaru</option>
              <option value="name">Nama (A-Z)</option>
              <option value="status">Status</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-300">
          Menampilkan{" "}
          <span className="font-semibold text-white">{totalApplicants}</span>{" "}
          pelamar
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm border border-gray-600 rounded-lg hover:bg-gray-700 flex items-center text-gray-300 hover:text-white transition-colors relative z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Export
          </button>
        </div>
      </div>
    </div>
  );
}

function ApplicantsList({ applicants }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
      <div className="bg-gray-900 text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
          </svg>
          <h2 className="text-xl font-semibold">Daftar Pelamar</h2>
        </div>
        <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
          {applicants.length} Pelamar
        </span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Nama
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Pendidikan
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Mata Pelajaran
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Pengalaman
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Tanggal Lamar
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                Aksi
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-800 divide-y divide-gray-700">
            {applicants.map((applicant) => (
              <ApplicantRow key={applicant.id} applicant={applicant} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ApplicantRow({ applicant }) {
  const statusColors = {
    review: "bg-yellow-900 text-yellow-200 border-yellow-700",
    interview: "bg-blue-900 text-blue-200 border-blue-700",
    accepted: "bg-green-900 text-green-200 border-green-700",
    rejected: "bg-red-900 text-red-200 border-red-700",
  };

  const statusLabels = {
    review: "Sedang Direview",
    interview: "Interview",
    accepted: "Diterima",
    rejected: "Ditolak",
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  const downloadPDF = () => {
    // Create a new PDF document
    const doc = new jsPDF();

    // Set font size and styles
    doc.setFontSize(22);
    doc.setFont("helvetica", "bold");
    doc.text("Detail Pelamar", 105, 20, { align: "center" });

    // Add Science Society logo/header
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text("Science Society Bimbel", 105, 30, { align: "center" });
    doc.text("Program SNBT, UTBK, dan Tes Kedinasan", 105, 35, {
      align: "center",
    });

    // Add horizontal line
    doc.setLineWidth(0.5);
    doc.line(20, 40, 190, 40);

    // Add applicant details
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Data Pribadi", 20, 50);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Nama: ${applicant.name}`, 20, 60);
    doc.text(`Email: ${applicant.email}`, 20, 70);
    doc.text(`Telepon: ${applicant.phone}`, 20, 80);
    doc.text(`Pendidikan: ${applicant.education}`, 20, 90);
    doc.text(`Pengalaman: ${applicant.experience}`, 20, 100);

    // Add application details
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.text("Detail Lamaran", 20, 120);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Tanggal Melamar: ${formatDate(applicant.applyDate)}`, 20, 130);
    doc.text(`Status: ${statusLabels[applicant.status]}`, 20, 140);

    // Add subjects
    doc.text(`Mata Pelajaran: ${applicant.subjects.join(", ")}`, 20, 150);

    // Add footer
    doc.setFontSize(10);
    doc.text(
      "Dokumen ini dihasilkan secara otomatis dari sistem Science Society.",
      105,
      280,
      { align: "center" }
    );

    // Save the PDF with the applicant's name
    doc.save(`Pelamar_${applicant.name.replace(/\s+/g, "_")}.pdf`);
  };

  return (
    <tr className="hover:bg-gray-700 transition-colors">
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="font-medium text-white">{applicant.name}</div>
        <div className="text-sm text-gray-400">{applicant.email}</div>
        <div className="text-sm text-gray-400">{applicant.phone}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
        {applicant.education}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex flex-wrap gap-1">
          {applicant.subjects.map((subject, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-700 text-gray-200 border border-gray-600"
            >
              {subject}
            </span>
          ))}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
        {applicant.experience}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
        {formatDate(applicant.applyDate)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
            statusColors[applicant.status]
          }`}
        >
          {statusLabels[applicant.status]}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button
          className="text-blue-400 hover:text-blue-300 p-1 rounded transition-colors hover:bg-gray-600"
          onClick={downloadPDF}
          title="Download Detail PDF"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
}

function LoadingState() {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-12 text-center border border-gray-700">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
      <h3 className="text-lg font-semibold text-white">
        Memuat data pelamar...
      </h3>
      <p className="text-gray-400 mt-2">Mohon tunggu sebentar</p>
    </div>
  );
}

function EmptyState({ searchQuery }) {
  return (
    <div className="bg-gray-800 rounded-lg shadow-lg p-12 text-center border border-gray-700">
      <div className="inline-block rounded-full bg-gray-700 p-6 mb-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-12 w-12 text-gray-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-white">
        Tidak ada pelamar ditemukan
      </h3>
      {searchQuery ? (
        <p className="text-gray-400 mt-2">
          Tidak ada hasil untuk pencarian "{searchQuery}". Coba dengan kata
          kunci lain.
        </p>
      ) : (
        <p className="text-gray-400 mt-2">
          Belum ada pelamar yang terdaftar untuk kriteria ini.
        </p>
      )}
    </div>
  );
}

export { Pelamar };
