"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Card } from "antd";

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
    tech: ["React.js", "Node.js", "OpenAI API", "MongoDB", "JWT"],
    github: "https://github.com/your-username/ai-chat-app",
    live: "https://your-live-url.com",
    points: [
      "ChatGPT-like conversational AI using OpenAI API",
      "Secure login with Google OAuth and JWT authentication",
      "Persistent chat history stored in MongoDB",
      "Modern, responsive UI",
      "Scalable MERN-style backend",
    ],
  },
  {
    title: "E-Commerce App",
    description: "Full-featured online shopping platform",
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
    description: "Advanced task management application",
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
    description: "Robust backend system with MVC architecture",
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
        padding: "100px 5%",
        maxWidth: "1400px",
        margin: "0 auto",
        background: "var(--bg)",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          color: "var(--heading)",
          fontSize: "clamp(28px, 4vw, 42px)",
          marginBottom: 80,
        }}
      >
        My Projects
      </motion.h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 100 }}>
        {projects.map((project, index) => (
          <ProjectItem key={project.title} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}

/* ================= Project Item ================= */
function ProjectItem({ project, index }: { project: any; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="project-grid"
      >
        {/* Project Visual */}
        <div
          className="project-visual"
          style={{
            order: isEven ? 1 : 2,
            position: "relative",
          }}
        >
          <Card
            style={{
              background: "var(--container)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 10px 30px var(--shadow)",
            }}
          >
            <div
              style={{
                height: "320px",
                background: "#000",
                position: "relative",
                borderRadius: "16px 16px 0 0",
              }}
            >
              <video
                src={project.video}
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(transparent, rgba(0,0,0,0.7))",
                }}
              />
            </div>
          </Card>
        </div>

        {/* Project Description */}
        <div
          className="project-desc"
          style={{
            order: isEven ? 2 : 1,
          }}
        >
          <h3
            style={{
              fontSize: "2.1rem",
              color: "var(--heading)",
              marginBottom: 12,
            }}
          >
            {project.title}
          </h3>

          <p style={{ fontSize: "1.1rem", marginBottom: 20, opacity: 0.9 }}>
            {project.description}
          </p>

          <div style={{ marginBottom: 20 }}>
            <strong>Tech Stack:</strong>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 10 }}>
              {project.tech.map((tech: string) => (
                <span
                  key={tech}
                  style={{
                    padding: "6px 14px",
                    background: "var(--container)",
                    borderRadius: 30,
                    fontSize: "0.9rem",
                    border: "1px solid var(--border)",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <ul style={{ paddingLeft: 20, lineHeight: 1.8 }}>
            {project.points.map((point: string, i: number) => (
              <li key={i}>{point}</li>
            ))}
          </ul>

          <div style={{ marginTop: 30, display: "flex", gap: 16 }}>
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                style={{
                  padding: "12px 24px",
                  background: "var(--text)",
                  color: "var(--container)",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                GitHub
              </a>
            )}
            {project.live && project.live !== "#" && (
              <a
                href={project.live}
                target="_blank"
                style={{
                  padding: "12px 24px",
                  border: "2px solid var(--text)",
                  color: "var(--text)",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

/* ================= Responsive Styles ================= */
<style jsx>{`
  .project-grid {
    grid-template-columns: 1fr 1fr;
    gap: 60px;
  }

  @media (max-width: 1024px) {
    .project-grid {
      gap: 40px;
    }
  }

  @media (max-width: 768px) {
    section {
      padding: 70px 5% !important;
    }

    .project-grid {
      grid-template-columns: 1fr !important;
      gap: 30px;
    }

    .project-visual,
    .project-desc {
      order: unset !important;
    }
  }

  video {
    border-radius: 16px 16px 0 0;
  }
`}</style>