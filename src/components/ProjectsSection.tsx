"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "TripJurnify",
    video: "/projects/project-bg.mp4",
    tech: ["Next.js", "MERN", "Amadeus API"],
    github: "https://github.com/sonukumarpaswan/tripjurnify",
    live: "#",
    points: [
      "Full-stack travel booking platform",
      "Flight, hotel & cab search",
      "Secure API integration",
      "Optimized performance",
      "Scalable architecture",
    ],
  },
  {
    title: "Portfolio Website",
    video: "/projects/project-bg.mp4",
    tech: ["Next.js", "TypeScript", "Framer Motion"],
    github: "https://github.com/sonukumarpaswan/portfolio",
    live: "#",
    points: [
      "Modern personal portfolio",
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
      "Persistent storage",
      "Clean UI",
      "Optimized state",
      "Fast rendering",
    ],
  },
  {
    title: "Java Backend System",
    video: "/projects/project-bg.mp4",
    tech: ["Java", "JDBC", "MySQL"],
    github: "#",
    live: "#",
    points: [
      "Backend system",
      "Database connectivity",
      "MVC architecture",
      "Optimized queries",
      "Secure data handling",
    ],
  },
];

export default function ProjectSection() {
  return (
    <section
      id="projects"
      style={{
        padding: "60px 80px",
        position: "relative",
      }}
    >
      <h2 style={{ marginBottom: 80 }}>Projects</h2>

      {/* ================= CENTER LINE ================= */}
      <div
        style={{
          position: "absolute",
          top: 140,
          bottom: 0,
          left: "50%",
          width: 2,
          background: "rgba(255,255,255,0.2)",
          transform: "translateX(-50%)",
        }}
      />

      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={project.title}
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 50,
              alignItems: "center",
              marginBottom: 80,
            }}
          >
            {/* ================= CONNECTOR DOT ================= */}
            <motion.span
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              style={{
                position: "absolute",
                left: "50%",
                width: 14,
                height: 14,
                borderRadius: "50%",
                background: "#1677ff",
                transform: "translateX(-50%)",
                zIndex: 2,
              }}
            />

            {/* ================= PROJECT CARD ================= */}
            <motion.div
              initial={{ x: isEven ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                order: isEven ? 1 : 2,
                height: 320,
                padding: 18,
                borderRadius: 16,
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                display: "flex",
                flexDirection: "column",
                gap: 14,
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                style={{
                  width: "100%",
                  height: 160,
                  objectFit: "cover",
                  borderRadius: 12,
                }}
              >
                <source src={project.video} type="video/mp4" />
              </video>

              <h3>{project.title}</h3>

              <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 10px",
                      fontSize: 12,
                      borderRadius: 20,
                      background: "rgba(255,255,255,0.15)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: "flex", gap: 16, marginTop: "auto" }}>
                <a href={project.github} target="_blank">
                  <FaGithub /> GitHub
                </a>
                <a href={project.live} target="_blank">
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </motion.div>

            {/* ================= DESCRIPTION ================= */}
            <motion.div
              initial={{ x: isEven ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              style={{
                order: isEven ? 2 : 1,
                padding: 26,
                borderRadius: 16,
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <h3>About {project.title}</h3>
              <ul style={{ lineHeight: 1.9 }}>
                {project.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </motion.div>
          </div>
        );
      })}
    </section>
  );
}
