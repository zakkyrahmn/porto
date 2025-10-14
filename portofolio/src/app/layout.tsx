import "./globals.css";
import type { Metadata } from "next";
import { Github, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
  title: "Zakky Rahman | Portfolio",
  description: "Personal portfolio of Zakky Rahman, Informatics student at PENS.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-slate-50 to-slate-100 text-black font-sans antialiased">
        <header className="fixed w-full bg-white/80 backdrop-blur-md border-b border-gray-200 z-40 shadow-sm">
          <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Zakky Rahman
            </h1>
            <ul className="hidden md:flex gap-8 text-sm font-medium">
              <li>
                <a href="#home" className="hover:text-blue-600 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-blue-600 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-blue-600 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              <a 
                href="https://github.com/zakkyrahmn" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://www.linkedin.com/in/zakky-rahman-992973335/" 
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:bg-gray-100 rounded-full transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </nav>
        </header>
        
        <main className="pt-20">{children}</main>
        
        <footer className="text-center py-8 text-sm bg-white border-t border-gray-200">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Zakky Rahman 
          </p>
        </footer>
      </body>
    </html>
  );
}