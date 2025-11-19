import Contact from "@/components/Contact.jsx";
import Testimonials from "@/components/Testimonials.jsx";

export const metadata = {
  title: "Contact | PropelusAI",
  description: "Book a PropelusAI pod, request a strategy lab, or reach our global studios.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-24 bg-[var(--background)] pb-24 pt-32 text-white">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-white/60">Let&rsquo;s collaborate</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Tell us the signal you&rsquo;re chasing—let&rsquo;s choreograph the launch together.
        </h1>
        <p className="mx-auto max-w-3xl text-lg text-white/70">
          Whether you need an embedded strategy pod, an automation layer, or an adaptive experience relaunch, our studios
          in New York, Dubai, London, and Mumbai have a slot ready.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Average NPS", value: "9.6 / 10" },
            { label: "Active pods", value: "12" },
            { label: "Support coverage", value: "24/7" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className="text-xs uppercase tracking-[0.4em] text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <Contact />
      <Testimonials />
    </main>
  );
}
