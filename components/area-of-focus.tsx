// "use client";

// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { Code2, Blocks, Zap, Sparkles } from "lucide-react";

// /* -------------------------------------------------------------------------- */
// /*                               Animations                                   */
// /* -------------------------------------------------------------------------- */

// function CodeAnimation() {
//   const [activeLines, setActiveLines] = useState<number[]>([0, 1]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveLines((prev) => {
//         const next = [...prev];
//         next.shift();
//         next.push((next[next.length - 1] + 1) % 4);
//         return next;
//       });
//     }, 1500);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col gap-2 w-full max-w-[200px]">
//       {[0, 1, 2, 3].map((i) => (
//         <motion.div
//           key={i}
//           className={`h-1.5 rounded-full transition-all duration-500 ${
//             activeLines.includes(i) ? "bg-white/30" : "bg-white/5"
//           }`}
//           style={{ width: `${60 + i * 10}%` }}
//           animate={{ opacity: activeLines.includes(i) ? 1 : 0.3 }}
//         />
//       ))}
//     </div>
//   );
// }

// function ArchitectureGrid() {
//   const [layout, setLayout] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(
//       () => setLayout((prev) => (prev + 1) % 2),
//       2500
//     );
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <motion.div
//       layout
//       className={`grid ${
//         layout === 0 ? "grid-cols-3" : "grid-cols-2"
//       } gap-2 w-full max-w-[160px]`}
//       transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//     >
//       {[1, 2, 3, 4, 5, 6]
//         .slice(0, layout === 0 ? 6 : 4)
//         .map((i) => (
//           <motion.div
//             key={i}
//             layout
//             className="bg-white/10 rounded h-8 w-full"
//             transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
//           />
//         ))}
//     </motion.div>
//   );
// }

// function PerformanceMetric() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setLoading(false), 800);
//     return () => clearTimeout(timeout);
//   }, []);

//   return (
//     <div className="flex flex-col items-center gap-3">
//       <motion.div
//         className="text-4xl font-light text-white tabular-nums"
//         initial={{ opacity: 0, y: 10 }}
//         animate={{ opacity: loading ? 0.3 : 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {loading ? "---" : "95"}
//       </motion.div>

//       <div className="text-xs text-zinc-500 uppercase tracking-wider">
//         Performance
//       </div>

//       <div className="w-32 h-1 bg-white/5 rounded-full overflow-hidden">
//         <motion.div
//           className="h-full bg-white/30 rounded-full"
//           initial={{ width: 0 }}
//           animate={{ width: loading ? 0 : "95%" }}
//           transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
//         />
//       </div>
//     </div>
//   );
// }

// function AISparkle() {
//   return (
//     <div className="relative w-20 h-20 flex items-center justify-center">
//       <Sparkles className="w-10 h-10 text-white/70 z-10" />
//       {[0, 1, 2].map((p) => (
//         <motion.div
//           key={p}
//           className="absolute w-2 h-2 bg-white/20 rounded-full"
//           initial={{ scale: 0, x: 0, y: 0 }}
//           animate={{
//             scale: [0, 1, 0],
//             x: [0, (p - 1) * 20, (p - 1) * 30],
//             y: [0, p === 1 ? -25 : 25, p === 1 ? -35 : 35],
//           }}
//           transition={{
//             duration: 2,
//             repeat: Infinity,
//             delay: p * 0.4,
//             ease: "easeOut",
//           }}
//         />
//       ))}
//     </div>
//   );
// }

// /* -------------------------------------------------------------------------- */
// /*                                Config                                      */
// /* -------------------------------------------------------------------------- */

// const FOCUS_ICONS: Record<string, React.ElementType> = {
//   "Full-Stack Product Engineering": Code2,
//   "Scalable SaaS Architecture": Blocks,
//   "AI & Automation": Sparkles,
//   "Performance & UX": Zap,
// };

// const FOCUS_ANIMATIONS: Record<string, React.ElementType> = {
//   "Full-Stack Product Engineering": CodeAnimation,
//   "Scalable SaaS Architecture": ArchitectureGrid,
//   "AI & Automation": AISparkle,
//   "Performance & UX": PerformanceMetric,
// };

// const GRID_LAYOUTS = [
//   { cols: 2, rows: 2 },
//   { cols: 2, rows: 1 },
//   { cols: 2, rows: 2 },
//   { cols: 4, rows: 1 },
// ];

// const COL_SPANS: Record<number, string> = {
//   1: "md:col-span-1",
//   2: "md:col-span-2",
//   3: "md:col-span-3",
//   4: "md:col-span-4",
//   5: "md:col-span-5",
//   6: "md:col-span-6",
// };

// /* -------------------------------------------------------------------------- */
// /*                                Types                                       */
// /* -------------------------------------------------------------------------- */

// interface FocusArea {
//   title: string;
//   description: string;
// }

// interface WhatIDoProps {
//   focusAreas?: FocusArea[];
//   sectionLabel?: string;
//   sectionTitle?: string;
// }

// /* -------------------------------------------------------------------------- */
// /*                               Component                                    */
// /* -------------------------------------------------------------------------- */

// export function WhatIDo({
//   focusAreas = [],
//   sectionLabel = "What I Do",
//   sectionTitle = "Areas of Focus",
// }: WhatIDoProps) {
//   if (focusAreas.length === 0) return null;

//   return (
//     <section
//       id="focus"
//       className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 py-24"
//     >
//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: 12 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6, ease: "easeOut" }}
//         className="max-w-2xl mb-12"
//       >
//         <p className="text-xs uppercase tracking-widest text-zinc-500">
//           {sectionLabel}
//         </p>
//         <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight text-white">
//           {sectionTitle}
//         </h2>
//       </motion.div>

//       {/* Bento Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-6 gap-4 auto-rows-[180px]">
//         {focusAreas.map((area, index) => {
//           const layout = GRID_LAYOUTS[index] ?? { cols: 2, rows: 1 };
//           const Icon = FOCUS_ICONS[area.title];
//           const Animation = FOCUS_ANIMATIONS[area.title];

//           return (
//             <motion.div
//               key={area.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className={[
//                 COL_SPANS[layout.cols],
//                 layout.rows === 2 ? "md:row-span-2" : "",
//                 "border border-zinc-800 rounded-xl p-6 flex flex-col hover:border-zinc-700 transition-colors",
//               ].join(" ")}
//             >
//               <div className="flex-1 flex items-center justify-center">
//                 {Animation && <Animation />}
//               </div>

//               <div className="mt-auto">
//                 <h3 className="text-lg font-medium text-white flex items-center gap-2">
//                   {Icon && <Icon className="w-4 h-4" />}
//                   {area.title}
//                 </h3>
//                 <p className="text-zinc-400 text-sm mt-2 leading-relaxed">
//                   {area.description}
//                 </p>
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import { Code2, Blocks, Sparkles, Zap } from "lucide-react";

type FocusTitle =
  | "Full-Stack Product Engineering"
  | "Scalable SaaS Architecture"
  | "AI & Automation"
  | "Performance & UX";


const ICONS: Record<FocusTitle, React.ElementType> = {
  "Full-Stack Product Engineering": Code2,
  "Scalable SaaS Architecture": Blocks,
  "AI & Automation": Sparkles,
  "Performance & UX": Zap,
};

interface FocusArea {
  title: FocusTitle;
  description: string;
}

interface Props {
  focusAreas: FocusArea[];
}

export function WhatIDo({ focusAreas }: Props) {
  return (
    <section className="relative mx-auto max-w-6xl px-4 py-28">
      {/* Header */}
      <div className="mb-16 max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          What I Do
        </p>
        <h2 className="mt-4 text-4xl font-light text-white">
        I focus on building thoughtful, scalable digital products by combining
        strong engineering foundations with a product-first mindset.
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {focusAreas.map((area, index) => {
          const Icon = ICONS[area.title];

          return (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b from-zinc-900/40 to-black p-8 hover:border-zinc-700 transition"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-white/5 to-transparent" />

              {/* Icon */}
              <div className="mb-6 inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-zinc-900/60 p-3">
                {Icon && <Icon className="h-5 w-5 text-white/80" />}
              </div>

              {/* Content */}
              <h3 className="text-lg font-medium text-white mb-3">
                {area.title}
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400">
                {area.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
