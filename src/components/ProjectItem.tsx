"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectDescription from "./ProjectDescription";

export default function ProjectItem({
  project,
  isLeft,
}: {
  project: any;
  isLeft: boolean;
})
{
 

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 80,
        alignItems: "center",
        marginBottom: 100,
        position: "relative",
      }}
    >
      {/* ===== CENTER DOT ===== */}
     

<span
  style={{
    position: "absolute",
    left: "50%",
    padding: 8,
    borderRadius: "50%",
    background: "var(--container)",
    transform: "translateX(-50%)",
    zIndex: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: 14,
    fontWeight: 600,
  }}
>
  <h1 style={{
    color:"var(--text)"
  }}>✓</h1>
</span>


      {isLeft ? (
        <>
          <ProjectCard project={project} />
          <ProjectDescription project={project} />
        </>
      ) : (
        <>
          <ProjectDescription project={project} />
          <ProjectCard project={project} />
        </>
      )}
    </div>
  );
}
