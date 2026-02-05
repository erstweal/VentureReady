import React, { useState } from 'react';
import { ArrowRight, FileText, TrendingUp, Target, Check, Menu, X, Briefcase } from 'lucide-react';

export default function VentureReadyLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-stone-50">
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
              <a href="#pricing" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">Pricing</a>
              <a href="#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors font-medium">How It Works</a>
              <button className="px-4 py-2 text-stone-600 hover:text-stone-900 font-medium transition-colors">
                Sign In
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
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
              <a href="#features" className="block text-stone-600 hover:text-stone-900 py-2">Features</a>
              <a href="#pricing" className="block text-stone-600 hover:text-stone-900 py-2">Pricing</a>
              <a href="#how-it-works" className="block text-stone-600 hover:text-stone-900 py-2">How It Works</a>
              <button className="w-full text-left py-2 text-stone-600 hover:text-stone-900">Sign In</button>
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
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

              {/* Email Capture Form */}
              <form 
                action="https://formspree.io/f/xbdknpjg" 
                method="POST"
                className="w-full max-w-xl"
              >
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                    className="flex-1 px-6 py-4 text-lg border-2 border-stone-300 rounded-lg focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all"
                  />
                  <button 
                    type="submit"
                    className="group px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <span>Get Started</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
                <p className="text-sm text-stone-500 mt-3 flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-1">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Results in 24 hours
                  </span>
                </p>
              </form>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900">500+</div>
                  <div className="text-sm text-stone-600">Businesses Evaluated</div>
                </div>
                <div className="h-12 w-px bg-stone-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900">92%</div>
                  <div className="text-sm text-stone-600">Funding Success Rate</div>
                </div>
                <div className="h-12 w-px bg-stone-300"></div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-stone-900">24hr</div>
                  <div className="text-sm text-stone-600">Average Turnaround</div>
                </div>
              </div>
            </div>

            <div className="relative">
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
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-stone-900">Competitive Analysis: Needs Work</div>
                      <div className="text-sm text-stone-600 mt-1">Consider adding more direct competitor comparisons</div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <div className="text-sm text-stone-500 mb-2">Overall Score</div>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1 bg-stone-200 rounded-full h-3">
                        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full" style={{width: '82%'}}></div>
                      </div>
                      <span className="text-2xl font-bold text-stone-900">82/100</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Everything You Need to Win Investors</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Comprehensive evaluation tools built on frameworks used by leading venture capital firms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center mb-6">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Pitch Deck Analysis</h3>
              <p className="text-stone-600 leading-relaxed">
                Get slide-by-slide feedback on structure, messaging, and visual design. Ensure every slide drives your story forward.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Business Plan Review</h3>
              <p className="text-stone-600 leading-relaxed">
                Validate your business model, revenue streams, and financial projections against industry benchmarks.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-stone-50 to-stone-100 border border-stone-200 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-stone-900 mb-3">Market Opportunity Assessment</h3>
              <p className="text-stone-600 leading-relaxed">
                Evaluate your TAM, SAM, and SOM calculations. Identify gaps in competitive analysis and positioning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6 bg-stone-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Simple, Fast, Effective</h2>
            <p className="text-xl text-stone-600">Get professional feedback in three easy steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="absolute top-0 left-8 text-8xl font-bold text-emerald-100 -z-10">1</div>
              <div className="pt-12">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">Upload Your Materials</h3>
                <p className="text-stone-600">
                  Securely upload your pitch deck, business plan, or executive summary. We support PDF, PowerPoint, and Word formats.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-8 text-8xl font-bold text-emerald-100 -z-10">2</div>
              <div className="pt-12">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">AI Analysis</h3>
                <p className="text-stone-600">
                  Our system evaluates your materials against proven frameworks, identifying strengths and opportunities for improvement.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-8 text-8xl font-bold text-emerald-100 -z-10">3</div>
              <div className="pt-12">
                <h3 className="text-2xl font-bold text-stone-900 mb-3">Get Actionable Feedback</h3>
                <p className="text-stone-600">
                  Receive detailed reports with specific recommendations, scoring, and next steps to strengthen your pitch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Choose Your Plan</h2>
            <p className="text-xl text-stone-600">Flexible pricing for founders at every stage</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Basic */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-emerald-300 transition-all">
              <div className="text-sm font-bold text-stone-600 uppercase tracking-wide mb-2">Basic</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-stone-900">$49</span>
                <span className="text-stone-600">/evaluation</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Single document evaluation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Overall scoring & feedback</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">24-hour turnaround</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">PDF report</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-stone-300 text-stone-900 rounded-lg font-semibold hover:bg-stone-50 transition-colors">
                Get Started
              </button>
            </div>

            {/* Premium - Featured */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white relative transform md:scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-stone-900 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                Most Popular
              </div>
              <div className="text-sm font-bold uppercase tracking-wide mb-2 opacity-90">Premium</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">$149</span>
                <span className="opacity-90">/month</span>
              </div>
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
                  <span>Detailed section-by-section analysis</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Competitive comparison</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span>Revision tracking</span>
                </li>
              </ul>
              <button className="w-full py-3 bg-white text-emerald-600 rounded-lg font-semibold hover:bg-stone-50 transition-colors">
                Start Free Trial
              </button>
            </div>

            {/* Enterprise */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-emerald-300 transition-all">
              <div className="text-sm font-bold text-stone-600 uppercase tracking-wide mb-2">Enterprise</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-stone-900">Custom</span>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Unlimited evaluations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Custom evaluation criteria</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Team collaboration</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">API access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-stone-700">Dedicated support</span>
                </li>
              </ul>
              <button className="w-full py-3 border-2 border-stone-300 text-stone-900 rounded-lg font-semibold hover:bg-stone-50 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Venture Ready?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join hundreds of founders who've improved their funding success with data-driven feedback.
          </p>
          
          {/* Email Capture Form */}
          <form 
            action="https://formspree.io/f/xbdknpjg" 
            method="POST"
            className="max-w-xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 text-lg rounded-lg focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all"
              />
              <button 
                type="submit"
                className="px-10 py-4 bg-white text-emerald-600 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all inline-flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                <span>Get Early Access</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
            <p className="text-emerald-100 text-sm mt-3">
              No credit card required • Join 500+ founders on the waitlist
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-900 text-stone-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-600 to-teal-700 rounded-lg flex items-center justify-center">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold text-white">VentureReady</span>
              </div>
              <p className="text-sm">
                AI-powered business evaluation for founders seeking investment success.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
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
