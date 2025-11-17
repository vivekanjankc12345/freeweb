"useclient";
import React from 'react';
import { Award, Headphones, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Years of experience helping businesses across America, Europe, Middle East, and India."
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "Personal attention and ongoing support to ensure your success."
    },
    {
      icon: TrendingUp,
      title: "Measurable Results",
      description: "Data-driven strategies that deliver tangible business growth."
    }
  ];

  return (
    <div className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Why Choose <span className="text-pink-500">PropelusAI?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              We understand the unique challenges faced by creators, coaches, solopreneurs, and growing companies. Our mission is to provide trustworthy, results-driven solutions that help you scale with confidence.
            </p>

            {/* Features List */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div 
                    key={index}
                    className="group flex items-start gap-4 p-5 rounded-2xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-pink-500/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black mb-2 group-hover:text-pink-500 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <button className="group bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-500 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop" 
                alt="Professional team meeting"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-6 rounded-2xl shadow-2xl backdrop-blur-sm">
                <div className="text-4xl font-black mb-1">500+</div>
                <div className="text-sm font-semibold opacity-90">Successful Projects</div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-6 right-6 w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                <Award className="w-10 h-10 text-white" />
              </div>
            </div>

            {/* Background Decoration */}
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-pink-500/10 rounded-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-black/5 rounded-3xl -z-10"></div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "10+", label: "Years Experience" },
            { number: "500+", label: "Projects Completed" },
            { number: "98%", label: "Client Satisfaction" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-pink-500 hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-4xl font-black text-black group-hover:text-pink-500 transition-colors mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;