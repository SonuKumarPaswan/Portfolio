"use client";

import React from "react";
import { Card, Col, Row, Typography } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  LayoutOutlined,
  CloudOutlined,
  Html5Outlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const services = [
  {
    title: "Static Website Development",
    icon: <Html5Outlined style={{ fontSize: 28, color: "var(--text)" }} />,
    points: [
      "HTML, CSS, JavaScript",
      "Fast & Lightweight Websites",
      "SEO Friendly Pages",
      "Landing Pages & Portfolios",
    ],
  },
  {
    title: "Frontend Development",
    icon: <CodeOutlined style={{ fontSize: 28, color: "var(--text)" }} />,
    points: [
      "React.js / Next.js",
      "Component Based UI",
      "Dynamic Websites",
      "Responsive Design",
    ],
  },
  {
    title: "Backend Development",
    icon: <DatabaseOutlined style={{ fontSize: 28, color: "var(--text)" }} />,
    points: [
      "Node.js & Express.js",
      "MongoDB & MySQL",
      "REST APIs",
      "Secure Authentication",
    ],
  },
  {
    title: "Dynamic Web Projects",
    icon: <CloudOutlined style={{ fontSize: 28, color: "var(--text)" }} />,
    points: [
      "Admin Dashboards",
      "Role-Based Systems",
      "API Integration",
      "Scalable Architecture",
    ],
  },
  {
    title: "UI / UX Design",
    icon: <LayoutOutlined style={{ fontSize: 28, color: "var(--text)" }} />,
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
        padding: "80px 40px",
        background: "var(--bg)",
      }}
    >
      {/* Heading */}
      <div style={{ textAlign: "center", marginBottom: 56 }}>
        <Title level={2} style={{ color: "var(--heading)" }}>
          Our Services
        </Title>
        <Paragraph
          style={{
            color: "var(--text)",
            maxWidth: 620,
            margin: "0 auto",
          }}
        >
          We provide complete end-to-end web development services using modern
          technologies and scalable architecture.
        </Paragraph>
      </div>

      {/* Service Cards */}
      <Row gutter={[24, 24]} justify="center">
        {services.map((service) => (
          <Col
            key={service.title}
            xs={24}   // mobile → 1 card
            sm={12}   // tablet → 2 cards
            md={8}    // laptop → 3 cards ✅
            lg={8}    // desktop → 3 cards ✅
          >
            <Card
              hoverable
              style={{
                height: "100%",
                background: "var(--container)",
                border: "1px solid var(--border)",
                boxShadow: "var(--shadow)",
              }}
            >
              <div style={{ marginBottom: 16 }}>
                {service.icon}
              </div>

              <Title level={4} style={{ color: "var(--heading)" }}>
                {service.title}
              </Title>

              <ul style={{ paddingLeft: 18, color: "var(--text)" }}>
                {service.points.map((point) => (
                  <li key={point} style={{ marginBottom: 6 }}>
                    {point}
                  </li>
                ))}
              </ul>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ServicesSection;
