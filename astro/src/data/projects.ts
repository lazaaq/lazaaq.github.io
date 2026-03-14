// src/data/projects.ts
// ─────────────────────────────────────────
// Tambah / edit / hapus proyek di sini
// thumbnail: letakkan gambar di /public/thumbs/
// ─────────────────────────────────────────

export type Difficulty = "easy" | "medium" | "hard" | "expert";
export type Category =
  | "web"
  | "backend"
  | "mobile"
  | "oss"
  | "ml"
  | "cms"
  | "ecommerce"
  | "landing";

export interface Project {
  id: string;
  num: string;
  featured?: boolean;
  title: string;
  desc: string;
  thumbnail?: string; // path relatif dari /public, e.g. '/thumbs/novapos.png'
  thumbIcon: string; // fallback emoji
  tags: string[];
  primaryTags: string[];
  difficulty: Difficulty;
  category: Category;
  links: { label: string; url: string }[];
  year: number;
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy: "Easy",
  medium: "Medium",
  hard: "Hard",
  expert: "Expert",
};

export const DIFFICULTY_DOTS: Record<Difficulty, number> = {
  easy: 1,
  medium: 2,
  hard: 3,
  expert: 4,
};

export const projects: Project[] = [
  // ── difficulty mapping dari skala 1–10:
  //    1–3 → easy | 4–6 → medium | 7–8 → hard | 9–10 → expert

  {
    id: "oneshot",
    num: "01",
    featured: true,
    title: "ONESHOT — Photobooth System",
    desc: "Sistem photobooth interaktif berbasis web yang memungkinkan pengguna mengambil foto, mengaplikasikan filter, dan berbagi langsung ke media sosial. Dibangun dengan Next.js dan MySQL untuk performa optimal dan manajemen data yang andal.",
    thumbnail: undefined, // ganti: '/thumbs/oneshot.png'
    thumbIcon: "📸",
    primaryTags: ["Next.js", "MySQL"],
    tags: ["REST API", "Social Share", "Filter"],
    difficulty: "hard", // difficulty: 7
    category: "web",
    links: [{ label: "↗ Live", url: "projects/oneshot/" }],
    year: 2025,
  },
  {
    id: "kofee",
    num: "02",
    title: "KOFEE — Coffee Leaf Disease Detection",
    desc: "Proyek tugas akhir D3 di UGM: sistem deteksi penyakit daun kopi menggunakan CNN ResNet50V2 & InceptionV3. Akurasi training 92.73%, validasi 84.72%, testing 86.96%. Dilengkapi dashboard diagnosis, riwayat, dan rekomendasi penanganan.",
    thumbnail: undefined,
    thumbIcon: "☕",
    primaryTags: ["Django", "TensorFlow", "CNN"],
    tags: ["ResNet50V2", "InceptionV3", "Python", "Machine Learning"],
    difficulty: "hard", // difficulty: 8
    category: "ml",
    links: [{ label: "↗ Live", url: "projects/kofee/" }],
    year: 2024,
  },
  {
    id: "campustoday",
    num: "03",
    title: "CAMPUSTODAY — E-Learning Platform",
    desc: "Platform e-learning berbasis web untuk persiapan ujian CPNS dan UTBK. Fitur meliputi tryout, sistem ranking, materi belajar, konsultasi pakar, dan payment gateway untuk akses layanan premium.",
    thumbnail: undefined,
    thumbIcon: "🎓",
    primaryTags: ["Laravel", "React"],
    tags: ["Payment Gateway", "Tryout System", "Ranking", "Auth"],
    difficulty: "expert", // difficulty: 9
    category: "ecommerce",
    links: [], // no public URL
    year: 2024,
  },
  {
    id: "teramina",
    num: "04",
    title: "TERAMINA — Shrimp Feed Calculator",
    desc: "Aplikasi web untuk membantu petambak udang menghitung komposisi pakan optimal berdasarkan parameter kualitas air, spesies, dan tahap pertumbuhan. Menghasilkan rekomendasi formulasi pakan yang presisi untuk memaksimalkan hasil panen.",
    thumbnail: undefined,
    thumbIcon: "🦐",
    primaryTags: ["Vue.js"],
    tags: ["Calculator", "Agritech", "Responsive UI"],
    difficulty: "hard", // difficulty: 7
    category: "web",
    links: [{ label: "↗ Live", url: "projects/teramina/" }],
    year: 2023,
  },
  {
    id: "dekornata",
    num: "05",
    title: "DEKORNATA — Web E-Commerce",
    desc: "Platform e-commerce lengkap dengan katalog produk, keranjang belanja, manajemen order, dan sistem pembayaran terintegrasi. Desain responsif yang meningkatkan pengalaman belanja online dan memperluas jangkauan bisnis.",
    thumbnail: undefined,
    thumbIcon: "🛍️",
    primaryTags: ["Node.js", "Vue.js"],
    tags: ["E-Commerce", "Payment", "Cart", "Order Management"],
    difficulty: "expert", // difficulty: 9
    category: "ecommerce",
    links: [{ label: "↗ Live", url: "https://www.dekornata.com" }],
    year: 2022,
  },
  {
    id: "onegapos",
    num: "06",
    title: "ONEGAPOS — Cashier Management System",
    desc: "Sistem kasir berbasis web untuk menyederhanakan proses penjualan dan manajemen inventaris. Fitur meliputi transaksi POS, tracking stok, laporan penjualan, dan manajemen pelanggan.",
    thumbnail: undefined,
    thumbIcon: "🧾",
    primaryTags: ["Laravel", "Vue.js"],
    tags: ["POS", "Inventory", "Sales Report", "Customer Management"],
    difficulty: "medium", // difficulty: 6
    category: "web",
    links: [{ label: "↗ Live", url: "projects/onegapos/" }],
    year: 2022,
  },
  {
    id: "k3rs",
    num: "07",
    title: "K3RS — Hospital Health & Safety System",
    desc: "Aplikasi web manajemen keselamatan dan kesehatan kerja rumah sakit. Fitur mencakup pelaporan insiden, penilaian risiko, manajemen pelatihan, dan pemantauan kepatuhan regulasi K3 untuk menjamin keselamatan pasien dan staf.",
    thumbnail: undefined,
    thumbIcon: "🏥",
    primaryTags: ["Laravel"],
    tags: ["Incident Report", "Risk Assessment", "Compliance", "Healthcare"],
    difficulty: "hard", // difficulty: 8
    category: "web",
    links: [{ label: "↗ Live", url: "projects/k3rs/" }],
    year: 2021,
  },
  {
    id: "rpkps",
    num: "08",
    title: "RPKPS — Semester Learning Program Plan",
    desc: "Aplikasi web untuk membantu perguruan tinggi mengelola Rencana Program dan Kegiatan Pembelajaran Semester. Fitur manajemen dokumen, kolaborasi antar dosen, dan approval workflow untuk memastikan kepatuhan terhadap standar akademik.",
    thumbnail: undefined,
    thumbIcon: "📋",
    primaryTags: ["Laravel"],
    tags: ["Document Management", "Workflow", "Approval", "Academic"],
    difficulty: "hard", // difficulty: 7
    category: "cms",
    links: [{ label: "↗ Live", url: "/projects/rpkps/" }],
    year: 2022,
  },
  {
    id: "alhijaz",
    num: "09",
    title: "ALHIJAZ — Platform Haji",
    desc: "Platform online all-inclusive untuk menyederhanakan perjalanan ibadah haji. Fitur meliputi informasi perjalanan, pemesanan, perizinan, panduan personal, tur virtual reality, dan peta interaktif kawasan Makkah & Madinah.",
    thumbnail: undefined,
    thumbIcon: "🕌",
    primaryTags: ["Laravel"],
    tags: ["CMS", "VR Tour", "Booking", "Interactive Map"],
    difficulty: "medium", // difficulty: 6
    category: "cms",
    links: [{ label: "↗ Live", url: "projects/alhijaz/" }],
    year: 2022,
  },
  {
    id: "sigmahartek",
    num: "10",
    title: "SIGMA HARTEK — Landing Page Spare Part",
    desc: "Company profile website untuk PT Sigma Hartek, spesialis jasa spare part industri farmasi, kosmetik, dan F&B. Menampilkan layanan Preproduction, Production, Improvement, dan Training secara informatif dan profesional.",
    thumbnail: undefined,
    thumbIcon: "⚙️",
    primaryTags: ["Bootstrap", "JavaScript"],
    tags: ["Company Profile", "Landing Page", "Responsive"],
    difficulty: "easy", // difficulty: 4
    category: "landing",
    links: [{ label: "↗ Live", url: "projects/sigma/index.html" }],
    year: 2022,
  },
  {
    id: "buanaliving",
    num: "11",
    title: "BUANA LIVING — Landing Page Homestay",
    desc: "Landing page company profile untuk bisnis homestay Buana Living. Menampilkan fasilitas, galeri, dan informasi pemesanan dengan tampilan yang menarik dan responsif.",
    thumbnail: undefined,
    thumbIcon: "🏡",
    primaryTags: ["Bootstrap", "JavaScript"],
    tags: ["Company Profile", "Landing Page", "Homestay"],
    difficulty: "easy", // difficulty: 4
    category: "landing",
    links: [{ label: "↗ Live", url: "projects/buana/index.html" }],
    year: 2022,
  },
  {
    id: "kelapaindonesia",
    num: "12",
    title: "KELAPA INDONESIA — Landing Page",
    desc: "Landing page company profile untuk Kelapa Indonesia. Desain responsif yang menampilkan produk dan informasi perusahaan secara bersih dan profesional.",
    thumbnail: undefined,
    thumbIcon: "🌴",
    primaryTags: ["Bootstrap", "JavaScript"],
    tags: ["Company Profile", "Landing Page"],
    difficulty: "easy", // difficulty: 4
    category: "landing",
    links: [{ label: "↗ Live", url: "projects/kelapa/index.html" }],
    year: 2021,
  },
  {
    id: "karuniamas",
    num: "13",
    title: "KARUNIAMAS — Landing Page Forklift",
    desc: "Landing page company profile untuk bisnis jual beli dan sewa forklift Karunia Mas. Menampilkan katalog produk, spesifikasi, dan informasi kontak dengan layout yang rapi.",
    thumbnail: undefined,
    thumbIcon: "🚛",
    primaryTags: ["Bootstrap", "JavaScript"],
    tags: ["Company Profile", "Landing Page", "Forklift"],
    difficulty: "easy", // difficulty: 4
    category: "landing",
    links: [{ label: "↗ Live", url: "projects/forklift/index.html" }],
    year: 2021,
  },
  {
    id: "livelihood",
    num: "14",
    title: "LIVELIHOOD — Landing Page Online Store",
    desc: "Landing page untuk toko online Livelihood. Menampilkan produk unggulan dan informasi brand dengan desain yang bersih dan mobile-friendly.",
    thumbnail: undefined,
    thumbIcon: "🛒",
    primaryTags: ["Bootstrap", "JavaScript"],
    tags: ["Company Profile", "Landing Page", "Online Store"],
    difficulty: "easy", // difficulty: 3
    category: "landing",
    links: [{ label: "↗ Live", url: "projects/livelihood/index.html" }],
    year: 2021,
  },
  {
    id: "expice",
    num: "15",
    title: "EXPICE — Landing Page Restaurant",
    desc: "Landing page restaurant Expice dengan desain yang menggugah selera. Menampilkan menu, galeri, jam operasional, dan informasi reservasi secara elegan.",
    thumbnail: undefined,
    thumbIcon: "🍽️",
    primaryTags: ["Bootstrap", "JavaScript"],
    tags: ["Company Profile", "Landing Page", "Restaurant"],
    difficulty: "easy", // difficulty: 3
    category: "landing",
    links: [{ label: "↗ Live", url: "projects/restaurant/index.html" }],
    year: 2021,
  },
];
