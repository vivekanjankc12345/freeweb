import React from "react";
import Hero from "../components/Hero.jsx";
import CoreServices from "../components/CoreServices.jsx";
import Testimonials from "../components/Testimonials.jsx";
import Contact from "../components/Contact.jsx";
import About from "../components/About.jsx";

const page = () => {
  return (
    <div>
     <CoreServices />
     <Testimonials />
     <About />
     <Contact />
    </div>
  );
};

export default page;
