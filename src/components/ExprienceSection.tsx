
"use client";

import React from "react";
import { Timeline } from "antd";

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      style={{
        padding: "20px 80px",
        // margin: "20px",
        background:"var(--container)"
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "40px" }}>
        <i>Professional Experience</i>
      </h2>

      <Timeline
         style={{
          // background:"var(--container)"
         }}
        mode="left"
        items={[
          {
            label: "2024 – Present",
            children: (
              <>
                <h3>Full Stack Developer – Dream Sky Airways</h3>
                <p>
                  • Developed a travel booking platform using <b>Next.js, React,
                  Node.js, MongoDB</b>
                </p>
                <p>
                  • Integrated third-party APIs for flights, hotels, and cabs
                </p>
                <p>
                  • Built secure REST APIs and optimized performance & SEO
                </p>
              </>
            ),
          },
          {
            label: "2024",
            children: (
              <>
                <h3>Web Development Intern – CodSoft</h3>
                <p>
                  • Built responsive UI components using <b>HTML, CSS, JavaScript,
                  React.js</b>
                </p>
                <p>
                  • Worked on real-world projects with Git & GitHub
                </p>
                <p>
                  • Improved component reusability and code quality
                </p>
              </>
            ),
          },
          {
            label: "Projects",
            children: (
              <>
                <h3>TripJurnify – Full Stack Project</h3>
                <p>
                  • Designed and developed a complete travel booking system
                </p>
                <p>
                  • Integrated <b>Amadeus API</b> for real-time search
                </p>
                <p>
                  • Focused on scalability, clean architecture, and deployment
                </p>
              </>
            ),
          },
        ]}
      />
    </section>
  );
};

export default ExperienceSection;

