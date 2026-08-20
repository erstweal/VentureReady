'use client';

import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function Home() {
  const basicPrice = 97;
  const roadmapPrice = 147;
  const fundmatchPrice = 127;

  const STRIPE_BASIC_LINK = "https://buy.stripe.com/eVqdRb4xz4aabyCaxE3oA03";
  // Note: the Growth Roadmap and Fund Match payment links live in the report-delivery
  // email (see delivery-email-template.md), not on the site — the cards here are
  // intentionally informational only, since both add-ons require a completed evaluation.

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a pitch deck evaluation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "A pitch deck evaluation is a structured review of your startup's pitch materials scored against the investor frameworks used by top VCs. You receive slide-by-slide feedback, a red-flag report, and a prioritized action plan — so you know exactly what to fix before you're in the room with investors.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the 15-slide investor framework?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The 15-slide framework is the standard pitch deck structure top-tier VCs use to evaluate startups. It covers: Title, Problem, Solution, Why Now, Market Size, Business Model, Traction, Go-to-Market, Competition, Team, Financials, Ask, Use of Funds, Roadmap, and Appendix. Our AI scores your deck against every section and flags what\'s missing or weak.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long does the evaluation take?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most evaluations are delivered within 24 hours of submission. Orders placed during business hours are often returned the same day.',
        },
      },
      {
        '@type': 'Question',
        name: 'What file formats do you accept?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We accept PDF, PowerPoint (.pptx), and Word (.docx) files up to 50MB. PDF is recommended since it\'s the format most investors request.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is VentureReady different from hiring a pitch coach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A pitch coach typically costs $300–$1,000/hour and takes weeks to schedule. VentureReady delivers the same depth of structured, investor-framework-based analysis in 24 hours for $97 — making it accessible to founders at any stage, not just those with large budgets.',
        },
      },
      {
        '@type': 'Question',
        name: "I'm pre-revenue. Is this still useful?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — many of our users are pre-revenue or pre-product. The evaluation adapts to your stage, flagging what investors need to see at the early stage and what assumptions need to be validated before you start fundraising.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is my pitch deck kept confidential?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Your materials are never shared with third parties. Your intellectual property, business information, and competitive strategy remain entirely yours.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will this guarantee I get funded?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "No evaluation can guarantee funding — investor decisions depend on many factors beyond the deck. What VentureReady does guarantee: you'll know exactly where your deck is strong, where it's weak, and how to improve it before investors see it.",
        },
      },
      {
        '@type': 'Question',
        name: 'How do I know if my pitch deck is investor ready?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An investor-ready pitch deck clearly communicates your problem, solution, market size, business model, traction, team, and ask — in that order, with no critical slides missing. Common signs a deck is not ready: a vague or missing Ask slide, financial projections disconnected from your GTM strategy, a competitive analysis that lists features instead of articulating a moat, and a team slide without founder-market fit. A VentureReady evaluation identifies every gap against the 15-slide investor framework before you are in the room.',
        },
      },
      {
        '@type': 'Question',
        name: 'What do investors look for in a seed stage pitch deck?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'At the seed stage, investors prioritize: a clearly defined problem with quantified customer pain, evidence of founder-market fit on the team slide, early traction signals even if pre-revenue (LOIs, pilots, waitlists, or strong user interviews), a specific and defensible beachhead market, a credible GTM strategy with channel logic, and a concrete Ask with use of funds tied to a milestone. The 15-slide investor framework VentureReady evaluates against is calibrated specifically to seed and angel-stage expectations.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does professional pitch deck feedback cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional pitch deck feedback typically costs $300–$1,000 per hour from a pitch coach or startup consultant, with most engagements running $1,500–$5,000 for a full review. VentureReady delivers institutional-quality, slide-by-slide pitch deck evaluation for $97 with 24-hour turnaround — making the same caliber of structured investor-framework analysis accessible to founders at any stage.',
        },
      },
      {
        '@type': 'Question',
        name: 'What are the VentureReady add-on reports?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'After your evaluation, two companion reports are available. The Growth Roadmap ($147) turns your evaluation findings into a specific 90-day action plan — customer discovery scripts, go-to-market phasing, and product sequencing. The Fund Match ($127) identifies the six actively-investing VC funds whose published investment thesis best fits your company, with the reasoning, check sizes, and a recommended approach sequence. Both are offered when your evaluation report is delivered.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I buy the Growth Roadmap or Fund Match without an evaluation?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No — both add-on reports are built directly from your evaluation findings, so they require a completed VentureReady evaluation first. The evaluation diagnoses where your pitch stands; the Growth Roadmap tells you what to do about it, and the Fund Match tells you who to pitch. Skipping the diagnosis would mean weaker recommendations, so we don\'t offer them standalone.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I get pitch deck feedback without hiring a pitch coach?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. VentureReady provides structured, investor-framework-based pitch deck feedback without the cost or scheduling friction of a pitch coach. You upload your deck, and within 24 hours you receive a full written report with slide-by-slide verdicts, red flag identification rated by severity, a competitive positioning analysis, and a recommended investor storyline arc. The written format means you can share it with your team and revisit it before every pitch meeting.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen bg-stone-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Navbar />

      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section id="main-content" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full">
                <span className="text-sm font-semibold text-emerald-900">AI-Powered Business Evaluation</span>
              </div>

              <h1
                className="text-5xl lg:text-6xl font-bold text-stone-900 leading-tight tracking-tight"
                aria-label="AI-Powered Pitch Deck Evaluation for Startup Founders"
              >
                <span aria-hidden="true">Get Your Business</span>
                <span aria-hidden="true" className="block mt-2 bg-gradient-to-r from-emerald-600 to-teal-700 bg-clip-text text-transparent">
                  Venture Ready
                </span>
              </h1>

              <p className="text-xl text-stone-600 leading-relaxed max-w-xl">
                Expert-level AI analysis of your pitch deck, business plan, and fundraising materials in minutes.
                Evaluated against proven frameworks used by top-tier investors.
              </p>

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
              </div>

              <a href="/samples" className="inline-block text-emerald-700 font-semibold hover:text-emerald-900 underline underline-offset-4">
                View sample evaluations →
              </a>
            </div>

            {/* Hero card */}
            <div className="relative">
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
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Professional Evaluation in Minutes</h2>
            <p className="text-xl text-stone-600 max-w-2xl mx-auto">
              Get the same quality feedback that costs thousands from consultants — powered by AI trained on investor frameworks.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
          </div>
        </div>
      </section>

      {/* ── How It Works ────────────────────────────────────────────── */}
      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">How It Works</h2>
            <p className="text-xl text-stone-600">Three simple steps to get professional feedback on your pitch</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { n: '1', title: 'Purchase & Upload', body: 'Complete payment and upload your pitch deck, business plan, or executive summary (PDF, PowerPoint, or Word).' },
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
          </div>
        </div>
      </section>

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
            <p className="text-xl text-stone-600">Start with the evaluation — add exactly what you need after</p>
          </div>

          {/* ── The Ladder ── */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-12 text-center">
            {[
              { step: 'Diagnose', body: 'The Evaluation finds every gap' },
              { step: 'Fix', body: 'The Growth Roadmap tells you what to do' },
              { step: 'Target', body: 'The Fund Match tells you who to pitch' },
            ].map((s, i) => (
              <div key={s.step} className="flex items-center gap-3 md:gap-6">
                <div className="px-5 py-3 bg-stone-50 border border-stone-200 rounded-xl">
                  <span className="font-bold text-emerald-700">{s.step}</span>
                  <span className="text-stone-600 text-sm block md:inline md:ml-2">{s.body}</span>
                </div>
                {i < 2 && <span className="text-stone-400 text-2xl rotate-90 md:rotate-0">→</span>}
              </div>
            ))}
          </div>

          {/* ── Pricing Cards ── */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">

            {/* Evaluation - Featured */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white relative transform lg:scale-105 shadow-2xl">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-stone-900 text-white text-xs font-bold rounded-full uppercase tracking-wide whitespace-nowrap">
                Start Here
              </div>
              <div className="text-sm font-bold uppercase tracking-wide mb-2 opacity-90">Evaluation</div>
              <div className="mb-6">
                <span className="text-5xl font-bold">${basicPrice}</span>
                <span className="opacity-90">/evaluation</span>
              </div>
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
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={STRIPE_BASIC_LINK}
                className="block w-full py-3 bg-white text-emerald-600 rounded-lg font-bold hover:bg-stone-50 transition-colors text-center"
              >
                Get Started
              </a>
            </div>

            {/* Growth Roadmap - Add-on */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-emerald-300 transition-all relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wide">
                Add-On
              </div>
              <div className="text-sm font-bold text-stone-600 uppercase tracking-wide mb-2">Growth Roadmap</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-stone-900">${roadmapPrice}</span>
                <span className="text-stone-600">/report</span>
              </div>
              <ul className="space-y-4 mb-8 mt-4">
                {[
                  'Your 90-day plan to investor-ready',
                  'Built from your evaluation findings',
                  'Customer discovery scripts & schedule',
                  'Beachhead go-to-market phasing',
                  'Product improvement sequencing',
                  'Ecosystem engagement plan',
                  'Milestone map to your raise',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-sm text-stone-500 border-t border-stone-100 pt-4">
                Offered with your completed evaluation
              </p>
            </div>

            {/* Fund Match - Add-on */}
            <div className="p-8 rounded-2xl border-2 border-stone-200 bg-white hover:border-emerald-300 transition-all relative">
              <div className="absolute -top-3 left-6 px-3 py-0.5 bg-amber-100 border border-amber-200 text-amber-800 text-xs font-bold rounded-full uppercase tracking-wide">
                Add-On
              </div>
              <div className="text-sm font-bold text-stone-600 uppercase tracking-wide mb-2">Fund Match</div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-stone-900">${fundmatchPrice}</span>
                <span className="text-stone-600">/report</span>
              </div>
              <ul className="space-y-4 mb-8 mt-4">
                {[
                  'The 6 funds that fit your startup',
                  'Matched from a verified database of actively-investing funds',
                  'Why-fit reasoning for each fund',
                  'Check sizes & lead behavior',
                  'Recommended approach sequence',
                  'Near-miss funds & what would change',
                  'Freshly verified before delivery',
                ].map((item) => (
                  <li key={item} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-center text-sm text-stone-500 border-t border-stone-100 pt-4">
                Offered with your completed evaluation
              </p>
            </div>

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
          </div>

          <p className="text-center text-stone-500 text-sm mt-8">
            The Growth Roadmap and Fund Match are built from your evaluation findings, so they become available
            once your evaluation is delivered — purchase links arrive with your report.{' '}
            <a href="mailto:venture@ventureready.ai" className="text-emerald-700 font-semibold hover:underline">
              Running an accelerator or cohort? Contact us for Enterprise pricing
            </a>
          </p>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────── */}
      <section id="faq" className="py-20 px-6 bg-stone-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-stone-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-stone-600">Everything founders ask before submitting their pitch deck</p>
          </div>
          <div className="space-y-5">
            {[
              {
                q: 'What is a pitch deck evaluation?',
                a: 'A pitch deck evaluation is a structured review of your startup\'s pitch materials scored against the investor frameworks used by top VCs. You receive slide-by-slide feedback, a red-flag report, and a prioritized action plan — so you know exactly what to fix before you\'re in the room with investors.',
              },
              {
                q: 'What is the 15-slide investor framework?',
                a: 'The 15-slide framework is the standard pitch deck structure top-tier VCs use to evaluate startups. It covers: Title, Problem, Solution, Why Now, Market Size, Business Model, Traction, Go-to-Market, Competition, Team, Financials, Ask, Use of Funds, Roadmap, and Appendix. Our AI scores your deck against every section and flags what\'s missing or weak.',
              },
              {
                q: 'How long does the evaluation take?',
                a: 'Most evaluations are delivered within 24 hours of submission. Orders placed during business hours are often returned the same day.',
              },
              {
                q: 'What file formats do you accept?',
                a: 'We accept PDF, PowerPoint (.pptx), and Word (.docx) files up to 50MB. PDF is recommended since it\'s the format most investors request.',
              },
              {
                q: 'How is VentureReady different from hiring a pitch coach?',
                a: 'A pitch coach typically costs $300–$1,000/hour and takes weeks to schedule. VentureReady delivers the same depth of structured, investor-framework-based analysis in 24 hours for $97 — making it accessible to founders at any stage, not just those with large budgets.',
              },
              {
                q: 'I\'m pre-revenue. Is this still useful?',
                a: 'Yes — many of our users are pre-revenue or pre-product. The evaluation adapts to your stage, flagging what investors need to see at the early stage and what assumptions need to be validated before you start fundraising.',
              },
              {
                q: 'Is my pitch deck kept confidential?',
                a: 'Absolutely. Your materials are never shared with third parties. Your intellectual property, business information, and competitive strategy remain entirely yours.',
              },
              {
                q: 'Will this guarantee I get funded?',
                a: 'No evaluation can guarantee funding — investor decisions depend on many factors beyond the deck. What VentureReady does guarantee: you\'ll know exactly where your deck is strong, where it\'s weak, and how to improve it before investors see it.',
              },
              {
                q: 'What are the add-on reports?',
                a: 'After your evaluation, two companion reports are available. The Growth Roadmap ($147) turns your evaluation findings into a specific 90-day action plan — customer discovery scripts, go-to-market phasing, and product sequencing. The Fund Match ($127) identifies the six actively-investing VC funds whose published thesis best fits your company, with the reasoning, check sizes, and a recommended approach sequence.',
              },
              {
                q: 'Can I buy the add-on reports without an evaluation?',
                a: 'No — both are built directly from your evaluation findings, so they require a completed evaluation first. The evaluation diagnoses where your pitch stands; the Growth Roadmap tells you what to do about it, and the Fund Match tells you who to pitch. Purchase links for both arrive with your evaluation report.',
              },
            ].map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-7 border border-stone-100 shadow-sm">
                <h3 className="text-lg font-bold text-stone-900 mb-3">{item.q}</h3>
                <p className="text-stone-600 leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA ───────────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Get Venture Ready?
          </h2>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Join founders who are improving their funding success with data-driven, framework-based feedback.
          </p>
          <a
            href={STRIPE_BASIC_LINK}
            className="inline-block px-10 py-5 bg-white text-emerald-700 rounded-xl font-bold text-xl hover:bg-stone-50 transition-colors shadow-xl"
          >
            Get Started — $97
          </a>
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
                <li><a href="/samples" className="hover:text-white transition-colors">Sample Evaluations</a></li>
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:venture@ventureready.ai" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/legal/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="/legal/cookies" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="/legal/acceptable-use" className="hover:text-white transition-colors">Acceptable Use</a></li>
                <li><a href="/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
                <li><a href="/legal/dmca" className="hover:text-white transition-colors">DMCA</a></li>
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
