"use client";
import { Link } from "react-router-dom";
import NewNav from "./NewNav";
import Footerr from "../pages/Footerr";

function LandPage() {
  return (
    <>
      <NewNav />
      <UserHero />
      <MentorBenefits />
      <RequirementsSection />
      <TrainingProgram />
      <MentorSuccess />
      <CompanyValues />
      <ApplicationProcess />
      <CallToAction />
      <Footerr />
    </>
  );
}

export default LandPage;

function UserHero() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/image_1.png)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-4xl">
          <h1 className="mb-5 text-6xl font-bold">
            Bergabunglah dengan Tim Mentor Terbaik
          </h1>
          <h2 className="mb-5 text-2xl font-semibold">
            Science Society - Karir Mengajar yang Bermakna
          </h2>
          <p className="mb-8 text-lg max-w-3xl mx-auto">
            Wujudkan passion mengajar Anda bersama Science Society. Bantu ribuan
            siswa meraih impian masuk PTN favorit sambil mengembangkan karir
            profesional yang gemilang dengan kompensasi yang kompetitif.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/Lamar">
              <button className="btn btn-primary btn-lg">
                Lamar Jadi Mentor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MentorBenefits() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1c2953] mb-4">
            💼 Mengapa Menjadi Mentor di Science Society?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nikmati berbagai keuntungan dan fasilitas eksklusif yang kami
            berikan untuk mentor terbaik
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BenefitCard
            icon="💰"
            title="Gaji Kompetitif"
            description="Rp 5-15 juta/bulan + bonus performa + tunjangan kesehatan dan transportasi"
            highlight="Gaji di atas rata-rata industri"
          />
          <BenefitCard
            icon="📈"
            title="Jenjang Karir Jelas"
            description="Dari Junior Mentor → Senior Mentor → Lead Mentor → Academic Manager"
            highlight="Promosi berdasarkan merit"
          />
          <BenefitCard
            icon="🎓"
            title="Pelatihan Berkelanjutan"
            description="Training rutin, sertifikasi internasional, dan workshop pengembangan diri"
            highlight="Investasi untuk masa depan"
          />
          <BenefitCard
            icon="⏰"
            title="Fleksibilitas Waktu"
            description="Jadwal mengajar yang fleksibel, work-life balance terjaga"
            highlight="Cocok untuk fresh graduate"
          />
          <BenefitCard
            icon="🏢"
            title="Lingkungan Kerja Modern"
            description="Fasilitas lengkap, teknologi terdepan, dan tim yang supportif"
            highlight="Workspace yang inspiring"
          />
          <BenefitCard
            icon="🌟"
            title="Impact yang Bermakna"
            description="Bantu ribuan siswa meraih impian masuk universitas favorit"
            highlight="Karir yang meaningful"
          />
        </div>
      </div>
    </section>
  );
}

function RequirementsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1c2953] mb-4">
            📋 Kualifikasi & Persyaratan
          </h2>
          <p className="text-xl text-gray-600">
            Apakah Anda memenuhi kriteria mentor Science Society?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
              ✅ Persyaratan Wajib
            </h3>
            <div className="space-y-4">
              <RequirementItem
                icon="🎓"
                title="Pendidikan Minimal S1"
                description="Lulusan universitas terkemuka dengan IPK minimal 3.50"
                status="required"
              />
              <RequirementItem
                icon="📚"
                title="Menguasai Materi UTBK/Kedinasan"
                description="Expertise di bidang Saintek, Soshum, atau TIU/TKP"
                status="required"
              />
              <RequirementItem
                icon="💬"
                title="Kemampuan Komunikasi Baik"
                description="Mampu menjelaskan konsep dengan jelas dan sabar"
                status="required"
              />
              <RequirementItem
                icon="💻"
                title="Melek Teknologi"
                description="Familiar dengan platform digital dan tools pembelajaran online"
                status="required"
              />
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-[#1c2953] mb-6">
              ⭐ Nilai Plus
            </h3>
            <div className="space-y-4">
              <RequirementItem
                icon="👨‍🏫"
                title="Pengalaman Mengajar"
                description="Pernah mengajar di bimbel, sekolah, atau les privat"
                status="plus"
              />
              <RequirementItem
                icon="🏆"
                title="Prestasi Akademik"
                description="Juara olimpiade, beasiswa, atau pencapaian akademik lainnya"
                status="plus"
              />
              <RequirementItem
                icon="📜"
                title="Sertifikasi Relevan"
                description="Sertifikat mengajar, TOEFL/IELTS, atau sertifikasi profesi"
                status="plus"
              />
              <RequirementItem
                icon="🎯"
                title="Passion Mengajar"
                description="Antusiasme tinggi dalam berbagi ilmu dan membantu siswa"
                status="plus"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrainingProgram() {
  return (
    <section className="py-16 bg-[#1c2953] text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            🎯 Program Pelatihan Mentor
          </h2>
          <p className="text-xl opacity-90">
            Kami investasikan waktu dan biaya untuk mengembangkan kemampuan Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TrainingPhase
            phase="Fase 1"
            title="Onboarding & Orientasi"
            duration="2 Minggu"
            content={[
              "Pengenalan budaya perusahaan",
              "Sistem dan metodologi Science Society",
              "Platform teknologi pembelajaran",
              "Standar kualitas mengajar",
            ]}
          />
          <TrainingPhase
            phase="Fase 2"
            title="Pelatihan Intensif"
            duration="6 Minggu"
            content={[
              "Teknik mengajar yang efektif",
              "Manajemen kelas dan siswa",
              "Analisis soal dan pembahasan",
              "Simulasi mengajar dengan feedback",
            ]}
          />
          <TrainingPhase
            phase="Fase 3"
            title="Sertifikasi & Deployment"
            duration="4 Minggu"
            content={[
              "Ujian sertifikasi internal",
              "Praktik mengajar terbimbing",
              "Evaluasi dan improvement",
              "Penempatan di kelas reguler",
            ]}
          />
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">💡 Continuous Learning</h3>
            <p className="text-lg mb-6">
              Setelah menjadi mentor tetap, Anda akan mendapat pelatihan
              lanjutan setiap bulan, workshop khusus, dan kesempatan mengikuti
              seminar nasional/internasional.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold">Monthly Workshop</div>
                <div className="text-sm opacity-75">
                  Update metode & materi terbaru
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">🎓</div>
                <div className="font-semibold">Certification Program</div>
                <div className="text-sm opacity-75">
                  Sertifikasi nasional & internasional
                </div>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <div className="text-2xl mb-2">🚀</div>
                <div className="font-semibold">Leadership Training</div>
                <div className="text-sm opacity-75">
                  Persiapan jenjang karir selanjutnya
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MentorSuccess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1c2953] mb-4">
            🌟 Kisah Sukses Mentor Kami
          </h2>
          <p className="text-xl text-gray-600">
            Dengar langsung dari mentor yang telah berkembang bersama kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MentorTestimonial
            name="Dr. Budi Santoso"
            position="Senior Mentor Matematika"
            experience="3 Tahun di Science Society"
            photo="👨‍🏫"
            testimonial="Dari fresh graduate hingga sekarang jadi Lead Mentor. Science Society memberikan kesempatan karir yang luar biasa dengan lingkungan kerja yang supportif."
            achievement="Promoted 2x dalam 3 tahun"
          />
          <MentorTestimonial
            name="Sarah Wijaya, M.Pd"
            position="Academic Manager"
            experience="4 Tahun di Science Society"
            photo="👩‍🏫"
            testimonial="Tidak hanya mengajar, di sini saya bisa mengembangkan kurikulum dan memimpin tim. Work-life balance juga sangat terjaga."
            achievement="Mengelola 50+ mentor"
          />
          <MentorTestimonial
            name="Ahmad Rizki, S.Si"
            position="Senior Mentor Fisika"
            experience="2 Tahun di Science Society"
            photo="👨‍🔬"
            testimonial="Gaji yang kompetitif, fasilitas lengkap, dan yang terpenting adalah kepuasan melihat siswa berhasil masuk PTN impian mereka."
            achievement="95% siswa lolos UTBK"
          />
        </div>
      </div>
    </section>
  );
}

function CompanyValues() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1c2953] mb-4">
            🏢 Budaya Kerja Science Society
          </h2>
          <p className="text-xl text-gray-600">
            Nilai-nilai yang kami junjung tinggi dalam bekerja
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ValueCard
            icon="🤝"
            title="Kolaborasi"
            description="Kami percaya kekuatan tim dan saling mendukung untuk mencapai tujuan bersama"
          />
          <ValueCard
            icon="🎯"
            title="Excellence"
            description="Selalu memberikan yang terbaik dalam setiap aspek pembelajaran dan pengajaran"
          />
          <ValueCard
            icon="💡"
            title="Inovasi"
            description="Terus berinovasi dalam metode mengajar dan teknologi pembelajaran"
          />
          <ValueCard
            icon="❤️"
            title="Empati"
            description="Memahami kebutuhan siswa dan memberikan dukungan yang personal"
          />
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-[#1c2953] mb-6 text-center">
            📈 Pertumbuhan Perusahaan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-[#1c2953] mb-2">150+</div>
              <div className="text-gray-600">Mentor Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1c2953] mb-2">
                5,000+
              </div>
              <div className="text-gray-600">Siswa Aktif</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1c2953] mb-2">85%</div>
              <div className="text-gray-600">Tingkat Kelulusan</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-[#1c2953] mb-2">135</div>
              <div className="text-gray-600">Cabang di Indonesia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApplicationProcess() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#1c2953] mb-4">
            📝 Proses Rekrutmen
          </h2>
          <p className="text-xl text-gray-600">
            Langkah mudah untuk bergabung dengan tim kami
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="Aplikasi Online"
              description="Isi formulir pendaftaran dan upload dokumen yang diperlukan"
              duration="5 menit"
            />
            <ProcessStep
              step="2"
              title="Tes Tertulis"
              description="Tes kemampuan akademik dan pengetahuan materi UTBK/Kedinasan"
              duration="2 jam"
            />
            <ProcessStep
              step="3"
              title="Interview & Demo"
              description="Wawancara dan simulasi mengajar di hadapan panel"
              duration="1 jam"
            />
            <ProcessStep
              step="4"
              title="Onboarding"
              description="Orientasi dan pelatihan intensif sebelum mulai mengajar"
              duration="3 bulan"
            />
          </div>

          <div className="mt-12 bg-gradient-to-r from-[#1c2953] to-[#2d3a6b] text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">⏰ Timeline Rekrutmen</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-lg font-semibold mb-2">Batch 1 - 2025</div>
                <div className="text-sm opacity-90">
                  Pendaftaran: 1-31 Januari
                </div>
                <div className="text-sm opacity-90">Mulai Kerja: 1 April</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Batch 2 - 2025</div>
                <div className="text-sm opacity-90">
                  Pendaftaran: 1-31 Maret
                </div>
                <div className="text-sm opacity-90">Mulai Kerja: 1 Juni</div>
              </div>
              <div>
                <div className="text-lg font-semibold mb-2">Batch 3 - 2025</div>
                <div className="text-sm opacity-90">Pendaftaran: 1-30 Juni</div>
                <div className="text-sm opacity-90">
                  Mulai Kerja: 1 September
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  return (
    <section className="py-16 bg-gradient-to-r from-[#1c2953] to-[#2d3a6b] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">
          🚀 Siap Memulai Karir Mengajar Impian Anda?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Bergabunglah dengan Science Society dan wujudkan passion mengajar Anda
          sambil mengembangkan karir yang gemilang. Ribuan siswa menunggu
          bimbingan terbaik dari Anda!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Link to="/Lamar">
            <button className="btn btn-white btn-lg">Lamar Sekarang</button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-sm">
          <div>📞 Hotline Rekrutmen: 0812-3456-7890</div>
          <div>📧 careers@sciencesociety.id</div>
          <div>💬 WhatsApp: 0812-3456-7891</div>
        </div>
      </div>
    </section>
  );
}

// Helper Components
function BenefitCard({ icon, title, description, highlight }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border-l-4 border-[#1c2953]">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-[#1c2953] mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <span className="inline-block bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-semibold">
        {highlight}
      </span>
    </div>
  );
}

function RequirementItem({ icon, title, description, status }) {
  return (
    <div className="flex items-start space-x-4">
      <div className="text-2xl">{icon}</div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="font-semibold text-gray-800">{title}</h4>
          <span
            className={`badge badge-sm ${
              status === "required" ? "badge-error" : "badge-success"
            }`}
          >
            {status === "required" ? "Wajib" : "Plus"}
          </span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function TrainingPhase({ phase, title, duration, content }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
      <div className="text-center mb-4">
        <div className="bg-white text-[#1c2953] rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-2">
          {phase.slice(-1)}
        </div>
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <span className="text-sm opacity-75">{duration}</span>
      </div>
      <ul className="space-y-2">
        {content.map((item, index) => (
          <li key={index} className="text-sm flex items-start">
            <span className="text-green-400 mr-2 mt-1">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

function MentorTestimonial({
  name,
  position,
  experience,
  photo,
  testimonial,
  achievement,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
      <div className="text-center mb-4">
        <div className="text-6xl mb-2">{photo}</div>
        <h3 className="font-bold text-lg text-[#1c2953]">{name}</h3>
        <p className="text-blue-600 font-semibold text-sm">{position}</p>
        <p className="text-gray-500 text-xs">{experience}</p>
      </div>
      <p className="text-gray-600 text-sm italic mb-4">"{testimonial}"</p>
      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
        <div className="text-xs text-green-700 font-semibold">Achievement:</div>
        <div className="text-sm text-green-800">{achievement}</div>
      </div>
    </div>
  );
}

function ValueCard({ icon, title, description }) {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="font-bold text-lg text-[#1c2953] mb-3">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}

function ProcessStep({ step, title, description, duration }) {
  return (
    <div className="text-center">
      <div className="bg-[#1c2953] text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg mx-auto mb-4">
        {step}
      </div>
      <h3 className="font-bold text-lg text-[#1c2953] mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-500">
        {duration}
      </span>
    </div>
  );
}
