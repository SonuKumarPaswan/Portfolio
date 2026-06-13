"use client";

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExprienceSection from "@/components/ExprienceSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import ServicesSection from "@/components/ServicesSection";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <main style={{
      paddingBlock:"20px"
    }}>
      <HomeSection />
      <AboutSection />
      <ExprienceSection />
       <ServicesSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}

