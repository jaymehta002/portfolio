"use client";

interface ProjectMediaProps {
  video?: string;
  image?: string;
  title: string;
}

export function ProjectMedia({ video, image, title }: ProjectMediaProps) {
  // Prefer video if present
  if (video && (video.endsWith(".mp4") || video.endsWith(".webm"))) {
    return (
      <video
        src={video}
        autoPlay
        muted
        loop
        playsInline
        className="w-full rounded-2xl border border-zinc-800 bg-black"
      />
    );
  }

  // Fallback to image
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        className="w-full rounded-2xl border border-zinc-800"
      />
    );
  }

  // Graceful empty state
  return (
    <div className="flex h-[300px] items-center justify-center rounded-2xl border border-zinc-800 text-sm text-zinc-500">
      No preview available
    </div>
  );
}
