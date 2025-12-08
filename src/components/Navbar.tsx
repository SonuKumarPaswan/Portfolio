"use client";

import { useContext } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { Button } from "antd";

export default function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      style={{
        width: "100vw",
        padding: "12px 24px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        background: "var(--container)",
        borderBottom: "1px solid var(--border)",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <h2 style={{ margin: 0, fontWeight: 600 }}>Portfolio</h2>

      <div style={{ display: "flex", gap: 12 }}>
        <a href="/" style={{ color: "var(--text)", textDecoration: "none" }}>
          Home
        </a>
        <a href="#skills" style={{ color: "var(--text)", textDecoration: "none" }}>
          Skills
        </a>
        <a href="#projects" style={{ color: "var(--text)", textDecoration: "none" }}>
          Projects
        </a>
        <a href="#contact" style={{ color: "var(--text)", textDecoration: "none" }}>
          Contact
        </a>

        <Button type="primary" onClick={toggleTheme}>
          {isDark ? "Light Mode" : "Dark Mode"}
        </Button>
      </div>
    </nav>
  );
}
