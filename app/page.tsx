
import { WhatIDo } from "@/components/area-of-focus";
import AwardWinningProjects from "@/components/AwwardProject";
import ExperienceStory from "@/components/Experience";
import Hero from "@/components/Hero";
import { ProjectsSection } from "@/components/project/projects-section";
import StorySection from "@/components/StorySection";
import {DATA} from '@/data'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo focusAreas={DATA.focusAreas} />
      <ProjectsSection />
      <AwardWinningProjects />
      <StorySection/>
      <ExperienceStory />
      {/* <div className="h-screen"></div> */}
    </main>
  );
}
