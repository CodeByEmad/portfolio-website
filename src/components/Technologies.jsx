import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs, TbBrandCSharp } from "react-icons/tb";
import {
    SiMongodb,
    SiJavascript,
    SiTypescript,
    SiPhp,
    SiLaravel,
    SiDotnet,
    SiPostgresql,
    SiMysql,
    SiTailwindcss,
    SiPython,
    SiExpress,
    SiDocker,
} from "react-icons/si";
import { FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt, FaAws } from "react-icons/fa";
import { DiMsqlServer } from "react-icons/di";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const TECHNOLOGIES = [
    { name: "C#", Icon: TbBrandCSharp, color: "text-violet-400", duration: 3.4 },
    { name: ".NET", Icon: SiDotnet, color: "text-purple-400", duration: 5.2 },
    { name: "TypeScript", Icon: SiTypescript, color: "text-blue-400", duration: 2.9 },
    { name: "React", Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
    { name: "Next.js", Icon: TbBrandNextjs, color: "text-white", duration: 3 },
    { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400", duration: 4 },
    { name: "Node.js", Icon: FaNodeJs, color: "text-green-500", duration: 5 },
    { name: "Express", Icon: SiExpress, color: "text-neutral-300", duration: 3.5 },
    { name: "Laravel", Icon: SiLaravel, color: "text-red-500", duration: 2.8 },
    { name: "PHP", Icon: SiPhp, color: "text-indigo-400", duration: 4.2 },
    { name: "MSSQL", Icon: DiMsqlServer, color: "text-rose-400", duration: 3.1 },
    { name: "PostgreSQL", Icon: SiPostgresql, color: "text-sky-400", duration: 2 },
    { name: "MySQL", Icon: SiMysql, color: "text-blue-400", duration: 3.2 },
    { name: "MongoDB", Icon: SiMongodb, color: "text-green-500", duration: 4.5 },
    { name: "Python", Icon: SiPython, color: "text-yellow-300", duration: 4.8 },
    { name: "Tailwind", Icon: SiTailwindcss, color: "text-cyan-300", duration: 2.4 },
    { name: "Docker", Icon: SiDocker, color: "text-sky-500", duration: 3.7 },
    { name: "AWS", Icon: FaAws, color: "text-amber-400", duration: 4.1 },
    { name: "Git", Icon: FaGitAlt, color: "text-orange-600", duration: 2.6 },
    { name: "HTML5", Icon: FaHtml5, color: "text-orange-500", duration: 3.8 },
    { name: "CSS3", Icon: FaCss3Alt, color: "text-blue-500", duration: 4.4 },
];

const Technologies = () => {
    return (
        <div className="border-b border-neutral-900 pb-24">
            <SectionHeader index="02" eyebrow="stack" title="Technologies" />

            <motion.div
                whileInView={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 1 }}
                className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6"
            >
                {TECHNOLOGIES.map(({ name, Icon, color, duration }) => (
                    <div
                        key={name}
                        className="group flex flex-col items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/30 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-neutral-900/60"
                    >
                        <span className="animate-float" style={{ animationDuration: `${duration}s` }}>
                            <Icon className={`text-4xl sm:text-5xl ${color}`} />
                        </span>
                        <span className="font-mono text-xs text-neutral-400 transition-colors group-hover:text-neutral-200">
                            {name}
                        </span>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Technologies;
