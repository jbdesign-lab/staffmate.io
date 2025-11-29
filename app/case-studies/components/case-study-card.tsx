'use client';

import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  industry: string;
  result: string;
  resultValue: string;
  description: string;
  slug: string;
  icon: string;
  challenge: string;
  solution: string;
}

export default function CaseStudyCard({ 
  title, 
  industry, 
  result, 
  resultValue, 
  description, 
  slug, 
  icon, 
  challenge, 
  solution 
}: CaseStudyCardProps) {
  return (
    <div className="bg-linear-to-br from-[#005193]/5 via-white to-[#005193]/10 rounded-3xl p-8 lg:p-12 mb-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h3 className="text-3xl lg:text-4xl font-bold text-[#111315]">
            {title}: <span className="text-[#005193]">{resultValue}</span>
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={`/case-studies/${slug}`}
              className="bg-[#005193] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#003d75] transition-all duration-300 text-center"
            >
              Read Full Case Study
            </Link>
            <Link 
              href="https://calendly.com/hakan-staffmate/ai-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-[#005193] text-[#005193] px-6 py-3 rounded-xl font-semibold hover:bg-[#005193] hover:text-white transition-all duration-300 text-center"
            >
              Get Similar Results
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
          <div className="space-y-6">
            <div className="text-center">
              <div className="text-4xl mb-4">{icon}</div>
              <h4 className="font-bold text-[#111315] text-lg">{title} Case Study</h4>
            </div>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Industry:</span>
                <span className="font-semibold text-[#111315]">{industry}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Challenge:</span>
                <span className="font-semibold text-[#111315]">{challenge}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Solution:</span>
                <span className="font-semibold text-[#111315]">{solution}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-600">Result:</span>
                <span className="font-bold text-[#005193]">{resultValue}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
