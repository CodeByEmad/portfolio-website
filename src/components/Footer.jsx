import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-scroll";
import logo from "../assets/EMHLogo.png";

const NAV = [
  { to: "about", label: "About" },
  { to: "technologies", label: "Technologies" },
  { to: "experience", label: "Experience" },
  { to: "projects", label: "Projects" },
  { to: "certifications", label: "Certifications" },
  { to: "contact", label: "Contact" },
];

const SOCIALS = [
  { href: "https://www.linkedin.com/in/emad-mohammed-habibi-051b28233/", Icon: FaLinkedin, label: "LinkedIn" },
  { href: "https://github.com/CodeByEmad", Icon: FaGithub, label: "GitHub" },
  { href: "https://x.com/EmadHabibi10", Icon: FaSquareXTwitter, label: "X (Twitter)" },
];

const Footer = () => {
  return (
    <footer className="border-t border-neutral-800/80 bg-neutral-950/40">
      <div className="mx-auto max-w-screen-xl px-8 py-10">
        <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
          {/* Logo */}
          <Link to="hero" href="#hero" smooth={true} duration={500} className="cursor-pointer">
            <img src={logo} alt="Emad Habibi logo" className="w-16" />
          </Link>

          {/* Nav links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {NAV.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                href={`#${to}`}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer text-sm text-neutral-400 transition-colors hover:text-violet-400"
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex space-x-4">
            {SOCIALS.map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-neutral-400 transition-all duration-300 hover:-translate-y-1 hover:text-violet-400"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-800/60 pt-6 text-center text-sm text-neutral-400">
          © {new Date().getFullYear()} Emad Mohammed Habibi. Built with React &amp; Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
