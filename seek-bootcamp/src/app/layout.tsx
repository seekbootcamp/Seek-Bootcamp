import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SEEK Bootcamp | Learn Skills That Matter",
  description:
    "SEEK Bootcamp is a creative and practical workshop platform focused on hands-on learning, innovation, teamwork, and real-world skill development through immersive workshops and interactive experiences.",
  keywords: ["bootcamp", "workshops", "skills", "innovation", "learning", "mentorship"],
  openGraph: {
    title: "SEEK Bootcamp | Learn Skills That Matter",
    description:
      "Creative workshops, real-world projects, mentorship, and innovation-driven experiences for future builders.",
    type: "website",
    url: "https://seekbootcamp.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEEK Bootcamp | Learn Skills That Matter",
    description: "Creative workshops, real-world projects, mentorship, and innovation-driven experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-[#F8FAFC] font-inter antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
