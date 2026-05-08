import { motion } from "framer-motion";

const skillsData = [
  {
    title: "Web Development",
    items: [
      "HTML", "CSS", "JavaScript", "React",
      "PHP", "Laravel", "MySQL", "PostgreSQL",
      "Tailwind", "REST API"
    ]
  },
  {
    title: "Design & Video Editing",
    items: [
      "Figma", "Canva", "CapCut", "Adobe Premiere"
    ]
  },
  {
    title: "Documentation",
    items: [
      "Archiving", "Data Management", "Administration"
    ]
  },
  {
    title: "E-Commerce Operations",
    items: [
      "Product Management",
      "Inventory Control",
      "Stock Monitoring",
      "Product Update & Listing",
      "Customer Chat Support",
      "Order Packing & Fulfillment",
      "Shipping & Expedition Handling"
    ]
  }
];

export default function Skills() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-6 md:px-16">
      <div className="w-full max-w-7xl">

        {/* Title */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-28 tracking-tight text-center">
          Skills
        </h2>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group p-14 rounded-[2.5rem] border border-white/10 bg-white/5 backdrop-blur-xl 
              hover:bg-white/10 transition-all duration-300 hover:-translate-y-4 
              hover:shadow-[0_0_80px_rgba(255,255,255,0.1)]"
            >
              {/* Title Card */}
              <h3 className="text-3xl md:text-4xl font-medium mb-10">
                {skill.title}
              </h3>

              {/* Items */}
              <div className="flex flex-wrap gap-4">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="text-base md:text-lg px-5 py-2.5 rounded-full border border-white/10 
                    bg-white/5 text-white/90 backdrop-blur-sm 
                    hover:bg-white/10 transition"
                  >
                    {item}
                  </span>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}