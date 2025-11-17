import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

export const metadata = {
  title: "PropelusAI",
  description: "PropelusAI - AI Solutions for Modern Problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
         <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
