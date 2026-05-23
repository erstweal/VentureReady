'use client';

<<<<<<< HEAD
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, TrendingUp, Target, Check, Menu, X, Briefcase } from 'lucide-react';
=======
import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6

export default function Home() {
  const basicPrice = 97;
  const premiumPrice = 297;

  const STRIPE_BASIC_LINK = "https://buy.stripe.com/eVqdRb4xz4aabyCaxE3oA03";
  const STRIPE_PREMIUM_LINK = "https://buy.stripe.com/14A4gB1ln8qqbyCeNU3oA04";

  // STRIPE PAYMENT LINKS - Replace these with your actual Stripe payment links
  const STRIPE_BASIC_LINK = "https://buy.stripe.com/5kQbJ3aVX4aa7imfRY3oA00"; // Replace after creating product
  const STRIPE_PREMIUM_LINK = "https://buy.stripe.com/5kQ5kFc01cGGdGK0X43oA01"; // Replace after creating product

  const handleGetStarted = (plan: 'basic' | 'premium') => {
    if (plan === 'basic') {
      window.location.href = STRIPE_BASIC_LINK;
    } else if (plan === 'premium') {
      window.location.href = STRIPE_PREMIUM_LINK;
    }
  };

  return (
    <div className="min-h-screen bg-stone-50">
<<<<<<< HEAD
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-stone-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold tracking-tight text-stone-900">VentureReady</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Features</a>
              <Link href="/samples" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Samples</Link>
              <a href="#pricing" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Pricing</a>
              <a href="#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">How It Works</a>
              <button 
                onClick={() => window.location.href = '#pricing'}
                className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
              >
                Get Started
              </button>
            </div>
=======
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6

      <Navbar />

<<<<<<< HEAD
          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-stone-200 mt-4">
              <a href="#features" className="block text-stone-600 hover:text-stone-900 py-2">Features</a>
              <Link href="/samples" className="block text-stone-600 hover:text-stone-900 py-2">Samples</Link>
              <a href="#pricing" className="block text-stone-600 hover:text-stone-900 py-2">Pricing</a>
              <a href="#how-it-works" className="block text-stone-600 hover:text-stone-900 py-2">How It Works</a>
              <button 
                onClick={() => window.location.href = '#pricing'}
                className="w-full px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold"
              >
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
=======
      {/* ── Hero ────────────────────────────────────────────────────── */}
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full">
                <span className="text-sm font-semibold text-emerald-900">AI-Powered Business Evaluation</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight tracking-tight">
                Get Your Business
                <span className="block mt-2 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Venture Ready
                </span>
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                Expert-level AI analysis of your pitch deck, business plan, and fundraising materials in minutes.
                Evaluated against proven frameworks used by top-tier investors.
              </p>

<<<<<<< HEAD
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '#pricing'}
                  className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2"
                >
                  <span>Get Started - $49</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button 
                  onClick={() => window.location.href = '#how-it-works'}
                  className="px-8 py-4 border-2 border-stone-300 text-stone-900 rounded-lg font-semibold text-lg hover:bg-stone-100 transition-all"
                >
                  See How It Works
                </button>
              </div>

              {/* NEW: Sample Evaluations Link */}
              <div className="pt-2">
                <Link 
                  href="/samples" 
                  className="inline-flex items-center text-emerald-600 hover:text-emerald-700 font-semibold transition-colors group"
                >
                  <span>View sample evaluations</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900">24hr</div>
                  <div className="text-sm text-stone-600">Turnaround Time</div>
                </div>
                <div className="h-12 w-px bg-stone-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900">$49</div>
                  <div className="text-sm text-stone-600">Starting Price</div>
                </div>
                <div className="h-12 w-px bg-stone-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900">VentureReady</div>
                  <div className="text-sm text-stone-600">Framework Based</div>
                </div>
=======
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={STRIPE_BASIC_LINK}
                  className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-800 transition-all shadow-lg shadow-emerald-200 text-center"
                >
                  Get Started — $97
                </a>
                <a
                  href="#how-it-works"
                  className="px-8 py-4 bg-white text-stone-900 rounded-xl font-bold text-lg border-2 border-stone-200 hover:border-emerald-300 transition-all text-center"
                >
                  See How It Works
                </a>
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
              </div>

              <a href="/samples" className="inline-block text-emerald-700 font-semibold hover:text-emerald-900 underline underline-offset-4">
                View sample evaluations →
              </a>
            </div>

            {/* Hero card */}
            <div className="relative">
<<<<<<< HEAD
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl blur-3xl opacity-20"></div>
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-stone-200">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg border border-green-200">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">Market Analysis: Excellent</div>
                      <div className="text-sm text-stone-600 mt-1">Your TAM calculation is well-researched with credible sources</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-blue-50 to-sky-50 rounded-lg border border-blue-200">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">Financial Projections: Strong</div>
                      <div className="text-sm text-stone-600 mt-1">Revenue model shows realistic growth trajectory</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 p-4 bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg border border-amber-200">
                    <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">Competitive Analysis: Needs Work</div>
                      <div className="text-sm text-stone-600 mt-1">Add more differentiation from Competitor X in the healthcare space</div>
=======
              <div className="bg-white rounded-2xl shadow-2xl border border-stone-100 p-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-bold text-stone-900 text-lg">VentureReady</span>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full">Framework Based</span>
                </div>
                <div className="space-y-4">
                  {[
                    { label: 'Market Analysis', status: 'Excellent', color: 'text-green-600', bg: 'bg-green-50', note: 'Your TAM calculation is well-researched with credible sources' },
                    { label: 'Financial Projections', status: 'Strong', color: 'text-blue-600', bg: 'bg-blue-50', note: 'Revenue model shows realistic growth trajectory' },
                    { label: 'Competitive Analysis', status: 'Needs Work', color: 'text-amber-600', bg: 'bg-amber-50', note: 'Add more differentiation from Competitor X' },
                  ].map((item) => (
                    <div key={item.label} className={`${item.bg} rounded-lg p-4`}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-stone-800">{item.label}</span>
                        <span className={`text-sm font-bold ${item.color}`}>{item.status}</span>
                      </div>
                      <p className="text-stone-600 text-sm">{item.note}</p>
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────────── */}
      <section className="py-12 px-6 bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-stone-900">24hr</div>
              <div className="text-stone-600 mt-1">Turnaround Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-stone-900">$97</div>
              <div className="text-stone-600 mt-1">Starting Price</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-stone-900">15</div>
              <div className="text-stone-600 mt-1">Slide Framework</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ────────────────────────────────────────────────── */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Professional Evaluation in Minutes
            </h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Get the same quality feedback that costs thousands from consultants - powered by AI trained on investor frameworks.
=======
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Professional Evaluation in Minutes</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Get the same quality feedback that costs thousands from consultants — powered by AI trained on investor frameworks.
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
<<<<<<< HEAD
            <div className="p-8 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Comprehensive Analysis</h3>
              <p className="text-stone-600">
                Every section of your pitch deck evaluated against the proven VentureReady framework used by investors worldwide.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">Actionable Feedback</h3>
              <p className="text-stone-600">
                Not just scores - get specific recommendations on how to improve each section of your materials to increase funding success.
              </p>
            </div>

            <div className="p-8 rounded-2xl border border-stone-200 hover:border-emerald-300 transition-all hover:shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 mb-3">24-Hour Delivery</h3>
              <p className="text-stone-600">
                Upload your deck, get your comprehensive evaluation report within 24 hours. Fast turnaround when you need it most.
              </p>
            </div>
=======
            {[
              {
                title: 'Comprehensive Analysis',
                body: 'Every section of your pitch deck evaluated against the proven VentureReady 15-slide framework used by investors worldwide.',
              },
              {
                title: 'Actionable Feedback',
                body: 'Not just scores — specific recommendations on how to improve each section to increase your funding success rate.',
              },
              {
                title: '24-Hour Delivery',
                body: 'Upload your deck, get your comprehensive evaluation report within 24 hours. Fast turnaround when you need it most.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-8 border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-stone-900 mb-3">{f.title}</h3>
                <p className="text-stone-600 leading-relaxed">{f.body}</p>
              </div>
            ))}
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-stone-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-stone-600">
              Three simple steps to get professional feedback on your pitch
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Purchase & Upload</h3>
                <p className="text-lg text-stone-600">
                  Choose your plan, complete payment, and upload your pitch deck, business plan, or executive summary (PDF, PowerPoint, or Word).
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">AI Evaluation</h3>
                <p className="text-lg text-stone-600">
                  Our AI analyzes your materials against the VentureReady framework, scoring each section and identifying strengths and weaknesses.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-full flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2">Get Your Report</h3>
                <p className="text-lg text-stone-600">
                  Receive a comprehensive PDF report via email within 24 hours with detailed scores, feedback, and specific recommendations for improvement.
                </p>
      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">What Founders Are Saying</h2>
            <p className="text-xl text-stone-600">Real feedback from founders who used VentureReady on their pitch materials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I found it very insightful. I've used similar services before with mixed results — this one stood out.",
                name: 'R.',
                context: 'B2B SaaS Founder',
              },
              {
                quote: "The analysis tool is incredible. It nailed the assessment on our exit strategy and CTO gaps.",
                name: 'J.',
                context: 'Marketplace Founder',
              },
              {
                quote: "Incredibly valuable. I had my whole team file the reports — we keep coming back to them.",
                name: 'D.',
                context: 'Startup Founder',
              },
              {
                quote: "Wow that AI audit is cool!",
                name: 'J.',
                context: 'PropTech Founder',
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm flex flex-col gap-4">
                <div className="text-3xl text-emerald-300 font-serif leading-none">&ldquo;</div>
                <p className="text-stone-700 leading-relaxed flex-1">{t.quote}</p>
                <div>
                  <div className="font-semibold text-stone-900">{t.name}</div>
                  <div className="text-sm text-stone-500">{t.context}</div>
                </div>
              </div>
            </div>
=======
      {/* ── How It Works ────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">How It Works</h2>
            <p className="text-xl text-stone-600">Three simple steps to get professional feedback on your pitch</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: '1', title: 'Purchase & Upload', body: 'Choose your plan, complete payment, and upload your pitch deck, business plan, or executive summary (PDF, PowerPoint, or Word).' },
              { n: '2', title: 'AI Evaluation', body: 'Our AI analyzes your materials against the VentureReady framework, scoring each section and identifying strengths and weaknesses.' },
              { n: '3', title: 'Get Your Report', body: 'Receive a comprehensive PDF report via email within 24 hours with detailed scores, feedback, and specific recommendations for improvement.' },
            ].map((step) => (
              <div key={step.n} className="relative">
                <div className="absolute top-0 left-8 text-8xl font-bold text-emerald-100 -z-10">{step.n}</div>
                <div className="pt-12">
                  <h3 className="text-2xl font-bold text-stone-900 mb-3">{step.title}</h3>
                  <p className="text-stone-600">{step.body}</p>
                </div>
              </div>
            ))}
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-stone-600">
              Choose the plan that fits your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
=======
      {/* ── Testimonials ────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">What Founders Are Saying</h2>
            <p className="text-xl text-stone-600">Real feedback from founders who used VentureReady on their pitch materials</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "I found it very insightful. I've used similar services before with mixed results — this one stood out.",
                name: 'R.',
                context: 'B2B SaaS Founder',
              },
              {
                quote: "The analysis tool is incredible. It nailed the assessment on our exit strategy and CTO gaps.",
                name: 'J.',
                context: 'Marketplace Founder',
              },
              {
                quote: "Incredibly valuable. I had my whole team file the reports — we keep coming back to them.",
                name: 'D.',
                context: 'Startup Founder',
              },
              {
                quote: "Wow that AI audit is cool!",
                name: 'J.',
                context: 'PropTech Founder',
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm flex flex-col gap-4">
                <div className="text-3xl text-emerald-300 font-serif leading-none">&ldquo;</div>
                <p className="text-stone-700 leading-relaxed flex-1">{t.quote}</p>
                <div>
                  <div className="font-semibold text-stone-900">{t.name}</div>
                  <div className="text-sm text-stone-500">{t.context}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Samples CTA ─────────────────────────────────────────────── */}
      <section className="py-16 px-6 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">See What Our Evaluations Look Like</h2>
          <p className="text-lg text-stone-600 mb-8">
            We provide detailed, actionable feedback — highlighting both strengths and areas for improvement.
          </p>
          <a
            href="/samples"
            className="inline-block px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold text-lg hover:bg-emerald-700 transition-colors"
          >
            View Sample Evaluations →
          </a>
        </div>
      </section>

      {/* ── Pricing ─────────────────────────────────────────────────── */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-stone-600">Choose the plan that fits your needs</p>
          </div>

          {/* ── Pricing Cards ── */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">

            {/* Basic */}
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-emerald-300 transition-all">
              <div className="text-sm font-bold text-stone-600 uppercase tracking-wide mb-2">
                Basic
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-stone-900">${basicPrice}</span>
                <span className="text-stone-600">/evaluation</span>
              </div>
<<<<<<< HEAD
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Single pitch deck evaluation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Comprehensive VentureReady framework scoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Actionable recommendations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">PDF report download</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">24-hour delivery</span>
                </li>
              </ul>
              <button
                onClick={() => handleGetStarted('basic')}
                className="w-full py-3 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all"
=======
              <ul className="space-y-4 mb-8 mt-4">
                {[
                  'Single pitch deck evaluation',
                  'Comprehensive VentureReady framework scoring',
                  'Slide-by-slide KEEP / STRENGTHEN / ADD verdicts',
                  'Red flag identification (P1–P3 severity)',
                  'Actionable recommendations',
                  'PDF report download',
                  '24-hour delivery',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={STRIPE_BASIC_LINK}
                className="block w-full py-3 border-2 border-emerald-600 text-emerald-700 rounded-lg font-semibold hover:bg-emerald-50 transition-colors text-center"
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
              >
                Get Started
              </a>
            </div>

<<<<<<< HEAD
            {/* Premium Plan */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-2xl transform scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-stone-900 px-4 py-1 rounded-full text-sm font-bold">
                Best Value
              </div>
              <div className="text-sm font-bold uppercase tracking-wide mb-2 opacity-90">
                Premium
=======
            {/* Premium - Featured */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white relative transform md:scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-stone-900 text-white text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                Best Value
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold">${premiumPrice}</span>
                <span className="opacity-90">/month</span>
              </div>
<<<<<<< HEAD
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>5 evaluations per month</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Multiple document types</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Detailed section analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Competitive comparison</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Priority support</span>
                </li>
              </ul>
              <button
                onClick={() => handleGetStarted('premium')}
                className="w-full py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-stone-50 transition-colors"
              >
                Start Now
              </button>
              <p className="text-center text-sm mt-3 opacity-90">
                Save $96 vs paying per evaluation
=======
              <ul className="space-y-4 mb-8 mt-4">
                {[
                  '5 evaluations per month',
                  'Multiple document types',
                  'Detailed section-by-section analysis',
                  'Competitive comparison grid',
                  'Recommended 15-slide storyline arc',
                  'Priority support',
                  'Track improvement over time',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={STRIPE_PREMIUM_LINK}
                className="block w-full py-3 bg-white text-emerald-600 rounded-lg font-bold hover:bg-stone-50 transition-colors text-center"
              >
                Start Now
              </a>
              <p className="text-center text-sm mt-3 opacity-80">
                Save $188 vs paying per evaluation
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
              </p>
            </div>
          </div>

<<<<<<< HEAD
          <div className="mt-12 text-center">
            <p className="text-stone-600">
              Need more than 5 evaluations per month? 
              <a href="mailto:venture@ventureready.ai" className="text-emerald-600 font-semibold hover:underline ml-1">
                Contact us for Enterprise pricing
              </a>
            </p>
=======
            {/* Enterprise */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-emerald-300 transition-all">
              <div className="text-sm font-bold text-stone-600 uppercase tracking-wide mb-2">Enterprise</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-stone-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Unlimited evaluations',
                  'White-labeled reports',
                  'Accelerator / incubator pricing',
                  'Custom evaluation criteria',
                  'Team collaboration',
                  'API access',
                  'Dedicated support',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href="mailto:venture@ventureready.ai"
                className="block w-full py-3 border-2 border-stone-300 text-stone-900 rounded-lg font-semibold hover:bg-stone-50 transition-colors text-center"
              >
                Contact Sales
              </a>
            </div>
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
          </div>

          <p className="text-center text-stone-500 text-sm mt-8">
            Need more than 5 evaluations per month?{' '}
            <a href="mailto:venture@ventureready.ai" className="text-emerald-700 font-semibold hover:underline">
              Contact us for Enterprise pricing
            </a>
          </p>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Venture Ready?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
<<<<<<< HEAD
            Join founders who are improving their funding success with data-driven feedback.
          </p>
          
          <button 
            onClick={() => window.location.href = '#pricing'}
            className="px-10 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center space-x-2"
          >
            <span>Get Started - $49</span>
            <ArrowRight className="w-5 h-5" />
          </button>
=======
            Join founders who are improving their funding success with data-driven, framework-based feedback.
          </p>
          <a
            href={STRIPE_BASIC_LINK}
            className="inline-block px-10 py-5 bg-white text-emerald-700 rounded-xl font-bold text-xl hover:bg-stone-50 transition-colors shadow-xl"
          >
            Get Started — $97
          </a>
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────────────── */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src="/logo-512.png" alt="VentureReady" className="w-8 h-8" />
                <span className="text-white font-bold text-lg">
                  VentureReady<span className="text-teal-400">.ai</span>
                </span>
              </div>
              <p className="text-sm leading-relaxed">
                AI-powered business evaluation for founders seeking investment success.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
<<<<<<< HEAD
                <li><Link href="/samples" className="hover:text-white transition-colors">Sample Evaluations</Link></li>
=======
                <li><a href="/samples" className="hover:text-white transition-colors">Sample Evaluations</a></li>
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:venture@ventureready.ai" className="hover:text-white transition-colors">Contact</a></li>
<<<<<<< HEAD
=======
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
<<<<<<< HEAD
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
=======
                <li><a href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/legal/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/legal/acceptable-use" className="hover:text-white transition-colors">Acceptable Use</a></li>
                <li><a href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="/legal/dmca" className="hover:text-white transition-colors">DMCA</a></li>
>>>>>>> 07f525a87255c62392d878aa3c43ae60b856ecc6
              </ul>
            </div>
          </div>
          <div className="border-t border-stone-800 pt-8 text-center text-sm">
            <p>&copy; 2026 VentureReady. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
