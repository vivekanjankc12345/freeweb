import React from "react";
import Hero from "../components/Hero.jsx";
import Highlights from "../components/Highlights.jsx";
import CoreServices from "../components/CoreServices.jsx";
import Testimonials from "../components/Testimonials.jsx";
import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";

const Page = () => {
  return (
    <main className="relative flex flex-col gap-0 bg-[var(--background)]">
      <Hero />
      <Highlights />
      <CoreServices />
      <Testimonials />
      <About />
      <Contact />
    </main>
  );
};

export default Page;
