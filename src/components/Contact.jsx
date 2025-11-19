"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2, Mail, Phone, Sparkles, Target, Zap } from "lucide-react";

const touchpoints = [
  {
    icon: Calendar,
    title: "30-min strategy lab",
    description: "Co-build your growth thesis with our intelligence leads.",
    gradient: "from-pink-500/30 to-purple-500/20",
  },
  {
    icon: Target,
    title: "Bespoke roadmaps",
    description: "We map prioritised bets and automation candidates in 72h.",
    gradient: "from-purple-500/30 to-indigo-500/20",
  },
  {
    icon: Zap,
    title: "Launch in weeks",
    description: "Pods embed with your team to ship and train simultaneously.",
    gradient: "from-amber-500/30 to-pink-500/20",
  },
];

const commitments = [
  "Deep-dive discovery + opportunity scoring",
  "AI integration & automation blueprint",
  "Revenue, retention, and efficiency projections",
  "Risk, compliance, and data readiness review",
];

const signalStats = [
  { label: "Active pods", value: "12" },
  { label: "Avg. ROI", value: "4.8x" },
  { label: "Markets served", value: "18" },
];

export default function Contact() {
  const [calendlyLink, setCalendlyLink] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });

  const handleChange = (field) => (event) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  return (
    <section className="relative overflow-hidden bg-[#040308] px-6 py-24">
      <div className="absolute inset-0 opacity-70">
        <div className="grid-blur absolute inset-0" />
        <div className="absolute left-0 top-10 h-80 w-80 rounded-full bg-pink-500/20 blur-[150px]" />
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-purple-500/30 blur-[180px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-14">
        <div className="text-center space-y-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <Sparkles className="h-4 w-4 text-pink-300" />
            BOOK A POD
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold leading-tight md:text-6xl"
          >
            Build your next release with the{" "}
            <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-purple-500 bg-clip-text text-transparent">
              PropelusAI command studio.
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg text-white/70"
          >
            Share the signal you’re chasing—together we’ll architect an intelligence pod, map the data, and set a launch
            sprint that fits your team’s rhythm.
          </motion.p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {touchpoints.map((touchpoint, index) => {
            const Icon = touchpoint.icon;
            return (
              <motion.div
                key={touchpoint.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div
                  className={`pointer-events-none absolute inset-0 rounded-[28px] bg-gradient-to-br ${touchpoint.gradient} opacity-0 transition group-hover:opacity-40`}
                />
                <div className="relative flex flex-col gap-4">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-white">
                    <Icon className="h-6 w-6" />
                  </span>
                  <div>
                    <p className="text-xl font-semibold text-white">{touchpoint.title}</p>
                    <p className="text-sm text-white/70">{touchpoint.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-black/10 to-transparent p-8 backdrop-blur"
          >
            <div className="flex items-center gap-3">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-white shadow-[0_15px_45px_rgba(255,45,133,0.35)]">
                <Calendar className="h-5 w-5" />
              </span>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-white/40">Book a slot</p>
                <p className="text-2xl font-semibold text-white">Launch briefing call</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange("name")}
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition focus:border-pink-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Work Email"
                value={formData.email}
                onChange={handleChange("email")}
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition focus:border-pink-400 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone or WhatsApp"
                value={formData.phone}
                onChange={handleChange("phone")}
                className="w-full rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-white placeholder-white/40 transition focus:border-pink-400 focus:outline-none"
              />
            </div>

            <div className="mt-6 rounded-2xl border border-pink-500/20 bg-pink-500/10 p-5">
              <div className="flex items-center gap-2 text-sm text-white/70">
                <Calendar className="h-4 w-4 text-pink-300" />
                Embed your Calendly link (optional)
              </div>
              <input
                type="text"
                placeholder="https://calendly.com/your-team/propelusai"
                value={calendlyLink}
                onChange={(event) => setCalendlyLink(event.target.value)}
                className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 transition focus:border-pink-400 focus:outline-none"
              />
            </div>

            <button className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-4 text-lg font-semibold text-white shadow-[0_20px_50px_rgba(255,45,133,0.35)] transition hover:translate-y-[-2px]">
              Schedule the lab
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="rounded-[32px] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-white/40">What you receive</p>
              <div className="mt-5 space-y-4">
                {commitments.map((commitment) => (
                  <div key={commitment} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-pink-300" />
                    <p className="text-sm text-white/80">{commitment}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white px-5 py-4 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-pink-500 hover:text-white">
                <Phone className="h-4 w-4" />
                Call our team
              </button>
              <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-transparent px-5 py-4 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-white/40">
                <Mail className="h-4 w-4" />
                hello@propelus.ai
              </button>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {signalStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-black/30 p-4 text-center">
                  <p className="text-3xl font-semibold text-white">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.4em] text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-6 text-sm text-white/70">
              🌍 Pods operating across America, Europe, Middle East, India, and APAC. We align to your timezone and
              security standards.
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

