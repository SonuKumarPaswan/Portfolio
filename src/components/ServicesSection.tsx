"use client";

import { motion } from "framer-motion";
import { Card } from "antd";
import {
  CloudOutlined,
  CodeOutlined,
  DatabaseOutlined,
  Html5Outlined,
  LayoutOutlined,
} from "@ant-design/icons";

const services = [
  {
    title: "Static Website Development",
    icon: <Html5Outlined style={{ fontSize: 32, color: "var(--text)" }} />,
    points: [
      "HTML, CSS, JavaScript",
      "Fast & Lightweight Websites",
      "SEO Friendly Pages",
      "Landing Pages & Portfolios",
    ],
  },
  {
    title: "Frontend Development",
    icon: <CodeOutlined style={{ fontSize: 32, color: "var(--text)" }} />,
    points: [
      "React.js / Next.js",
      "Component Based UI",
      "Dynamic Websites",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: <DatabaseOutlined style={{ fontSize: 32, color: "var(--text)" }} />,
    points: [
      "Node.js & Express.js",
      "MongoDB & MySQL",
      "REST APIs",
      "Secure Authentication",
    ],
  },
  {
    title: "Dynamic Web Projects",
    icon: <CloudOutlined style={{ fontSize: 32, color: "var(--text)" }} />,
    points: [
      "Admin Dashboards",
      "Role-Based Systems",
      "API Integration",
      "Scalable Architecture",
    ],
  },
  {
    title: "UI / UX Design",
    icon: <LayoutOutlined style={{ fontSize: 32, color: "var(--text)" }} />,
    points: [
      "Modern UI Design",
      "Wireframes & Prototypes",
      "User Experience Focused",
      "Mobile-First Design",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      style={{
        padding: "100px 5%",
        background: "var(--bg)",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 70 }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            color: "var(--heading)",
            fontSize: "clamp(28px, 4vw, 42px)",
            marginBottom: 20,
          }}
        >
          Our Services
        </motion.h2>

        <p
          style={{
            color: "var(--text)",
            maxWidth: 620,
            margin: "0 auto",
            fontSize: "1.1rem",
            opacity: 0.9,
          }}
        >
          We provide complete end-to-end web development services using modern
          technologies and scalable architecture.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 24,
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              hoverable
              style={{
                height: "100%",
                background: "var(--container)",
                borderRadius: "16px",
                border: "1px solid var(--border)",
                boxShadow: "0px 0px 8px var(--shadow)",
                padding: "12px",
              }}
            >
              <div style={{ marginBottom: 20 }}>{service.icon}</div>

              <h3
                style={{
                  color: "var(--heading)",
                  marginBottom: 18,
                  fontSize: "1.45rem",
                }}
              >
                {service.title}
              </h3>

              <ul
                style={{
                  paddingLeft: 20,
                  color: "var(--text)",
                  marginBottom: 0,
                  lineHeight: 1.7,
                }}
              >
                {service.points.map((point, i) => (
                  <li key={i} style={{ marginBottom: 10 }}>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Responsive Styles */}
      <style jsx>{`
        @media (max-width: 768px) {
          section {
            padding: 70px 5% !important;
          }
        }

        @media (max-width: 480px) {
          section {
            padding: 60px 5% !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ServicesSection;