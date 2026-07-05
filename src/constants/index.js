import project1 from "../assets/projects/project1.png"
import project5 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.jpg";
import finshark from "../assets/projects/finshark.png";
import certifications1 from "../assets/certifications/certifications1.png";
import certifications2 from "../assets/certifications/certifications2.png"
import certification3 from "../assets/certifications/certification3.jpg"
import certifications from "../assets/certifications/certifications.png"
import microsoftCert from "../assets/certifications/microsoft-fullstack.svg"

export const ABOUT_TEXT = `I'm Emad Mohammed Habibi, a backend-leaning full-stack developer with 2+ years of production experience designing and shipping .NET / ASP.NET Core services, REST APIs, and database-backed business logic. At Anan Alsamaa IT Solutions I own backend systems that process 20,000+ real-time orders a day across .NET and Laravel stacks. I'm currently completing the Microsoft Full-Stack Developer Professional Certificate, and outside of work I lead and serve through Toastmasters and the Hidayah Foundation.`;

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Present",
    role: "Full Stack Developer",
    company: "Anan Alsamaa IT Solutions (Althawaqh Food Co.) | Dammam, Saudi Arabia",
    description: `Own backend systems processing 20,000+ real-time orders a day. Engineered a fault-tolerant .NET + MSSQL order-processing service: REST APIs with multi-layer failure handling, retry logic, and automated alerting on revenue-critical paths. Built and own a Laravel + PostgreSQL delivery integration platform (menu sync, multi-POS order routing for Keeta, Ninja, and Toyou), WebSocket-driven live tracking for delivery drivers, and kitchen-screen order dashboards. Manage deployments across pre-production, staging, and production.`,
    technologies: [".NET", "ASP.NET Core", "MSSQL", "Laravel", "PostgreSQL", "REST APIs", "WebSockets"],
  },
  {
    year: "Jul 2024 – Apr 2025",
    role: "Freelance Full Stack Developer",
    company: "Eftychia Technologies Pvt. Ltd",
    description: `Delivered full-stack feature work across 3–4 concurrent client projects, integrating React frontends with Node.js / Express backends and MongoDB data layers. Refactored high-traffic REST endpoints and database query plans, measurably reducing response times. Performed QA and database testing for a client engagement with Winman Software, executing MSSQL test cases and debugging data-integrity issues.`,
    technologies: ["React", "Node.js", "Express", "MongoDB", "MSSQL", "REST APIs"],
  },
  {
    year: "Jan – Feb 2024",
    role: "Technical Intern",
    company: "Al Rushaid Technologies",
    description: `Contributed to live ERP, AI, and blockchain solution development inside a large industrial-technology group; supported server administration, networking, and security monitoring.`,
    technologies: ["ERP", "Microsoft Dynamics 365", "Networking", "Server Administration", "Blockchain", "AI Solutions"],
  },
];

export const PROJECTS = [
  {
    title: "FinShark: Stock Market & Social Platform",
    image: finshark,
    description:
      "A full-stack stock market and social platform: ASP.NET Core Web API backend, Entity Framework Core data layer, and SQL Server database with a React + TypeScript frontend. Implements JWT authentication with ASP.NET Identity and REST endpoints for stock data, portfolios, and comments.",
    technologies: ["ASP.NET Core", "EF Core", "SQL Server", "React", "TypeScript", "JWT"],
    github: "https://github.com/CodeByEmad/FinShark",
  },
  {
    title: "Genius: AI SaaS Platform",
    image: project1,
    description:
      "A production AI SaaS built on Next.js 13 with Clerk authentication, integrating GPT-3.5 Turbo for conversation, DALL·E for image generation, and a code assistant. Live on Vercel.",
    technologies: ["Next.js", "Vercel", "React", "Clerk", "GPT-3.5 Turbo", "DALL-E"],
    github: "https://github.com/CodeByEmad/GeniusAI",
  },
  {
    title: "Twitter Clone",
    image: project2,
    description:
      "A full-stack social media app with JWT authentication, post management, a follow graph, and Cloudinary image uploads, built on the MERN stack with Tailwind CSS. Deployed on Render.",
    technologies: ["MongoDB", "Express", "React", "TailwindCSS", "Cloudinary", "NodeJS"],
    github: "https://github.com/CodeByEmad/twitter-clone",
    demo: "https://twitter-clone-255w.onrender.com/",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "This site: a single-page portfolio with a disciplined dark design system, scroll-driven motion, and a working contact form. Built with React, Tailwind CSS, and Framer Motion on Vite.",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/CodeByEmad/portfolio-website",
  },
  {
    title: "Image Based Recognition and Classification",
    image: project4,
    description:
      "A deep learning model classifying cat and dog images on a 4,000-image dataset, plus a real-time face mask detection system with OpenCV, TensorFlow, and Keras reaching 99.25% accuracy.",
    technologies: ["Convolutional Neural Network", "OpenCV", "TensorFlow", "Keras"],
    github: "https://github.com/CodeByEmad/Image-Based-Recognition-And-Classification",
  },
  {
    title: "E-Mart: E-commerce Website",
    image: project5,
    description:
      "An e-commerce storefront with a clean, responsive interface built with HTML and CSS, designed for consistent navigation across devices.",
    technologies: ["HTML", "CSS"],
    github: "https://github.com/CodeByEmad/E-mart",
  },
];

export const CERTIFICATIONS = [
  {
    title: "Microsoft Full-Stack Developer Professional Certificate (In Progress)",
    image: microsoftCert,
    description:
      "Microsoft's professional certificate covering the modern .NET toolchain: ASP.NET Core, Entity Framework Core, ASP.NET Identity, Blazor, and Azure. Currently in progress, reinforced through personal projects in ASP.NET Core + SQL Server.",
    technologies: [".NET", "ASP.NET Core", "EF Core", "ASP.NET Identity", "Blazor", "Azure"],
  },
  {
    title: "Web Applications for Everybody (PHP & MySQL)",
    image: certifications,
    description:
      "A University of Michigan specialization on Coursera covering the full stack of interactive web and database applications: dynamic apps in PHP, relational database design with SQL/MySQL, and front-end interactivity with JavaScript, jQuery, and JSON.",
    technologies: ["PHP", "MySQL", "SQL", "JavaScript", "jQuery", "JSON", "Ajax"],
  },
  {
    title: "IBM Data Science Professional Certificate",
    image: certifications2,
    description:
      "Hands-on training in data science and machine learning: Python, SQL, data analysis, and data visualization, culminating in a capstone project.",
    technologies: ["Python", "SQL", "Data Analysis", "Machine Learning", "Data Visualization"],
  },
  {
    title: "Microsoft Power BI",
    image: certification3,
    description:
      "Hands-on skills in data modeling, transformation, and visualization using Microsoft Power BI, building interactive dashboards that support business decisions.",
    technologies: ["Power BI", "Data Modeling", "Data Transformation", "Dashboards"],
  },
  {
    title: "Finance for Non-Financial Professional",
    image: certifications1,
    description:
      "A foundational course in finance and accounting concepts: reading financial statements, ratios, valuation, and costing.",
    technologies: ["Financial Ratios", "Valuation", "Costing", "Financial Statements"],
  },
];

export const CONTACT = {
  address: "Dammam, Saudi Arabia · Open to relocation",
  phoneNo: "+966 50 831 5325",
  email: "emadyanbu@gmail.com",
};
