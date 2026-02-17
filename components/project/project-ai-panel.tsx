"use client";

import { Bot } from "lucide-react";

export function ProjectAIPanel({ projectTitle }: { projectTitle: string }) {
  return (
    <div className="mt-6 rounded-2xl border border-zinc-800 p-4">
      <div className="flex items-center gap-2 text-sm text-zinc-300">
        <Bot className="h-4 w-4" />
        Ask about {projectTitle}
      </div>

      <p className="mt-2 text-xs text-zinc-500">
        AI-powered project walkthrough coming next.
      </p>
    </div>
  );
}
