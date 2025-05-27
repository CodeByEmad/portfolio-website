import profilePic from "../assets/ProfilePic emad.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
// import { FaInstagram } from "react-icons/fa";
import WordAnimation from "./wordAnimation";
import { motion } from 'framer-motion';
// import resumeImage from '../assets/resume.png'; // Adjust the path according to your structure
import { useState } from "react";
import Modal from "./modal";

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay },
    },
});

const Hero = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-col-reverse lg:flex-row">
                {/* Left section: Text content */}
                <div className="w-full lg:w-1/2 lg:pl-8">
                    <div className="flex flex-col items-center lg:items-start ">
                        <motion.h1
                            variants={container(0)}
                            initial="hidden"
                            animate="visible"
                            className="pb-4 text-4xl lg:text-6xl font-bold tracking-tight lg:mt-26 mt-4 -mb-32 ">
                            Emad Mohammed Habibi
                        </motion.h1>

                        <motion.div
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                            className="text-xl lg:text-3xl font-serif tracking-tight mt-0 mb-4 lg:mb-32 text-center">
                            <WordAnimation />
                        </motion.div>

                        {/* <motion.span
                            variants={container(0.3)}
                            initial="hidden"
                            animate="visible"
                            className="text-xl lg:text-3xl font-thin tracking-tight lg:mt-0">
                            Crafting Tech Solutions That Matter.
                        </motion.span> */}

                        {/* Word Animation Centered Between Text and Social Handles */}
                        
                        {/* Social Links */}
                        <motion.div
                            variants={container(0.75)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center space-x-6 lg:mt-2">
                            <a href="https://www.linkedin.com/in/emad-mohammed-habibi-051b28233/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-white-800 hover:brightness-110">
                                <FaLinkedin size={30} />
                            </a>
                            <a href="https://github.com/CodeByEmad" target="_blank" rel="noopener noreferrer" 
                            className="hover:text-white-800 hover:brightness-110">
                                <FaGithub size={30} />
                            </a>
                            {/* <a href="https://www.instagram.com/_3mxd._/" target="_blank" rel="noopener noreferrer" 
                            className="hover:text-white-800 hover:brightness-110">
                                <FaInstagram size={30} /> */}
                            {/* </a> */}
                            <a href="https://x.com/EmadHabibi10" target="_blank" rel="noopener noreferrer" 
                            className="hover:text-white-800 hover:brightness-110">
                                <FaSquareXTwitter size={30} />
                            </a>
                        </motion.div>

                        {/* Resume and Contact Buttons */}
                        <motion.div
                            variants={container(1.0)}
                            initial="hidden"
                            animate="visible"
                            className="flex justify-center space-x-10 mt-8 mb-8">
                            {/* <a
                                href={resumeImage}
                                download="Emad_resume.png"  // Custom name for the file being downloaded
                                className="flex justify-center items-center border-2 py-3 px-14 lg:px-23 bg-transparent text-white font-semibold rounded-full shadow-md hover:bg-[#850BC3] hover:text-black transition duration-300 whitespace-nowrap">
                                Download CV
                            </a> */}
                            <button
                                onClick={openModal}
                                className="flex justify-center items-center py-3 px-14 lg:px-23 bg-black text-white font-semibold rounded-full shadow-md border-2 border-white hover:bg-white hover:text-black hover:border-black duration-300 whitespace-nowrap">
                                Contact Me
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* Right section: Image */}
                <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
                    <motion.img
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.75 }}
                        className="brightness-80 rounded-full w-[180px] h-[180px] lg:w-[400px] lg:h-[400px] mt-4 sm:-mt-0"
                        src={profilePic} alt="Emad Habibi" />
                </div>
            </div>

            {/* Modal Component */}
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
        </div>
    );
};

export default Hero;