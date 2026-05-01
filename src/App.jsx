import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const skillsSection = document.getElementById("skills");
      if (skillsSection) {
        const top = skillsSection.getBoundingClientRect().top;
        setShowNavbar(top <= 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // biar langsung ke-detect saat load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {showNavbar && <Navbar />}

      <main className="overflow-x-hidden">

        {/* HERO */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-6 md:px-16"
        >
          <div className="w-full max-w-7xl">
            <Hero />
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="min-h-screen flex items-center justify-center px-6 md:px-16"
        >
          <div className="w-full max-w-7xl">
            <About />
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="min-h-screen flex items-center justify-center px-6 md:px-16"
        >
          <div className="w-full max-w-7xl">
            <Skills />
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="min-h-screen flex items-center justify-center px-6 md:px-16"
        >
          <div className="w-full max-w-7xl">
            <Projects />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="min-h-screen flex items-center justify-center px-6 md:px-16"
        >
          <div className="w-full max-w-7xl">
            <Contact />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;