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
        height: 420,
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        boxShadow: "0px 0px 5px 0px var(--shadow)",
        // padding: 10,
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
        <h3 style={{
          color:"yellow", fontSize: 24, marginBottom: 5
        }}>{project.title}</h3>
        <p style={{ color: "white", fontSize: 16, marginBottom: 12 }}>{project.description}</p>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {project.tech.map((t: string) => (
            <span
              key={t}
              style={{
                color:"white",
                padding: "10px 20px",
                fontSize: 15,
                borderRadius: 10,
                marginRight: 6,
                marginTop: 6,
                background: "rgba(255, 255, 255, 0.1)",
                border: "1px solid var(--border)",
                boxShadow: "0px 0px 5px 0px var(--shadow)",
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
