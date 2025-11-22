"use client";
import { motion } from "framer-motion";
import { Globe2, Infinity, Layers3, Sparkles, Workflow } from "lucide-react";

const highlightCards = [
  {
    title: "Orchestrated Launch Pods",
    description: "AI copilots, creative ops, and engineering converging in a single pod for lightning-fast releases.",
    icon: Sparkles,
    stats: ["3x faster GTM", "Global coverage", "Always-on insights"],
  },
  {
    title: "Adaptive Experience Stack",
    description: "Composable journeys that personalize every touchpoint with live audience intelligence.",
    icon: Layers3,
    stats: ["Headless + AI CMS", "Realtime experimentation", "Omnichannel sync"],
  },
  {
    title: "Automation Fabric",
    description: "Resilient workflow automation keeping your teams focused on strategy instead of busywork.",
    icon: Workflow,
    stats: ["No-code dashboards", "Trusted guardrails", "Human-in-the-loop"],
  },
];

export default function Highlights() {
  return (
    <section className="relative  px-3 md:px-4.5 lg:px-6 py-12 md:py-18 lg:py-24">
      <div className="absolute inset-0 mx-auto max-w-5xl blur-[160px] opacity-40 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-r from-pink-500/40 via-indigo-500/30 to-transparent rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div className="space-y-4">
            <p className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.4em] text-pink-200">
              <Infinity className="w-4 h-4" />
              Modular services
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-white leading-tight">
              Shape unforgettable products and campaigns with a studio that thinks like{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-pink-400">
                a lab.
              </span>
            </h2>
          </div>
          <div className="max-w-xl text-slate-300 text-lg">
            We choreograph end-to-end experiences—from research sprints to automated lifecycle marketing—so your brand shows up consistently across every market.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlightCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.4 }}
                className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 space-y-6 hover:border-white/30 transition-colors group"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                </div>
                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500/40 to-purple-500/40 border border-white/10 flex items-center justify-center">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="relative space-y-3">
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  <p className="text-slate-300">{card.description}</p>
                </div>
                <ul className="relative space-y-2 text-sm text-slate-300">
                  {card.stats.map((pill) => (
                    <li key={pill} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mr-2 mt-2">
                      <Globe2 className="w-3.5 h-3.5 text-pink-300" />
                      {pill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

