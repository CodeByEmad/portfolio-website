import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from "../assets/EMHLogo.png";
import { Link } from 'react-scroll';
import Drawer from './drawer.jsx';

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full flex items-center justify-between py-6 px-4 bg-transparent z-75 transition-all duration-300 ${
          isScrolled ? "bg-black bg-opacity-80 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Small screen: Hamburger + Slightly Left Centered Logo */}
        <div className="flex items-center justify-between w-full lg:hidden relative">
          {/* Hamburger */}
          <button onClick={toggleDrawer} className="text-2xl text-white z-10">
            <FaBars />
          </button>

          {/* Slightly Left-Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-[87%]">
          <Link to="hero" smooth={true} duration={500}>
            <img className="w-20 cursor-pointer" src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        {/* Large screen layout */}
        <div className="hidden lg:flex items-center justify-between w-full transform lg:translate-x-24">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
          <Link to="hero" smooth={true} duration={500}>
            <img className="w-20 cursor-pointer" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex space-x-6 text-white text-lg">
            <Link to="about" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">About</Link>
            <Link to="technologies" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Technologies</Link>
            <Link to="experience" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Experience</Link>
            <Link to="projects" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Projects</Link>
            <Link to="certifications" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Certifications</Link>
            <Link to="contact" smooth={true} duration={500} className="cursor-pointer hover:text-gray-400">Contact</Link>
          </div>

          {/* Right: Optional space (can use for icons or CTA) */}
          <div className="w-20" />
        </div>

        {/* Drawer for small screens */}
        <Drawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer} />
      </nav>

      {/* Push content below navbar */}
      <div className={`mt-24 ${isScrolled ? 'mt-32' : 'mt-24'}`}></div>
    </>
  );
};

export default Navbar;
