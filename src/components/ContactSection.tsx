"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-red-950/20 via-transparent to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <div className="w-8 h-[1px] bg-red-600" />
            <span className="text-[10px] font-bold tracking-[0.8em] text-white/40 uppercase">Get In Touch</span>
            <div className="w-8 h-[1px] bg-red-600" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
            className="text-5xl md:text-7xl font-bold tracking-tighter mb-6"
          >
            Let&apos;s <span className="text-white/20 italic">Connect</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-white/40 max-w-xl mx-auto"
          >
            Have a project in mind? Let&apos;s create something extraordinary together.
          </motion.p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                Name
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-red-600/50 transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                Email
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-red-600/50 transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
              Message
            </label>
            <textarea
              required
              rows={6}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-red-600/50 transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>

          <div className="flex justify-center pt-4">
            <motion.button
              type="submit"
              disabled={submitted}
              className="group relative px-12 py-5 overflow-hidden border border-white/10 bg-white/[0.02] hover:border-red-600/40 transition-all duration-700 backdrop-blur-sm disabled:opacity-50"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 text-[10px] font-black tracking-[0.5em] text-white uppercase group-hover:text-red-500 transition-colors duration-500">
                {submitted ? "Message Sent!" : "Send Message"}
              </span>
              <div className="absolute inset-0 bg-gradient-to-tr from-red-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <motion.div 
                className="absolute bottom-0 left-0 h-[1px] bg-red-600 w-full scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"
              />
            </motion.button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-white/5"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Email</p>
              <a href="mailto:hello@advaith.dev" className="text-white/70 hover:text-white transition-colors">
                hello@advaith.dev
              </a>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Location</p>
              <p className="text-white/70">Remote / Worldwide</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-2">Availability</p>
              <p className="text-green-500">Open for projects</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
