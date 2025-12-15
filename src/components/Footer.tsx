"use client";

export default function Footer() {
  return (
    <footer
      style={{
        padding: "20px 24px",
        textAlign: "center",
        background: "var(--container)",
        borderTop: "1px solid var(--border)",
        borderRadius: 5,
        marginTop: 30,
      }}
      className="panel"
    >
      <p style={{ margin: 0, color: "var(--text)" }}>
        © {new Date().getFullYear()} Portfolio — All Rights Reserved.
      </p>
    </footer>
  );
}
