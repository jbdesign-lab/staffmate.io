"use client";

export default function ProblemSolution() {
  const problems = [
    {
      title: "Labour Shortages",
      description: "Struggling to find and retain reliable staff for customer service roles",
      impact: "Missed calls, poor customer experience, lost revenue",
      icon: "👥"
    },
    {
      title: "Rising Costs",
      description: "Increasing wages and benefits making customer service expensive",
      impact: "Squeezed margins, reduced profitability",
      icon: "📈"
    },
    {
      title: "After Hours Gaps",
      description: "No coverage outside business hours means missed opportunities",
      impact: "Lost appointments, competitors capturing your customers",
      icon: "🌙"
    },
    {
      title: "Inconsistent Service",
      description: "Human staff have off days, sick days, and varying skill levels",
      impact: "Unpredictable customer experience, brand reputation issues",
      icon: "🎭"
    }
  ];

  const solutions = [
    {
      title: "Always Available",
      description: "AI staff never call in sick, take breaks, or need time off",
      benefit: "100% uptime, consistent service quality",
      icon: "⚡"
    },
    {
      title: "Cost Effective",
      description: "One-time setup replaces ongoing salary and benefit costs",
      benefit: "Up to 80% reduction in customer service costs",
      icon: "💰"
    },
    {
      title: "24/7 Coverage",
      description: "Capture every opportunity with round-the-clock availability",
      benefit: "Never miss another appointment or inquiry",
      icon: "🕐"
    },
    {
      title: "Perfect Performance",
      description: "Consistent, professional responses every single time",
      benefit: "Enhanced brand reputation, customer satisfaction",
      icon: "🎯"
    }
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#111315] mb-4">
            The <span className="text-red-600">Problem</span> vs Our <span className="text-[#005193]">Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brick-and-mortar businesses are facing unprecedented challenges. 
            Traditional staffing models are failing. AI automation is the answer.
          </p>
        </div>

        {/* Simple Comparison Chart */}
        <div className="bg-white rounded-xl p-6 lg:p-8 shadow-sm border border-gray-200">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#111315] mb-2">The Transformation</h3>
            <p className="text-gray-600">See the difference AI automation makes</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-100">
                  <th className="text-left py-4 px-4 font-semibold text-gray-700">Aspect</th>
                  <th className="text-center py-4 px-4 font-semibold text-red-600">Without AI</th>
                  <th className="text-center py-4 px-4 font-semibold text-[#005193]">With staffmate.io</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-800">Call Coverage</td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-red-100 text-red-700">
                      Limited Hours
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 text-green-700">
                      24/7 Available
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-800">Missed Opportunities</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-red-600 font-semibold">High Risk</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">Zero Risk</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-800">Staffing Costs</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-red-600 font-semibold">$40k+/year</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">80% Less</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-800">Service Quality</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-red-600 font-semibold">Inconsistent</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">Perfect Every Time</span>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-4 font-medium text-gray-800">Sick Days</td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-red-600 font-semibold">15+ Days/Year</span>
                  </td>
                  <td className="py-4 px-4 text-center">
                    <span className="text-green-600 font-semibold">0 Days</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="mt-8 text-center">
            <div className="inline-flex items-center px-6 py-3 bg-[#005193]/10 rounded-xl">
              <span className="text-[#005193] font-semibold">Result: Transform your business operations in 30 days or less</span>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
