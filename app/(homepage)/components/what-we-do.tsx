import Link from 'next/link';

export default function WhatWeDo() {
  const mainService = {
    title: "AI Receptionist",
    subtitle: "Your Always-On Virtual Team Member",
    description: "Our flagship AI Receptionist handles calls with natural, human-like conversation. Built on Twilio voice infrastructure and ElevenLabs voice AI, it books appointments, answers queries, and integrates seamlessly with your existing CRM systems.",
    features: [
      "Natural conversation that mirrors a professional receptionist",
      "Handles inbound and outbound calls seamlessly",
      "Books, reschedules, and cancels appointments directly into CRMs",
      "Answers FAQs, provides directions, and collects intake forms",
      "Enterprise-grade integrations with Open API CRMs",
      "Guaranteed 10+ appointments in your first 30 days"
    ],
  };

  const additionalServices = [
    {
      icon: "📞",
      title: "Outbound Calling Agent",
      description: "Proactive customer outreach for follow-ups, confirmations, and lead generation"
    },
    {
      icon: "🌐",
      title: "Custom Website with AI Voice FAQ",
      description: "Complete website build with integrated AI voice assistant for instant customer support"
    },
    {
      icon: "🌙",
      title: "After Hours Agent",
      description: "24/7 customer service that never sleeps, ensuring no opportunity is missed"
    },
    {
      icon: "📧",
      title: "AI Email Responder",
      description: "Intelligent email management that responds to inquiries in your brand voice"
    },
    {
      icon: "💻",
      title: "AI Social Media Manager",
      description: "Automated social media responses and engagement across all platforms"
    },
    {
      icon: "💬",
      title: "Website AI Chatbot",
      description: "Smart website chat that captures leads and answers questions instantly"
    },
    {
      icon: "🎯",
      title: "AI Advertising Systems",
      description: "Intelligent ad optimisation and customer targeting for maximum ROI"
    },
    {
      icon: "📱",
      title: "SMS Follow-Up Agent",
      description: "Automated SMS follow-ups to nurture leads and boost conversions"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#111315] mb-6">
            What We <span className="text-[#005193]">Build For You</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From AI receptionists to complete automation suites, we deliver bespoke solutions 
            that work like real team members, perfectly aligned with your brand and business needs.
          </p>
        </div>

        {/* Main Service - AI Receptionist */}
        <div className="mb-20">
          <div className="bg-linear-to-r from-[#005193]/5 to-[#005193]/10 rounded-3xl p-8 lg:p-12 border border-[#005193]/10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#005193] text-white rounded-full text-sm font-medium">
                  🏆 Flagship Product
                </div>
                
                <div>
                  <h3 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-4">
                    {mainService.title}
                  </h3>
                  <p className="text-xl text-[#005193] font-semibold mb-4">
                    {mainService.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {mainService.description}
                  </p>
                </div>

                {/* Key Features */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-[#111315]">Key Features:</h4>
                  <div className="space-y-2">
                    {mainService.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#005193] rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column - Visual */}
              <div className="relative">
                {/* AI Workflow Visualization */}
                <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                  {/* Header */}
                  <div className="text-center mb-6">
                    <h4 className="font-bold text-[#111315] mb-2">AI Integration</h4>
                    <p className="text-xs text-gray-500">Real-time automation overview</p>
                  </div>

                  {/* Integration Flow */}
                  <div className="space-y-4">
                    {/* Customer Sources */}
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-gray-600">Customer Touchpoints</span>
                        <span className="text-xs text-green-600">Active</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <div className="text-center p-2 bg-white rounded border">
                          <div className="text-sm">📞</div>
                          <div className="text-xs text-gray-600">Calls</div>
                        </div>
                        <div className="text-center p-2 bg-white rounded border">
                          <div className="text-sm">🌐</div>
                          <div className="text-xs text-gray-600">Website</div>
                        </div>
                        <div className="text-center p-2 bg-white rounded border">
                          <div className="text-sm">📧</div>
                          <div className="text-xs text-gray-600">Email</div>
                        </div>
                      </div>
                    </div>

                    {/* AI Processing Arrow */}
                    <div className="flex justify-center">
                      <div className="w-8 h-8 bg-[#005193] rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                      </div>
                    </div>

                    {/* AI Processing */}
                    <div className="bg-[#005193]/10 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-[#005193]">AI Processing</span>
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-[#005193] rounded-full animate-pulse"></div>
                          <div className="w-2 h-2 bg-[#005193] rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                          <div className="w-2 h-2 bg-[#005193] rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">
                        Natural language processing, intent recognition, CRM lookup, response generation
                      </div>
                    </div>

                    {/* Output Actions */}
                    <div className="bg-green-50 rounded-lg p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-green-700">Automated Actions</span>
                        <span className="text-xs text-green-600">Executing</span>
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">Book appointment</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">Update CRM records</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">Send confirmations</span>
                        </div>
                        <div className="flex items-center space-x-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-gray-600">Schedule follow-ups</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Integration Badges */}
                <div className="absolute -top-3 -left-3 bg-white rounded-lg shadow-lg p-2 border border-gray-100">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">Twilio</span>
                  </div>
                </div>

                <div className="absolute -top-3 -right-3 bg-white rounded-lg shadow-lg p-2 border border-gray-100">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">ElevenLabs</span>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-3 bg-white rounded-lg shadow-lg p-2 border border-gray-100">
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-700">CRM API</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Services */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-4">
              Complete AI Automation <span className="text-[#005193]">Suite</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our flagship AI Receptionist, we offer a comprehensive range of AI solutions 
              to automate every aspect of your customer interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-lg hover:border-[#005193]/20 transition-all duration-300 group"
              >
                <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="font-bold text-[#111315] mb-3 group-hover:text-[#005193] transition-colors">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-[#111315] rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI automation suite can eliminate labor shortages, 
              reduce costs, and deliver unmatched ROI for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://calendly.com/hakan-staffmate/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#005193] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003d75] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center cursor-pointer"
              >
                Book Your Free Consultation
              </Link>
              <Link 
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#111315] transition-all duration-300 text-center"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
