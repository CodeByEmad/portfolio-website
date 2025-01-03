// import logo from "../assets/EMHLogo.png";


// const Navbar = () => {
//     return (
//         <nav className="mb-20 flex items-center justify-between py-6 ">
//             <div className="flex flex-shrink-0 items-center">
//                 <img className="mx-2 w-20" src={logo} alt="logo" />
//             </div>
//             <div className="m-8 flex items-center justify-center gap-6 text-2xl">
                
//             <a href="#about" className="hover:text-gray-400">About</a>
//         <a href="#technologies" className="hover:text-gray-400">Technologies</a>
//         <a href="#experience" className="hover:text-gray-400">Experience</a>
//         <a href="#projects" className="hover:text-gray-400">Projects</a>
//         <a href="#certifications" className="hover:text-gray-400">Certifications</a>
//         <a href="#contact" className="hover:text-gray-400">Contact</a>
                
//                 {/* <a href="https://www.linkedin.com/in/emad-mohammed-habibi-051b28233/" target="_blank" rel="noopener noreferrer">
//                     <FaLinkedin />
//                 </a>
//                 <a href="https://github.com/CodeByEmad" target="_blank" rel="noopener noreferrer">
//                     <FaGithub />
//                 </a>
//                 <a href="https://www.instagram.com/_3mxd._/" target="_blank" rel="noopener noreferrer">
//                     <FaInstagram />
//                 </a>
//                 <a href="https://x.com/EmadHabibi10" target="_blank" rel="noopener noreferrer">
//                     <FaSquareXTwitter />
//                 </a> */}
//             </div>
//         </nav>
//     );
// };

// export default Navbar;





// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa'; // Hamburger Icon
// import logo from "../assets/EMHLogo.png"; // Logo import
// import { Link } from 'react-scroll'; // Smooth scrolling to sections

// const Navbar = () => {
//     const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//     const toggleDrawer = () => {
//         setIsDrawerOpen(!isDrawerOpen);
//     };

//     const closeDrawer = () => {
//         setIsDrawerOpen(false);
//     };

//     return (
//         <nav className="relative flex items-center justify-between py-6 bg-transparent">
//             {/* Hamburger Icon for small and medium screens */}
//             <div className="flex items-center pl-4 lg:hidden">
//                 <button onClick={toggleDrawer} className="text-2xl text-white">
//                     <FaBars />
//                 </button>
//             </div>

//             {/* Logo (centered for small/medium screens, left-aligned for large screens) */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0">
//                 <img className="w-20" src={logo} alt="logo" />
//             </div>

//             {/* Desktop Links (visible only for large screens) */}
//             <div className="hidden lg:flex space-x-6 text-2xl text-white ml-auto pr-6">
//                 <Link to="about" smooth={true} duration={500} className=" px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//                     About
//                 </Link>
//                 <Link to="technologies" smooth={true} duration={500} className=" px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//                     Technologies
//                 </Link>
//                 <Link to="experience" smooth={true} duration={500} className=" px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//                     Experience
//                 </Link>
//                 <Link to="projects" smooth={true} duration={500} className=" px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//                     Projects
//                 </Link>
//                 <Link to="certifications" smooth={true} duration={500} className=" px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//                     Certifications
//                 </Link>
//                 <Link to="contact" smooth={true} duration={500} className=" px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//                     Contact
//                 </Link>
//             </div>

//             {/* Side Drawer (appears on small and medium screens) */}
//             <div
//                 className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-[#850BC3] via-[#120C61] to-[#6B18A8] text-white transform ${
//                     isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
//                 } transition-transform duration-300 ease-in-out`}
//             >
//                 <div className="flex justify-end p-4">
//                     <button onClick={closeDrawer} className="text-2xl">
//                         X
//                     </button>
//                 </div>
//                 <div className="flex flex-col space-y-6 p-6">
//                     <Link
//                         to="about"
//                         smooth={true}
//                         duration={500}
//                         className="hover:bg-gray-700 px-4 py-2 rounded-lg hover:text-gray-300 cursor-pointer"
//                         onClick={closeDrawer}
//                     >
//                         About
//                     </Link>
//                     <Link
//                         to="technologies"
//                         smooth={true}
//                         duration={500}
//                         className="hover:bg-gray-700 px-4 py-2 rounded-lg hover:text-gray-300 cursor-pointer"
//                         onClick={closeDrawer}
//                     >
//                         Technologies
//                     </Link>
//                     <Link
//                         to="experience"
//                         smooth={true}
//                         duration={500}
//                         className="hover:bg-gray-700 px-4 py-2 rounded-lg hover:text-gray-300 cursor-pointer"
//                         onClick={closeDrawer}
//                     >
//                         Experience
//                     </Link>
//                     <Link
//                         to="projects"
//                         smooth={true}
//                         duration={500}
//                         className="hover:bg-gray-700 px-4 py-2 rounded-lg hover:text-gray-300 cursor-pointer"
//                         onClick={closeDrawer}
//                     >
//                         Projects
//                     </Link>
//                     <Link
//                         to="certifications"
//                         smooth={true}
//                         duration={500}
//                         className="hover:bg-gray-700 px-4 py-2 rounded-lg hover:text-gray-300 cursor-pointer"
//                         onClick={closeDrawer}
//                     >
//                         Certifications
//                     </Link>
//                     <Link
//                         to="contact"
//                         smooth={true}
//                         duration={500}
//                         className="hover:bg-gray-700 px-4 py-2 rounded-lg hover:text-gray-300 cursor-pointer"
//                         onClick={closeDrawer}
//                     >
//                         Contact
//                     </Link>
//                 </div>
//             </div>

//             {/* Overlay when drawer is open */}
//             {isDrawerOpen && (
//                 <div
//                     onClick={closeDrawer}
//                     className="fixed inset-0 bg-black opacity-50 z-10"
//                 ></div>
//             )}
//         </nav>
//     );
// };

// export default Navbar;






// import { useState } from 'react';
// import { FaBars } from 'react-icons/fa'; // Hamburger Icon
// import logo from "../assets/EMHLogo.png"; // Logo import
// import { Link } from 'react-scroll'; // Smooth scrolling to sections
// import Drawer from './drawer.jsx'; // Import the Drawer component

// const Navbar = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="fixed top-0 w-full flex items-center justify-between py-6 bg-transparent z-50">
//         {/* Hamburger Icon for small and medium screens */}
//         <div className="flex items-center pl-4 lg:hidden">
//           <button onClick={toggleDrawer} className="text-2xl text-white">
//             <FaBars />
//           </button>
//         </div>

//         {/* Logo (centered for small/medium screens, left-aligned for large screens) */}
//         <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0">
//           <img className="w-20" src={logo} alt="logo" />
//         </div>

//         {/* Desktop Links (visible only for large screens) */}
//         <div className="hidden lg:flex space-x-6 text-2xl text-white ml-auto pr-6">
//           <Link to="about" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//             About
//           </Link>
//           <Link to="technologies" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//             Technologies
//           </Link>
//           <Link to="experience" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//             Experience
//           </Link>
//           <Link to="projects" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//             Projects
//           </Link>
//           <Link to="certifications" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//             Certifications
//           </Link>
//           <Link to="contact" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
//             Contact
//           </Link>
//         </div>

//         {/* Drawer Menu */}
//         <Drawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer} />
//       </nav>

//       {/* Add margin to the content below the navbar */}
//       <div className="mt-24"></div>
//     </>
//   );
// };

// export default Navbar;

import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa'; // Hamburger Icon
import logo from "../assets/EMHLogo.png"; // Logo import
import { Link } from 'react-scroll'; // Smooth scrolling to sections
import Drawer from './drawer.jsx'; // Import the Drawer component

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Update navbar background on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add background if scrolled
      } else {
        setIsScrolled(false); // Transparent if at top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`relative top-0 w-full flex items-center justify-between py-6 bg-transparent z-50 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-80 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Hamburger Icon for small and medium screens */}
        <div className="flex items-center pl-4 lg:hidden">
          <button onClick={toggleDrawer} className="text-2xl text-white">
            <FaBars />
          </button>
        </div>

        {/* Logo (centered for small/medium screens, left-aligned for large screens) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:translate-x-0">
          <img className="w-20" src={logo} alt="logo" />
        </div>

        {/* Desktop Links (visible only for large screens) */}
        <div className="hidden lg:flex space-x-4 text-2xl text-white ml-auto pr-6">
          <Link to="about" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
            About
          </Link>
          <Link to="technologies" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
            Technologies
          </Link>
          <Link to="experience" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
            Experience
          </Link>
          <Link to="projects" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
            Projects
          </Link>
          <Link to="certifications" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
            Certifications
          </Link>
          <Link to="contact" smooth={true} duration={500} className="px-4 py-2 rounded-lg hover:text-gray-400 cursor-pointer">
            Contact
          </Link>
        </div>

        {/* Drawer Menu */}
        <Drawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer} />
      </nav>

      {/* Add margin to the content below the navbar */}
      <div className={`mt-24 ${isScrolled ? 'mt-32' : 'mt-24'}`}></div>
    </>
  );
};

export default Navbar;



