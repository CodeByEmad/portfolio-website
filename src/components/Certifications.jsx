import { CERTIFICATIONS } from "../constants";
import SpotlightCard from "./SpotlightCard";
import SectionHeader from "./SectionHeader";

const Certifications = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <SectionHeader index="05" eyebrow="credentials" title="Certifications" />
            <div className="mx-auto max-w-4xl">
                {CERTIFICATIONS.map((certifications, index) => (
                    <SpotlightCard key={index} className="mb-8 p-6">
                        <div className="flex flex-col items-center gap-6 text-center sm:text-left lg:flex-row lg:items-start">
                            <div className="flex w-full flex-shrink-0 items-center justify-center overflow-hidden rounded-xl bg-neutral-950/40 p-2 lg:w-[240px]">
                                <img
                                    src={certifications.image}
                                    alt={certifications.title}
                                    loading="lazy"
                                    className="max-h-[200px] w-auto max-w-full rounded-lg object-contain transition-transform duration-500 group-hover/spot:scale-105"
                                />
                            </div>
                            <div className="w-full max-w-xl">
                                <h3 className="mb-2 text-lg font-semibold text-white">{certifications.title}</h3>
                                <p className="mb-4 text-neutral-400">{certifications.description}</p>
                                <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                                    {certifications.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 font-mono text-xs text-neutral-300">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
