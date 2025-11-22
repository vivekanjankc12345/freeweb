"use client";

import { motion } from "framer-motion";
import { Quote, Sparkles } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Creator & Coach",
    location: "New York, USA",
    quote:
      "PropelusAI re-architected our funnel with AI-powered personalization. We 4x’d conversions in a single quarter and finally understand every signal in our community.",
    impact: "+312% conversion lift",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Ahmed Al-Rashid",
    role: "Founder, Nura Tech",
    location: "Dubai, UAE",
    quote:
      "Their automation fabric let our teams orchestrate launches in three languages simultaneously. It feels like having a 24/7 growth command center.",
    impact: "3 markets in 45 days",
    avatar: "AA",
  },
  {
    id: 3,
    name: "Emma Thompson",
    role: "Retail Experience Lead",
    location: "London, UK",
    quote:
      "The adaptive experience stack changed how we ship product stories. We can test, learn, and deploy globally without waiting on engineering queues.",
    impact: "18 live markets",
    avatar: "ET",
  },
  {
    id: 4,
    name: "Raj Patel",
    role: "Managing Partner, DMS",
    location: "Mumbai, India",
    quote:
      "PropelusAI is the only partner that matched our ambition. They brought research, narrative, and automation into one squad that feels like an internal team.",
    impact: "63% ops time saved",
    avatar: "RP",
  },
];

const marqueeLogos = ["Adobe Founders Club", "Riyadh Future Forum", "Meta Frontier Lab", "Y Combinator Fellows"];

function StarRating() {
  return (
    <div className="flex gap-1 text-pink-300">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-[var(--background)]  px-3 md:px-4.5 lg:px-6 py-12 md:py-18 lg:py-24">
      <div className="absolute inset-0 opacity-70">
        <div className="grid-blur absolute inset-0" />
        <div className="absolute -top-24 left-1/4 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-8 h-80 w-80 rounded-full bg-purple-500/20 blur-[150px]" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12">
        <div className="text-center space-y-5">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.4em] text-white/70"
          >
            <Sparkles className="h-4 w-4 text-pink-300" />
            SIGNAL STORIES
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-semibold leading-tight md:text-5xl"
          >
            Teams across four continents{" "}
            <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-purple-500 bg-clip-text text-transparent">
              trust PropelusAI
            </span>
            .
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-lg text-white/70"
          >
            We plug into existing teams, handle the messy middle, and leave behind systems that continue shipping value
            long after a sprint ends.
          </motion.p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[360px_1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[32px] border border-white/10 bg-gradient-to-br from-white/10 via-black/10 to-transparent p-8 backdrop-blur"
          >
            <div className="pointer-events-none absolute inset-0 rounded-[32px] border border-white/10 opacity-30" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <Quote className="h-10 w-10 text-pink-300" />
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-white/50">Signal Index</p>
                  <p className="text-3xl font-semibold text-white">9.6 / 10 NPS</p>
                </div>
              </div>
              <p className="text-white/80 text-lg leading-relaxed">
                “They don&rsquo;t hand you a slide deck—they embed, automate, and choreograph growth like it&rsquo;s a live
                show.”
              </p>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <div className="flex items-center justify-between">
                  <StarRating />
                  <span className="text-sm text-white/50">Global partner score</span>
                </div>
                <p className="mt-4 text-sm text-white/60">
                  Average rating from 42 retained partners across America, Europe, MENA, and APAC.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {["Enterprise GTM", "Product Studios", "Digital Commerce", "Media Labs"].map((tag) => (
                  <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:border-white/30 hover:bg-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500 text-lg font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-white/60">{testimonial.role}</p>
                    <p className="text-xs uppercase tracking-[0.3em] text-white/30">{testimonial.location}</p>
                  </div>
                </div>
                <p className="mt-5 text-white/80 leading-relaxed">“{testimonial.quote}”</p>
                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.4em] text-pink-200">
                  {testimonial.impact}
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-black/30 p-4 backdrop-blur">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            className="flex min-w-full gap-10"
          >
            {[...marqueeLogos, ...marqueeLogos].map((logo, index) => (
              <span key={`${logo}-${index}`} className="text-sm uppercase tracking-[0.6em] text-white/40">
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

