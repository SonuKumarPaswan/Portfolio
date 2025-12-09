"use client";

import ContactSection from "@/components/ContactSection";
import HomeSection from "@/components/HomeSection ";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}

