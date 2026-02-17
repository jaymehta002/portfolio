"use client";

import { motion } from "framer-motion";

export default function StorySection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const highlight =
    "text-zinc-100 font-semibold bg-gradient-to-r from-zinc-200/80 to-white bg-clip-text text-transparent";

  return (
    <section className="w-full bg-black text-zinc-300 py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="space-y-10"
        >
          {/* Title */}
          <motion.h2
            variants={item}
            className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-100"
          >
            The Journey So Far
          </motion.h2>

          {/* Story */}
          <motion.p variants={item} className="leading-relaxed text-lg">
            I’m <span className={highlight}>Jay Mehta</span> — a{" "}
            <span className={highlight}>full-stack developer</span> who loves
            turning ideas into real, scalable products. I’ve always been
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
            Whether I’m crafting an{" "}
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

          <motion.div variants={item}>
            <hr className="border-zinc-800 my-8" />
          </motion.div>

          {/* What I Do */}
          <motion.div variants={item} className="space-y-5">
            <h3 className="text-2xl font-semibold text-zinc-100">
              What I Love Building
            </h3>

            <ul className="space-y-3 text-lg">
              <li>
                🚀 <span className={highlight}>Full-stack products</span> — from
                idea → architecture → deployment
              </li>
              <li>
                🧠 <span className={highlight}>Scalable SaaS platforms</span>{" "}
                with clean database design
              </li>
              <li>
                🤖 <span className={highlight}>AI-led workflows</span> that
                reduce friction &amp; unlock efficiency
              </li>
              <li>
                🎯 <span className={highlight}>User-first experiences</span>{" "}
                focused on clarity &amp; speed
              </li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div variants={item} className="space-y-5">
            <h3 className="text-2xl font-semibold text-zinc-100">
              Tools I Speak Fluently
            </h3>

            <div className="flex flex-wrap gap-2">
              {[
                "Next.js",
                "React",
                "TypeScript",
                "Node.js",
                "Prisma",
                "PostgreSQL",
                "MongoDB",
                "Firebase",
                "Stripe",
                "TailwindCSS",
                "framer-motion",
              ].map((s) => (
                <span
                  key={s}
                  className="px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/50 text-zinc-200 text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Closing */}
          <motion.p variants={item} className="leading-relaxed text-lg pt-4">
            If you’re building something meaningful —{" "}
            <span className={highlight}>
              I’d love to help bring it to life
            </span>
            . Let’s collaborate, experiment, and ship products that make a
            difference.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
