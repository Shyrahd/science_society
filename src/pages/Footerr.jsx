import React from "react";

function Footerr() {
  return (
    <>
      <footer className="bg-[#1c2953] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Science Society</h3>
              <p className="text-sm opacity-75">
                Bergabunglah dengan tim mentor terbaik dan wujudkan karir
                mengajar impian Anda bersama kami.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Karir</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Lowongan Mentor</li>
                <li>Program Magang</li>
                <li>Benefit & Fasilitas</li>
                <li>Jenjang Karir</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Tentang Kami</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>Profil Perusahaan</li>
                <li>Visi & Misi</li>
                <li>Tim Leadership</li>
                <li>Budaya Kerja</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm opacity-75">
                <li>📧 careers@sciencesociety.id</li>
                <li>📞 0812-3456-7890</li>
                <li>📍 Palembang, Indonesia</li>
                <li>🌐 www.sciencesociety.id</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-75">
            <p>
              &copy; 2025 Science Society. Semua hak dilindungi. | Karir
              Mengajar Terbaik Dimulai dari Sini
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footerr;
