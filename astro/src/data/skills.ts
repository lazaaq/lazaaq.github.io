// src/data/skills.ts
// ─────────────────────────────────────────
// Edit skill groups, certifications, dll
// ─────────────────────────────────────────

export interface SkillGroup {
    icon: string;
    name: string;
    primary: string[]; // ditampilkan lebih menonjol
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
    thumbnail?: string; // path dari /public, e.g. '/certs/aws.png'
    issued: string;
    expires: string;
    status: "active" | "expired" | "in-progress";
    verifyUrl?: string;
}

export interface Methodology {
    icon: string;
    name: string;
    sub: string;
}

export const skillGroups: SkillGroup[] = [
    {
        icon: "⚛️",
        name: "Frontend",
        primary: ["React", "Next.js", "TypeScript"],
        secondary: [
            "JavaScript",
            "HTML5",
            "CSS3",
            "Tailwind CSS",
            "Sass/SCSS",
            "Framer Motion",
            // "Redux",
            // "React Query",
        ],
    },
    {
        icon: "⚙️",
        name: "Backend",
        primary: ["Laravel", "Node.js", "Fastify.js", "Express.js"],
        secondary: [
            "Python",
            "Django",
            "FastAPI",
            "Go",
            "REST API",
            "WebSocket",
        ],
    },
    {
        icon: "🗄️",
        name: "Database",
        primary: ["PostgreSQL", "MySQL"],
        secondary: ["MongoDB", "Redis", "InfluxDB", "SQLite"],
    },
    {
        icon: "☁️",
        name: "Cloud & DevOps",
        primary: ["Docker", "CPanel", "CI/CD"],
        secondary: [
            "AWS",
            "GitHub Actions",
            "CI/CD",
            "Nginx",
            "Linux",
            "Vercel",
            "Railway",
        ],
    },
    {
        icon: "🧪",
        name: "Testing & Quality",
        primary: ["Jest", "Vitest"],
        secondary: [
            "Playwright",
            "Cypress",
            "Testing Library",
            "Supertest",
            "TDD",
            "Unit Test",
            "E2E Test",
        ],
    },
    {
        icon: "🧠",
        name: "Soft Skills & Leadership",
        primary: ["Problem Solving", "Effective Communication"],
        secondary: [
            "Team Collaboration",
            "Time Management",
            "Research",
            "Work Ethics",
        ],
    },
];

export const certifications: Certification[] = [
    {
        id: "google-foundations-data-data-everywhere",
        name: "Foundations: Data, Data, Everywhere",
        provider: "Google",
        providerShort: "Google",
        icon: "📊",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "cert/machine_learning/1_data_data_everywhere.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-ask-questions-data-driven-decisions",
        name: "Ask Questions to Make Data-Driven Decisions",
        provider: "Google",
        providerShort: "Google",
        icon: "📊",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "cert/machine_learning/2_ask_question_data.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-prepare-data-for-exploration",
        name: "Prepare Data for Exploration",
        provider: "Google",
        providerShort: "Google",
        icon: "📊",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "cert/machine_learning/3_prepare_data.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-process-data-from-dirty-to-clean",
        name: "Process Data from Dirty to Clean",
        provider: "Google",
        providerShort: "Google",
        icon: "📊",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "cert/machine_learning/4_process_data.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-analyze-data-to-answer-questions",
        name: "Analyze Data to Answer Questions",
        provider: "Google",
        providerShort: "Google",
        icon: "📊",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "cert/machine_learning/5_analyze_data.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-share-data-through-visualization",
        name: "Share Data Through the Art of Visualization",
        provider: "Google",
        providerShort: "Google",
        icon: "📊",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "cert/machine_learning/6_share_data.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "stanford-advanced-learning-algorithms",
        name: "Advanced Learning Algorithms",
        provider: "DeepLearning.AI & Stanford University",
        providerShort: "Stanford",
        icon: "🧠",
        providerColor: "#8C1515",
        bgGradient: "linear-gradient(135deg, #1a0b0b 0%, #0d0d0d 60%)",
        thumbnail:
            "cert/machine_learning/machine_learning_supervised_learning_advanced.jpeg",
        issued: "Apr 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "imperial-multivariate-calculus",
        name: "Mathematics for Machine Learning: Multivariate Calculus",
        provider: "Imperial College London",
        providerShort: "Imperial",
        icon: "📐",
        providerColor: "#003E74",
        bgGradient: "linear-gradient(135deg, #0b1a2a 0%, #0d0d0d 60%)",
        thumbnail:
            "cert/machine_learning/mathematics_machine_learning_multivariate_calculus.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "imperial-mathematics-pca",
        name: "Mathematics for Machine Learning: PCA",
        provider: "Imperial College London",
        providerShort: "Imperial",
        icon: "📐",
        providerColor: "#003E74",
        bgGradient: "linear-gradient(135deg, #0b1a2a 0%, #0d0d0d 60%)",
        thumbnail:
            "cert/machine_learning/mathematics_machine_learning_pca.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "dicoding-data-visualization",
        name: "Belajar Dasar Visualisasi Data",
        provider: "Dicoding Indonesia",
        providerShort: "Dicoding",
        icon: "📈",
        providerColor: "#E11D48",
        bgGradient: "linear-gradient(135deg, #2b0f1c 0%, #0d0d0d 60%)",
        thumbnail: "cert/machine_learning/data_visualization.png",
        issued: "Mar 2023",
        expires: "Mar 2026",
        status: "expired",
        verifyUrl: "https://dicoding.com",
    },
    {
        id: "hackerrank-sql-basic",
        name: "SQL (Basic)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail: "cert/programming/hackerrank-sql-basic.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
];

export const methodologies: Methodology[] = [
    {
        icon: "🔄",
        name: "Agile / Scrum",
        sub: "Sprint planning, daily standup, retrospective",
    },
    {
        icon: "🧪",
        name: "Test-Driven Development",
        sub: "Write test first, red-green-refactor cycle",
    },
    {
        icon: "🌿",
        name: "Git Flow",
        sub: "Feature branches, pull request, code review",
    },
    {
        icon: "🏗️",
        name: "Clean Architecture",
        sub: "Separation of concerns, SOLID principles",
    },
    {
        icon: "🚀",
        name: "CI/CD Pipeline",
        sub: "Automated testing, deployment, rollback",
    },
];
