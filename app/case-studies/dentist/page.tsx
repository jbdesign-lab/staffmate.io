import Link from 'next/link';
import Navbar from '../../(homepage)/components/navbar';
import Footer from '../../(homepage)/components/footer';

export default function DentistCaseStudy() {
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
              How a Dental Practice Added <span className="text-[#005193]">£4,700/Month</span> in Revenue
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              From missing 34% of calls to capturing every enquiry and reactivating lapsed patients
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Overview */}
        <section className="mb-16">
          <div className="bg-linear-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 lg:p-12 border border-blue-100">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">🦷</div>
              <h2 className="text-3xl font-bold text-[#111315] mb-4">Overview</h2>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#005193] mb-4">£4,700/month</div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Additional treatment revenue by stopping missed calls, reactivating lapsed patients, 
                  and fully automating booking changes through their dental systems.
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
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">450</div>
                <p className="text-gray-700 text-sm">Inbound calls per month</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-red-600 mb-2">34%</div>
                <p className="text-gray-700 text-sm">Of calls were being missed at peak times</p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-red-200 rounded-xl p-6">
              <h3 className="font-semibold text-red-800 mb-4">Critical Issues:</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">Reception regularly had multiple calls coming in at the same time - they could only answer one, the rest rang out or went to voicemail</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">No one available to consistently call overdue or lapsed patients</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
                  <span className="text-gray-700">The practice manager knew they were losing patients and revenue but didn't have the staff capacity to fix it</span>
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
            <h3 className="text-xl font-semibold text-[#111315] mb-6">AI Receptionist Fully Integrated into PMS, CRM and Dental Systems</h3>
            
            <div className="space-y-8">
              {/* Call Handling */}
              <div className="bg-white rounded-xl p-6 border border-[#005193]/20">
                <h4 className="font-semibold text-[#111315] mb-4">Advanced Call Management:</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#005193] rounded-full"></div>
                    <span className="text-gray-700">Answered all calls when the front desk was busy</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-3 h-3 bg-[#005193] rounded-full"></div>
                    <span className="text-gray-700">Could handle up to 50 calls simultaneously</span>
                  </div>
                </div>
              </div>

              {/* PMS Integration */}
              <div className="bg-white rounded-xl p-6 border border-[#005193]/20">
                <h4 className="font-semibold text-[#111315] mb-4">Live PMS/CRM Integration:</h4>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Book new appointments and consultations</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Cancel and reschedule existing appointments</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#005193] rounded-full mt-2"></div>
                    <span className="text-gray-700">Allocate patients to their preferred clinician</span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <h4 className="font-semibold text-green-800 mb-4">Automated Workflow Benefits:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-green-700">No manual re-typing or admin required</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2"></div>
                    <span className="text-green-700">Reception could always see an up-to-date diary</span>
                  </li>
                </ul>
              </div>

              {/* Recall Workflow */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <h4 className="font-semibold text-blue-800 mb-4">Patient Recall Workflow:</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">1</div>
                    <span className="text-blue-700">Practice exported lists of overdue check-ups / hygiene visits</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold text-sm">2</div>
                    <span className="text-blue-700">The AI called or texted patients with clear offers of convenient times</span>
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
            <h3 className="text-xl font-semibold text-green-800 mb-6">Within the first month of going live:</h3>
            
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border border-green-200">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">0%</div>
                    <p className="text-gray-700 text-sm">Missed calls (down from 34%)</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <p className="text-gray-700 text-sm">Call answer rate achieved</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#005193] text-white rounded-2xl p-8">
                <h4 className="text-xl font-bold mb-6 text-center">Monthly Performance Boost</h4>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">30</div>
                    <p className="text-sm opacity-90">Additional appointments from captured missed calls</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">25</div>
                    <p className="text-sm opacity-90">Reactivated lapsed patients from recall campaigns</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">£85</div>
                    <p className="text-sm opacity-90">Average revenue per appointment</p>
                  </div>
                </div>
                
                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <div className="text-center">
                    <div className="text-sm opacity-90 mb-2">Monthly Calculation:</div>
                    <div className="text-lg mb-2">(30 + 25) appointments × £85 = £4,675</div>
                    <div className="text-2xl font-bold">£4.7k extra treatment revenue every month</div>
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
              "We used to get three calls at once, pick up one, and lose the other two. Now every call 
              gets answered and the diary updates automatically in our system. It feels like we've 
              added a full-time receptionist without having to hire one."
            </blockquote>
            
            <div className="mt-6 text-center">
              <div className="font-semibold text-[#111315]">— Dental Practice Manager</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-[#111315] rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Practice Like This Dental Team?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stop losing patients to missed calls. Let's discuss how our AI solutions can deliver 
              similar results for your dental practice.
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
