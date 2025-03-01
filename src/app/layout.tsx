import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marcel Breuer | Prompt Manager",
  description: "Der Prompt Manager kategorisiert und veröffentlicht ChatGPT-Prompts, sodass sie einfach durchsucht, getestet und in die Zwischenablage kopiert werden können. Ideal für alle, die ihre AI-Workflows optimieren möchten!",
};

const getCurrentYear = () => new Date().getFullYear();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="antialiased">
        {children}

        <footer className="bottom-0 absolute p-6 w-full text-gray-600 text-center">
          <p>&copy; Marcel Breuer {getCurrentYear()} </p>
        </footer>
      </body>
    </html>
  );
}
