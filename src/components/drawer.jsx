import { Link } from 'react-scroll';
import { FaTimes } from 'react-icons/fa';
import logo from "../assets/EMHLogo.png";

const NAV_LINKS = [
  { to: 'about', label: 'About' },
  { to: 'technologies', label: 'Technologies' },
  { to: 'experience', label: 'Experience' },
  { to: 'projects', label: 'Projects' },
  { to: 'certifications', label: 'Certifications' },
  { to: 'contact', label: 'Contact' },
];

const Drawer = ({ isOpen, closeDrawer }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-start bg-black/60 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) closeDrawer();
      }}
    >
      <div className="relative flex w-64 flex-col items-center border-r border-neutral-800 bg-[#0d0d10] p-8 text-white">
        {/* Close Button */}
        <button
          onClick={closeDrawer}
          aria-label="Close navigation menu"
          className="absolute left-4 top-4 text-2xl text-neutral-400 transition-colors hover:text-white"
        >
          <FaTimes />
        </button>

        {/* Logo */}
        <div className="mb-12 mt-8 flex justify-center">
          <Link to="hero" smooth={true} duration={500} onClick={closeDrawer}>
            <img className="w-20 cursor-pointer" src={logo} alt="logo" />
          </Link>
        </div>

        {/* Menu Links */}
        <div className="flex w-full flex-col space-y-1 text-lg">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={closeDrawer}
              className="cursor-pointer rounded-lg px-4 py-2.5 text-neutral-300 transition duration-300 ease-in-out hover:bg-white/5 hover:text-violet-300"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
