"use client";

import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NewNav from "./NewNav";

function Lamar() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <NewNav />
      <HeaderSection />
      <FormLamar />
      <FooterSection />
    </div>
  );
}

export default Lamar;

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
        Formulir Pendaftaran Guru
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Bergabunglah dengan tim pengajar terbaik di bimbingan belajar kami dan
        wujudkan impian menjadi pendidik profesional
      </p>
    </div>
  );
}

function FormLamar() {
  const [formData, setFormData] = useState({
    // Data Pribadi
    namaLengkap: "",
    email: "",
    nomorTelepon: "",
    tanggalLahir: "",
    jenisKelamin: "",
    domisili: "",
    alamat: "",

    // Pendidikan
    pendidikanTerakhir: "",
    jurusan: "",
    namaInstitusi: "",
    tahunLulus: "",
    ipk: "",

    // Pengalaman Mengajar
    hasTeachingExperience: false,
    lamaPengalaman: "",
    tempatMengajar: "",
    deskripsiPengalaman: "",

    // Mata Pelajaran UTBK
    materiUTBK: [],

    // Ketersediaan
    hariTersedia: [],
    waktuTersedia: "",

    // Informasi Tambahan
    motivasi: "",
    kelebihan: "",
    ekspektasiGaji: "",

    // Upload Dokumen
    cv: null,
    ijazah: null,
    sertifikat: null,
    pasFoto: null,
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const handleInputChange = (e) => {
    const { name, value, type, files, checked } = e.target;
    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "checkbox" && name === "hasTeachingExperience") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleArrayChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name].includes(value)
        ? prev[name].filter((item) => item !== value)
        : [...prev[name], value],
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(
      "Aplikasi berhasil dikirim! Tim kami akan menghubungi Anda dalam 10-15 hari kerja."
    );
    navigate("/LandPage");
  };

  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto px-4 pb-12">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        <form onSubmit={handleSubmit} className="p-8">
          {/* Step 1: Data Pribadi */}
          {currentStep === 1 && (
            <StepDataPribadi
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          {/* Step 2: Pendidikan */}
          {currentStep === 2 && (
            <StepPendidikan
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          {/* Step 3: Pengalaman Mengajar */}
          {currentStep === 3 && (
            <StepPengalamanMengajar
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          {/* Step 4: Mata Pelajaran UTBK */}
          {currentStep === 4 && (
            <StepMataPelajaran
              formData={formData}
              handleArrayChange={handleArrayChange}
            />
          )}

          {/* Step 5: Ketersediaan & Informasi Tambahan */}
          {currentStep === 5 && (
            <StepKetersediaanInfo
              formData={formData}
              handleInputChange={handleInputChange}
              handleArrayChange={handleArrayChange}
            />
          )}

          {/* Step 6: Upload Dokumen */}
          {currentStep === 6 && (
            <StepUploadDokumen
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}

          {/* Navigation Buttons */}
          <NavigationButtons
            currentStep={currentStep}
            totalSteps={totalSteps}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        </form>
      </div>
    </div>
  );
}

function ProgressBar({ currentStep, totalSteps }) {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="bg-[#1c2953] p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-white">
          Langkah {currentStep} dari {totalSteps}
        </h2>
        <span className="text-white text-sm">
          {Math.round(progressPercentage)}% Selesai
        </span>
      </div>
      <div className="w-full bg-blue-200 rounded-full h-3">
        <div
          className="bg-white h-3 rounded-full transition-all duration-500"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}

function StepDataPribadi({ formData, handleInputChange }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
        👤 Data Pribadi
      </h3>
      <p className="text-gray-600 mb-6">
        Lengkapi informasi pribadi Anda dengan benar dan sesuai identitas
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="Nama Lengkap"
          name="namaLengkap"
          type="text"
          value={formData.namaLengkap}
          onChange={handleInputChange}
          placeholder="Masukkan nama lengkap sesuai KTP"
          required
        />
        <InputField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="contoh@email.com"
          required
        />
        <InputField
          label="Nomor Telepon"
          name="nomorTelepon"
          type="tel"
          value={formData.nomorTelepon}
          onChange={handleInputChange}
          placeholder="08xxxxxxxxxx"
          required
        />
        <InputField
          label="Tanggal Lahir"
          name="tanggalLahir"
          type="date"
          value={formData.tanggalLahir}
          onChange={handleInputChange}
          required
        />
        <SelectField
          label="Domisili (Kota)"
          name="domisili"
          value={formData.domisili}
          onChange={handleInputChange}
          options={[
            { value: "", label: "Pilih kota domisili" },
            { value: "jakarta", label: "Jakarta" },
            { value: "bandung", label: "Bandung" },
            { value: "surabaya", label: "Surabaya" },
            { value: "medan", label: "Medan" },
            { value: "semarang", label: "Semarang" },
            { value: "makassar", label: "Makassar" },
            { value: "palembang", label: "Palembang" },
            { value: "yogyakarta", label: "Yogyakarta" },
            { value: "solo", label: "Solo" },
            { value: "malang", label: "Malang" },
          ]}
          required
        />
        <div className="md:col-span-2">
          <div className="mb-6">
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
          <TextAreaField
            label="Alamat Lengkap"
            name="alamat"
            value={formData.alamat}
            onChange={handleInputChange}
            rows={3}
            placeholder="Masukkan alamat lengkap (Jalan, RT/RW, Kelurahan, Kecamatan, Kota, Provinsi)"
            required
          />
        </div>
      </div>
    </div>
  );
}

function StepPendidikan({ formData, handleInputChange }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
        🎓 Riwayat Pendidikan
      </h3>
      <p className="text-gray-600 mb-6">
        Informasi pendidikan terakhir dan prestasi akademik Anda
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SelectField
          label="Pendidikan Terakhir"
          name="pendidikanTerakhir"
          value={formData.pendidikanTerakhir}
          onChange={handleInputChange}
          options={[
            { value: "", label: "Pilih pendidikan terakhir" },
            { value: "sma", label: "SMA/SMK" },
            { value: "d3", label: "Diploma 3 (D3)" },
            { value: "s1", label: "Sarjana (S1)" },
            { value: "s2", label: "Magister (S2)" },
            { value: "s3", label: "Doktor (S3)" },
          ]}
          required
        />
        <InputField
          label="Jurusan/Program Studi"
          name="jurusan"
          type="text"
          value={formData.jurusan}
          onChange={handleInputChange}
          placeholder="Contoh: Pendidikan Matematika"
          required
        />
        <InputField
          label="Nama Institusi"
          name="namaInstitusi"
          type="text"
          value={formData.namaInstitusi}
          onChange={handleInputChange}
          placeholder="Nama universitas/sekolah tinggi"
          required
        />
        <InputField
          label="Tahun Lulus"
          name="tahunLulus"
          type="number"
          value={formData.tahunLulus}
          onChange={handleInputChange}
          placeholder="2023"
          min="2000"
          max="2025"
          required
        />
        <InputField
          label="IPK/Nilai Rata-rata"
          name="ipk"
          type="text"
          value={formData.ipk}
          onChange={handleInputChange}
          placeholder="3.50 (skala 4.00)"
        />
      </div>
    </div>
  );
}

function StepPengalamanMengajar({ formData, handleInputChange }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
        📚 Pengalaman Mengajar
      </h3>
      <p className="text-gray-600 mb-6">
        Ceritakan pengalaman mengajar Anda (jika ada)
      </p>
      <div className="space-y-6">
        <div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="hasTeachingExperience"
              checked={formData.hasTeachingExperience}
              onChange={handleInputChange}
              className="checkbox checkbox-primary"
            />
            <span className="text-sm font-medium">
              Saya memiliki pengalaman mengajar
            </span>
          </label>
        </div>

        {formData.hasTeachingExperience && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SelectField
                label="Lama Pengalaman Mengajar"
                name="lamaPengalaman"
                value={formData.lamaPengalaman}
                onChange={handleInputChange}
                options={[
                  { value: "", label: "Pilih pengalaman mengajar" },
                  {
                    value: "fresh-graduate",
                    label: "Fresh Graduate (Belum ada pengalaman)",
                  },
                  { value: "kurang-1-tahun", label: "Kurang dari 1 tahun" },
                  { value: "1-2-tahun", label: "1-2 tahun" },
                  { value: "3-5-tahun", label: "3-5 tahun" },
                  { value: "lebih-5-tahun", label: "Lebih dari 5 tahun" },
                ]}
              />
              <InputField
                label="Tempat Mengajar Sebelumnya"
                name="tempatMengajar"
                type="text"
                value={formData.tempatMengajar}
                onChange={handleInputChange}
                placeholder="Nama sekolah/bimbel/lembaga kursus"
              />
            </div>
            <TextAreaField
              label="Deskripsi Pengalaman Mengajar"
              name="deskripsiPengalaman"
              value={formData.deskripsiPengalaman}
              onChange={handleInputChange}
              rows={4}
              placeholder="Ceritakan pengalaman mengajar Anda, metode yang digunakan, prestasi yang dicapai, tantangan yang dihadapi, dll."
            />
          </>
        )}
      </div>
    </div>
  );
}

function StepMataPelajaran({ formData, handleArrayChange }) {
  const materiUTBK = [
    "Kemampuan Penalaran Umum",
    "Pengetahuan dan Pemahaman Umum",
    "Kemampuan Memahami Bacaan dan Menulis",
    "Pengetahuan Kuantitatif",
    "Literasi dalam Bahasa Indonesia",
    "Literasi dalam Bahasa Inggris",
    "Penalaran Matematika",
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
        📖 Materi UTBK yang Dikuasai
      </h3>
      <p className="text-gray-600 mb-6">
        Pilih materi UTBK yang dapat Anda ajarkan dengan baik
      </p>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-4">
          Materi UTBK yang Dikuasai <span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {materiUTBK.map((materi) => (
            <label
              key={materi}
              className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50"
            >
              <input
                type="checkbox"
                checked={formData.materiUTBK.includes(materi)}
                onChange={() => handleArrayChange("materiUTBK", materi)}
                className="checkbox checkbox-primary"
              />
              <span className="text-sm">{materi}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

function StepKetersediaanInfo({
  formData,
  handleInputChange,
  handleArrayChange,
}) {
  const hariOptions = [
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
    "Minggu",
  ];

  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
        ⏰ Ketersediaan & Informasi Tambahan
      </h3>
      <div className="space-y-8">
        {/* Ketersediaan */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            Ketersediaan Waktu
          </h4>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Hari yang Tersedia <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {hariOptions.map((hari) => (
                  <label
                    key={hari}
                    className="flex items-center space-x-2 p-2 border rounded cursor-pointer hover:bg-gray-50"
                  >
                    <input
                      type="checkbox"
                      checked={formData.hariTersedia.includes(hari)}
                      onChange={() => handleArrayChange("hariTersedia", hari)}
                      className="checkbox checkbox-primary"
                    />
                    <span className="text-sm">{hari}</span>
                  </label>
                ))}
              </div>
            </div>
            <SelectField
              label="Waktu Tersedia"
              name="waktuTersedia"
              value={formData.waktuTersedia}
              onChange={handleInputChange}
              options={[
                { value: "", label: "Pilih waktu yang tersedia" },
                { value: "pagi", label: "Pagi (08:00 - 12:00)" },
                { value: "siang", label: "Siang (12:00 - 16:00)" },
                { value: "sore", label: "Sore (16:00 - 20:00)" },
                { value: "malam", label: "Malam (20:00 - 22:00)" },
                { value: "fleksibel", label: "Fleksibel (Bisa disesuaikan)" },
              ]}
              required
            />
          </div>
        </div>

        {/* Informasi Tambahan */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">
            📝 Informasi Tambahan
          </h4>
          <div className="space-y-4">
            <TextAreaField
              label="Motivasi Menjadi Guru"
              name="motivasi"
              value={formData.motivasi}
              onChange={handleInputChange}
              rows={4}
              placeholder="Ceritakan motivasi Anda menjadi guru dan alasan ingin bergabung dengan bimbingan belajar kami..."
              required
            />
            <TextAreaField
              label="Kelebihan & Keunikan Anda"
              name="kelebihan"
              value={formData.kelebihan}
              onChange={handleInputChange}
              rows={4}
              placeholder="Apa yang membuat Anda berbeda dari guru lain? Metode mengajar khusus, prestasi, sertifikasi, dll..."
              required
            />
            <div>
              <InputField
                label="Ekspektasi Gaji (per jam)"
                name="ekspektasiGaji"
                type="text"
                value={formData.ekspektasiGaji}
                onChange={handleInputChange}
                placeholder="Rp 75.000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Opsional - dapat didiskusikan lebih lanjut
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepUploadDokumen({ formData, handleInputChange }) {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
        📎 Upload Dokumen
      </h3>
      <p className="text-gray-600 mb-6">
        Upload dokumen pendukung aplikasi Anda
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUploadField
          label="CV/Resume"
          name="cv"
          onChange={handleInputChange}
          accept=".pdf,.doc,.docx"
          required
          description="Format: PDF, DOC, DOCX (Maksimal: 5MB)"
        />
        <FileUploadField
          label="Ijazah Terakhir"
          name="ijazah"
          onChange={handleInputChange}
          accept=".pdf,.jpg,.jpeg,.png"
          required
          description="Format: PDF, JPG, PNG (Maksimal: 5MB)"
        />
        <FileUploadField
          label="Sertifikat Pendukung"
          name="sertifikat"
          onChange={handleInputChange}
          accept=".pdf,.jpg,.jpeg,.png"
          description="Sertifikat pelatihan, kursus, workshop, dll."
        />
        <FileUploadField
          label="Pas Foto"
          name="pasFoto"
          onChange={handleInputChange}
          accept=".jpg,.jpeg,.png"
          required
          description="Format: JPG, PNG (Maksimal: 2MB)"
        />
      </div>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
        <h4 className="font-semibold text-blue-800 mb-2">Informasi Penting:</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>• Pastikan semua dokumen dapat dibaca dengan jelas</li>
          <li>• File yang diupload akan diverifikasi oleh tim kami</li>
          <li>• Proses seleksi akan memakan waktu 3-5 hari kerja</li>
          <li>• Anda akan dihubungi melalui email atau telepon</li>
        </ul>
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

function SelectField({ label, name, value, onChange, options, required }) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="select select-bordered w-full focus:ring-2 focus:ring-[#1c2953] focus:border-transparent"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextAreaField({
  label,
  name,
  value,
  onChange,
  rows,
  required,
  ...props
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className="textarea textarea-bordered w-full focus:ring-2 focus:ring-[#1c2953] focus:border-transparent"
        {...props}
      />
    </div>
  );
}

function FileUploadField({
  label,
  name,
  onChange,
  accept,
  required,
  description,
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <input
        type="file"
        name={name}
        onChange={onChange}
        accept={accept}
        required={required}
        className="file-input file-input-bordered w-full focus:ring-2 focus:ring-[#1c2953] focus:border-transparent"
      />
      {description && (
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
}

function NavigationButtons({ currentStep, totalSteps, nextStep, prevStep }) {
  return (
    <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
      <button
        type="button"
        onClick={prevStep}
        disabled={currentStep === 1}
        className="btn btn-outline btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Sebelumnya
      </button>

      {currentStep === totalSteps ? (
        <button type="submit" className="btn btn-primary">
          📤 Kirim Aplikasi
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
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      ) : (
        <button type="button" onClick={nextStep} className="btn btn-primary">
          Selanjutnya
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
      )}
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
          href="mailto:recruitment@sciencesociety.id"
          className="text-[#1c2953] hover:underline"
        >
          recruitment@sciencesociety.id
        </a>
      </p>
    </div>
  );
}
