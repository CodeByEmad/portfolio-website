import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import  Navbar  from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="grain overflow-x-hidden text-neutral-300 antialiased selection:bg-violet-600 selection:text-white">
      {/* Skip to content — keyboard/screen-reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-lg focus:bg-violet-600 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>

      {/* Layered, living ambient background — one hue, two depths */}
      <div aria-hidden="true" className="fixed inset-0 -z-10 overflow-hidden bg-[#0a0a0c]">
        {/* Top radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(124,58,237,0.18),rgba(255,255,255,0))]" />

        {/* Drifting aurora blobs (CSS-animated, GPU-composited) */}
        <div className="animate-aurora-1 absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-violet-700/15 blur-[120px]" />
        <div className="animate-aurora-2 absolute -right-40 top-2/3 h-[460px] w-[460px] rounded-full bg-violet-900/20 blur-[130px]" />

        {/* Subtle dot grid */}
        <div className="absolute inset-0 opacity-[0.04] [background-image:radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />
      </div>

      <ScrollProgress />

      <div className="max-w-screen-xl mx-auto px-8">
      <Navbar />

      <main id="main-content">
        <section id="hero" className="section min-h-[100dvh]">
          <Hero />
        </section>

        <section id="about" className="section">
          <About />
        </section>

        <section id="technologies" className="section">
          <Technologies />
        </section>

        <section id="experience" className="section">
          <Experience />
        </section>

        <section id="projects" className="section">
          <Projects />
        </section>

        <section id="certifications" className="section">
          <Certifications />
        </section>

        <section id="contact" className="section">
          <Contact />
        </section>
      </main>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default App;
