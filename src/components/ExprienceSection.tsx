"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card } from "antd";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "100px 5%",
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          textAlign: "center",
          color: "var(--heading)",
          marginBottom: 70,
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 700,
        }}
      >
        Professional Experience
      </motion.h2>

      <div className="timeline-container">
        {/* Experience 1 */}
        <ExperienceCard
          date="Aug 2025 – Present"
          role="Full Stack Developer"
          company="Dream Sky Airways"
          domain="Tours & Travel Domain"
          points={[
            "Developed and maintained live production travel and tourism web applications.",
            "Built responsive, SEO-optimized and user-friendly interfaces.",
            "Integrated REST APIs, databases and third-party services.",
            "Managed deployment, hosting, domain configuration and server maintenance.",
            "Enhanced application performance, scalability and security.",
            "Implemented booking systems, tour package management and customer support workflows.",
            "Worked with Next.js, React.js, TypeScript, Node.js and MongoDB.",
          ]}
        />

        {/* Live Projects */}
        <ExperienceCard
          date="Live Projects"
          role="Production Projects"
          points={[
            <span key="1"><strong>Skills Zone Academy</strong> — Learning Management System for online education and student management.</span>,
            <span key="2"><strong>Vista Global Academy</strong> — Educational platform for course and training management.</span>,
            <span key="3"><strong>Air Aviation Institute</strong> — Aviation training website with course and inquiry management.</span>,
          ]}
        />

        {/* Featured Project */}
        <ExperienceCard
          date="Featured Project"
          role="Skills Zone Academy LMS"
          tech="Next.js • Node.js • Express.js • MongoDB"
          points={[
            "Full-stack Learning Management System designed for managing students, courses and educational content.",
            "👨‍🎓 Student Registration & Authentication",
            "📚 Course Management System",
            "🎥 Video Learning Modules",
            "📝 Assignment & Progress Tracking",
            "🔐 Role-Based Access Control",
          ]}
          responsibilities={[
            "Developed frontend using Next.js and Tailwind CSS.",
            "Built REST APIs with Node.js & Express.js.",
            "Designed MongoDB database architecture.",
            "Implemented JWT authentication & authorization.",
            "Managed deployment and production hosting.",
          ]}
        />

        {/* Personal Projects */}
        <ExperienceCard
          date="Personal Projects"
          role="Featured Personal Projects"
          points={[
            <div key="meetsync">
              <strong>🎥 MeetSync – Video Conferencing Platform</strong><br />
              Next.js • WebRTC • Socket.io • Node.js<br />
              Built real-time video/audio communication platform with meeting rooms and live chat.
            </div>,
            <div key="cognify" style={{ marginTop: 20 }}>
              <strong>🤖 Cognify AI – AI Chat Application</strong><br />
              React.js • Node.js • OpenAI API<br />
              Developed ChatGPT-like AI application with intelligent response generation.
            </div>,
            <div key="codeforge" style={{ marginTop: 20 }}>
              <strong>💻 CodeForge – Code Hosting Platform</strong><br />
              MERN Stack<br />
              GitHub-inspired platform for repository management and scalable APIs.
            </div>,
          ]}
        />

        {/* Internship */}
        <ExperienceCard
          date="2024"
          role="Web Development Intern"
          company="CodSoft"
          points={[
            "Developed responsive user interfaces using HTML, CSS, JavaScript and React.",
            "Worked with Git & GitHub in collaborative development.",
            "Improved code quality and reusable component architecture.",
            "Gained practical experience in modern frontend development.",
          ]}
        />
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        .timeline-container {
          display: flex;
          flex-direction: column;
          gap: 40px;
        }

        @media (max-width: 768px) {
          section {
            padding: 70px 5% !important;
          }

          .timeline-container {
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};

/* ================= Experience Card Component ================= */
interface ExperienceCardProps {
  date: string;
  role: string;
  company?: string;
  domain?: string;
  tech?: string;
  points: React.ReactNode[];
  responsibilities?: string[];
}

const ExperienceCard = ({
  date,
  role,
  company,
  domain,
  tech,
  points,
  responsibilities,
}: ExperienceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card
        hoverable
        style={{
          background: "var(--container)",
          border: "1px solid var(--border)",
          borderRadius: 16,
          boxShadow: "0px 0px 8px var(--shadow)",
          padding: "8px",
        }}
      >
        <div style={{ marginBottom: 16 }}>
          <div style={{ color: "#1890ff", fontWeight: 600, fontSize: "1.1rem" }}>
            {date}
          </div>
          <h3 style={{ margin: "8px 0 4px 0", color: "var(--heading)" }}>
            {role} {company && `| ${company}`}
          </h3>
          {domain && <p style={{ margin: 0, opacity: 0.8 }}>{domain}</p>}
          {tech && <p style={{ margin: "6px 0 0 0", fontWeight: 500 }}>{tech}</p>}
        </div>

        <ul style={{ paddingLeft: 18, margin: 0 }}>
          {points.map((point, i) => (
            <li key={i} style={{ marginBottom: 10, lineHeight: 1.6 }}>
              {point}
            </li>
          ))}
        </ul>

        {responsibilities && responsibilities.length > 0 && (
          <>
            <h4 style={{ margin: "20px 0 10px 0", color: "var(--heading)" }}>
              Responsibilities
            </h4>
            <ul style={{ paddingLeft: 18, margin: 0 }}>
              {responsibilities.map((item, i) => (
                <li key={i} style={{ marginBottom: 8, lineHeight: 1.6 }}>
                  • {item}
                </li>
              ))}
            </ul>
          </>
        )}
      </Card>
    </motion.div>
  );
};

export default ExperienceSection;