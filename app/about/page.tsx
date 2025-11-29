import Footer from '../(homepage)/components/footer';
import Navbar from '../(homepage)/components/navbar';

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-white via-[#005193]/5 to-[#005193]/10 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-[#005193]/10 rounded-full mb-8">
              <span className="text-sm font-medium text-[#005193]">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-[#111315] mb-6 leading-tight">
              Premium AI Automation <span className="text-[#005193]">Built Different</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              "Imagine your best employee, on their best day, 24/7. Never sleeps. Never takes a day off."
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-6">
                Our <span className="text-[#005193]">Mission</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We exist to help brick-and-mortar businesses stay competitive in a world where labour shortages, 
                rising costs, and shifting customer expectations are squeezing margins.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                staffmate.io provides them with always-on, AI-powered virtual employees that deliver 
                unmatched reliability, efficiency, and ROI.
              </p>
            </div>
            
            {/* Visual Element */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#005193] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111315]">Always-On Performance</h3>
                      <p className="text-gray-600 text-sm">24/7 reliability without breaks</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#005193] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">⚡</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111315]">Unmatched Efficiency</h3>
                      <p className="text-gray-600 text-sm">Streamlined operations</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#005193] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">💰</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111315]">Exceptional ROI</h3>
                      <p className="text-gray-600 text-sm">Maximum return on investment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-6">
              Meet the <span className="text-[#005193]">Founders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              staffmate.io is a premium AI-automation venture founded by brothers who understand 
              the challenges facing modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Hakan */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-[#005193]/20 shadow-lg">
                <img 
                  src="/hakan-image.jpeg" 
                  alt="Hakan Barmaksiz"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#111315] mb-2">Hakan Barmaksiz</h3>
              <p className="text-[#005193] font-medium mb-4">Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Visionary leader driving innovation in AI automation for brick-and-mortar businesses, 
                focused on delivering premium solutions that transform operations.
              </p>
            </div>

            {/* Adnan */}
            <div className="text-center">
              <div className="w-32 h-32 rounded-full mx-auto mb-6 overflow-hidden border-4 border-[#005193]/20 shadow-lg">
                <img 
                  src="/adnan-image.jpeg" 
                  alt="Adnan Barmaksiz"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-[#111315] mb-2">Adnan Barmaksiz</h3>
              <p className="text-[#005193] font-medium mb-4">Co-Founder</p>
              <p className="text-gray-600 leading-relaxed">
                Technical architect ensuring every AI solution is built with precision, 
                reliability, and seamless integration with existing business systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-6">
              What We <span className="text-[#005193]">Deliver</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              AI receptionists and custom automations built for clinics, salons, barbers, 
              dental practices, restaurants, builders, estate agents, and more.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-bold text-[#111315] mb-4">Answer Calls</h3>
              <p className="text-gray-600">Handle every call with natural, human-like conversation and professional service.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-xl font-bold text-[#111315] mb-4">Manage Bookings</h3>
              <p className="text-gray-600">Seamlessly schedule, reschedule, and manage appointments across all platforms.</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-[#111315] mb-4">CRM Integration</h3>
              <p className="text-gray-600">Integrate seamlessly with industry-specific CRMs and POS systems.</p>
            </div>
          </div>

          <div className="bg-[#005193] rounded-2xl p-8 lg:p-12 text-white text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Unlike Basic Chatbots or Cheap Automation Tools
            </h3>
            <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
              staffmate.io positions itself as a premium, bespoke partner. Every implementation is designed 
              to look, sound, and behave like a real team member, aligned with your business's brand and tone of voice.
            </p>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-6">
              <span className="text-[#005193]">World-Class</span> Technology Stack
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on cutting-edge AI technologies but delivered through a human-centred 
              onboarding and optimisation process.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'n8n', logo: '/n8n-logo.png' },
              { name: 'ElevenLabs', logo: '/elevenlabs-logo.svg' },
              { name: 'Twilio', logo: '/twilio-logo.png' },
              { name: 'OpenAI', logo: '/openai-logo.png' },
              { name: 'Claude', logo: '/claude-logo.png' },
              { name: 'Custom APIs', logo: '/file.svg' }
            ].map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:bg-gray-100 transition-colors group">
                <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={tech.logo} 
                    alt={tech.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="font-medium text-[#111315] text-sm">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
