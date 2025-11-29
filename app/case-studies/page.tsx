import Link from 'next/link';
import Navbar from '../(homepage)/components/navbar';
import Footer from '../(homepage)/components/footer';
import CaseStudyCard from './components/case-study-card';

export default function CaseStudies() {
  const caseStudies = [
    {
      title: "Contractors",
      industry: "Home Services",
      result: "Additional monthly revenue from previously missed calls",
      resultValue: "Generated £5,100/month",
      description: "See how a busy contracting company eliminated missed calls and captured 32 additional bookings per month with our AI receptionist solution.",
      slug: "contractors",
      icon: "🔧",
      challenge: "20-25% Lost Leads",
      solution: "24/7 AI Agent"
    },
    {
      title: "Dental Practice",
      industry: "Healthcare",
      result: "Additional treatment revenue by capturing missed calls and reactivating lapsed patients",
      resultValue: "Generated £4,700/month",
      description: "See how a dental practice eliminated 34% missed calls, reactivated lapsed patients, and fully automated booking changes through their dental systems.",
      slug: "dentist",
      icon: "🦷",
      challenge: "34% Missed Calls",
      solution: "AI Receptionist + PMS Integration"
    },
    {
      title: "Medical Spa",
      industry: "Beauty & Wellness",
      result: "Additional package revenue through AI sales flows and automated deposits",
      resultValue: "Generated £6,100/month",
      description: "See how a medical spa transformed multi-channel communication with instant AI responses across phone, WhatsApp and social media, while automating deposit collection and follow-ups.",
      slug: "medspa",
      icon: "💆‍♀️",
      challenge: "Slow Multi-Channel Response",
      solution: "AI Sales Assistant + Automation"
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
              <span className="text-sm font-medium text-[#005193]">Success Stories</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#111315] mb-6 leading-tight">
              Real Results from <span className="text-[#005193]">Real Businesses</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              See how businesses across different industries have transformed their operations 
              and boosted revenue with our AI automation solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-4">
              Success Stories Across <span className="text-[#005193]">Industries</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From healthcare to home services, discover how AI automation is transforming 
              businesses and delivering measurable results.
            </p>
          </div>

          <div className="space-y-0">
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                {...study}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#111315]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the businesses already transforming their operations with AI automation. 
            Let's discuss how we can deliver similar results for your company.
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
              href="/solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-[#111315] transition-all duration-300 text-center"
            >
              View Our Solutions
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
