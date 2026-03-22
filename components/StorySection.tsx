"use client";

import { motion } from "framer-motion";
import { DATA } from "@/data";

export default function StorySection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const highlight =
    "text-zinc-100 font-semibold bg-gradient-to-r from-zinc-200/80 to-white bg-clip-text text-transparent";

  return (
    <section className="relative z-10 w-full bg-black text-zinc-300 py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="space-y-10"
        >
          {/* Label */}
          <motion.p
            variants={item}
            className="text-xs uppercase tracking-widest text-zinc-500"
          >
            About Me
          </motion.p>

          {/* Title */}
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-light tracking-tight text-zinc-100"
          >
            The Journey So Far
          </motion.h2>

          {/* Story */}
          <motion.p variants={item} className="leading-relaxed text-lg">
            I&apos;m <span className={highlight}>Jay Mehta</span> — a{" "}
            <span className={highlight}>full-stack developer</span> who loves
            turning ideas into real, scalable products. I&apos;ve always been
            fascinated by how simple lines of code can shape powerful digital
            experiences — from{" "}
            <span className={highlight}>
              MVPs that help startups find direction
            </span>{" "}
            to{" "}
            <span className={highlight}>
              SaaS products built for real-world impact
            </span>
            .
          </motion.p>

          <motion.p variants={item} className="leading-relaxed text-lg">
            My toolkit lives at the intersection of{" "}
            <span className={highlight}>Next.js</span>,{" "}
            <span className={highlight}>TypeScript</span>,{" "}
            <span className={highlight}>Prisma</span>,{" "}
            <span className={highlight}>PostgreSQL</span>, and{" "}
            <span className={highlight}>modern UI</span> — with a strong focus
            on <span className={highlight}>performance</span>,{" "}
            <span className={highlight}>clarity</span>, and{" "}
            <span className={highlight}>developer experience</span>.
          </motion.p>

          <motion.p variants={item} className="leading-relaxed text-lg">
            Whether I&apos;m crafting an{" "}
            <span className={highlight}>admin panel</span> to simplify complex
            workflows, building{" "}
            <span className={highlight}>financial platforms</span> with deep
            integrations, or experimenting with{" "}
            <span className={highlight}>AI &amp; automation</span> — my goal is
            always the same:
            <span className={highlight}>
              {" "}
              build products people genuinely love using
            </span>
            .
          </motion.p>

          <motion.p variants={item} className="leading-relaxed text-lg">
            I believe good software balances{" "}
            <span className={highlight}>engineering precision</span> with{" "}
            <span className={highlight}>human-centered design</span>. It should
            be fast, intuitive, visually calm — and feel effortless.
          </motion.p>

          {/* AI & GenAI */}
          <motion.p variants={item} className="leading-relaxed text-lg">
            More recently, I&apos;ve been deep in the{" "}
            <span className={highlight}>AI &amp; generative AI</span> space —
            building{" "}
            <span className={highlight}>LLM-powered chatbots</span>,
            integrating{" "}
            <span className={highlight}>GPT-4 and Claude</span> into production
            apps, designing{" "}
            <span className={highlight}>RAG pipelines</span> with vector
            databases, and crafting{" "}
            <span className={highlight}>prompt systems</span> that turn raw
            model output into genuinely useful features.
          </motion.p>

          <motion.div variants={item}>
            <hr className="border-zinc-800 my-4" />
          </motion.div>

          {/* Skills from DATA */}
          <motion.div variants={item} className="space-y-5">
            <h3 className="text-xl font-medium text-zinc-100">
              Tools I Work With
            </h3>

            <div className="flex flex-wrap gap-2">
              {DATA.skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.25, delay: i * 0.025 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(161,161,170,0.4)",
                  }}
                  className="px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/40 text-zinc-300 text-sm transition-all cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Closing */}
          <motion.p variants={item} className="leading-relaxed text-lg pt-4">
            If you&apos;re building something meaningful —{" "}
            <span className={highlight}>
              I&apos;d love to help bring it to life
            </span>
            . Let&apos;s collaborate, experiment, and ship products that make a
            difference.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
