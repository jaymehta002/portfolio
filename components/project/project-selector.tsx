"use client";

import { cn } from "@/lib/utils";

interface ProjectSelectorProps {
  projects: {
    title: string;
    dates: string;
  }[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export function ProjectSelector({
  projects,
  activeIndex,
  onSelect,
}: ProjectSelectorProps) {
  return (
    <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible">
      {projects.map((project, index) => (
        <button
          key={project.title}
          onClick={() => onSelect(index)}
          className={cn(
            "text-left rounded-xl px-4 py-3 border transition-colors whitespace-nowrap",
            index === activeIndex
              ? "border-zinc-600 bg-zinc-900 text-white"
              : "border-zinc-800 text-zinc-400 hover:border-zinc-600"
          )}
        >
          <div className="text-sm font-medium">{project.title}</div>
          <div className="text-xs text-zinc-500 mt-1">
            {project.dates}
          </div>
        </button>
      ))}
    </div>
  );
}
