# Riset Keyword Semantik & Pemetaan Entitas SEO (eobatam.web.id)

Dokumen ini adalah cetak biru (blueprint) arsitektur konten, pemetaan semantik, dan strategi kata kunci untuk pembangunan website **eobatam.web.id**. Dokumen ini dirancang agar setiap halaman pilar, halaman layanan, dan artikel pendukung dapat memenangkan persaingan halaman pertama Google dan kutipan Google AI Overviews (GEO 2026).

---

## 1. Profil Proyek & Target Search
- **Target Domain:** `eobatam.web.id`
- **Niche/Industri:** Event Organizer (EO), MICE (Meeting, Incentive, Convention, Exhibition), Corporate Gathering & Vendor Produksi Event.
- **Target Geografis:** Kota Batam, Kepulauan Riau (termasuk korporasi Jakarta, Singapura, dan Malaysia yang mengadakan event di Batam).
- **Core Search Intent:** Transaksional dan Komersial (B2B, Corporate HR/GA, Agency, Instansi Pemerintah).

---

## 2. Pengelompokan Kata Kunci (Keyword Matrix)

### A. Primary Keywords (Volume Tinggi, High Intent)
Digunakan sebagai target utama Homepage dan Halaman Pilar Layanan:
1. `eo batam`
2. `event organizer batam`
3. `jasa event organizer batam`
4. `vendor eo batam`

### B. Secondary Keywords (Spesifikasi Layanan & Format Event)
Digunakan untuk Halaman Layanan Spesifik (Service Sub-pages):
1. `eo gathering kantor batam`
2. `paket outbound batam`
3. `vendor mice batam`
4. `eo gala dinner batam`
5. `jasa team building batam`
6. `vendor sound system rigging batam`
7. `kontraktor booth pameran batam`
8. `jasa dekorasi panggung batam`
9. `event management company batam`

### C. Long-Tail Keywords (High Conversion, Problem Solving, Local Specific)
Target untuk artikel blog edukasi, studi kasus, dan panduan biaya:
1. `jasa eo corporate gathering di resort nongsa batam`
2. `estimasi biaya paket family gathering batam per orang`
3. `rekomendasi event organizer untuk konferensi internasional batam`
4. `vendor sewa panggung led videotron dan sound system batam center`
5. `paket outbound dan team building pantai di barelang batam`
6. `prosedur izin keramaian event kepolisian polresta barelang`
7. `tata cara perhitungan pajak pbjt kesenian dan hiburan bprd batam`
8. `rekomendasi resort terbaik di batam untuk company gathering kapasitas 200 orang`

### D. Entity Keywords (Topical Authority Grounding)
Entitas nyata yang wajib terdistribusi secara semantik di seluruh konten:
- **Format & Layanan:** MICE, Corporate Gathering, Awarding Night, Product Launching, Exhibition/Pameran, Groundbreaking, Fun Games Outbound.
- **Komponen Teknis & Hardware:** Rigging truss aluminium F34, LED screen videotron indoor P2.6 / outdoor P3.9, line array active/passive sound system, wireless mic UHF, digital mixer, moving beam 380W, par LED RGBW, genset silent 50-100 kVA.
- **Toponimi / Lokasi Riil Batam:** Nongsa (Turi Beach Resort, Batam View, Montigo Resorts), Batam Center (Radisson Golf & Convention Center, Harris Hotel Batam Center, Swiss-Belhotel Harbour Bay), Kawasan Barelang.
- **Regulasi & Otoritas:** BP Batam (Badan Pengusahaan Batam), Polresta Barelang (Satintelkam - Izin Keramaian), BPRD Kota Batam (Pajak Barang dan Jasa Tertentu / PBJT Kesenian dan Hiburan), Kawasan Perdagangan Bebas dan Pelabuhan Bebas (KPBPB/FTZ Batam - Form PPFTZ/BC 01 untuk logistik pameran lintas pulau).

---

## 3. Pemetaan Entitas Berbasis Schema.org

### A. Primary Entity
- `LocalBusiness` / `ProfessionalService`: Badan usaha penyedia jasa event organizer di Batam.
- `Service`: Jasa perencanaan, pengorganisasian, dan produksi event.

### B. Secondary Entity
- `Service` (Cabang Layanan):
  - Corporate Gathering & Company Outing
  - MICE & Conference Organizer
  - Outbound & Team Building Training
  - Exhibition Stand Contractor & Production
  - Audio Visual, Stage Rigging & Lighting Rental
- `Product` (Paket Komersial Terdefinisi):
  - Paket All-In Gathering Batam 2D1N
  - Paket Half-Day Team Building Pantai Nongsa
  - Paket Rental LED Screen Videotron P3.9 Outdoor
  - Paket Sound System Rigging Konser / Gathering

### C. Supporting Entity
- `Thing`: Technical Rider, Run Down Acara, Floor Plan / Layout 3D, Safety Loading Plan, Risk Assessment & Contingency Plan (mitigasi hujan tropis & angin laut Batam).
- `QuantitativeValue`: Kapasitas daya genset (kVA), kerapatan pixel pitch (mm), total acoustic output RMS (Watt), rasio fasilitator outbound per peserta (1:15).
- `HowTo`: SOP mitigasi panggung outdoor di area pesisir Batam, alur legalitas izin keramaian Polresta Barelang.

### D. Related Entity
- `AdministrativeArea`: Kota Batam, Provinsi Kepulauan Riau.
- `Place`: Klaster Nongsa Coastal, Batam Center Business District, Harbour Bay Waterfront, Barelang Island Corridor.
- `GovernmentOrganization`: BP Batam, Polresta Barelang, Badan Pendapatan Daerah (BPRD) Kota Batam.
- `Legislation`: Perda PBJT Jasa Kesenian dan Hiburan Kota Batam, Ketentuan Pabean FTZ Batam.

---

## 4. Knowledge Graph Relationship Table

| Subject (Entitas Awal) | Predicate (Relasi Schema.org) | Object (Entitas Terhubung) | Konteks Penerapan di Web |
| :--- | :--- | :--- | :--- |
| `LocalBusiness: Event Organizer Batam` | `providerOf` | `Service: Corporate Gathering` | JSON-LD Organization di Homepage |
| `LocalBusiness: Event Organizer Batam` | `providerOf` | `Service: MICE Services` | JSON-LD Organization & Service |
| `LocalBusiness: Event Organizer Batam` | `areaServed` | `AdministrativeArea: Kota Batam` | Batasan jangkauan layanan lokal |
| `Service: Corporate Gathering` | `hasPart` | `Service: Outbound & Team Building` | Halaman sub-layanan gathering |
| `Service: Corporate Gathering` | `hasPart` | `Service: Gala Dinner Production` | Struktur paket all-in |
| `Service: Gala Dinner Production` | `requires` | `Product: Stage Rigging Aluminium` | Bukti kepemilikan alat / vendor mandiri |
| `Service: Gala Dinner Production` | `requires` | `Product: LED Screen Videotron P3.9` | Spesifikasi teknis visual panggung |
| `Service: Gala Dinner Production` | `requires` | `Product: Line Array Sound System` | Spesifikasi audio panggung |
| `Service: MICE Services` | `locationCreated` | `Place: Batam Center Business District` | Target venue MICE hotel berbintang |
| `Service: Outbound & Team Building` | `locationCreated` | `Place: Nongsa Coastal Area` | Target venue outdoor resort pantai |
| `LocalBusiness: Event Organizer Batam` | `conformsTo` | `GovernmentOrganization: Polresta Barelang` | Kepatuhan hukum izin keramaian event |
| `LocalBusiness: Event Organizer Batam` | `conformsTo` | `GovernmentOrganization: BPRD Kota Batam` | Kepatuhan pajak daerah resmi |
| `Product: LED Screen Videotron` | `material` | `Thing: Die-Cast Aluminium Cabinet` | Rincian spesifikasi teknis hardware |
| `Service: Event Management` | `produces` | `Thing: Technical Rider & Run Down` | Deliverables profesional untuk klien |

---

## 5. Rencana Arsitektur Informasi & Pemetaan Halaman (Silo Structure)

Untuk menguasai halaman pertama Google, struktur web `eobatam.web.id` disusun dengan model Topikal Silo (Topic Clusters):

### Tingkat 1: Halaman Pilar Utama (Homepage)
- **URL:** `/`
- **Target Keyword:** `eo batam`, `event organizer batam`, `jasa event organizer batam`
- **Fokus Konten:** Positioning sebagai one-stop event partner di Batam, ringkasan armada/alat sendiri, sertifikasi legalitas, portfolio perusahaan nasional/multinasional, daftar venue rekanan.

### Tingkat 2: Halaman Layanan Inti (Core Service Silos)
1. **Layanan Corporate Gathering & Outing**
   - **URL:** `/layanan/corporate-gathering-batam/`
   - **Target Keyword:** `eo gathering kantor batam`, `jasa company gathering batam`
2. **Layanan MICE & Konferensi Bisnis**
   - **URL:** `/layanan/mice-event-organizer-batam/`
   - **Target Keyword:** `vendor mice batam`, `eo seminar konferensi batam`
3. **Layanan Outbound & Team Building**
   - **URL:** `/layanan/outbound-team-building-batam/`
   - **Target Keyword:** `paket outbound batam`, `jasa team building batam`
4. **Layanan Gala Dinner & Awarding Night**
   - **URL:** `/layanan/gala-dinner-awarding-batam/`
   - **Target Keyword:** `eo gala dinner batam`, `event malam keakraban batam`
5. **Layanan Vendor Produksi & Rental Alat (AV/Stage/Lighting)**
   - **URL:** `/layanan/sewa-sound-system-lighting-led-batam/`
   - **Target Keyword:** `vendor sound system rigging batam`, `sewa videotron batam`

### Tingkat 3: Halaman Hub Venue Batam (Geo-Targeting Silo)
1. **Panduan Event di Nongsa:** `/venue/resort-nongsa-batam/` (Turi Beach, Batam View, Montigo)
2. **Panduan Event di Batam Center:** `/venue/hotel-batam-center/` (Radisson, Harris, dll.)
3. **Panduan Event di Harbour Bay & Barelang:** `/venue/harbour-bay-barelang/`

### Tingkat 4: Artikel Edukasi Pendukung (Supporting Spoke Articles / GEO Magnet)
Setiap artikel menautkan kembali (internal link) ke Halaman Layanan terkait:
1. *Berapa Estimasi Biaya Family Gathering Per Orang di Batam 2026? (Simulasi RAB Transparan)* -> Link ke `/layanan/corporate-gathering-batam/`
2. *Prosedur Lengkap Pengurusan Izin Keramaian Event Polresta Barelang & Pajak Hiburan BPRD* -> Link ke `/layanan/mice-event-organizer-batam/`
3. *Mitigasi Cuaca Pesisir Batam: Checklist Safety Loading Rigging Panggung & Genset di Tepi Pantai* -> Link ke `/layanan/sewa-sound-system-lighting-led-batam/`
4. *Perbedaan Paket Outbound Rekreasi vs Experiential Learning untuk Peningkatan Produktivitas Karyawan* -> Link ke `/layanan/outbound-team-building-batam/`
5. *Panduan Membawa Alat Pameran dari Luar Negeri/Jakarta Masuk ke Batam (Regulasi Fasilitas Pabean FTZ)* -> Link ke `/layanan/mice-event-organizer-batam/`

---

## 6. Standar E-E-A-T & Optimalisasi Mesin Pencari / AI (GEO 2026)

1. **Anti Konten Komoditas:** Tidak menggunakan artikel generik tanpa konteks lokal. Selalu sertakan nama venue nyata, tantangan angin laut pesisir Barelang/Nongsa, serta regulasi lokal Batam.
2. **Data Grounding & RAB Realistis:** Selalu sertakan simulasi spesifikasi perangkat riil (misal: "LED P3.9 refresh rate 3840Hz", "line array 10.000 Watt RMS") dan breakdown biaya yang masuk akal.
3. **Structured Data JSON-LD:**
   - Gunakan Schema `LocalBusiness` terintegrasi dengan `Service`, `Product`, dan `Review`.
   - Hindari Schema `FAQPage` untuk target rich snippet (karena sudah didepresiasi Google), namun sediakan segmen tanya jawab berbasis people-first agar mudah dikutip oleh Google AI Overviews.
4. **Internal Linking Strict Hierarchy:**
   - Spoke Article -> Service Page (dengan exact anchor atau partial match anchor semantik).
   - Service Page -> Homepage.
   - Breadcrumb schema di semua halaman.

---

## 7. Riset Entity Gelombang Kedua (Hari 31 sampai 37)

Riset ini disiapkan sebelum penulisan agar penulis tinggal mengeksekusi. Setiap
topik punya keyword, entitas, dan sudut pembeda terhadap artikel terbit.

### 7.1 Hari 31: Sewa Alat Terpisah vs Paket All-in-One

- **Primary Keywords:** `sewa alat event batam`, `paket event all in one batam`,
  `vendor alat panggung batam`.
- **Long-Tail Keywords:** `kenapa eo batam tidak melayani sewa alat lepas`,
  `risiko sewa sound system terpisah untuk gathering kantor`,
  `perbandingan biaya sewa alat vs paket event batam`.
- **Entity Keywords:** `standalone hardware rental`, `technical rider`,
  `single point of responsibility`, `line array`, `genset silent`,
  `rigging truss F34`.
- **Sudut pembeda:** Artikel ini bukan katalog harga, melainkan penjelasan
  risiko operasional ketika klien memecah alat dan panitia. Wajib menyebut
  kebijakan bisnis bahwa alat tidak disewakan eceran, dengan nada edukatif.

### 7.2 Hari 32: Titik Rigging dan Beban Panggung Indoor

- **Primary Keywords:** `rigging panggung ballroom batam`, `titik rigging hotel`,
  `beban panggung event indoor`.
- **Long-Tail Keywords:** `berapa beban titik gantungan ballroom hotel batam`,
  `aturan rigging di ballroom hotel tanpa merusak plafon`,
  `rigging truss F34 untuk event indoor batam`.
- **Entity Keywords:** `rigging point`, `working load limit`, `truss F34`,
  `ballast`, `load in load out schedule`, `plafon ballroom`,
  `building management approval`.
- **Sudut pembeda:** Artikel rigging yang sudah terbit membahas panggung pantai
  dan angin laut. Artikel ini khusus indoor: batas beban plafon hotel,
  izin engineering building, dan jam load in.

### 7.3 Hari 33: Rundown Peresmian Kantor dan Product Launching

- **Primary Keywords:** `peresmian kantor cabang batam`, `product launching batam`,
  `rundown acara peresmian`.
- **Long-Tail Keywords:** `susunan acara peresmian kantor cabang perusahaan`,
  `checklist product launching perusahaan di hotel batam`,
  `protokol gunting pita dan penandatanganan prasasti`.
- **Entity Keywords:** `groundbreaking`, `ribbon cutting`, `prasasti`,
  `unveiling`, `media invitation`, `press kit`, `photo opportunity`,
  `master of ceremony bilingual`.
- **Sudut pembeda:** Melengkapi artikel groundbreaking yang berfokus pabrik.
  Di sini objeknya kantor cabang dan peluncuran produk di ballroom, termasuk
  undangan media dan sesi foto.

### 7.4 Hari 34: Distribusi Daya Genset Panggung Resort Nongsa

- **Primary Keywords:** `genset panggung batam`, `distribusi daya listrik event`,
  `kelistrikan panggung resort nongsa`.
- **Long-Tail Keywords:** `berapa kva genset untuk panggung hiburan resort`,
  `pembagian panel daya sound dan lighting panggung`,
  `syarat genset silent di resort nongsa batam`.
- **Entity Keywords:** `kVA`, `panel distribusi`, `MCB`, `kabel power`,
  `grounding`, `noise level dB`, `genset silent`, `daya tersedia venue`.
- **Sudut pembeda:** Artikel hari 15 dijadwalkan membahas perhitungan daya
  genset panggung outdoor secara umum. Artikel ini spesifik pada satu venue
  resort tepi laut, pembagian panel, dan batas kebisingan. Bila artikel hari 15
  belum ditulis, simpan artikel ini untuk terbit setelahnya agar tidak
  kanibalisasi.

### 7.5 Hari 35: Sertifikasi dan Akreditasi Peserta Seminar

- **Primary Keywords:** `sertifikat peserta seminar batam`,
  `akreditasi seminar batam`, `manajemen peserta seminar`.
- **Long-Tail Keywords:** `cara menghitung jumlah sertifikat seminar peserta`,
  `sertifikat SKP seminar profesi batam`,
  `alur registrasi peserta konferensi batam`.
- **Entity Keywords:** `registrasi digital`, `QR check in`, `sertifikat elektronik`,
  `SKP`, `kartu peserta`, `seat map`, `daftar hadir`.
- **Sudut pembeda:** Artikel konferensi yang terbit membahas checklist acara.
  Artikel ini fokus administrasi peserta: kuota, akreditasi, dan rekapitulasi
  kehadiran, termasuk kebutuhan instansi yang meminta laporan.

### 7.6 Hari 36: Transportasi Tamu VIP dan Parkir Rombongan

- **Primary Keywords:** `transportasi tamu vip batam`, `parkir rombongan event batam`,
  `shuttle peserta seminar batam`.
- **Long-Tail Keywords:** `pengaturan parkir bus rombongan di hotel batam center`,
  `shuttle tamu vip dari bandara hang nadim ke venue event`,
  `koordinasi satpam dan petugas parkir event`.
- **Entity Keywords:** `shuttle bus`, `drop off area`, `valet`,
  `Bandara Hang Nadim`, `batam center traffic`, `petugas parkir`,
  `rundown kedatangan tamu`.
- **Sudut pembeda:** Melengkapi artikel transportasi bus gathering hari 28.
  Fokus di sini pada penjemputan VIP, slot parkir, dan lalu lintas Batam Center
  saat jam sibuk.

### 7.7 Hari 37: Hotel Transit dan Penginapan Vendor

- **Primary Keywords:** `hotel transit batam`, `penginapan kru event batam`,
  `akomodasi vendor event batam`.
- **Long-Tail Keywords:** `tempat menginap kru panggung saat event batam`,
  `hotel murah dekat venue event batam center`,
  `pengaturan kamar crew dan talent event luar kota`.
- **Entity Keywords:** `crew bunk`, `talent room`, `check in massal`,
  `room list`, `early check in`, `late check out`, `hotel transit`,
  `Bandara Hang Nadim`.
- **Sudut pembeda:** Dua artikel venue yang terbit membahas resort dan ballroom
  untuk peserta. Artikel ini mengurus kebutuhan internal produksi: kru, talent,
  dan vendor luar pulau, termasuk opsi hotel transit dekat bandara.

### 7.8 Catatan Riset Lintas Topik

- **Anti kanibalisasi:** topik hari 32 dan 34 wajib tidak mengulang SOP angin
  laut pada artikel `mitigasi-cuaca-panggung-rigging-pantai-batam`, dan topik
  hari 34 wajib menaut ke artikel hari 15 bila sudah terbit, bukan mengulang
  hitungan dayanya.
- **Internal link wajib per artikel:** satu tautan ke beranda dengan anchor
  `eo batam` atau `event organizer batam`, satu tautan ke halaman layanan silo
  terkait, dan minimal satu tautan ke artikel blog yang sudah terbit.
- **Gambar:** rasio 4:3, nama berkas sama dengan slug, disimpan di
  `public/images/blog/<slug>.webp`.
- **Kategori frontmatter:** hanya boleh salah satu dari Gathering, Outbound,
  MICE, Gala Dinner, Tips Event, ditambah Venue untuk artikel hari 37.
