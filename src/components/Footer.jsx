"use client";

import Image from "next/image";
import Link from "next/link";
import { footerData } from "@/utils/footerData";

export default function Footer() {
  return (
    <>
      {/* Hero Section Above Footer */}

      {/* Footer Section */}
      <footer className="w-full bg-pink-200 text-[var(--secondary)] pt-20 pb-10 px-6 md:px-20  mt-10">
        {/* Top Stats Section - (EMPTY IN YOUR CODE SO REMOVED) */}
        <section className="w-full bg-pink-200 text-[var(--primary)] text-center py-20 px-6 md:px-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {footerData.hero.title}
          </h2>

          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 text-[var(--secondary)]">
            {footerData.hero.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-16">
            <button className="bg-[var(--primary)] hover:bg-[var(--secondary)] px-8 py-4 rounded-lg font-semibold text-white text-lg">
              {footerData.hero.primaryBtn}
            </button>

            <button className="border border-white text-[var(--secondary)] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#0F172A] transition">
              {footerData.hero.secondaryBtn}
            </button>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            {footerData.hero.stats.map((item, i) => (
              <div key={i}>
                <h3 className="text-4xl font-bold text-[var(--secondary)]">
                  {item.value}
                </h3>
                <p className="text-lg text-[var(--primary)]">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left Section - Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://static.vecteezy.com/system/resources/previews/000/390/524/original/modern-company-logo-design-vector.jpg"
                width={40}
                height={40}
                alt="logo"
              />
              <span className="text-3xl font-bold text-[var(--primary)]">
                Propelus <span className="text-[var(--secondary)]">AI</span>
              </span>
            </div>

            <p className="max-w-xs text-[var(--secondary)]">
              {footerData.description}
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              {footerData.social.map((soc, i) => (
                <Link
                  key={i}
                  href={soc.href}
                  className="text-[var(--secondary)] hover:text-[var(--primary)] text-xl"
                >
                  {soc.icon === "linkedin" && (
                    <i className="fab fa-linkedin"></i>
                  )}
                  {soc.icon === "twitter" && <i className="fab fa-twitter"></i>}
                  {soc.icon === "facebook" && (
                    <i className="fab fa-facebook"></i>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerData.services.map((service, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[var(--primary)] transition"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-xl font-bold text-[var(--primary)] mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerData.company.map((item, i) => (
                <li key={i}>
                  <Link
                    href="#"
                    className="hover:text-[var(--primary)] transition"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t mt-14 pt-6 flex flex-col md:flex-row justify-between text-sm text-[var(--secondary)]">
          <p>{footerData.copyright}</p>
          <p className="text-[var(--primary)]">{footerData.powered}</p>
        </div>
      </footer>
    </>
  );
}
