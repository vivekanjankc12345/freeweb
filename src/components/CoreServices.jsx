"use client";
import { useState, useRef } from "react";
import { Check, Monitor, Server, Code, Lightbulb, ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const services = [
  {
    icon: Monitor,
    title: "Digital Marketing",
    description: "Comprehensive marketing strategies to boost your online presence and drive conversions.",
    features: [
      "SEO Optimization",
      "Social Media Marketing",
      "Content Strategy",
      "PPC Campaigns"
    ]
  },
  {
    icon: Server,
    title: "IT Solutions",
    description: "Cutting-edge technology solutions to streamline your business operations.",
    features: [
      "Cloud Infrastructure",
      "Cybersecurity",
      "System Integration",
      "Technical Support"
    ]
  },
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and applications built for performance and user experience.",
    features: [
      "Responsive Design",
      "E-commerce Solutions",
      "Mobile Apps",
      "API Development"
    ]
  },
  {
    icon: Lightbulb,
    title: "Business Consulting",
    description: "Strategic guidance to help you make informed decisions and grow your business.",
    features: [
      "Digital Transformation",
      "Process Optimization",
      "Growth Strategy",
      "Market Analysis"
    ]
  },
  {
    icon: Monitor,
    title: "Brand Strategy",
    description: "Build a powerful brand identity that resonates with your target audience.",
    features: [
      "Brand Identity Design",
      "Market Positioning",
      "Visual Guidelines",
      "Brand Messaging"
    ]
  },
  {
    icon: Server,
    title: "Data Analytics",
    description: "Transform your data into actionable insights for better decision making.",
    features: [
      "Business Intelligence",
      "Predictive Analytics",
      "Custom Reports",
      "Data Visualization"
    ]
  }
];

export default function CoreServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const router = useRouter();

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 4
  };

  const scroll = (direction) => {
    const container = sliderRef.current;
    if (!container) return;

    const scrollAmount = container.offsetWidth / itemsPerView.desktop;
    const newScroll = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const container = sliderRef.current;
    if (!container) return;
    
    const index = Math.round(container.scrollLeft / (container.offsetWidth / itemsPerView.desktop));
    setCurrentIndex(index);
  };

  return (
    <div className="w-full py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            We provide comprehensive marketing and IT solutions tailored for creators,
            entrepreneurs, and growing businesses worldwide.
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white hover:bg-pink-600 text-black hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hidden md:flex"
            aria-label="Previous"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white hover:bg-pink-600 text-black hover:text-white w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hidden md:flex"
            aria-label="Next"
          >
            <ChevronRight size={24} />
          </button>

          {/* Service Cards Slider */}
          <div
            ref={sliderRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory hide-scrollbar pb-4"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
                >
                  <div className="bg-white rounded-2xl p-6 md:p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center mb-5">
                      <Icon className="text-pink-600" size={28} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-black mb-3">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-5 leading-relaxed text-sm flex-grow">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <ul className="space-y-2.5 mb-5">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="text-pink-600 flex-shrink-0 mt-0.5" size={16} />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Button */}
                    <button className="w-full py-3 px-6 border-2 border-pink-600 text-pink-600 font-semibold rounded-xl hover:bg-pink-600 hover:text-white transition-all duration-300 mt-auto">
                      Learn More
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: Math.ceil(services.length / itemsPerView.desktop) }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  const container = sliderRef.current;
                  if (container) {
                    const scrollAmount = (container.offsetWidth / itemsPerView.desktop) * index * itemsPerView.desktop;
                    container.scrollTo({
                      left: scrollAmount,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  Math.floor(currentIndex / itemsPerView.desktop) === index
                    ? 'bg-pink-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Services Button */}
        <div className="text-center">
          <button
          onClick={() => router.push("/services")}
           className="bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 px-10 rounded-xl shadow-lg shadow-pink-300 hover:shadow-xl transition-all duration-300">
            View All Services
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}