// @ts-nocheck
"use client";

import { useState } from "react";
import { DATA } from "@/data";
import { ProjectSelector } from "./project-selector";
import { ProjectStage } from "./project-stage";

export function ProjectsSection() {
  const projects = DATA.projects.filter((p) => p.active);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeProject = projects[activeIndex];

  return (
    <section
      id="projects"
      className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 py-24"
    >
      {/* Section Header */}
      <div className="max-w-2xl">
        <p className="text-xs uppercase tracking-widest text-zinc-500">
          Selected Work
        </p>
        <h2 className="mt-3 text-3xl sm:text-4xl font-light tracking-tight text-white">
          Projects
        </h2>
        <p className="mt-4 text-zinc-400 text-base sm:text-lg">
          A curated selection of products I’ve designed and built end-to-end,
          focusing on clarity, scalability, and real-world impact.
        </p>
      </div>

      {/* Content */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10">
        <ProjectSelector
          projects={projects}
          activeIndex={activeIndex}
          onSelect={setActiveIndex}
        />

        <ProjectStage project={activeProject} />
      </div>
    </section>
  );
}
