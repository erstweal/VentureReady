"use client";

import React from 'react';
import { CheckCircle, Mail, FileText, Clock, ArrowRight, Briefcase } from 'lucide-react';

export default function ThankYouBasic() {
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
        {/* Success Icon */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-stone-900 mb-4">
            Payment Successful!
          </h1>
          <p className="text-xl text-stone-600">
            Thank you for choosing VentureReady Basic Evaluation
          </p>
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
                  You'll receive an email from <strong>venture@ventureready.ai</strong> within the next 
                  few minutes with instructions on how to submit your materials.
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
                  <h3 className="font-bold text-stone-900">Submit Your Materials</h3>
                </div>
                <p className="text-stone-600 mb-3">
                  Reply to our email with your pitch deck, business plan, or executive summary attached.
                </p>
                <div className="bg-stone-50 rounded-lg p-4">
                  <p className="text-sm font-semibold text-stone-900 mb-2">Accepted Formats:</p>
                  <ul className="text-sm text-stone-600 space-y-1">
                    <li>• PDF (.pdf)</li>
                    <li>• PowerPoint (.ppt, .pptx)</li>
                    <li>• Word Document (.doc, .docx)</li>
                    <li>• Maximum file size: 25MB</li>
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
                  Your comprehensive evaluation report will be delivered to your email within 
                  <strong> 24 hours</strong> of submission.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border-2 border-emerald-200 p-8 mb-8">
          <h2 className="text-2xl font-bold text-stone-900 mb-4">Your Evaluation Includes</h2>
          <ul className="space-y-3 text-stone-700">
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Comprehensive scoring against the VentureReady framework</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Section-by-section analysis of your materials</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Identification of strengths and weaknesses</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Actionable recommendations for improvement</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              <span>Professional PDF report you can reference and share</span>
            </li>
          </ul>
        </div>

        {/* Important Notes */}
        <div className="bg-amber-50 border-2 border-amber-200 rounded-xl p-6 mb-8">
          <h3 className="font-bold text-stone-900 mb-3 flex items-center space-x-2">
            <span>📧</span>
            <span>Didn't receive the email?</span>
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
