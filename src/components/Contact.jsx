import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="bg-black text-white min-h-screen flex items-center">
      
      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/10" />

      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-16 py-20">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col gap-12"
        >

          {/* Heading */}
          <div className="text-center md:text-left max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
              Let’s Build Something
              <span className="block text-white/40">Great Together</span>
            </h2>

            <p className="mt-6 text-white/60 text-base md:text-lg">
              Punya project, ide, atau sekadar mau ngobrol? Hubungi Sekarang!!!
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-10 items-center">

            {/* Left - Info */}
            <div className="space-y-6 text-white/70">
              <div>
                <p className="text-sm text-white/40">Email</p>
                <p className="text-lg">zkkyrhmn@gmail.com</p>
              </div>

              <div>
                <p className="text-sm text-white/40">Location</p>
                <p className="text-lg">Indonesia</p>
              </div>

              <div>
                <p className="text-sm text-white/40">Availability</p>
                <p className="text-lg">Open for freelance & full-time</p>
              </div>
            </div>

            {/* Right - CTA */}
            <div className="flex flex-col gap-4">

              <a
                href="mailto:zkkyrhmn@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Zakky,%20I%20would%20like%20to%20discuss%20a%20project..."
                className="group flex items-center justify-between px-6 py-4 rounded-2xl 
                border border-white/10 bg-white/5 backdrop-blur-md 
                text-white/80 transition-all duration-300 
                hover:bg-white/10 hover:text-white 
                hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
              >
                <span>Send Email</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="https://www.linkedin.com/in/zakky-rahman-992973335/"
                target="_blank"
                className="group flex items-center justify-between px-6 py-4 rounded-2xl 
                border border-white/10 bg-white/5 backdrop-blur-md 
                text-white/80 transition-all duration-300 
                hover:bg-white/10 hover:text-white"
              >
                <span>LinkedIn</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="https://www.instagram.com/zakkyrahmn"
                target="_blank"
                className="group flex items-center justify-between px-6 py-4 rounded-2xl 
                border border-white/10 bg-white/5 backdrop-blur-md 
                text-white/80 transition-all duration-300 
                hover:bg-white/10 hover:text-white"
              >
                <span>Instagram</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

            </div>

          </div>

          {/* Bottom */}
          <div className="pt-10 border-t border-white/10 text-center md:text-left">
            <p className="text-sm text-white/40">
              © 2026 Zakky Rahman — Portfolio
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
}