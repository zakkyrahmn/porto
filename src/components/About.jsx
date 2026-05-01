import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex items-center">

      {/* Main Container */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-6 md:px-12 lg:px-20 py-20 md:grid-cols-[1.2fr_0.8fr] md:gap-16 lg:gap-24">
        
        {/* TEXT */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="order-2 flex flex-col justify-center md:order-1"
        >
          <motion.div variants={item} className="mb-6 flex items-center gap-3">
            <span className="h-px w-12 bg-white/30" />
            <span className="text-sm tracking-[0.4em] text-neutral-500 uppercase">
              About Me
            </span>
          </motion.div>

          <motion.h2
            variants={item}
            className="text-6xl font-bold tracking-[-0.06em] md:text-7xl lg:text-8xl"
          >
            Zakky Rahman
          </motion.h2>

          <motion.div
            variants={item}
            className="mt-12 rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-10 md:p-14 backdrop-blur-xl"
          >
            <div className="space-y-8 text-lg leading-relaxed text-neutral-400 md:text-xl">
              <p className="flex items-start gap-5">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-white/70" />
                <span>
                  <span className="text-white font-semibold">Lulusan:</span> SMKN 2 Buduran Sidoarjo
                </span>
              </p>
              <p className="flex items-start gap-5">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-white/70" />
                <span>
                  <span className="text-white font-semibold">Universitas:</span> Politeknik Elektronika Negeri Surabaya
                </span>
              </p>
              <p className="flex items-start gap-5">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-white/70" />
                <span>
                  <span className="text-white font-semibold">Domisili:</span> Yogyakarta
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="order-1 flex justify-center md:order-2 md:justify-end"
        >
          <motion.div
            variants={item}
            whileHover={{ y: -10, scale: 1.03 }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="relative w-full max-w-[300px] md:max-w-[380px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/[0.03] p-3 backdrop-blur-xl"
          >
            <div className="relative overflow-hidden rounded-[2.1rem] border border-white/10 bg-black">
              <img
                src="/images/Profile.jpeg"
                alt="Profile"
                className="aspect-[3/4] w-full object-cover object-center transition duration-500 hover:scale-[1.05]"
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}