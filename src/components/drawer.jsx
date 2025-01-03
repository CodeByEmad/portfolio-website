// import React from 'react';
// import { Link } from 'react-scroll'; // Smooth scrolling to sections
// import { FaTimes } from 'react-icons/fa'; // Close Icon
// import logo from "../assets/EMHLogo.png"; // Logo import

// const Drawer = ({ isOpen, closeDrawer }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start z-50"> {/* Drawer opens from the left */}
//       <div className="bg-gradient-to-r from-[#6B18A8] via-[#120C61] to-[#B1B9C4] text-white p-8 w-64 flex flex-col items-center">
//         {/* Close Button */}
//         <button onClick={closeDrawer} className="text-white text-3xl absolute top-4 left-4">
//           <FaTimes />
//         </button>

//         {/* Logo */}
//         <div className="flex justify-center mb-16">
//           <img className="w-20" src={logo} alt="logo" />
//         </div>

//         {/* Menu Links */}
//         <div className="flex flex-col items-center space-y-6 text-xl text-center"> {/* Centered layout */}
//           <Link to="about" smooth={true} duration={500} onClick={closeDrawer} className="hover:text-gray-300 cursor-pointer">
//             About
//           </Link>
//           <Link to="technologies" smooth={true} duration={500} onClick={closeDrawer} className="hover:text-gray-300 cursor-pointer">
//             Technologies
//           </Link>
//           <Link to="experience" smooth={true} duration={500} onClick={closeDrawer} className="hover:text-gray-300 cursor-pointer">
//             Experience
//           </Link>
//           <Link to="projects" smooth={true} duration={500} onClick={closeDrawer} className="hover:text-gray-300 cursor-pointer">
//             Projects
//           </Link>
//           <Link to="certifications" smooth={true} duration={500} onClick={closeDrawer} className="hover:text-gray-300 cursor-pointer">
//             Certifications
//           </Link>
//           <Link to="contact" smooth={true} duration={500} onClick={closeDrawer} className="hover:text-gray-300 cursor-pointer">
//             Contact
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Drawer;



import React from 'react';
import { Link } from 'react-scroll'; // Smooth scrolling to sections
import { FaTimes } from 'react-icons/fa'; // Close Icon
import logo from "../assets/EMHLogo.png"; // Logo import

const Drawer = ({ isOpen, closeDrawer }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-start z-50"> {/* Drawer opens from the left */}
      <div className="bg-gradient-to-r from-[#6B18A8] via-[#120C61] to-[#B1B9C4] text-white p-8 w-64 flex flex-col items-center">
        {/* Close Button */}
        <button onClick={closeDrawer} className="text-white text-3xl absolute top-4 left-4">
          <FaTimes />
        </button>

        {/* Logo */}
        <div className="flex justify-center mb-16">
          <img className="w-20" src={logo} alt="logo" />
        </div>

        {/* Menu Links */}
        <div className="flex flex-col items-center space-y-6 text-xl text-center"> {/* Centered layout */}
          <Link
            to="about"
            smooth={true}
            duration={500}
            onClick={closeDrawer}
            className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:text-white cursor-pointer"
          >
            About
          </Link>
          <Link
            to="technologies"
            smooth={true}
            duration={500}
            onClick={closeDrawer}
            className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:text-white cursor-pointer"
          >
            Technologies
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            onClick={closeDrawer}
            className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:text-white cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            onClick={closeDrawer}
            className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:text-white cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="certifications"
            smooth={true}
            duration={500}
            onClick={closeDrawer}
            className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:text-white cursor-pointer"
          >
            Certifications
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            onClick={closeDrawer}
            className="px-4 py-2 rounded-lg transition duration-300 ease-in-out hover:bg-white hover:bg-opacity-20 hover:text-white cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
