import fs from "node:fs";
import path from "node:path";
import { SITE } from "../src/data/site.ts";
import { projects, DIFFICULTY_LABEL } from "../src/data/projects.ts";
import { skillGroups } from "../src/data/skills.ts";

const langArg = process.argv.find((arg) => arg.startsWith("--lang="));
const lang = langArg?.split("=")[1] === "en" ? "en" : "id";

const rootDir = process.cwd();
const outDir = path.join(rootDir, "dist");
const outFileName =
    lang === "en" ? "portfolio-summary-en.html" : "portfolio-summary.html";
const outHtml = path.join(outDir, outFileName);

const difficultyOrder = { easy: 1, medium: 2, hard: 3, expert: 4 };
const sortedProjects = [...projects].sort((a, b) => {
    if (b.year !== a.year) return b.year - a.year;
    return (
        (difficultyOrder[b.difficulty] ?? 0) -
        (difficultyOrder[a.difficulty] ?? 0)
    );
});

const totalProjects = sortedProjects.length;
const years = [...new Set(sortedProjects.map((project) => project.year))];
const latestYear = years[0];
const minYear = Math.min(...years);
const maxYear = Math.max(...years);
const latestYearProjects = sortedProjects.filter(
    (project) => project.year === latestYear,
).length;

const englishSiteDescription =
    "I build digital products from the ground up, from solid backend architecture to intuitive interfaces. My main strengths are Laravel, Node.js, React.js, Vue.js, and cloud-native architecture.";

const englishProjectCopy = {
    POCI: {
        title: "POCI BPS — Operational Equipment and Inventory Records System",
        desc: "An internal web application for BPS Tegal Regency to manage office operational inventory. It covers equipment and state asset management, borrowing and returns, plus a transaction history dashboard with filtering and data export.",
    },
    SEPAT: {
        title: "SEPAT BPS — Guest Service System",
        desc: "A digital guest service system for BPS Tegal Regency that replaces the manual guest book. Visitors can check in independently, choose the purpose of their visit, and receive notifications, while admins monitor visits in real time through a dashboard.",
    },
    KCA: {
        title: "KCA BPS — District in Figures Data Platform",
        desc: "A district-level statistical data input platform for internal BPS use in Tegal Regency. It supports the preparation of annual official publications and includes anomaly testing to identify whether data values are reasonable based on historical patterns.",
    },
    oneshot: {
        title: "ONESHOT — Photobooth System",
        desc: "An interactive web-based photobooth system that lets users capture photos, apply filters, and share them directly to social media. Built with Next.js and MySQL for strong performance and reliable data management.",
    },
    campustoday: {
        title: "CAMPUSTODAY — E-Learning Platform",
        desc: "A web-based e-learning platform for CPNS and UTBK exam preparation. It includes tryouts, ranking systems, study materials, expert consultation, and payment gateway integration for premium access.",
    },
    kofee: {
        title: "KOFEE — Coffee Leaf Disease Detection",
        desc: "My associate degree final project at UGM: a coffee leaf disease detection system using CNN models ResNet50V2 and InceptionV3. It achieved 92.73% training accuracy, 84.72% validation accuracy, and 86.96% testing accuracy, with diagnosis history and treatment recommendations.",
    },
    teramina: {
        title: "TERAMINA — Shrimp Feed Calculator",
        desc: "A web application that helps shrimp farmers calculate optimal feed composition based on water quality, species, and growth stage. It produces precise feed recommendations to maximize harvest outcomes.",
    },
    onegapos: {
        title: "ONEGAPOS — Cashier Management System",
        desc: "A web-based cashier system designed to simplify sales and inventory management. Features include POS transactions, stock tracking, sales reports, and customer management.",
    },
    rpkps: {
        title: "RPKPS — Semester Learning Program Plan",
        desc: "A web application that helps universities manage semester learning program plans. It includes document management, lecturer collaboration, and approval workflows to support academic compliance.",
    },
    alhijaz: {
        title: "ALHIJAZ — Hajj Platform",
        desc: "An all-in-one online platform built to simplify the Hajj journey. It includes travel information, booking, permits, personal guidance, virtual reality tours, and interactive maps of Makkah and Madinah.",
    },
    sigmahartek: {
        title: "SIGMA HARTEK — Spare Part Landing Page",
        desc: "A company profile website for PT Sigma Hartek, a specialist in industrial spare-part services for pharmaceutical, cosmetic, and food and beverage sectors. It presents core services professionally and clearly.",
    },
    buanaliving: {
        title: "BUANA LIVING — Homestay Landing Page",
        desc: "A company profile landing page for the Buana Living homestay business, showcasing facilities, galleries, and booking information with an attractive responsive layout.",
    },
    k3rs: {
        title: "K3RS — Hospital Health and Safety System",
        desc: "A web application for managing hospital occupational health and safety. It includes incident reporting, risk assessment, training management, and regulatory compliance monitoring to support patient and staff safety.",
    },
    kelapaindonesia: {
        title: "KELAPA INDONESIA — Landing Page",
        desc: "A company profile landing page for Kelapa Indonesia with a responsive design that presents products and company information in a clean, professional way.",
    },
    karuniamas: {
        title: "KARUNIAMAS — Forklift Landing Page",
        desc: "A company profile landing page for a forklift sales and rental business, presenting product catalogs, specifications, and contact details in a tidy and effective layout.",
    },
    livelihood: {
        title: "LIVELIHOOD — Online Store Landing Page",
        desc: "A landing page for the Livelihood online store that highlights featured products and brand information with a clean, mobile-friendly design.",
    },
    expice: {
        title: "EXPICE — Restaurant Landing Page",
        desc: "A restaurant landing page with an appetizing visual direction. It showcases menus, galleries, operating hours, and reservation information in an elegant way.",
    },
};

const categoryLabels = {
    web: { id: "Aplikasi Web", en: "Web App" },
    backend: { id: "Backend", en: "Backend" },
    mobile: { id: "Mobile", en: "Mobile" },
    oss: { id: "Open Source", en: "Open Source" },
    ml: { id: "Machine Learning", en: "Machine Learning" },
    cms: { id: "CMS", en: "CMS" },
    ecommerce: { id: "E-Commerce", en: "E-Commerce" },
    landing: { id: "Landing Page", en: "Landing Page" },
};

const t = {
    id: {
        htmlLang: "id",
        title: "Portfolio Summary",
        metaLabels: ["Nama", "Role", "Lokasi", "Email", "Sorotan"],
        spotlight: `${totalProjects} proyek aktif di portfolio (${years.length} rentang tahun)`,
        focusLabel: "Focus",
        focusTitle: "Daftar project sebagai inti portfolio",
        focusBody:
            "Ringkasan ini menonjolkan proyek-proyek yang menunjukkan spektrum kerja Anda: sistem internal institusi, aplikasi bisnis, machine learning, dan landing page komersial.",
        contactLine: "Kontak & kanal utama",
        executiveOverview: "Executive Overview",
        executiveNote:
            "Ringkasan cepat dari pola kerja, distribusi proyek, dan stack yang paling sering muncul.",
        projectMix: "Project Mix",
        coreSkills: "Core Skills",
        featuredProjects: "Featured Projects",
        featuredNote:
            "Pilihan proyek terbaru atau dengan tingkat kompleksitas tertinggi untuk memberi konteks cepat sebelum masuk ke daftar lengkap.",
        completeProjects: "Complete Project List",
        completeNote:
            "Diurutkan dari terbaru ke terlama, lalu dari tingkat kesulitan tertinggi di tahun yang sama.",
        generatedOn: "Generated from local Astro portfolio data on 14 April 2026",
        overviewCards: [
            {
                title: "Project Coverage",
                body: `${totalProjects} proyek dari ${minYear} sampai ${maxYear}, dengan konsentrasi kuat pada aplikasi web internal, produk bisnis, dan landing page.`,
            },
            {
                title: "Latest Wave",
                body: `${latestYearProjects} proyek terbaru tercatat di ${latestYear}, termasuk sistem BPS untuk inventaris, pelayanan tamu, dan pengolahan data statistik.`,
            },
            {
                title: "Tech Pattern",
                body: `Stack yang paling sering muncul: ${sortedProjects
                    .reduce((acc, project) => {
                        for (const tag of project.primaryTags) {
                            acc.set(tag, (acc.get(tag) ?? 0) + 1);
                        }
                        return acc;
                    }, new Map())
                    .entries()}`,
            },
        ],
    },
    en: {
        htmlLang: "en",
        title: "Portfolio Summary",
        metaLabels: ["Name", "Role", "Location", "Email", "Highlight"],
        spotlight: `${totalProjects} active portfolio projects across ${years.length} time periods`,
        focusLabel: "Focus",
        focusTitle: "Project list as the core of this portfolio",
        focusBody:
            "This summary highlights the projects that represent the breadth of your work: internal institutional systems, business applications, machine learning, and commercial landing pages.",
        contactLine: "Primary contact and channels",
        executiveOverview: "Executive Overview",
        executiveNote:
            "A quick snapshot of work patterns, project distribution, and the stacks that appear most often.",
        projectMix: "Project Mix",
        coreSkills: "Core Skills",
        featuredProjects: "Featured Projects",
        featuredNote:
            "A selection of the newest or highest-complexity work to give fast context before the full list.",
        completeProjects: "Complete Project List",
        completeNote:
            "Sorted from newest to oldest, then by highest difficulty within the same year.",
        generatedOn:
            "Generated from local Astro portfolio data on April 14, 2026",
        overviewCards: [
            {
                title: "Project Coverage",
                body: `${totalProjects} projects from ${minYear} to ${maxYear}, with strong concentration in internal web systems, business products, and landing pages.`,
            },
            {
                title: "Latest Wave",
                body: `${latestYearProjects} latest projects are recorded in ${latestYear}, including BPS systems for inventory, guest services, and statistical data processing.`,
            },
            {
                title: "Tech Pattern",
                body: "",
            },
        ],
    },
}[lang];

const categoryCounts = sortedProjects.reduce((acc, project) => {
    const label = categoryLabels[project.category]?.[lang] ?? project.category;
    acc.set(label, (acc.get(label) ?? 0) + 1);
    return acc;
}, new Map());

const stackCounts = sortedProjects.reduce((acc, project) => {
    for (const tag of project.primaryTags) {
        acc.set(tag, (acc.get(tag) ?? 0) + 1);
    }
    return acc;
}, new Map());

const topStacks = [...stackCounts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .slice(0, 8);

const featuredProjects = sortedProjects
    .filter((project) => project.difficulty === "expert" || project.year >= 2025)
    .slice(0, 6);

const topSkillGroups = skillGroups.slice(0, 4);

const getProjectCopy = (project) => {
    if (lang !== "en") {
        return {
            title: project.title,
            desc: project.desc,
        };
    }

    return {
        title: englishProjectCopy[project.id]?.title ?? project.title,
        desc: englishProjectCopy[project.id]?.desc ?? project.desc,
    };
};

t.overviewCards[2].body =
    lang === "en"
        ? `The most recurring primary stacks are ${topStacks
              .slice(0, 5)
              .map(([stack]) => stack)
              .join(", ")}.`
        : `Stack yang paling sering muncul: ${topStacks
              .slice(0, 5)
              .map(([stack]) => stack)
              .join(", ")}.`;

const escapeHtml = (value) =>
    String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");

const renderBadge = (label, tone = "default") =>
    `<span class="badge badge-${tone}">${escapeHtml(label)}</span>`;

const renderDifficulty = (difficulty) =>
    `<span class="difficulty difficulty-${difficulty}">${escapeHtml(
        DIFFICULTY_LABEL[difficulty],
    )}</span>`;

const renderStats = () => {
    const lines = [
        { label: t.metaLabels[0], value: SITE.name },
        { label: t.metaLabels[1], value: SITE.role },
        { label: t.metaLabels[2], value: SITE.location },
        { label: t.metaLabels[3], value: SITE.email },
        { label: t.metaLabels[4], value: t.spotlight },
    ];

    return lines
        .map(
            (item) => `
                <div class="meta-item">
                    <div class="meta-label">${escapeHtml(item.label)}</div>
                    <div class="meta-value">${escapeHtml(item.value)}</div>
                </div>
            `,
        )
        .join("");
};

const renderOverviewCards = () =>
    t.overviewCards
        .map(
            (card) => `
                <section class="overview-card">
                    <h3>${escapeHtml(card.title)}</h3>
                    <p>${escapeHtml(card.body)}</p>
                </section>
            `,
        )
        .join("");

const renderCategorySummary = () =>
    [...categoryCounts.entries()]
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(
            ([label, count]) => `
                <div class="summary-row">
                    <span>${escapeHtml(label)}</span>
                    <strong>${count}</strong>
                </div>
            `,
        )
        .join("");

const renderSkills = () =>
    topSkillGroups
        .map(
            (group) => `
                <div class="skill-card">
                    <div class="skill-name">${escapeHtml(group.name)}</div>
                    <div class="skill-primary">${escapeHtml(group.primary.join(" • "))}</div>
                    <div class="skill-secondary">${escapeHtml(
                        group.secondary.slice(0, 4).join(" • "),
                    )}</div>
                </div>
            `,
        )
        .join("");

const renderFeaturedProjects = () =>
    featuredProjects
        .map(
            (project) => {
                const copy = getProjectCopy(project);

                return `
                <article class="featured-project">
                    <div class="featured-topline">
                        <span class="project-year">${project.year}</span>
                        ${renderDifficulty(project.difficulty)}
                    </div>
                    <h3>${escapeHtml(copy.title)}</h3>
                    <p>${escapeHtml(copy.desc)}</p>
                    <div class="badge-row">
                        ${project.primaryTags
                            .map((tag) => renderBadge(tag, "primary"))
                            .join("")}
                    </div>
                </article>
            `;
            },
        )
        .join("");

const renderProjects = () =>
    sortedProjects
        .map(
            (project) => {
                const copy = getProjectCopy(project);

                return `
                <article class="project-item">
                    <div class="project-head">
                        <div>
                            <div class="project-kicker">${escapeHtml(project.num)} • ${escapeHtml(
                                categoryLabels[project.category]?.[lang] ?? project.category,
                            )}</div>
                            <h3>${escapeHtml(copy.title)}</h3>
                        </div>
                        <div class="project-meta">
                            <span class="project-year">${project.year}</span>
                            ${renderDifficulty(project.difficulty)}
                        </div>
                    </div>
                    <p class="project-desc">${escapeHtml(copy.desc)}</p>
                    <div class="badge-row">
                        ${project.primaryTags
                            .map((tag) => renderBadge(tag, "primary"))
                            .join("")}
                        ${project.tags.slice(0, 4).map((tag) => renderBadge(tag)).join("")}
                    </div>
                </article>
            `;
            },
        )
        .join("");

const socials = SITE.social
    .map((item) => `${item.platform}: ${item.handle}`)
    .join(" | ");

const html = `<!doctype html>
<html lang="${t.htmlLang}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>${escapeHtml(SITE.name)} - ${escapeHtml(t.title)}</title>
        <style>
            @page {
                size: A4;
                margin: 16mm 14mm 18mm;
            }

            :root {
                --bg: #f6f1e8;
                --paper: #fffdfa;
                --ink: #1b1813;
                --muted: #645a4a;
                --line: #dccfb8;
                --accent: #8f4f2b;
                --accent-soft: #f0e1d3;
                --green: #35694c;
                --amber: #9a6b00;
                --red: #9f3a2d;
                --violet: #6d4aa5;
            }

            * { box-sizing: border-box; }

            html, body {
                margin: 0;
                padding: 0;
                background: var(--bg);
                color: var(--ink);
                font-family: "Helvetica Neue", Arial, sans-serif;
                font-size: 11px;
                line-height: 1.5;
            }

            body {
                background:
                    radial-gradient(circle at top left, rgba(143, 79, 43, 0.08), transparent 28%),
                    linear-gradient(180deg, #f8f4ec 0%, #f4eee2 100%);
            }

            .page { width: 100%; }

            .hero {
                background: linear-gradient(135deg, #221b14 0%, #36291f 60%, #513c2c 100%);
                color: #fff7ee;
                border-radius: 20px;
                padding: 22px 24px;
                display: grid;
                grid-template-columns: 1.7fr 1fr;
                gap: 18px;
                box-shadow: 0 12px 40px rgba(48, 30, 14, 0.16);
            }

            .eyebrow {
                text-transform: uppercase;
                letter-spacing: 0.18em;
                font-size: 9px;
                color: #e3c7ab;
                margin-bottom: 8px;
            }

            h1, h2, h3, p { margin: 0; }

            .hero h1 {
                font-family: "Georgia", "Times New Roman", serif;
                font-size: 30px;
                line-height: 1.05;
                margin-bottom: 10px;
            }

            .hero p {
                color: #eadfd3;
                max-width: 54ch;
            }

            .hero-panel {
                background: rgba(255, 247, 238, 0.08);
                border: 1px solid rgba(255, 247, 238, 0.14);
                border-radius: 16px;
                padding: 14px;
                display: grid;
                gap: 10px;
            }

            .meta-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 10px;
                margin-top: 14px;
            }

            .meta-item {
                background: var(--paper);
                border: 1px solid var(--line);
                border-radius: 14px;
                padding: 12px;
            }

            .meta-label {
                text-transform: uppercase;
                font-size: 8px;
                letter-spacing: 0.16em;
                color: var(--muted);
                margin-bottom: 6px;
            }

            .meta-value {
                font-size: 12px;
                font-weight: 600;
            }

            .section {
                margin-top: 18px;
                background: var(--paper);
                border: 1px solid var(--line);
                border-radius: 18px;
                padding: 18px;
                box-shadow: 0 8px 24px rgba(71, 47, 25, 0.05);
            }

            .section-title {
                display: flex;
                justify-content: space-between;
                align-items: baseline;
                gap: 12px;
                margin-bottom: 14px;
            }

            .section-title h2 {
                font-family: "Georgia", "Times New Roman", serif;
                font-size: 22px;
                line-height: 1.1;
            }

            .section-note {
                color: var(--muted);
                font-size: 10px;
                max-width: 34ch;
                text-align: right;
            }

            .overview-grid,
            .skills-grid,
            .featured-grid {
                display: grid;
                gap: 12px;
            }

            .overview-grid { grid-template-columns: repeat(3, 1fr); }

            .overview-card,
            .skill-card,
            .featured-project {
                border: 1px solid var(--line);
                border-radius: 14px;
                padding: 14px;
                background: linear-gradient(180deg, #fffdfa 0%, #faf5ee 100%);
            }

            .overview-card h3,
            .featured-project h3 {
                font-size: 13px;
                margin-bottom: 6px;
            }

            .overview-card p,
            .featured-project p,
            .skill-secondary {
                color: var(--muted);
            }

            .split {
                display: grid;
                grid-template-columns: 1.05fr 1fr;
                gap: 14px;
            }

            .summary-box {
                border: 1px solid var(--line);
                border-radius: 14px;
                padding: 14px;
                background: #fbf7f1;
            }

            .summary-row {
                display: flex;
                justify-content: space-between;
                gap: 12px;
                padding: 8px 0;
                border-bottom: 1px dashed var(--line);
            }

            .summary-row:last-child {
                border-bottom: 0;
                padding-bottom: 0;
            }

            .skills-grid { grid-template-columns: repeat(2, 1fr); }

            .skill-name {
                font-size: 12px;
                font-weight: 700;
                margin-bottom: 6px;
            }

            .skill-primary {
                font-size: 11px;
                font-weight: 600;
                margin-bottom: 5px;
            }

            .featured-grid { grid-template-columns: repeat(2, 1fr); }

            .featured-topline,
            .project-head,
            .project-meta {
                display: flex;
                justify-content: space-between;
                align-items: flex-start;
                gap: 10px;
            }

            .project-list {
                display: grid;
                gap: 12px;
            }

            .project-item {
                border-top: 1px solid var(--line);
                padding-top: 12px;
                page-break-inside: avoid;
            }

            .project-item:first-child {
                border-top: 0;
                padding-top: 0;
            }

            .project-kicker {
                text-transform: uppercase;
                letter-spacing: 0.12em;
                font-size: 8px;
                color: var(--muted);
                margin-bottom: 4px;
            }

            .project-item h3 {
                font-size: 14px;
                line-height: 1.25;
                margin-bottom: 6px;
                max-width: 48ch;
            }

            .project-desc {
                color: var(--muted);
                margin: 8px 0 10px;
            }

            .badge-row {
                display: flex;
                flex-wrap: wrap;
                gap: 6px;
            }

            .badge {
                display: inline-flex;
                align-items: center;
                border-radius: 999px;
                padding: 4px 8px;
                border: 1px solid var(--line);
                background: #f8f1e7;
                color: #5c503f;
                font-size: 9px;
                font-weight: 600;
            }

            .badge-primary {
                background: var(--accent-soft);
                border-color: #d4b89d;
                color: var(--accent);
            }

            .project-year {
                font-weight: 700;
                font-size: 11px;
                color: var(--accent);
            }

            .difficulty {
                border-radius: 999px;
                padding: 4px 8px;
                font-size: 9px;
                font-weight: 700;
                text-transform: uppercase;
                letter-spacing: 0.08em;
                color: white;
            }

            .difficulty-easy { background: var(--green); }
            .difficulty-medium { background: var(--amber); }
            .difficulty-hard { background: var(--red); }
            .difficulty-expert { background: var(--violet); }

            .footer {
                margin-top: 16px;
                display: flex;
                justify-content: space-between;
                gap: 12px;
                color: var(--muted);
                font-size: 9px;
            }

            .muted { color: var(--muted); }

            @media print {
                .section,
                .hero,
                .project-item,
                .overview-card,
                .skill-card,
                .featured-project {
                    break-inside: avoid;
                }
            }
        </style>
    </head>
    <body>
        <main class="page">
            <section class="hero">
                <div>
                    <div class="eyebrow">${escapeHtml(t.title)}</div>
                    <h1>${escapeHtml(SITE.name)}</h1>
                    <p><strong>${escapeHtml(SITE.role)}</strong> • ${escapeHtml(SITE.tagline)}</p>
                    <p style="margin-top: 10px;">${escapeHtml(
                        lang === "en" ? englishSiteDescription : SITE.description,
                    )}</p>
                    <div class="meta-grid">
                        ${renderStats()}
                    </div>
                </div>
                <aside class="hero-panel">
                    <div class="eyebrow">${escapeHtml(t.focusLabel)}</div>
                    <h3 style="font-size: 18px; line-height: 1.2;">${escapeHtml(t.focusTitle)}</h3>
                    <p>${escapeHtml(t.focusBody)}</p>
                    <div class="badge-row">
                        ${topStacks
                            .slice(0, 6)
                            .map(([stack, count]) => renderBadge(`${stack} (${count})`, "primary"))
                            .join("")}
                    </div>
                    <p class="muted" style="margin-top: 6px;">${escapeHtml(t.contactLine)}: ${escapeHtml(socials)}</p>
                </aside>
            </section>

            <section class="section">
                <div class="section-title">
                    <h2>${escapeHtml(t.executiveOverview)}</h2>
                    <div class="section-note">${escapeHtml(t.executiveNote)}</div>
                </div>
                <div class="overview-grid">
                    ${renderOverviewCards()}
                </div>
                <div class="split" style="margin-top: 14px;">
                    <div class="summary-box">
                        <div class="eyebrow" style="color: var(--muted); margin-bottom: 10px;">${escapeHtml(t.projectMix)}</div>
                        ${renderCategorySummary()}
                    </div>
                    <div class="summary-box">
                        <div class="eyebrow" style="color: var(--muted); margin-bottom: 10px;">${escapeHtml(t.coreSkills)}</div>
                        <div class="skills-grid">
                            ${renderSkills()}
                        </div>
                    </div>
                </div>
            </section>

            <section class="section">
                <div class="section-title">
                    <h2>${escapeHtml(t.featuredProjects)}</h2>
                    <div class="section-note">${escapeHtml(t.featuredNote)}</div>
                </div>
                <div class="featured-grid">
                    ${renderFeaturedProjects()}
                </div>
            </section>

            <section class="section">
                <div class="section-title">
                    <h2>${escapeHtml(t.completeProjects)}</h2>
                    <div class="section-note">${escapeHtml(t.completeNote)}</div>
                </div>
                <div class="project-list">
                    ${renderProjects()}
                </div>
            </section>

            <div class="footer">
                <div>${escapeHtml(t.generatedOn)}</div>
                <div>${escapeHtml(SITE.name)} • ${escapeHtml(SITE.email)}</div>
            </div>
        </main>
    </body>
</html>`;

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(outHtml, html);

console.log(outHtml);
