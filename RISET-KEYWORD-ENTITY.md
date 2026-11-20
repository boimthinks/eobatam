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
