import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaPhone, FaLinkedin, FaInstagram, FaGithub, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { HiOutlineMail, HiOutlineChat, HiOutlineUser } from "react-icons/hi";

const contactInfo = [
  {
    icon: FaEnvelope,
    title: "Email Address",
    value: "zkkyrhmn@gmail.com",
    description: "Primary contact method",
    action: "mailto:zkkyrhmn@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Zakky,%20I%20would%20like%20to%20discuss%20a%20project..."
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location",
    value: "Yogyakarta, Indonesia",
    description: "Based in cultural capital"
  },
  {
    icon: FaCalendarAlt,
    title: "Availability",
    value: "Open for Opportunities",
    description: "Freelance & Full-time"
  }
];

const socialLinks = [
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/zakky-rahman-992973335/",
    description: "Professional profile"
  },
  {
    icon: FaInstagram,
    label: "Instagram",
    href: "https://www.instagram.com/zakkyrahmn",
    description: "Personal & updates"
  },
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/zakkyrahmn",
    description: "Code & projects"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", subject: "", message: "" });
      }, 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
          <FaEnvelope className="w-4 h-4 text-primary-600 dark:text-primary-400" />
          <span className="text-sm font-medium text-primary-700 dark:text-primary-400">
            Get in Touch
          </span>
        </motion.div>
        
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Let's <span className="gradient-text">Connect</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="section-subtitle"
        >
          Have a project in mind or just want to chat? I'd love to hear from you!
        </motion.p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12">
        
        {/* Left Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Send me a message
            </h3>
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="flex flex-col items-center">
                  <FaCheckCircle className="w-16 h-16 text-green-500 mb-4" />
                  <h4 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      <div className="flex items-center gap-2">
                        <HiOutlineUser className="w-4 h-4" />
                        Your Name
                      </div>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      <div className="flex items-center gap-2">
                        <HiOutlineMail className="w-4 h-4" />
                        Email Address
                      </div>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="input"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="input"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    <div className="flex items-center gap-2">
                      <HiOutlineChat className="w-4 h-4" />
                      Your Message
                    </div>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="input resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-primary w-full inline-flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>

        {/* Right Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Contact Information */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Contact Information
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-neutral-900 dark:text-white">{info.title}</h4>
                    {info.action ? (
                      <a
                        href={info.action}
                        className="block mt-1 text-primary-600 dark:text-primary-400 hover:underline"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-neutral-700 dark:text-neutral-300">{info.value}</p>
                    )}
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6">
              Connect with me
            </h3>
            
            <div className="grid sm:grid-cols-3 gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 text-center transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-600 hover:shadow-md"
                >
                  <social.icon className="w-6 h-6 text-neutral-700 dark:text-neutral-300 mb-2" />
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">{social.label}</span>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{social.description}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Response Time */}
          <div className="rounded-xl bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 p-6">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-600 text-white">
                <FaCalendarAlt className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900 dark:text-white">Response Time</h4>
                <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
                  I typically respond within <span className="font-semibold">24 hours</span> on weekdays. 
                  Let's make something amazing together!
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary-600 to-primary-400 flex items-center justify-center">
                <span className="text-white font-bold text-sm">ZR</span>
              </div>
              <span className="text-lg font-bold text-neutral-900 dark:text-white">
                Zakky<span className="text-primary-600">.</span>
              </span>
            </div>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-2">
              Junior Software Developer & Digital Creator
            </p>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              © {new Date().getFullYear()} Zakky Rahman — All rights reserved
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
              Crafted with passion in Yogyakarta
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-neutral-600 dark:text-neutral-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}