"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExprienceSection from "@/components/ExprienceSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutSection />
      <ExprienceSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

