export default function Footer() {
  return (
    <footer
      style={{
        width: "100vw",
        padding: "20px 24px",
        textAlign: "center",
        background: "var(--container)",
        borderTop: "1px solid var(--border)",
        marginTop: 40,
      }}
    >
      <p style={{ margin: 0, color: "var(--text)" }}>
        © {new Date().getFullYear()} Portfolio — All Rights Reserved.
      </p>
    </footer>
  );
}
