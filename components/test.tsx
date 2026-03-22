"use client";

import { motion } from "framer-motion";
import { WorldMap } from "./ui/world-map";

export function WorldMapDemo() {
  return (
    <div className="w-full py-20 dark:bg-background bg-white">
      <div className="max-w-7xl mx-auto text-center px-4">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Global{" "}
          <span className="text-neutral-400">
            {"Presence".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Collaborating with clients and teams across major tech hubs worldwide. 
          From Mumbai to Los Angeles, delivering excellence in every timezone.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 19.0760, lng: 72.8777 }, // Mumbai
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 28.7041, lng: 77.1025 }, // Delhi
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 40.4168, lng: -3.7038 }, // Spain (Madrid)
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 34.0522, lng: -118.2437 }, // Los Angeles
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 25.2048, lng: 55.2708 }, // Dubai
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 34.1526, lng: 77.5771 }, // Ladakh
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 35.1495, lng: -90.0490 }, // Memphis
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 26.9124, lng: 75.7873 }, // Jaipur
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 31.9686, lng: -99.9018 }, // Texas
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 12.8797, lng: 121.7740 }, // Philippines
          },
          {
            start: { lat: 18.5204, lng: 73.8567 }, // Pune
            end: { lat: 51.5074, lng: -0.1278 }, // London
          },
        ]}
        centralPoint={{ lat: 18.5204, lng: 73.8567 }} // Pune coordinates
        centralPointColor="#FF6B6B" // Different color for Pune
      />
    </div>
  );
}
