"use client";

import { Button, Card } from "antd";

export default function Home() {
  return (
    <div className="p-10 space-y-6">
      
      {/* HERO SECTION */}
      <Card title="Welcome to My Portfolio" variant="outlined">
        <p className="text-[16px]">
          Hi, I'm <strong>Sonu Paswan</strong>.  
          A Full Stack Developer building modern and scalable web applications
          using <strong>Next.js, React, Node.js & Ant Design.</strong>
        </p>
      </Card>

      {/* SKILLS */}
      <Card title="Skills" variant="outlined">
        <p>Next.js</p>
        <p>React.js</p>
        <p>Node.js</p>
        <p>MongoDB</p>
        <p>TailwindCSS</p>
        <p>Ant Design</p>
      </Card>

      {/* PROJECTS */}
      <Card title="Projects" variant="outlined">
        <p>✔ Travel Booking App</p>
        <p>✔ E-Commerce App</p>
        <p>✔ React Todo App</p>

        <Button type="primary" className="mt-4">
          View All Projects
        </Button>
      </Card>

      {/* CONTACT */}
      <Card title="Contact Me" variant="outlined">
        <p>Want to collaborate or hire me? Send an email.</p>

        <Button
          type="primary"
          size="middle"
          href="mailto:sonu@example.com"
          className="mt-4"
        >
          Email Me
        </Button>
      </Card>
    </div>
  );
}

