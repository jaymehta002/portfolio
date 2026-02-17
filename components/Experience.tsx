"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    company: "Flutteryourway",
    role: "Full Stack Developer",
    period: "Jan 2024 — Aug 2024",
    story:
      "Built scalable admin panels, SEO-focused landing pages, and full-stack systems powering real-world applications.",
  },
  {
    company: "Metamorph",
    role: "Full Stack Developer",
    period: "Sep 2023 — Dec 2023",
    story:
      "Redesigned business platforms, implemented admin controls, and optimized workflows for dynamic teams.",
  },
];

export default function ExperienceStory() {
  return (
    <section className="w-full bg-black text-zinc-300 py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-100">
            My Work — Told as a Story
          </h2>
          <p className="text-zinc-400 mt-3">
            A journey of building, breaking, shipping — and learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">

          {/* Narrator */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:sticky top-24"
          >
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image
                src="/me.png"
                alt="Narrator"
                width={140}
                height={140}
                className="rounded-2xl border border-zinc-700 shadow-xl"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center text-zinc-400 mt-4 text-sm"
            >
              “Hi — I’m Jay. Let me walk you through my story…”
            </motion.p>
          </motion.div>

          {/* Timeline */}
          <div className="space-y-12 relative">

            <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-zinc-800/70 hidden md:block" />

            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-10 md:pl-12"
              >
                {/* Dot */}
                <motion.div
                  className="w-4 h-4 rounded-full bg-zinc-300 absolute left-0 md:left-[-2px] top-2"
                  whileHover={{ scale: 1.2 }}
                />

                {/* Card */}
                <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-600 transition-colors">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-semibold text-zinc-100">
                      {exp.role}
                    </h3>
                    <span className="text-xs text-zinc-400">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-zinc-400 text-sm">
                    {exp.company}
                  </p>

                  <p className="mt-4 leading-relaxed text-zinc-300">
                    {exp.story}
                  </p>

                  {/* Micro Interaction */}
                  <motion.div
                    whileHover={{ x: 6 }}
                    className="mt-4 text-sm text-zinc-400"
                  >
                    → Built with care, iteration & performance in mind
                  </motion.div>
                </div>
              </motion.div>
            ))}

            {/* Closing Narration */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-10 text-zinc-300"
            >
              <p className="text-lg leading-relaxed">
                Today, I focus on building{" "}
                <span className="text-zinc-100 font-semibold">
                  scalable SaaS, AI-driven tools, and meaningful user
                  experiences
                </span>
                . I love shipping products that balance{" "}
                <span className="text-zinc-100 font-semibold">
                  engineering precision
                </span>{" "}
                with{" "}
                <span className="text-zinc-100 font-semibold">
                  human-centered design
                </span>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
