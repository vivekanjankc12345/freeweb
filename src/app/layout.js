import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "PropelusAI",
  description: "PropelusAI - AI Solutions for Modern Problems",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative bg-[var(--background)] text-white antialiased">
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,45,133,0.12),_transparent_55%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(124,58,237,0.1),_transparent_60%)]" />
        </div>
        <div className="relative z-10 min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
