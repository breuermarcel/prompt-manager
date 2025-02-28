import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Prompt Manager",
  description: "Der Prompt Manager kategorisiert und veröffentlicht ChatGPT-Prompts, sodass sie einfach durchsucht, getestet und in die Zwischenablage kopiert werden können. Ideal für alle, die ihre AI-Workflows optimieren möchten!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
