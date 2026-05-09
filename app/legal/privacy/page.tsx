import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — VentureReady.ai",
  description: "How VentureReady.ai collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
      <p className="text-stone-500 text-sm mb-10 pb-10 border-b border-stone-800">
        Last Updated: February 5, 2026
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">About This Privacy Policy</h2>
        <p className="text-stone-400 leading-relaxed">
          This Privacy Policy describes how VentureReady ("we," "us," or "our") collects, uses, and shares
          information when you use our website and AI-powered business evaluation services (collectively,
          the "Services").
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Information We Collect</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Information You Provide</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li><strong className="text-stone-300">Account Information:</strong> Name, email address, company name when you create an account</li>
          <li><strong className="text-stone-300">Business Documents:</strong> Pitch decks, business plans, and other materials you upload for evaluation</li>
          <li><strong className="text-stone-300">Payment Information:</strong> Billing details processed through our payment provider (Stripe)</li>
          <li><strong className="text-stone-300">Communications:</strong> Messages you send to us via email or contact forms</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Automatically Collected Information</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li><strong className="text-stone-300">Usage Data:</strong> How you interact with our Services, pages visited, features used</li>
          <li><strong className="text-stone-300">Device Information:</strong> IP address, browser type, operating system, device identifiers</li>
          <li><strong className="text-stone-300">Cookies and Similar Technologies:</strong> We use cookies to improve your experience and analyze usage</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">How We Use Your Information</h2>
        <p className="text-stone-400 leading-relaxed mb-3">We use collected information to:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Provide AI-powered business evaluations and analysis</li>
          <li>Process payments and maintain your account</li>
          <li>Communicate with you about our Services</li>
          <li>Improve and develop new features</li>
          <li>Comply with legal obligations</li>
          <li>Prevent fraud and ensure security</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">AI Processing and Document Analysis</h2>
        <p className="text-stone-400 leading-relaxed mb-3">When you upload business documents:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Documents are processed using third-party AI services (Anthropic Claude API)</li>
          <li>We retain documents only as long as necessary to provide the service</li>
          <li>Your documents are not used to train AI models without your explicit consent</li>
          <li>Evaluations and feedback are generated using AI analysis</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Information Sharing</h2>
        <p className="text-stone-400 leading-relaxed mb-3">We may share your information with:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-4 ml-2">
          <li><strong className="text-stone-300">Service Providers:</strong> Including Anthropic (AI), Stripe (payments), Clerk (authentication)</li>
          <li><strong className="text-stone-300">Legal Requirements:</strong> When required by law or to protect our rights</li>
          <li><strong className="text-stone-300">Business Transfers:</strong> In connection with mergers, acquisitions, or asset sales</li>
        </ul>
        <p className="text-stone-400 leading-relaxed font-medium">We do not sell your personal information to third parties.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Data Retention</h2>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Account information: Retained while your account is active</li>
          <li>Business documents: 30 days after evaluation delivery</li>
          <li>Payment records: Retained as required by law (typically 7 years)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Your Rights</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          Depending on your location, you may have rights to:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-4 ml-2">
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Delete your account and data</li>
          <li>Object to certain processing</li>
          <li>Export your data</li>
          <li>Withdraw consent</li>
        </ul>
        <p className="text-stone-400 leading-relaxed">
          To exercise these rights, contact us at{" "}
          <a href="mailto:privacy@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            privacy@ventureready.ai
          </a>
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Security</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          We implement reasonable security measures to protect your information, including:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-4 ml-2">
          <li>Encryption of data in transit and at rest</li>
          <li>Access controls and authentication</li>
          <li>Regular security assessments</li>
        </ul>
        <p className="text-stone-400 leading-relaxed">However, no system is completely secure.</p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">International Data Transfers</h2>
        <p className="text-stone-400 leading-relaxed">
          Your information may be transferred to and processed in countries other than your own.
          We ensure appropriate safeguards are in place.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Children&apos;s Privacy</h2>
        <p className="text-stone-400 leading-relaxed">
          Our Services are not intended for individuals under 18. We do not knowingly collect
          information from children.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Cookie Policy</h2>
        <p className="text-stone-400 leading-relaxed mb-3">We use cookies for:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-4 ml-2">
          <li><strong className="text-stone-300">Essential Cookies:</strong> Required for authentication and security</li>
          <li><strong className="text-stone-300">Analytics Cookies:</strong> Help us understand how visitors use our Services</li>
          <li><strong className="text-stone-300">Preference Cookies:</strong> Remember your settings and preferences</li>
        </ul>
        <p className="text-stone-400 leading-relaxed">
          You can control cookies through your browser settings. See our{" "}
          <a href="/legal/cookies" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            Cookie Policy
          </a>{" "}
          for full details.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
        <p className="text-stone-400 leading-relaxed">
          We may update this Privacy Policy periodically. We will notify you of material changes
          via email or prominent notice on our website.
        </p>
      </section>

      <section className="bg-stone-900 rounded-xl p-6 border border-stone-800">
        <h2 className="text-base font-semibold text-white mb-3">Contact Us</h2>
        <p className="text-stone-400 text-sm leading-relaxed mb-2">
          For privacy-related questions or requests:
        </p>
        <p className="text-stone-400 text-sm">
          Email:{" "}
          <a href="mailto:privacy@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            privacy@ventureready.ai
          </a>
        </p>
      </section>
    </article>
  );
}
