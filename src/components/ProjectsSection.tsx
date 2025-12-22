"use client";

import React from "react";
import ProjectItem from "./ProjectItem";

const projects = [
  {
    title: "TripJurnify",
    video: "/projects/project-bg.mp4",
    tech: ["Next.js", "MERN", "Amadeus API"],
    github: "#",
    live: "#",
    points: [
      "Full-stack travel booking platform",
      "Flight, hotel & cab booking",
      "Secure API integration",
      "Optimized performance",
      "Scalable architecture",
    ],
  },
  {
    title: "Portfolio Website",
    video: "/projects/project-bg.mp4",
    tech: ["Next.js", "TypeScript"],
    github: "#",
    live: "#",
    points: [
      "Modern UI/UX",
      "Dark / light theme",
      "SEO optimized",
      "Responsive design",
      "Smooth animations",
    ],
  },
  {
    title: "E-Commerce App",
    video: "/projects/project-bg.mp4",
    tech: ["React", "Redux", "Node.js"],
    github: "#",
    live: "#",
    points: [
      "Product listing & cart",
      "Redux state management",
      "Auth & authorization",
      "REST APIs",
      "Admin dashboard",
    ],
  },
  {
    title: "Todo App",
    video: "/projects/project-bg.mp4",
    tech: ["React", "LocalStorage"],
    github: "#",
    live: "#",
    points: [
      "CRUD operations",
      "Persistent data",
      "Optimized rendering",
      "Clean UI",
      "Fast performance",
    ],
  },
  {
    title: "Java Backend System",
    video: "/projects/project-bg.mp4",
    tech: ["Java", "JDBC", "MySQL"],
    github: "#",
    live: "#",
    points: [
      "MVC architecture",
      "Secure data handling",
      "Optimized SQL queries",
      "Backend services",
      "Scalable design",
    ],
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "80px 60px",
        maxWidth: 1400,
        margin: "0 auto",
        position: "relative",
      }}
    >
      <h2 style={{ marginBottom: 80 }}>Projects</h2>

      {/* ===== SINGLE VERTICAL DIVIDER ===== */}
      <div
        style={{
          position: "absolute",
          top: 160,
          bottom: 0,
          left: "50%",
          width: 3,
          background: "rgba(255,255,255,0.25)",
          transform: "translateX(-50%)",
        }}
      />

      {projects.map((project, index) => (
        <ProjectItem
          key={project.title}
          project={project}
          isLeft={index % 2 === 0}
        />
      ))}
    </section>
  );
}
