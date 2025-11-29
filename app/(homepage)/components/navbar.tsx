'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/20 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img 
                  src="/staffmate-logo.png" 
                  alt="Staffmate Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h1 className="text-xl lg:text-2xl font-bold text-[#111315]">
                staffmate<span className="text-[#005193]">.io</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/case-studies" 
              className="text-[#111315] hover:text-[#005193] transition-colors font-medium relative group"
            >
              Case Studies
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005193] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/solutions" 
              className="text-[#111315] hover:text-[#005193] transition-colors font-medium relative group"
            >
              Solutions
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005193] transition-all group-hover:w-full"></span>
            </Link>
            <Link 
              href="/about" 
              className="text-[#111315] hover:text-[#005193] transition-colors font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#005193] transition-all group-hover:w-full"></span>
            </Link>
            
            {/* CTA Button */}
            <Link 
                href="https://calendly.com/hakan-staffmate/ai-consultation" 
                target="_blank" 
                rel="noopener noreferrer"
            >
              <button className="bg-[#005193] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#003d75] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 cursor-pointer">
                Book a demo
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#111315] hover:text-[#005193] transition-colors p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-gray-200/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/solutions"
                className="block px-3 py-2 text-[#111315] hover:text-[#005193] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-[#111315] hover:text-[#005193] font-medium transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <div className="px-3 pt-2">
                <Link 
                    href="https://calendly.com/hakan-staffmate/ai-consultation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                  <button className="w-full bg-[#005193] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#003d75] transition-all duration-300 cursor-pointer">
                    Book a demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}