'use client';

import Link from 'next/link';
import Navbar from '@/components/Navbar';

export default function ThankYouRoadmap() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Navbar />

      <div id="main-content" className="max-w-2xl mx-auto px-4 py-24 text-center">

        {/* Success icon */}
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-4xl font-bold text-stone-900 mb-4">Your Growth Roadmap Is On Its Way!</h1>
        <p className="text-xl text-stone-600 mb-10">
          Thank you for purchasing the VentureReady Growth Roadmap. Your order is confirmed.
        </p>

        {/* What happens next */}
        <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8 text-left mb-8">
          <h2 className="text-xl font-bold text-stone-900 mb-6">What Happens Next</h2>
          <div className="space-y-5">
            {[
              { n: '1', title: 'We start from your evaluation', body: 'No new uploads needed — your Growth Roadmap is built directly from the findings in your completed VentureReady evaluation.' },
              { n: '2', title: 'Tell us anything that changed', body: 'If your product, market focus, or raise amount has changed since your evaluation, reply to your confirmation email and let us know.' },
              { n: '3', title: 'We build your 90-day plan', body: 'Customer discovery scripts, beachhead go-to-market phasing, product improvement sequencing, and an ecosystem engagement plan — all calibrated to your evaluation\'s priority gaps.' },
              { n: '4', title: 'Receive your roadmap', body: 'Within 48 hours you\'ll receive your Growth Roadmap as a PDF report, ready to share with your team.' },
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
