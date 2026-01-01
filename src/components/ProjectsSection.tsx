"use client";

import React from "react";
import ProjectItem from "./ProjectItem";
import { desc } from "framer-motion/client";

const projects = [
  {
    title: "TripJurnify",
    description: "A full-stack travel booking platform",
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
  title: "AI Chat Application",
  description: "A ChatGPT-like AI chat platform with secure authentication",
  video: "/projects/project-bg.mp4",
  tech: [
        "React.js",
        "Ant Design",
        "Node.js",
        "Express.js",
        "MongoDB",
        "OpenAI API",
        "JWT",
        "Google OAuth"
      ],
  github: "https://github.com/your-username/ai-chat-app",
  live: "https://your-live-url.com",
  points: [
    "ChatGPT-like conversational AI using OpenAI API",
    "Secure login with Google OAuth and JWT authentication",
    "Persistent chat history stored in MongoDB",
    "Modern, responsive UI built with Ant Design",
    "Scalable MERN-style backend architecture"
  ]
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
        maxWidth: 1500,
        margin: "0 auto",
        position: "relative",
        color: "var(--heading)" 
      }}
    >
      <h2 style={{ marginBottom: 80 }}>
        <i>My projects </i>
      </h2>

      {/* ===== SINGLE VERTICAL DIVIDER ===== */}
      <div
        style={{
          position: "absolute",
          top: 200,
          bottom: 180,
          left: "50%",
          width: 5,
          background: "var(--text)",
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
