"use client";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function DaftarAkun() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <HeaderSection />
      <FormDaftar />
      <FooterSection />
    </div>
  );
}

export default DaftarAkun;

function HeaderSection() {
  return (
    <div className="text-center py-12 relative">
      {/* Skip Button */}
      <Link
        to="/LandPage"
        className="absolute top-4 right-4 btn btn-ghost btn-sm text-gray-600 hover:text-[#1c2953] hover:bg-gray-100"
      >
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
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
        Skip
      </Link>

      <h1 className="text-4xl font-bold text-[#1c2953] mb-4">
        Daftar Akun Science Society
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Buat akun untuk mengakses berbagai fitur dan layanan Science Society
      </p>
    </div>
  );
}

function FormDaftar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    password: "",
    konfirmasiPassword: "",
    jenisKelamin: "",
    setuju: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi password
    if (formData.password !== formData.konfirmasiPassword) {
      alert("Password dan konfirmasi password tidak cocok!");
      return;
    }

    console.log("Form Data:", formData);
    alert("Pendaftaran berhasil! Selamat datang di Science Society.");

    // Redirect to LandPage
    navigate("/LandPage");
  };

  return (
    <div className="max-w-md mx-auto px-4 pb-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-[#1c2953] p-6">
          <h2 className="text-xl font-semibold text-white">Informasi Akun</h2>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          <InputField
            label="Nama Lengkap"
            name="namaLengkap"
            type="text"
            value={formData.namaLengkap}
            onChange={handleInputChange}
            required
          />

          <InputField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />

          <InputField
            label="Nomor Telepon"
            name="nomorTelepon"
            type="tel"
            value={formData.nomorTelepon}
            onChange={handleInputChange}
            required
          />

          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            required
          />

          <InputField
            label="Konfirmasi Password"
            name="konfirmasiPassword"
            type="password"
            value={formData.konfirmasiPassword}
            onChange={handleInputChange}
            required
          />

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Jenis Kelamin <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="laki-laki"
                  checked={formData.jenisKelamin === "laki-laki"}
                  onChange={handleInputChange}
                  className="radio radio-primary"
                  required
                />
                <span>Laki-laki</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="jenisKelamin"
                  value="perempuan"
                  checked={formData.jenisKelamin === "perempuan"}
                  onChange={handleInputChange}
                  className="radio radio-primary"
                />
                <span>Perempuan</span>
              </label>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="setuju"
              id="setuju"
              checked={formData.setuju}
              onChange={handleInputChange}
              className="checkbox checkbox-primary"
              required
            />
            <label
              htmlFor="setuju"
              className="text-sm text-gray-600 cursor-pointer"
            >
              Saya setuju dengan{" "}
              <a href="#" className="text-[#1c2953] hover:underline">
                Syarat & Ketentuan
              </a>{" "}
              dan{" "}
              <a href="#" className="text-[#1c2953] hover:underline">
                Kebijakan Privasi
              </a>
            </label>
          </div>

          <div className="pt-4">
            <button type="submit" className="btn btn-primary w-full">
              Daftar Akun
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>

          <div className="text-center text-sm text-gray-600 pt-4">
            Sudah memiliki akun?{" "}
            <Link
              to="/LandPage"
              className="text-[#1c2953] font-medium hover:underline"
            >
              Masuk di sini
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

function InputField({
  label,
  name,
  type,
  value,
  onChange,
  required,
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="input input-bordered w-full focus:ring-2 focus:ring-[#1c2953] focus:border-transparent"
        {...props}
      />
    </div>
  );
}

function FooterSection() {
  return (
    <div className="text-center py-8 text-gray-500">
      <p>&copy; 2025 Science Society. Semua hak dilindungi.</p>
      <p className="text-sm mt-2">
        Butuh bantuan? Hubungi kami di{" "}
        <a
          href="mailto:support@sciencesociety.id"
          className="text-[#1c2953] hover:underline"
        >
          support@sciencesociety.id
        </a>
      </p>
    </div>
  );
}
