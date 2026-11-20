export interface ServicePackage {
  name: string;
  badge: string;
  targetPax: string;
  priceNote: string;
  duration: string;
  deliverables: string[];
}

export interface RabItem {
  component: string;
  percentage: string;
  description: string;
}

export interface HardwareItem {
  category: string;
  equipment: string;
  specification: string;
}

export interface VenueAnalysis {
  name: string;
  area: string;
  capacity: string;
  bestFor: string;
  notes: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SpokeLink {
  title: string;
  href: string;
  excerpt: string;
}

export interface ServiceItem {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  image: string;
  counter: string;
  priceRange: string;
  keywords: string[];
  features: string[];
  included: string[];
  venues: string[];
  overview: string[];
  packages: ServicePackage[];
  rabBreakdown: RabItem[];
  hardwareSpecs: HardwareItem[];
  venueAnalysis: VenueAnalysis[];
  sopSteps: { step: string; timeline: string; details: string }[];
  safetyMitigation: string[];
  legalNotes: string[];
  faq: FaqItem[];
  relatedSpokes: SpokeLink[];
}

export const servicesData: ServiceItem[] = [
  {
    slug: 'corporate-gathering-batam',
    title: 'Jasa Corporate Gathering & Family Day Perusahaan di Batam',
    shortTitle: 'Corporate Gathering & Family Day',
    tagline: 'Solusi All-in-One Gathering Tematik Terencana & Terukur',
    description: 'Jasa event organizer Batam untuk employee gathering tahunan, perayaan hari jadi korporasi, dan family day dengan manajemen logistik terpadu di resort pesisir Nongsa maupun hotel MICE Batam Center.',
    image: '/images/pages/layanan-corporate-gathering.webp',
    counter: '01',
    priceRange: 'Mulai Rp350.000 / pax',
    keywords: ['jasa event organizer batam', 'eo gathering kantor batam', 'corporate gathering batam', 'family day batam', 'company outing batam'],
    features: [
      'Penyusunan konsep tematik dan alur rundown terstruktur menit demi menit',
      'Produksi panggung lengkap: sound system line array, lighting show, dan LED videotron',
      'Master Game dan MC profesional dwibahasa (Indonesia - Inggris)',
      'Koordinasi akomodasi hotel/resort pantai rekanan dengan harga korporasi',
      'Tim dokumentasi multi-kamera (foto resolusi tinggi, cinematic aftermovie, drone 4K)'
    ],
    included: [
      'Manajemen Konsep & Rundown Acara',
      'Panggung Rigging & Sound System 10.000W',
      'MC & Entertainer Profesional',
      'Katering & Coffee Break Higienis',
      'Dokumentasi Foto, Video & Drone',
      'Pengurusan Izin Keramaian Barelang'
    ],
    venues: ['Turi Beach Resort Nongsa', 'Batam View Beach Resort', 'Harris Hotel Batam Center', 'Radisson Golf & Convention'],
    overview: [
      'Sebagai jasa event organizer di Batam, EO Batam Production memahami bahwa gathering kantor di Kota Batam memiliki dinamika logistik yang unik. Sebagai kawasan kepulauan industri, sebagian besar klien korporasi kami berasal dari zona galangan kapal Batu Ampar, manufaktur Mukakuning, hingga perusahaan multinasional di Batamindo dan Kabil.',
      'Tantangan utama gathering di Batam adalah pemilihan lokasi yang seimbang antara kemudahan akses rombongan bus besar dan keindahan panorama bahari. EO Batam Production hadir mengatasi seluruh kerumitan teknis: perizinan keramaian kepolisian, sewa genset cadangan luar ruangan, hingga koordinasi F&B bebas antre.'
    ],
    packages: [
      {
        name: 'Paket Half-Day Fun Gathering',
        badge: 'Favorit Korporat',
        targetPax: '50 - 150 Peserta',
        priceNote: 'Mulai Rp350.000 / orang',
        duration: 'Durasi: 4 - 5 Jam (Pagi / Sore)',
        deliverables: [
          'Venue pantai privat / function hall rekanan',
          'Sesi Fun Games & Ice Breaking dipandu Master Game',
          'Sound system portable 5.000 Watt & 4 mic wireless',
          '1x Makan Siang Prasmanan + 1x Coffee Break',
          'Spanduk / backdrop foto branding 4x2 meter',
          'Dokumentasi foto liputan & tim medis P3K standby'
        ]
      },
      {
        name: 'Paket Full-Day Premium & Gala Party',
        badge: 'Paling Lengkap',
        targetPax: '100 - 500 Peserta',
        priceNote: 'Mulai Rp650.000 / orang',
        duration: 'Durasi: 8 - 10 Jam (Siang s/d Malam)',
        deliverables: [
          'Venue resort pantai Nongsa (Outdoor + Indoor Ballroom)',
          'Sesi Outbound Team Building + Fun Games pantai',
          'Panggung semi-rigging 8x6 meter + Sound Line Array 10.000W',
          'LED Screen Videotron Indoor/Outdoor P3.9 (4x3 meter)',
          '2x Coffee Break, Makan Siang & Gala Dinner Barbeque',
          'MC profesional, Live Band Akustik, & Doorprize Management',
          'Video cinematic drone aftermovie & perizinan Polresta Barelang'
        ]
      },
      {
        name: 'Paket 2D1N Executive Retreat',
        badge: 'Eksklusif Multi-Hari',
        targetPax: '30 - 200 Peserta',
        priceNote: 'Custom Quotation',
        duration: 'Durasi: 2 Hari 1 Malam',
        deliverables: [
          'Akomodasi kamar resort bintang 4 / bintang 5',
          'Transportasi bus pariwisata AC antar-jemput kantor ke lokasi',
          'Rangkaian aktivitas: Outbound, City Tour Barelang, Awarding Dinner',
          'Setup tata cahaya moving beam lighting & tata suara konser',
          'Full-board meals (Breakfast, Lunch, Dinner, Snack)',
          'Dedicated Project Officer & LO standby 24 jam'
        ]
      }
    ],
    rabBreakdown: [
      { component: 'Konsumsi (F&B) & Tempat', percentage: '40% - 45%', description: 'Sewa area pantai/ballroom resort, makan siang, dinner BBQ, dan coffee break.' },
      { component: 'Hardware & Produksi Panggung', percentage: '25% - 30%', description: 'Rigging panggung, sound system line array, LED videotron, genset silent, dan tenda sarnafil.' },
      { component: 'Aktivitas, Talent & MC', percentage: '15% - 20%', description: 'Honor MC dwibahasa, fasilitator outbound, peralatan simulasi games, dan band penghibur.' },
      { component: 'Dokumentasi, Legal & Operasional', percentage: '10% - 15%', description: 'Fotografer, videografer drone, retribusi izin Polresta Barelang, medis P3K, dan kru lapangan.' }
    ],
    hardwareSpecs: [
      { category: 'Tata Suara (Audio)', equipment: 'Line Array System RCF / JBL VRX', specification: 'Daya 10.000 - 20.000 Watt, Digital Mixer Behringer X32, Mic Wireless UHF Shure QLX-D' },
      { category: 'Panggung & Rigging', equipment: 'Aluminium Truss Stage', specification: 'Modul panggung tinggi 80-120cm, karpet hitam/merah, mini rigging lighting & rigging sound' },
      { category: 'Visual Display', equipment: 'LED Screen Videotron P3.9 Outdoor', specification: 'Refresh rate 3840Hz, kecerahan 5000 nits tahan terik matahari pantai Batam' },
      { category: 'Kelistrikan Mandiri', equipment: 'Silent Genset Perkins / Cummins', specification: 'Kapasitas 60 - 100 kVA, distribusi kabel box aman dari lalu lalang peserta' }
    ],
    venueAnalysis: [
      { name: 'Turi Beach Resort (Nongsa)', area: 'Nongsa', capacity: '300 - 800 Orang', bestFor: 'Gathering berpadu pantai eksklusif & dinner tepi laut', notes: 'Pasir putih bersih, privasi tinggi, jalan akses mulus untuk bus besar.' },
      { name: 'Batam View Beach Resort', area: 'Nongsa', capacity: '200 - 600 Orang', bestFor: 'Fun games lapangan rumput luas berpadu pantai', notes: 'Tersedia lapangan rumput datar yang sangat luas untuk games akbar.' },
      { name: 'Harris Resort Barelang', area: 'Barelang', capacity: '150 - 500 Orang', bestFor: 'Family day pemandangan ikonik Jembatan Barelang', notes: 'Fasilitas kolam renang anak lengkap, pemandangan laut lepas nan megah.' },
      { name: 'Radisson Golf & Convention', area: 'Sukajadi', capacity: '500 - 2000 Orang', bestFor: 'Indoor gathering skala besar & cuaca tak menentu', notes: 'Grand Ballroom termegah di Batam, parkir luas, dekat pusat kota.' }
    ],
    sopSteps: [
      { step: 'Tahap 1: Inisiasi & Kunjungan Tim (H-30)', timeline: 'Minggu ke-1', details: 'Tim EO Batam Production mengunjungi kantor klien untuk koordinasi objektif acara, jumlah peserta, dan preferensi tema.' },
      { step: 'Tahap 2: Site Survey & Finalisasi RAB (H-21)', timeline: 'Minggu ke-2', details: 'Survey bersama ke venue pilihan, simulasi alokasi anggaran transparan, dan penandatanganan SPK.' },
      { step: 'Tahap 3: Perizinan & Produksi Konten (H-14 s/d H-3)', timeline: 'Minggu ke-3', details: 'Pengurusan berkas izin keramaian Polresta Barelang, cetak backdrop, pembuatan video bumper LED, dan technical meeting panitia.' },
      { step: 'Tahap 4: Loading & Eksekusi Hari H (H-1 s/d Hari H)', timeline: 'Hari Pelaksanaan', details: 'Loading panggung dan sound system sejak H-1 malam, sound check pagi, gladi resik MC, dan eksekusi acara dipandu Show Director.' }
    ],
    safetyMitigation: [
      'Penyediaan tenda pleton / sarnafil sebagai evakuasi darurat saat hujan deras mendadak di area pantai.',
      'Tim medis P3K bersertifikasi dengan tabung oksigen portabel dan obat-obatan darurat.',
      'Jalur kabel panggung ditutup dengan kabel protektor (cable cross) karet tebal agar aman dilewati anak-anak.',
      'Asuransi kecelakaan kegiatan luar ruangan (opsional atas permintaan manajemen korporasi).'
    ],
    legalNotes: [
      'Pengurusan Surat Tanda Terima Pemberitahuan (STTP) / Izin Keramaian dari Satintelkam Polresta Barelang untuk kegiatan >100 orang.',
      'Koordinasi izin lingkungan dengan Babinkamtibmas dan pengelola otoritas kawasan pariwisata Batam.',
      'Kepatuhan Pajak Barang dan Jasa Tertentu (PBJT) Jasa Kesenian dan Hiburan Badan Pendapatan Daerah (BPRD) Kota Batam.'
    ],
    faq: [
      { q: 'Berapa jumlah minimum peserta untuk memesan paket gathering ini?', a: 'Kami melayani acara gathering perusahaan dengan skala mulai dari 30 orang hingga 2.000 peserta dengan kustomisasi fasilitas panggung dan katering sesuai jumlah peserta.' },
      { q: 'Apakah tim EO Batam bisa datang langsung ke kantor kami untuk presentasi?', a: 'Ya, layanan konsultasi tatap muka dan presentasi konsep di kantor klien di seluruh Batam (Mukakuning, Batam Center, Nagoya, Kabil, Batu Ampar) kami berikan secara gratis tanpa komitmen awal.' },
      { q: 'Bagaimana jika saat acara outdoor di pantai cuaca hujan lebat?', a: 'Kami selalu menyiapkan Rencana Kontingensi (Plan B), mencakup penyediaan tenda cadangan tertutup atau pemindahan alur acara ke ballroom / function hall tertutup di area resort.' },
      { q: 'Kapan waktu paling ideal memesan paket gathering kantor di Batam?', a: 'Idealnya 3 hingga 6 minggu sebelum tanggal acara, terutama untuk periode padat korporasi (Oktober - Desember) agar ketersediaan venue pantai dan ballroom terbaik dapat diamankan.' },
      { q: 'Apakah biaya yang tertera dalam proposal sudah all-in?', a: 'Proposal RAB dari kami disusun terperinci item per item tanpa biaya tersembunyi. Pos F&B, alat panggung, MC, hingga perizinan dirinci secara transparan.' },
      { q: 'Apakah kami bisa menyewa sound system saja tanpa paket gathering?', a: 'Sesuai komitmen mutu, kami tidak melayani penyewaan alat eceran lepas. Seluruh armada sound system dan LED kami khususkan melayani event menyeluruh yang kami kelola.' }
    ],
    relatedSpokes: [
      { title: 'Panduan Estimasi Biaya Corporate Gathering di Batam 2026: Simulasi RAB dan Pemilihan Venue', href: '/blog/estimasi-biaya-corporate-gathering-batam/', excerpt: 'Rincian biaya paket per orang, porsi alokasi konsumsi vs panggung, dan tips efisiensi anggaran.' },
      { title: 'Prosedur Lengkap Izin Keramaian Polresta Barelang dan Pajak Hiburan BPRD Batam', href: '/blog/izin-keramaian-polresta-barelang-pajak-bprd-batam/', excerpt: 'Alur birokrasi legalitas izin kepolisian dan pajak hiburan event di Batam.' },
      { title: '5 Rekomendasi Lokasi Outbound Pantai Terbaik di Nongsa dan Barelang Batam', href: '/blog/rekomendasi-lokasi-outbound-pantai-batam/', excerpt: 'Komparasi venue pantai berpasir putih, fasilitas pendukung, dan akses bus rombongan.' }
    ]
  },
  {
    slug: 'mice-event-organizer-batam',
    title: 'Vendor MICE, Seminar Bisnis & Konferensi Korporasi di Batam',
    shortTitle: 'MICE & Seminar Bisnis',
    tagline: 'Presisi Eksekutif untuk Simposium, Raker, dan Konferensi B2B',
    description: 'Jasa event organizer Batam untuk perhelatan formal instansi pemerintah dan korporasi multinasional: konferensi internasional, rapat kerja tahunan (Raker), peluncuran produk, expo, dan simposium industri di Kota Batam.',
    image: '/images/pages/layanan-mice-seminar.webp',
    counter: '02',
    priceRange: 'Custom Proposal (Sesuai Skala)',
    keywords: ['jasa event organizer batam', 'event organizer batam', 'vendor mice batam', 'eo seminar batam', 'konferensi bisnis batam'],
    features: [
      'Sistem registrasi digital peserta berbasis barcode / QR code dengan pencetakan ID card instan',
      'Setup panggung visual eksekutif: LED Screen videotron indoor P2.6 ultra-fine refresh rate',
      'Tata suara audio pidato jernih anti-feedback dengan mic podium & mic wireless UHF',
      'Penyediaan sistem penterjemah bahasa simultan (Simultaneous Interpretation System / SIS)',
      'Manajemen protokoler VIP, pejabat kementerian, otoritas BP Batam, dan tamu asing'
    ],
    included: [
      'Backdrop 3D & Setup Panggung MICE',
      'LED Videotron Indoor P2.6 High Refresh',
      'Sound System Audio Conference Crystal Clear',
      'Meja Registrasi Digital & Barcode Scanner',
      'Seminar Kit Eksklusif & ID Card Lanyard',
      'Kru Protokoler & LO Tamu VIP'
    ],
    venues: ['Radisson Golf & Convention Center Batam', 'Harris Hotel Batam Center', 'Swiss-Belhotel Harbour Bay', 'Pacific Palace Hotel'],
    overview: [
      'Sebagai vendor jasa event organizer Batam berpengalaman MICE, EO Batam Production memahami bahwa Kota Batam menempati posisi strategis sebagai pintu gerbang MICE (Meeting, Incentive, Convention, Exhibition) regional di Selat Malaka. Berdekatan dengan Singapura dan Malaysia, konferensi bisnis di Batam menuntut standar eksekusi bertaraf internasional.',
      'EO Batam Production berpengalaman menangani perhelatan formal dengan koordinasi protokoler ketat, visual presentasi tanpa jeda (seamless presentation switching), dan kenyamanan delegasi tingkat tinggi.'
    ],
    packages: [
      {
        name: 'Paket Seminar & Workshop Korporat',
        badge: 'Standar Korporat',
        targetPax: '50 - 200 Delegasi',
        priceNote: 'Custom Proposal Sesuai Durasi',
        duration: 'Durasi: Half-Day / Full-Day',
        deliverables: [
          'Setup backdrop panggung representatif dan podium pidato berlogo',
          'LED Videotron Indoor P2.9 ukuran 3x2 meter & switcher presentation',
          'Sound system audio meeting 3.000 Watt + mic wireless & mic podium',
          'Meja registrasi peserta, name tag lanyard, dan pulpen seminar kit',
          'Dokumentasi liputan foto profesional & rekaman audio materi'
        ]
      },
      {
        name: 'Paket International Conference & Expo',
        badge: 'Standar Internasional',
        targetPax: '200 - 1.000 Delegasi',
        priceNote: 'Custom Enterprise Quotation',
        duration: 'Durasi: 1 - 3 Hari Konferensi',
        deliverables: [
          'Desain panggung megah, backdrop dinamis, dan LED curve P2.6',
          'Booth pameran partisi R8 standar eksebisi B2B',
          'Sistem registrasi online & on-site self check-in scanner',
          'Live streaming broadcast multi-kamera ke platform Zoom / YouTube',
          'Sistem penerjemah bahasa simultan (SIS booth & wireless headset)',
          'Kru liaison officer (LO) fasih bahasa Inggris untuk tamu asing'
        ]
      },
      {
        name: 'Paket Corporate Gala & Awarding Raker',
        badge: 'Eksekutif',
        targetPax: '100 - 400 Peserta',
        priceNote: 'Custom Proposal',
        duration: 'Durasi: Sesi Siang s/d Malam',
        deliverables: [
          'Kombinasi ruang sidang formal siang hari dan jamuan makan malam apresiasi',
          'Tata pencahayaan panggung lighting show (moving beam, fresnel, par LED)',
          'Master of Ceremony formal berkualifikasi protokoler kenegaraan/korporasi',
          'Piala penganugerahan kustom akrilik / logam dan piagam eksklusif'
        ]
      }
    ],
    rabBreakdown: [
      { component: 'Audio-Visual & Multimedia Panggung', percentage: '35% - 40%', description: 'LED videotron indoor high refresh, video switcher seamless, lighting podium, sound system pidato.' },
      { component: 'Venue Ballroom & F&B Hotel', percentage: '30% - 35%', description: 'Sewa grand ballroom, lunch prasmanan, coffee break eksekutif pagi & sore.' },
      { component: 'Materi Cetak & Kit Delegasi', percentage: '15% - 20%', description: 'ID card barcode, booklet agenda acara, tote bag seminar kit ramah lingkungan, sertifikat.' },
      { component: 'Manajemen Acara & Protokoler', percentage: '10% - 15%', description: 'Show director, operator multimedia, LO tamu VIP, dan pengurusan perizinan instansi.' }
    ],
    hardwareSpecs: [
      { category: 'Layar Utama', equipment: 'LED Videotron Indoor P2.6 Black Diamond', specification: 'Refresh rate 3840Hz, sudut pandang 160°, kontras ultra-tajam tanpa distorsi kamera' },
      { category: 'Video Switcher', equipment: 'Seamless Switcher Roland V-8HD / Barco', specification: 'Peralihan video tanpa blank, dukungan multi-input laptop pembicara dan video bumper' },
      { category: 'Audio Konferensi', equipment: 'Yamaha DXR Audio System & Shure Microphones', specification: 'Distribusi suara merata di seluruh sudut ballroom tanpa dengung (anti-feedback processor)' },
      { category: 'Podium & Estetika', equipment: 'Podium Akrilik Minimalis dengan Mic Gooseneck', specification: 'Lengkap dengan monitor display waktu bicara dan logo perusahaan' }
    ],
    venueAnalysis: [
      { name: 'Radisson Convention Center', area: 'Sukajadi', capacity: 'Maks 2.000 Delegasi', bestFor: 'Konferensi berskala internasional & gala dinner formal', notes: 'Ballroom bebas pilar, ceiling tinggi, fasilitas teknis built-in modern.' },
      { name: 'Swiss-Belhotel Harbour Bay', area: 'Batu Ampar', capacity: 'Maks 800 Delegasi', bestFor: 'Seminar delegasi yang menyeberang via Feri Harbour Bay', notes: 'Sangat praktis bagi tamu dari Singapura (jalan kaki 2 menit dari pelabuhan feri).' },
      { name: 'Harris Hotel Batam Center', area: 'Batam Center', capacity: 'Maks 600 Delegasi', bestFor: 'Rapat koordinasi dekat kantor pemerintahan Pemko/BP Batam', notes: 'Berada tepat di pusat pemerintahan dan bersebelahan dengan terminal feri Batam Center.' },
      { name: 'Pacific Palace Hotel', area: 'Jodoh', capacity: 'Maks 1.500 Delegasi', bestFor: 'Konvensi dengan kapasitas ballroom raksasa & tema kapal unik', notes: 'Akses mudah di pusat bisnis Nagoya/Jodoh.' }
    ],
    sopSteps: [
      { step: 'Tahap 1: Analisis Kebutuhan Teknis (H-45)', timeline: 'Minggu ke-1', details: 'Inventarisasi rundown acara, materi presentasi narasumber, tata letak meja (round table vs theatre style), dan kebutuhan VIP.' },
      { step: 'Tahap 2: Technical Meeting & Layout 3D (H-20)', timeline: 'Minggu ke-3', details: 'Presentasi denah 3D panggung, tata letak registrasi, alur kedatangan VIP, dan pembagian frekuensi mic.' },
      { step: 'Tahap 3: Rehearsal & Dry Run Media (H-1)', timeline: 'H-1 Malam', details: 'Uji seluruh slide presentasi pembicara, sinkronisasi audio, kalibrasi warna LED videotron, dan gladi resik MC.' },
      { step: 'Tahap 4: Live Show Running (Hari H)', timeline: 'Hari Pelaksanaan', details: 'Operator multimedia standby, timekeeper memantau durasi pembicara, LO mendampingi narasumber ke podium.' }
    ],
    safetyMitigation: [
      'Penyediaan cadangan laptop operator mirroring (seamless redundancy) agar presentasi tidak terhenti jika laptop crash.',
      'Penyediaan unit UPS (Uninterruptible Power Supply) pada server registrasi dan switcher visual.',
      'Koordinasi jalur evakuasi darurat gedung dan penempatan alat pemadam api ringan (APAR) di area backstage.',
      'Protokol kerahasiaan materi bisnis korporasi (NDA) bagi seluruh kru teknisi yang bertugas.'
    ],
    legalNotes: [
      'Pengurusan Izin Keramaian dari Satintelkam Polresta Barelang untuk kegiatan formal berskala nasional/internasional.',
      'Koordinasi pemberitahuan Kantor Imigrasi Batam jika menghadirkan narasumber atau delegasi warga negara asing (WNA).'
    ],
    faq: [
      { q: 'Apakah disediakan fasilitas registrasi peserta berbasis barcode?', a: 'Ya, sistem registrasi digital lengkap dengan scanner barcode dan cetak instan kartu nama delegasi sudah menjadi bagian dari paket MICE kami.' },
      { q: 'Bagaimana jika pembicara menggunakan laptop Mac dan membutuhkan adapter display?', a: 'Tim teknis kami membawa perlengkapan converter lengkap (HDMI, USB-C, DisplayPort, Mini-DP) serta presentation clicker nirkabel cadangan.' },
      { q: 'Apakah EO Batam melayani penyediaan penerjemah bahasa simultan?', a: 'Ya, kami menyediakan bilik kedap suara (interpreter booth), sistem wireless receiver headset, dan penerjemah tersumpah profesional.' },
      { q: 'Bisakah membantu pengurusan akomodasi dan penjemputan bandara delegasi?', a: 'Bisa. Kami memiliki armada transportasi penjemputan dari Bandara Hang Nadim maupun Pelabuhan Internasional Batam Center / Harbour Bay.' },
      { q: 'Apakah ada gladi resik sebelum seminar dimulai?', a: 'Seluruh perhelatan MICE kami wajib melalui sesi dry run dan gladi resik minimal 1 kali pada H-1 sore/malam bersama panitia inti.' },
      { q: 'Apakah tim siap presentasi proposal tender di hadapan dewan direksi?', a: 'Tentu. Tim account manager dan show director kami siap hadir langsung ke kantor Anda di Batam untuk memaparkan proposal teknis dan komersial.' }
    ],
    relatedSpokes: [
      { title: 'Prosedur Lengkap Izin Keramaian Polresta Barelang dan Pajak Hiburan BPRD Batam', href: '/blog/izin-keramaian-polresta-barelang-pajak-bprd-batam/', excerpt: 'Regulasi resmi perizinan kegiatan formal dan MICE korporasi di wilayah Batam.' },
      { title: 'Panduan Estimasi Biaya Corporate Gathering di Batam 2026: Simulasi RAB dan Pemilihan Venue', href: '/blog/estimasi-biaya-corporate-gathering-batam/', excerpt: 'Komparasi ballroom hotel berbintang dan alokasi anggaran MICE representatif.' }
    ]
  },
  {
    slug: 'outbound-team-building-batam',
    title: 'Paket Outbound Pantai & Team Building Karyawan di Batam',
    shortTitle: 'Outbound & Team Building Pantai',
    tagline: 'Simulasi Dinamis Berbasis Experiential Learning di Alam Terbuka',
    description: 'Jasa event organizer Batam untuk program pengembangan kapasitas kerja sama tim, kepemimpinan, dan komunikasi sinergis karyawan di pantai pasir putih Nongsa dan Barelang Batam dengan instruktur bersertifikasi BNSP.',
    image: '/images/pages/layanan-outbound-teambuilding.webp',
    counter: '03',
    priceRange: 'Mulai Rp150.000 / pax',
    keywords: ['jasa event organizer batam', 'paket outbound batam', 'team building batam', 'fun games pantai batam', 'outing karyawan batam'],
    features: [
      'Fasilitator game dan instruktur bersertifikasi BNSP dengan rasio ideal 1 fasilitator per 15-20 peserta',
      'Kurikulum simulasi berjenjang: Ice Breaking, Team Identity, Synergy Challenge, dan Final Project',
      'Peralatan permainan terawat, bersih, dan berstandar keselamatan tinggi (safety first)',
      'Audio sound system nirkabel lapangan berkekuatan tinggi yang tahan angin kencang pantai',
      'Tim medis P3K lapangan standby sepanjang seluruh aktivitas fisik berlangsung'
    ],
    included: [
      'Instruktur & Fasilitator Bersertifikat',
      'Peralatan Simulasi Game Lengkap',
      'Sound System Nirkabel Lapangan',
      'Air Mineral Tak Terbatas & P3K',
      'Spanduk Kegiatan Perusahaan',
      'Dokumentasi Foto Selama Aktivitas'
    ],
    venues: ['Pantai Turi Beach Nongsa', 'Pantai Batam View Resort', 'Pantai Glory Melur Barelang', 'Pantai Elyora Barelang'],
    overview: [
      'Aktivitas luar ruangan di kawasan pesisir Batam menawarkan penyegaran mental dari rutinitas kawasan industri. Namun, menyelenggarakan outbound pantai menuntut pemahaman terhadap siklus pasang surut air laut Batam dan paparan sinar matahari tropis.',
      'Tim jasa event organizer Batam kami merancang modul outbound yang energetik, aman, dan sarat nilai perusahaan tanpa unsur perpeloncoan fisik. Setiap permainan dianalisis untuk menghasilkan refleksi kerja sama tim yang aplikatif di tempat kerja.'
    ],
    packages: [
      {
        name: 'Paket Fun Games Pantai (Half-Day)',
        badge: 'Paling Populer',
        targetPax: '30 - 300 Karyawan',
        priceNote: 'Mulai Rp150.000 / orang',
        duration: 'Durasi: 3 - 4 Jam (Pagi 08.00 - 12.00)',
        deliverables: [
          'Tiket masuk area pantai rekanan Batam',
          'Sesi Ice Breaking, Grouping, dan Yel-Yel Kreatif',
          '4 Pos Simulasi Kerjasama Tim (Effective Communication & Trust)',
          'Fasilitator berpengalaman & sound portable bertenaga tinggi',
          'Air mineral tak terbatas selama kegiatan berlangsung',
          'Foto liputan dokumentasi aksi peserta'
        ]
      },
      {
        name: 'Paket Full-Day Outbound & Amazing Race',
        badge: 'Tantangan Lengkap',
        targetPax: '50 - 200 Karyawan',
        priceNote: 'Mulai Rp280.000 / orang',
        duration: 'Durasi: 6 - 7 Jam (Pagi s/d Sore)',
        deliverables: [
          'Seluruh fasilitas Paket Fun Games',
          'Modul Amazing Race / Treasure Hunt di koridor pantai Barelang/Nongsa',
          'Simulasi Final Project: Pembangunan Menara Kebersamaan / Jembatan Sinergi',
          'Makan Siang Katering Pantai (Menu Ikan Bakar Khas Kepri)',
          '1x Sesi Kelapa Muda Segar / Coffee Break sore',
          'Medali / piagam apresiasi tim pemenang'
        ]
      },
      {
        name: 'Paket Capacity Building & Leadership Camp',
        badge: 'Pengembangan SDM',
        targetPax: '20 - 80 Karyawan',
        priceNote: 'Custom Proposal',
        duration: 'Durasi: 2 Hari 1 Malam (Tenda Glamping / Resort)',
        deliverables: [
          'Modul evaluasi kepemimpinan dan pemetaan karakter kerja tim',
          'Sesi api unggun, malam keakraban (night reflection), dan sharing session HR',
          'Akomodasi penginapan dan makan lengkap 4x',
          'Laporan evaluasi dinamika kelompok tertulis untuk manajemen HR/GA'
        ]
      }
    ],
    rabBreakdown: [
      { component: 'Fasilitator & Peralatan Simulasi', percentage: '35% - 40%', description: 'Honor master game bersertifikasi, kru fasilitator, pengadaan alat game terawat.' },
      { component: 'Sewa Lahan Pantai & Tiket Masuk', percentage: '25% - 30%', description: 'Retribusi area pantai privat, kebersihan lokasi, pemakaian pondok istirahat.' },
      { component: 'Konsumsi (Makan Siang & Hidrasi)', percentage: '20% - 25%', description: 'Makan siang prasmanan, kelapa muda pantai, suplai air mineral galon dan botol.' },
      { component: 'P3K Medis, Logistik & Sound Lapangan', percentage: '10% - 15%', description: 'Sound portable berkekuatan tinggi, tim medis P3K obat-obatan lapangan, banner.' }
    ],
    hardwareSpecs: [
      { category: 'Audio Lapangan', equipment: 'Portable Wireless PA System Baretone 15 Inch', specification: 'Daya baterai 8 jam nonstop, jangkauan suara 100 meter di hembusan angin laut' },
      { category: 'Alat Simulasi', equipment: 'Peralatan Outbound Standar Keselamatan', specification: 'Tali karmantel bersertifikasi, pipa paralon tebal, terpal kanvas tanpa sudut tajam' },
      { category: 'Peneduh Lapangan', equipment: 'Tenda Lipat Gazebo 3x3 Meter', specification: 'Tempat berteduh istirahat fasilitator dan posko medis P3K di bibir pantai' }
    ],
    venueAnalysis: [
      { name: 'Pantai Turi Beach (Nongsa)', area: 'Nongsa', capacity: '100 - 400 Peserta', bestFor: 'Outbound korporat eksklusif dengan privasi tinggi', notes: 'Garis pantai bersih, ombak tenang, kamar bilas air tawar sangat bersih.' },
      { name: 'Pantai Batam View', area: 'Nongsa', capacity: '150 - 500 Peserta', bestFor: 'Kombinasi lapangan rumput luas dan pantai pasir putih', notes: 'Sangat cocok untuk transisi game dari area teduh ke pesisir.' },
      { name: 'Pantai Glory Melur Barelang', area: 'Jembatan 5 Barelang', capacity: '200 - 800 Peserta', bestFor: 'Rombongan besar dengan budget ekonomis', notes: 'Garis pantai sangat panjang, parkiran bus luas, pasir putih landai.' },
      { name: 'Pantai Elyora Barelang', area: 'Jembatan 6 Barelang', capacity: '100 - 500 Peserta', bestFor: 'Suasana alam tropis alami dan air laut bening', notes: 'Pemandangan pohon bakau ikonik, cocok untuk Amazing Race petualangan.' }
    ],
    sopSteps: [
      { step: 'Tahap 1: Analisis Profil Karyawan & Usia (H-21)', timeline: 'Minggu ke-1', details: 'Menyesuaikan tingkat intensitas fisik permainan dengan demografi usia dan kondisi kesehatan peserta.' },
      { step: 'Tahap 2: Cek Pasang Surut Air Laut BMKG (H-10)', timeline: 'Minggu ke-2', details: 'Menjadwalkan jam simulasi pantai bertepatan dengan air laut surut agar bibir pantai luas dan aman.' },
      { step: 'Tahap 3: Briefing Fasilitator & Pemasangan Alat (Hari H - 2 Jam)', timeline: 'Pagi Hari H', details: 'Pemasangan pos simulasi, pengujian sound system lapangan, dan sterilisasi pecahan karang di pasir.' },
      { step: 'Tahap 4: Pelaksanaan & Debriefing Edukasi (Hari H)', timeline: 'Sesi Acara', details: 'Pemanasan peregangan otot, eksekusi game beregu, dan sesi debriefing makna nilai kerja sama tim.' }
    ],
    safetyMitigation: [
      'Pengecekan riwayat kesehatan peserta (riwayat asma, jantung, kehamilan) sebelum kegiatan dimulai.',
      'Sterilisasi area pasir pantai dari serpihan karang tajam, sampah kaca, atau binatang laut penyengat.',
      'Kewajiban hidrasi: fasilitator mewajibkan peserta minum air putih setiap pergantian pos simulasi.',
      'SOP penanganan sengatan ubur-ubur atau kram otot oleh tim medis lapangan terlatih.'
    ],
    legalNotes: [
      'Surat Izin Keramaian Polresta Barelang untuk kegiatan gathering luar ruangan >100 orang.',
      'Izin pengelola kawasan pariwisata pantai dan koordinasi penjaga pantai (lifeguard).'
    ],
    faq: [
      { q: 'Apakah permainan outbound ini aman untuk karyawan yang sudah berumur?', a: 'Sangat aman. Modul kami berfokus pada dinamika kelompok (*low impact team building*), pemecahan masalah nalar, dan komunikasi santai, bukan ketahanan fisik militer.' },
      { q: 'Apakah sudah termasuk konsumsi makan siang dan air mineral?', a: 'Ya, seluruh paket kami menyediakan air mineral galon isi ulang tak terbatas, serta opsi makan siang prasmanan katering khas Batam.' },
      { q: 'Bagaimana mitigasi jika cuaca mendadak hujan deras di pantai?', a: 'Kami mengantisipasi dengan tenda peneduh atau memindahkan alur permainan nalar ke pendopo/gazebo luas yang telah kami sewa di tepi pantai.' },
      { q: 'Apakah bus pariwisata bisa masuk hingga bibir pantai?', a: 'Seluruh venue rekomendasi kami di Nongsa dan Barelang memiliki akses jalan aspal mulus dan area parkir yang sanggup menampung bus pariwisata kapasitas 45 kursi.' },
      { q: 'Apakah kami mendapatkan foto dokumentasi kegiatan?', a: 'Ya, fotografer lapangan kami mengabadikan aksi heboh peserta dari awal pembagian regu hingga penyerahan hadiah pemenang.' },
      { q: 'Bisakah modul permainan disesuaikan dengan nilai budaya perusahaan (core values)?', a: 'Tentu. Tim instruktur kami siap mengintegrasikan moto, tagline, dan nilai budaya perusahaan ke dalam narasi permainan.' }
    ],
    relatedSpokes: [
      { title: '5 Rekomendasi Lokasi Outbound Pantai Terbaik di Nongsa dan Barelang Batam', href: '/blog/rekomendasi-lokasi-outbound-pantai-batam/', excerpt: 'Ulasan lengkap karakter pantai, fasilitas bilas, dan mitigasi pasang laut.' },
      { title: 'Panduan Estimasi Biaya Corporate Gathering di Batam 2026: Simulasi RAB dan Pemilihan Venue', href: '/blog/estimasi-biaya-corporate-gathering-batam/', excerpt: 'Simulasi alokasi anggaran outbound hemat per orang di Batam.' }
    ]
  },
  {
    slug: 'gala-dinner-awarding-batam',
    title: 'Jasa Gala Dinner & Corporate Awarding Night di Batam',
    shortTitle: 'Gala Dinner & Awarding Night',
    tagline: 'Malam Apresiasi Megah dengan Tata Cahaya Spektakuler & Audio Kelas Atas',
    description: 'Jasa event organizer Batam untuk perhelatan malam puncak apresiasi karyawan, perayaan hari jadi korporasi, dan jamuan makan malam kehormatan dengan tata panggung megah, lighting show bergerak, dan pengisi acara berkelas di Batam.',
    image: '/images/pages/layanan-gala-dinner.webp',
    counter: '04',
    priceRange: 'Custom Proposal (Sesuai Skala Acara)',
    keywords: ['jasa event organizer batam', 'event organizer batam', 'eo gala dinner batam', 'awarding night batam', 'annual dinner batam'],
    features: [
      'Desain panggung 3D tematik kustom (Gatsby, Futuristic, Nusantara Heritage, Hollywood Glamour)',
      'Tata cahaya spektakuler: Moving Beam 380W, Par LED RGBW, Laser Show, Hazer Smoke Machine',
      'Tata suara Line Array konser bertenaga prima untuk kenikmatan pertunjukan live music band',
      'Manajemen tata panggung (stage management) dan alur penganugerahan trofi penghargaan presisi',
      'Penyediaan talent berkelas: Master of Ceremony papan atas, live band top 40, tarian penyambutan'
    ],
    included: [
      'Panggung Megah & Desain 3D Kustom',
      'LED Videotron Screen High Definition',
      'Lighting System Show Moving Beam',
      'Sound System Konser Indoor',
      'Stage Manager & Show Director Profesional',
      'Talent Pengisi Acara / Live Band'
    ],
    venues: ['Ballroom Radisson Batam Center', 'Ballroom Swiss-Belhotel Harbour Bay', 'Turi Beach Outdoor Amphitheatre', 'Batam View Coastal Deck'],
    overview: [
      'Gala Dinner dan Malam Penganugerahan (Awarding Night) adalah cerminan prestise sebuah korporasi. Event malam hari menuntut eksekusi estetika visual tinggi: pencahayaan yang dramatis, ketepatan waktu transisi antar-sesi, dan tata suara musik yang jernih namun tetap nyaman untuk bercengkerama.',
      'Sebagai jasa event organizer Batam spesialis perhelatan malam, EO Batam Production mengelola seluruh elemen pertunjukan, mulai dari gladi resik penerima trofi, alur kue ulang tahun perusahaan, video bumper visual di layar LED, hingga koordinasi katering bintang lima.'
    ],
    packages: [
      {
        name: 'Paket Intimate Awarding Dinner',
        badge: 'Elegan Eksklusif',
        targetPax: '50 - 150 Undangan',
        priceNote: 'Custom Proposal Sesuai Kebutuhan',
        duration: 'Durasi: 3 - 4 Jam Malam',
        deliverables: [
          'Dekorasi panggung tematik, karpet merah VIP, dan photobooth 3D',
          'LED Videotron Indoor P2.9 ukuran 4x2.5 meter',
          'Lighting set: 8x Par LED ambiance, 4x Moving Beam, dan wireless battery par',
          'Sound system 5.000 Watt, mic wireless vocal Shure, dan digital audio mixer',
          'MC profesional interaktif pembawa suasana hangat',
          'Live akustik band pengiring makan malam'
        ]
      },
      {
        name: 'Paket Grand Corporate Gala & Concert',
        badge: 'Megah Spektakuler',
        targetPax: '150 - 800 Undangan',
        priceNote: 'Custom Enterprise Quotation',
        duration: 'Durasi: 4 - 5 Jam Malam',
        deliverables: [
          'Panggung semi-rigging megah, mini-catwalk, dan tirai latar mewah',
          'LED Videotron Giant Screen P2.6 (ukuran 6x3 meter atau 8x3 meter)',
          'Grand Lighting Show: 12x Moving Beam 380W, Fresnel, Laser, Dry Ice Machine',
          'Sound System Line Array 10.000 - 15.000 Watt standar konser band nasional',
          'Show Director, Stage Manager, LO Talent, dan kru visual operator',
          'Full band top 40 penghibur utama + penari penyambutan selamat datang',
          'Dokumentasi video multi-kamera live feed ke layar LED'
        ]
      },
      {
        name: 'Paket Coastal Beach Barbeque Gala Dinner',
        badge: 'Sensasi Tepi Laut',
        targetPax: '50 - 300 Undangan',
        priceNote: 'Custom Proposal',
        duration: 'Durasi: Sore s/d Malam',
        deliverables: [
          'Setting meja jamuan makan di hamparan pasir pantai atau dermaga laut',
          'Dekorasi fairy lights / string lights tematik pesisir tropis',
          'Panggung akustik pantai dengan tata suara tahan angin laut',
          'Menu BBQ seafood bakar khas Kepulauan Riau',
          'Pesta kembang api / fire dance atraktif sebagai penutup malam'
        ]
      }
    ],
    rabBreakdown: [
      { component: 'Audio-Visual, Lighting & LED Screen', percentage: '35% - 40%', description: 'Moving beam, laser, LED videotron P2.6, sound system konser, special effects smoke.' },
      { component: 'Venue Hotel Bintang & Jamuan Makan Malam', percentage: '30% - 35%', description: 'Set menu / buffet dinner standar hotel bintang 4/5 di Batam.' },
      { component: 'Dekorasi Tematik & Panggung', percentage: '15% - 20%', description: 'Panggung karpet merah, photobooth 3D interaktif, backdrop piala, table centerpieces.' },
      { component: 'Talent, MC, Musik & Manajemen Show', percentage: '10% - 15%', description: 'Honor MC formal, full band, penari, show director, dan pengurusan pajak BPRD.' }
    ],
    hardwareSpecs: [
      { category: 'Pencahayaan Show', equipment: 'Moving Head Beam 380W & Profile Fresnel', specification: 'DMX 512 Console Avolites Titan, warna tajam untuk penyorotan VIP di panggung' },
      { category: 'Visual Layar', equipment: 'LED Videotron P2.6 Indoor Ultra-HD', specification: 'Refresh rate 3840Hz, rasio kontras 5000:1 untuk visual motion bumper piala' },
      { category: 'Efek Khusus', equipment: 'Low Fog Dry Ice & Cold Sparkular Machine', specification: 'Efek asap lantai dingin dan percikan api dingin aman indoor untuk momen puncak awarding' },
      { category: 'Tata Suara', equipment: 'Line Array System Turbosound / RCF', specification: 'Daya 10.000 - 15.000 Watt dengan sub-bass menggelegar namun vokal tetap empuk' }
    ],
    venueAnalysis: [
      { name: 'Grand Ballroom Radisson Batam', area: 'Sukajadi', capacity: 'Maks 1.500 Tamu', bestFor: 'Gala dinner korporasi skala akbar dengan kemewahan interior', notes: 'Plafon tinggi 8 meter, memungkinkan pemasangan rigging lighting masif.' },
      { name: 'Ballroom Swiss-Belhotel Harbour Bay', area: 'Batu Ampar', capacity: 'Maks 700 Tamu', bestFor: 'Malam penganugerahan formal dengan akses dekat pelabuhan', notes: 'Dekorasi karpet modern, fasilitas pendukung F&B sangat profesional.' },
      { name: 'Turi Beach Outdoor Amphitheatre', area: 'Nongsa', capacity: 'Maks 300 Tamu', bestFor: 'Gala dinner bertema kasual pesisir tropis di bawah bintang', notes: 'Suasana deburan ombak dan angin sejuk Nongsa nan magis.' },
      { name: 'Batam View Coastal Deck', area: 'Nongsa', capacity: 'Maks 250 Tamu', bestFor: 'Jamuan makan malam seafood BBQ tepi pantai beratap langit', notes: 'Pemandangan lampu-lampu kapal Singapura di kejauhan.' }
    ],
    sopSteps: [
      { step: 'Tahap 1: Kurasi Kategori Penghargaan & Tema (H-30)', timeline: 'Minggu ke-1', details: 'Menyusun daftar nominasi piala, pembuatan video bumper animasi untuk masing-masing kategori penghargaan.' },
      { step: 'Tahap 2: Desain Visual 3D & Technical Meeting (H-14)', timeline: 'Minggu ke-2', details: 'Persetujuan desain panggung 3D, penentuan tata letak meja bundar (round table), dan koordinasi menu katering.' },
      { step: 'Tahap 3: Rehearsal & Gladi Resik Penerima Piala (H-1)', timeline: 'H-1 Malam', details: 'Gladi kotor dan gladi bersih bersama MC, operator lampu, operator video bumper, dan penunjuk jalan panggung.' },
      { step: 'Tahap 4: Show Time! (Malam Hari H)', timeline: 'Hari Pelaksanaan', details: 'Show Director memimpin rundown dari control booth, alur pemberian piala presisi tanpa jeda canggung.' }
    ],
    safetyMitigation: [
      'Penggunaan mesin Cold Spark (percikan api dingin non-mesiu) yang aman digunakan di dalam ballroom berkarpet.',
      'Sistem kabel panggung terisolasi rapi di bawah karpet atau ditutup floor duct karet.',
      'Penyediaan genset silent standby otomatis (auto-switch) untuk mengantisipasi pemadaman listrik PLN.',
      'Kru pengendali kerumunan (crowd control) standby di area red carpet dan meja registrasi.'
    ],
    legalNotes: [
      'Surat Izin Keramaian dari Satintelkam Polresta Barelang untuk kegiatan malam berskala besar.',
      'Pelaporan dan pembayaran Pajak PBJT Jasa Kesenian dan Hiburan Badan Pendapatan Daerah (BPRD) Kota Batam.'
    ],
    faq: [
      { q: 'Apakah EO Batam bisa membuatkan video bumper pembacaan nominasi penghargaan?', a: 'Bisa. Tim multimedia grafis kami memproduksi video bumper motion graphics berkualitas tinggi berlogo perusahaan Anda untuk ditayangkan di layar LED saat acara.' },
      { q: 'Apakah kami bisa membawa talent artis ibu kota atau live band sendiri?', a: 'Tentu. Tim teknis kami akan memenuhi *riders teknis* sound system dan lighting standar artis yang Anda undang.' },
      { q: 'Berapa lama proses loading alat panggung untuk gala dinner di ballroom?', a: 'Biasanya kami memulai loading sejak H-1 malam (pukul 23.00) agar panggung, LED screen, dan lighting siap diuji coba pada H-1 siang hari.' },
      { q: 'Apakah EO Batam menyediakan pembuatan trofi piala kustom?', a: 'Ya, kami melayani pembuatan piala penghargaan bahan kristal, akrilik laser, logam kuningan kustom, hingga sertifikat berbingkai eksklusif.' },
      { q: 'Bagaimana penataan tempat duduk untuk tamu VIP dan direksi?', a: 'Kami menerapkan standar protokoler penataan meja VVIP di baris terdepan dengan pandangan langsung ke tengah panggung tanpa terhalang pilar.' },
      { q: 'Apakah tim siap datang ke kantor kami untuk memaparkan konsep tema acara?', a: 'Ya, kami siap hadir langsung ke kantor perusahaan Anda di Batam untuk mempresentasikan pilihan tema, video 3D panggung, dan estimasi biaya tanpa dipungut biaya.' }
    ],
    relatedSpokes: [
      { title: 'Prosedur Lengkap Izin Keramaian Polresta Barelang dan Pajak Hiburan BPRD Batam', href: '/blog/izin-keramaian-polresta-barelang-pajak-bprd-batam/', excerpt: 'Kepatuhan hukum pajak hiburan PBJT BPRD Batam untuk pertunjukan musik gala dinner.' },
      { title: 'Panduan Estimasi Biaya Corporate Gathering di Batam 2026: Simulasi RAB dan Pemilihan Venue', href: '/blog/estimasi-biaya-corporate-gathering-batam/', excerpt: 'Simulasi alokasi anggaran F&B ballroom hotel bintang vs sewa alat audio-visual.' }
    ]
  }
];
