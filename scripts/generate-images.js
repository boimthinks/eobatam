import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ensureDir = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

ensureDir('public/images/blog');
ensureDir('public/images/pages');

// Escape XML characters
function escapeXml(unsafe) {
  return String(unsafe)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

// SVG template for 1200x630 Open Graph (OG) Images
function generateOgSvg({ title, subtitle, category = 'OFFICIAL EVENT ORGANIZER' }) {
  const safeTitle = escapeXml(title);
  const safeSubtitle = escapeXml(subtitle);
  const safeCategory = escapeXml(category);

  return `
  <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#001438"/>
        <stop offset="50%" stop-color="#002366"/>
        <stop offset="100%" stop-color="#000d26"/>
      </linearGradient>
      <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00d4ff"/>
        <stop offset="100%" stop-color="#0088cc"/>
      </linearGradient>
      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0, 212, 255, 0.08)" stroke-width="1"/>
      </pattern>
    </defs>

    <!-- Background -->
    <rect width="1200" height="630" fill="url(#bgGrad)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>

    <!-- Decorative Glow Circles -->
    <circle cx="1100" cy="100" r="300" fill="rgba(0, 212, 255, 0.12)" filter="blur(60px)"/>
    <circle cx="100" cy="550" r="250" fill="rgba(0, 35, 102, 0.5)" filter="blur(50px)"/>

    <!-- Top Border Line -->
    <rect x="0" y="0" width="1200" height="8" fill="url(#cyanGrad)"/>

    <!-- Brand Header -->
    <g transform="translate(80, 80)">
      <rect x="0" y="0" width="56" height="56" rx="8" fill="#ffffff"/>
      <text x="28" y="38" font-family="system-ui, sans-serif" font-weight="900" font-size="24" fill="#002366" text-anchor="middle">EO</text>
      
      <text x="74" y="28" font-family="system-ui, sans-serif" font-weight="800" font-size="22" fill="#ffffff" letter-spacing="2">EO BATAM PRODUCTION</text>
      <text x="74" y="50" font-family="monospace" font-weight="700" font-size="14" fill="#00d4ff" letter-spacing="1">EVENT ORGANIZER ALL-IN-ONE TERPERCAYA</text>
    </g>

    <!-- Category Pill -->
    <g transform="translate(80, 180)">
      <rect x="0" y="0" width="280" height="38" rx="6" fill="rgba(0, 212, 255, 0.15)" stroke="#00d4ff" stroke-width="1.5"/>
      <text x="140" y="24" font-family="monospace" font-weight="700" font-size="13" fill="#00d4ff" text-anchor="middle" letter-spacing="1.5">${safeCategory}</text>
    </g>

    <!-- Main Title -->
    <g transform="translate(80, 260)">
      <text x="0" y="45" font-family="system-ui, sans-serif" font-weight="900" font-size="46" fill="#ffffff" letter-spacing="-0.5">
        ${safeTitle}
      </text>
    </g>

    <!-- Subtitle / Value Proposition -->
    <g transform="translate(80, 390)">
      <text x="0" y="25" font-family="system-ui, sans-serif" font-weight="500" font-size="22" fill="#94a3b8">
        ${safeSubtitle}
      </text>
    </g>

    <!-- Bottom Badges / Metadata -->
    <g transform="translate(80, 500)">
      <!-- Badge 1: Location -->
      <rect x="0" y="0" width="220" height="44" rx="6" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
      <text x="110" y="27" font-family="monospace" font-weight="600" font-size="14" fill="#ffffff" text-anchor="middle">BATAM, KEPRI</text>

      <!-- Badge 2: WA -->
      <rect x="240" y="0" width="240" height="44" rx="6" fill="rgba(0, 212, 255, 0.2)" stroke="#00d4ff" stroke-width="1.5"/>
      <text x="360" y="27" font-family="monospace" font-weight="700" font-size="14" fill="#00d4ff" text-anchor="middle">WA: 0813-7370-3639</text>

      <!-- Badge 3: Web -->
      <rect x="500" y="0" width="200" height="44" rx="6" fill="rgba(255, 255, 255, 0.08)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
      <text x="600" y="27" font-family="monospace" font-weight="600" font-size="14" fill="#ffffff" text-anchor="middle">eobatam.web.id</text>
    </g>
  </svg>
  `;
}

// SVG template for 4:3 Aspect Ratio (800x600) Images
function generate4x3Svg({ category, title, subtitle, iconType = 'event' }) {
  // Simple geometric icon representations
  let iconSvg = '';
  if (iconType === 'gathering') {
    iconSvg = `
      <g stroke="#00d4ff" stroke-width="3" fill="none" transform="translate(620, 70)">
        <circle cx="30" cy="20" r="14"/>
        <path d="M10 54 C10 40, 50 40, 50 54"/>
        <circle cx="65" cy="24" r="10"/>
        <path d="M52 54 C52 44, 78 44, 78 54"/>
      </g>`;
  } else if (iconType === 'mice') {
    iconSvg = `
      <g stroke="#00d4ff" stroke-width="3" fill="none" transform="translate(620, 70)">
        <rect x="15" y="15" width="60" height="42" rx="4"/>
        <line x1="30" y1="57" x2="20" y2="70"/>
        <line x1="60" y1="57" x2="70" y2="70"/>
        <line x1="35" y1="36" x2="55" y2="36"/>
      </g>`;
  } else if (iconType === 'outbound') {
    iconSvg = `
      <g stroke="#00d4ff" stroke-width="3" fill="none" transform="translate(620, 70)">
        <polygon points="45,15 15,65 75,65"/>
        <line x1="45" y1="35" x2="45" y2="55"/>
        <circle cx="45" cy="25" r="4" fill="#00d4ff"/>
      </g>`;
  } else if (iconType === 'galadinner') {
    iconSvg = `
      <g stroke="#00d4ff" stroke-width="3" fill="none" transform="translate(620, 70)">
        <polygon points="45,15 54,34 75,37 60,51 64,72 45,61 26,72 30,51 15,37 36,34" fill="rgba(0,212,255,0.2)"/>
      </g>`;
  } else if (iconType === 'legal') {
    iconSvg = `
      <g stroke="#00d4ff" stroke-width="3" fill="none" transform="translate(620, 70)">
        <path d="M45 15 L20 25 V45 C20 60 45 72 45 72 C45 72 70 60 70 45 V25 Z"/>
        <path d="M35 42 L42 49 L55 35"/>
      </g>`;
  } else {
    iconSvg = `
      <g stroke="#00d4ff" stroke-width="3" fill="none" transform="translate(620, 70)">
        <rect x="20" y="20" width="50" height="50" rx="8"/>
        <circle cx="45" cy="45" r="12"/>
      </g>`;
  }

  // Split title if long into 2 lines
  const words = title.split(' ');
  let line1 = title;
  let line2 = '';
  if (words.length > 5) {
    const mid = Math.ceil(words.length / 2);
    line1 = words.slice(0, mid).join(' ');
    line2 = words.slice(mid).join(' ');
  }

  const safeCategory = escapeXml(category.toUpperCase());
  const safeLine1 = escapeXml(line1);
  const safeLine2 = escapeXml(line2);
  const safeSubtitle = escapeXml(subtitle);

  return `
  <svg width="800" height="600" viewBox="0 0 800 600" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cardBg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#001845"/>
        <stop offset="50%" stop-color="#002366"/>
        <stop offset="100%" stop-color="#051026"/>
      </linearGradient>
      <linearGradient id="accentCyan" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#00d4ff"/>
        <stop offset="100%" stop-color="#0066cc"/>
      </linearGradient>
      <pattern id="cardGrid" width="30" height="30" patternUnits="userSpaceOnUse">
        <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(0, 212, 255, 0.07)" stroke-width="1"/>
      </pattern>
    </defs>

    <!-- Card Background -->
    <rect width="800" height="600" fill="url(#cardBg)"/>
    <rect width="800" height="600" fill="url(#cardGrid)"/>

    <!-- Subtle Vignette / Corner Accents -->
    <circle cx="750" cy="50" r="200" fill="rgba(0, 212, 255, 0.1)" filter="blur(40px)"/>
    <circle cx="50" cy="550" r="150" fill="rgba(0, 35, 102, 0.4)" filter="blur(30px)"/>

    <!-- Outer Frame & Accent Bar -->
    <rect x="0" y="0" width="800" height="6" fill="url(#accentCyan)"/>
    <rect x="20" y="20" width="760" height="560" rx="8" fill="none" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1.5"/>

    <!-- Icon on top right -->
    ${iconSvg}

    <!-- Brand Label -->
    <g transform="translate(50, 60)">
      <text x="0" y="16" font-family="monospace" font-weight="700" font-size="12" fill="#00d4ff" letter-spacing="2">EO BATAM PRODUCTION</text>
      <text x="0" y="34" font-family="system-ui, sans-serif" font-weight="600" font-size="11" fill="#94a3b8" letter-spacing="1">EVENT ORGANIZER ALL-IN-ONE</text>
    </g>

    <!-- Category Tag -->
    <g transform="translate(50, 130)">
      <rect x="0" y="0" width="180" height="32" rx="4" fill="rgba(0, 212, 255, 0.12)" stroke="#00d4ff" stroke-width="1.2"/>
      <text x="90" y="21" font-family="monospace" font-weight="700" font-size="12" fill="#00d4ff" text-anchor="middle" letter-spacing="1.5">${safeCategory}</text>
    </g>

    <!-- Main Title Lines -->
    <g transform="translate(50, 220)">
      <text x="0" y="30" font-family="system-ui, sans-serif" font-weight="800" font-size="34" fill="#ffffff" letter-spacing="-0.5">
        ${safeLine1}
      </text>
      ${line2 ? `<text x="0" y="75" font-family="system-ui, sans-serif" font-weight="800" font-size="34" fill="#00d4ff" letter-spacing="-0.5">${safeLine2}</text>` : ''}
    </g>

    <!-- Subtitle / Description -->
    <g transform="translate(50, ${line2 ? 340 : 300})">
      <text x="0" y="20" font-family="system-ui, sans-serif" font-weight="500" font-size="16" fill="#cbd5e1">
        ${safeSubtitle}
      </text>
    </g>

    <!-- Footer Bar inside Card -->
    <g transform="translate(50, 520)">
      <line x1="0" y1="0" x2="700" y2="0" stroke="rgba(255, 255, 255, 0.1)" stroke-width="1"/>
      <text x="0" y="24" font-family="monospace" font-size="11" fill="#64748b">ASPECT RATIO 4:3 • HIGH RESOLUTION</text>
      <text x="700" y="24" font-family="monospace" font-size="11" fill="#00d4ff" text-anchor="end">eobatam.web.id</text>
    </g>
  </svg>
  `;
}

async function buildImages() {
  console.log('Generating website visual assets...');

  // 1. OG Images (1200x630)
  const ogSvg = generateOgSvg({
    title: 'Solusi Event Organizer Terpercaya di Batam',
    subtitle: 'Corporate Gathering • MICE & Seminar • Outbound Pantai • Gala Dinner All-in-One',
    category: 'EO BATAM PRODUCTION'
  });
  
  await sharp(Buffer.from(ogSvg))
    .png()
    .toFile('public/images/og-default.png');
  
  await sharp(Buffer.from(ogSvg))
    .webp({ quality: 90 })
    .toFile('public/images/og-default.webp');
  
  console.log('Created og-default.png & og-default.webp (1200x630)');

  // 2. Default 4:3 Blog Image (800x600)
  const defaultBlogSvg = generate4x3Svg({
    category: 'Blog & Panduan',
    title: 'Panduan Event Organizer Batam',
    subtitle: 'Insight teknis, estimasi RAB, dan regulasi event korporasi di Batam',
    iconType: 'event'
  });
  await sharp(Buffer.from(defaultBlogSvg)).webp({ quality: 90 }).toFile('public/images/blog/default-blog.webp');
  await sharp(Buffer.from(defaultBlogSvg)).png().toFile('public/images/blog/default-blog.png');
  console.log('Created default-blog.webp & default-blog.png (4:3)');

  // 3. Blog Specific 4:3 Images - Hanya generate jika file belum ada
  const blogList = [
    {
      file: 'estimasi-biaya-gathering.webp',
      category: 'Corporate Gathering',
      title: 'Estimasi Biaya Corporate Gathering Batam',
      subtitle: 'Simulasi RAB realistis, komponen F&B, sound system & pemilihan venue',
      iconType: 'gathering'
    },
    {
      file: 'izin-keramaian-batam.webp',
      category: 'Legalitas & Pajak',
      title: 'Prosedur Izin Keramaian Polresta Barelang',
      subtitle: 'Panduan legalitas izin kepolisian dan pajak PBJT BPRD Batam',
      iconType: 'legal'
    },
    {
      file: 'rekomendasi-outbound-batam.webp',
      category: 'Outbound Training',
      title: 'Rekomendasi Outbound Pantai Batam',
      subtitle: 'Spot team building terbaik Nongsa & Barelang beserta mitigasi air laut',
      iconType: 'outbound'
    },
    {
      file: 'resort-gathering-batam.webp',
      category: 'Venue Rekomendasi',
      title: 'Resort Gathering Batam Kapasitas 200 Orang',
      subtitle: 'Komparasi ballroom, pantai privat, dan akses bus rombongan besar',
      iconType: 'gathering'
    },
    {
      file: 'rundown-gala-dinner-perusahaan-batam.webp',
      category: 'Gala Dinner',
      title: 'Susunan Rundown Gala Dinner Batam',
      subtitle: 'Alokasi waktu presisi, transisi panggung awarding & manajemen hiburan',
      iconType: 'galadinner'
    },
    {
      file: 'mitigasi-cuaca-panggung-rigging-pantai-batam.webp',
      category: 'Tips Event',
      title: 'SOP Keamanan Rigging Pantai Batam',
      subtitle: 'Mitigasi angin kencang laut, ballast penyeimbang, dan instalasi genset',
      iconType: 'event'
    },
    {
      file: 'outbound-rekreasi-vs-experiential-learning-batam.webp',
      category: 'Outbound Training',
      title: 'Outbound Rekreasi vs Experiential Learning',
      subtitle: 'Perbandingan program team building karyawan pabrik Batam, rasio 1:15, dan simulasi RAB',
      iconType: 'outbound'
    },
    {
      file: 'panduan-konferensi-seminar-internasional-batam.webp',
      category: 'MICE & Seminar Bisnis',
      title: 'Panduan Konferensi Seminar Internasional',
      subtitle: 'Checklist venue Batam Center, sistem AV, registrasi digital, penerjemah, dan protokol delegasi',
      iconType: 'event'
    },
    {
      file: 'panduan-logistik-pameran-ftz-batam.webp',
      category: 'MICE & Logistik Pameran',
      title: 'Logistik Pameran Jakarta ke Batam',
      subtitle: 'Alur dokumen PPFTZ Pemasukan, PPBJ, moda kirim, dan instalasi booth di venue Batam',
      iconType: 'mice'
    },
    {
      file: 'simulasi-rab-family-gathering-500-pax-batam.webp',
      category: 'Corporate Gathering',
      title: 'Simulasi RAB Family Gathering 500 Pax Batam',
      subtitle: 'Pos anggaran, jadwal shift kerja, logistik bus, dan venue kawasan industri Mukakuning',
      iconType: 'gathering'
    },
    {
      file: 'tips-memilih-fasilitator-outbound-batam.webp',
      category: 'Outbound Training',
      title: 'Kriteria Memilih Fasilitator Outbound Batam',
      subtitle: 'Rasio fasilitator 1:15, uji skenario master game, dan mitigasi pasang surut pantai',
      iconType: 'outbound'
    }
  ];

  for (const b of blogList) {
    const target = path.join('public/images/blog', b.file);

    // Jangan menimpa foto asli (hasil AI generator / dokumentasi event).
    if (fs.existsSync(target) || fs.existsSync(target.replace(/\.webp$/, '.png'))) {
      console.log(`Skipped blog image: ${b.file} (aset sudah tersedia)`);
      continue;
    }

    const svg = generate4x3Svg(b);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(target);
    console.log(`Created blog image: ${b.file} (4:3)`);
  }

  // 4. Page Main Images (4:3) - Hanya generate jika file belum ada
  const pageList = [
    {
      file: 'hero-home.webp',
      category: 'One-Stop Service',
      title: 'Event Organizer All-in-One di Batam',
      subtitle: 'Konsultasi gratis & tim siap datang langsung ke kantor Anda',
      iconType: 'event'
    },
    {
      file: 'layanan-corporate-gathering.webp',
      category: 'Layanan Gathering',
      title: 'Corporate Gathering & Family Day Batam',
      subtitle: 'Manajemen acara temu tahunan, panggung hiburan, dan keakraban tim',
      iconType: 'gathering'
    },
    {
      file: 'layanan-mice-seminar.webp',
      category: 'Layanan MICE',
      title: 'MICE & Konferensi Bisnis Batam',
      subtitle: 'Penyelenggaraan seminar internasional, simposium, dan rapat kerja',
      iconType: 'mice'
    },
    {
      file: 'layanan-outbound-teambuilding.webp',
      category: 'Layanan Outbound',
      title: 'Outbound & Team Building Pantai',
      subtitle: 'Program pengembangan karakter & dinamika kelompok di pantai Batam',
      iconType: 'outbound'
    },
    {
      file: 'layanan-gala-dinner.webp',
      category: 'Layanan Gala Dinner',
      title: 'Gala Dinner & Awarding Night Batam',
      subtitle: 'Tata panggung megah, LED screen videotron, dan pencahayaan artistik',
      iconType: 'galadinner'
    },
    {
      file: 'layanan-default.webp',
      category: 'Katalog Layanan',
      title: 'Solusi Produksi Event Lengkap Batam',
      subtitle: 'Sound system line array, rigging panggung, genset, dan multimedia',
      iconType: 'event'
    },
    {
      file: 'tentang-kami.webp',
      category: 'Profil Perusahaan',
      title: 'Tentang EO Batam Production',
      subtitle: 'Integritas, kepemilikan armada alat mandiri, dan komitmen profesional',
      iconType: 'event'
    },
    {
      file: 'kontak.webp',
      category: 'Hubungi Kami',
      title: 'Konsultasi & Kunjungan Kantor Gratis',
      subtitle: 'Ruko Mega Legenda 2 Batam Kota • WhatsApp 0813-7370-3639',
      iconType: 'legal'
    }
  ];

  for (const p of pageList) {
    const target = path.join('public/images/pages', p.file);

    // Jangan menimpa foto asli (hasil AI generator / dokumentasi event).
    // Cukup letakkan foto di public/images/pages/ dengan nama yang sama.
    if (fs.existsSync(target)) {
      console.log(`Skipped page image: ${p.file} (aset sudah tersedia)`);
      continue;
    }

    const svg = generate4x3Svg(p);
    await sharp(Buffer.from(svg)).webp({ quality: 90 }).toFile(target);
    console.log(`Created page image: ${p.file} (4:3)`);
  }

  console.log('All visual assets generated successfully!');
}

buildImages().catch(console.error);
