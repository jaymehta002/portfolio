import {
    CodeIcon,
    FileDown,
    HomeIcon,
    NotebookIcon,
    PencilLine,
  } from "lucide-react";

  export const DATA = {
    name: "Jay Mehta",
    initials: "JM",
    url: "https://jay-mehta.tech",
    location: "India, Madhya Pradesh",
    locationLink: "#",
    description:
      '"Driving innovation with a startup mindset—building MVPs, launching SaaS, and crafting seamless, user-centric products."',
    summary:
      "I am Jay Mehta, a full-stack developer passionate about building modern solutions with JavaScript, Next.js, Prisma, and cutting-edge web technologies.\n\n" +
      "Currently, I'm exploring the worlds of Web3 and AI/ML, combining knowledge to create impactful digital experiences.\n\n" +
      "Some key areas of focus for me include:\n" +
      "- Building scalable, high-performance web applications\n" +
      "- Experimenting with new development frameworks and tools\n\n" +
      "I'd love to connect if you're working on innovative projects or can share mentorship insights as I grow.\n\n" +
      "Let's collaborate if you:\n" +
      "- Have exciting web projects or product ideas\n" +
      "- Want to tackle complex design or development challenges\n" +
      "- Love discussing the future of tech and disruptive innovation\n\n" +
      "I'm always excited to innovate, learn, and collaborate—let's build something remarkable together!",
    avatarUrl: "/me.png",

    // ─── SEO metadata ───
    seo: {
      title: "Jay Mehta — Full-Stack Developer & Product Engineer | India",
      description:
        "Jay Mehta is a full-stack developer from India specializing in Next.js, React, TypeScript, Node.js, and PostgreSQL. Building scalable SaaS platforms, AI-powered tools, and production-ready web applications.",
      keywords: [
        "Jay Mehta", "full stack developer", "full-stack developer India",
        "Next.js developer", "React developer", "TypeScript developer",
        "Node.js developer", "SaaS developer", "web developer India",
        "freelance developer", "product engineer", "startup developer",
        "Prisma developer", "PostgreSQL", "MongoDB developer",
        "AI integration developer", "MVP developer", "frontend developer",
        "backend developer", "MERN stack developer",
        "Jay Mehta portfolio", "jay-mehta.tech",
      ],
      ogImage: "/og-image.png",
      twitterHandle: "@jaymehta002",
      locale: "en_IN",
      type: "website" as const,
    },

    // ─── Stats for Hero / About ───
    stats: [
      { label: "Projects Delivered", value: "10+" },
      { label: "Years of Experience", value: "2+" },
      { label: "Clients Served", value: "5+" },
      { label: "Tech Stack Depth", value: "20+" },
    ],

    // ─── Services / Offerings ───
    services: [
      {
        title: "Full-Stack Web Development",
        description:
          "End-to-end development of web applications using Next.js, React, Node.js, and PostgreSQL — from database design to deployment.",
        keywords: ["Next.js development", "React development", "Node.js API", "PostgreSQL"],
      },
      {
        title: "SaaS Product Development",
        description:
          "Building subscription-based platforms with Stripe billing, user authentication, role-based access, and scalable multi-tenant architecture.",
        keywords: ["SaaS development", "Stripe integration", "multi-tenant", "subscription platform"],
      },
      {
        title: "MVP & Startup Development",
        description:
          "Rapid prototyping and MVP development for startups — validating ideas fast with lean, production-quality code.",
        keywords: ["MVP development", "startup developer", "rapid prototyping", "lean development"],
      },
      {
        title: "AI & Automation Integration",
        description:
          "Integrating OpenAI, LLMs, and custom automation pipelines into existing products to reduce manual work and unlock intelligence.",
        keywords: ["AI integration", "OpenAI API", "LLM integration", "workflow automation"],
      },
      {
        title: "Admin Panels & Dashboards",
        description:
          "Custom admin interfaces for content management, analytics, and database operations — built for speed and usability.",
        keywords: ["admin panel development", "dashboard UI", "CMS development", "data management"],
      },
      {
        title: "SEO & Performance Optimization",
        description:
          "Technical SEO audits, Core Web Vitals optimization, server-side rendering, and lighthouse score improvements for Next.js applications.",
        keywords: ["SEO optimization", "Core Web Vitals", "Next.js SEO", "performance optimization"],
      },
    ],

    // ─── Testimonials ───
    testimonials: [
      {
        name: "GWP Team",
        role: "Fintech Startup",
        content:
          "Jay built our entire financial platform from scratch — Plaid integration, Stripe billing, and a polished dashboard. Delivered on time with production-quality code.",
        project: "GWP",
      },
      {
        name: "Flutteryourway",
        role: "Agency Client",
        content:
          "Three admin panels and multiple SEO-optimized landing pages — all delivered within the contract period. Jay's ability to move fast without sacrificing quality is rare.",
        project: "Flutteryourway",
      },
      {
        name: "Tempo Union Leh",
        role: "Government Project",
        content:
          "The admin panel Jay built streamlined our entire database management process. Reliable, secure, and intuitive to use.",
        project: "Tempo Union",
      },
    ],

    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "C/C++",
      "MongoDB",
      "Firebase",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Material-UI",
      "FastAPI",
      "Git",
      "Figma",
      "Bootstrap",
      "OpenAI",
      "Docker",
      "AWS EC2",
      "Vercel",
      "Stripe",
      "Razorpay",
      "Redis",
      "REST APIs",
      "GraphQL",
      "Framer Motion",
      "Shadcn UI",
      "Clerk",
      "Next-Auth",
      "Zod",
      "React Hook Form",
      "Vite",
      "Webpack",
      "WordPress",
      "LangChain",
      "Pinecone",
      "Hugging Face",
    ],

    // ─── AI & Generative AI expertise ───
    aiExpertise: [
      "OpenAI GPT-4 / GPT-4o Integration",
      "Claude API & Anthropic SDK",
      "LangChain Pipelines",
      "RAG (Retrieval-Augmented Generation)",
      "Vector Databases (Pinecone)",
      "Prompt Engineering & System Prompts",
      "AI Chatbot Development",
      "Streaming LLM Responses (SSE)",
      "Embeddings & Semantic Search",
      "Fine-tuning & Model Selection",
      "AI-Powered Content Generation",
      "Conversational UI / Chat Interfaces",
      "Function Calling & Tool Use",
      "Multi-modal AI (Vision + Text)",
      "AI Workflow Automation",
      "Generative AI for SaaS Products",
    ],

    navbar: [
      { href: "/",  icon: HomeIcon, label: "Home", download: false },
      { href: "#projects",  icon: CodeIcon, label: "Projects", download: false },
      { href: "#contact", icon: PencilLine, label: "Contact", download: false },
      {
        href: "/jay_mehta_resume.pdf",
        label: "Resume",
        download: true,
      },
    ],

    contact: {
      email: "jaymehta002@gmail.com",
      tel: "+919752980888",
      social: {
        GitHub: {
          name: "GitHub",
          url: "https://github.com/jaymehta002",
          navbar: true,
        },
        LinkedIn: {
          name: "LinkedIn",
          url: "https://linkedin.com/in/jaymehta002",
          navbar: true,
        },
        X: {
          name: "X",
          url: "https://x.com/jaymehta002",
          navbar: true,
        },
        email: {
          name: "Send Email",
          url: "mailto:jaymehta002@gmail.com",
          navbar: true,
        },
      },
    },

    work: [
      {
        company: "Flutteryourway",
        href: "#",
        badges: ["Contract"],
        location: "Remote",
        title: "Full Stack Developer",
        logoUrl: "/flutteryourway.png",
        start: "Jan 2024",
        end: "Aug 2024",
        description:
          "- Developed three dynamic admin panels using Vite and Firebase to streamline application management. \n\n" +
          "- Built SEO-optimized landing pages with Next.js, achieving top rankings for key search terms. \n\n" +
          "- Delivered full-stack solutions with Node.js, MongoDB, Stripe, and AWS EC2 for robust and scalable web applications.",
      },
      {
        company: "Metamorph",
        href: "#",
        badges: ["Contract"],
        location: "Remote",
        title: "Full Stack Developer",
        logoUrl: "/metamorph.png",
        start: "Sep 2023",
        end: "Dec 2023",
        description:
          "- Redesigned business website using Vite, Node.js, and MongoDB. \n\n" +
          "- Built admin panel for content management and form tracking. \n\n" +
          "- Customized WordPress themes and plugins for enhanced functionality.",
      },
    ],

    education: [
      {
        school: "Lakshmi Narain College of Technology",
        href: "#",
        degree: "B.Tech, Computer Science and Engineering",
        start: "2020",
        end: "2024",
        logoUrl: "/lnct.png",
      },
    ],

    projects: [
      {
        title: "GWP",
        href: "https://www.dev.joingwp.com",
        dates: "May 2024 - Dec 2024",
        active: true,
        description: "GWP is a growing wealth platform designed to enhance financial asset management, accelerate debt repayment, and improve investment strategies. It provides users with smart financial tools, insights, and integrations for better financial control.",
        technologies: [
          "Next.js",
          "Prisma",
          "PostgreSQL",
          "Stripe",
          "TailwindCSS",
          "Canvas",
          "Plaid",
          "framer-motion"
        ],
        links: [
          {
            type: "Website",
            href: "https://www.dev.joingwp.com",
          }
        ],
        image: "",
        video: "/gwp.mp4"
      },
      {
        title: "Burn.fm",
        href: "https://www.burn.fm",
        dates: "Nov 2024 - Dec 2024",
        active: true,
        description:
          "Burn.fm is a web-based music player merging CD-burning nostalgia with modern streaming. Integrated with Spotify and Stripe, it offers playlist sharing, custom CD designs, and seamless, secure experiences.",
        technologies: [
          "Next.js",
          "Prisma",
          "PostgreSQL",
          "Stripe",
          "TailwindCSS",
          "Canvas",
        ],
        links: [
          {
            type: "Website",
            href: "https://burn.fm/",
          },
        ],
        image: "/burnfm.png",
        video: "",
      },
      {
        title: "Tempo Union",
        href: "https://www.tempounionleh.com/",
        dates: "Nov 2024 - Dec 2024",
        active: true,
        description:
          "Tempo Union Leh is a government project featuring an advanced admin panel for efficient database management. It streamlines data operations, providing powerful tools for secure and seamless administration.",
        technologies: ["Next.js", "Firebase", "Razorpay", "TailwindCSS", "Cloud"],
        links: [
          {
            type: "Website",
            href: "https://www.tempounionleh.com/",
          },
        ],
        image: "",
        video: "/tempo-admin.webm",
      },
      {
        title: "Authcraft",
        href: "https://boilerplate-next-prisma.vercel.app/",
        dates: "Nov 2024 - Dec 2024",
        active: true,
        description:
          "A full-stack web app on GitHub, offering travel management for users & admins. Users book packages, manage bookings & personal info. Admins oversee users, bookings & packages.",
        technologies: [
          "Next.js",
          "ShadCN UI",
          "Next-Auth",
          "TypeScript",
          "Tailwind CSS",
          "Prisma",
          "React Hook Form",
          "Zod Validation",
        ],
        links: [
          {
            type: "Website",
            href: "https://boilerplate-next-prisma.vercel.app/",
          },
          {
            type: "Source",
            href: "https://github.com/jaymehta002/Authcraft",
          },
        ],
        image: "",
        video: "/project-2.webm",
      },
      {
        title: "Casa-mobilia",
        href: "https://casamobilia.in/",
        dates: "Oct 2024 - Dec 2024",
        active: true,
        description:
          "A modern furniture store website built with Next.js, TailwindCSS, and ShadCN UI. It offers responsive design, dynamic product displays, and easy cart management. ShadCN UI provides customizable components, while Next.js ensures performance and SEO optimization.",
        technologies: [
          "Next.js",
          "TypeScript",
          "MongoDB",
          "Mongoose",
          "Clerk",
          "TailwindCSS",
          "Shadcn-UI",
          "Zod",
        ],
        links: [
          {
            type: "Website",
            href: "https://casamobilia.in/",
          },
        ],
        image: "",
        video: "/project-3.webm",
      },
      {
        title: "Cricquest",
        href: "#",
        dates: "Dec 2023 - Jan 2024",
        active: true,
        description:
          "Web-based game using Vite with auto-complete player names and 300+ player stats. Implemented smooth animations with Framer Motion and delivered pixel-perfect UI based on Figma designs.",
        technologies: [
          "MongoDB",
          "Express.js",
          "React",
          "Node.js",
          "TailwindCSS",
        ],
        links: [
          {
            type: "Website",
            href: "https://cricquest.in/",
          },
        ],
        image: "",
        video: "/cricquest.webm",
      },
    ],

    skillsByCategory: {
      Frontend: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 92 },
        { name: "TypeScript", level: 85 },
        { name: "TailwindCSS", level: 90 },
      ],
      Backend: [
        { name: "Node.js", level: 88 },
        { name: "Express.js", level: 85 },
        { name: "Python / FastAPI", level: 70 },
        { name: "REST & GraphQL APIs", level: 82 },
      ],
      Database: [
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 82 },
        { name: "Prisma ORM", level: 88 },
        { name: "Firebase / Firestore", level: 80 },
      ],
      "DevOps & Tools": [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 65 },
        { name: "AWS EC2 / Vercel", level: 78 },
        { name: "CI/CD Pipelines", level: 70 },
      ],
    },

    focusAreas: [
      {
        title: "Full-Stack Product Engineering",
        description:
          "I build complete, production-ready products from backend to frontend — databases, APIs, auth, payments, and polished UI shipped as one cohesive experience.",
        tech: ["Next.js", "Node.js", "Prisma", "PostgreSQL", "Stripe"],
        stat: { value: "10+", label: "Products Shipped" },
      },
      {
        title: "Scalable SaaS Architecture",
        description:
          "Multi-tenant systems, subscription billing, role-based access, and database schemas designed to grow from 0 to 10k users without rewrites.",
        tech: ["Stripe", "Next-Auth", "PostgreSQL", "Redis", "Vercel"],
        stat: { value: "99.9%", label: "Uptime Target" },
      },
      {
        title: "AI & Automation",
        description:
          "LLM-powered features, intelligent form parsing, automated workflows, and conversational interfaces that reduce manual work and unlock real value.",
        tech: ["OpenAI", "Python", "FastAPI", "LangChain", "Webhooks"],
        stat: { value: "5x", label: "Workflow Speedup" },
      },
      {
        title: "Performance & UX",
        description:
          "Lighthouse 95+ scores, sub-second load times, fluid animations, and interfaces that feel intuitive on every device and connection speed.",
        tech: ["Framer Motion", "TailwindCSS", "Lighthouse", "Core Web Vitals"],
        stat: { value: "95+", label: "Lighthouse Score" },
      },
      {
        title: "API Design & Integration",
        description:
          "Clean REST & GraphQL APIs, third-party integrations (Plaid, Spotify, Razorpay), webhook systems, and well-documented developer-friendly endpoints.",
        tech: ["REST", "GraphQL", "Plaid", "Razorpay", "Webhooks"],
        stat: { value: "15+", label: "APIs Integrated" },
      },
      {
        title: "UI Engineering & Design Systems",
        description:
          "Component libraries, design tokens, responsive layouts, and pixel-perfect implementations from Figma — built for consistency across large codebases.",
        tech: ["Shadcn UI", "Figma", "Radix", "TailwindCSS", "Storybook"],
        stat: { value: "50+", label: "Components Built" },
      },
    ],
  } as const;
