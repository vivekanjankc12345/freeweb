"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pb-4 pt-6">
      <motion.nav
        animate={{
          opacity: 1,
          y: scrolled ? 0 : 6,
          scale: scrolled ? 1 : 0.99,
        }}
        transition={{ duration: 0.4 }}
        className={`w-full max-w-6xl rounded-2xl border border-white/10 bg-black/40 px-4 py-3 backdrop-blur-[18px] shadow-[0_25px_80px_rgba(0,0,0,0.35)] ${
          scrolled ? "bg-black/60 border-white/15" : ""
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="relative inline-flex items-center gap-2 text-white">
            <span className="text-sm uppercase tracking-[0.6em] text-white/60">Propelus</span>
            <span className="text-lg font-semibold text-white">AI Studio</span>
            <span className="absolute inset-0 rounded-full bg-white/5 blur-2xl" aria-hidden />
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-0.5 lg:flex">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Link
            href="/get-started"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-5 py-2 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(255,45,133,0.35)] transition hover:scale-105 lg:flex"
          >
            Launch Brief
          </Link>

          <button
            className="inline-flex items-center justify-center rounded-full border border-white/20 p-2 text-white/80 lg:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-4 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-4 lg:hidden"
            >
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-3 text-base font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/get-started"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-pink-500 to-purple-500 px-4 py-3 text-base font-semibold text-white"
              >
                Launch Brief
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
}
