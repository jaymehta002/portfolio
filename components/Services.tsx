"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  CreditCard,
  Rocket,
  Bot,
  LayoutDashboard,
  Gauge,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { DATA } from "@/data";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  "Full-Stack Web Development": Code2,
  "SaaS Product Development": CreditCard,
  "MVP & Startup Development": Rocket,
  "AI & Automation Integration": Bot,
  "Admin Panels & Dashboards": LayoutDashboard,
  "SEO & Performance Optimization": Gauge,
};

export default function Services() {
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });

  return (
    <section
      id="services"
      className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24"
    >
      {/* Header */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 16 }}
        animate={headerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Services
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight text-white">
          How I Can Help
        </h2>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          From rapid MVPs to production-grade SaaS — I deliver end-to-end
          solutions that move fast without cutting corners.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {DATA.services.map((service, i) => {
          const Icon = SERVICE_ICONS[service.title] ?? Code2;
          const isAI = service.title.includes("AI");

          return (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(113,113,122,0.4)" }}
              className="group relative border border-zinc-800 rounded-2xl p-6 bg-gradient-to-b from-zinc-900/30 to-black transition-all duration-300 overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

              {/* Icon with hover spin */}
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-5 inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 p-3 group-hover:border-zinc-700 transition-colors relative z-10"
              >
                <Icon className="h-5 w-5 text-zinc-400 group-hover:text-white transition-colors" />
              </motion.div>

              {/* AI sparkle badge */}
              {isAI && (
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-5 right-5 z-10"
                >
                  <Sparkles className="w-4 h-4 text-zinc-700" />
                </motion.div>
              )}

              {/* Content */}
              <h3 className="text-base font-medium text-white mb-2 relative z-10">
                {service.title}
              </h3>
              <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors relative z-10">
                {service.description}
              </p>

              {/* Keyword tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 relative z-10">
                {service.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800/60 text-zinc-600 bg-zinc-900/20 group-hover:text-zinc-500 group-hover:border-zinc-700/60 transition-colors"
                  >
                    {kw}
                  </span>
                ))}
              </div>

              {/* Hover arrow indicator */}
              <motion.div
                initial={{ opacity: 0, x: -4 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10"
              >
                <ArrowRight className="w-4 h-4 text-zinc-600" />
              </motion.div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
