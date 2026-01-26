import Navbar from "../src/components/layout/Navbar";
import Hero from "../src/components/sections/Hero";
import Experience from "../src/components/sections/Experience";
import AboutUs from "../src/components/sections/AboutUs";
import Projects from "../src/components/sections/Projects";
import Skills from "../src/components/sections/Skills";
import Contact from "../src/components/sections/Contact";

const App: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-background text-text-primary font-body min-h-screen">
      <Navbar onNavClick={scrollToSection} />

      {/* Hero */}
      <section id="home" className="min-h-screen flex items-center pt-20">
        <Hero onNavClick={scrollToSection} />
      </section>

      <section id="aboutus" className="py-40 bg-surface">
        <AboutUs />
      </section>

      {/* Experience / About */}
      <section id="experience" className="py-20">
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-surface">
        <Projects />
      </section>

      {/* Skills */}
      <section id="skills" className="py-20">
        <Skills />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-surface">
        <Contact />
      </section>
    </div>
  );
};

export default App;
