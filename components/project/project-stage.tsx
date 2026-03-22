// @ts-nocheck
"use client";

import { ProjectMedia } from "./project-media";
import { ProjectTech } from "./project-tech";
import { ProjectAIPanel } from "./project-ai-panel";
import React from "react";

interface ProjectStageProps {
  project: {
    title: string;
    description: string;
    technologies: string[];
    image: string;
    video: string;
    links: {
      type: string;
      href: string;
      icon: React.JSX.Element;
    }[];
  };
}

export function ProjectStage({ project }: readonly ProjectStageProps) {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
      {/* Media */}
      <ProjectMedia
        image={project.image}
        video={project.video}
        title={project.title}
      />

      {/* Content */}
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-2xl font-light text-white">
            {project.title}
          </h3>
          <p className="mt-4 text-zinc-400 leading-relaxed">
            {project.description}
          </p>
        </div>

        <ProjectTech technologies={project.technologies} />

        {/* Links */}
        <div className="flex gap-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-zinc-300 hover:text-white transition"
            >
              {link.icon}
              {link.type}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
