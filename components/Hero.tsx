"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import { DATA } from "@/data"; // adjust path if needed

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi — I’m Jay’s AI assistant. Ask me about his work, projects, or how to connect.",
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

  return (
    <section className="relative min-h-[100svh] flex items-center">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Identity */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="text-balance font-light tracking-tight text-white
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {DATA.name}
          </h1>

          <p className="mt-4 text-pretty text-zinc-400
            text-base sm:text-lg md:text-xl">
            {DATA.description.replace(/"/g, "")}
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => setOpen(true)}
            className="rounded-full border border-zinc-700 px-6 py-3 text-sm text-zinc-200
              hover:border-zinc-400 transition"
          >
            Ask AI About Me
          </button>

          <a
            href="#projects"
            className="text-sm text-zinc-500 hover:text-zinc-300 transition"
          >
            View Projects →
          </a>
        </motion.div>

        {/* Availability */}
        <p className="mt-6 text-xs text-zinc-600">
          Based in {DATA.location} · Open to collaboration
        </p>
      </div>

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6
                w-[92vw] sm:w-[380px] h-[520px]
                bg-zinc-950 border border-zinc-800 rounded-2xl shadow-2xl
                z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-800">
                <div className="flex items-center gap-2 text-sm text-zinc-300">
                  <Bot className="w-4 h-4" />
                  {DATA.name.split(" ")[0]}’s AI
                </div>
                <button
                  onClick={() => setOpen(false)}
                  className="text-zinc-500 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
                {messages.map((m, i) => (
                  <div
                    key={i}
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
                  </div>
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
                  className="flex-1 bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm
                    focus:outline-none"
                />
                <button
                  onClick={send}
                  className="rounded-lg bg-white px-3 text-black"
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
