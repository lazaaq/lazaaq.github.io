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
            "Nginx",
            "Apache",
            "Linux",
            "Vercel",
            "Railway",
        ],
    },
    {
        icon: "🧪",
        name: "Testing & Quality",
        primary: ["Jest", "Vitest"],
        secondary: ["Playwright", "Testing Library", "Unit Test"],
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
        id: "google-crash-course-python",
        name: "Crash Course on Python",
        provider: "Google",
        providerShort: "Google",
        icon: "🐍",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/crash_course_python.jpeg",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-python-interact-with-os",
        name: "Using Python to Interact with the Operating System",
        provider: "Google",
        providerShort: "Google",
        icon: "🐍",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/python_interact_with_os.jpeg",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-troubleshooting",
        name: "Troubleshooting and Debugging Techniques",
        provider: "Google",
        providerShort: "Google",
        icon: "🐍",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/troubleshooting.jpeg",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-git-github",
        name: "Introduction to Git and GitHub",
        provider: "Google",
        providerShort: "Google",
        icon: "🐙",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/git_github.jpeg",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "google-foundations-data-data-everywhere",
        name: "Foundations: Data, Data, Everywhere",
        provider: "Google",
        providerShort: "Google",
        icon: "📊",
        providerColor: "#4285F4",
        bgGradient: "linear-gradient(135deg, #0f1a2b 0%, #0d0d0d 60%)",
        thumbnail: "/cert/machine_learning/1_data_data_everywhere.jpeg",
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
        thumbnail: "/cert/machine_learning/2_ask_question_data.jpeg",
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
        thumbnail: "/cert/machine_learning/3_prepare_data.jpeg",
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
        thumbnail: "/cert/machine_learning/4_process_data.jpeg",
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
        thumbnail: "/cert/machine_learning/5_analyze_data.jpeg",
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
        thumbnail: "/cert/machine_learning/6_share_data.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "stanford-learning-algorithms",
        name: "Supervised Learning Algorithms",
        provider: "DeepLearning.AI & Stanford University",
        providerShort: "Stanford",
        icon: "🧠",
        providerColor: "#8C1515",
        bgGradient: "linear-gradient(135deg, #1a0b0b 0%, #0d0d0d 60%)",
        thumbnail:
            "/cert/machine_learning/machine_learning_supervised_learning.jpeg",
        issued: "Apr 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "stanford-advanced-learning-algorithms",
        name: "Advanced Supervised Learning Algorithms",
        provider: "DeepLearning.AI & Stanford University",
        providerShort: "Stanford",
        icon: "🧠",
        providerColor: "#8C1515",
        bgGradient: "linear-gradient(135deg, #1a0b0b 0%, #0d0d0d 60%)",
        thumbnail:
            "/cert/machine_learning/machine_learning_supervised_learning_advanced.jpeg",
        issued: "Apr 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "imperial-multivariate-linear-algebra",
        name: "Mathematics for Machine Learning: Linear Algebra",
        provider: "Imperial College London",
        providerShort: "Imperial",
        icon: "📐",
        providerColor: "#003E74",
        bgGradient: "linear-gradient(135deg, #0b1a2a 0%, #0d0d0d 60%)",
        thumbnail:
            "/cert/machine_learning/mathematics_machine_learning_linear_algebra.jpeg",
        issued: "Mar 2023",
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
            "/cert/machine_learning/mathematics_machine_learning_multivariate_calculus.jpeg",
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
            "/cert/machine_learning/mathematics_machine_learning_pca.jpeg",
        issued: "Mar 2023",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "python-programming",
        name: "Python Programming",
        provider: "Coursera",
        providerShort: "Coursera",
        icon: "🐍",
        providerColor: "#0056D2",
        bgGradient: "linear-gradient(135deg, #0b1220 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/python_programming.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://coursera.org",
    },
    {
        id: "hackerrank-sql-basic",
        name: "SQL (Basic)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/hackerrank-sql-basic.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
    {
        id: "hackerrank-sql-basic",
        name: "SQL (Basic)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/hackerrank-sql-basic.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
    {
        id: "hackerrank-python-basic",
        name: "Python (Basic)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/hackerrank-python-basic.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
    {
        id: "hackerrank-javascript-basic",
        name: "JavaScript (Basic)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/hackerrank-javascript-basic.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
    {
        id: "hackerrank-javascript-intermediate",
        name: "JavaScript (Intermediate)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/hackerrank-javascript-intermediate.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
    {
        id: "hackerrank-problem-solving-basic",
        name: "Problem Solving (Basic)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/hackerrank-problem-solving-basic.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
    {
        id: "hackerrank-problem-solving-intermediate",
        name: "Problem Solving (Intermediate)",
        provider: "HackerRank",
        providerShort: "HackerRank",
        icon: "💻",
        providerColor: "#2EC866",
        bgGradient: "linear-gradient(135deg, #0d1f14 0%, #0d0d0d 60%)",
        thumbnail:
            "/cert/programming/hackerrank-problem-solving-intermediate.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://hackerrank.com",
    },
    {
        id: "jointscamp",
        name: "Jointscamp Certificate",
        provider: "Jointscamp",
        providerShort: "Jointscamp",
        icon: "🏕️",
        providerColor: "#F59E0B",
        bgGradient: "linear-gradient(135deg, #1f1500 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/jointscamp.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "",
    },
    {
        id: "jointscamp-best-team",
        name: "Jointscamp Best Team",
        provider: "Jointscamp",
        providerShort: "Jointscamp",
        icon: "🏆",
        providerColor: "#F59E0B",
        bgGradient: "linear-gradient(135deg, #1f1500 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/jointscamp-best-team.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "",
    },
    {
        id: "dicoding-basic-programming",
        name: "Belajar Dasar Pemrograman Web",
        provider: "Dicoding Indonesia",
        providerShort: "Dicoding",
        icon: "📈",
        providerColor: "#E11D48",
        bgGradient: "linear-gradient(135deg, #2b0f1c 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/basic_programming.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://dicoding.com",
    },
    {
        id: "dicoding-html-css",
        name: "Belajar Dasar HTML & CSS",
        provider: "Dicoding Indonesia",
        providerShort: "Dicoding",
        icon: "📈",
        providerColor: "#E11D48",
        bgGradient: "linear-gradient(135deg, #2b0f1c 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/html_css.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://dicoding.com",
    },
    {
        id: "dicoding-javascript",
        name: "Belajar Dasar JavaScript",
        provider: "Dicoding Indonesia",
        providerShort: "Dicoding",
        icon: "📈",
        providerColor: "#E11D48",
        bgGradient: "linear-gradient(135deg, #2b0f1c 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/javascript.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://dicoding.com",
    },
    {
        id: "dicoding-jquery",
        name: "Belajar jQuery",
        provider: "Dicoding Indonesia",
        providerShort: "Dicoding",
        icon: "📈",
        providerColor: "#E11D48",
        bgGradient: "linear-gradient(135deg, #2b0f1c 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/jquery.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://dicoding.com",
    },
    {
        id: "dicoding-bootstrap",
        name: "Belajar Bootstrap",
        provider: "Dicoding Indonesia",
        providerShort: "Dicoding",
        icon: "📈",
        providerColor: "#E11D48",
        bgGradient: "linear-gradient(135deg, #2b0f1c 0%, #0d0d0d 60%)",
        thumbnail: "/cert/programming/bootstrap.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "https://dicoding.com",
    },
    {
        id: "prep-data-using-r",
        name: "Preparation Data Using R",
        provider: "DQLab",
        providerShort: "DQLab",
        icon: "📐",
        providerColor: "#003E74",
        bgGradient: "linear-gradient(135deg, #0b1a2a 0%, #0d0d0d 60%)",
        thumbnail: "/cert/machine_learning/prep_data_using_r.png",
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
        thumbnail: "/cert/machine_learning/data_visualization.png",
        issued: "Mar 2023",
        expires: "Mar 2026",
        status: "expired",
        verifyUrl: "https://dicoding.com",
    },
    {
        id: "competition-posi-gold",
        name: "POSI Gold",
        provider: "Competition",
        providerShort: "Competition",
        icon: "🥇",
        providerColor: "#F59E0B",
        bgGradient: "linear-gradient(135deg, #1f1200 0%, #0d0d0d 60%)",
        thumbnail: "/cert/competition/posi_gold.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "",
    },
    {
        id: "competition-arkavidia-cp",
        name: "Arkavidia Competitive Programming",
        provider: "Arkavidia",
        providerShort: "Arkavidia",
        icon: "💡",
        providerColor: "#6366F1",
        bgGradient: "linear-gradient(135deg, #0f0b1f 0%, #0d0d0d 60%)",
        thumbnail: "/cert/competition/arkavidia_cp.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "",
    },
    {
        id: "competition-aractf",
        name: "ARA CTF",
        provider: "Arkavidia",
        providerShort: "Arkavidia",
        icon: "🚩",
        providerColor: "#6366F1",
        bgGradient: "linear-gradient(135deg, #0f0b1f 0%, #0d0d0d 60%)",
        thumbnail: "/cert/competition/aractf.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "",
    },
    {
        id: "duolingo-english",
        name: "Duolingo English Certificate",
        provider: "Duolingo",
        providerShort: "Duolingo",
        icon: "🦜",
        providerColor: "#58CC02",
        bgGradient: "linear-gradient(135deg, #0d1f0b 0%, #0d0d0d 60%)",
        thumbnail: "/cert/language/duolingo_certificate.png",
        issued: "",
        expires: "",
        status: "active",
        verifyUrl: "",
    },
];

export const methodologies: Methodology[] = [
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>`,
        name: "Agile / Scrum",
        sub: "Sprint planning, daily standup, retrospective",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>
`,
        name: "Test-Driven Development",
        sub: "Write test first, red-green-refactor cycle",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 98 96" width="32" height="32">
        <path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
        </svg>`,
        name: "Git Flow",
        sub: "Feature branches, pull request, code review",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
                <!-- Handle (rotated rectangle) -->
                <g transform="rotate(-45, 256, 256)">
                    <!-- Brush handle -->
                    <rect x="220" y="80" width="72" height="180" rx="16" fill="#ffffff"/>
                    <!-- Ferrule (metal band) -->
                    <rect x="215" y="245" width="82" height="30" rx="6" fill="#ffffff" opacity="0.7"/>
                    <!-- Brush head -->
                    <rect x="200" y="270" width="112" height="110" rx="18" fill="#ffffff"/>
                    <!-- Bristle tip shape -->
                    <ellipse cx="256" cy="390" rx="56" ry="22" fill="#ffffff" opacity="0.85"/>
                    <!-- Bristle notch (left) -->
                    <ellipse cx="210" cy="375" rx="18" ry="24" fill="#ffffff" opacity="0.5"/>
                </g>

                <!-- Decorative dots -->
                <circle cx="110" cy="130" r="22" fill="#ffffff"/>
                <circle cx="390" cy="320" r="18" fill="#ffffff"/>

                <!-- Plus / sparkle -->
                <rect x="380" y="355" width="14" height="50" rx="7" fill="#ffffff"/>
                <rect x="358" y="377" width="58" height="14" rx="7" fill="#ffffff"/>
                </svg>`,
        name: "Clean Architecture",
        sub: "Separation of concerns, SOLID principles",
    },
    {
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="32" height="32">
            <g fill="none" stroke="#ffffff" stroke-width="18" stroke-linecap="round" stroke-linejoin="round">

                <!-- Left loop (rounded diamond shape) -->
                <path d="M256 256 L178 172 Q128 128 96 172 Q64 216 64 256 Q64 296 96 340 Q128 384 178 340 L256 256"/>
                <path d="M256 256 L178 340 Q128 384 96 340 Q64 296 64 256"/>

                <!-- Right loop (rounded diamond shape) -->
                <path d="M256 256 L334 172 Q384 128 416 172 Q448 216 448 256 Q448 296 416 340 Q384 384 334 340 L256 256"/>
                <path d="M256 256 L334 340 Q384 384 416 340 Q448 296 448 256"/>

                <!-- Node circles - Left loop -->
                <circle cx="178" cy="172" r="14" fill="#ffffff" stroke="#ffffff"/>
                <circle cx="96"  cy="256" r="14" fill="#ffffff" stroke="#ffffff"/>
                <circle cx="178" cy="340" r="14" fill="#ffffff" stroke="#ffffff"/>

                <!-- Node circle - Center -->
                <circle cx="256" cy="256" r="14" fill="#ffffff" stroke="#ffffff"/>

                <!-- Node circles - Right loop -->
                <circle cx="334" cy="172" r="14" fill="#ffffff" stroke="#ffffff"/>
                <circle cx="416" cy="256" r="14" fill="#ffffff" stroke="#ffffff"/>
                <circle cx="334" cy="340" r="14" fill="#ffffff" stroke="#ffffff"/>

            </g>
            </svg>`,
        name: "CI/CD Pipeline",
        sub: "Automated testing, deployment, rollback",
    },
];
