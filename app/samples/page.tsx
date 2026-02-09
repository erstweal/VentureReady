'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Briefcase, Menu, X } from 'lucide-react';

export default function SamplesPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900">VentureReady</span>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="/#features" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Features</a>
              <Link href="/samples" className="text-emerald-600 font-medium">Samples</Link>
              <a href="/#pricing" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Pricing</a>
              <a href="/#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">How It Works</a>
              <button 
                onClick={() => window.location.href = '/#pricing'}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-stone-200 mt-4">
              <a href="/#features" className="block text-stone-600 hover:text-stone-900 py-2">Features</a>
              <Link href="/samples" className="block text-emerald-600 py-2">Samples</Link>
              <a href="/#pricing" className="block text-stone-600 hover:text-stone-900 py-2">Pricing</a>
              <a href="/#how-it-works" className="block text-stone-600 hover:text-stone-900 py-2">How It Works</a>
              <button 
                onClick={() => window.location.href = '/#pricing'}
                className="w-full px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Header */}
      <div className="pt-32 pb-16 px-6 bg-emerald-600 text-white">
        <div className="max-w-6xl mx-auto">
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
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">1.</span>
                    <span>Add proper Title Slide with CEO name, title, contact info</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">2.</span>
                    <span>Create The Exit slide showing potential acquirers and comparable M&A</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">3.</span>
                    <span>Build Competition slide with matrix comparing to 4-5 alternatives</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">4.</span>
                    <span>Complete The Ask slide with use of funds breakdown and ARR target</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">5.</span>
                    <span>Add product screenshots to Solution slide - show the actual product</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-yellow-600 text-lg mb-3 flex items-center">
                  <span className="bg-yellow-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">+</span>
                  Important Improvements
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">8.</span>
                    <span>Show actual customer logos on traction slide (if possible)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">9.</span>
                    <span>Add revenue metrics - ARR, MRR growth rate, or customer LTV</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">10.</span>
                    <span>Include retention/churn data - proves product stickiness</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">11.</span>
                    <span>Explain contributor acquisition - how did you get 300 experts for free?</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sample 3: What Works / What's Missing */}
        <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Sample 3: Balanced Assessment</h3>
            <p className="text-emerald-100 text-sm">We highlight strengths AND gaps</p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                <h4 className="font-bold text-green-800 text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  What Works
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Problem is real, large, and well-articulated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Solution is differentiated (GitHub analogy is brilliant)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Team is strong</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Early traction shows product-market fit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Growth model is smart (viral loops)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    <span>Market size is compelling</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                <h4 className="font-bold text-red-800 text-lg mb-3 flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                  </svg>
                  What's Missing
                </h4>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Financial projections lack detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>No exit strategy shown</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Competition not properly addressed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Product not visually demonstrated</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Unit economics unclear</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 mr-2">✗</span>
                    <span>Go-to-market specifics vague</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-gray-50 rounded-lg border-l-4 border-emerald-600">
              <p className="text-gray-700 font-semibold mb-2">Bottom Line:</p>
              <p className="text-gray-600 text-sm">
                "This pitch would likely get a follow-up meeting based on market opportunity and team, 
                but would not get a term sheet without addressing the financial and competitive gaps. 
                The deck is 70% there - it tells a compelling story but lacks the analytical rigor and 
                completeness investors expect."
              </p>
            </div>
          </div>
        </div>

        {/* Sample 4: Investor Questions Preview */}
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
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                <div>
                  <p className="font-semibold text-gray-900">"How big is this market really?"</p>
                  <p className="text-sm text-gray-600 mt-1">→ No market sizing</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                <div>
                  <p className="font-semibold text-gray-900">"Why should I care?"</p>
                  <p className="text-sm text-gray-600 mt-1">→ No Hook to grab attention</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                <div>
                  <p className="font-semibold text-gray-900">"How does it work, and can competitors replicate it?"</p>
                  <p className="text-sm text-gray-600 mt-1">→ No Technology/IP slide</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                <div>
                  <p className="font-semibold text-gray-900">"What will you do with my $10M?"</p>
                  <p className="text-sm text-gray-600 mt-1">→ Use of funds too vague</p>
                </div>
              </div>
              <div className="flex items-start p-3 bg-gray-50 rounded-lg">
                <span className="bg-emerald-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">5</span>
                <div>
                  <p className="font-semibold text-gray-900">"How will I get a 10x return?"</p>
                  <p className="text-sm text-gray-600 mt-1">→ Exit strategy underdeveloped</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sample 5: Implementation Timeline */}
        <div className="mb-12 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 px-6 py-4">
            <h3 className="text-xl font-bold text-white">Sample 5: Actionable Roadmap</h3>
            <p className="text-emerald-100 text-sm">Step-by-step path to investor-readiness</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="border-l-4 border-emerald-600 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Week 1:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Build Market Size slide (research TAM/SAM, validate bottom-up)</li>
                  <li>• Craft The Hook (identify best customer pain story)</li>
                  <li>• Draft Technology/IP slide (product overview, defensibility)</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-emerald-500 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Week 2:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Consolidate Traction/Milestones slide with future roadmap</li>
                  <li>• Create detailed Use of Funds breakdown</li>
                  <li>• Research comparable exits and build Exit slide</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-emerald-400 pl-4 py-2">
                <h4 className="font-bold text-gray-900 mb-2">Week 3:</h4>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Extend financial model to 5 years</li>
                  <li>• Add unit economics to Business Model slide</li>
                  <li>• Polish and rehearse full presentation</li>
                </ul>
              </div>
              
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
              Get Your Evaluation
            </Link>
            <Link 
              href="/" 
              className="text-white border-2 border-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Additional Context */}
        <div className="mt-12 text-center text-gray-600 text-sm">
          <p>All sample evaluations have been anonymized to protect client confidentiality.</p>
          <p className="mt-2">Actual evaluations may vary in length and detail based on the materials submitted.</p>
        </div>
      </div>
    </div>
  );
}