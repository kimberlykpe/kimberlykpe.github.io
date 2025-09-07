import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Ultra } from "next/font/google";
import MoonTime from "next/font/local";

const moontime = MoonTime({
  src: "../../public/fonts/MoonTime-Regular.ttf", // notice the leading slash
  variable: "--font-moontime",
});

// Google Fonts
const ultra = Ultra({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-ultra",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kimberly Escala | Front-End Developer",
  description: "Front-End Developer building responsive, accessible web apps with React, Next.js, Tailwind, and Drupal. Eager to learn, grow, and deliver user-focused solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ultra.variable} ${moontime.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
