'use client';

import { useState, useEffect } from 'react';
import { Mail, Code, Briefcase, User, Award } from 'lucide-react';

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: "English", value: 60, color: "bg-blue-500" },
    { name: "Teamwork", value: 80, color: "bg-green-500" },
    { name: "Frontend Development", value: 60, color: "bg-purple-500" },
    { name: "Backend Development", value: 50, color: "bg-orange-500" },
  ];

  const projects = [
    {
      title: "Heart Horizon",
      image: "/hearth-horizon.jpg",
      description: "Mental wellness platform for emotional and relationship guidance.",
      tags: ["React", "Node.js", "sql"]
    },
    {
      title: "Kementerian Transmigrasi Website",
      image: "/transmigrasi.png",
      description: "Government website for transmigration ministry",
      tags: ["Next.js", "Tailwind"]
    }
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center">
          <div className="animate-fade-in">
            <div className="mb-6 inline-block">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                ZR
              </div>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Zakky Rahman 👋
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
              A passionate <span className="font-semibold text-gray-800">Informatics student</span> at PENS, 
              focusing on <span className="font-semibold text-gray-800">software development</span> and <span className="font-semibold text-gray-800">design</span>.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a 
                href="#projects" 
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-1 transition-all"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 border-2 border-gray-300 rounded-full font-medium hover:border-blue-600 hover:text-blue-600 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 border-t border-gray-200">
          <div className="flex items-center gap-3 justify-center mb-8">
            <User className="text-blue-600" size={32} />
            <h3 className="text-4xl font-bold text-gray-800">About Me</h3>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 max-w-4xl mx-auto">
            <p className="text-gray-700 leading-relaxed text-lg text-center mb-10">
              I'm currently studying <span className="font-semibold text-blue-600">D3 Teknik Informatika</span> at{' '}
              <span className="font-semibold text-blue-600">Politeknik Elektronika Negeri Surabaya (PENS)</span>.
              Previously, I graduated from <span className="font-semibold">SMKN 2 Buduran Sidoarjo</span> majoring in{' '}
              <span className="font-semibold">Software Engineering (RPL)</span>.
              Now, I live in <span className="font-semibold">Yogyakarta</span> while continuing to learn and grow in software development.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                <Award className="mx-auto mb-3 text-blue-600" size={32} />
                <h4 className="font-semibold text-gray-800">Education</h4>
                <p className="text-sm text-gray-600 mt-2">D3 Informatika</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
                <Code className="mx-auto mb-3 text-purple-600" size={32} />
                <h4 className="font-semibold text-gray-800">Focus</h4>
                <p className="text-sm text-gray-600 mt-2">Front-end Dev</p>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl">
                <Briefcase className="mx-auto mb-3 text-pink-600" size={32} />
                <h4 className="font-semibold text-gray-800">Location</h4>
                <p className="text-sm text-gray-600 mt-2">Yogyakarta, ID</p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="py-20 border-t border-gray-200">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills & Expertise</h3>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {skills.map(({ name, value, color }) => (
              <div key={name} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">{name}</span>
                  <span className="text-sm font-bold text-gray-600">{value}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className={`${color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 border-t border-gray-200">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Featured Projects</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div 
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-xl mb-2 text-gray-800">{project.title}</h4>
                  <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 border-t border-gray-200 text-center">
          <Mail className="mx-auto mb-4 text-blue-600" size={48} />
          <h3 className="text-4xl font-bold mb-6 text-gray-800">Let's Connect!</h3>
          <p className="text-gray-700 mb-8 text-lg">
            Feel free to reach out for collaboration or just to say hi 👋
          </p>
          <a
            href="mailto:zkkyrhmn@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all"
          >
            <Mail size={20} />
            Send Email
          </a>
        </section>
      </div>
    </>
  );
}