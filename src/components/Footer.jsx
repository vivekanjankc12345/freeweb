"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { footerData } from "@/utils/footerData";

const contactLinks = [
  { label: "hello@propelus.ai", href: "mailto:hello@propelus.ai" },
  { label: "+1 (415) 555-1034", href: "tel:+14155551034" },
  { label: "Join the waitlist", href: "/get-started" },
];

const offices = ["New York", "Dubai", "London", "Mumbai"];

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-[#05060a] text-white">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_65%)]" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-16 px-6 py-20">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="space-y-4">
              <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-pink-200">
                <Sparkles className="h-4 w-4" />
                {footerData.hero.title}
              </p>
              <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
                {footerData.hero.subtitle}
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4 text-base font-semibold text-white shadow-[0_20px_60px_rgba(255,45,133,0.35)] transition hover:translate-y-[-2px]"
              >
                {footerData.hero.primaryBtn}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-6 py-4 text-base font-semibold text-white/80 transition hover:border-white/40 hover:text-white"
              >
                {footerData.hero.secondaryBtn}
              </Link>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {footerData.hero.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                <p className="text-3xl font-bold">{stat.value}</p>
                <p className="text-sm text-white/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5"
          >
            <div className="space-y-1">
              <p className="text-sm uppercase tracking-[0.6em] text-white/50">Propelus</p>
              <h3 className="text-3xl font-semibold text-white">AI Studio</h3>
            </div>
            <p className="text-white/70">{footerData.description}</p>
            <div className="flex flex-wrap gap-2">
              {offices.map((office) => (
                <span key={office} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/70">
                  {office}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/50">Navigation</h4>
            <ul className="space-y-2 text-white/80">
              {footerData.services.map((service) => (
                <li key={service}>
                  <Link href="/services" className="transition hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-4"
          >
            <h4 className="text-sm uppercase tracking-[0.4em] text-white/50">Connect</h4>
            <ul className="space-y-2 text-white">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="inline-flex items-center gap-2 text-white/80 transition hover:text-white">
                    {link.label}
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>{footerData.copyright}</p>
          <p>{footerData.powered}</p>
        </div>
      </div>
    </footer>
  );
}
