"use client";

import { Carousel } from "antd";

const ProjectsSection = () => {
  return (
    <section id="projects" style={{ padding: "80px 20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: 30 }}>My Projects</h2>

      <Carousel
        arrows
        autoplay
        autoplaySpeed={2000}
        infinite
        style={{ maxWidth: "900px", margin: "20px auto" }}
      >
        {/* Slide 1 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <img
            src="/image/personality.jpg"
            alt="Project 1"
            style={{
              width: "100%",
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Slide 2 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <img
            src="/image/cabin-crew.webp"
            alt="Project 2"
            style={{
              width: "100%",
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Slide 3 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <img
            src="/image/coustomer.jpg"
            alt="Project 3"
            style={{
              width: "100%",
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
        </div>

        {/* Slide 4 */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "20px 0",
          }}
        >
          <img
            src="/image/hotel.jpg"
            alt="Project 4"
            style={{
              width: "100%",
              borderRadius: 10,
              objectFit: "cover",
            }}
          />
        </div>
      </Carousel>
    </section>
  );
};

export default ProjectsSection;

