import About from "./components/About";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import  Navbar  from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-[#850BC3] selection:text-black">
      <div className="fixed top-0 -z-10 h-full w-full">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="max-w-screen-xl mx-auto px-8">
      <Navbar />
      
      <section id="hero" className="section min-h-screen">
          <Hero />
        </section>

        <section id="about" className="section min-h-screen">
          <About />
        </section>

        <section id="technologies" className="section min-h-screen">
          <Technologies />
        </section>

        <section id="experience" className="section min-h-screen">
          <Experience />
        </section>

        <section id="projects" className="section min-h-screen">
          <Projects />
        </section>

        <section id="certifications" className="section min-h-screen">
          <Certifications />
        </section>

        <section id="contact" className="section min-h-screen">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
