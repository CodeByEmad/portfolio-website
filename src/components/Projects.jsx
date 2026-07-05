import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";
import SpotlightCard from "./SpotlightCard";
import SectionHeader from "./SectionHeader";

const Projects = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <SectionHeader index="04" eyebrow="builds" title="Projects" />

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
                {PROJECTS.map((project, index) => (
                    <SpotlightCard key={index} className="h-full">
                        {/* Image banner */}
                        <div className="relative flex h-[200px] w-full items-center justify-center overflow-hidden border-b border-neutral-800 bg-neutral-950/50 p-3">
                            {project.demo && (
                                <span className="absolute right-3 top-3 z-10 inline-flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-950/40 px-2.5 py-1 text-xs font-medium text-green-300 backdrop-blur">
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                                    </span>
                                    Live
                                </span>
                            )}
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="lazy"
                                className="max-h-full max-w-full rounded-lg object-contain transition-transform duration-500 group-hover/spot:scale-105"
                            />
                        </div>

                        {/* Body */}
                        <div className="flex flex-1 flex-col p-6">
                            <h3 className="mb-2 text-lg font-semibold text-white">{project.title}</h3>
                            <p className="mb-4 flex-1 text-neutral-400">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 font-mono text-xs text-neutral-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-5 flex flex-wrap gap-3">
                                {project.demo && (
                                    <a
                                        href={project.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-violet-950/40 transition-all duration-300 hover:bg-violet-500 active:scale-[0.98]"
                                    >
                                        <HiArrowUpRight size={16} />
                                        Live Demo
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2 text-sm font-medium text-neutral-200 transition-all duration-300 hover:border-violet-500 hover:bg-white/5 hover:text-white active:scale-[0.98]"
                                    >
                                        <FaGithub size={16} />
                                        View Code
                                    </a>
                                )}
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
