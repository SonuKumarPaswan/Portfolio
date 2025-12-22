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
}) {
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
          width: 14,
          height: 14,
          borderRadius: "50%",
          background: "#1677ff",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}
      />

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
