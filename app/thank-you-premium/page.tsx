"use client";

import React from 'react';
import { CheckCircle, Mail, FileText, Clock, ArrowRight, Briefcase, Star, Zap } from 'lucide-react';

export default function ThankYouPremium() {
  return (
    <div className="min-h-screen bg-stone-50">
      {/* Simple Header */}
      <nav className="bg-white border-b border-stone-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold tracking-tight text-stone-900">VentureReady</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-3xl mx-auto px-6 py-20">
        {/* Success Icon with Premium Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full mb-4 relative">
            <CheckCircle className="w-12 h-12 text-emerald-600" />
            <div className="absolute -top-2 -right-2 bg-amber-400 rounded-full p-1.5">
              <Star className="w-4 h-4 text-white" fill="white" />
            </div>
          </div>
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-full text-sm font-bold mb-4">
            PREMIUM MEMBER
          </div>
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Welcome to VentureReady Premium!
          </h1>
          <p className="text-xl text-stone-600">
            Your subscription is active and ready to use
          </p>
        </div>

        {/* Premium Benefits Banner */}
        <div className="bg-gradient-to-br from-emerald-600 to-teal-700 rounded-2xl p-8 text-white mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Zap className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Your Premium Benefits</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>5 evaluations per month</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Priority 12-hour delivery</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Multiple document types</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Detailed competitive analysis</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Revision tracking</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Priority email support</span>
            </div>
          </div>
        </div>

        {/* What Happens Next */}
        <div className="bg-white rounded-2xl border-2 border-stone-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">What Happens Next</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-stone-900">Check Your Email</h3>
                </div>
                <p className="text-stone-600">
                  You'll receive a welcome email from <strong>venture@ventureready.ai</strong> within 
                  the next few minutes with detailed instructions for submitting your evaluations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-stone-900">Submit Your First Evaluation</h3>
                </div>
                <p className="text-stone-600 mb-3">
                  Reply to our email with your first document. You have <strong>5 evaluations</strong> available this month.
                </p>
                <div className="bg-stone-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-stone-900 mb-2">Accepted Document Types:</p>
                  <ul className="text-sm text-stone-600 space-y-1">
                    <li>• Pitch Decks (PDF, PowerPoint)</li>
                    <li>• Business Plans (PDF, Word)</li>
                    <li>• Executive Summaries (PDF, Word)</li>
                    <li>• Financial Models (Excel, PDF)</li>
                    <li>• Maximum file size: 25MB per document</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-bold text-stone-900">Receive Your Evaluation</h3>
                </div>
                <p className="text-stone-600">
                  As a Premium member, you get <strong>priority processing</strong>. Your comprehensive 
                  evaluation report will be delivered within <strong>12-24 hours</strong> of submission.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included - Premium Version */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Each Evaluation Includes</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Complete VentureReady framework scoring</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Section-by-section analysis</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Competitive positioning review</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Market analysis feedback</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Financial model review</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Actionable recommendations</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Track improvements over time</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span className="text-stone-700">Professional PDF report</span>
            </div>
          </div>
        </div>

        {/* Subscription Details */}
        <div className="bg-white border-2 border-stone-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-stone-900 mb-4">Subscription Details</h3>
          <div className="space-y-3 text-stone-700">
            <div className="flex justify-between items-center pb-3 border-b border-stone-200">
              <span>Plan:</span>
              <span className="font-semibold">VentureReady Premium</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-stone-200">
              <span>Price:</span>
              <span className="font-semibold">$149/month</span>
            </div>
            <div className="flex justify-between items-center pb-3 border-b border-stone-200">
              <span>Evaluations per month:</span>
              <span className="font-semibold">5 evaluations</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Billing cycle:</span>
              <span className="font-semibold">Monthly (renews automatically)</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-stone-200">
            <p className="text-sm text-stone-600">
              You can cancel your subscription anytime from your Stripe customer portal. 
              No questions asked, no cancellation fees.
            </p>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-stone-900 mb-3 flex items-center space-x-2">
            <span>📧</span>
            <span>Didn't receive the welcome email?</span>
          </h3>
          <ul className="text-stone-700 space-y-2 text-sm">
            <li>• Check your spam/junk folder</li>
            <li>• Add <strong>venture@ventureready.ai</strong> to your contacts</li>
            <li>• Wait 5-10 minutes (emails can sometimes be delayed)</li>
            <li>• If still no email, contact us at <strong>venture@ventureready.ai</strong></li>
          </ul>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="/"
            className="flex-1 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all text-center flex items-center justify-center space-x-2"
          >
            <span>Return to Home</span>
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="mailto:venture@ventureready.ai"
            className="flex-1 px-6 py-3 border-2 border-stone-300 text-stone-900 rounded-lg font-semibold hover:bg-stone-50 transition-all text-center flex items-center justify-center space-x-2"
          >
            <Mail className="w-5 h-5" />
            <span>Contact Support</span>
          </a>
        </div>

        {/* Premium Tip */}
        <div className="mt-8 bg-gradient-to-r from-emerald-600 to-teal-700 rounded-xl p-6 text-white">
          <h3 className="font-bold mb-2 flex items-center space-x-2">
            <Star className="w-5 h-5" fill="white" />
            <span>Pro Tip for Premium Members</span>
          </h3>
          <p className="text-emerald-50">
            Get the most value by submitting multiple versions of your pitch deck as you refine it. 
            Track your improvements over time and see your scores increase with each iteration!
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
              <Briefcase className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-white">VentureReady</span>
          </div>
          <p className="text-sm">&copy; 2026 VentureReady. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
