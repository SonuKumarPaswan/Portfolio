"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CursorTracker() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const handlePointer = () => {
      const hovered = document.querySelectorAll(
        "a, button, input, textarea, select"
      );

      hovered.forEach((item) => {
        item.addEventListener("mouseenter", () => setIsPointer(true));
        item.addEventListener("mouseleave", () => setIsPointer(false));
      });
    };

    handlePointer();

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        animate={{
          x: position.x - (isPointer ? 18 : 10),
          y: position.y - (isPointer ? 18 : 10),
          scale: isPointer ? 2 : 1,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 300,
          mass: 0.2,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "var(--primary)",
          pointerEvents: "none",
          zIndex: 999999,
          mixBlendMode: "difference",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        animate={{
          x: position.x - (isPointer ? 25 : 20),
          y: position.y - (isPointer ? 25 : 20),
          scale: isPointer ? 1.6 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 150,
        }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 40,
          height: 40,
          borderRadius: "50%",
          border: "2px solid var(--border)",
          pointerEvents: "none",
          zIndex: 999998,
        }}
      />
    </>
  );
}