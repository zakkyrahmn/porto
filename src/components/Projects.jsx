import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaExternalLinkAlt, FaGithub, FaEye, FaCode, FaPaintBrush, FaStore, FaVideo, FaInstagram, FaBriefcase } from "react-icons/fa";
import { SiLaravel, SiReact, SiTailwindcss, SiMysql, SiFigma } from "react-icons/si";

const projectsData = [
  {
    category: "Bussines",
    icon: FaBriefcase,
    color: "primary",
    items: [
      {
        title: "Fourkeys",
        description: "Fourkeys Tech is a software solutions provider specializing in modern web and system development.",
        image: "/images/FT.png",
        link: "https://www.instagram.com/fourkeys.tech/",
        tags: ["Chief Finance Officer"],
        status: "Active"
      },
      {
        title: "MNG Group",
        description: "MNG Group (MANGANGROUP) serves as a multi-divisional community umbrella overseeing media, gaming, and e-commerce units.",
        image: "/images/MNG.png",
        link: "https://www.instagram.com/mngmedia.id/",
        tags: ["Chief Operation Officer"],
        status: "Active"
      }
    ]
  },
  {
    category: "Web & Application Development",
    icon: FaCode,
    color: "primary",
    items: [
      {
        title: "Finencary POS System",
        description: "Integrated Point of Sale & Admin Dashboard",
        longDescription: "A comprehensive POS system with inventory management, sales tracking, and admin dashboard for business operations.",
        images: [
          "/images/finencary/fine1.png",
          "/images/finencary/fine2.png",
          "/images/finencary/fine3.png",
          "/images/finencary/fine4.png",
          "/images/finencary/fine5.png",
          "/images/finencary/fine6.png",
          "/images/finencary/fine7.png",
          "/images/finencary/fine8.png",
        ],
        tags: ["Laravel", "MySQL", "Tailwind", "JavaScript"],
        technologies: [SiLaravel, SiMysql, SiTailwindcss],
        status: "Completed"
      },
      {
        title: "Heart Horizon Website",
        description: "Frontend Development for Digital Agency",
        longDescription: "Modern website design and development for a digital agency focusing on user experience and visual appeal.",
        image: "/images/h2.png",
        tags: ["React", "Tailwind CSS", "Responsive"],
        technologies: [SiReact, SiTailwindcss],
        status: "Completed"
      },
      {
        title: "Fishop E-Commerce",
        description: "Fish Marketplace Platform",
        longDescription: "Online marketplace for buying and selling fish with user authentication and payment integration.",
        image: "/images/code.jpg",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        technologies: [SiReact, SiTailwindcss],
        status: "In Progress"
      },
      {
        title: "Laundry POS System",
        description: "Cashier System for Laundry Business",
        longDescription: "Custom POS system tailored for laundry businesses with customer management and billing features.",
        image: "/images/code.jpg",
        tags: ["PHP", "MySQL", "Bootstrap"],
        technologies: [SiLaravel, SiMysql],
        status: "Completed"
      },
      {
        title: "Cafe Ordering System",
        description: "Online Ordering Platform",
        longDescription: "Web-based ordering system for cafes with menu management and order tracking capabilities.",
        image: "/images/code.jpg",
        tags: ["Laravel", "MySQL", "JavaScript"],
        technologies: [SiLaravel, SiMysql],
        status: "Completed"
      }
    ]
  },
  {
    category: "UI/UX Design",
    icon: FaPaintBrush,
    color: "purple",
    items: [
      {
        title: "MultiGarage App Design",
        description: "Vehicle Service Reservation Platform",
        longDescription: "Complete UI/UX design for a mobile app that simplifies vehicle service bookings and management.",
        images: [
          "/images/mg1.png",
          "/images/mg2.png",
          "/images/mg3.png",
          "/images/mg4.png",
          "/images/mg5.png",
          "/images/mg6.png",
          "/images/mg7.png",
          "/images/mg8.png",
        ],
        tags: ["UI Design", "UX Research", "Prototyping"],
        technologies: [SiFigma],
        status: "Completed"
      }
    ]
  },
  {
    category: "Creative & Social Media",
    icon: FaInstagram,
    color: "pink",
    items: [
      {
        title: "Kreasinema",
        description: "Content Strategy & Management",
        longDescription: "Content scheduling, design, and engagement strategy for entertainment-focused Instagram account.",
        image: "/images/igkreasinema.png",
        link: "https://www.instagram.com/kreasinema_/",
        tags: ["Social Media", "Content Creation", "Design"],
        technologies: [SiFigma],
        status: "Active"
      },
      {
        title: "Sumber Aneka Plastik & Kemasan",
        description: "Brand Management & Product Design",
        longDescription: "Complete brand management including product photography, design, and social media optimization.",
        images: [
          "/images/sapk.png",
          "/images/sapk2.png",
          "/images/sapk3.png",
        ],
        link: "https://www.instagram.com/sumberanekaplastikdankemasan/",
        tags: ["Branding", "Product Design", "E-commerce"],
        technologies: [SiFigma],
        status: "Active"
      }
    ]
  },
  {
    category: "E-Commerce Management",
    icon: FaStore,
    color: "orange",
    items: [
      {
        title: "Plastik Indonesia Store",
        description: "Product Management & Operations",
        longDescription: "Full management of e-commerce store including product listing, inventory control, and shipping coordination.",
        image: "/images/paket.png",
        tags: ["Shopee", "Inventory", "Logistics"],
        status: "Active"
      },
      {
        title: "Vellorea Fashion",
        description: "Product Photography & Sales",
        longDescription: "Complete e-commerce management including product photography, listing optimization, and sales strategy.",
        image: "/images/paket.png",
        tags: ["E-commerce", "Photography", "Sales"],
        status: "Active"
      }
    ]
  },
  {
    category: "Scripting & Development",
    icon: FaCode,
    color: "green",
    items: [
      {
        title: "FiveM Server Scripts",
        description: "Custom Game Server Development",
        longDescription: "Development of custom scripts and features for FiveM game servers to enhance player experience.",
        image: "/images/fivem.png",
        tags: ["Lua", "FiveM", "Game Development"],
        status: "Completed"
      }
    ]
  }
];

const ProjectCard = ({ project, index }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const hasMultipleImages = project.images && project.images.length > 1;
  const currentImage = hasMultipleImages ? project.images[currentImageIndex] : (project.images ? project.images[0] : project.image);

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400";
      case "In Progress": return "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400";
      case "Active": return "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400";
      default: return "bg-neutral-100 dark:bg-neutral-900/30 text-neutral-700 dark:text-neutral-400";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative h-full"
    >
      <div className="card h-full overflow-hidden transition-all duration-500 group-hover:shadow-xl group-hover:-translate-y-2">
        {/* Image Container */}
        <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={currentImage}
              alt={project.title}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AnimatePresence>

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          {/* Image Navigation */}
          {hasMultipleImages && (
            <div className="absolute bottom-4 right-4 flex items-center gap-2">
              {project.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    setCurrentImageIndex(idx);
                  }}
                  className={`h-2 w-2 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                  aria-label={`View image ${idx + 1}`}
                />
              ))}
            </div>
          )}

          {/* Hover Action - External Link Only */}
          {project.link && (
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-neutral-900 hover:bg-primary-50 hover:text-primary-600 transition-colors shadow-md"
                aria-label="View live project"
              >
                <FaExternalLinkAlt className="w-4 h-4" />
              </motion.a>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>
            </div>
          </div>

          {/* Technologies */}
          {project.technologies && (
            <div className="mb-4 flex items-center gap-2">
              {project.technologies.map((TechIcon, idx) => (
                <div key={idx} className="flex h-8 w-8 items-center justify-center rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
                  <TechIcon className="w-4 h-4" />
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-700 dark:text-neutral-300"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const allProjects = projectsData.flatMap(category =>
    category.items.map(item => ({ ...item, category: category.category }))
  );

  const filteredProjects = activeCategory === "all"
    ? allProjects
    : allProjects.filter(project => project.category === activeCategory);

  return (
    <div className="relative w-full">

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-2"
        >
          <FaEye className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
            My Portfolio
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          A collection of my recent work showcasing diverse skills and creative solutions
        </motion.p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex flex-wrap justify-center gap-3">
          <button
            onClick={() => setActiveCategory("all")}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${activeCategory === "all" ? 'bg-primary-600 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
          >
            All Projects
          </button>
          {projectsData.map((category, index) => (
            <motion.button
              key={category.category}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
              viewport={{ once: true }}
              onClick={() => setActiveCategory(category.category)}
              className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${activeCategory === category.category ? 'bg-primary-600 text-white' : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'}`}
            >
              {category.icon && <category.icon className="w-4 h-4" />}
              {category.category}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
        ))}
      </div>

      {/* Stats & Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16 rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 p-8"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              {allProjects.length}+
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
              Projects Completed
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              5+
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
              Categories
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              15+
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
              Technologies Used
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">
              100%
            </div>
            <div className="text-sm text-neutral-700 dark:text-neutral-300 mt-2">
              Client Satisfaction
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
          Interested in collaborating on a project?
        </p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-base font-medium"
        >
          <FaCode className="w-5 h-5" />
          Start a Project
        </motion.a>
      </motion.div>
    </div>
  );
}