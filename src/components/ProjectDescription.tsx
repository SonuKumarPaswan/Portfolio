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
        height: 420,
        padding: 28,
        borderRadius: 15,
        boxShadow: "0px 0px 1px  1px  var(--shadow)",
        background: "var(--container)",
        color: "var(--text)",
        fontSize: 18,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}> 
      <ul style={{ lineHeight: 1.9 }}>
        {project.points.map((p: string, i: number) => (
          <div key={i} style={{ display: "flex", alignItems: "center", margin: 6 }}> 
          <h2>{}</h2>
          <li >{p}</li>
          </div>
        ))}
      </ul>

      <div style={{ display: "flex", gap: 20, marginTop: 16 }}>
        <a href={project.github} target="_blank"
         style={{  
          boxShadow: "0px 0px 1px  1px  var(--shadow)",
          background: "var(--background)",
          color: "var(--text)",
          padding: "10px",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 8,
          textDecoration: "none",
          
          }}>
          <FaGithub color="var(--text)" fontSize={18} /> GitHub
        </a>
        <a href={project.live} target="_blank" 
        style={{  
          boxShadow: "0px 0px 1px  1px  var(--shadow)",
          background: "var(--background)",
          color: "var(--text)",
          padding: "10px 20px",
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          gap: 8,
          textDecoration: "none",
          
          }}>
          <FaExternalLinkAlt color="var(--text)" fontSize={18} /> Live
        </a>
      </div>
    </motion.div>
  );
}
