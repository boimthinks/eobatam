/**
 * internalLinks.ts
 * Registri pemetaan URL dan target anchor keyword untuk internal linking terstruktur
 * EO Batam Production (eobatam.web.id)
 */

export interface InternalLinkItem {
  title: string;
  url: string;
  category: 'core' | 'service' | 'venue' | 'blog';
  keywords: string[];
}

export const INTERNAL_LINKS: InternalLinkItem[] = [
  // --- HALAMAN PILAR UTAMA (TIER 1) ---
  {
    title: 'EO Batam Production (Beranda)',
    url: '/',
    category: 'core',
    keywords: ['eo batam', 'event organizer batam', 'jasa event organizer batam', 'vendor eo batam'],
  },
  {
    title: 'Tentang Kami',
    url: '/tentang-kami/',
    category: 'core',
    keywords: ['profil eo batam', 'tim eo batam', 'perusahaan eo di batam'],
  },
  {
    title: 'Profil Penulis: Muhammad Zazuli',
    url: '/author/zazuli/',
    category: 'core',
    keywords: ['muhammad zazuli', 'penulis eo batam', 'praktisi event organizer batam', 'event organizer palembang'],
  },
  {
    title: 'Kontak & Konsultasi',
    url: '/kontak/',
    category: 'core',
    keywords: ['kontak eo batam', 'konsultasi event batam', 'alamat eo batam'],
  },
  {
    title: 'Katalog Layanan EO',
    url: '/layanan/',
    category: 'core',
    keywords: ['layanan eo batam', 'paket event batam', 'jasa event batam'],
  },
  {
    title: 'Blog & Panduan Event',
    url: '/blog/',
    category: 'core',
    keywords: ['blog eo batam', 'panduan event batam', 'tips event batam'],
  },

  // --- HALAMAN SILO LAYANAN INTI (TIER 2) ---
  {
    title: 'Corporate Gathering Batam',
    url: '/layanan/corporate-gathering-batam/',
    category: 'service',
    keywords: ['corporate gathering batam', 'eo gathering kantor batam', 'company outing batam', 'family day batam'],
  },
  {
    title: 'MICE & Seminar Bisnis Batam',
    url: '/layanan/mice-event-organizer-batam/',
    category: 'service',
    keywords: ['vendor mice batam', 'eo seminar batam', 'konferensi batam', 'simposium bisnis batam'],
  },
  {
    title: 'Outbound & Team Building Batam',
    url: '/layanan/outbound-team-building-batam/',
    category: 'service',
    keywords: ['paket outbound batam', 'team building batam', 'outbound pantai batam', 'fun games gathering'],
  },
  {
    title: 'Gala Dinner & Awarding Night Batam',
    url: '/layanan/gala-dinner-awarding-batam/',
    category: 'service',
    keywords: ['eo gala dinner batam', 'awarding night batam', 'malam keakraban kantor batam', 'anniversary perusahaan batam'],
  },

  // --- ARTIKEL SPOKE BLOG (TIER 4) ---
  {
    title: 'Panduan Estimasi Biaya Corporate Gathering di Batam 2026',
    url: '/blog/estimasi-biaya-corporate-gathering-batam/',
    category: 'blog',
    keywords: ['estimasi biaya gathering batam', 'simulasi rab gathering batam', 'biaya eo gathering per pax'],
  },
  {
    title: 'Prosedur Izin Keramaian Polresta Barelang dan Pajak PBJT Batam',
    url: '/blog/izin-keramaian-polresta-barelang-pajak-bprd-batam/',
    category: 'blog',
    keywords: ['izin keramaian batam', 'izin polresta barelang', 'pajak hiburan bprd batam', 'legalitas event batam'],
  },
  {
    title: 'Rekomendasi Lokasi Outbound Pantai Terbaik di Nongsa dan Barelang',
    url: '/blog/rekomendasi-lokasi-outbound-pantai-batam/',
    category: 'blog',
    keywords: ['lokasi outbound batam', 'pantai outbound nongsa', 'tempat team building pantai barelang'],
  },
  {
    title: 'Rekomendasi Resort Terbaik di Batam untuk Company Gathering Kapasitas 200 Orang',
    url: '/blog/rekomendasi-resort-gathering-batam-kapasitas-200-orang/',
    category: 'blog',
    keywords: ['resort gathering batam 200 orang', 'rekomendasi resort gathering batam', 'venue gathering rombongan besar batam'],
  },
  {
    title: 'Susunan Rundown Acara Gala Dinner Perusahaan di Batam',
    url: '/blog/rundown-gala-dinner-perusahaan-batam/',
    category: 'blog',
    keywords: ['rundown gala dinner batam', 'susunan acara gala dinner', 'rundown awarding night batam', 'agenda annual dinner perusahaan'],
  },
  {
    title: 'SOP Keamanan Panggung Rigging Pantai Outdoor di Batam',
    url: '/blog/mitigasi-cuaca-panggung-rigging-pantai-batam/',
    category: 'blog',
    keywords: ['panggung rigging batam', 'mitigasi angin laut panggung', 'sop panggung pantai batam', 'ballast rigging panggung'],
  },
  {
    title: 'Outbound Rekreasi vs Experiential Learning di Batam',
    url: '/blog/outbound-rekreasi-vs-experiential-learning-batam/',
    category: 'blog',
    keywords: ['outbound rekreasi vs experiential learning', 'outbound karyawan pabrik batam', 'team building mukakuning', 'rasio fasilitator outbound 1:15'],
  },
  {
    title: 'Panduan Konferensi dan Seminar Bisnis Internasional di Batam',
    url: '/blog/panduan-konferensi-seminar-internasional-batam/',
    category: 'blog',
    keywords: ['konferensi bisnis batam', 'seminar internasional batam', 'vendor mice batam center', 'checklist seminar batam', 'eomice batam'],
  },
  {
    title: 'Logistik Pameran Jakarta ke Batam dan Alur PPFTZ 2026',
    url: '/blog/panduan-logistik-pameran-ftz-batam/',
    category: 'blog',
    keywords: ['logistik pameran batam', 'ppftz pemasukan batam', 'pabean ftz batam', 'kirim booth pameran jakarta batam', 'ppbj batam'],
  },
  {
    title: 'Simulasi RAB Family Gathering Karyawan 500 Pax di Batam',
    url: '/blog/simulasi-rab-family-gathering-500-pax-batam/',
    category: 'blog',
    keywords: ['family gathering 500 pax batam', 'simulasi rab gathering batam', 'gathering karyawan mukakuning', 'family day pabrik batam', 'biaya gathering 500 orang'],
  },
  {
    title: 'Kriteria Memilih Master Game dan Fasilitator Outbound Batam',
    url: '/blog/tips-memilih-fasilitator-outbound-batam/',
    category: 'blog',
    keywords: ['fasilitator outbound batam', 'master game outbound', 'jasa fasilitator team building batam', 'rasio fasilitator 1:15', 'vendor outbound nongsa'],
  },
  {
    title: 'Spesifikasi LED Videotron Indoor P2.6 vs Outdoor P3.9 untuk Event Batam',
    url: '/blog/spesifikasi-led-videotron-event-batam/',
    category: 'blog',
    keywords: ['led videotron batam', 'sewa led screen event batam', 'led p2.6 indoor', 'led p3.9 outdoor', 'spesifikasi led videotron event'],
  },
  {
    title: '5 Konsep Tema Gathering Unik untuk Perusahaan Manufaktur dan Galangan Kapal di Batam',
    url: '/blog/ide-tema-corporate-gathering-batam/',
    category: 'blog',
    keywords: ['ide tema corporate gathering batam', 'tema gathering karyawan pabrik', 'tema gathering galangan kapal batam', 'konsep tema family day batam'],
  },
];
