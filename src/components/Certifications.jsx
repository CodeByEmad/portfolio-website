import { CERTIFICATIONS } from "../constants";
import { motion } from "framer-motion";

const Certifications = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl">Certifications</motion.h2>
            <div>
                {CERTIFICATIONS.map((certifications, index) => (
                    <div key={index} className="mb-8 flex flex-wrap justify-center lg:justify-center sm:justify-center">
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: -100 }}
                            transition={{ duration: 1 }}
                            className="w-full lg:w-1/4 flex justify-center lg:justify-start">
                            <img
                                src={certifications.image}
                                width={200}
                                height={200}
                                alt={certifications.title}
                                className="mb-12 rounded"
                            />
                        </motion.div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }} className="w-full max-w-xl text-center sm:text-left lg:w-3/4">
                            <h6 className="mb-2 font-semibold">{certifications.title}</h6>
                            <p className="mb-4 text-neutral-400 text-justify">{certifications.description}</p>
                            <div className="flex flex-wrap">
                                {certifications.technologies.map((tech, index) => (
                                    <span
                                        key={index}
                                        className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-900">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
