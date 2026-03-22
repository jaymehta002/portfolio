"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DATA } from "@/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-zinc-300">{name}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: delay + 0.5 }}
          className="text-zinc-500 tabular-nums"
        >
          {level}%
        </motion.span>
      </div>
      <div className="h-1 rounded-full bg-zinc-800/80 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: [0.16, 1, 0.3, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-zinc-500 to-white"
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
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
          Technical Skills
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight text-white">
          Tools & Technologies
        </h2>
        <p className="mt-4 text-zinc-400 leading-relaxed">
          A snapshot of the technologies I work with daily to build scalable, performant applications.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Proficiency Bars */}
        <div className="space-y-8">
          <h3 className="text-lg font-medium text-zinc-200 mb-6">Core Proficiency</h3>
          {Object.entries(DATA.skillsByCategory).map(([category, skills]) => (
            <div key={category} className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-zinc-600">{category}</p>
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 0.15}
                />
              ))}
            </div>
          ))}
        </div>

        {/* All Skills Grid */}
        <div>
          <h3 className="text-lg font-medium text-zinc-200 mb-6">Full Stack</h3>
          <div className="flex flex-wrap gap-2">
            {DATA.skills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                whileHover={{
                  scale: 1.08,
                  borderColor: "rgba(161,161,170,0.5)",
                  color: "#fff",
                }}
                className="px-4 py-2 rounded-xl border border-zinc-800 bg-zinc-900/30 text-zinc-400 text-sm cursor-default transition-all duration-200"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12">
            <h3 className="text-lg font-medium text-zinc-200 mb-6">Education</h3>
            {DATA.education.map((edu) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="border border-zinc-800 rounded-xl p-6 bg-zinc-900/20 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-zinc-100 font-medium">{edu.school}</h4>
                    <p className="text-zinc-400 text-sm mt-1">{edu.degree}</p>
                  </div>
                  <span className="text-xs text-zinc-600 whitespace-nowrap">
                    {edu.start} — {edu.end}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
