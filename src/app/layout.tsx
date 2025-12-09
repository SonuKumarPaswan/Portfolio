import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import ThemeProvider from "@/contexts/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import './globals.css';


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Sonu Paswan | MERN Stack Developer",
  description:
    "Official portfolio of Sonu Paswan — Fullstack MERN Developer. Explore projects, skills, GitHub, LinkedIn & Instagram (@er.sonu__0578).",
  keywords: [
    "Sonu Paswan",
    "Sonu Kumar Paswan",
    "Sonu K Paswan",
    "sonukumarpaswan",
    "sonupaswan",
    "sonupaswan0578",
    "er sonu",
    "er.sonu__0578",
    "Java Developer",
    "Java Engineer",
    "Java Software Developer",
    "MERN Developer",
    "React Developer",
    "Fullstack Developer",
    "Next.js Developer",
    "JavaScript Developer",
  ],
  authors: [{ name: "Sonu Paswan" }],
  creator: "Sonu Paswan",
  openGraph: {
    title: "Sonu Paswan | MERN Stack Developer",
    description:
      "Portfolio of Sonu Paswan – Fullstack MERN Developer with projects, skills and contact details.",
    url: "https://sonupaswan.vercel.app",
    siteName: "Sonu Paswan Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://sonupaswan.vercel.app"),
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
       <meta
        name="google-site-verification"
        content="JpTvtuz3GGXDcUqt2Z5LtB_VViDGyTwaYQaP43y9Bb4"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Sonu Paswan",
            url: "https://sonupaswan.vercel.app",
            image: "https://sonupaswan.vercel.app/profile.jpg",
            jobTitle: "Full Stack MERN | Java Developer",

            sameAs: [
              "https://github.com/sonukumarpaswan",
              "https://www.linkedin.com/in/sonukumarpaswan",
              "https://instagram.com/er.sonu__0578"
            ],

            hasPart: [
              { "@type": "WebPage", "url": "https://sonupaswan.vercel.app/about" },
              { "@type": "WebPage", "url": "https://sonupaswan.vercel.app/projects" },
              { "@type": "WebPage", "url": "https://sonupaswan.vercel.app/services" },
              { "@type": "WebPage", "url": "https://sonupaswan.vercel.app/contact" },
              { "@type": "WebPage", "url": "https://sonupaswan.vercel.app/github" },
              { "@type": "WebPage", "url": "https://sonupaswan.vercel.app/linkedin" },
              { "@type": "WebPage", "url": "https://sonupaswan.vercel.app/leetcode" }
            ]
          }),
        }}
      />
    </head>
      <body
        style={{
          fontFamily: "var(--font-poppins), sans-serif",
          background: "var(--bg)",
          color: "var(--text)",
          transition: "all 0.25s linear",
          minHeight: "100vh",
        }}
        className={poppins.variable}
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
