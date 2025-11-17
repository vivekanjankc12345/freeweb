"use client";
import React, { useState } from 'react';
import { Calendar, Target, Zap, Phone, Mail, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const Contact = () => {
  const [calendlyLink, setCalendlyLink] = useState('');
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });

  const features = [
    {
      icon: Calendar,
      title: "Free Consultation",
      description: "30-minute strategy session",
      gradient: "from-pink-400 to-pink-600"
    },
    {
      icon: Target,
      title: "Custom Strategy",
      description: "Tailored solutions for your needs",
      gradient: "from-purple-400 to-pink-600"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Quick turnaround times",
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  const benefits = [
    "Detailed business analysis",
    "AI integration opportunities",
    "Custom roadmap creation",
    "ROI projections & metrics"
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-black"></div>
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Header Section with Animation */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/30 rounded-full px-6 py-2 mb-6">
            <Sparkles className="w-5 h-5 text-pink-400 animate-pulse" />
            <span className="text-pink-300 font-semibold">Limited Slots Available</span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">Transform</span>
            <br />Your Business?
          </h2>
          <p className="text-gray-300 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Schedule a free consultation with our experts and discover how AI can propel your
            <span className="text-pink-400 font-semibold"> business to new heights</span>
          </p>
        </div>

        {/* Features Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-pink-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className={`relative w-20 h-20 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="relative text-2xl font-bold text-white mb-3 group-hover:text-pink-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="relative text-gray-400 text-base group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Main CTA Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left: Booking Form */}
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 md:p-10 border border-white/10 hover:border-pink-500/30 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Book Your Meeting</h3>
                <p className="text-gray-400 text-sm">Choose your preferred time</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:bg-white/10 transition-all"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:bg-white/10 transition-all"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none focus:bg-white/10 transition-all"
              />
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <Calendar className="w-5 h-5 text-pink-400" />
                <span className="text-white font-semibold">Calendly Integration</span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Insert your Calendly embed code below
              </p>
              <input
                type="text"
                placeholder="Paste your Calendly link..."
                value={calendlyLink}
                onChange={(e) => setCalendlyLink(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-pink-500 focus:outline-none text-sm transition-all"
              />
            </div>

            <button className="group w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-5 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300 flex items-center justify-center gap-3 hover:scale-105">
              Schedule Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right: Benefits & Contact Options */}
          <div className="space-y-6">
            {/* Benefits Card */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-pink-400" />
                What You'll Get
              </h4>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group hover:translate-x-2 transition-transform">
                    <CheckCircle className="w-6 h-6 text-pink-400 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="group bg-white text-black px-6 py-4 rounded-2xl font-bold hover:bg-pink-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-xl">
                <Phone className="w-5 h-5 group-hover:animate-pulse" />
                Call Us Now
              </button>
              <button className="group bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-white px-6 py-4 rounded-2xl font-bold border border-pink-500/30 hover:border-pink-500 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105">
                <Mail className="w-5 h-5" />
                Email Us
              </button>
            </div>

            {/* Stats/Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 rounded-2xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-black text-white mb-1">500+</div>
                <div className="text-gray-400 text-xs">Projects</div>
              </div>
              <div className="bg-gradient-to-br from-purple-500/20 to-transparent border border-purple-500/30 rounded-2xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-black text-white mb-1">10+</div>
                <div className="text-gray-400 text-xs">Years Exp</div>
              </div>
              <div className="bg-gradient-to-br from-pink-500/20 to-transparent border border-pink-500/30 rounded-2xl p-4 text-center hover:scale-105 transition-transform">
                <div className="text-3xl font-black text-white mb-1">24/7</div>
                <div className="text-gray-400 text-xs">Support</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            🌍 Available for clients in <span className="text-pink-400 font-semibold">America, Europe, Middle East, and India</span>
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </div>
  );
};

export default Contact;