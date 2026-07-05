import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

// Grouped competencies, mirroring the resume's technical skills section
const SKILL_GROUPS = [
  {
    title: "Languages",
    skills: ["C#", "JavaScript", "TypeScript", "PHP", "Python", "SQL"],
  },
  {
    title: ".NET & Backend",
    skills: ["ASP.NET Core", "EF Core", "ASP.NET Identity", "JWT", "Node.js", "Laravel"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Databases",
    skills: ["MSSQL", "PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    title: "APIs & Real-time",
    skills: ["REST API Design", "WebSockets", "Aggregator Integrations"],
  },
  {
    title: "DevOps & Cloud",
    skills: ["Git", "Docker", "CI/CD", "AWS", "VPC", "Vercel"],
  },
];

// Quick facts recruiters scan for
const FACTS = [
  { label: "location", value: "Dammam, Saudi Arabia" },
  { label: "education", value: "B.Eng. Computer Science, NMAMIT (2025)" },
  { label: "focus", value: ".NET · React · TypeScript" },
  { label: "status", value: "Open to relocation" },
];

const About = () => {
  return (
    <div className="mt-16">
      <SectionHeader index="01" eyebrow="about" title="About" accent="me" />

      <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
        {/* Left: portrait + quick facts */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -60 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto w-full max-w-xs flex-shrink-0 lg:mx-0 lg:w-[320px]"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-violet-700/20 blur-2xl" />
            <img
              className="relative w-full rounded-2xl border border-neutral-800 object-cover shadow-lg shadow-violet-950/40"
              src={aboutImg}
              alt="Emad Mohammed Habibi"
            />
          </div>

          <dl className="mt-6 divide-y divide-neutral-800/80 border-y border-neutral-800/80">
            {FACTS.map(({ label, value }) => (
              <div key={label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="font-mono text-xs tracking-widest text-neutral-500">{label}</dt>
                <dd className="text-right text-sm text-neutral-300">{value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        {/* Right: intro + competencies */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 60 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full flex-1"
        >
          <p className="mb-10 max-w-[65ch] leading-relaxed text-neutral-300">{ABOUT_TEXT}</p>

          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {SKILL_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 font-mono text-xs tracking-widest text-neutral-500">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-neutral-800 bg-neutral-900/60 px-3 py-1.5 font-mono text-xs text-neutral-300 transition-colors duration-300 hover:border-violet-500/60 hover:text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
