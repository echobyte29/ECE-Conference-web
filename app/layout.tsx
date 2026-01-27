import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ROCV-AI 2026 - Robotics, Communication, VLSI, and Artificial Intelligence",
  description:
    "International Conference on Emerging Trends in Robotics, Communication, VLSI, and Artificial Intelligence (ROCV-AI 2026) - May 15-16, 2026 at KLEF Bowrampet Campus, Hyderabad",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
