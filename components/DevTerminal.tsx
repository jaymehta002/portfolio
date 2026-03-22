"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Terminal, ChevronRight } from "lucide-react";

interface TerminalLine {
  type: "cmd" | "output" | "success" | "info" | "blank";
  text: string;
  delay: number; // ms after previous line
}

const SCRIPT: TerminalLine[] = [
  { type: "cmd", text: "jay init --project \"your-next-idea\"", delay: 0 },
  { type: "output", text: "Scaffolding project structure...", delay: 800 },
  { type: "info", text: "├── next.config.ts", delay: 150 },
  { type: "info", text: "├── prisma/schema.prisma", delay: 120 },
  { type: "info", text: "├── src/app/api/", delay: 120 },
  { type: "info", text: "├── src/components/", delay: 120 },
  { type: "info", text: "└── tailwind.config.ts", delay: 120 },
  { type: "success", text: "✓ Project scaffolded", delay: 400 },
  { type: "blank", text: "", delay: 300 },
  { type: "cmd", text: "jay design --architecture", delay: 500 },
  { type: "output", text: "Analyzing requirements...", delay: 700 },
  { type: "output", text: "Database schema → 8 models defined", delay: 500 },
  { type: "output", text: "API routes     → 12 endpoints mapped", delay: 400 },
  { type: "output", text: "Auth layer     → Next-Auth + Clerk ready", delay: 400 },
  { type: "output", text: "Payments       → Stripe integration queued", delay: 400 },
  { type: "success", text: "✓ Architecture locked", delay: 500 },
  { type: "blank", text: "", delay: 300 },
  { type: "cmd", text: "jay build --ship", delay: 500 },
  { type: "output", text: "Compiling 47 components...", delay: 900 },
  { type: "output", text: "Running 23 test suites... all passed", delay: 800 },
  { type: "output", text: "Optimizing bundle... 142kb gzipped", delay: 600 },
  { type: "output", text: "Lighthouse audit... 97/100", delay: 500 },
  { type: "success", text: "✓ Deployed to production", delay: 600 },
  { type: "blank", text: "", delay: 200 },
  { type: "info", text: "Total time: idea → production in 2 weeks.", delay: 400 },
  { type: "success", text: "Ready to build yours? →  jay@mehta ~ $", delay: 600 },
];

function TerminalTyper({ text, onDone }: { text: string; onDone: () => void }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (displayed.length >= text.length) {
      onDone();
      return;
    }
    const speed = 25 + Math.random() * 20;
    const t = setTimeout(
      () => setDisplayed(text.slice(0, displayed.length + 1)),
      speed
    );
    return () => clearTimeout(t);
  }, [displayed, text, onDone]);

  return (
    <>
      {displayed}
      {displayed.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.4, repeat: Infinity, repeatType: "reverse" }}
          className="inline-block w-[6px] h-[13px] bg-emerald-400/60 ml-px align-middle"
        />
      )}
    </>
  );
}

export default function DevTerminal() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [visibleLines, setVisibleLines] = useState<number>(0);
  const [currentTyping, setCurrentTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Progress through the script
  useEffect(() => {
    if (!inView || visibleLines >= SCRIPT.length) return;

    const line = SCRIPT[visibleLines];

    if (line.type === "cmd") {
      // Commands get typed character by character
      setCurrentTyping(true);
      return; // wait for TerminalTyper onDone
    }

    // Non-command lines appear after their delay
    const t = setTimeout(() => {
      setVisibleLines((v) => v + 1);
    }, line.delay);
    return () => clearTimeout(t);
  }, [inView, visibleLines, currentTyping]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleLines]);

  const handleTypeDone = () => {
    setCurrentTyping(false);
    // Small pause after command finishes typing before next line
    setTimeout(() => setVisibleLines((v) => v + 1), 300);
  };

  // Restart loop
  useEffect(() => {
    if (visibleLines >= SCRIPT.length) {
      const t = setTimeout(() => {
        setVisibleLines(0);
        setCurrentTyping(false);
      }, 5000);
      return () => clearTimeout(t);
    }
  }, [visibleLines]);

  return (
    <section ref={ref} className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="w-4 h-4 text-zinc-500" />
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              How I Ship
            </p>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white leading-snug">
            From idea to production —<br />
            <span className="text-zinc-400">watch the process live.</span>
          </h2>
          <p className="mt-6 text-zinc-500 leading-relaxed max-w-md">
            Every project follows the same philosophy: understand the problem
            deeply, architect for scale, build with precision, and ship with
            confidence. Here&apos;s what that looks like in real time.
          </p>

          {/* Process steps */}
          <div className="mt-8 space-y-4">
            {[
              { step: "01", label: "Scaffold", desc: "Project structure & tooling" },
              { step: "02", label: "Architect", desc: "Database, APIs, auth, payments" },
              { step: "03", label: "Build & Ship", desc: "Components, tests, deploy" },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, x: -12 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.12 }}
                className="flex items-center gap-4 group"
              >
                <span className="text-lg font-light text-zinc-700 tabular-nums group-hover:text-zinc-500 transition-colors">
                  {s.step}
                </span>
                <div>
                  <p className="text-sm text-zinc-200 font-medium">{s.label}</p>
                  <p className="text-xs text-zinc-600">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — terminal */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-950/90 overflow-hidden shadow-2xl shadow-black/40"
        >
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800/60 bg-zinc-900/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
            </div>
            <span className="ml-3 text-[11px] text-zinc-600 font-mono">
              jay@mehta ~ /projects
            </span>
          </div>

          {/* Terminal body */}
          <div
            ref={scrollRef}
            className="px-4 py-4 font-mono text-[12px] sm:text-[13px] leading-[22px] h-[380px] overflow-y-auto"
          >
            {SCRIPT.slice(0, visibleLines + (currentTyping ? 1 : 0)).map(
              (line, i) => {
                const isCurrentlyTyping =
                  currentTyping && i === visibleLines;

                if (line.type === "blank") {
                  return <div key={i} className="h-[22px]" />;
                }

                if (line.type === "cmd") {
                  return (
                    <div key={i} className="flex items-start">
                      <ChevronRight className="w-3.5 h-3.5 text-emerald-500/70 mt-[3px] mr-1.5 shrink-0" />
                      <span className="text-emerald-300/80">
                        {isCurrentlyTyping ? (
                          <TerminalTyper
                            text={line.text}
                            onDone={handleTypeDone}
                          />
                        ) : (
                          line.text
                        )}
                      </span>
                    </div>
                  );
                }

                if (line.type === "success") {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-emerald-400/70 ml-5"
                    >
                      {line.text}
                    </motion.div>
                  );
                }

                if (line.type === "info") {
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -4 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.1 }}
                      className="text-zinc-600 ml-5"
                    >
                      {line.text}
                    </motion.div>
                  );
                }

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-zinc-400 ml-5"
                  >
                    {line.text}
                  </motion.div>
                );
              }
            )}

            {/* Idle cursor when done */}
            {visibleLines >= SCRIPT.length && (
              <div className="flex items-center mt-1">
                <ChevronRight className="w-3.5 h-3.5 text-emerald-500/70 mr-1.5" />
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="inline-block w-[7px] h-[14px] bg-emerald-400/50"
                />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
