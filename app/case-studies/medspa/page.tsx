import Link from 'next/link';
import Navbar from '../../(homepage)/components/navbar';
import Footer from '../../(homepage)/components/footer';

export default function MedspaCaseStudy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-white via-[#005193]/5 to-[#005193]/10 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <Link 
              href="/case-studies"
              className="inline-flex items-center space-x-2 text-[#005193] hover:text-[#003d75] font-medium mb-6 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Case Studies</span>
            </Link>
            
            <h1 className="text-4xl lg:text-5xl font-bold text-[#111315] mb-6 leading-tight">
              How a Medical Spa Added <span className="text-[#005193]">£6,100/Month</span> in Package Revenue
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From slow manual responses to instant AI-powered sales across phone, WhatsApp and social media
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-3xl p-8 lg:p-12 border border-purple-100">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">💆‍♀️</div>
              <h2 className="text-3xl font-bold text-[#111315] mb-4">Overview</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#005193] mb-4">£6,100/month</div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Additional package revenue by combining AI booking, advanced sales tactics, 
                  and automated deposits across phone, WhatsApp and social media.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111315] mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#005193] rounded-full mr-4"></div>
            The Challenge
          </h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="font-semibold text-[#111315] mb-4">Multi-Channel Communication Challenges:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📱</div>
                  <p className="text-gray-700 text-sm">Instagram DMs</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">💬</div>
                  <p className="text-gray-700 text-sm">WhatsApp Messages</p>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-center">
                  <div className="text-2xl mb-2">📞</div>
                  <p className="text-gray-700 text-sm">Phone Calls</p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-red-800 mb-4">Critical Issues:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">Front-of-house was often with in-clinic clients and slow to respond</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">Manual, inconsistent follow-up on new leads, lapsed clients, and clients due back for maintenance treatments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">Deposits were taken manually via bank transfer or one-off payment links, which took time and led to drop-off and no-shows</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">Their calendar wasn't being fully utilised even though demand was there</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* What StaffMate Implemented */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111315] mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#005193] rounded-full mr-4"></div>
            What staffmate Implemented
          </h2>
          
          <div className="bg-[#005193]/5 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-[#111315] mb-6">AI Assistant with Built-in Sales Flows Across Phone, WhatsApp and DMs</h3>
            
            <div className="space-y-8">
              {/* AI Phone Receptionist */}
              <div className="bg-white rounded-xl p-6 border border-[#005193]/20">
                <h4 className="font-semibold text-[#111315] mb-4">📞 AI Phone Receptionist:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Pick up missed / after-hours calls</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Book directly into their calendar</span>
                  </li>
                </ul>
              </div>

              {/* AI WhatsApp & DM Responder */}
              <div className="bg-white rounded-xl p-6 border border-[#005193]/20">
                <h4 className="font-semibold text-[#111315] mb-4">💬 AI WhatsApp & DM Responder:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Reply instantly to new enquiries</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Ask qualifying questions (budget, goals, medical info)</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Offer and book consultation times directly</span>
                  </li>
                </ul>
              </div>

              {/* Advanced Sales Tactics */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-4">🎯 Advanced Inbound & Outbound Sales Tactics:</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-medium text-green-700 mb-3">Inbound Leads:</h5>
                    <p className="text-sm text-green-600">The AI followed a structured sales flow to uncover goals, position the right treatment and drive towards a deposit-backed booking</p>
                  </div>
                  <div>
                    <h5 className="font-medium text-green-700 mb-3">Outbound Campaigns:</h5>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                        <span className="text-green-600">Called and messaged old leads who never booked</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                        <span className="text-green-600">Reached out to lapsed customers (6–18 months)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-1.5"></div>
                        <span className="text-green-600">Contacted clients due for next treatment cycle</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Automated Deposit Collection */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-4">💳 Automated Deposit Collection:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">1</div>
                    <span className="text-blue-700">Sent deposit links (£50–£100) via SMS/WhatsApp</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">2</div>
                    <span className="text-blue-700">Only confirmed consultations once deposits were paid</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">3</div>
                    <span className="text-blue-700">Dramatically reduced their risk of no-shows</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Results */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111315] mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#005193] rounded-full mr-4"></div>
            The Results
          </h2>
          
          <div className="bg-green-50 rounded-2xl p-8 border border-green-200">
            <h3 className="text-xl font-semibold text-green-800 mb-6">After implementation, the med spa saw:</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Much faster response times - enquiries replied to in under a minute, 24/7</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">More booked consultations, with the calendar noticeably fuller week-to-week</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">AI consistently turning old leads and lapsed clients into fresh consultations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Re-booking existing clients for their next treatment cycle</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#005193] text-white rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-6 text-center">Monthly Performance Boost</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">22</div>
                    <p className="text-sm opacity-90">Additional consultations from AI follow-up and outbound activity</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">9</div>
                    <p className="text-sm opacity-90">Extra treatment packages sold</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">£680</div>
                    <p className="text-sm opacity-90">Average package value</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm opacity-90 mb-2">Monthly Calculation:</div>
                    <div className="text-lg mb-2">9 packages × £680 = £6,120</div>
                    <div className="text-2xl font-bold">£6.1k extra package revenue every month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Feedback */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#111315] mb-8 flex items-center">
            <div className="w-2 h-8 bg-[#005193] rounded-full mr-4"></div>
            Client Feedback
          </h2>
          
          <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl p-8 lg:p-12 border border-purple-200">
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">💬</div>
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
            </div>
            
            <blockquote className="text-xl text-gray-800 leading-relaxed text-center italic">
              "Before this, we were constantly behind on DMs and chasing people for deposits. Now the AI 
              answers, pre-sells, takes deposits and follows up with old clients. It fills the calendar 
              while we're in treatment."
            </blockquote>
            
            <div className="mt-6 text-center">
              <div className="font-semibold text-[#111315]">— Medical Spa Owner</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-[#111315] rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Med Spa Like This Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop losing leads across multiple channels. Let's discuss how our AI solutions can deliver 
              similar results for your beauty and wellness business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="https://calendly.com/hakan-staffmate/ai-consultation"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#005193] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#003d75] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Book Your Free Consultation
              </Link>
              <Link 
                href="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#111315] transition-all duration-300"
              >
                View Our Solutions
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
