"use client";

import React from "react";
import { Row, Col, Typography } from "antd";

const { Title } = Typography;

const skills = [
  { name: "Java", icon: "java" },
  { name: "JavaScript", icon: "js" },
  { name: "TypeScript", icon: "ts" },
  { name: "SQL", icon: "mysql" },
  { name: "HTML", icon: "html" },

  { name: "CSS", icon: "css" },
  { name: "C++", icon: "cpp" },
  { name: "C", icon: "c" },
  { name: "MongoDB", icon: "mongodb" },
  { name: "MySQL", icon: "mysql" },

  { name: "Node.js", icon: "nodejs" },
  { name: "Next.js", icon: "nextjs" },
  { name: "Express.js", icon: "express" },
  { name: "React.js", icon: "react" },
  { name: "Redux", icon: "redux" },

  { name: "Python", icon: "python" },
  { name: "Spring", icon: "spring" },
  { name: "Docker", icon: "docker" },
  { name: "Git", icon: "git" },
  { name: "GitHub", icon: "github" },

  { name: "Bootstrap", icon: "bootstrap" },
  { name: "Tailwind", icon: "tailwind" },
  { name: "Postman", icon: "postman" },
  { name: "VS Code", icon: "vscode" },
  { name: "IntelliJ", icon: "idea" },
];

export default function SkillsSection() {
  return (
    <section id="skills" style={{ padding: "0px 60px" }}>
      <Title level={2} style={{ textAlign: "center", marginBottom: 40, color:"var(--heading)" }}>
        📚 Technologies I’ve Worked With
      </Title>

      <div
        style={{
          margin: "0 auto",
          border: "1px solid var(--border)",
        }}
      >
        <Row>
          {skills.map((skill) => (
            <Col
              key={skill.name}
              xs={12}   // mobile → 2 per row
              sm={8}    // tablet → 3 per row
              md={4}    // desktop → 5 per row ✅
              style={{
                borderRight: "1px solid var(--border)",
                borderBottom: "1px solid var(--border)",
                padding: "20px 10px",
                textAlign: "center",
              }}
            >
              <img
                src={`https://skillicons.dev/icons?i=${skill.icon}`}
                alt={skill.name}
              />
              <div
                style={{
                  marginTop: 8,
                  color: "var(--text)",
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                {skill.name}
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
