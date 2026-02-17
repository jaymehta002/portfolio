"use client";

interface ProjectTechProps {
  technologies: string[];
}

export function ProjectTech({ technologies }: ProjectTechProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
        >
          {tech}
        </span>
      ))}
    </div>
  );
}
