import React from "react";
import Navbar from "./Navbar";

function profil() {
  return (
    <>
      <Navbar />
      <Profilhome />
    </>
  );
}

export default profil;

function Profilhome() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="/pp_aji.jpg"
            className="max-w-sm rounded-lg shadow-2xl w-50"
          />
          <ProfileMenu />
          <div>
            <h1 className="text-5xl font-bold">Halo Tri Aji Alhuda!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}

function ProfileMenu() {
  return (
    <>
      <ul className="menu bg-base-200 rounded-box">
        <li>
          <a className="tooltip tooltip-right" data-tip="Biodata">
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
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Details">
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
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a className="tooltip tooltip-right" data-tip="Stats">
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
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}


function Biodata() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <h2 className="text-2xl font-bold mt-4 text-gray-800">Dr. Rika Susanti, M.Kom</h2>
          <p className="text-sm text-gray-500">Dosen Tetap - Teknologi Informasi</p>
        </div>
        <div className="px-6 pb-6 text-sm text-gray-700">
          <p><span className="font-semibold">NIDN:</span> 0123456789</p>
          <p><span className="font-semibold">Email:</span> rika.susanti@universitas.ac.id</p>
          <p><span className="font-semibold">No. Telepon:</span> +62 812-3456-7890</p>
          <p><span className="font-semibold">Alamat:</span> Jl. Pendidikan No. 10, Palembang</p>
          <p><span className="font-semibold">Bidang Keahlian:</span> Kecerdasan Buatan, Pemrograman Python</p>
          <p><span className="font-semibold">Riwayat Pendidikan:</span></p>
          <ul className="list-disc list-inside ml-4">
            <li>S1 Teknik Informatika - Universitas A</li>
            <li>S2 Sistem Informasi - Universitas B</li>
            <li>S3 Ilmu Komputer - Universitas C</li>
          </ul>
          <p className="mt-2"><span className="font-semibold">Publikasi Terbaru:</span></p>
          <ul className="list-disc list-inside ml-4">
            <li>“Model Prediksi Cuaca Berbasis Machine Learning” (2023)</li>
            <li>“Analisis Big Data pada Sistem Smart City” (2022)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

