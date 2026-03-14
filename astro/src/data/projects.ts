// src/data/projects.ts
// ─────────────────────────────────────────
// Tambah / edit / hapus proyek di sini
// thumbnail: letakkan gambar di /public/thumbs/
// ─────────────────────────────────────────

export type Difficulty = 'easy' | 'medium' | 'hard' | 'expert';
export type Category   = 'web' | 'backend' | 'mobile' | 'oss';

export interface Project {
  id: string;
  num: string;
  featured?: boolean;
  title: string;
  desc: string;
  thumbnail?: string;   // path relatif dari /public, e.g. '/thumbs/novapos.png'
  thumbIcon: string;    // fallback emoji
  tags: string[];
  primaryTags: string[];
  difficulty: Difficulty;
  category: Category;
  links: { label: string; url: string }[];
  year: number;
}

export const DIFFICULTY_LABEL: Record<Difficulty, string> = {
  easy:   'Easy',
  medium: 'Medium',
  hard:   'Hard',
  expert: 'Expert',
};

export const DIFFICULTY_DOTS: Record<Difficulty, number> = {
  easy:   1,
  medium: 2,
  hard:   3,
  expert: 4,
};

export const projects: Project[] = [
  {
    id: 'novapos',
    num: '01',
    featured: true,
    title: 'NovaPOS — Point of Sale System',
    desc: 'Sistem kasir modern berbasis web untuk UMKM dengan real-time inventory, laporan analitik, multi-outlet support, dan integrasi payment gateway Midtrans & Xendit. Melayani 200+ merchant aktif.',
    thumbnail: undefined, // ganti: '/thumbs/novapos.png'
    thumbIcon: '🖥️',
    tags: ['PostgreSQL', 'Redis', 'Docker', 'WebSocket'],
    primaryTags: ['React', 'Node.js', 'TypeScript'],
    difficulty: 'expert',
    category: 'web',
    links: [
      { label: '↗ Live Demo', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
    year: 2024,
  },
  {
    id: 'flowapi',
    num: '02',
    title: 'FlowAPI — REST Boilerplate',
    desc: 'RESTful API boilerplate dengan JWT auth, rate limiting, request validation, dan OpenAPI docs otomatis. Digunakan sebagai starter kit oleh 3 tim internal.',
    thumbnail: undefined,
    thumbIcon: '⚡',
    tags: ['Fastify', 'Prisma', 'Zod'],
    primaryTags: ['Node.js', 'TypeScript'],
    difficulty: 'medium',
    category: 'backend',
    links: [{ label: '↗ GitHub', url: '#' }],
    year: 2024,
  },
  {
    id: 'devkit-cli',
    num: '03',
    title: 'devkit-cli',
    desc: 'CLI tool untuk scaffold project dengan opinionated folder structure, lint config, dan CI/CD template. 400+ GitHub stars.',
    thumbnail: undefined,
    thumbIcon: '⌨️',
    tags: ['Commander.js', 'Shell', 'npm'],
    primaryTags: ['Node.js'],
    difficulty: 'easy',
    category: 'oss',
    links: [
      { label: '↗ npm', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
    year: 2025,
  },
  {
    id: 'kualitas-dashboard',
    num: '04',
    title: 'Kualitas Dashboard',
    desc: 'Internal analytics dashboard untuk tim QA — visualisasi bug trends, sprint velocity, dan SLA tracking dengan filter multi-dimensi.',
    thumbnail: undefined,
    thumbIcon: '📊',
    tags: ['Supabase', 'TailwindCSS'],
    primaryTags: ['React', 'Recharts'],
    difficulty: 'medium',
    category: 'web',
    links: [{ label: '↗ Live', url: '#' }],
    year: 2023,
  },
  {
    id: 'budgetin',
    num: '05',
    title: 'BudgetIn',
    desc: 'Aplikasi pencatat keuangan personal dengan kategori otomatis via ML model ringan dan laporan bulanan PDF. 1.200+ downloads di Play Store.',
    thumbnail: undefined,
    thumbIcon: '💰',
    tags: ['FastAPI', 'TensorFlow Lite'],
    primaryTags: ['React Native', 'Expo', 'Python'],
    difficulty: 'hard',
    category: 'mobile',
    links: [
      { label: '↗ Play Store', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
    year: 2024,
  },
  {
    id: 'notif-service',
    num: '06',
    title: 'Notif Service',
    desc: 'Microservice notification hub yang mendukung email, WhatsApp, dan in-app notification dengan message queue dan delivery guarantee.',
    thumbnail: undefined,
    thumbIcon: '🔔',
    tags: ['RabbitMQ', 'Docker', 'gRPC'],
    primaryTags: ['Go'],
    difficulty: 'hard',
    category: 'backend',
    links: [{ label: '↗ GitHub', url: '#' }],
    year: 2023,
  },
  {
    id: 'react-slot-ui',
    num: '07',
    title: 'react-slot-ui',
    desc: 'Headless component library ringan dengan slot pattern untuk komposisi UI yang fleksibel. Zero dependencies, TypeScript-first.',
    thumbnail: undefined,
    thumbIcon: '🧩',
    tags: ['Rollup', 'Storybook'],
    primaryTags: ['React', 'TypeScript'],
    difficulty: 'medium',
    category: 'oss',
    links: [
      { label: '↗ npm', url: '#' },
      { label: 'GitHub', url: '#' },
    ],
    year: 2024,
  },
];
