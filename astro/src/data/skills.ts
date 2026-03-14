// src/data/skills.ts
// ─────────────────────────────────────────
// Edit skill groups, certifications, dll
// ─────────────────────────────────────────

export interface SkillGroup {
  icon: string;
  name: string;
  primary: string[];   // ditampilkan lebih menonjol
  secondary: string[]; // tag biasa
}

export interface Certification {
  id: string;
  name: string;
  provider: string;
  providerShort: string;
  icon: string;
  providerColor: string;
  bgGradient: string;
  thumbnail?: string;  // path dari /public, e.g. '/certs/aws.png'
  issued: string;
  expires: string;
  status: 'active' | 'expired' | 'in-progress';
  verifyUrl?: string;
}

export interface Methodology {
  icon: string;
  name: string;
  sub: string;
}

export const skillGroups: SkillGroup[] = [
  {
    icon: '⚛️',
    name: 'Frontend',
    primary: ['React', 'Next.js', 'TypeScript'],
    secondary: ['JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Sass/SCSS', 'Framer Motion', 'Redux', 'Zustand', 'React Query'],
  },
  {
    icon: '⚙️',
    name: 'Backend',
    primary: ['Node.js', 'Express', 'Fastify'],
    secondary: ['Python', 'FastAPI', 'Django', 'Go', 'GraphQL', 'REST API', 'gRPC', 'WebSocket'],
  },
  {
    icon: '🗄️',
    name: 'Database',
    primary: ['PostgreSQL', 'MySQL'],
    secondary: ['MongoDB', 'Redis', 'Prisma', 'Drizzle ORM', 'Sequelize', 'Elasticsearch', 'SQLite'],
  },
  {
    icon: '☁️',
    name: 'Cloud & DevOps',
    primary: ['AWS', 'Docker'],
    secondary: ['Kubernetes', 'GitHub Actions', 'CI/CD', 'Nginx', 'Linux', 'Terraform', 'Vercel', 'Railway'],
  },
  {
    icon: '📱',
    name: 'Mobile',
    primary: ['React Native', 'Expo'],
    secondary: ['Android (Kotlin)', 'Push Notification', 'App Store Deploy', 'Play Store Deploy'],
  },
  {
    icon: '🧪',
    name: 'Testing & Quality',
    primary: ['Jest', 'Vitest'],
    secondary: ['Playwright', 'Cypress', 'Testing Library', 'Supertest', 'TDD', 'Unit Test', 'E2E Test'],
  },
];

export const certifications: Certification[] = [
  {
    id: 'aws-dev',
    name: 'AWS Certified Developer — Associate',
    provider: 'Amazon Web Services',
    providerShort: 'AWS',
    icon: '☁️',
    providerColor: '#f90',
    bgGradient: 'linear-gradient(135deg, #1a1200 0%, #0d0d0d 60%)',
    thumbnail: undefined,
    issued: 'Nov 2024',
    expires: 'Nov 2027',
    status: 'active',
    verifyUrl: '#',
  },
  {
    id: 'psd',
    name: 'Professional Scrum Developer I (PSD I)',
    provider: 'Scrum.org',
    providerShort: 'Scrum.org',
    icon: '🏅',
    providerColor: '#09f',
    bgGradient: 'linear-gradient(135deg, #001a0d 0%, #0d0d0d 60%)',
    thumbnail: undefined,
    issued: 'Agu 2024',
    expires: 'Tidak Kadaluarsa',
    status: 'active',
    verifyUrl: '#',
  },
  {
    id: 'meta-frontend',
    name: 'Meta Front-End Developer Certificate',
    provider: 'Meta / Coursera',
    providerShort: 'Meta',
    icon: '⚛️',
    providerColor: '#1877f2',
    bgGradient: 'linear-gradient(135deg, #001020 0%, #0d0d0d 60%)',
    thumbnail: undefined,
    issued: 'Mar 2024',
    expires: 'Tidak Kadaluarsa',
    status: 'active',
    verifyUrl: '#',
  },
  {
    id: 'dca',
    name: 'Docker Certified Associate (DCA)',
    provider: 'Docker Inc.',
    providerShort: 'Docker',
    icon: '🐳',
    providerColor: '#2496ed',
    bgGradient: 'linear-gradient(135deg, #001020 0%, #0d0d0d 60%)',
    thumbnail: undefined,
    issued: 'Jan 2024',
    expires: 'Jan 2026',
    status: 'active',
    verifyUrl: '#',
  },
  {
    id: 'security-plus',
    name: 'CompTIA Security+ CE',
    provider: 'CompTIA',
    providerShort: 'CompTIA',
    icon: '🔐',
    providerColor: '#c00',
    bgGradient: 'linear-gradient(135deg, #150010 0%, #0d0d0d 60%)',
    thumbnail: undefined,
    issued: 'Jun 2023',
    expires: 'Jun 2026',
    status: 'active',
    verifyUrl: '#',
  },
  {
    id: 'cka',
    name: 'Kubernetes Administrator (CKA)',
    provider: 'CNCF',
    providerShort: 'CNCF',
    icon: '☸️',
    providerColor: '#326ce5',
    bgGradient: 'linear-gradient(135deg, #00101a 0%, #0d0d0d 60%)',
    thumbnail: undefined,
    issued: 'Target 2025',
    expires: '—',
    status: 'in-progress',
    verifyUrl: undefined,
  },
];

export const methodologies: Methodology[] = [
  { icon: '🔄', name: 'Agile / Scrum', sub: 'Sprint planning, daily standup, retrospective' },
  { icon: '🧪', name: 'Test-Driven Development', sub: 'Write test first, red-green-refactor cycle' },
  { icon: '🌿', name: 'Git Flow', sub: 'Feature branches, pull request, code review' },
  { icon: '🏗️', name: 'Clean Architecture', sub: 'Separation of concerns, SOLID principles' },
  { icon: '🚀', name: 'CI/CD Pipeline', sub: 'Automated testing, deployment, rollback' },
];
