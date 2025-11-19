"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, LineChart, ShieldCheck, Sparkles, Zap } from "lucide-react";

const stats = [
  { label: "Growth Avg.", value: "312%", detail: "campaign uplift" },
  { label: "Deployments", value: "140+", detail: "AI accelerators" },
  { label: "Client NPS", value: "9.6/10", detail: "global teams" },
];

const serviceBadges = [
  { icon: "🧠", text: "AI Strategy Pods" },
  { icon: "📈", text: "Growth Intelligence" },
  { icon: "⚡", text: "Automation Sprints" },
];

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-[var(--secondary)] text-white">
      <div className="absolute inset-0 opacity-60">
        <div className="grid-blur absolute inset-0" />
        <div className="absolute -top-40 -right-24 w-[420px] h-[420px] rounded-full bg-pink-500/30 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-[360px] h-[360px] rounded-full bg-indigo-500/30 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-32 flex flex-col gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 w-fit text-sm tracking-[0.2em] uppercase"
        >
          <Sparkles className="w-4 h-4 text-pink-300" />
          PropelusAI 2025
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.8 }}
                className="text-4xl md:text-6xl font-semibold leading-tight"
              >
                Build breathtaking digital moments powered by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-orange-300 to-purple-500">
                  adaptive intelligence
                </span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.8 }}
                className="text-lg text-slate-200/90 leading-relaxed"
              >
                PropelusAI blends creative direction, engineering precision, and AI-native workflows to ship
                immersive experiences, high-converting funnels, and resilient platforms for brand teams that
                need to move faster than the market.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <button className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-500 font-semibold text-base shadow-[0_20px_60px_rgba(255,45,133,0.25)] transition-transform hover:translate-y-[-2px]">
                Launch a Sprint
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 rounded-2xl border border-white/20 text-base font-semibold backdrop-blur bg-white/5 hover:border-white/40 transition-colors">
                Watch Product Reel
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.8 }}
              className="flex flex-wrap gap-3"
            >
              {serviceBadges.map((badge) => (
                <span
                  key={badge.text}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-slate-200"
                >
                  {badge.icon}
                  {badge.text}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="relative h-[520px] rounded-[36px] bg-gradient-to-br from-neutral-900 via-neutral-900/80 to-slate-900 border border-white/10 backdrop-blur-2xl overflow-hidden"
            >
              <div className="absolute -top-20 right-10 w-48 h-48 bg-pink-500/30 blur-[80px]" />
              <div className="absolute bottom-0 -left-10 w-56 h-56 bg-indigo-500/30 blur-[80px]" />

              <div className="relative h-full p-8 flex flex-col justify-between">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm uppercase tracking-[0.4em] text-slate-400">Live Command</div>
                    <LineChart className="w-6 h-6 text-pink-300" />
                  </div>
                  <h3 className="text-3xl font-semibold leading-snug text-white">
                    Autonomous brand copilots orchestrate launches, campaigns, and real-time personalization loops.
                  </h3>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Journey Canvas",
                      subtitle: "Predictive funnels update hourly.",
                      icon: <Zap className="w-5 h-5 text-pink-300" />,
                    },
                    {
                      title: "Trust Layer",
                      subtitle: "Enterprise-grade security + compliance.",
                      icon: <ShieldCheck className="w-5 h-5 text-sky-200" />,
                    },
                  ].map((card) => (
                    <div key={card.title} className="rounded-2xl bg-white/5 border border-white/10 p-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-slate-300">
                        {card.icon}
                        {card.title}
                      </div>
                      <p className="text-xs text-slate-400">{card.subtitle}</p>
                    </div>
                  ))}
                </div>

                <div className="rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 p-5 space-y-3">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Realtime Signal</p>
                  <div className="flex items-end gap-3">
                    <span className="text-5xl font-bold text-white">87%</span>
                    <span className="text-sm text-emerald-300">conversion uplift</span>
                  </div>
                  <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "87%" }}
                      transition={{ duration: 1.4, delay: 0.4 }}
                      className="h-full bg-gradient-to-r from-pink-400 to-amber-300"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-10 -right-6 bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-2xl"
            >
              <div className="flex flex-col">
                <span className="text-xs text-slate-300">Avg launch window</span>
                <span className="text-lg font-semibold text-white">14 days</span>
              </div>
              <div className="h-12 w-px bg-white/10" />
              <div className="flex flex-col">
                <span className="text-xs text-slate-300">Automation nodes</span>
                <span className="text-lg font-semibold text-white">48 live</span>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6 hover:border-white/30 transition-colors"
            >
              <p className="text-sm tracking-[0.3em] uppercase text-slate-400">{stat.label}</p>
              <p className="text-4xl font-semibold mt-3">{stat.value}</p>
              <p className="text-sm text-slate-300 mt-1">{stat.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
