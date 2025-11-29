import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-white via-[#005193]/5 to-[#005193]/10 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00519308_1px,transparent_1px),linear-gradient(to_bottom,#00519308_1px,transparent_1px)] bg-size-[4rem_4rem]" />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#005193]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#005193]/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#005193]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}} />
        
        {/* Gradient Overlays */}
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-transparent via-white/50 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Content */}
        <div className="pt-24 pb-20 lg:pt-32 lg:pb-28 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-[#005193]/10 rounded-full">
                <span className="text-sm font-medium text-[#005193]">
                  AI-Powered Virtual Employees
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold text-[#111315] leading-tight">
                  Stay Competitive with{' '}
                  <span className="text-[#005193]">Always-On</span>{' '}
                  AI Staff
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Combat labour shortages and rising costs with AI receptionists that deliver 
                  unmatched reliability, efficiency, and ROI for your brick-and-mortar business.
                </p>
              </div>

              {/* Key Benefits */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#005193] rounded-full"></div>
                  <span className="text-[#111315] font-medium">24/7 Availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#005193] rounded-full"></div>
                  <span className="text-[#111315] font-medium">CRM Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#005193] rounded-full"></div>
                  <span className="text-[#111315] font-medium">Human-like Voice</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#005193] rounded-full"></div>
                  <span className="text-[#111315] font-medium">Appointment Booking</span>
                </div>
              </div>

              {/* Guarantee Badge */}
              <div className="bg-linear-to-r from-[#005193]/10 to-[#005193]/5 border border-[#005193]/20 rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="shrink-0">
                    <div className="w-12 h-12 bg-[#005193] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl font-bold">✓</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#111315] text-lg">Money-Back Guarantee</h3>
                    <p className="text-gray-600 mt-1">
                      Guaranteed 10+ appointments in your first 30 days or your money back!
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="https://calendly.com/hakan-staffmate/ai-consultation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#005193] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003d75] transition-colors shadow-lg text-center"
                >
                  Book a Demo
                </Link>
                <Link 
                  href="/solutions"
                  className="border-2 border-[#005193] text-[#005193] px-8 py-4 rounded-xl font-semibold hover:bg-[#005193] hover:text-white transition-colors text-center"
                >
                  Our Services
                </Link>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#111315]">95%</div>
                  <div className="text-sm text-gray-600">of all calls automated</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#111315]">300%</div>
                  <div className="text-sm text-gray-600">boost in appointments</div>
                </div>
                <div className="w-px h-12 bg-gray-200"></div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-[#111315]">57%</div>
                  <div className="text-sm text-gray-600">in lead conversion rates</div>
                </div>
              </div>
            </div>

            {/* Right Column - Visual */}
            <div className="relative lg:pl-8">
              {/* Main Visual Container */}
              <div className="relative">
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-linear-to-br from-[#005193]/10 via-transparent to-[#005193]/5 rounded-3xl"></div>
                
                {/* Phone Interface Mockup */}
                <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                  {/* Phone Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-semibold text-[#111315]">AI Receptionist Active</span>
                    </div>
                    <div className="text-sm text-gray-500">Live Call</div>
                  </div>

                  {/* Conversation Preview */}
                  <div className="space-y-4 mb-8">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="text-sm text-gray-500 mb-1">Customer</div>
                      <div className="text-[#111315]">"Hi, I'd like to book an appointment for next Tuesday"</div>
                    </div>
                    <div className="bg-[#005193]/10 rounded-xl p-4">
                      <div className="text-sm text-[#005193] mb-1">AI Receptionist</div>
                      <div className="text-[#111315]">"Of course! I can help you with that. What time works best for you on Tuesday?"</div>
                    </div>
                  </div>

                  {/* Live Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-green-50 rounded-xl">
                      <div className="text-lg font-bold text-green-600">Live</div>
                      <div className="text-sm text-gray-600">Handling Calls</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="text-lg font-bold text-[#005193]">24/7</div>
                      <div className="text-sm text-gray-600">Always Available</div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-sm font-medium text-[#111315]">Appointment Booked</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#005193] rounded-full"></div>
                    <span className="text-sm font-medium text-[#111315]">CRM Updated</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
