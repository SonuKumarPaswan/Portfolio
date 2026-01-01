"use client";

import React, { useEffect, useState } from "react";

const Page = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentTime.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const formattedTime = currentTime.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3.5rem", marginBottom: "20px" }}>
        🎉 Happy New Year 🎉
      </h1>

      {/* BIG DATE */}
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: "600",
          marginBottom: "12px",
        }}
      >
        {formattedDate}
      </h2>

      {/* VERY BIG TIME */}
      <h3
        style={{
          fontSize: "3rem",
          fontWeight: "700",
          letterSpacing: "2px",
        }}
      >
        {formattedTime}
      </h3>
    </div>
  );
};

export default Page;
