import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const projectsData = [
  {
    category: "Web & Application Development",
    items: [
      {
        title: "Aplikasi Kasir Laundry",
        desc: "Sistem kasir untuk usaha laundry",
        image: "/images/code.jpg",
      },
      {
        title: "Website Pemesanan Cafe",
        desc: "Website untuk pemesanan berbasis Laravel & MySQL",
        image: "/images/code.jpg",
      },
      {
        title: "Website Fishop",
        desc: "Platform jual beli ikan menggunakan React & Tailwind",
        image: "/images/code.jpg",
      },
      {
        title: "Website Heart Horizon",
        desc: "Frontend Development",
        image: "/images/h2.png",
      },
      {
        title: "Website Finencary POS",
        desc: "Aplikasi Kasir & Halaman Admin Terintegrasi",
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
      },
    ],
  },

  {
    category: "UI/UX Design",
    items: [
      {
        title: "MultiGarage",
        desc: "Perancangan UI/UX untuk mempermudah reservasi servis dan manajemen kendaraan",
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
      },
    ],
  },

  {
    category: "Scripting",
    items: [
      {
        title: "FiveM Server Script",
        desc: "Script custom untuk server FiveM",
        image: "/images/fivem.png",
      },
    ],
  },

  {
    category: "Design & Social Media",
    items: [
      {
        title: "@kreasinema_",
        desc: "Scheduling konten",
        image: "/images/igkreasinema.png",
        link: "https://www.instagram.com/kreasinema_/",
      },
      {
        title: "@sumberanekaplastik",
        desc: "Design, upload & optimasi akun",
        images: [
          "/images/sapk.png",
          "/images/sapk2.png",
          "/images/sapk3.png",
        ],
        link: "https://www.instagram.com/sumberanekaplastikdankemasan/",
      },
    ],
  },

  {
    category: "E-Commerce",
    items: [
      {
        title: "plastik.indonesia",
        desc: "Manajemen produk & proses pengiriman",
        image: "/images/paket.png",
      },
      {
        title: "vellorea",
        desc: "Foto produk, design & penjualan",
        image: "/images/paket.png",
      },
    ],
  },
];

export default function Projects() {
  const [currentImages, setCurrentImages] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages((prev) => {
        const next = { ...prev };

        projectsData.forEach((group, groupIndex) => {
          group.items.forEach((project, projectIndex) => {
            const cardKey = `${groupIndex}-${projectIndex}`;

            if (project.images && project.images.length > 1) {
              const currentIndex = prev[cardKey] || 0;
              next[cardKey] = (currentIndex + 1) % project.images.length;
            }
          });
        });

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-black text-white py-32 px-6 md:px-16">
      <div className="w-full max-w-[1600px] mx-auto">
        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-semibold mb-24 text-center tracking-tight">
          Projects
        </h2>

        {projectsData.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-20">
            {/* Category */}
            <h3 className="text-2xl md:text-3xl mb-10 text-white/80">
              {group.category}
            </h3>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {group.items.map((project, projectIndex) => {
                const cardKey = `${groupIndex}-${projectIndex}`;

                // Menentukan gambar aktif
                const currentImage = project.images
                  ? project.images[currentImages[cardKey] || 0]
                  : project.image;

                const Card = (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: projectIndex * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)] cursor-pointer h-full flex flex-col"
                  >
                    {/* Image Container */}
                    <div className="overflow-hidden aspect-[16/10] relative">
                      <AnimatePresence mode="wait">
                        <motion.img
                          key={currentImage}
                          src={currentImage}
                          alt={project.title}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5 }}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 absolute inset-0"
                        />
                      </AnimatePresence>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-grow flex flex-col justify-between">
                      <div>
                        <h4 className="text-lg font-medium mb-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-white/60">
                          {project.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );

                return project.link ? (
                  <a
                    key={projectIndex}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={projectIndex} className="h-full">
                    {Card}
                  </div> // DI SINI PERBAIKANNYA: Mengubah </table> menjadi </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}