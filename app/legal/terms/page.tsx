import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service — VentureReady.ai",
  description: "The legal agreement between you and VentureReady.ai governing use of our services.",
};

export default function TermsPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
      <p className="text-stone-500 text-sm mb-10 pb-10 border-b border-stone-800">
        Last Updated: February 5, 2026
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Agreement to Terms</h2>
        <p className="text-stone-400 leading-relaxed">
          By accessing or using VentureReady ("we," "us," or "our"), you agree to be bound by these
          Terms of Service. If you do not agree, do not use our Services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Description of Services</h2>
        <p className="text-stone-400 leading-relaxed">
          VentureReady provides AI-powered evaluation and analysis of business documents including
          pitch decks, business plans, and fundraising materials. Our Services use artificial
          intelligence to provide feedback based on proven investment frameworks.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Eligibility</h2>
        <p className="text-stone-400 leading-relaxed">
          You must be at least 18 years old and have the legal capacity to enter into contracts
          to use our Services.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">User Accounts</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Account Creation</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>You must provide accurate and complete information</li>
          <li>You are responsible for maintaining account security</li>
          <li>You must notify us immediately of unauthorized access</li>
          <li>One person or entity per account</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Account Termination</h3>
        <p className="text-stone-400 leading-relaxed">
          We may suspend or terminate accounts that violate these Terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Use of Services</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Permitted Use</h3>
        <p className="text-stone-400 leading-relaxed mb-3">You may use VentureReady to:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Upload business documents for AI evaluation</li>
          <li>Receive feedback and analysis</li>
          <li>Access your evaluation history</li>
          <li>Use feedback to improve your business materials</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Prohibited Use</h3>
        <p className="text-stone-400 leading-relaxed mb-3">You may NOT:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Upload documents you don&apos;t have rights to</li>
          <li>Use the service for illegal purposes</li>
          <li>Attempt to reverse engineer our AI models</li>
          <li>Share your account credentials</li>
          <li>Upload malicious code or harmful content</li>
          <li>Violate intellectual property rights</li>
          <li>Misrepresent your identity or business</li>
          <li>Use automated tools to scrape our Services</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Intellectual Property</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Your Content</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>You retain ownership of documents you upload</li>
          <li>You grant us a license to process and analyze your content</li>
          <li>This license ends when you delete your content (subject to retention periods)</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Our Services</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>VentureReady owns all rights to the platform, AI models, and evaluation frameworks</li>
          <li>AI-generated feedback is provided to you for your use</li>
          <li>You may not redistribute or resell our evaluations</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">AI-Generated Content</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Nature of AI Evaluations</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Evaluations are generated by artificial intelligence</li>
          <li>Feedback is provided for informational purposes only</li>
          <li>Not a substitute for professional investment advice</li>
          <li>We do not guarantee accuracy or completeness</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">No Investment Advice</h3>
        <p className="text-stone-400 leading-relaxed mb-3">VentureReady does not provide:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Investment advice or recommendations</li>
          <li>Legal advice</li>
          <li>Accounting or tax advice</li>
          <li>Guarantees of funding success</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Payments and Subscriptions</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Pricing</h3>
        <p className="text-stone-400 leading-relaxed mb-6">
          Current pricing is available at{" "}
          <a href="/#pricing" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            ventureready.ai/#pricing
          </a>
        </p>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Payment Processing</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Payments processed through Stripe</li>
          <li>You authorize recurring charges for subscriptions</li>
          <li>Prices subject to change with notice</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Refund Policy</h3>
        <p className="text-stone-400 leading-relaxed mb-6">
          Please contact{" "}
          <a href="mailto:support@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            support@ventureready.ai
          </a>{" "}
          for refund requests. Refunds are evaluated on a case-by-case basis.
        </p>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Cancellation</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>You may cancel your subscription at any time</li>
          <li>Cancellation takes effect at end of current billing period</li>
          <li>No refunds for partial periods</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Disclaimer of Warranties</h2>
        <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
          <p className="text-stone-400 text-sm leading-relaxed uppercase tracking-wide">
            THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
            INCLUDING: MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT,
            ACCURACY OF AI EVALUATIONS, OR UNINTERRUPTED OR ERROR-FREE SERVICE.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Limitation of Liability</h2>
        <div className="bg-stone-900 rounded-xl p-5 border border-stone-800 mb-4">
          <p className="text-stone-400 text-sm leading-relaxed uppercase tracking-wide">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW: WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL,
            OR CONSEQUENTIAL DAMAGES. OUR TOTAL LIABILITY IS LIMITED TO THE AMOUNT YOU PAID IN
            THE LAST 12 MONTHS. WE ARE NOT LIABLE FOR BUSINESS LOSSES, LOST PROFITS, LOST
            OPPORTUNITIES, OR THIRD-PARTY ACTIONS.
          </p>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Indemnification</h2>
        <p className="text-stone-400 leading-relaxed">
          You agree to indemnify and hold VentureReady harmless from claims arising from your
          use of the Services, your violation of these Terms, your violation of third-party rights,
          or content you upload to our platform.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Privacy</h2>
        <p className="text-stone-400 leading-relaxed">
          Your use of our Services is subject to our{" "}
          <a href="/legal/privacy" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Privacy Policy
          </a>
          , which is incorporated into these Terms by reference.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Third-Party Services</h2>
        <p className="text-stone-400 leading-relaxed mb-3">Our Services integrate with third parties:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Anthropic (AI processing)</li>
          <li>Stripe (payments)</li>
          <li>Clerk (authentication)</li>
        </ul>
        <p className="text-stone-400 leading-relaxed mt-3">
          Your use of these services is subject to their respective terms.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Modifications to Services</h2>
        <p className="text-stone-400 leading-relaxed mb-3">We reserve the right to:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Modify or discontinue features</li>
          <li>Change pricing with notice</li>
          <li>Update these Terms (we&apos;ll notify you of material changes)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Termination</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          <strong className="text-stone-300">By You:</strong> You may delete your account at any time.
        </p>
        <p className="text-stone-400 leading-relaxed mb-3">
          <strong className="text-stone-300">By Us:</strong> We may terminate accounts that violate these Terms or for business reasons with notice.
        </p>
        <p className="text-stone-400 leading-relaxed">
          Upon termination, your access to the Services ends, we may delete your data subject to
          retention requirements, and outstanding payments remain due.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Dispute Resolution</h2>
        <p className="text-stone-400 leading-relaxed">
          These Terms are governed by the laws of [Your Jurisdiction]. Please contact us at{" "}
          <a href="mailto:legal@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            legal@ventureready.ai
          </a>{" "}
          before initiating any dispute.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Miscellaneous</h2>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li><strong className="text-stone-300">Entire Agreement:</strong> These Terms constitute the entire agreement between you and VentureReady.</li>
          <li><strong className="text-stone-300">Severability:</strong> If any provision is unenforceable, the remaining provisions remain in effect.</li>
          <li><strong className="text-stone-300">No Waiver:</strong> Our failure to enforce a right does not waive that right.</li>
          <li><strong className="text-stone-300">Assignment:</strong> You may not assign these Terms. We may assign them with notice.</li>
        </ul>
      </section>

      <section className="bg-stone-900 rounded-xl p-6 border border-stone-800">
        <h2 className="text-base font-semibold text-white mb-3">Contact Us</h2>
        <p className="text-stone-400 text-sm leading-relaxed mb-2">Questions about these Terms?</p>
        <p className="text-stone-400 text-sm">
          Email:{" "}
          <a href="mailto:legal@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            legal@ventureready.ai
          </a>
        </p>
      </section>
    </article>
  );
}
