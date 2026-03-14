// src/data/site.ts
// ─────────────────────────────────────────
// Edit file ini untuk mengganti informasi Anda
// ─────────────────────────────────────────

export const SITE = {
  name: 'Alex Kurniawan',
  initials: 'AK',
  role: 'Full-Stack Developer',
  tagline: 'Crafting clean code that matters.',
  description:
    'Saya membangun produk digital dari nol — dari arsitektur backend yang solid hingga antarmuka yang intuitif. Spesialis React, Node.js, dan cloud-native architecture.',
  location: 'Yogyakarta, Indonesia',
  email: 'hi@alexk.dev',
  cvFile: '/cv-alex-kurniawan.pdf',
  availableForWork: true,

  social: [
    {
      platform: 'GitHub',
      handle: '@alexkurniawan',
      url: 'https://github.com/alexkurniawan',
      icon: '🐙',
      desc: 'Open source projects & code snippets',
    },
    {
      platform: 'LinkedIn',
      handle: 'Alex Kurniawan',
      url: 'https://linkedin.com/in/alexkurniawan',
      icon: '💼',
      desc: 'Professional network & career updates',
    },
    {
      platform: 'Twitter / X',
      handle: '@alexkdev',
      url: 'https://twitter.com/alexkdev',
      icon: '𝕏',
      desc: 'Tech thoughts, tips & daily dev life',
    },
    {
      platform: 'Instagram',
      handle: '@alexk.dev',
      url: 'https://instagram.com/alexk.dev',
      icon: '📸',
      desc: 'Behind the scenes & workspace setup',
    },
    {
      platform: 'Dev.to',
      handle: '@alexkurniawan',
      url: 'https://dev.to/alexkurniawan',
      icon: '✍️',
      desc: 'Technical articles & tutorials',
    },
    {
      platform: 'Email',
      handle: 'hi@alexk.dev',
      url: 'mailto:hi@alexk.dev',
      icon: '✉️',
      desc: 'Untuk kolaborasi & pertanyaan',
    },
  ],

  stats: [
    { num: '3+', label: 'Tahun Pengalaman' },
    { num: '24', label: 'Proyek Selesai' },
    { num: '12', label: 'Klien Puas' },
    { num: '5',  label: 'Sertifikasi' },
  ],

  timeline: [
    {
      year: '2025',
      title: 'Lead Developer — FinTech Startup',
      desc: 'Memimpin tim 4 developer, arsitektur microservices, integrasi payment gateway.',
    },
    {
      year: '2023',
      title: 'Full-Stack Dev — PT Digital Nusantara',
      desc: 'Membangun dashboard analytics dan sistem inventory real-time.',
    },
    {
      year: '2022',
      title: 'Junior Developer — Web Agency',
      desc: 'Pengembangan website klien dengan React dan WordPress.',
    },
    {
      year: '2021',
      title: 'S1 Teknik Informatika — UGM',
      desc: 'Lulus dengan predikat Cumlaude. Skripsi bidang machine learning.',
    },
  ],

  recentActivity: [
    { date: 'Mar 2025', text: 'Launch SaaS dashboard — React + Supabase' },
    { date: 'Jan 2025', text: 'Open source CLI tool — 400+ GitHub stars' },
    { date: 'Nov 2024', text: 'AWS Certified Developer Associate' },
    { date: 'Sep 2024', text: 'Bergabung sebagai Lead Dev di Startup Fintech' },
  ],

  tools: [
    { icon: '🖥️', name: 'VS Code' },
    { icon: '🐙', name: 'Git / GitHub' },
    { icon: '🐳', name: 'Docker Desktop' },
    { icon: '📮', name: 'Postman' },
    { icon: '🎨', name: 'Figma' },
    { icon: '📊', name: 'Linear' },
    { icon: '📝', name: 'Notion' },
    { icon: '💬', name: 'Slack' },
    { icon: '🔍', name: 'Datadog' },
    { icon: '🗂️', name: 'Jira' },
    { icon: '🌐', name: 'Cloudflare' },
    { icon: '📦', name: 'npm / pnpm' },
    { icon: '🔐', name: '1Password' },
    { icon: '🖱️', name: 'TablePlus' },
    { icon: '🤖', name: 'Claude / ChatGPT' },
  ],

  languages: [
    { name: '🇮🇩 Bahasa Indonesia', level: 'Native' },
    { name: '🇬🇧 English',          level: 'Professional' },
    { name: '🇯🇵 Japanese',         level: 'Basic (N4)' },
  ],

  interests: [
    'Open Source', 'AI & LLM', 'System Design',
    'Developer Tools', 'Web Performance', 'Indie Hacking',
  ],
};
