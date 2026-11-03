import { motion } from "framer-motion";
import { FaCode, FaPalette, FaFileAlt, FaShoppingCart, FaDatabase, FaServer, FaMobileAlt, FaChartLine } from "react-icons/fa";
import { SiJavascript, SiReact, SiPhp, SiLaravel, SiMysql, SiTailwindcss, SiFigma } from "react-icons/si";

const skillsData = [
  {
    category: "Web Development",
    icon: FaCode,
    color: "primary",
    description: "Building responsive and scalable web applications",
    skills: [
      { name: "HTML", icon: null, level: 95 },
      { name: "CSS", icon: null, level: 90 },
      { name: "JavaScript", icon: SiJavascript, level: 85 },
      { name: "React", icon: SiReact, level: 80 },
      { name: "PHP", icon: SiPhp, level: 75 },
      { name: "Laravel", icon: SiLaravel, level: 70 },
      { name: "MySQL", icon: SiMysql, level: 80 },
      { name: "PostgreSQL", icon: FaDatabase, level: 75 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: 90 },
      { name: "REST API", icon: FaServer, level: 80 }
    ]
  },
  {
    category: "Design & Creative",
    icon: FaPalette,
    color: "purple",
    description: "Creating visually appealing designs and multimedia content",
    skills: [
      { name: "Figma", icon: SiFigma, level: 85 },
      { name: "Canva", icon: null, level: 90 },
      { name: "CapCut", icon: null, level: 80 },
      { name: "Adobe Premiere", icon: null, level: 75 }
    ]
  },
  {
    category: "Documentation & Management",
    icon: FaFileAlt,
    color: "green",
    description: "Organizing and managing information efficiently",
    skills: [
      { name: "Archiving", icon: null, level: 90 },
      { name: "Data Management", icon: null, level: 85 },
      { name: "Administration", icon: null, level: 80 },
      { name: "Project Documentation", icon: null, level: 85 }
    ]
  },
  {
    category: "E-Commerce Operations",
    icon: FaShoppingCart,
    color: "orange",
    description: "Managing online store operations and customer experience",
    skills: [
      { name: "Product Management", icon: null, level: 85 },
      { name: "Inventory Control", icon: null, level: 80 },
      { name: "Stock Monitoring", icon: FaChartLine, level: 85 },
      { name: "Product Listing", icon: null, level: 90 },
      { name: "Customer Support", icon: null, level: 85 },
      { name: "Order Fulfillment", icon: null, level: 80 },
      { name: "Shipping Logistics", icon: null, level: 75 }
    ]
  }
];

const SkillBar = ({ skill, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">
            {skill.icon ? (
              <skill.icon className="w-4 h-4" />
            ) : (
              <span className="text-sm font-medium">{skill.name.charAt(0)}</span>
            )}
          </div>
          <span className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {skill.name}
          </span>
        </div>
        <span className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
          {skill.level}%
        </span>
      </div>
      <div className="h-2 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 0.8, delay: 0.2 + index * 0.05, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-400"
        />
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div className="relative w-full">
      
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-50 dark:bg-primary-900/20 px-4 py-2"
        >
          <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
            My Expertise
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Technical <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          A comprehensive overview of my technical capabilities and professional competencies
        </motion.p>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {skillsData.map((category, categoryIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="card p-8"
          >
            {/* Category Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-400 text-white">
                    {category.icon && <category.icon className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      {category.category}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills List */}
            <div className="space-y-6">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skill.name} 
                  skill={skill} 
                  index={skillIndex} 
                />
              ))}
            </div>

            {/* Proficiency Indicator */}
            <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  Overall Proficiency
                </span>
                <div className="flex items-center gap-2">
                  <div className="flex h-2 w-32 rounded-full bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-primary-500 to-primary-400"
                      style={{ 
                        width: `${(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%` 
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">
                    {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-12 grid md:grid-cols-3 gap-6"
      >
        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400">
              <FaMobileAlt className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 dark:text-white">Responsive Design</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Optimized for all devices
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
              <FaServer className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 dark:text-white">Modern Stack</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Latest frameworks & tools
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
              <FaChartLine className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-medium text-neutral-900 dark:text-white">Continuous Learning</h4>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
                Always expanding skillset
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}