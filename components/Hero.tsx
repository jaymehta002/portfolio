"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X, ChevronDown, Sparkles } from "lucide-react";
import { DATA } from "@/data";

function TypingText({ texts }: { texts: string[] }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = texts[index];

    if (!deleting && displayed.length < current.length) {
      const t = setTimeout(
        () => setDisplayed(current.slice(0, displayed.length + 1)),
        60
      );
      return () => clearTimeout(t);
    }

    if (!deleting && displayed.length === current.length) {
      const t = setTimeout(() => setDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length > 0) {
      const t = setTimeout(
        () => setDisplayed(displayed.slice(0, -1)),
        30
      );
      return () => clearTimeout(t);
    }

    if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % texts.length);
    }
  }, [displayed, deleting, index, texts]);

  return (
    <span className="text-zinc-400">
      {displayed}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[2px] h-[1em] bg-zinc-400 ml-0.5 align-middle"
      />
    </span>
  );
}

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi — I'm Jay's AI assistant. Ask me about his work, projects, or how to connect.",
    },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    setMessages((m) => [...m, { role: "user", content: input }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "This is a placeholder response. Connect the OpenAI API to make this fully functional.",
        },
      ]);
    }, 600);
  };

  const roles = [
    "Full-Stack Developer",
    "SaaS Builder",
    "AI & GenAI Engineer",
    "Product Engineer",
    "LLM Integration Specialist",
  ];

  return (
    <section className="relative min-h-[100svh] flex items-center">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Floating tag */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs text-zinc-400"
        >
          <motion.span
            className="w-2 h-2 rounded-full bg-emerald-500"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          Available for collaboration
        </motion.div>

        {/* Skill highlights */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-6 flex flex-wrap gap-2"
        >
          {[
            { icon: Sparkles, label: "AI Integration" },
            { icon: Bot, label: "OpenAI / LLMs" },
          ].map((badge, i) => (
            <motion.span
              key={badge.label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + i * 0.08 }}
              whileHover={{ scale: 1.05, borderColor: "rgba(113,113,122,0.5)" }}
              className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800/60 bg-zinc-900/30 px-3 py-1 text-[11px] text-zinc-500 cursor-default transition-all"
            >
              <badge.icon className="w-3 h-3" />
              {badge.label}
            </motion.span>
          ))}
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl"
        >
          <h1
            className="font-light tracking-tight text-white
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {DATA.name.split(" ").map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-4"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Typing subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl md:text-2xl"
          >
            <TypingText texts={roles} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 text-pretty text-zinc-500 text-base sm:text-lg max-w-2xl leading-relaxed"
          >
            {DATA.description.replace(/"/g, "")}
          </motion.p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <motion.button
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-zinc-700 bg-white/5 px-6 py-3 text-sm text-zinc-200
              hover:border-zinc-500 hover:bg-white/10 transition-all duration-300"
          >
            Ask AI About Me
          </motion.button>

          <motion.a
            href="#projects"
            whileHover={{ x: 4 }}
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors inline-flex items-center gap-1"
          >
            View Projects
            <span className="transition-transform">→</span>
          </motion.a>

          <a
            href={DATA.navbar.find((n) => n.label === "Resume")?.href || "#"}
            download
            className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 flex items-center gap-5"
        >
          {Object.values(DATA.contact.social)
            .filter((s) => s.navbar)
            .map((social, i) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.05 }}
                whileHover={{ y: -2 }}
                className="text-xs text-zinc-600 hover:text-zinc-300 transition-colors uppercase tracking-wider"
              >
                {social.name}
              </motion.a>
            ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 flex flex-wrap gap-8 sm:gap-12"
        >
          {DATA.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.08 }}
              className="group"
            >
              <p className="text-2xl sm:text-3xl font-light text-white tabular-nums group-hover:text-zinc-300 transition-colors">
                {stat.value}
              </p>
              <p className="text-[11px] text-zinc-600 uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Location */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className="mt-8 text-xs text-zinc-700"
        >
          Based in {DATA.location}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-zinc-700" />
        </motion.div>
      </motion.div>

      {/* AI Chat */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6
                w-[92vw] sm:w-[380px] h-[520px]
                bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl
                z-50 flex flex-col overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Bot className="w-4 h-4" />
                  {DATA.name.split(" ")[0]}&apos;s AI
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className={`text-sm ${
                      m.role === "user"
                        ? "text-right text-white"
                        : "text-zinc-400"
                    }`}
                  >
                    <span
                      className={`inline-block rounded-xl px-3 py-2 max-w-[85%]
                        ${
                          m.role === "user"
                            ? "bg-white text-black"
                            : "bg-zinc-900"
                        }`}
                    >
                      {m.content}
                    </span>
                  </motion.div>
                ))}
                <div ref={endRef} />
              </div>

              {/* Input */}
              <div className="border-t border-zinc-800 p-3 flex gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && send()}
                  placeholder="Ask something…"
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white
                    placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 transition-colors"
                />
                <button
                  onClick={send}
                  className="rounded-lg bg-white px-3 text-black hover:bg-zinc-200 transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
