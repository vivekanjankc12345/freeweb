"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Clock, Headphones, Package, TrendingUp } from "lucide-react";

// Sample service data structure
const serviceData = [
  {
    id: "web-mobile",
    label: "Web & Mobile Development",
    services: [
      {
        title: "AI-Based Website Building & Hosting",
        desc: "Transform your online presence with our AI-powered website development and premium hosting solution. We create responsive, SEO-optimized websites with integrated AI chatbots, personalization features, and lightning-fast performance on enterprise-grade servers.",
        originalPrice: "$567,600",
        price: "$169,000",
        discount: "Save NaN%",
        timeline: "2-4 weeks development + ongoing hosting",
        features: [
          "AI-Powered Design & Content Generation",
          "Mobile-First Responsive Design",
          "24/7 Uptime Monitoring",
          "CDN Integration",
          "Enterprise Server Hosting",
          "Advanced SEO Optimization",
          "SSL Security Certificate",
          "Performance Analytics"
        ],
        support: [
          "24/7 priority support channel",
          "Dedicated account manager",
          "Weekly progress updates",
          "Direct access to technical team",
          "30-day post-launch support",
          "Training and onboarding sessions"
        ],
        receive: [
          "Custom AI-Powered Website",
          "Domain & SSL Setup",
          "Hosting Configuration",
          "Performance Optimization",
          "SEO Foundation",
          "Analytics Integration"
        ],
        tools: "AI Website Builder Platform, Premium Hosting Infrastructure, SSL Certificates, CDN Services, Analytics Tools",
        upscale: "Scale to e-commerce functionality, multi-language support, advanced AI features, custom integrations, enterprise hosting solutions, and white-label options for agencies."
      }
    ]
  },
  {
    id: "ai-automation",
    label: "AI & Automation",
    services: [
      {
        title: "Intelligent Process Automation",
        desc: "Streamline your business operations with cutting-edge AI automation solutions that reduce costs and improve efficiency.",
        price: "$89,000",
        timeline: "3-6 weeks implementation",
        features: [
          "Workflow Automation",
          "AI-Powered Decision Making",
          "Integration with Existing Systems",
          "Real-time Monitoring Dashboard"
        ],
        support: [
          "Dedicated automation specialist",
          "Monthly optimization reviews",
          "Priority bug fixes"
        ],
        receive: [
          "Custom Automation Pipeline",
          "Training Documentation",
          "API Access",
          "Performance Reports"
        ]
      }
    ]
  }
];

export default function ServicePortfolio() {
  const [active, setActive] = useState("web-mobile");
  const activeTab = serviceData.find((t) => t.id === active);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* HERO SECTION */}
      <div className="text-center max-w-4xl mx-auto pt-20 pb-12 px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent"
        >
          AI-Powered Service Portfolio
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-600 text-lg"
        >
          Discover our comprehensive range of AI-driven services designed to
          transform your operations and accelerate growth.
        </motion.p>
      </div>

      {/* TABS */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
        {serviceData.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
              active === tab.id
                ? "bg-pink-600 text-white shadow-lg shadow-pink-300 scale-105"
                : "bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:text-pink-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* SERVICE CARDS */}
      <div className="max-w-7xl mx-auto px-4 pb-20">
        {activeTab?.services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden mb-8 border border-gray-100"
          >
            <div className="grid lg:grid-cols-3 gap-0">
              {/* LEFT COLUMN - Main Content */}
              <div className="lg:col-span-2 p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-black mb-4">
                  {service.title}
                </h2>
                
                <p className="text-gray-600 leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Key Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <Check className="text-pink-600" size={24} />
                    Key Features & Capabilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features?.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="text-pink-600 flex-shrink-0 mt-1" size={16} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Process Details */}
                {service.tools && (
                  <div className="mb-8 bg-gray-50 p-6 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                      <Package size={20} className="text-pink-600" />
                      Software & Tools Required
                    </h4>
                    <p className="text-gray-700 text-sm">{service.tools}</p>
                  </div>
                )}

                {/* Future Growth */}
                {service.upscale && (
                  <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-200">
                    <h4 className="font-bold text-black mb-3 flex items-center gap-2">
                      <TrendingUp size={20} className="text-pink-600" />
                      Future Growth & Upscale Solutions
                    </h4>
                    <p className="text-gray-700 text-sm">{service.upscale}</p>
                  </div>
                )}
              </div>

              {/* RIGHT COLUMN - Pricing & Support */}
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 lg:p-10 border-l border-gray-200">
                {/* Pricing */}
                {service.price && (
                  <div className="mb-8">
                    {service.originalPrice && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm text-gray-500">Industry Standard:</span>
                        <span className="text-sm line-through text-gray-400">
                          {service.originalPrice}
                        </span>
                      </div>
                    )}
                    <div className="flex items-end gap-2 mb-2">
                      <span className="text-5xl font-bold text-black">{service.price}</span>
                    </div>
                    {service.discount && (
                      <div className="inline-block bg-pink-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Best Value
                      </div>
                    )}
                  </div>
                )}

                {/* Timeline */}
                {service.timeline && (
                  <div className="mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-start gap-3">
                      <Clock className="text-pink-600 flex-shrink-0 mt-1" size={20} />
                      <div>
                        <h4 className="font-bold text-black mb-1">Timeline:</h4>
                        <p className="text-gray-700 text-sm">{service.timeline}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Dedicated Support */}
                {service.support && (
                  <div className="mb-8">
                    <div className="flex items-center gap-2 mb-4 text-black">
                      <Headphones className="text-pink-600" size={20} />
                      <h4 className="font-bold">Dedicated Support Included</h4>
                    </div>
                    <ul className="space-y-2">
                      {service.support.map((item, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-pink-600 font-bold">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* What You Receive */}
                {service.receive && (
                  <div className="bg-white p-6 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-black mb-4">What You Receive:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.receive.map((item, i) => (
                        <span
                          key={i}
                          className="bg-pink-100 text-pink-700 px-3 py-1 rounded-lg text-xs font-medium border border-pink-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="mt-8 space-y-3">
                  <button className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-pink-300 hover:shadow-xl">
                    Get Detailed Quote
                  </button>
                  <button className="w-full bg-white hover:bg-gray-50 text-black font-semibold py-4 rounded-xl border-2 border-gray-300 transition-all">
                    Schedule Consultation
                  </button>
                  <button className="w-full text-pink-600 hover:text-pink-700 font-semibold py-2 text-sm transition-all">
                    Download Service Brochure →
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}