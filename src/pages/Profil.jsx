"use client"

import { useState } from "react"
import Navbar from "./Navbar"

function profil() {
  return (
    <>
      <Navbar />
      <Profilhome />
    </>
  )
}

function ProfileMenu({ activeSection, onSectionChange }) {
  return (
    <>
      <ul className="menu bg-base-200 rounded-box">
        <li>
          <a
            className={`tooltip tooltip-right ${activeSection === "biodata" ? "active bg-primary text-primary-content" : ""}`}
            data-tip="Biodata"
            onClick={() => onSectionChange("biodata")}
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
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={`tooltip tooltip-right ${activeSection === "details" ? "active bg-primary text-primary-content" : ""}`}
            data-tip="Details"
            onClick={() => onSectionChange("details")}
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
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </li>
        <li>
          <a
            className={`tooltip tooltip-right ${activeSection === "stats" ? "active bg-primary text-primary-content" : ""}`}
            data-tip="Stats"
            onClick={() => onSectionChange("stats")}
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
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </>
  )
}

export default profil

function Profilhome() {
  const [activeSection, setActiveSection] = useState("home")

  const renderContent = () => {
    switch (activeSection) {
      case "biodata":
        return <Biodata />
      case "details":
        return <MentorDetail />
      case "stats":
        return <Performa />
      default:
        return (
          <div>
            <h1 className="text-5xl font-bold">Halo Tri Aji Alhuda!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In
              deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        )
    }
  }

  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src="/pp_aji.jpg" className="max-w-sm rounded-lg shadow-2xl w-50" />
          <ProfileMenu activeSection={activeSection} onSectionChange={setActiveSection} />
          <div className="flex-1">{renderContent()}</div>
        </div>
      </div>
    </>
  )
}

function Biodata() {
  return (
    <div className="flex justify-center items-center min-h-full bg-transparent p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-md w-full overflow-hidden">
        <div className="flex flex-col items-center p-6">
          <h2 className="text-2xl font-bold mt-4 text-gray-800">Tri Aji Alhuda</h2>
          <p className="text-sm text-gray-500">Mentor Tetap - Teknologi Informasi</p>
        </div>
        <div className="px-6 pb-6 text-sm text-gray-700">
          <p>
            <span className="font-semibold">NIDN:</span> 0123456789
          </p>
          <p>
            <span className="font-semibold">Email:</span> triaji999@gmail.com
          </p>
          <p>
            <span className="font-semibold">No. Telepon:</span> +62 812-3456-7890
          </p>
          <p>
            <span className="font-semibold">Alamat:</span> Jl. Pendidikan No. 10, Palembang
          </p>
          <p>
            <span className="font-semibold">Bidang Keahlian:</span> Kecerdasan Buatan, Pemrograman Python
          </p>
          <p>
            <span className="font-semibold">Riwayat Pendidikan:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>S1 Teknik Informatika - Universitas A</li>
            <li>S2 Sistem Informasi - Universitas B</li>
            <li>S3 Ilmu Komputer - Universitas C</li>
          </ul>
          <p className="mt-2">
            <span className="font-semibold">Publikasi Terbaru:</span>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>"Model Prediksi Cuaca Berbasis Machine Learning" (2023)</li>
            <li>"Analisis Big Data pada Sistem Smart City" (2022)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function MentorDetail() {
  return (
    <div className="flex justify-center items-center min-h-full p-4">
      <div className="bg-white rounded-xl shadow-lg max-w-2xl w-full p-6">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Mentor Details</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Mentoring Experience</h3>
              <p className="text-gray-600">5+ years of mentoring students in AI and Machine Learning</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Specializations</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Python Programming</li>
                <li>Data Science</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Mentoring Style</h3>
              <p className="text-gray-600">Hands-on approach with practical projects and real-world applications</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Students Mentored</h3>
              <p className="text-2xl font-bold text-primary">150+</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Success Rate</h3>
              <p className="text-2xl font-bold text-success">95%</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700">Available Hours</h3>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Recent Achievements</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">Best Mentor Award 2023</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">Published 3 research papers this year</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              <span className="text-gray-600">Led 5 successful thesis projects</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Performa() {
  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Performance Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-primary">Research Publications</h2>
            <div className="text-3xl font-bold text-gray-700">25</div>
            <p className="text-gray-600">Published papers in international journals and conferences</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary btn-sm">View Details</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-success">Student Success Rate</h2>
            <div className="text-3xl font-bold text-gray-700">95%</div>
            <p className="text-gray-600">Percentage of students who successfully completed their programs</p>
            <div className="card-actions justify-end">
              <button className="btn btn-success btn-sm">View Details</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-warning">Active Projects</h2>
            <div className="text-3xl font-bold text-gray-700">8</div>
            <p className="text-gray-600">Currently ongoing research and mentoring projects</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning btn-sm">View Details</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-info">Teaching Hours</h2>
            <div className="text-3xl font-bold text-gray-700">1,200</div>
            <p className="text-gray-600">Total hours spent on teaching and mentoring this year</p>
            <div className="card-actions justify-end">
              <button className="btn btn-info btn-sm">View Details</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-secondary">Awards Received</h2>
            <div className="text-3xl font-bold text-gray-700">12</div>
            <p className="text-gray-600">Recognition and awards for excellence in teaching and research</p>
            <div className="card-actions justify-end">
              <button className="btn btn-secondary btn-sm">View Details</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title text-accent">Conference Presentations</h2>
            <div className="text-3xl font-bold text-gray-700">18</div>
            <p className="text-gray-600">Presentations at national and international conferences</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent btn-sm">View Details</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
