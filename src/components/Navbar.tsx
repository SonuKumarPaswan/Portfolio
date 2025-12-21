"use client";

import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "@/contexts/ThemeProvider";
import { Switch } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Navbar() {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowTopBar(!(currentScroll > lastScroll && currentScroll > 80));
      lastScroll = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconStyle = {
    fontSize: 22,
    color: "var(--text)",
    cursor: "pointer",
  };

  return (
    <motion.header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "var(--container)",
        opacity: 0.97,
        borderBottom: "1px solid var(--border)",
        boxShadow: "0px 0px  1px var(--shadow)",
      }}
    >
      {/* ================= Top + Navbar Wrapper ================= */}
      <AnimatePresence>
        {showTopBar && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              padding: "8px 80px",
              position: "sticky",
              top: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: 14,
            }}
          >
            {/* Left */}
            <div style={{ 
              display: "flex", 
              gap: 18, 
              alignItems: "center"
               }}>
              <a
                href="mailto:sonupaswan0381@gmail.com"
                style={{ display: "flex", gap: 6, alignItems: "center", color: "var(--text)" }}
              >
                <FaEnvelope style={{
                  color: "#25D366",
                  fontSize: 22,
                }} />
                sonupaswan0381@gmail.com
              </a>

              <a
                href="https://wa.me/919430266995"
                target="_blank"
                style={{ display: "flex", gap: 6, alignItems: "center", color: "var(--text)" }}
              >
                <FaWhatsapp   style={{
                  color: "#25D366",
                  fontSize: 22,
                }} />
                +91 94302 66995
              </a>
            </div>

            {/* Right */}
            <div style={{ display: "flex", gap: 20 }}>
              <a
                href="https://wa.me/919430266995"
                target="_blank"
                style={{ display: "flex", gap: 6, alignItems: "center", color: "var(--text)" }}
              >
              <FaWhatsapp style={{ ...iconStyle, color: "#25D366" }} />
              </a>
              <a href="https://www.instagram.com/sonu_paswan_0381/" target="_blank">
              <FaInstagram style={iconStyle} />
              </a>
              <a href="https://www.facebook.com/" target="_blank">
              <FaFacebook style={iconStyle} />
              </a>
              <a href="https://www.linkedin.com/in/sonukumarpaswan/" target="_blank">  
              <FaLinkedin style={iconStyle} />
              </a>
              <a href="https://github.com/SonuKumarPaswan" target="_blank">
              <FaGithub style={iconStyle} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ================= Main Navbar ================= */}
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        style={{
          padding: "14px 80px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
        }}
      >
        {/* Logo */}
        <h2 style={{ margin: 0, fontWeight: 600 }}>Sonu Paswan </h2>

        {/* Center Menu */}
        <div style={{ display: "flex", marginLeft: 45, gap: 25 }}>
          {["Home", "About", "Experience","Services", "Projects", "Skills", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  position: "relative",
                  color: "var(--text)",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {item}
                <span className="nav-underline" />
              </a>
            )
          )}
        </div>

        {/* Theme Toggle */}
        <div style={{ justifySelf: "end" }}>
          <Switch
            checked={isDark}
            onChange={(checked) => toggleTheme(checked)}
          />
        </div>
      </motion.nav>

      {/* Hover underline */}
      <style jsx>{`
        .nav-underline {
          position: absolute;
          left: 0;
          bottom: -5px;
          width: 100%;
          height: 2px;
          background: var(--text);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: left;
        }

        a:hover .nav-underline {
          transform: scaleX(1);
        }
      `}</style>
    </motion.header>
  );
}
