"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, Headphones, ShieldCheck, Sparkles, UsersRound } from "lucide-react";

const pillars = [
  {
    icon: Award,
    title: "Lab-first craft",
    description: "We prototype with live data on day one, blending research, brand, and engineering disciplines.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise guardrails",
    description: "Security reviews, compliance matrices, and governance rituals come baked into every sprint.",
  },
  {
    icon: Headphones,
    title: "Embedded partnership",
    description: "Pods plug into your stack, share Slack channels, and stay on-call until the mission is stable.",
  },
];

const rituals = [
  { label: "Pulse briefings", detail: "Daily async recordings keeping every stakeholder aligned." },
  { label: "Signal reviews", detail: "Weekly intelligence drops summarizing wins, risks, and live experiments." },
  { label: "Culture packets", detail: "Playbooks + enablement assets so your team can keep scaling the system." },
];

const stats = [
  { value: "10+", label: "Years shipping AI-native work" },
  { value: "500+", label: "Launches & transformations" },
  { value: "98%", label: "Retention & renewals" },
  { value: "24/7", label: "Global support coverage" },
];

export default function About() {
  return (
    <section className="relative overflow-hidden bg-[#05060a] px-3 md:px-4.5 lg:px-6 py-12 md:py-18 lg:py-24">
      <div className="absolute inset-0 opacity-60">
        <div className="grid-blur absolute inset-0" />
        <div className="absolute -top-16 left-1/3 h-72 w-72 rounded-full bg-pink-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-10 h-96 w-96 rounded-full bg-purple-500/20 blur-[180px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70">
              <Sparkles className="h-4 w-4 text-pink-300" />
              WHY PROPELUSAI
            </span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight md:text-5xl">
              A studio that behaves like{" "}
              <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-purple-500 bg-clip-text text-transparent">
                an embedded lab.
              </span>
            </h2>
            <p className="mt-4 text-lg text-white/70">
              We collapse strategy, creative, data, and automation into a single team so you move from idea to launch in
              weeks—not quarters. Expect deep research, cinematic craft, and the infrastructure to keep scaling.
            </p>

            <div className="mt-10 space-y-5">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-[0_18px_45px_rgba(255,45,133,0.35)] transition group-hover:scale-105">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <p className="text-lg font-semibold text-white">{pillar.title}</p>
                      <p className="text-sm text-white/70">{pillar.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold shadow-[0_15px_45px_rgba(255,45,133,0.35)] transition hover:translate-y-[-2px]">
                Meet the studio
                <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white">
                Download credentials
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-white/5 via-black/10 to-transparent p-4 md:p-5 lg:p-8 backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[40px] border border-white/5 opacity-30" />
            <div className="relative space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-white/40">Global studio</p>
                  <p className="text-3xl font-semibold text-white">New York · Dubai · London · Mumbai</p>
                </div>
                <UsersRound className="h-10 w-10 text-pink-200" />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">Rituals</p>
                <div className="mt-4 space-y-4">
                  {rituals.map((ritual) => (
                    <div key={ritual.label} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-pink-400" />
                      <div>
                        <p className="text-sm font-semibold text-white">{ritual.label}</p>
                        <p className="text-sm text-white/60">{ritual.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">Live programs</p>
                <div className="mt-4 grid gap-3">
                  {["Founders intelligence lab", "Commerce velocity hub", "Enterprise automation guild"].map((program) => (
                    <div key={program} className="flex items-center justify-between text-sm text-white/70">
                      <span>{program}</span>
                      <span className="text-pink-300">● Open slots</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-4"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur">
              <p className="text-4xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-sm text-white/60">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

