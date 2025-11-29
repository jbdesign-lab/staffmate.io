import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#111315] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <img 
                  src="/staffmate-logo.png" 
                  alt="Staffmate Logo"
                  className="w-8 h-8 object-contain"
                />
              </div>
              <span className="text-xl font-bold">staffmate.io</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered virtual employees that transform your business operations with 24/7 availability and human-like interactions.
            </p>
          </div>

          {/* Case Studies */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Case Studies</h4>
            <div className="space-y-2">
              <Link href="/case-studies/dentist" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Dentist
              </Link>
              <Link href="/case-studies/contractors" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Contractor
              </Link>
              <Link href="/case-studies/medspa" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Medical Spa
              </Link>
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <div className="space-y-2">
              <Link href="/about" className="block text-gray-400 text-sm hover:text-white transition-colors">
                About Us
              </Link>
              <Link href="/case-studies" className="block text-gray-400 text-sm hover:text-white transition-colors">
                Case Studies
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Get Started</h4>
            <div className="space-y-3">
              <Link 
                href="https://calendly.com/hakan-staffmate/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#005193] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#003d75] transition-colors"
              >
                Book Consultation
              </Link>
              <p className="text-gray-400 text-sm">
                Ready to transform your business? Get started with a free consultation.
              </p>
              
              {/* ElevenLabs Grant Banner */}
              <div className="pt-4">
                <a href="https://elevenlabs.io/startup-grants" target="_blank" rel="noopener noreferrer">
                  <div className="bg-white rounded-lg p-3 inline-block hover:shadow-lg transition-all duration-300">
                    <img 
                      src="https://eleven-public-cdn.elevenlabs.io/payloadcms/pwsc4vchsqt-ElevenLabsGrants.webp" 
                      alt="ElevenLabs" 
                      className="w-[180px]"
                    />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} staffmate.io. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
