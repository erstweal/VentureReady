'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ThankYouPremium() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />

      <div className="max-w-2xl mx-auto px-4 py-24 text-center">

        {/* Success icon */}
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="inline-block px-4 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-wide mb-4">
          Premium Member
        </div>

        <h1 className="text-4xl font-bold text-stone-900 mb-4">Welcome to Premium!</h1>
        <p className="text-xl text-stone-600 mb-10">
          Your VentureReady Premium subscription is now active. Let's get your pitch investor-ready.
        </p>

        {/* What's included */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 text-left mb-6">
          <h2 className="text-xl font-bold text-stone-900 mb-4">Your Premium Benefits</h2>
          <ul className="space-y-3">
            {[
              '5 comprehensive evaluations per month',
              'Multiple document types accepted (pitch deck, business plan, exec summary)',
              'Detailed section-by-section analysis',
              'Competitive comparison grid',
              'Recommended 15-slide storyline arc',
              'Priority 24-hour turnaround',
              'Direct email support',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-stone-700">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* What happens next */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 text-left mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-6">What Happens Next</h2>
          <div className="space-y-5">
            {[
              { n: '1', title: 'Check your email', body: 'You\'ll receive a welcome email from venture@ventureready.ai with everything you need to get started.' },
              { n: '2', title: 'Submit your first evaluation', body: 'Reply with your pitch deck, business plan, or executive summary attached (PDF, PowerPoint, or Word — max 25MB).' },
              { n: '3', title: 'Receive your report', body: 'Within 24 hours you\'ll receive your comprehensive evaluation. Use your 5 monthly credits to track improvement across versions.' },
            ].map((step) => (
              <div key={step.n} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-emerald-600 text-white text-sm font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                  {step.n}
                </div>
                <div>
                  <p className="font-semibold text-stone-900">{step.title}</p>
                  <p className="text-stone-600 text-sm mt-0.5">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact note */}
        <p className="text-stone-500 text-sm mb-8">
          Questions? Email us at{' '}
          <a href="mailto:venture@ventureready.ai" className="text-emerald-600 font-semibold hover:underline">
            venture@ventureready.ai
          </a>
        </p>

        <Link
          href="/"
          className="inline-block px-8 py-3 bg-emerald-600 text-white rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
