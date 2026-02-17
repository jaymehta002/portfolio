"use client";

import { ShootingStars } from "@/components/ui/shooting-stars";

export function PortfolioBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-zinc-900" />

      {/* Shooting stars layers */}
      <ShootingStars />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={2}
        maxSpeed={20}
        minDelay={2000}
        maxDelay={5000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={4}
        maxSpeed={24}
        minDelay={2500}
        maxDelay={6000}
      />
      <ShootingStars
        starColor="#FF0099"
        trailColor="#FFB800"
        minSpeed={6}
        maxSpeed={20}
        minDelay={2000}
        maxDelay={5000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={8}
        maxSpeed={24}
        minDelay={2500}
        maxDelay={6000}
      />
      <ShootingStars
        starColor="#00FF9E"
        trailColor="#00B8FF"
        minSpeed={10}
        maxSpeed={24}
        minDelay={2500}
        maxDelay={6000}
      />



    </div>
  );
}
