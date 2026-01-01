"use client";

import { Empty, Button } from "antd";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "var(--bg)",
        textAlign: "center",
        gap: "16px",
      }}
    >
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Page Not Found"
      />

      <Button
        type="primary"
        size="large"
        onClick={() => router.push("/")}
      >
        Go to Home
      </Button>
    </div>
  );
}
