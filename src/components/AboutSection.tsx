// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       style={{
//         padding: "100px 80px",
//         display: "flex",
//         flexDirection: "column",
//         gap: 80,
//       }}
//     >
//       {/* ================= ABOUT ================= */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "1fr 1.4fr",
//           gap: 50,
//           alignItems: "center",
//         }}
//       >
//         {/* Left Image */}
//         <motion.div
//           initial={{ x: -60, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//         >
//           <Image
//             src="/about.png"
//             alt="About Sonu Paswan"
//             width={420}
//             height={420}
//             style={{
//               borderRadius: 14,
//               objectFit: "cover",
//             }}
//           />
//         </motion.div>

//         {/* Right Content Card */}
//         <motion.div
//           initial={{ x: 60, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           style={{
//             padding: 30,
//             borderRadius: 14,
//             boxShadow: "0px 0px 1px var(--shadow)",
//           }}
//         >
//           <h2 style={{ marginBottom: 20 }}>About Me</h2>

//           <p style={{ lineHeight: 1.8, marginBottom: 14 }}>
//             I am a Full Stack Developer with hands-on experience in building and
//             deploying production-ready web applications using MERN Stack, Java
//             Full Stack, and TypeScript.
//           </p>

//           <p style={{ lineHeight: 1.8, marginBottom: 14 }}>
//             I work across the complete development lifecycle — from designing
//             modern, responsive user interfaces to building secure and scalable
//             backend systems. I also have practical experience in server-side
//             deployment, domain management, and cloud hosting.
//           </p>

//           <p style={{ lineHeight: 1.8 }}>
//             I have worked with platforms like Hostinger, GoDaddy, Vercel, and
//             Render, and I am comfortable managing databases such as MongoDB and
//             MySQL. I enjoy solving real-world problems and delivering
//             performance-driven, SEO-friendly, business-focused solutions.
//           </p>
//         </motion.div>
//       </div>

//       {/* ================= EDUCATION ================= */}
//       <div>
//         <h2 style={{ marginBottom: 40 }}>Education</h2>

//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: 30,
//           }}
//         >
//           {/* B.Tech */}
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             style={{
//               padding: 24,
//               borderRadius: 14,
//               boxShadow: "0px 0px 1px var(--shadow)",
//             }}
//           >
//             <h3>B.Tech – Electronics & Communication Engineering</h3>
//             <p>
//               Technocrats Institute of Technology, Bhopal
//               <br />
//               Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV)
//             </p>

//             <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//               <Tag text="CGPA: 8.78" />
//               <Tag text="Passout: 2024" />
//               <Tag text="ECE Branch" />
//             </div>
//           </motion.div>

//           {/* 12th */}
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             style={{
//               padding: 24,
//               borderRadius: 14,
//               boxShadow: "0px 0px 1px var(--shadow)",
//             }}
//           >
//             <h3>12th – Science</h3>
//             <p>Ram Krishna College, Madhubani, Bihar</p>

//             <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//               <Tag text="Maths" />
//               <Tag text="Physics" />
//               <Tag text="Chemistry" />
//               <Tag text="71%" />
//               <Tag text="Passout: 2020" />
//             </div>
//           </motion.div>

//           {/* 10th */}
//           <motion.div
//             initial={{ y: 40, opacity: 0 }}
//             whileInView={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.7 }}
//             viewport={{ once: true }}
//             style={{
//               padding: 24,
//               borderRadius: 14,
//               boxShadow: "0px 0px 1px var(--shadow)",
//             }}
//           >
//             <h3>10th</h3>
//             <p>Kabir High School, Selra, Madhubani</p>

//             <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
//               <Tag text="Percentage: 62.6%" />
//               <Tag text="Board: BSEB" />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// /* ===== Tag Button Component ===== */
// function Tag({ text }: { text: string }) {
//   return (
//     <span
//       style={{
//         padding: "6px 12px",
//         borderRadius: 20,
//         boxShadow: "0px 0px 1px var(--shadow)",
//         fontSize: 13,
//         fontWeight: 500,
//       }}
//     >
//       {text}
//     </span>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      id="about"
      style={{
        padding: "100px 80px",
        display: "flex",
        flexDirection: "column",
        gap: 30,
      }}
    >
      {/* ================= ABOUT ================= */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.4fr",
          gap: 20,
          alignItems: "center",
        }}
      >
        {/* Left Image */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Image
            src="/image/tourism.jpg"
            alt="Sonu Paswan"
            width={420}
            height={400}
            priority
            style={{ borderRadius: 15 }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            padding: 35,
            background: "var(--container)",
            borderRadius: 14,
            boxShadow: "0px 0px 1px var(--shadow)",
          }}
        >
          <i><h2>About Me</h2></i>
          <br />
          <p>
           Hi 👋, I’m Sonu Paswan

            I am a Full Stack Developer with hands-on experience in building production-ready client projects using Next.js, TypeScript, MERN Stack, and Java Full Stack technologies.
          </p> <br />
          <p>
          I have completed my B.Tech in Electronics and Communication Engineering from Technocrats Institute of Technology, Bhopal, and I currently focus on developing scalable, responsive, and SEO-optimized web applications for real businesses.
          </p>
          <br />
          <p>
           I enjoy working on end-to-end development — from crafting modern user interfaces to building reliable backend systems and APIs. I have experience delivering client-focused solutions, deploying applications, and optimizing performance for real-world use.
          </p>
        </motion.div>
      </div>

      {/* ================= EDUCATION ================= */}
      <div>
        <i><h2 style={{ marginBottom: 35 }}>Education</h2></i>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 30,
          }}
        >
          <EducationCard
            title="Technocrats Institute of Technology, Bhopal MP"
            subtitle="B.Tech – Electronics & Communication Engineering"
            link="https://technocratsgroup.edu.in/"
            images={[
              "/education/tit/t.jpeg",
              "/education/tit/t2.jpeg",
              "/education/tit/t3.jpeg",
              "/education/tit/t4.jpeg",
              "/education/tit/t5.jpeg",
            ]}
            tags={["RGPV University", "CGPA 8.78", "Passout 2024"]}
          />

          <EducationCard
            title="Ram Krishna College Madhubani, Bihar"
            subtitle="12th – Science (Bihar Board)"
            
            link="https://rkclnmu.ac.in/"
            images={[
              "/education/rkc/1.jpeg",
              "/education/rkc/2.jpeg",
              "/education/rkc/3.jpeg",
            ]}
            tags={[ "Percentage 71%", "Passout 2020","Maths", "Physics", "Chemistry" ]}
          />

          <EducationCard
            title="Kabir High School, Selra Madhubani, Bihar"
            subtitle="10th –(Bihar Board) BSEB"
            link="https://bseb.org.in/"
            images={["/education/kabir/1.jpeg"]}
            tags={["62.6%", "Passout 2018"]}
          />
        </div>
      </div>
    </section>
  );
}

/* ================= AUTO IMAGE SLIDER (FULL WIDTH) ================= */

function AutoImageSlider({ images }: { images: string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      2500
    );
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div
      style={{
        width: "100%",
        height: 220,
        borderRadius: 5,
        overflow: "hidden",
        position: "relative",
        marginBottom: 26,
      }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          alt="college"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            position: "absolute",
            inset: 0,
          }}
        />
      </AnimatePresence>
    </div>
  );
}

/* ================= EDUCATION CARD ================= */

function EducationCard({
  title,
  subtitle,
  images,
  tags,
  link,
}: {
  title: string;
  subtitle: string;
  images: string[];
  tags: string[];
  link: string;
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="edu-card"
      style={{
        position: "relative",
        padding: "10px  15px 15px 15px",
        // textAlign: "center",
        borderRadius: 10,
        textDecoration: "none",
        color: "inherit",
        boxShadow: "0px 0px 0px var(--shadow)",
        background: "var(--container)",
        overflow: "hidden",
      }}
    >

      <AutoImageSlider images={images} />

      <h2 style={{ marginBottom: 10 }}>{title}</h2>
      <p style={{ marginBottom: 16 }}>{subtitle}</p>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {tags.map((tag) => (
          <Tag key={tag} text={tag} />
        ))}
      </div>

      <style jsx>{`
        .edu-card:hover {
          background: rgba(22, 119, 255, 0.08);
        }
        .edu-watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 64px;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.04);
          pointer-events: none;
        }
      `}</style>
    </motion.a>
  );
}

/* ================= TAG ================= */

function Tag({ text }: { text: string }) {
  return (
    <span
      style={{
        padding: "6px 12px",
        borderRadius: 10,
        fontSize: 13,
        boxShadow: "0px 0px 1px var(--shadow)",
      }}
    >
      {text}
    </span>
  );
}
