import { Link } from "react-router-dom";

function Face() {
  return (
    <>
      <UserLog />
    </>
  );
}

export default Face;

function UserLog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <div className="text-center py-12">
        <img src="/logo_ss.png" alt="Science Society" className="mx-auto" />
        <h1 className="text-4xl font-bold text-[#1c2953] mb-4">
          Science Society asdasdasd
        </h1>
        <p className="text-xl text-gray-600">
          Pilih jenis akses yang sesuai dengan kebutuhan Anda
        </p>
      </div>

      {/* Login Options */}
      <div className="flex flex-col lg:flex-row gap-8 px-8 pb-12">
        {/* Mentor Application Card */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
            <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 text-center">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Calon Mentor
              </h2>
              <p className="text-green-100">
                Daftar untuk menjadi mentor Science Society
              </p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                <FeatureItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  }
                  text="Formulir pendaftaran mentor"
                />
                <FeatureItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  }
                  text="Tes seleksi dan wawancara"
                />
                <FeatureItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  }
                  text="Program pelatihan 3 bulan"
                />
              </div>
              <Newbtn />
            </div>
          </div>
        </div>

        {/* Active Mentor Card */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
            <div className="bg-gradient-to-r from-[#1c2953] to-[#2d3a6b] p-6 text-center">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-[#1c2953]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">
                Mentor Aktif
              </h2>
              <p className="text-blue-100">
                Akses portal mengajar Science Society
              </p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="space-y-4 mb-8 flex-1">
                <FeatureItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  }
                  text="Dashboard kelas dan siswa"
                />
                <FeatureItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  }
                  text="Jadwal mengajar dan try out"
                />
                <FeatureItem
                  icon={
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  }
                  text="Bank soal dan materi ajar"
                />
              </div>
              <Userbtn />
            </div>
          </div>
        </div>

        {/* Management Card */}
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full flex flex-col">
            <div className="bg-gradient-to-r from-purple-500 to-purple-700 p-6 text-center">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white mb-2">Manajemen</h2>
              <p className="text-purple-100">Panel kontrol administrator</p>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-8 flex-1 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 mx-auto mb-2 text-purple-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                  <p className="text-sm">Akses terbatas untuk administrator</p>
                </div>
              </div>
              <Managebtn />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-gray-500">
        <p>&copy; 2025 Science Society. Semua hak dilindungi.</p>
      </div>
    </div>
  );
}

function FeatureItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-green-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {icon}
        </svg>
      </div>
      <span className="text-gray-600 text-sm">{text}</span>
    </div>
  );
}

function Newbtn() {
  return (
    <Link
      to="/UserLogin"
      className="btn w-full bg-gradient-to-r from-green-400 to-green-600 text-white border-0 hover:from-green-500 hover:to-green-700 font-bold font-montserrat transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      Daftar Mentor
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7l5 5m0 0l-5 5m5-5H6"
        />
      </svg>
    </Link>
  );
}

function Userbtn() {
  return (
    <Link
      to="/MentorLogin"
      className="btn w-full bg-gradient-to-r from-[#1c2953] to-[#2d3a6b] text-white border-0 hover:from-[#2d3a6b] hover:to-[#1c2953] font-bold font-montserrat transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      Portal Mentor
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
    </Link>
  );
}

function Managebtn() {
  return (
    <Link
      to="/AdmLogin"
      className="btn w-full bg-gradient-to-r from-purple-500 to-purple-700 text-white border-0 hover:from-purple-600 hover:to-purple-800 font-bold font-montserrat transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
    >
      Panel Admin
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 ml-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      </svg>
    </Link>
  );
}
