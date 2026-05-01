import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white">

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-20">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex w-full max-w-5xl flex-col items-center justify-center text-center"
        >
          {/* Garis Atas */}
          <motion.div
            variants={item}
            className="mb-8 h-px w-24 bg-white/20 md:w-32"
          />

          {/* Nama */}
          <motion.h1
            variants={item}
            className="text-6xl font-semibold tracking-[-0.06em] md:text-8xl lg:text-9xl"
          >
            Zakky Rahman
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-sm tracking-[0.3em] text-neutral-500 uppercase md:text-lg lg:text-xl"
          >
            Junior Software Developer
          </motion.p>

          {/* Social */}
          <motion.div
            variants={item}
            className="mt-12 flex items-center justify-center gap-6"
          >
            {[
              { href: "https://instagram.com/zakkyrahmn", icon: FaInstagram, label: "Instagram" },
              { href: "https://www.linkedin.com/in/zakky-rahman-992973335/", icon: FaLinkedin, label: "LinkedIn" },
              { href: "https://github.com/zakkyrahmn", icon: FaGithub, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.94 }}
                className="group flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 backdrop-blur-md transition-all duration-300 hover:border-white/30 hover:bg-white/10 hover:text-white md:h-16 md:w-16"
                aria-label={label}
              >
                <Icon className="text-2xl transition-transform duration-300 group-hover:scale-110 md:text-3xl" />
              </motion.a>
            ))}
          </motion.div>

          {/* Garis Bawah */}
          <motion.div
            variants={item}
            className="mt-14 h-px w-36 bg-white/10 md:w-48"
          />
        </motion.div>
      </div>
    </div>
  );
}