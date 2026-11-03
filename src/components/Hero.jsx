import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import { FaArrowDown, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineSparkles } from "react-icons/hi";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const floatingAnimation = {
  y: [0, -10, 0],
  transition: {
    duration: 3,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

/**
 * Background dirender lewat portal ke <body> dengan position: fixed,
 * sehingga SELALU seukuran layar penuh dan tidak ikut terpotong oleh
 * parent (max-w-7xl, padding, overflow-hidden, dll).
 */
function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 h-screen w-screen overflow-hidden bg-gradient-to-br from-white via-white to-neutral-50 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900"
    >
      {/* Grid full screen */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [mask-image:radial-gradient(ellipse_90%_80%_at_50%_45%,black_30%,transparent_100%)] [-webkit-mask-image:radial-gradient(ellipse_90%_80%_at_50%_45%,black_30%,transparent_100%)]" />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-80 w-80 translate-x-1/2 translate-y-1/2 rounded-full bg-purple-500/10 blur-3xl" />
    </div>,
    document.body
  );
}

export default function Hero() {
  return (
    <section id="home" className="relative w-full">
      <HeroBackground />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-16 md:py-24">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-6xl flex-col items-center justify-center text-center"
        >
          {/* Badge */}
          <motion.div
            variants={item}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="mb-10 inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 px-4 py-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 backdrop-blur-sm hover:shadow-sm transition-all duration-300"
          >
            <HiOutlineSparkles className="w-4 h-4 text-primary-500" />
            <span>Welcome to My Portfolio</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div variants={item} className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-purple-500/20 blur-2xl rounded-full" />
            <h1 className="relative text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
              <span className="block text-neutral-900 dark:text-white">
                Hi, I'm <span className="gradient-text">Zakky</span>
              </span>
              <span className="block mt-2 text-neutral-700 dark:text-neutral-300">
                Rahman
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400 sm:text-xl md:text-2xl"
          >
            Junior{" "}
            <span className="font-semibold text-primary-600 dark:text-primary-400">
              Software Developer
            </span>{" "}
            specializing in creating elegant solutions with modern web
            technologies
          </motion.p>

          {/* Call to Action */}
          <motion.div
            variants={item}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center gap-2 px-8 py-3 text-base font-medium"
            >
              View My Work
              <FaArrowDown className="w-4 h-4" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center px-8 py-3 text-base font-medium"
            >
              Get in Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="mt-14 flex flex-col items-center"
          >
            <p className="mb-6 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Follow me on
            </p>
            <div className="flex items-center justify-center gap-6">
              {[
                {
                  href: "https://instagram.com/zakkyrahmn",
                  icon: FaInstagram,
                  label: "Instagram",
                },
                {
                  href: "https://www.linkedin.com/in/zakky-rahman-992973335/",
                  icon: FaLinkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/zakkyrahmn",
                  icon: FaGithub,
                  label: "GitHub",
                },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="group flex h-14 w-14 items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 text-neutral-600 dark:text-neutral-400 backdrop-blur-sm transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-600 dark:hover:text-primary-400"
                  aria-label={label}
                >
                  <Icon className="text-xl transition-transform duration-300 group-hover:scale-110" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={item}
            animate={floatingAnimation}
            className="mt-20 flex flex-col items-center"
          >
            <span className="mb-2 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              Scroll to explore
            </span>
            <div className="h-8 w-px bg-gradient-to-b from-primary-500 to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}