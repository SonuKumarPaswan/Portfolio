import type { Metadata } from "next";
import {  Poppins } from "next/font/google";
import ThemeProvider from "@/contexts/ThemeProvider";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio App",
  description: "A portfolio application with light and dark themes using Ant Design and Next.js", 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          background: "var(--bg)",
          color: "var(--text)",
          transition: "all 0.25s linear",
          minHeight: "100vh",
        }}

        className={`${poppins.variable} font-sans bg-var(--bg) text-var(--text)`}
      >
        <ThemeProvider>
            <Navbar />
            <main>{children}</main>
           <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
