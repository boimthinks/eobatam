# Konvensi Project & Panduan Agent (eobatam.web.id)

Dokumen ini adalah instruksi operasional untuk AI Agent yang bekerja di repositori website **eobatam.web.id**.

---

## 1. Komunikasi & Bahasa

- Seluruh interaksi, penjelasan, dan komunikasi dengan pengguna **wajib menggunakan Bahasa Indonesia** yang ringkas, lugas, dan profesional.
- Penamaan teknis kode, variabel, atau dependensi tetap menggunakan bahasa Inggris yang lazim.
- **Larangan Emoticon:** Dilarang keras menggunakan emoticon/emoji atau glyph dekoratif, baik dalam kode komponen UI maupun respons chat. Selalu gunakan SVG icon (seperti Google Material Icons / Heroicons) untuk kebutuhan visual UI.

---

## 2. Sumber Pengetahuan Tunggal (Single Source of Truth)

- **Rujukan Utama:** Seluruh informasi mengenai identitas brand, alamat, kontak WhatsApp, paket layanan, kebijakan harga, dan aturan penulisan tersimpan di **`SUMBER-PENGETAHUAN.md`** di root folder.
- **Riset Keyword & Entity:** Rujukan peta semantik, keyword, dan arsitektur silo tersimpan di **`RISET-KEYWORD-ENTITY.md`**.
- **Larangan Halusinasi:** Dilarang mengarang alamat, nomor telepon, atau paket harga baru di luar yang telah dicatat pada `SUMBER-PENGETAHUAN.md`.

---

## 3. Standar Penulisan Artikel Blog & Orchestrator

- **Orchestrator Otomatis:** Gunakan skill `astro-autopilot` untuk menjalankan alur otomatis harian (`/daily`) atau inisialisasi (`/init`).
- **Tahap Riset Entity & Keyword:** Sebelum menulis draf, jalankan riset semantik menggunakan skill `pakar-entity-seo`.
- **Tahap Eksekusi Penulisan:** Setiap penulisan, perbaikan, atau pembuatan draf artikel blog **wajib menggunakan skill `penulis-ahli`**.
- Skill ini memastikan artikel bebas dari pola klise buatan AI (humanizer), dioptimalkan untuk SEO & Google AI Overviews 2026 (GEO), dan kaya konteks lokal non-komoditas (E-E-A-T Batam).
- **Rencana Konten 30 Hari:** Jadwal antrean produksi artikel terdata di **`RENCANA-KONTEN-AI-30-HARI.md`**.
- **Pemicu Rutin Harian:** Setiap instruksi pengguna bernada "buat artikel apa hari ini", "artikel hari ini", atau sejenisnya **wajib** dimulai dengan membaca `RENCANA-KONTEN-AI-30-HARI.md`, memilih nomor antrean pertama yang statusnya belum **TERBIT**, lalu mengeksekusi alur `/daily` penuh tanpa perlu bertanya topik lagi.
- **Registri Internal Linking:** Gunakan pemetaan di `src/utils/internalLinks.ts` untuk menghubungkan spoke article ke service silos dan beranda.

### Standar Produksi Gambar Artikel (Visual Assets)

- **Prioritas Utama:** Setiap artikel atau halaman baru **wajib** dibuatkan foto via skill `9router-image` (model `ag/gemini-3.1-flash-image`), dengan ketentuan:
  - Rasio `4:3` (800 x 597 px) untuk featured image blog dan kartu artikel.
  - Rasio `16:9` (800 x 447 px) untuk hero banner dan cover.
  - Prompt selalu berbahasa Inggris, deskriptif (subjek, aksi, pencahayaan alami, sudut kamera), dengan gaya *candid/realistic photography*.
  - Simpan langsung ke `public/images/blog/` atau `public/images/pages/` dengan nama file sesuai slug artikel.
- **Fallback Otomatis:** `scripts/generate-images.js` **bukan** pengganti utama, melainkan jaring pengaman. Skrip ini hanya membuat kartu WebP 4:3 berbasis SVG/Sharp jika belum ada file foto asli di folder tujuan. Skrip **tidak menimpa** foto hasil `9router-image` karena memakai aturan skip `fs.existsSync`.
- **Alur Kerja Harian:**
  1. Coba generate foto otomatis via `9router-image`.
  2. Jika `9router-image` berhasil, gambar langsung masuk ke `public/images/blog/[slug].webp`.
  3. **Jika `9router-image` gagal (misal 403 TOS / quota):** Agen **wajib memanggil skill `google-flow-image-prompt`** untuk menyusun dan menyajikan visual prompt sinematik siap pakai ke pengguna untuk di-generate di https://flow.google.com/. Sementara menunggu gambar diunggah, `scripts/generate-images.js` tetap menyediakan kartu cadangan agar `npm run build` tidak gagal.
  4. Pengguna menaruh file gambar hasil Flow ke `public/images/blog/[slug].webp`. Saat build berikutnya berjalan, file tersebut otomatis digunakan.
- **Larangan:** Jangan membuat ulang kartu SVG bila sudah ada foto realistis di folder tujuan. Jangan memakai model FLUX/Cloudflare untuk kebutuhan gambar project ini.

---

## 4. Tech Stack & Konvensi Teknis (Website Astro)

- **Framework:** Astro (Static Site Generation / SSG).
- **Styling:** Tailwind CSS.
- **Konvensi URL (Trailing Slash):** Seluruh URL internal, navigasi, rujukan internal link, canonical, dan sitemap **WAJIB menggunakan trailing slash (`trailingSlash: 'always'`)**. Contoh: `/layanan/`, `/blog/`, `/layanan/corporate-gathering-batam/`. Dilarang membuat link internal tanpa tanda garis miring di akhir.
- **SEO & Structured Data:** Schema.org JSON-LD terintegrasi (LocalBusiness, Service, Article, BreadcrumbList).
- **Target Struktur Konten:** Mengikuti arsitektur topik silo pada `RISET-KEYWORD-ENTITY.md` (Homepage -> Service Silos -> Venue Hubs -> Spoke Articles).
- **Perintah Eksekusi:**
  - `npm run dev` : Menjalankan development server lokal.
  - `npm run build` : Membangun output static site untuk produksi.
  - `npm run build:zip` : Membangun static site sekaligus mengompres folder dist ke dist.zip siap upload ke cPanel DomaiNesia.
  - `npm run preview` : Meninjau hasil build lokal.

---

## 5. Deployment Shared Hosting (DomaiNesia / cPanel Apache)

- Folder output hasil build berada di direktori `dist/`.
- File `public/.htaccess` otomatis disalin ke `dist/.htaccess` saat build dan menangani:
  1. Force HTTPS (SSL otomatis cPanel).
  2. Standarisasi non-WWW (`https://eobatam.web.id/`).
  3. Enforce trailing slash (`/`) di tingkat server Apache.
  4. Kompresi Gzip/Brotli (`mod_deflate`).
  5. Browser Caching 1 tahun untuk WebP/PNG/SVG/CSS/JS (`mod_expires`).
  6. Header keamanan dasar (`X-Frame-Options`, `X-Content-Type-Options`).
- Cara upload ke DomaiNesia:
  1. Jalankan `npm run build:zip`.
  2. Buka File Manager di cPanel DomaiNesia -> masuk ke direktori root domain (`public_html` atau addon domain `eobatam.web.id`).
  3. Upload `dist.zip` lalu Extract di sana. Pastikan file `.htaccess` ter-extract dan terlihat (aktifkan *Show Hidden Files* di File Manager).

---

## 6. Kebijakan Bisnis Khusus

- **Model Inbound Lead:** Website dirancang untuk memandu pengunjung melakukan kontak via WhatsApp atau email, dengan penawaran utama: *Konsultasi gratis & tim siap datang langsung ke kantor klien di Batam*.
- **Tanpa Rental Alat Eceran:** Tidak melayani persewaan alat sound/panggung secara terpisah tanpa paket event.


---

## Deployment Target

- **Platform:** DomaiNesia (cPanel Addon Domain)
- **Target Path:** `/home/apitowpc/eobatam.web.id/`
- **Catatan & Metode:** Gunakan skill `cpanel-domainesia`. Perintah cepat: `npm run deploy`
