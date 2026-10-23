import type { Metadata } from "next";
import type { ReactNode } from "react";
// @ts-ignore Next.js processes global CSS imports.
import "./globals.css";


export const metadata: Metadata = {
  title: "Shreya Garg | Developer Portfolio",
  description:
    "A personal developer portfolio showcasing my technical skills, projects, and experience in software development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}
