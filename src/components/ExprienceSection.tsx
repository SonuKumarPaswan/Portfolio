"use client";

import React from "react";
import { Timeline, Typography, Card } from "antd";

const { Title, Paragraph, Text } = Typography;

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "80px",
        // background: "var(--container)",
      }}
    >
      <Title
        level={2}
        style={{
          marginBottom: 60,
          color: "var(--heading)",
          textAlign: "center",
          fontSize: 36,
        }}
      >
        Professional Experience
      </Title>

      <Timeline
        mode="start"
        items={[
          {
            title: "2024 – Present",
            content: (
              <Card
                variant="outlined"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                }}
              >
                <Title level={4}>Full Stack Developer – Dream Sky Airways</Title>
                <Paragraph>
                  • Built a travel booking platform using{" "}
                  <Text strong>Next.js, React, Node.js, MongoDB</Text>
                </Paragraph>
                <Paragraph>
                  • Integrated APIs for flights, hotels, and cabs
                </Paragraph>
                <Paragraph>
                  • Optimized performance, security, and SEO
                </Paragraph>
              </Card>
            ),
          },
          {
            title: "2024",
            content: (
              <Card
                variant="outlined"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                }}
              >
                <Title level={4}>Web Development Intern – CodSoft</Title>
                <Paragraph>
                  • Developed responsive UI using{" "}
                  <Text strong>HTML, CSS, JavaScript, React</Text>
                </Paragraph>
                <Paragraph>
                  • Used Git & GitHub in real-world projects
                </Paragraph>
                <Paragraph>
                  • Improved component quality and reusability
                </Paragraph>
              </Card>
            ),
          },
          {
            title: "Projects",
            content: (
              <Card
                variant="outlined"
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  borderRadius: 12,
                }}
              >
                <Title level={4}>TripJurnify – Full Stack Project</Title>
                <Paragraph>
                  • Designed a complete travel booking system
                </Paragraph>
                <Paragraph>
                  • Integrated <Text strong>Amadeus API</Text>
                </Paragraph>
                <Paragraph>
                  • Focused on scalable & clean architecture
                </Paragraph>
              </Card>
            ),
          },
        ]}
      />
    </section>
  );
};

export default ExperienceSection;
