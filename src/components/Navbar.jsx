import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from "../assets/EMHLogo.png";
import { Link } from 'react-scroll';
import Drawer from './drawer.jsx';

const NAV_LINKS = [
  { to: 'about', label: 'About' },
  { to: 'technologies', label: 'Technologies' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'contact', label: 'Contact' },
];

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
        className={`fixed left-0 top-0 w-full flex items-center justify-between py-6 px-4 z-[75] transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0c]/80 backdrop-blur-md shadow-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        {/* Small screen: Hamburger + Slightly Left Centered Logo */}
        <div className="flex items-center justify-between w-full lg:hidden relative">
          {/* Hamburger */}
          <button onClick={toggleDrawer} aria-label="Open navigation menu" className="text-2xl text-white z-10">
            <FaBars />
          </button>

          {/* Slightly Left-Centered Logo */}
          <div className="absolute left-1/2 transform -translate-x-[87%]">
          <Link to="hero" href="#hero" smooth={true} duration={500}>
            <img className="w-20 cursor-pointer" src={logo} alt="logo" />
            </Link>
          </div>
        </div>

        {/* Large screen layout */}
        <div className="mx-auto hidden w-full max-w-screen-xl items-center justify-between px-8 lg:flex">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
          <Link to="hero" href="#hero" smooth={true} duration={500}>
            <img className="w-20 cursor-pointer" src={logo} alt="logo" />
            </Link>
          </div>

          {/* Right: Navigation Links */}
          <div className="flex space-x-7 text-base text-white">
            {NAV_LINKS.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                href={`#${to}`}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                activeClass="!text-violet-400 after:!w-full"
                className="relative cursor-pointer text-neutral-300 transition-colors duration-300 hover:text-white
                  after:absolute after:-bottom-1.5 after:left-0 after:h-[2px] after:w-0 after:rounded-full
                  after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* Drawer for small screens */}
        <Drawer isOpen={isDrawerOpen} closeDrawer={toggleDrawer} />
      </nav>

      {/* Push content below navbar */}
      <div className="mt-24"></div>
    </>
  );
};

export default Navbar;
