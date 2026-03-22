
import { WhatIDo } from "@/components/area-of-focus";
import DevTerminal from "@/components/DevTerminal";
import ExperienceStory from "@/components/Experience";
import Hero from "@/components/Hero";
import ProjectShowcase from "@/components/ProjectShowcase";
import Services from "@/components/Services";
import SkillsSection from "@/components/SkillsSection";
import StorySection from "@/components/StorySection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import { DATA } from '@/data'

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIDo focusAreas={DATA.focusAreas} />
      <ProjectShowcase />
      <DevTerminal />
      <Services />
      <StorySection />
      <SkillsSection />
      <ExperienceStory />
      <Testimonials />
      <ContactSection />
    </main>
  );
}
