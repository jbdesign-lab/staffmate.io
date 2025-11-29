import Link from 'next/link';
import Navbar from '../(homepage)/components/navbar';
import Footer from '../(homepage)/components/footer';

export default function Solutions() {
  const mainService = {
    id: "ai-receptionist",
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
    icon: "🤖"
  };

  const additionalServices = [
    {
      id: "outbound-calling",
      icon: "📞",
      title: "Outbound Calling Agent",
      description: "Proactive customer outreach for follow-ups, confirmations, and lead generation with intelligent conversation flows.",
      features: [
        "Automated follow-up calls to leads and customers",
        "Appointment confirmation and reminder calls",
        "Lead qualification and nurturing campaigns",
        "Customer satisfaction surveys and feedback collection",
        "Integration with your existing sales pipeline"
      ]
    },
    {
      id: "website-chatbots",
      icon: "💬",
      title: "Website AI Chatbot",
      description: "Smart website chat that captures leads and answers questions instantly with natural language processing.",
      features: [
        "24/7 instant customer support on your website",
        "Lead capture and qualification",
        "FAQ automation with intelligent responses",
        "Seamless handoff to human agents when needed",
        "Multi-language support and customisable branding"
      ]
    },
    {
      id: "email-automation",
      icon: "📧",
      title: "AI Email Responder",
      description: "Intelligent email management that responds to inquiries in your brand voice with contextual understanding.",
      features: [
        "Automated email responses in your brand voice",
        "Context-aware replies based on email content",
        "Lead nurturing email sequences",
        "Customer support ticket automation",
        "Integration with existing email platforms"
      ]
    },
    {
      id: "custom-website",
      icon: "🌐",
      title: "Custom Website with AI Voice FAQ",
      description: "Complete website build with integrated AI voice assistant for instant customer support and engagement.",
      features: [
        "Full website design and development",
        "Integrated AI voice assistant",
        "Voice-activated FAQ system",
        "Mobile-responsive design",
        "SEO optimisation and analytics integration"
      ]
    },
    {
      id: "after-hours-agent",
      icon: "🌙",
      title: "After Hours Agent",
      description: "24/7 customer service that never sleeps, ensuring no opportunity is missed during off-hours.",
      features: [
        "Round-the-clock customer service coverage",
        "Emergency call routing and escalation",
        "After-hours appointment booking",
        "Order processing and customer inquiries",
        "Detailed activity reports and summaries"
      ]
    },
    {
      id: "social-media-manager",
      icon: "💻",
      title: "AI Social Media Manager",
      description: "Automated social media responses and engagement across all platforms with brand-consistent messaging.",
      features: [
        "Automated responses to social media messages",
        "Brand-consistent engagement across platforms",
        "Customer inquiry routing and escalation",
        "Social listening and sentiment analysis",
        "Performance analytics and reporting"
      ]
    },
    {
      id: "ai-advertising",
      icon: "🎯",
      title: "AI Advertising Systems",
      description: "Intelligent ad optimisation and customer targeting for maximum ROI with data-driven insights.",
      features: [
        "Automated ad campaign optimisation",
        "Intelligent audience targeting and segmentation",
        "Real-time bid management and budget allocation",
        "Performance tracking and ROI analysis",
        "Multi-platform advertising coordination"
      ]
    },
    {
      id: "sms-follow-up",
      icon: "📱",
      title: "SMS Follow-Up Agent",
      description: "Automated SMS follow-ups to nurture leads and boost conversions with personalised messaging.",
      features: [
        "Automated SMS lead nurturing sequences",
        "Appointment reminders and confirmations",
        "Personalised follow-up messaging",
        "Two-way SMS conversation handling",
        "Compliance with SMS marketing regulations"
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-white via-[#005193]/5 to-[#005193]/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#005193]/10 rounded-full mb-8">
              <span className="text-sm font-medium text-[#005193]">Our Solutions</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#111315] mb-6 leading-tight">
              AI Solutions <span className="text-[#005193]">Built For Your Business</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From AI receptionists to complete automation suites, we deliver bespoke solutions 
              that work like real team members, perfectly aligned with your brand and business needs.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service - AI Receptionist */}
      <section id={mainService.id} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-gray-100">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#005193] text-white rounded-full text-sm font-medium">
                  🏆 Flagship Solution
                </div>
                
                <div>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-4xl">{mainService.icon}</div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-[#111315]">
                      {mainService.title}
                    </h2>
                  </div>
                  <p className="text-xl text-[#005193] font-semibold mb-4">
                    {mainService.subtitle}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {mainService.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#111315]">Key Features:</h4>
                  <div className="grid gap-2">
                    {mainService.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#005193] rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="bg-linear-to-br from-[#005193]/10 to-[#005193]/5 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <h4 className="font-bold text-[#111315] text-lg mb-2">Ready to Get Started?</h4>
                  <p className="text-gray-600">Experience the power of AI automation</p>
                </div>
                <div className="space-y-4">
                  <Link 
                    href="https://calendly.com/hakan-staffmate/ai-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-[#005193] text-white text-center px-6 py-4 rounded-xl font-semibold hover:bg-[#003d75] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Book Your Free Consultation
                  </Link>
                  <div className="text-center text-sm text-gray-500">
                    Guaranteed 10+ appointments in your first 30 days
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-4">
              Complete AI Automation <span className="text-[#005193]">Suite</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond our flagship AI Receptionist, we offer a comprehensive range of AI solutions 
              to automate every aspect of your customer interactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                id={service.id}
                className="bg-white border border-gray-100 rounded-xl p-8 hover:shadow-xl hover:border-[#005193]/20 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#111315] group-hover:text-[#005193] transition-colors">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3">
                  <h4 className="font-semibold text-[#111315] text-sm">Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-[#005193] rounded-full mt-2 shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Link 
                    href="https://calendly.com/hakan-staffmate/ai-consultation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#005193] hover:text-[#003d75] font-medium text-sm transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI automation suite can eliminate labor shortages, 
            reduce costs, and deliver unmatched ROI for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="https://calendly.com/hakan-staffmate/ai-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#005193] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003d75] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
            >
              Book Your Free Consultation
            </Link>
            <Link 
              href="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#111315] transition-all duration-300 text-center"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
