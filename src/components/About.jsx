import { motion } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaMapMarkerAlt, FaCode, FaLightbulb, FaUsers } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const infoItems = [
  {
    icon: FaGraduationCap,
    title: "Education",
    details: "SMKN 2 Buduran Sidoarjo",
    description: "Technical High School Graduate"
  },
  {
    icon: FaUniversity,
    title: "University",
    details: "Politeknik Elektronika Negeri Surabaya",
    description: "Electronics & Informatics Engineering"
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    details: "Yogyakarta, Indonesia",
    description: "Currently based in cultural capital"
  }
];

const qualities = [
  {
    icon: FaCode,
    title: "Clean Code",
    description: "Writing maintainable, scalable code with best practices"
  },
  {
    icon: FaLightbulb,
    title: "Problem Solver",
    description: "Analytical thinking to create innovative solutions"
  },
  {
    icon: FaUsers,
    title: "Team Player",
    description: "Collaborative approach with strong communication skills"
  }
];

export default function About() {
  return (
    <div className="relative w-full">
      
      {/* Section Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mb-16 text-center"
      >
        <motion.div variants={item} className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-2">
          <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
            About Me
          </span>
        </motion.div>
        
        <motion.h2 variants={item} className="section-title">
          Let's Get <span className="gradient-text">Acquainted</span>
        </motion.h2>
        
        <motion.p variants={item} className="section-subtitle">
          A passionate software developer with a focus on creating elegant solutions 
          and delivering exceptional user experiences
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        
        {/* Left Column - Profile Image & Basic Info */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Profile Card */}
          <motion.div variants={item} className="card overflow-hidden">
            <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
              <img
                src="/images/Profile.png"
                alt="Zakky Rahman - Software Developer"
                className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              
              {/* Profile Badge */}
              <div className="absolute bottom-4 left-4 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-4 py-2">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">Zakky Rahman</h3>
              <p className="mt-1 text-primary-600 dark:text-primary-400 font-medium">
                Software Developer
              </p>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
                Passionate about building digital experiences that make a difference
              </p>
            </div>
          </motion.div>

          {/* Information Grid */}
          <motion.div variants={item} className="grid gap-4">
            {infoItems.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -4 }}
                className="flex items-start gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 p-4 backdrop-blur-sm transition-all duration-300 hover:shadow-md hover:border-primary-200 dark:hover:border-primary-800"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <info.icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900 dark:text-white">{info.title}</h4>
                  <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">{info.details}</p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{info.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - About Content */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Introduction Card */}
          <motion.div variants={item} className="card p-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              My Journey
            </h3>
            
            <div className="space-y-4">
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                I'm a dedicated software developer with a strong foundation in modern web technologies 
                and a passion for creating efficient, scalable solutions.
              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                My journey started in technical high school where I developed a fascination with 
                technology and problem-solving. Currently pursuing my degree in Electronics & 
                Informatics Engineering, I'm continuously expanding my skill set and staying 
                updated with industry trends.
              </p>
              
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Based in Yogyakarta, the cultural heart of Indonesia, I draw inspiration from 
                the city's creative energy and innovation spirit to build software that's not 
                just functional, but also delightful to use.
              </p>
            </div>
          </motion.div>

          {/* Qualities Grid */}
          <motion.div variants={item}>
            <h4 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
              What I Bring to the Table
            </h4>
            
            <div className="grid gap-4">
              {qualities.map((quality, index) => (
                <motion.div
                  key={quality.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <quality.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium text-neutral-900 dark:text-white">{quality.title}</h5>
                    <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                      {quality.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={item}
            className="rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 p-6"
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white">
                  Let's Build Something Amazing
                </h4>
                <p className="mt-1 text-sm text-neutral-700 dark:text-neutral-300">
                  Interested in collaborating or discussing opportunities?
                </p>
              </div>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}