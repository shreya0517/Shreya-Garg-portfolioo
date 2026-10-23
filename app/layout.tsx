import type { Metadata } from "next";
import type { ReactNode } from "react";
// @ts-ignore Next.js processes global CSS imports.
import "./globals.css";

export const metadata: Metadata = {
  title: "Shreya Garg — Full-Stack Developer",
  description:
    "Portfolio of Shreya Garg: full-stack development, projects, skills, experience, and ways to connect.",
  openGraph: {
    title: "Shreya Garg — Full-Stack Developer",
    description: "Turning ideas into meaningful web experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
