"use client";

import { motion } from "framer-motion";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        height: 260,
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
      }}
    >
      <video autoPlay loop muted playsInline
        style={{ width: "100%", height: "100%", objectFit: "cover" }}>
        <source src={project.video} type="video/mp4" />
      </video>

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
        }}
      />

      <div style={{ position: "absolute", bottom: 20, left: 20 }}>
        <h3>{project.title}</h3>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.tech.map((t: string) => (
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
      </div>
    </motion.div>
  );
}
