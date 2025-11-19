"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Brain, ChartSpline, Layers3, ShieldCheck, Sparkles, Workflow } from "lucide-react";

const serviceTracks = [
  {
    id: "strategy",
    title: "Intelligence Strategy Pods",
    tagline: "Zero-to-one clarity in ten days.",
    description:
      "Cross-functional pods blend growth science, AI research, and experience strategy to design a validated roadmap before a single feature ships.",
    icon: Brain,
    gradient: "from-pink-500/20 via-orange-500/10 to-transparent",
    metrics: [
      { label: "Launch cadence", value: "14 days" },
      { label: "Signals wired", value: "48+" },
      { label: "Stakeholders aligned", value: "5 teams" },
    ],
    deliverables: [
      "North-star narrative",
      "Opportunity model",
      "AI capability map",
      "Activation backlog",
    ],
  },
  {
    id: "automation",
    title: "Automation Fabric",
    tagline: "Humans stay on strategy, bots own the busywork.",
    description:
      "Composable automation layers orchestrate marketing, operations, and support with live guardrails, so experiments move from idea to impact instantly.",
    icon: Workflow,
    gradient: "from-violet-500/20 via-pink-500/15 to-transparent",
    metrics: [
      { label: "Playbooks deployed", value: "32" },
      { label: "Manual effort cut", value: "63%" },
      { label: "Coverage", value: "24/7" },
    ],
    deliverables: [
      "Runbook library",
      "AI-assisted QA layer",
      "Compliance matrix",
      "Ops command center",
    ],
  },
  {
    id: "experiences",
    title: "Adaptive Experience Stack",
    tagline: "Interfaces that reshape themselves around every visitor.",
    description:
      "Headless experiences plug into your data graph to personalize content, pricing, and journeys in real time across web, product, and retail endpoints.",
    icon: Layers3,
    gradient: "from-sky-500/20 via-purple-500/10 to-transparent",
    metrics: [
      { label: "Lift in CVR", value: "+312%" },
      { label: "Markets live", value: "18" },
      { label: "Latency target", value: "180ms" },
    ],
    deliverables: [
      "Experience OS",
      "Realtime experimentation suite",
      "Audience intelligence layer",
      "Motion language pack",
    ],
  },
];

const deliveryMoments = [
  {
    title: "Signal Mapping",
    detail: "Interview loops + telemetry ingestion to surface leverage points.",
    meta: "Days 1-3",
  },
  {
    title: "Systems Design",
    detail: "Blueprint automation, data contracts, and experience ladders.",
    meta: "Days 4-7",
  },
  {
    title: "Live Simulation",
    detail: "Prototype journeys in the command canvas with real data stubs.",
    meta: "Days 8-10",
  },
  {
    title: "Deployment Sprint",
    detail: "Ship, measure, and train internal teams through paired enablement.",
    meta: "Days 11-14",
  },
];

const techStack = [
  { label: "AI copilots", value: ["OpenAI GPT-4.1", "Anthropic Claude", "Vertex AI"] },
  { label: "Automation", value: ["n8n", "Make.com", "Temporal"] },
  { label: "Experience", value: ["Next.js", "Framer Motion", "Contentful"] },
  { label: "Intelligence", value: ["dbt", "Snowflake", "Amplitude"] },
];

export default function CoreServices() {
  const [activeTrack, setActiveTrack] = useState(serviceTracks[0]);

  return (
    <section className="relative overflow-hidden bg-[var(--background)] px-6 py-24">
      <div className="absolute inset-0 opacity-60">
        <div className="grid-blur absolute inset-0" />
        <div className="absolute -top-20 right-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-0 left-6 h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <div className="space-y-6 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <Sparkles className="h-4 w-4 text-pink-300" />
            CORE SYSTEMS
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold leading-tight md:text-5xl"
          >
            AI-native studios building{" "}
            <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-purple-500 bg-clip-text text-transparent">
              living
            </span>{" "}
            products.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg text-white/70"
          >
            Every engagement is a choreographed system: strategy pods surface leverage, automation fabric keeps work
            humming, and adaptive experiences turn launches into rituals.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-[28px] border border-white/10 bg-white/5 p-4 backdrop-blur"
          >
            <div className="rounded-2xl border border-white/5 bg-black/30 p-4 text-left">
              <p className="text-sm uppercase tracking-[0.4em] text-white/40">Select track</p>
              <h3 className="mt-2 text-2xl font-semibold text-white">Service blueprints</h3>
            </div>
            <div className="mt-4 flex flex-col gap-3">
              {serviceTracks.map((track) => {
                const Icon = track.icon;
                const isActive = activeTrack.id === track.id;
                return (
                  <button
                    key={track.id}
                    onClick={() => setActiveTrack(track)}
                    className={`relative flex w-full flex-col gap-2 rounded-2xl border px-4 py-4 text-left transition ${
                      isActive
                        ? "border-white/30 bg-gradient-to-r from-white/10 to-transparent"
                        : "border-white/5 bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Icon className="h-5 w-5 text-pink-200" />
                      </span>
                      <div>
                        <p className="text-sm uppercase tracking-[0.2em] text-white/50">{track.tagline}</p>
                        <p className="text-lg font-semibold text-white">{track.title}</p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>

          <div className="space-y-8">
            <AnimatePresence mode="wait">
              <motion.article
                key={activeTrack.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/5 via-black/10 to-white/0 p-8 backdrop-blur"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/5 opacity-40" />
                <div className="flex flex-col gap-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.4em] text-white/60">How it feels</p>
                    <h3 className="mt-3 text-3xl font-semibold text-white">{activeTrack.title}</h3>
                    <p className="mt-3 text-white/70">{activeTrack.description}</p>
                  </div>
                  <div className="grid gap-4 md:grid-cols-3">
                    {activeTrack.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-2xl border border-white/10 bg-black/30 px-4 py-5 text-center"
                      >
                        <p className="text-2xl font-semibold text-white">{metric.value}</p>
                        <p className="text-xs uppercase tracking-[0.4em] text-white/40">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {activeTrack.deliverables.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 px-6 py-3 text-sm font-semibold shadow-[0_15px_45px_rgba(255,45,133,0.35)] transition hover:translate-y-[-2px]">
                      Launch this pod
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <button className="rounded-2xl border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40 hover:text-white">
                      Download blueprint
                    </button>
                  </div>
                </div>
                <div
                  className={`pointer-events-none absolute -top-32 right-0 h-64 w-64 rounded-full bg-gradient-to-br ${activeTrack.gradient} blur-[120px]`}
                />
              </motion.article>
            </AnimatePresence>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <ChartSpline className="h-5 w-5 text-pink-300" />
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">14-day choreography</p>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {deliveryMoments.map((moment, index) => (
                  <div key={moment.title} className="relative rounded-2xl border border-white/10 bg-black/30 p-5">
                    <div className="flex items-center justify-between">
                      <p className="text-xs uppercase tracking-[0.4em] text-white/30">{moment.meta}</p>
                      <span className="text-white/40">{index + 1}/4</span>
                    </div>
                    <h4 className="mt-2 text-xl font-semibold text-white">{moment.title}</h4>
                    <p className="mt-2 text-sm text-white/70">{moment.detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-[28px] border border-white/10 bg-gradient-to-r from-white/5 to-transparent p-8 backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-emerald-300" />
                <p className="text-sm uppercase tracking-[0.4em] text-white/50">Reference stack</p>
              </div>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {techStack.map((stack) => (
                  <div key={stack.label} className="rounded-2xl border border-white/10 bg-black/30 p-5">
                    <p className="text-xs uppercase tracking-[0.4em] text-white/30">{stack.label}</p>
                    <p className="mt-2 text-white">{stack.value.join(" • ")}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

