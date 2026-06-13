"use client";

import {motion} from "framer-motion";
import Image from "next/image";
import {useEffect, useState} from "react";
import {FaEnvelope, FaDownload, FaGithub, FaLinkedin} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";

const roles = ["Full Stack Developer", "MERN Developer", "Java Developer"];

export default function HomeSection() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole[charIndex]);
        setCharIndex(charIndex + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        padding: "clamp(20px, 5vw, 90px)",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
        alignItems: "center",
        gap: "clamp(30px,5vw,60px)",
        marginTop: 40,
      }}
    >
      {/* LEFT CONTENT */}
      <motion.div
        initial={{x: -60, opacity: 0}}
        animate={{x: 0, opacity: 1}}
        transition={{duration: 0.6}}
      >
        <motion.h1
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 0.2}}
          style={{
            fontSize: "clamp(2rem,5vw,3.5rem)",
            marginBottom: 10,
            lineHeight: 1.2,
          }}
        >
          Hi, 👋 I'm <span style={{color: "#1677ff"}}>Sonu Paswan</span>
        </motion.h1>

        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          style={{
            fontSize: "clamp(1rem,3vw,1.3rem)",
            fontWeight: 600,
            color: "var(--text)",
            minHeight: 35,
            marginBottom: 20,
          }}
        >
          {text}
          <span style={{color: "#1677ff"}}>|</span>
        </motion.p>

        <motion.p
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 1.7}}
          style={{
            maxWidth: 600,
            lineHeight: 1.8,
            marginBottom: 30,
            fontSize: "clamp(14px,2vw,18px)",
            color: "var(--text)",
          }}
        >
          Full Stack Developer at Dream Sky Airways, building scalable web
          applications with MERN Stack, Next.js, TypeScript, and Java.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 2}}
          style={{
            display: "flex",
            gap: 16,
            marginBottom: 30,
            flexWrap: "wrap",
          }}
        >
          <a
            href="mailto:sonupaswan0381@gmail.com"
            style={{
              padding: "12px 24px",
              boxShadow: "0px 0px 5px var(--shadow)",
              color: "var(--text)",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <FaEnvelope size={16} />
            Hire Me
          </a>

          <a
            href="/Sonu_Paswan_CV.pdf"
            download
            style={{
              padding: "12px 24px",
              boxShadow: "0px 0px 5px var(--shadow)",
              color: "var(--text)",
              borderRadius: 8,
              textDecoration: "none",
              fontWeight: 500,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <FaDownload size={16} />
            Download CV
          </a>
        </motion.div>

        <hr />

        {/* Social Links */}
        <motion.div
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{delay: 2.2}}
          style={{
            display: "flex",
            gap: 12,
            alignItems: "center",
            marginTop: 20,
            flexWrap: "wrap",
          }}
        >
          {/* <span style={{fontWeight: 500}}>Follow me:</span> */}

          <a
            href="https://github.com/SonuKumarPaswan"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text)",
              boxShadow: "0px 0px 5px var(--shadow)",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <FaGithub size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/sonukumarpaswan/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text)",
              boxShadow: "0px 0px 5px var(--shadow)",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="https://leetcode.com/u/zsonukumar0578/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--text)",
              boxShadow: "0px 0px 5px var(--shadow)",
              padding: 10,
              borderRadius: 8,
            }}
          >
            <SiLeetcode size={22} />
          </a>

          <a
            href="#projects"
            style={{
              textDecoration: "none",
              color: "var(--text)",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: 8,
              boxShadow: "0px 0px 5px var(--shadow)",
            }}
          >
            View Projects →
          </a>
        </motion.div>
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{scale: 0.8, opacity: 0}}
        animate={{scale: 1, opacity: 1}}
        transition={{duration: 0.6}}
        style={{
          textAlign: "center",
        }}
      >
        <Image
          src="/image/profile.png"
          alt="Sonu Paswan"
          width={450}
          height={450}
          priority
          style={{
            width: "100%",
            maxWidth: "420px",
            height: "auto",
            borderBottomRightRadius: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            border: "2px solid var(--border)",
            boxShadow: "-10px -5px 0px 0px var(--shadow)",
            objectFit: "cover",
          }}
        />
      </motion.div>
    </section>
  );
}
