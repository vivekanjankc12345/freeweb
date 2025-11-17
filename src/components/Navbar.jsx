"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { id: 1, label: "Home", href: "/" },
    { id: 2, label: "Services", href: "/services" },
    { id: 3, label: "About", href: "/about" },
    { id: 4, label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full bg-[var(--background)] shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">

      {/* Logo (Fixed) */}
      <Link href="/" className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <Image src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg" width={35} height={35} alt="logo" />
          <span className="text-2xl font-bold text-[var(--primary)]">
            Propelus <span className="text-[var(--secondary)]">AI</span>
          </span>
        </div>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-10 text-[var(--secondary)] font-medium">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link href={item.href} className="hover:text-[var(--primary)]">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Desktop Button */}
      <Link
        href="/get-started"
        className="hidden md:block bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--secondary)] transition"
      >
        Get Started
      </Link>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden block text-[var(--secondary)] focus:outline-none"
      >
        {open ? <span className="text-3xl">&times;</span> : <span className="text-3xl">&#9776;</span>}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-[var(--background)] shadow-md py-4 px-6 md:hidden">
          <ul className="flex flex-col gap-6 text-[var(--secondary)] text-lg">
            {menuItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block hover:text-[var(--primary)]"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/get-started"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:bg-[var(--secondary)] transition"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
