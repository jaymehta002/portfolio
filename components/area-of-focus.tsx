"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  Blocks,
  Sparkles,
  Zap,
  Plug,
  Palette,
} from "lucide-react";

/* ────────────────────────── Micro Animations ────────────────────────── */

function MiniIDE() {
  const lines = [
    { indent: 0, tokens: [
      { text: "export", color: "text-purple-400/70" },
      { text: " default ", color: "text-white/30" },
      { text: "function", color: "text-purple-400/70" },
      { text: " App", color: "text-yellow-300/60" },
      { text: "() {", color: "text-white/30" },
    ]},
    { indent: 1, tokens: [
      { text: "const", color: "text-purple-400/70" },
      { text: " [data, setData]", color: "text-sky-300/60" },
      { text: " = ", color: "text-white/30" },
      { text: "useState", color: "text-yellow-300/60" },
      { text: "([])", color: "text-white/30" },
    ]},
    { indent: 1, tokens: [] },
    { indent: 1, tokens: [
      { text: "useEffect", color: "text-yellow-300/60" },
      { text: "(() => {", color: "text-white/30" },
    ]},
    { indent: 2, tokens: [
      { text: "fetch", color: "text-sky-300/60" },
      { text: "(\"/api/projects\")", color: "text-emerald-400/50" },
    ]},
    { indent: 3, tokens: [
      { text: ".then", color: "text-white/30" },
      { text: "(r => r.", color: "text-white/25" },
      { text: "json", color: "text-yellow-300/60" },
      { text: "())", color: "text-white/25" },
    ]},
    { indent: 3, tokens: [
      { text: ".then", color: "text-white/30" },
      { text: "(", color: "text-white/25" },
      { text: "setData", color: "text-sky-300/60" },
      { text: ")", color: "text-white/25" },
    ]},
    { indent: 1, tokens: [
      { text: "}, [])", color: "text-white/30" },
    ]},
  ];

  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) {
      const t = setTimeout(() => setVisibleLines(0), 2500);
      return () => clearTimeout(t);
    }
    const t = setTimeout(
      () => setVisibleLines((v) => v + 1),
      visibleLines === 0 ? 600 : 200 + Math.random() * 250
    );
    return () => clearTimeout(t);
  }, [visibleLines, lines.length]);

  return (
    <div className="w-full max-w-[260px] rounded-lg border border-zinc-800/60 bg-zinc-950/80 overflow-hidden">
      {/* Title bar */}
      <div className="flex items-center gap-1.5 px-3 py-1.5 border-b border-zinc-800/40">
        <div className="w-1.5 h-1.5 rounded-full bg-red-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/40" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-500/40" />
        <span className="ml-2 text-[8px] text-zinc-700 font-mono">page.tsx</span>
      </div>
      {/* Code */}
      <div className="px-3 py-2 font-mono text-[10px] leading-[18px] min-h-[130px]">
        {lines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -4 }}
            animate={{
              opacity: i < visibleLines ? 1 : 0,
              x: i < visibleLines ? 0 : -4,
            }}
            transition={{ duration: 0.15 }}
            style={{ paddingLeft: line.indent * 12 }}
            className="flex whitespace-pre"
          >
            <span className="text-zinc-800 w-4 shrink-0 select-none text-right mr-2">
              {i + 1}
            </span>
            {line.tokens.length === 0 ? (
              <span>&nbsp;</span>
            ) : (
              line.tokens.map((token, j) => (
                <span key={j} className={token.color}>
                  {token.text}
                </span>
              ))
            )}
            {/* Cursor on current line */}
            {i === visibleLines - 1 && visibleLines < lines.length && (
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="inline-block w-[5px] h-[12px] bg-white/40 ml-px"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ArchitectureGrid() {
  const [layout, setLayout] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setLayout((prev) => (prev + 1) % 3),
      2200
    );
    return () => clearInterval(interval);
  }, []);

  const configs = [
    { cols: "grid-cols-3", count: 6 },
    { cols: "grid-cols-2", count: 4 },
    { cols: "grid-cols-4", count: 8 },
  ];
  const { cols, count } = configs[layout];

  return (
    <motion.div
      layout
      className={`grid ${cols} gap-1.5 w-full max-w-[130px]`}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={`${layout}-${i}`}
          layout
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/10 rounded h-5 w-full"
          transition={{ duration: 0.35, delay: i * 0.025 }}
        />
      ))}
    </motion.div>
  );
}

function AISparkle() {
  return (
    <div className="relative w-14 h-14 flex items-center justify-center">
      <Sparkles className="w-6 h-6 text-white/60 z-10" />
      {[0, 1, 2, 3, 4].map((p) => (
        <motion.div
          key={p}
          className="absolute w-1 h-1 bg-white/40 rounded-full"
          animate={{
            scale: [0, 1.2, 0],
            x: [0, (p - 2) * 14, (p - 2) * 22],
            y: [0, p % 2 === 0 ? -14 : 14, p % 2 === 0 ? -22 : 22],
            opacity: [0, 0.9, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: p * 0.3,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

function PerformanceMetric() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const target = 95;
    const step = target / 35;
    let current = 0;
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setScore(target);
        clearInterval(interval);
      } else {
        setScore(Math.round(current));
      }
    }, 25);
    return () => clearInterval(interval);
  }, [inView]);

  return (
    <div ref={ref} className="flex flex-col items-center gap-1.5">
      <div className="relative w-14 h-14">
        <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
          <path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="2.5"
          />
          <motion.path
            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth="2.5"
            strokeDasharray="100"
            initial={{ strokeDashoffset: 100 }}
            animate={{ strokeDashoffset: 100 - score }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-light text-white tabular-nums">
            {score}
          </span>
        </div>
      </div>
      <span className="text-[9px] text-zinc-600 uppercase tracking-wider">
        Lighthouse
      </span>
    </div>
  );
}

function ApiPulse() {
  return (
    <div className="flex items-center gap-3">
      {/* Endpoint lines */}
      <div className="flex flex-col gap-2">
        {["GET", "POST", "PUT"].map((method, i) => (
          <motion.div
            key={method}
            className="flex items-center gap-2"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2, duration: 0.3 }}
          >
            <span className="text-[9px] font-mono text-white/40 w-7">
              {method}
            </span>
            <motion.div
              className="h-[3px] rounded-full bg-white/15"
              style={{ width: 50 + i * 15 }}
              animate={{ opacity: [0.15, 0.4, 0.15] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
            <motion.div
              className="w-1.5 h-1.5 rounded-full"
              animate={{
                backgroundColor: [
                  "rgba(74,222,128,0.6)",
                  "rgba(74,222,128,0.2)",
                  "rgba(74,222,128,0.6)",
                ],
              }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function ComponentTree() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActive((prev) => (prev + 1) % 4),
      1500
    );
    return () => clearInterval(interval);
  }, []);

  const layers = [
    { w: "w-16", label: "App" },
    { w: "w-12", label: "Layout" },
    { w: "w-20", label: "Page" },
    { w: "w-10", label: "Card" },
  ];

  return (
    <div className="flex flex-col items-center gap-1.5">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.label}
          className={`${layer.w} h-5 rounded border flex items-center justify-center`}
          animate={{
            borderColor:
              active === i ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.06)",
            backgroundColor:
              active === i ? "rgba(255,255,255,0.06)" : "transparent",
          }}
          transition={{ duration: 0.3 }}
        >
          <span className="text-[8px] text-white/40 font-mono">
            {layer.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

/* ────────────────────────── Config ────────────────────────── */

type FocusTitle =
  | "Full-Stack Product Engineering"
  | "Scalable SaaS Architecture"
  | "AI & Automation"
  | "Performance & UX"
  | "API Design & Integration"
  | "UI Engineering & Design Systems";

const ICONS: Record<FocusTitle, React.ElementType> = {
  "Full-Stack Product Engineering": Code2,
  "Scalable SaaS Architecture": Blocks,
  "AI & Automation": Sparkles,
  "Performance & UX": Zap,
  "API Design & Integration": Plug,
  "UI Engineering & Design Systems": Palette,
};

const ANIMATIONS: Record<FocusTitle, React.ElementType> = {
  "Full-Stack Product Engineering": MiniIDE,
  "Scalable SaaS Architecture": ArchitectureGrid,
  "AI & Automation": AISparkle,
  "Performance & UX": PerformanceMetric,
  "API Design & Integration": ApiPulse,
  "UI Engineering & Design Systems": ComponentTree,
};

/*
  Bento layout on md+ (6-column grid):

  ┌──────────────────────┬────────────┐
  │                      │   SaaS     │  row 1
  │   Full-Stack         │  (2c, 1r)  │
  │   (4 cols, 2 rows)   ├────────────┤
  │                      │   AI       │  row 2
  │                      │  (2c, 1r)  │
  ├───────────┬──────────┴────────────┤
  │  Perf     │   API Design          │  row 3
  │  (2c, 1r) │   (4 cols, 1 row)     │
  ├───────────┴───────────────────────┤
  │   UI Engineering (6 cols, 1 row)  │  row 4
  └───────────────────────────────────┘
*/
const GRID_CLASSES: string[] = [
  "md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-3", // Full-Stack — large hero
  "md:col-start-5 md:col-end-7 md:row-start-1 md:row-end-2", // SaaS — top-right
  "md:col-start-5 md:col-end-7 md:row-start-2 md:row-end-3", // AI — bottom-right
  "md:col-start-1 md:col-end-3 md:row-start-3 md:row-end-4", // Performance — bottom-left
  "md:col-start-3 md:col-end-7 md:row-start-3 md:row-end-4", // API — bottom-wide
  "md:col-start-1 md:col-end-7 md:row-start-4 md:row-end-5", // UI — full-width
];

/* ────────────────────────── Component ────────────────────────── */

interface FocusArea {
  title: FocusTitle;
  description: string;
  tech: readonly string[];
  stat: { value: string; label: string };
}

interface Props {
  focusAreas: readonly FocusArea[];
}

export function WhatIDo({ focusAreas }: Props) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-28">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          What I Do
        </p>
        <h2 className="mt-4 text-4xl font-light text-white leading-snug">
          I focus on building thoughtful, scalable digital products by combining
          strong engineering foundations with a product-first mindset.
        </h2>
      </motion.div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:grid-rows-[200px_200px_180px_160px]">
        {focusAreas.map((area, index) => {
          const Icon = ICONS[area.title];
          const Animation = ANIMATIONS[area.title];
          const isHero = index === 0;
          const isFullWidth = index === 5;

          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ borderColor: "rgba(113,113,122,0.4)" }}
              className={`
                ${GRID_CLASSES[index]}
                group relative overflow-hidden border border-zinc-800 rounded-2xl
                bg-gradient-to-b from-zinc-900/30 to-black
                transition-all duration-300
                ${isFullWidth ? "flex flex-row items-center gap-8 px-8 py-6" : "flex flex-col p-6"}
              `}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />

              {isFullWidth ? (
                /* ── Full-width banner layout ── */
                <>
                  <div className="relative z-10 shrink-0">
                    {Animation && <Animation />}
                  </div>
                  <div className="relative z-10 flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-base font-medium text-white flex items-center gap-2">
                        {Icon && (
                          <Icon className="w-4 h-4 text-zinc-500 group-hover:text-zinc-300 transition-colors" />
                        )}
                        {area.title}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800 text-zinc-600">
                        {area.stat.value} {area.stat.label}
                      </span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-400 transition-colors mb-3">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800/60 text-zinc-600 group-hover:text-zinc-500 group-hover:border-zinc-700/60 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : isHero ? (
                /* ── Hero tile (tall) ── */
                <>
                  <div className="flex items-center justify-between mb-1">
                    <div className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 p-2.5 group-hover:border-zinc-700 transition-colors">
                      {Icon && (
                        <Icon className="h-4 w-4 text-zinc-400 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-light text-white tabular-nums leading-none">
                        {area.stat.value}
                      </p>
                      <p className="text-[9px] text-zinc-600 uppercase tracking-wider mt-0.5">
                        {area.stat.label}
                      </p>
                    </div>
                  </div>

                  <div className="flex-1 flex items-center justify-center relative z-10">
                    {Animation && <Animation />}
                  </div>

                  <div className="mt-auto relative z-10">
                    <h3 className="text-base font-medium text-white mb-1.5">
                      {area.title}
                    </h3>
                    <p className="text-zinc-500 text-[13px] leading-relaxed group-hover:text-zinc-400 transition-colors mb-3">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {area.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-zinc-800/60 text-zinc-600 group-hover:text-zinc-500 group-hover:border-zinc-700/60 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* ── Standard tile ── */
                <>
                  <div className="flex items-start justify-between mb-auto">
                    <div className="inline-flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/60 p-2 group-hover:border-zinc-700 transition-colors">
                      {Icon && (
                        <Icon className="h-3.5 w-3.5 text-zinc-400 group-hover:text-white transition-colors" />
                      )}
                    </div>
                    {Animation && (
                      <div className="relative z-10">
                        <Animation />
                      </div>
                    )}
                  </div>

                  <div className="mt-auto relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-medium text-white">
                        {area.title}
                      </h3>
                    </div>
                    <p className="text-zinc-500 text-[12px] leading-relaxed group-hover:text-zinc-400 transition-colors mb-2">
                      {area.description}
                    </p>
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] text-zinc-600">
                        <span className="text-zinc-400 font-medium">
                          {area.stat.value}
                        </span>{" "}
                        {area.stat.label}
                      </span>
                      <div className="flex gap-1">
                        {area.tech.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[9px] px-1.5 py-px rounded-full border border-zinc-800/50 text-zinc-700"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
