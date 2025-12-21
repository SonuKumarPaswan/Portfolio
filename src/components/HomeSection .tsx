"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaEnvelope, FaDownload } from "react-icons/fa";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const roles = [
  "Full Stack Developer",
  "MERN Developer",
  "Java Developer",
];

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
    }, 80); // typing speed

    return () => clearTimeout(timeout);
  } else {
    const timeout = setTimeout(() => {
      setText("");
      setCharIndex(0);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 1500); // delay before next role

    return () => clearTimeout(timeout);
  }
}, [charIndex, roleIndex]);

  return (
    <section
      id="home"
      style={{
        // background: "var(--container)",
        minHeight: "100vh",
        padding: "90px",
        display: "grid",
        gridTemplateColumns: "1.2fr 1fr",
        alignItems: "center",
        gap: 40,
        marginTop: 40,
      }}
    >
      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        initial={{ x: -60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: 34, marginBottom: 10 }}
        >
          Hi, 👋 I'm <span style={{ color: "#1677ff" }}>Sonu Paswan</span>
        </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                fontSize: 20,
                fontWeight: 600,
                color: "var(--text)",
                minHeight: 28,
                marginBottom: 20,
              }}
            >
              {text}
              <span style={{ color: "#1677ff" }}>|</span>
            </motion.p>


        {/* About */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.7 }}
          style={{
            maxWidth: 520,
            lineHeight: 1.7,
            marginBottom: 30,
          }}
        >
          I am a Full Stack Developer specializing in building scalable,
          user-centric web applications using MERN Stack and Java.
          I focus on clean UI, secure backend systems, and real-world
          problem solving.
        </motion.p>

        {/* Buttons */}


          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            style={{ display: "flex", gap: 16, marginBottom: 30 }}
          >
            {/* Hire Me */}
            <a
              href="mailto:sonupaswan0381@gmail.com"
              style={{
                padding: "12px 24px",
                boxShadow: "0px 0px 2px var(--shadow)",
                color: "var(--text)",
                borderRadius: 6,
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

            {/* Download CV */}
            <a
              href="/Sonu_Paswan_CV.pdf"
              download
              style={{
                padding: "12px 24px",
                boxShadow: "0px 0px 2px var(--shadow)",
                color: "var(--text)",
                borderRadius: 6,
                textDecoration: "none",
                fontWeight: 500,
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <FaDownload size={16} style={{
                border:"1px solid --var(--text)"
              }} />
              Download CV
            </a>
          </motion.div>

              <hr  />
        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          style={{ display: "flex", gap: 18, alignItems: "center", marginTop: 20 }}
        >
          <span style={{ fontWeight: 500 }}>Follow me:</span>

          <a href="https://github.com/sonukumarpaswan" target="_blank"  style={{
                  position: "relative",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontWeight: 500,
                   boxShadow: "0px 0px 5px var(--shadow)",
                   padding: " 10px",
                  borderRadius: 6,
                }}> 
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/sonukumarpaswan/" target="_blank" style={{   
                  position: "relative",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontWeight: 500,
                   boxShadow: "0px 0px 5px var(--shadow)",
                  padding: " 10px",
                  borderRadius: 6,
                }}>
            <FaLinkedin size={22} />
          </a>
          <a href="https://leetcode.com/u/zsonukumar0578/" target="_blank" style={{
                  position: "relative",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontWeight: 500,
                  boxShadow: "0px 0px 5px var(--shadow)",
                  padding: "10px",
                  borderRadius: 6,
                  alignItems:"center",
                }}>
            <SiLeetcode size={22} />
          </a>

          <a
            href="#projects"
            style={{
              marginLeft: 10,
              textDecoration: "none",
              color: "var(--text)",
              fontWeight: 500,
              padding: "12px 24px",
              borderRadius: 6,
              boxShadow: " 0px 0px 4px var(--shadow)",
            }}
          >
            View Projects →
          </a>
        </motion.div>
      </motion.div>

      {/* ================= RIGHT IMAGE ================= */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center" }}
      >
        <Image
          src="/image/profile.png"
          alt="Sonu Paswan"
          width={380}
          height={380}
          style={{
            borderBottomRightRadius: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            // borderBottomLeftRadius: 20,
            borderStyle: "solid",
            borderBlockColor: "var(--border)",
            boxShadow: " -10px  -5px 0px  0px var(--shadow)",
            objectFit: "inherit",
          }}
        />
      </motion.div>
    </section>
  );
}

