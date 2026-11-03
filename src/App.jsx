import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    // Smooth scroll for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (target) {
        e.preventDefault();
        const id = target.getAttribute('href');
        if (id === '#') return;
        
        const element = document.querySelector(id);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  return (
    <div className="bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white min-h-screen font-sans transition-colors duration-300">
      
      <Navbar />

      <main className="overflow-x-hidden">

        {/* HERO */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 lg:pt-32"
        >
          <div className="w-full max-w-7xl">
            <Hero />
          </div>
        </section>

        {/* ABOUT */}
        <section
          id="about"
          className="py-32 md:py-40 px-4 sm:px-6 lg:px-8 scroll-mt-24"
        >
          <div className="w-full max-w-7xl mx-auto">
            <About />
          </div>
        </section>

        {/* SKILLS */}
        <section
          id="skills"
          className="py-32 md:py-40 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50 scroll-mt-24"
        >
          <div className="w-full max-w-7xl mx-auto">
            <Skills />
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="py-32 md:py-40 px-4 sm:px-6 lg:px-8 scroll-mt-24"
        >
          <div className="w-full max-w-7xl mx-auto">
            <Projects />
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="py-32 md:py-40 px-4 sm:px-6 lg:px-8 bg-neutral-50 dark:bg-neutral-900/50 scroll-mt-24"
        >
          <div className="w-full max-w-7xl mx-auto">
            <Contact />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;