"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { DATA } from "@/data";

function TimelineDot({ index }: { index: number }) {
  return (
    <div className="relative flex items-center justify-center">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: index * 0.2, type: "spring", stiffness: 200 }}
        className="w-4 h-4 rounded-full bg-zinc-800 border-2 border-zinc-600 z-10"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 2.5, opacity: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.5,
          delay: index * 0.2,
          repeat: 0,
        }}
        className="absolute w-4 h-4 rounded-full bg-zinc-500"
      />
    </div>
  );
}

function ExperienceCard({
  work,
  index,
}: {
  work: (typeof DATA.work)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Parse description into bullet points
  const bullets = work.description
    .split("\n\n")
    .map((b) => b.replace(/^-\s*/, "").trim())
    .filter(Boolean);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      <div className="relative border border-zinc-800 rounded-2xl bg-gradient-to-b from-zinc-900/60 to-black/80 overflow-hidden hover:border-zinc-700 transition-all duration-500">
        {/* Hover glow */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.02] to-transparent" />

        <div className="relative p-6 sm:p-8">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <motion.div
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
                className="w-12 h-12 rounded-xl border border-zinc-800 bg-zinc-900/80 flex items-center justify-center overflow-hidden shrink-0"
              >
                <Image
                  src={work.logoUrl}
                  alt={work.company}
                  width={32}
                  height={32}
                  className="rounded-lg"
                />
              </motion.div>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-100">
                  {work.title}
                </h3>
                <p className="text-zinc-400 text-sm mt-0.5">{work.company}</p>
              </div>
            </div>

            <div className="text-right shrink-0">
              <p className="text-xs text-zinc-500 uppercase tracking-wider">
                {work.start} — {work.end}
              </p>
              <div className="flex items-center gap-2 mt-2 justify-end">
                {work.badges.map((badge) => (
                  <span
                    key={badge}
                    className="text-[10px] px-2.5 py-0.5 rounded-full border border-zinc-700 text-zinc-400 bg-zinc-900/50"
                  >
                    {badge}
                  </span>
                ))}
                <span className="text-[10px] px-2.5 py-0.5 rounded-full border border-zinc-700 text-zinc-400 bg-zinc-900/50">
                  {work.location}
                </span>
              </div>
            </div>
          </div>

          {/* Bullet Points with stagger */}
          <div className="space-y-3">
            {bullets.map((bullet, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.12 }}
                className="flex items-start gap-3 group/bullet"
              >
                <motion.span
                  className="mt-2 w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover/bullet:bg-zinc-400 shrink-0 transition-colors"
                />
                <p className="text-zinc-400 text-sm leading-relaxed group-hover/bullet:text-zinc-300 transition-colors">
                  {bullet}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom accent line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 h-px bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-800 origin-left"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceStory() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 w-full bg-black text-zinc-300 py-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-xs uppercase tracking-widest text-zinc-500">
            Experience
          </p>
          <h2 className="mt-3 text-4xl md:text-5xl font-light tracking-tight text-zinc-100">
            Where I&apos;ve Worked
          </h2>
          <p className="text-zinc-500 mt-4 max-w-lg mx-auto">
            A journey of building, breaking, shipping — and learning through real
            products with real users.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-zinc-900 hidden md:block">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-zinc-600 to-zinc-800"
            />
          </div>

          <div className="space-y-12 md:pl-12">
            {DATA.work.map((work, i) => (
              <div key={work.company} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute -left-12 top-8">
                  <TimelineDot index={i} />
                </div>
                <ExperienceCard work={work} index={i} />
              </div>
            ))}
          </div>

          {/* Current status */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative md:pl-12 mt-12"
          >
            <div className="hidden md:block absolute -left-12 top-4">
              <div className="relative flex items-center justify-center">
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0.4)",
                      "0 0 0 8px rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-4 h-4 rounded-full bg-emerald-600 border-2 border-emerald-400 z-10"
                />
              </div>
            </div>

            <div className="border border-dashed border-zinc-800 rounded-2xl p-6 text-center">
              <p className="text-zinc-400 text-sm">
                Currently building{" "}
                <span className="text-zinc-200 font-medium">
                  scalable SaaS, AI-driven tools
                </span>
                , and{" "}
                <span className="text-zinc-200 font-medium">
                  meaningful user experiences
                </span>
              </p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-emerald-500/80 text-xs mt-3 uppercase tracking-wider"
              >
                Open to opportunities
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
