/**
 * Central portfolio content — Dev Agarwal
 */

export type Award = {
  icon: "trophy" | "star" | "medal" | "crown";
  tone: "coral" | "cobalt" | "mint" | "ink";
  featured: boolean;
  title: string;
  org: string;
  description: string;
};

export type CompactProject = {
  code: string;
  emoji: string;
  status: "delivered";
  title: string;
  description: string;
  stack: string[];
};

export const portfolio = {
  name: "Dev Agarwal",
  shortName: "dev",
  firstName: "Dev",
  title: "Full Stack Developer",
  tagline: "FULL STACK DEVELOPER — REACT · NODE.JS · MYSQL",
  experienceBadge: "v4+",
  experienceYears: 4,
  location: "Gurgaon, India",
  locationShort: "Gurgaon, IN",
  company: "Aapna Infotheek Pvt. Ltd.",
  openToWork: true,
  openLabel: "Open to new opportunities",
  shippingSince: "shipping since 2021",
  terminalHost: "dev@aapna — ~/release",

  email: "dagarwal499@gmail.com",
  phone: "+91 9808310897",
  phoneSchema: "+91-9808310897",
  linkedin: "https://www.linkedin.com/in/dev-agarwal-5a0696170",
  linkedinHandle: "dev-agarwal",
  github: "https://github.com/dev499/my-portfolio",
  resumePath: "/resume.pdf",

  hero: {
    summary:
      "4+ years building enterprise SaaS at Aapna Infotheek — multi-tenant platforms, white-label logistics, and FinTech integrations with",
    highlight: "page loads cut from 5+ seconds to under 1 second",
    chips: ["5 s → <1 s page load", "+45% performance", "−30% API latency"],
  },

  about: {
    headline: ["Building the web,", "one release", "at a time."],
    paragraphs: [
      {
        before:
          "I'm Dev, a Full Stack Developer with 4+ years of experience shipping enterprise SaaS applications —",
        highlights: [
          { text: "React.js & TypeScript", color: "ink" as const },
          { text: "on the frontend,", color: "plain" as const },
          { text: "Node.js & Express.js", color: "ink" as const },
          { text: "on the backend, and", color: "plain" as const },
          { text: "MySQL", color: "ink" as const },
          { text: "for data at scale.", color: "plain" as const },
        ],
      },
      {
        before: "At",
        company: "Aapna Infotheek Pvt. Ltd.",
        after:
          ", I specialize in multi-tenant architecture, white-label platforms, audit trail systems, performance optimization, and third-party integrations across Logistics and FinTech — including cutting page loads from 5+ seconds to under 1 second and improving application performance by 45%.",
      },
    ],
    currentlyBuilding: {
      label: "Currently building:",
      text: "Deliver Me — logistics enterprise platform",
      boldParts: ["Deliver Me"],
    },
    stats: [
      {
        value: 4,
        suffix: "+",
        label: "Years Experience",
        icon: "briefcase" as const,
        tone: "cobalt" as const,
      },
      {
        value: 45,
        suffix: "%",
        label: "Performance Improvement",
        icon: "users" as const,
        tone: "coral" as const,
      },
      {
        value: 30,
        suffix: "%",
        label: "Faster API Response",
        icon: "package" as const,
        tone: "mint" as const,
      },
    ],
    avatarTags: [
      { label: "React", tone: "cobalt", delay: "0s", side: "left-top" as const, z: 56 },
      { label: "MySQL", tone: "coral", delay: "1.2s", side: "right" as const, z: 48 },
      { label: "Node.js", tone: "mint", delay: "0.6s", side: "left-bottom" as const, z: 52 },
    ],
  },

  skills: {
    title: ["What I ", "work with"],
    subtitle:
      "The technologies I use to ship production software — from browser to server to cloud.",
    categories: [
      {
        title: "Frontend",
        icon: "panels" as const,
        tone: "cobalt" as const,
        items: [
          "React.js",
          "TypeScript",
          "JavaScript (ES6+)",
          "Redux",
          "Responsive Design",
          "HTML5",
          "CSS3",
          "Reusable Components",
          "Performance Optimization",
        ],
      },
      {
        title: "Backend",
        icon: "server" as const,
        tone: "coral" as const,
        items: [
          "Node.js",
          "Express.js",
          "REST APIs",
          "JWT/OAuth",
          "Third-Party APIs",
          "Async Processing",
        ],
      },
      {
        title: "Database & Cloud",
        icon: "cloud" as const,
        tone: "cobalt" as const,
        items: [
          "MySQL",
          "MongoDB",
          "PostgreSQL",
          "MSSQL",
          "Redis",
          "AWS S3",
          "AWS Lambda",
          "AWS EC2",
          "Docker",
        ],
      },
      {
        title: "Integrations",
        icon: "plug" as const,
        tone: "coral" as const,
        items: ["Stripe", "Nylas", "Google APIs", "Webhooks", "Message Queues"],
      },
      {
        title: "Tools & Workflow",
        icon: "wrench" as const,
        tone: "mint" as const,
        items: [
          "Git",
          "GitHub",
          "GitLab",
          "CI/CD",
          "SonarQube",
          "GitHub Copilot",
          "Agile Scrum",
          "Code Reviews",
        ],
      },
    ],
    softSkills: [
      "Performance Optimization",
      "System Design",
      "Client Communication",
      "Mentoring Junior Developers",
    ],
  },

  projects: {
    title: ["Things I've ", "shipped"],
    subtitle:
      "Production systems built for enterprise clients — measured in users served and performance gained.",
    featured: [
      {
        code: "DELIVER",
        emoji: "🚚",
        status: "live" as const,
        title: "Deliver Me",
        description:
          "Enterprise logistics platform with scalable white-label onboarding. Architected multi-tenant solutions for major clients, rebuilt the booking experience, and shipped business-critical modules including UPS address validation, freight pricing, and a full Audit Trail framework.",
        metrics: [
          "Pricing module load time cut from 8 s to 2 s",
          "Two major enterprise clients onboarded via white-label",
          "Audit Trail framework for booking lifecycle visibility",
        ],
        stack: ["React", "Node.js", "Express.js", "MySQL", "REST APIs", "AWS"],
      },
      {
        code: "TCX",
        emoji: "💳",
        status: "live" as const,
        title: "The Closing Exchange",
        description:
          "FinTech platform integrating Stripe, Nylas, and Google APIs for seamless interoperability. Owned complex client delivery, CI/CD on GitLab, Docker/AWS deployments, and scalable Auto Assignment with Node.js, MySQL, Lambda, and Redis.",
        metrics: [
          "200+ complex client requests resolved in production",
          "Fail-safes & AutoProgress to eliminate duplicate executions",
          "Auto Assignment system on Node.js · MySQL · Lambda · Redis",
        ],
        stack: ["React", "Node.js", "MySQL", "Stripe", "AWS Lambda", "Redis"],
      },
    ],
    compact: [
      {
        code: "TENANT",
        emoji: "🏢",
        status: "delivered" as const,
        title: "Multi-Tenant Architecture",
        description:
          "Configuration-driven multi-tenant system with feature flags and tenant-specific permissions — enabling scalable onboarding of enterprise clients across white-label deployments.",
        stack: ["React", "Node.js", "Feature Flags", "MySQL"],
      },
      {
        code: "AUDIT",
        emoji: "📋",
        status: "delivered" as const,
        title: "Audit Trail Framework",
        description:
          "Framework to capture booking lifecycle events and user activities on Deliver Me — improving traceability, operational visibility, and compliance readiness.",
        stack: ["Node.js", "MySQL", "Event Logging"],
      },
    ] as CompactProject[],
  },

  experience: {
    title: "Changelog",
    subtitle:
      "Four years of shipped releases at Aapna Infotheek Pvt. Ltd. — versioned like the software I own.",
    roles: [
      {
        version: "v4.x",
        role: "Full Stack Developer (Consultant)",
        company: "Aapna Infotheek Pvt. Ltd.",
        current: true,
        period: "Dec 2021 – Present",
        location: "New Delhi / Gurgaon, India",
        bullets: [
          {
            tag: "ARCHITECTURE",
            tone: "cobalt" as const,
            text: "Designed a configuration-driven multi-tenant architecture using feature flags and tenant-specific permissions, enabling scalable onboarding of enterprise clients.",
          },
          {
            tag: "PERF",
            tone: "coral" as const,
            text: "Improved application performance by 45% through lazy loading, code splitting, debouncing, bundle optimization, and React rendering optimizations — cutting page loads from 5+ seconds to under 1 second.",
          },
          {
            tag: "FRONTEND",
            tone: "cobaltSolid" as const,
            text: "Revamped UI/UX with responsive design, accessibility, and navigation enhancements, contributing to a 12% increase in website traffic.",
          },
          {
            tag: "BACKEND",
            tone: "mint" as const,
            text: "Optimized backend performance through database query tuning, strategic indexing, and API enhancements, reducing response times by 30%.",
          },
          {
            tag: "QUALITY",
            tone: "muted" as const,
            text: "Enhanced code quality by resolving SonarQube issues, eliminating duplicate code, and mitigating security hotspots.",
          },
          {
            tag: "DELIVERY",
            tone: "ink" as const,
            text: "Delivered production-ready features by collaborating with product, design, and QA teams in Agile development cycles across Logistics and FinTech products.",
          },
        ],
      },
    ],
  },

  recognition: {
    title: ["Awards & ", "credentials"],
    subtitle: "Recognition earned, certifications completed, and the foundation behind them.",
    awards: [
      {
        icon: "trophy" as const,
        tone: "coral" as const,
        featured: true,
        title: "Bomb of the Performance Award ×2",
        org: "Aapna Infotheek Pvt. Ltd.",
        description:
          "Awarded twice — by two different Vice Presidents — for exceptional technical contribution, ownership, and project delivery.",
      },
      {
        icon: "star" as const,
        tone: "cobalt" as const,
        featured: false,
        title: "Rising Star Award",
        org: "Aapna Infotheek Pvt. Ltd.",
        description:
          "Recognized for outstanding performance, rapid growth, and consistent delivery.",
      },
      {
        icon: "medal" as const,
        tone: "mint" as const,
        featured: false,
        title: "1st Runner-Up — Hackathon",
        org: "Organization-wide",
        description:
          "Secured second place competing against top engineering teams from across the organization.",
      },
      {
        icon: "crown" as const,
        tone: "ink" as const,
        featured: false,
        title: "Chess Champion",
        org: "Organization-wide",
        description:
          "Winner of the company-wide chess championship — strategy on and off the keyboard.",
      },
    ] as Award[],
    credentials: [
      {
        icon: "badge" as const,
        tone: "cobalt" as const,
        title: "React – The Complete Guide",
        org: "incl. Next.js & Redux",
        description:
          "In-depth React certification covering component architecture, Redux state management, and Next.js.",
      },
      {
        icon: "badge" as const,
        tone: "mint" as const,
        title: "Complete NodeJS Developer",
        org: "GraphQL, MongoDB & more",
        description:
          "Backend certification covering advanced Node.js, GraphQL, MongoDB, and REST API design.",
      },
      {
        icon: "grad" as const,
        tone: "ink" as const,
        title: "B.Tech — Computer Engineering",
        org: "SRMS College of Engineering Technology & Research, AKTU",
        description:
          "Bachelor in Computer Engineering, Bareilly · 2016 – 2021.",
      },
    ],
  },

  contact: {
    title: ["Let's build something ", "reliable", " together."],
    subtitle: "Have a role or a project in mind? My inbox is open.",
    formPlaceholder: "Hi Dev, I'd like to talk about…",
  },

  seo: {
    description:
      "Full Stack Developer with 4+ years of experience building enterprise SaaS applications with React.js, Node.js, Express.js, MySQL, and REST APIs across Logistics and FinTech.",
    ogDescription:
      "4+ years building enterprise SaaS with React, Node.js, and MySQL. Multi-tenant architecture, white-label platforms, and performance wins — page loads from 5+ seconds to under 1 second.",
    twitterDescription:
      "Full Stack Developer — React • Node.js • MySQL. 4+ years shipping enterprise SaaS in Logistics and FinTech.",
    keywords: [
      "Dev Agarwal",
      "Full Stack Developer",
      "React Developer",
      "Node.js Developer",
      "Express.js",
      "MySQL",
      "TypeScript",
      "Gurgaon",
      "India",
      "SaaS",
      "FinTech",
      "Logistics",
    ],
    knowsAbout: [
      "React",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MySQL",
      "MongoDB",
      "AWS",
      "Redis",
    ],
    education: "SRMS College of Engineering Technology & Research, AKTU",
  },

  typewriterLines: [
    "$ npm run release",
    "> optimizing deliver-me booking module…",
    "> multi-tenant config → production",
    "✓ page load 5s → <1s · shipped",
  ],

  nav: [
    { label: "About", href: "#about" },
    { label: "Stack", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Changelog", href: "#experience" },
    { label: "Awards", href: "#certifications" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
