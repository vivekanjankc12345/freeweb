import CoreServices from "@/components/CoreServices";
import Highlights from "@/components/Highlights";
import ServicePortfolio from "@/components/ServicePortfolio.jsx";

export const metadata = {
  title: "Services | PropelusAI",
  description: "Explore PropelusAI pods, automation programs, and adaptive experience services.",
};

export default function Services() {
  return (
    <main className="relative flex flex-col gap-20 bg-[var(--background)] pb-24 pt-32 text-white">
      <section className="relative mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 text-center">
        <div className="absolute inset-0 -z-10 opacity-70">
          <div className="grid-blur absolute inset-0" />
          <div className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-pink-500/20 blur-[140px]" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-purple-500/20 blur-[160px]" />
        </div>
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Services</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Build adaptive products, intelligence pods, and automation fabric in weeks.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-white/70">
          Choose the pod you need today—strategy, experience, or automation—and we’ll embed a multidisciplinary team with
          the tooling, rituals, and guardrails to ship measurable outcomes.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Launch cadence", value: "14 days" },
            { label: "Signals wired", value: "48+" },
            { label: "Markets served", value: "18" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Highlights />
      <CoreServices />
      <ServicePortfolio />
    </main>
  );
}
