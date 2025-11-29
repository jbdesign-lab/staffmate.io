import Link from 'next/link';
import Navbar from '../../(homepage)/components/navbar';
import Footer from '../../(homepage)/components/footer';

export default function ContractorsCaseStudy() {
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
              How Contractors Captured <span className="text-[#005193]">£5,100/Month</span> in Lost Revenue
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From missing 25% of calls to answering every enquiry - even when engineers are on site
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12 border border-orange-100">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🔧</div>
              <h2 className="text-3xl font-bold text-[#111315] mb-4">Overview</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#005193] mb-4">£5,100/month</div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Additional booked jobs by answering every enquiry, even when engineers were on site, 
                  and stopping leads leaking to competitors.
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
          
          <div className="bg-gray-50 rounded-2xl p-8 mb-6">
            <h3 className="text-xl font-semibold text-[#111315] mb-4">Office phone often rang out when:</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">Engineers were on jobs</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                <span className="text-gray-700">The office manager was already on another call</span>
              </li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">20-25%</div>
              <p className="text-gray-700 text-sm">of leads went to competitors purely because no one picked up in time</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">Dead Zones</div>
              <p className="text-gray-700 text-sm">Evenings and weekends were effectively "dead zones" for booking</p>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-2xl font-bold text-red-600 mb-2">Hiring</div>
              <p className="text-gray-700 text-sm">Seriously considering hiring a full-time receptionist just to keep up</p>
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
            <h3 className="text-xl font-semibold text-[#111315] mb-6">24/7 AI Phone Agent to Answer, Qualify and Schedule Every Enquiry</h3>
            
            <div className="space-y-8">
              {/* Answered All Calls */}
              <div>
                <h4 className="font-semibold text-[#111315] mb-4">Answered all calls when:</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-[#005193]/20">
                    <div className="text-center">
                      <div className="text-2xl mb-2">📞</div>
                      <p className="text-sm text-gray-700">The office line was busy</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#005193]/20">
                    <div className="text-center">
                      <div className="text-2xl mb-2">👷‍♂️</div>
                      <p className="text-sm text-gray-700">No one was available</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-[#005193]/20">
                    <div className="text-center">
                      <div className="text-2xl mb-2">🌙</div>
                      <p className="text-sm text-gray-700">Outside of working hours</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Triage System */}
              <div>
                <h4 className="font-semibold text-[#111315] mb-4">Intelligent Triage of Every Call Based On:</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-[#005193]/20">
                    <div className="w-3 h-3 bg-[#005193] rounded-full"></div>
                    <span className="text-gray-700"><strong>Postcode</strong> (to check if the job was in their service area)</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-[#005193]/20">
                    <div className="w-3 h-3 bg-[#005193] rounded-full"></div>
                    <span className="text-gray-700"><strong>Job type</strong> (breakdown, annual service, new install quote)</span>
                  </div>
                  <div className="flex items-center space-x-4 bg-white rounded-xl p-4 border border-[#005193]/20">
                    <div className="w-3 h-3 bg-[#005193] rounded-full"></div>
                    <span className="text-gray-700"><strong>Urgency</strong> (e.g. no heating / no hot water flagged as high priority)</span>
                  </div>
                </div>
              </div>

              {/* Process Flow */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h4 className="font-semibold text-green-800 mb-4">For Non-Emergency Jobs:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-green-700">The AI booked site visits directly into their scheduling tool</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                      <span className="text-green-700">Sent SMS confirmation with date, time window and basic terms</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h4 className="font-semibold text-red-800 mb-4">For Emergency Breakdowns:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-red-700">The AI collected key information (fault, postcode, system type)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2"></div>
                      <span className="text-red-700">Automatically escalated to the on-call engineer with all details</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-[#005193]/10 rounded-xl border border-[#005193]/20">
              <p className="text-center text-[#111315] font-medium">
                This meant they could avoid hiring a dedicated receptionist while still giving customers 
                the experience of a fully staffed office.
              </p>
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
            <h3 className="text-xl font-semibold text-green-800 mb-6">Once live, they saw:</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Dramatic reduction in lost calls - evening and weekend enquiries were now converted into booked jobs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-gray-700">Customers commented that it was "easy to get through to someone" compared with other local providers</span>
                  </li>
                </ul>
              </div>

              <div className="bg-[#005193] text-white rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-6 text-center">Monthly Performance Boost</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">32</div>
                    <p className="text-sm opacity-90">Additional booked jobs per month</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">£160</div>
                    <p className="text-sm opacity-90">Conservative blended profit per job</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">£5,120</div>
                    <p className="text-sm opacity-90">Extra monthly profit</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-xl text-center">
                  <div className="text-2xl font-bold mb-2">£5.1k</div>
                  <p className="text-sm">in extra profit every month from booked work</p>
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
          
          <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border border-blue-200">
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
              "We were losing work every time the phone rang while we were on a job. We were about to hire 
              a receptionist just to help. Instead, the AI now answers every call, qualifies the job, and 
              books it in. We're busier, and nothing gets missed."
            </blockquote>
            
            <div className="mt-6 text-center">
              <div className="font-semibold text-[#111315]">— Contracting Company Owner</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-[#111315] rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Capture Every Lead Like This Contractor?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop losing leads to competitors. Let's discuss how our AI solutions can deliver 
              similar results for your business.
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
