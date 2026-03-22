"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight, Sparkles } from "lucide-react";
import { DATA } from "@/data";

export default function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section id="contact" className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Left - Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Get in Touch
          </p>
          <h2 className="mt-3 text-4xl sm:text-5xl font-light tracking-tight text-white">
            Let&apos;s Build<br />Something Together
          </h2>
          <p className="mt-6 text-zinc-400 leading-relaxed max-w-md">
            Have a project idea, need AI integration, or want to collaborate?
            I&apos;m always open to discussing new opportunities.
          </p>

          {/* AI CTA */}
          <motion.a
            href={`mailto:${DATA.contact.email}?subject=AI Project Inquiry`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-5 py-2.5 text-sm text-zinc-300 hover:border-zinc-500 hover:bg-white/10 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Discuss an AI Project
          </motion.a>

          {/* Contact Details */}
          <div className="mt-10 space-y-4">
            <motion.a
              href={`mailto:${DATA.contact.email}`}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="text-sm">{DATA.contact.email}</span>
            </motion.a>

            <motion.a
              href={`tel:${DATA.contact.tel}`}
              whileHover={{ x: 4 }}
              className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group"
            >
              <div className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center group-hover:border-zinc-600 transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="text-sm">{DATA.contact.tel}</span>
            </motion.a>

            <div className="flex items-center gap-3 text-zinc-400">
              <div className="w-10 h-10 rounded-xl border border-zinc-800 bg-zinc-900/50 flex items-center justify-center">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-sm">{DATA.location}</span>
            </div>
          </div>
        </motion.div>

        {/* Right - Social Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {Object.values(DATA.contact.social).map((social, i) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              whileHover={{ y: -4, borderColor: "rgba(113,113,122,0.5)" }}
              className="group flex items-center justify-between p-6 rounded-2xl border border-zinc-800 bg-zinc-900/20 transition-all duration-300"
            >
              <div>
                <p className="text-white font-medium">{social.name}</p>
                <p className="text-xs text-zinc-600 mt-1">
                  {social.url.replace(/https?:\/\/(www\.)?/, "").split("/")[0]}
                </p>
              </div>
              <ArrowUpRight className="w-5 h-5 text-zinc-700 group-hover:text-zinc-400 transition-colors" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-24 pt-8 border-t border-zinc-800/50 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-xs text-zinc-700">
          &copy; {new Date().getFullYear()} {DATA.name}. Built with Next.js & Framer Motion.
        </p>
        <div className="flex gap-6">
          {Object.values(DATA.contact.social)
            .filter((s) => s.navbar)
            .map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-xs text-zinc-700 hover:text-zinc-400 transition-colors"
              >
                {social.name}
              </a>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
