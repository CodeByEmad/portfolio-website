import { EXPERIENCES } from "../constants";
import SpotlightCard from "./SpotlightCard";
import SectionHeader from "./SectionHeader";

const Experience = () => {
return (
    <div className="border-b border-neutral-900 pb-4">
        <SectionHeader index="03" eyebrow="work" title="Experience" />
        <div className="mx-auto max-w-4xl">
            {EXPERIENCES.map((experience, index) => (
                <SpotlightCard key={index} className="mb-8 p-6">
                    <div className="flex flex-col gap-4 text-center sm:text-left lg:flex-row">
                        <div className="w-full lg:w-1/4">
                            <p className="inline-block font-mono text-sm text-violet-400">
                                {experience.year}
                            </p>
                        </div>
                        <div className="w-full max-w-xl lg:w-3/4">
                            <h3 className="mb-2 text-lg font-semibold text-white">
                                {experience.role}
                                <span className="mt-1 block font-body text-sm font-normal text-neutral-400">
                                    {experience.company}
                                </span>
                            </h3>
                            <p className="mb-4 max-w-[65ch] text-neutral-400">
                                {experience.description}
                            </p>
                            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
                            {experience.technologies.map((tech, index) => (
                                <span
                                key={index}
                                className="rounded-md border border-neutral-800 bg-neutral-900/60 px-2.5 py-1 font-mono text-xs text-neutral-300"
                                >
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

export default Experience;
