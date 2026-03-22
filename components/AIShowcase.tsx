"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Brain,
  MessageSquare,
  Workflow,
  Cpu,
  Wand2,
  ArrowRight,
} from "lucide-react";
import { DATA } from "@/data";

/* ── Animated neural network nodes ── */
function NeuralViz() {
  const nodes = [
    { x: 10, y: 20 }, { x: 10, y: 50 }, { x: 10, y: 80 },
    { x: 45, y: 15 }, { x: 45, y: 45 }, { x: 45, y: 75 },
    { x: 80, y: 30 }, { x: 80, y: 60 },
  ];

  const edges = [
    [0, 3], [0, 4], [1, 3], [1, 4], [1, 5], [2, 4], [2, 5],
    [3, 6], [3, 7], [4, 6], [4, 7], [5, 6], [5, 7],
  ];

  const [activeEdge, setActiveEdge] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setActiveEdge((p) => (p + 1) % edges.length),
      400
    );
    return () => clearInterval(interval);
  }, [edges.length]);

  return (
    <svg viewBox="0 0 90 100" className="w-full h-full max-w-[120px]">
      {edges.map(([from, to], i) => (
        <motion.line
          key={`${from}-${to}`}
          x1={nodes[from].x}
          y1={nodes[from].y}
          x2={nodes[to].x}
          y2={nodes[to].y}
          stroke="white"
          strokeWidth={0.8}
          animate={{
            opacity: i === activeEdge ? 0.5 : 0.06,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
      {nodes.map((n, i) => (
        <motion.circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={3}
          fill="white"
          animate={{
            opacity: edges[activeEdge]?.includes(i) ? 0.8 : 0.15,
            scale: edges[activeEdge]?.includes(i) ? 1.3 : 1,
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </svg>
  );
}

/* ── Streaming text animation ── */
function StreamingText() {
  const lines = [
    "Analyzing user intent...",
    "Generating response...",
    "Applying context window...",
    "Streaming tokens...",
    "Response complete.",
  ];
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = lines[lineIndex];
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), 35);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLineIndex((l) => (l + 1) % lines.length);
      setCharIndex(0);
    }, 1200);
    return () => clearTimeout(t);
  }, [charIndex, lineIndex, lines]);

  return (
    <div className="font-mono text-[11px] text-white/40 leading-relaxed">
      <span>{lines[lineIndex].slice(0, charIndex)}</span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[5px] h-[12px] bg-white/40 ml-px align-middle"
      />
    </div>
  );
}

/* ── Prompt/response demo ── */
function PromptDemo() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setStep((s) => (s + 1) % 3),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  const prompts = [
    { role: "user", text: "Summarize this page" },
    { role: "ai", text: "This portfolio showcases..." },
    { role: "system", text: "Context: 2048 tokens" },
  ];

  return (
    <div className="space-y-2 w-full max-w-[200px]">
      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="flex items-start gap-2"
        >
          <span className="text-[9px] font-mono uppercase tracking-wider text-white/30 shrink-0 mt-0.5">
            {prompts[step].role}
          </span>
          <span className="text-[11px] text-white/50 font-mono">
            {prompts[step].text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

const AI_TOOLS = [
  { icon: Brain, label: "GPT-4 / GPT-4o" },
  { icon: Sparkles, label: "Claude API" },
  { icon: MessageSquare, label: "Conversational AI" },
  { icon: Workflow, label: "LangChain" },
  { icon: Cpu, label: "Embeddings & RAG" },
  { icon: Wand2, label: "Prompt Engineering" },
];

export default function AIShowcase() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24 overflow-hidden">
      <div ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-4">
            <p className="text-xs uppercase tracking-widest text-zinc-500">
              AI & Generative AI
            </p>
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Sparkles className="w-3.5 h-3.5 text-zinc-600" />
            </motion.div>
          </div>
          <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white">
            Building with Intelligence
          </h2>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            I integrate large language models, generative AI APIs, and intelligent
            automation into real products — from AI-powered chatbots to RAG
            pipelines and custom prompt systems.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Neural network viz — tall left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3 md:row-span-2 border border-zinc-800 rounded-2xl p-6 bg-gradient-to-b from-zinc-900/40 to-black flex flex-col items-center justify-center gap-4 group hover:border-zinc-700 transition-colors"
          >
            <NeuralViz />
            <div className="text-center">
              <p className="text-sm font-medium text-white">Neural Pipelines</p>
              <p className="text-[11px] text-zinc-600 mt-1">
                LLM chains, embeddings & vector search
              </p>
            </div>
          </motion.div>

          {/* AI tools row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-9 border border-zinc-800 rounded-2xl p-6 bg-gradient-to-b from-zinc-900/30 to-black hover:border-zinc-700 transition-colors"
          >
            <p className="text-xs uppercase tracking-widest text-zinc-600 mb-4">
              Tools & Models I Work With
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {AI_TOOLS.map((tool, i) => (
                <motion.div
                  key={tool.label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                  whileHover={{ scale: 1.04, borderColor: "rgba(113,113,122,0.5)" }}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl border border-zinc-800/60 bg-zinc-900/30 cursor-default transition-all"
                >
                  <tool.icon className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="text-xs text-zinc-300">{tool.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Streaming text card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="md:col-span-5 border border-zinc-800 rounded-2xl p-6 bg-gradient-to-b from-zinc-900/30 to-black hover:border-zinc-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-3">
                Real-time Streaming
              </p>
              <StreamingText />
            </div>
            <div className="mt-4 flex gap-1.5">
              {["SSE", "WebSocket", "Edge Functions"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full border border-zinc-800/50 text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Prompt engineering card */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-4 border border-zinc-800 rounded-2xl p-6 bg-gradient-to-b from-zinc-900/30 to-black hover:border-zinc-700 transition-colors flex flex-col justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-3">
                Prompt Engineering
              </p>
              <PromptDemo />
            </div>
            <div className="mt-4 flex gap-1.5">
              {["System prompts", "Few-shot", "Chain-of-thought"].map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] px-2 py-0.5 rounded-full border border-zinc-800/50 text-zinc-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* AI capabilities marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 overflow-hidden rounded-xl border border-zinc-800/50 py-3"
        >
          <motion.div
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="flex gap-8 whitespace-nowrap"
          >
            {[
              ...DATA.aiExpertise,
              ...DATA.aiExpertise,
            ].map((item, i) => (
              <span
                key={`${item}-${i}`}
                className="text-xs text-zinc-600 flex items-center gap-2"
              >
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm text-zinc-200 hover:border-zinc-500 hover:bg-white/10 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Discuss an AI Project
          </motion.a>
          <motion.a
            href="#projects"
            whileHover={{ x: 4 }}
            className="inline-flex items-center gap-1.5 px-4 py-3 text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            See AI in my projects
            <ArrowRight className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
