import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projectsData = [
  {
    category: "Web & Application Development",
    items: [
      {
        title: "Aplikasi Laundry",
        desc: "Sistem laundry terintegrasi dengan pembayaran Midtrans",
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
        image: "/images/sapk.png",
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

        projectsData.forEach((group) => {
          group.items.forEach((project) => {
            if (project.images?.length > 1) {
              const currentIndex = prev[project.title] || 0;

              next[project.title] =
                (currentIndex + 1) % project.images.length;
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

        {projectsData.map((group, i) => (
          <div key={i} className="mb-20">
            {/* Category */}
            <h3 className="text-2xl md:text-3xl mb-10 text-white/80">
              {group.category}
            </h3>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {group.items.map((project, index) => {
                const currentImage = project.images
                  ? project.images[currentImages[project.title] || 0]
                  : project.image;

                const Card = (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                    viewport={{ once: true }}
                    className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:-translate-y-3 transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,255,255,0.08)] cursor-pointer"
                  >
                    {/* Image */}
                    <div className="overflow-hidden">
                      <img
                        src={currentImage}
                        alt={project.title}
                        className="w-full h-56 object-cover transition duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h4 className="text-lg font-medium mb-2">
                        {project.title}
                      </h4>
                      <p className="text-sm text-white/60">
                        {project.desc}
                      </p>
                    </div>
                  </motion.div>
                );

                return project.link ? (
                  <a
                    key={index}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={index}>{Card}</div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}