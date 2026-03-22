"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { DATA } from "@/data";

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24">
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Testimonials
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight text-white">
          What Clients Say
        </h2>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {DATA.testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -4, borderColor: "rgba(113,113,122,0.4)" }}
            className="group relative border border-zinc-800 rounded-2xl p-6 sm:p-8 bg-gradient-to-b from-zinc-900/30 to-black transition-all duration-300"
          >
            {/* Hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none" />

            <Quote className="w-5 h-5 text-zinc-700 mb-4" />

            <p className="text-zinc-400 text-sm leading-relaxed relative z-10">
              &ldquo;{t.content}&rdquo;
            </p>

            <div className="mt-6 pt-4 border-t border-zinc-800/60 relative z-10">
              <p className="text-zinc-200 text-sm font-medium">{t.name}</p>
              <p className="text-zinc-600 text-xs mt-0.5">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
