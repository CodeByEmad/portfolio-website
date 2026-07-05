import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";
import WordAnimation from "./wordAnimation";
import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "./modal";
import resume from "../resume.pdf";

const container = (delay) => ({
    hidden: { y: 30, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, delay },
    },
});

const socials = [
    { href: "https://www.linkedin.com/in/emad-mohammed-habibi-051b28233/", Icon: FaLinkedin, label: "LinkedIn" },
    { href: "https://github.com/CodeByEmad", Icon: FaGithub, label: "GitHub" },
    { href: "https://x.com/EmadHabibi10", Icon: FaSquareXTwitter, label: "X (Twitter)" },
];

const stats = [
    { value: "2+", label: "Years Experience" },
    { value: "20K+", label: "Daily Orders Processed" },
    { value: "6+", label: "Projects Shipped" },
    { value: "4", label: "Certifications" },
];

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="flex min-h-[88vh] flex-col justify-center border-b border-neutral-900 pb-10">
            <div className="flex w-full flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between lg:gap-8">
                {/* Left: text content */}
                <div className="flex w-full flex-col items-center text-center lg:w-1/2 lg:items-start lg:text-left">
                    {/* Availability badge */}
                    <motion.div
                        variants={container(0)}
                        initial="hidden"
                        animate="visible"
                        className="mb-6 inline-flex items-center gap-2.5 rounded-md border border-neutral-800 bg-neutral-900/60 px-3.5 py-1.5 font-mono text-xs text-neutral-300 backdrop-blur"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                        </span>
                        available for opportunities
                    </motion.div>

                    <motion.h1
                        variants={container(0.1)}
                        initial="hidden"
                        animate="visible"
                        className="w-full font-display text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl"
                        style={{ textWrap: "balance" }}
                    >
                        Emad Mohammed{" "}
                        <span className="text-violet-400">Habibi</span>
                    </motion.h1>

                    <motion.p
                        variants={container(0.2)}
                        initial="hidden"
                        animate="visible"
                        className="mt-4 w-full font-display text-lg font-medium tracking-tight text-neutral-200 sm:text-2xl lg:text-3xl"
                    >
                        Full Stack Developer
                        <span className="text-violet-500/70">{" // "}</span>
                        <span className="text-neutral-400">.NET</span>
                        <span className="text-violet-500/70"> · </span>
                        <span className="text-neutral-400">React</span>
                        <span className="text-violet-500/70"> · </span>
                        <span className="text-neutral-400">TypeScript</span>
                    </motion.p>

                    <motion.div
                        variants={container(0.3)}
                        initial="hidden"
                        animate="visible"
                        className="mt-3 min-h-[2rem] text-base tracking-tight text-neutral-400 lg:text-lg"
                    >
                        <WordAnimation />
                    </motion.div>

                    <motion.p
                        variants={container(0.4)}
                        initial="hidden"
                        animate="visible"
                        className="mt-5 w-full max-w-xl text-neutral-400"
                    >
                        I design and ship backend services end to end: fault-tolerant ASP.NET Core
                        and Laravel systems processing 20,000+ orders a day, with React + TypeScript
                        frontends over MSSQL and PostgreSQL.
                    </motion.p>

                    {/* Social links */}
                    <motion.div
                        variants={container(0.5)}
                        initial="hidden"
                        animate="visible"
                        className="mt-7 flex space-x-5"
                    >
                        {socials.map(({ href, Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-400"
                            >
                                <Icon size={28} />
                            </a>
                        ))}
                    </motion.div>

                    {/* CTA buttons */}
                    <motion.div
                        variants={container(0.6)}
                        initial="hidden"
                        animate="visible"
                        className="mt-9 flex flex-col gap-4 sm:flex-row"
                    >
                        <button
                            onClick={openModal}
                            className="shine relative overflow-hidden rounded-lg bg-violet-600 px-10 py-3 font-semibold text-white shadow-lg shadow-violet-950/50 transition-all duration-300 hover:bg-violet-500 active:scale-[0.98]"
                        >
                            Contact me
                        </button>
                        <a
                            href={resume}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-700 px-10 py-3 font-semibold text-white transition-all duration-300 hover:border-violet-500 hover:bg-white/5 active:scale-[0.98]"
                        >
                            <HiOutlineDocumentText size={20} />
                            View resume
                        </a>
                    </motion.div>
                </div>

                {/* Right: profile image with glowing ring */}
                <div className="flex w-full justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="relative"
                    >
                        {/* Soft violet glow behind the image */}
                        <div className="absolute -inset-6 rounded-[2.5rem] bg-violet-700/25 blur-3xl" />

                        {/* Offset frame — breaks the flat, perfectly-aligned look */}
                        <div
                            aria-hidden="true"
                            className="absolute -right-3 -top-3 h-full w-full rounded-[2rem] border border-violet-500/30"
                        />

                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="relative h-[260px] w-[240px] overflow-hidden rounded-[2rem] border border-neutral-800 shadow-2xl shadow-violet-950/40 lg:h-[420px] lg:w-[380px]"
                        >
                            <img
                                className="h-full w-full scale-100 object-cover object-[50%_30%]"
                                src="/ProfilePic-emad.jpg"
                                alt="Emad Mohammed Habibi"
                                fetchPriority="high"
                                width={380}
                                height={420}
                            />
                            {/* Bottom fade grounds the portrait into the page */}
                            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[#0a0a0c]/70 to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Stats strip */}
            <motion.div
                variants={container(0.7)}
                initial="hidden"
                animate="visible"
                className="mt-14 grid grid-cols-2 gap-6 border-t border-neutral-800 pt-8 sm:grid-cols-4"
            >
                {stats.map(({ value, label }) => (
                    <div key={label} className="text-center lg:text-left">
                        <p className="font-display text-3xl font-semibold tracking-tight text-white [font-variant-numeric:tabular-nums] lg:text-4xl">
                            {value}
                        </p>
                        <p className="mt-1.5 font-mono text-xs text-neutral-500">{label}</p>
                    </div>
                ))}
            </motion.div>

            {/* Modal */}
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

export default Hero;
