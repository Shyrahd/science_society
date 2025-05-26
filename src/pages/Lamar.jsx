import React from "react";
import Navbar from "./Navbar";

function Lamar() {
  return (
    <>
      <Navbar />
      <FormLamar/>
    </>
  );
}

export default Lamar;

function FormLamar() {
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)",
          padding: "2rem 0",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
            padding: "0 1rem",
          }}
        >
          {/* Header */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                color: "#111827",
                marginBottom: "0.75rem",
                margin: "0 0 0.75rem 0",
              }}
            >
              Formulir Pendaftaran Guru
            </h1>
            <p
              style={{
                fontSize: "1.125rem",
                color: "#6b7280",
                maxWidth: "32rem",
                margin: "0 auto",
                lineHeight: "1.6",
              }}
            >
              Bergabunglah dengan tim pengajar terbaik di bimbingan belajar kami
              dan wujudkan impian menjadi pendidik profesional
            </p>
          </div>

          <form
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            {/* Data Pribadi */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  👤 Data Pribadi
                </h2>
                <p
                  style={{
                    color: "#bfdbfe",
                    margin: "0",
                    fontSize: "0.875rem",
                  }}
                >
                  Lengkapi informasi pribadi Anda dengan benar dan sesuai
                  identitas
                </p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Nama Lengkap <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Masukkan nama lengkap sesuai KTP"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="contoh@email.com"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Nomor Telepon <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="08xxxxxxxxxx"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tanggal Lahir <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="date"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Domisili (Kota){" "}
                      <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="">Pilih kota domisili</option>

                      <optgroup label="Aceh">
                        <option value="banda-aceh">Banda Aceh</option>
                        <option value="langsa">Langsa</option>
                        <option value="lhokseumawe">Lhokseumawe</option>
                        <option value="sabang">Sabang</option>
                        <option value="subulussalam">Subulussalam</option>
                      </optgroup>

                      <optgroup label="Bali">
                        <option value="denpasar">Denpasar</option>
                      </optgroup>

                      <optgroup label="Banten">
                        <option value="cilegon">Cilegon</option>
                        <option value="serang">Serang</option>
                        <option value="tangerang">Tangerang</option>
                        <option value="tangerang-selatan">
                          Tangerang Selatan
                        </option>
                      </optgroup>

                      <optgroup label="Bengkulu">
                        <option value="bengkulu">Bengkulu</option>
                      </optgroup>

                      <optgroup label="DKI Jakarta">
                        <option value="jakarta-barat">Jakarta Barat</option>
                        <option value="jakarta-pusat">Jakarta Pusat</option>
                        <option value="jakarta-selatan">Jakarta Selatan</option>
                        <option value="jakarta-timur">Jakarta Timur</option>
                        <option value="jakarta-utara">Jakarta Utara</option>
                      </optgroup>

                      <optgroup label="Gorontalo">
                        <option value="gorontalo">Gorontalo</option>
                      </optgroup>

                      <optgroup label="Jambi">
                        <option value="jambi">Jambi</option>
                        <option value="sungai-penuh">Sungai Penuh</option>
                      </optgroup>

                      <optgroup label="Jawa Barat">
                        <option value="bandung">Bandung</option>
                        <option value="banjar">Banjar</option>
                        <option value="bekasi">Bekasi</option>
                        <option value="bogor">Bogor</option>
                        <option value="cimahi">Cimahi</option>
                        <option value="cirebon">Cirebon</option>
                        <option value="depok">Depok</option>
                        <option value="sukabumi">Sukabumi</option>
                        <option value="tasikmalaya">Tasikmalaya</option>
                      </optgroup>

                      <optgroup label="Jawa Tengah">
                        <option value="magelang">Magelang</option>
                        <option value="pekalongan">Pekalongan</option>
                        <option value="salatiga">Salatiga</option>
                        <option value="semarang">Semarang</option>
                        <option value="solo">Solo (Surakarta)</option>
                        <option value="tegal">Tegal</option>
                        <option value="yogyakarta">Yogyakarta</option>
                      </optgroup>

                      <optgroup label="Jawa Timur">
                        <option value="batu">Batu</option>
                        <option value="blitar">Blitar</option>
                        <option value="kediri">Kediri</option>
                        <option value="malang">Malang</option>
                        <option value="madiun">Madiun</option>
                        <option value="mojokerto">Mojokerto</option>
                        <option value="pasuruan">Pasuruan</option>
                        <option value="probolinggo">Probolinggo</option>
                        <option value="surabaya">Surabaya</option>
                      </optgroup>

                      <optgroup label="Kalimantan Barat">
                        <option value="pontianak">Pontianak</option>
                        <option value="singkawang">Singkawang</option>
                      </optgroup>

                      <optgroup label="Kalimantan Selatan">
                        <option value="banjarbaru">Banjarbaru</option>
                        <option value="banjarmasin">Banjarmasin</option>
                      </optgroup>

                      <optgroup label="Kalimantan Tengah">
                        <option value="palangka-raya">Palangka Raya</option>
                      </optgroup>

                      <optgroup label="Kalimantan Timur">
                        <option value="balikpapan">Balikpapan</option>
                        <option value="bontang">Bontang</option>
                        <option value="samarinda">Samarinda</option>
                      </optgroup>

                      <optgroup label="Kalimantan Utara">
                        <option value="tarakan">Tarakan</option>
                      </optgroup>

                      <optgroup label="Kepulauan Riau">
                        <option value="batam">Batam</option>
                        <option value="tanjungpinang">Tanjungpinang</option>
                      </optgroup>

                      <optgroup label="Lampung">
                        <option value="bandar-lampung">Bandar Lampung</option>
                        <option value="metro">Metro</option>
                      </optgroup>

                      <optgroup label="Maluku">
                        <option value="ambon">Ambon</option>
                        <option value="tual">Tual</option>
                      </optgroup>

                      <optgroup label="Maluku Utara">
                        <option value="ternate">Ternate</option>
                        <option value="tidore-kepulauan">
                          Tidore Kepulauan
                        </option>
                      </optgroup>

                      <optgroup label="Nusa Tenggara Barat">
                        <option value="bima">Bima</option>
                        <option value="mataram">Mataram</option>
                      </optgroup>

                      <optgroup label="Nusa Tenggara Timur">
                        <option value="kupang">Kupang</option>
                      </optgroup>

                      <optgroup label="Papua">
                        <option value="jayapura">Jayapura</option>
                      </optgroup>

                      <optgroup label="Papua Barat">
                        <option value="manokwari">Manokwari</option>
                        <option value="sorong">Sorong</option>
                      </optgroup>

                      <optgroup label="Papua Barat Daya">
                        <option value="fakfak">Fakfak</option>
                      </optgroup>

                      <optgroup label="Papua Pegunungan">
                        <option value="jayawijaya">Jayawijaya</option>
                      </optgroup>

                      <optgroup label="Papua Selatan">
                        <option value="merauke">Merauke</option>
                      </optgroup>

                      <optgroup label="Papua Tengah">
                        <option value="nabire">Nabire</option>
                      </optgroup>

                      <optgroup label="Riau">
                        <option value="dumai">Dumai</option>
                        <option value="pekanbaru">Pekanbaru</option>
                      </optgroup>

                      <optgroup label="Sulawesi Barat">
                        <option value="mamuju">Mamuju</option>
                      </optgroup>

                      <optgroup label="Sulawesi Selatan">
                        <option value="makassar">Makassar</option>
                        <option value="palopo">Palopo</option>
                        <option value="pare-pare">Pare-Pare</option>
                      </optgroup>

                      <optgroup label="Sulawesi Tengah">
                        <option value="palu">Palu</option>
                      </optgroup>

                      <optgroup label="Sulawesi Tenggara">
                        <option value="bau-bau">Bau-Bau</option>
                        <option value="kendari">Kendari</option>
                      </optgroup>

                      <optgroup label="Sulawesi Utara">
                        <option value="bitung">Bitung</option>
                        <option value="kotamobagu">Kotamobagu</option>
                        <option value="manado">Manado</option>
                        <option value="tomohon">Tomohon</option>
                      </optgroup>

                      <optgroup label="Sumatera Barat">
                        <option value="bukittinggi">Bukittinggi</option>
                        <option value="padang">Padang</option>
                        <option value="padangpanjang">Padangpanjang</option>
                        <option value="payakumbuh">Payakumbuh</option>
                        <option value="sawahlunto">Sawahlunto</option>
                      </optgroup>

                      <optgroup label="Sumatera Selatan">
                        <option value="lubuklinggau">Lubuklinggau</option>
                        <option value="pagar-alam">Pagar Alam</option>
                        <option value="palembang">Palembang</option>
                        <option value="prabumulih">Prabumulih</option>
                      </optgroup>

                      <optgroup label="Sumatera Utara">
                        <option value="binjai">Binjai</option>
                        <option value="medan">Medan</option>
                        <option value="pematangsiantar">Pematangsiantar</option>
                        <option value="tanjungbalai">Tanjungbalai</option>
                        <option value="tebing-tinggi">Tebing Tinggi</option>
                      </optgroup>
                    </select>
                  </div>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Jenis Kelamin <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div style={{ display: "flex", gap: "1.5rem" }}>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <input type="radio" name="gender" value="laki-laki" />
                      <span style={{ fontSize: "0.875rem" }}>Laki-laki</span>
                    </label>
                    <label
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        cursor: "pointer",
                      }}
                    >
                      <input type="radio" name="gender" value="perempuan" />
                      <span style={{ fontSize: "0.875rem" }}>Perempuan</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Alamat Lengkap <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <textarea
                    placeholder="Masukkan alamat lengkap (Jalan, RT/RW, Kelurahan, Kecamatan, Kota, Provinsi)"
                    rows={3}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      resize: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Pendidikan */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #059669 0%, #047857 100%)",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  🎓 Riwayat Pendidikan
                </h2>
                <p
                  style={{
                    color: "#a7f3d0",
                    margin: "0",
                    fontSize: "0.875rem",
                  }}
                >
                  Informasi pendidikan terakhir dan prestasi akademik Anda
                </p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Pendidikan Terakhir{" "}
                      <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="">Pilih pendidikan terakhir</option>
                      <option value="sma">SMA/SMK</option>
                      <option value="d3">Diploma 3 (D3)</option>
                      <option value="s1">Sarjana (S1)</option>
                      <option value="s2">Magister (S2)</option>
                      <option value="s3">Doktor (S3)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Jurusan/Program Studi{" "}
                      <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Contoh: Pendidikan Matematika"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Nama Institusi <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Nama universitas/sekolah tinggi"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tahun Lulus <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <input
                      type="number"
                      placeholder="2023"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      IPK/Nilai Rata-rata
                    </label>
                    <input
                      type="text"
                      placeholder="3.50 (skala 4.00)"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Pengalaman Mengajar */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #7c3aed 0%, #6d28d9 100%)",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  📚 Pengalaman Mengajar
                </h2>
                <p
                  style={{
                    color: "#c4b5fd",
                    margin: "0",
                    fontSize: "0.875rem",
                  }}
                >
                  Ceritakan pengalaman mengajar Anda (jika ada)
                </p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Lama Pengalaman Mengajar
                    </label>
                    <select
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        backgroundColor: "white",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="">Pilih pengalaman mengajar</option>
                      <option value="fresh-graduate">
                        Fresh Graduate (Belum ada pengalaman)
                      </option>
                      <option value="kurang-1-tahun">
                        Kurang dari 1 tahun
                      </option>
                      <option value="1-2-tahun">1-2 tahun</option>
                      <option value="3-5-tahun">3-5 tahun</option>
                      <option value="lebih-5-tahun">Lebih dari 5 tahun</option>
                    </select>
                  </div>
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Tempat Mengajar Sebelumnya
                    </label>
                    <input
                      type="text"
                      placeholder="Nama sekolah/bimbel/lembaga kursus"
                      style={{
                        width: "100%",
                        height: "2.75rem",
                        padding: "0 0.75rem",
                        border: "1px solid #d1d5db",
                        borderRadius: "0.375rem",
                        fontSize: "0.875rem",
                        boxSizing: "border-box",
                      }}
                    />
                  </div>
                </div>
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Deskripsi Pengalaman Mengajar
                  </label>
                  <textarea
                    placeholder="Ceritakan pengalaman mengajar Anda, metode yang digunakan, prestasi yang dicapai, tantangan yang dihadapi, dll."
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      resize: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mata Pelajaran */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #ea580c 0%, #dc2626 100%)",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  📖 Mata Pelajaran & Keahlian
                </h2>
                <p
                  style={{
                    color: "#fed7aa",
                    margin: "0",
                    fontSize: "0.875rem",
                  }}
                >
                  Pilih mata pelajaran yang dapat Anda ajarkan dengan baik
                </p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "1rem",
                    }}
                  >
                    Mata Pelajaran yang Dikuasai{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {[
                      "Matematika",
                      "Fisika",
                      "Kimia",
                      "Biologi",
                      "Bahasa Indonesia",
                      "Bahasa Inggris",
                      "Sejarah",
                      "Geografi",
                      "Ekonomi",
                      "Sosiologi",
                      "PKN",
                      "Agama",
                    ].map((mapel) => (
                      <label
                        key={mapel}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.5rem",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                        }}
                      >
                        <input type="checkbox" value={mapel} />
                        <span style={{ fontSize: "0.875rem" }}>{mapel}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "1rem",
                    }}
                  >
                    Tingkat Kelas yang Dapat Diajar{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(200px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {[
                      "SD (Kelas 1-6)",
                      "SMP (Kelas 7-9)",
                      "SMA (Kelas 10-12)",
                      "SBMPTN/UTBK",
                    ].map((tingkat) => (
                      <label
                        key={tingkat}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.75rem",
                          border: "1px solid #d1d5db",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                        }}
                      >
                        <input type="checkbox" value={tingkat} />
                        <span style={{ fontSize: "0.875rem" }}>{tingkat}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Ketersediaan */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #0d9488 0%, #0f766e 100%)",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  ⏰ Ketersediaan Waktu
                </h2>
                <p
                  style={{
                    color: "#99f6e4",
                    margin: "0",
                    fontSize: "0.875rem",
                  }}
                >
                  Tentukan jadwal ketersediaan Anda untuk mengajar
                </p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "1rem",
                    }}
                  >
                    Hari yang Tersedia{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(150px, 1fr))",
                      gap: "1rem",
                    }}
                  >
                    {[
                      "Senin",
                      "Selasa",
                      "Rabu",
                      "Kamis",
                      "Jumat",
                      "Sabtu",
                      "Minggu",
                    ].map((hari) => (
                      <label
                        key={hari}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.75rem",
                          padding: "0.75rem",
                          border: "1px solid #d1d5db",
                          borderRadius: "0.5rem",
                          cursor: "pointer",
                          transition: "background-color 0.2s",
                        }}
                      >
                        <input type="checkbox" value={hari} />
                        <span style={{ fontSize: "0.875rem" }}>{hari}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Waktu Tersedia <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <select
                    style={{
                      width: "100%",
                      height: "2.75rem",
                      padding: "0 0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      backgroundColor: "white",
                      boxSizing: "border-box",
                    }}
                  >
                    <option value="">Pilih waktu yang tersedia</option>
                    <option value="pagi">Pagi (08:00 - 12:00)</option>
                    <option value="siang">Siang (12:00 - 16:00)</option>
                    <option value="sore">Sore (16:00 - 20:00)</option>
                    <option value="malam">Malam (20:00 - 22:00)</option>
                    <option value="fleksibel">
                      Fleksibel (Bisa disesuaikan)
                    </option>
                  </select>
                </div>
              </div>
            </div>

            {/* Informasi Tambahan */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #4f46e5 0%, #4338ca 100%)",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  📝 Informasi Tambahan
                </h2>
                <p
                  style={{
                    color: "#c7d2fe",
                    margin: "0",
                    fontSize: "0.875rem",
                  }}
                >
                  Ceritakan lebih lanjut tentang diri Anda sebagai calon
                  pengajar
                </p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Motivasi Menjadi Guru{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <textarea
                    placeholder="Ceritakan motivasi Anda menjadi guru dan alasan ingin bergabung dengan bimbingan belajar kami..."
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      resize: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Kelebihan & Keunikan Anda{" "}
                    <span style={{ color: "#ef4444" }}>*</span>
                  </label>
                  <textarea
                    placeholder="Apa yang membuat Anda berbeda dari guru lain? Metode mengajar khusus, prestasi, sertifikasi, dll..."
                    rows={4}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      resize: "none",
                      boxSizing: "border-box",
                    }}
                  />
                </div>

                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "#374151",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Ekspektasi Gaji (per jam)
                  </label>
                  <input
                    type="text"
                    placeholder="Rp 75.000"
                    style={{
                      width: "100%",
                      height: "2.75rem",
                      padding: "0 0.75rem",
                      border: "1px solid #d1d5db",
                      borderRadius: "0.375rem",
                      fontSize: "0.875rem",
                      boxSizing: "border-box",
                    }}
                  />
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "#6b7280",
                      margin: "0.25rem 0 0 0",
                    }}
                  >
                    Opsional - dapat didiskusikan lebih lanjut
                  </p>
                </div>
              </div>
            </div>

            {/* Upload Dokumen */}
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "0.75rem",
                boxShadow:
                  "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #dc2626 0%, #b91c1c 100%)",
                  color: "white",
                  padding: "1.5rem",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    margin: "0 0 0.5rem 0",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                  }}
                >
                  📎 Upload Dokumen
                </h2>
                <p
                  style={{
                    color: "#fecaca",
                    margin: "0",
                    fontSize: "0.875rem",
                  }}
                >
                  Upload dokumen pendukung aplikasi Anda
                </p>
              </div>
              <div style={{ padding: "1.5rem" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "1.5rem",
                  }}
                >
                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      CV/Resume <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div
                      style={{
                        border: "2px dashed #d1d5db",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        textAlign: "center",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        style={{
                          width: "100%",
                          height: "2.75rem",
                          fontSize: "0.875rem",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        margin: "0.25rem 0 0 0",
                      }}
                    >
                      Format: PDF, DOC, DOCX (Maksimal: 5MB)
                    </p>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Ijazah Terakhir{" "}
                      <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div
                      style={{
                        border: "2px dashed #d1d5db",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        textAlign: "center",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        style={{
                          width: "100%",
                          height: "2.75rem",
                          fontSize: "0.875rem",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        margin: "0.25rem 0 0 0",
                      }}
                    >
                      Format: PDF, JPG, PNG (Maksimal: 5MB)
                    </p>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Sertifikat Pendukung
                    </label>
                    <div
                      style={{
                        border: "2px dashed #d1d5db",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        textAlign: "center",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <input
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        style={{
                          width: "100%",
                          height: "2.75rem",
                          fontSize: "0.875rem",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        margin: "0.25rem 0 0 0",
                      }}
                    >
                      Sertifikat pelatihan, kursus, workshop, dll.
                    </p>
                  </div>

                  <div>
                    <label
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "#374151",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Pas Foto <span style={{ color: "#ef4444" }}>*</span>
                    </label>
                    <div
                      style={{
                        border: "2px dashed #d1d5db",
                        borderRadius: "0.5rem",
                        padding: "1rem",
                        textAlign: "center",
                        transition: "border-color 0.2s",
                      }}
                    >
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        style={{
                          width: "100%",
                          height: "2.75rem",
                          fontSize: "0.875rem",
                        }}
                      />
                    </div>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b7280",
                        margin: "0.25rem 0 0 0",
                      }}
                    >
                      Format: JPG, PNG (Maksimal: 2MB)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "2rem",
                paddingBottom: "1rem",
              }}
            >
              <button
                type="submit"
                style={{
                  width: "100%",
                  maxWidth: "20rem",
                  padding: "1rem 3rem",
                  fontSize: "1.125rem",
                  fontWeight: "600",
                  color: "white",
                  background:
                    "linear-gradient(90deg, #2563eb 0%, #1d4ed8 100%)",
                  border: "none",
                  borderRadius: "0.5rem",
                  cursor: "pointer",
                  boxShadow:
                    "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  transition: "all 0.2s",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.5rem",
                }}
              >
                📤 Kirim Aplikasi
              </button>
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "0.875rem",
                color: "#6b7280",
                paddingBottom: "2rem",
              }}
            >
              <p style={{ margin: "0 0 0.25rem 0" }}>
                Dengan mengirim aplikasi ini, Anda menyetujui syarat dan
                ketentuan yang berlaku.
              </p>
              <p style={{ margin: "0" }}>
                Tim kami akan menghubungi Anda dalam 3-5 hari kerja.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
