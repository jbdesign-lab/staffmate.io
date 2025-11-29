'use client';

import { useRef } from 'react';

const industries = [
  { icon: '🏥', name: 'Clinics', description: 'Medical practices & healthcare' },
  { icon: '✂️', name: 'Salons', description: 'Beauty & wellness services' },
  { icon: '🦷', name: 'Dental', description: 'Dental practices & orthodontics' },
  { icon: '🍽️', name: 'Restaurants', description: 'Dining & food services' },
  { icon: '🏗️', name: 'Builders', description: 'Construction & contractors' },
  { icon: '🏠', name: 'Real Estate', description: 'Property & estate agents' },
  { icon: '⚖️', name: 'Legal', description: 'Law firms & legal services' },
  { icon: '🚗', name: 'Automotive', description: 'Car services & dealerships' },
  { icon: '🏋️', name: 'Fitness', description: 'Gyms & personal training' },
  { icon: '📚', name: 'Education', description: 'Schools & tutoring services' },
  { icon: '💼', name: 'Consulting', description: 'Business & professional services' },
  { icon: '🎨', name: 'Creative', description: 'Design & creative agencies' }
];

export default function Industries() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gray-600 mb-4">Trusted by businesses across multiple industries</p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white border border-gray-200 rounded-full p-2 shadow-lg transition-all duration-200 hover:shadow-xl"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide px-8"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {industries.map((industry, index) => (
              <div
                key={`${industry.name}-${index}`}
                className="shrink-0 w-48 bg-gray-50 rounded-lg p-4 border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
              >
                {/* Icon */}
                <div className="text-2xl mb-2">
                  {industry.icon}
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="font-medium text-[#111315] text-sm mb-1">
                    {industry.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}