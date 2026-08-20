'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function SamplesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">

      <Navbar />

      {/* Header — pushed down to clear the fixed navbar */}
      <div id="main-content" className="bg-emerald-600 text-white py-16 mt-[73px]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sample Evaluations</h1>
          <p className="text-xl text-emerald-100 max-w-3xl">
            See what VentureReady customers receive. These are actual excerpts from our comprehensive
            pitch deck evaluations—showing both strengths and areas for improvement.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Introduction */}
        <div className="mb-12 bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">What You Get</h2>
          <p className="text-gray-700 leading-relaxed">
            Every VentureReady evaluation provides detailed, actionable feedback on your pitch materials.
            We don't just point out problems—we highlight what's working well and provide specific
            recommendations to make your pitch investor-ready. Below are selected excerpts showing the
            depth and quality of analysis you can expect.
          </p>
        </div>

        {/* Sample 1: Grade by Section Overview */}
        <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Sample 1: Section-by-Section Grading</h3>
            <p className="text-emerald-100 text-sm">Detailed scoring across all critical pitch components</p>
          </div>
          <div className="p-6">
            <div className="prose max-w-none">
              <div className="bg-gray-50 p-4 rounded-lg mb-4 overflow-x-auto">
                <table className="min-w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-left py-2 px-3 font-semibold">Slide Category</th>
                      <th className="text-left py-2 px-3 font-semibold">Grade</th>
                      <th className="text-left py-2 px-3 font-semibold">Comments</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">Title Slide</td>
                      <td className="py-2 px-3 font-bold text-red-600">F</td>
                      <td className="py-2 px-3">Missing CEO info, contact details</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">Hook</td>
                      <td className="py-2 px-3 font-bold text-green-600">A-</td>
                      <td className="py-2 px-3">Strong market data, could use story</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">Problem</td>
                      <td className="py-2 px-3 font-bold text-green-600">A</td>
                      <td className="py-2 px-3">Excellent, multi-faceted, quantified</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">Solution</td>
                      <td className="py-2 px-3 font-bold text-yellow-600">B</td>
                      <td className="py-2 px-3">Clear concept but no product visuals</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">Team</td>
                      <td className="py-2 px-3 font-bold text-green-600">A</td>
                      <td className="py-2 px-3">Strong, diverse, experienced</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">Market Size</td>
                      <td className="py-2 px-3 font-bold text-green-600">A</td>
                      <td className="py-2 px-3">Well researched, credible TAM</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-2 px-3">Competition</td>
                      <td className="py-2 px-3 font-bold text-red-600">D</td>
                      <td className="py-2 px-3">Mentioned but never properly compared</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm italic mt-2">
                *Every evaluation includes comprehensive grading across 14+ critical sections
              </p>
            </div>
          </div>
        </div>

        {/* Sample 2: Recommendations */}
        <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Sample 2: Prioritized Recommendations</h3>
            <p className="text-emerald-100 text-sm">Actionable fixes organized by priority</p>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-red-600 text-lg mb-3 flex items-center">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">!</span>
                  Immediate Fixes (Must Do)
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Add proper Title Slide with CEO name, title, contact info',
                    'Create The Exit slide showing potential acquirers and comparable M&A',
                    'Build Competition slide with matrix comparing to 4-5 alternatives',
                    'Complete The Ask slide with use of funds breakdown and ARR target',
                    'Add product screenshots to Solution slide - show the actual product',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-600 mr-2">{i + 1}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-yellow-600 text-lg mb-3 flex items-center">
                  <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">+</span>
                  Important Improvements
                </h4>
                <ul className="space-y-2 text-gray-700">
                  {[
                    'Show actual customer logos on traction slide (if possible)',
                    'Add revenue metrics - ARR, MRR growth rate, or customer LTV',
                    'Strengthen Go-To-Market with specific channel strategy and CAC estimates',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-emerald-600 mr-2">{i + 8}.</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sample 3: Strengths vs Gaps */}
        <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Sample 3: Strengths vs. Critical Gaps</h3>
            <p className="text-emerald-100 text-sm">Balanced assessment of what's working and what's missing</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  What Works
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    'Problem is real, large, and well-articulated',
                    'Solution is differentiated (GitHub analogy is brilliant)',
                    'Team is strong',
                    'Early traction shows product-market fit',
                    'Growth model is smart (viral loops)',
                    'Market size is compelling',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  Critical Gaps
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  {[
                    'No Ask slide — investors don\'t know what you want',
                    'Financial projections need assumptions',
                    'No Go-To-Market slide',
                    'Team slide lacks headshots and bios',
                    'Unit economics unclear',
                    'Go-to-market specifics vague',
                  ].map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="text-red-600 mr-2">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-emerald-600">
              <p className="text-gray-700 font-semibold mb-2">Bottom Line:</p>
              <p className="text-gray-600 text-sm">
                "This pitch would likely get a follow-up meeting based on market opportunity and team,
                but would not get a term sheet without addressing the financial and competitive gaps.
                The deck is 70% there — it tells a compelling story but lacks the analytical rigor and
                completeness investors expect."
              </p>
            </div>
          </div>
        </div>

        {/* Sample 4: Investor Questions */}
        <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Sample 4: Anticipated Investor Questions</h3>
            <p className="text-emerald-100 text-sm">Prepare for what investors will ask</p>
          </div>
          <div className="p-6">
            <p className="text-gray-600 mb-4 font-semibold">
              Likely Investor Questions This Deck Doesn't Answer:
            </p>
            <div className="space-y-3">
              {[
                { q: '"How big is this market really?"', a: 'No market sizing' },
                { q: '"Why should I care?"', a: 'No Hook to grab attention' },
                { q: '"How does it work, and can competitors replicate it?"', a: 'No Technology/IP slide' },
                { q: '"What will you do with my $10M?"', a: 'Use of funds too vague' },
                { q: '"How will I get a 10x return?"', a: 'Exit strategy underdeveloped' },
              ].map((item, i) => (
                <div key={i} className="flex items-start p-3 bg-gray-50 rounded-lg">
                  <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">{i + 1}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{item.q}</p>
                    <p className="text-sm text-gray-600 mt-1">→ {item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sample 5: Actionable Roadmap */}
        <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Sample 5: Actionable Roadmap</h3>
            <p className="text-emerald-100 text-sm">Step-by-step path to investor-readiness</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {[
                { week: 'Week 1:', items: ['Build Market Size slide (research TAM/SAM, validate bottom-up)', 'Craft The Hook (identify best customer pain story)', 'Draft Technology/IP slide (product overview, defensibility)'] },
                { week: 'Week 2:', items: ['Consolidate Traction/Milestones slide with future roadmap', 'Create detailed Use of Funds breakdown', 'Research comparable exits and build Exit slide'] },
                { week: 'Week 3:', items: ['Extend financial model to 5 years', 'Add unit economics to Business Model slide', 'Polish and rehearse full presentation'] },
              ].map((w) => (
                <div key={w.week} className="border-l-4 border-emerald-600 pl-4 py-2">
                  <h4 className="font-bold text-gray-900 mb-2">{w.week}</h4>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    {w.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              ))}
              <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
                <p className="font-semibold text-emerald-900">Timeline to investor-ready: 2-3 weeks of focused work.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Ready for Your Own Detailed Evaluation?</h2>
          <p className="text-xl text-emerald-100 mb-6 max-w-2xl mx-auto">
            Get the same level of detailed, actionable feedback on your pitch deck, business plan,
            or executive summary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/#pricing"
              className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-emerald-50 transition-colors"
            >
              Get Your Evaluation — $97
            </Link>
            <Link
              href="/"
              className="text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>All sample evaluations have been anonymized to protect client confidentiality.</p>
          <p className="mt-2">Actual evaluations may vary in length and detail based on the materials submitted.</p>
        </div>
      </div>
    </div>
  );
}
