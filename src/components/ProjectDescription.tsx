"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectDescription({ project }: { project: any }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      style={{
        padding: 28,
        borderRadius: 18,
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
      }}
    >
      <ul style={{ lineHeight: 1.9 }}>
        {project.points.map((p: string, i: number) => (
          <li key={i}>{p}</li>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
        <a href={project.github} target="_blank">
          <FaGithub /> GitHub
        </a>
        <a href={project.live} target="_blank">
          <FaExternalLinkAlt /> Live
        </a>
      </div>
    </motion.div>
  );
}
