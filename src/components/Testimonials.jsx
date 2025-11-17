import React from 'react';

const Testimonials = () => {
  // Dynamic testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Content Creator & Coach",
      location: "New York, USA",
      image: "SJ",
      testimonial: "PropelusAI transformed my online presence completely. Their marketing strategies helped me grow my audience by 300% in just 6 months.",
      rating: 5
    },
    {
      id: 2,
      name: "Ahmed Al-Rashid",
      role: "Tech Entrepreneur",
      location: "Dubai, UAE",
      image: "AA",
      testimonial: "The IT solutions provided by PropelusAI are exceptional. They helped us scale our infrastructure seamlessly as we expanded across the Middle East.",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Thompson",
      role: "Small Business Owner",
      location: "London, UK",
      image: "ET",
      testimonial: "Working with PropelusAI was a game-changer for our small company. Their consulting helped us streamline operations and increase revenue by 150%.",
      rating: 5
    },
    {
      id: 4,
      name: "Raj Patel",
      role: "Digital Marketing Agency",
      location: "Mumbai, India",
      image: "RP",
      testimonial: "PropelusAI's expertise in both marketing and technology is unmatched. They helped us deliver better results for our clients and grow our agency.",
      rating: 5
    }
  ];

  const StarRating = ({ rating }) => (
    <div className="flex gap-1">
      {[...Array(rating)].map((_, i) => (
        <svg key={i} className="w-5 h-5 fill-current text-pink-500" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Trusted by creators, entrepreneurs, and businesses worldwide
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              {/* Profile Section */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {testimonial.image}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-pink-500 font-semibold text-sm mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-gray-500 text-sm">
                    {testimonial.location}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.testimonial}"
              </p>

              {/* Star Rating */}
              <StarRating rating={testimonial.rating} />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-500 transition-colors duration-300 shadow-lg hover:shadow-xl">
            See More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;