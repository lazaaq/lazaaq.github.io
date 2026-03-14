# 🖤 Portfolio — Astro

Portfolio developer personal dibangun dengan [Astro](https://astro.build) — static site generator yang cepat dan modern.

---

## 📁 Struktur Project

```
portfolio-astro/
├── public/
│   ├── favicon.svg
│   ├── thumbs/          ← screenshot project (tambahkan sendiri)
│   ├── certs/           ← gambar sertifikat (tambahkan sendiri)
│   └── cv-alex-kurniawan.pdf  ← ganti dengan CV Anda
│
├── src/
│   ├── data/
│   │   ├── site.ts      ← ⭐ INFO PRIBADI (nama, sosmed, dll)
│   │   ├── projects.ts  ← ⭐ DAFTAR PROYEK
│   │   └── skills.ts    ← ⭐ SKILLS & SERTIFIKASI
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro   ← template HTML dasar
│   │
│   ├── components/
│   │   ├── Nav.astro          ← navigasi (desktop + mobile)
│   │   ├── Footer.astro       ← footer
│   │   ├── ProjectCard.astro  ← card proyek dengan thumbnail & difficulty
│   │   └── CertCard.astro     ← card sertifikat dengan thumbnail
│   │
│   ├── pages/
│   │   ├── index.astro        ← Halaman Home
│   │   ├── portfolio.astro    ← Halaman Portfolio
│   │   └── skills.astro       ← Halaman Skills
│   │
│   └── styles/
│       └── global.css         ← CSS variables, base styles, utilities
│
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

---

## 🚀 Cara Menjalankan

### 1. Install dependencies

```bash
npm install
```

### 2. Jalankan dev server

```bash
npm run dev
```

Buka [http://localhost:4321](http://localhost:4321)

### 3. Build untuk production

```bash
npm run build
npm run preview   # preview hasil build
```

---

## ✏️ Cara Mengedit Konten

Semua konten portfolio tersimpan di folder `src/data/` — **tidak perlu menyentuh kode HTML/komponen** untuk mengganti konten.

### Informasi Pribadi → `src/data/site.ts`

```ts
export const SITE = {
  name: 'Nama Anda',
  role: 'Full-Stack Developer',
  email: 'email@anda.com',
  location: 'Kota, Indonesia',
  // sosial media, stats, timeline, dll...
};
```

### Tambah Proyek → `src/data/projects.ts`

```ts
{
  id: 'nama-project',
  num: '08',
  title: 'Nama Project',
  desc: 'Deskripsi singkat project.',
  thumbnail: '/thumbs/nama-project.png',  // letakkan di /public/thumbs/
  thumbIcon: '🚀',                         // fallback kalau belum ada gambar
  primaryTags: ['React', 'TypeScript'],
  tags: ['PostgreSQL', 'Docker'],
  difficulty: 'hard',   // 'easy' | 'medium' | 'hard' | 'expert'
  category: 'web',      // 'web' | 'backend' | 'mobile' | 'oss'
  links: [
    { label: '↗ Live', url: 'https://...' },
    { label: 'GitHub', url: 'https://...' },
  ],
  year: 2025,
}
```

### Edit Skills → `src/data/skills.ts`

Tambah/hapus skill per kategori di `skillGroups`, atau tambah sertifikasi baru di `certifications`.

### Tambah Thumbnail Sertifikat

Letakkan gambar sertifikat di `/public/certs/nama.png`, lalu set `thumbnail: '/certs/nama.png'` di `certifications`.

### Tambah Foto Profil

Di `src/pages/index.astro`, cari komentar:

```html
<!-- Ganti dengan foto Anda: -->
```

Lalu ganti dengan:

```astro
<img src="/foto.jpg" alt="Nama Anda" />
```

Letakkan file foto di `/public/foto.jpg`.

### Ganti CV

Letakkan file PDF Anda di `/public/` dan update `cvFile` di `site.ts`:

```ts
cvFile: '/cv-nama-anda.pdf',
```

---

## 🎨 Kustomisasi Warna

Edit CSS variables di `src/styles/global.css`:

```css
:root {
  --bg:      #0c0c0c;   /* background utama */
  --surface: #141414;   /* background kartu */
  --border:  #222;      /* warna border */
  --accent:  #e8d5a3;   /* aksen utama (gold) */
  --accent2: #c47f4e;   /* aksen sekunder (amber) */
  --text:    #f0ece4;   /* teks utama */
  --muted:   #6b6560;   /* teks redup */
}
```

---

## 🌐 Deploy

### Vercel (Rekomendasi)

```bash
npm install -g vercel
vercel
```

### Netlify

Drag & drop folder `dist/` setelah `npm run build`, atau connect repo GitHub.

### GitHub Pages

Tambahkan ke `astro.config.mjs`:

```js
export default defineConfig({
  site: 'https://username.github.io',
  base: '/nama-repo',
});
```

---

## 🛠 Tech Stack

- **[Astro 4](https://astro.build)** — Static Site Generator
- **TypeScript** — type-safe data layer
- **CSS Custom Properties** — theming tanpa dependency
- **Google Fonts** — Lora + JetBrains Mono + Outfit

---

> Dibuat dengan ❤️ menggunakan Astro. Zero JS by default, fast by design.
