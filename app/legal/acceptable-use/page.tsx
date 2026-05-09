import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acceptable Use Policy — VentureReady.ai",
  description: "Rules and guidelines for using the VentureReady.ai platform.",
};

export default function AcceptableUsePage() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-white mb-2">Acceptable Use Policy</h1>
      <p className="text-stone-500 text-sm mb-10 pb-10 border-b border-stone-800">
        Last Updated: February 5, 2026
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Purpose</h2>
        <p className="text-stone-400 leading-relaxed">
          This Acceptable Use Policy governs your use of VentureReady&apos;s Services. By using
          our platform, you agree to comply with this policy.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Permitted Uses</h2>
        <p className="text-stone-400 leading-relaxed mb-3">VentureReady is designed for:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Evaluating legitimate business documents and materials</li>
          <li>Receiving feedback on pitch decks and business plans</li>
          <li>Improving fundraising materials</li>
          <li>Learning about investor evaluation frameworks</li>
          <li>Professional business development purposes</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Prohibited Activities</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Illegal or Harmful Content</h3>
        <p className="text-stone-400 leading-relaxed mb-3">You may NOT upload or submit:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Content that violates any law or regulation</li>
          <li>Stolen or unauthorized business plans or documents</li>
          <li>Content that infringes intellectual property rights</li>
          <li>Malicious code, viruses, or malware</li>
          <li>Personally identifiable information of others without consent</li>
          <li>Content that promotes violence, hatred, or discrimination</li>
          <li>Fraudulent or deceptive materials</li>
          <li>Child exploitation material (we report violations to authorities)</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Abuse of Services</h3>
        <p className="text-stone-400 leading-relaxed mb-3">You may NOT:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Share your account with others</li>
          <li>Create multiple accounts to abuse free trials</li>
          <li>Use automated bots or scrapers</li>
          <li>Attempt to reverse engineer our AI models</li>
          <li>Overload our systems or interfere with service</li>
          <li>Circumvent usage limits or restrictions</li>
          <li>Resell or redistribute our evaluations</li>
          <li>Use the service for competitive intelligence gathering</li>
          <li>Submit documents in bad faith (spam, testing, etc.)</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Misrepresentation</h3>
        <p className="text-stone-400 leading-relaxed mb-3">You may NOT:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Falsely represent yourself or your business</li>
          <li>Impersonate another person or entity</li>
          <li>Provide false or misleading information</li>
          <li>Claim AI evaluations as human expert reviews</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Enforcement</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Violations</h3>
        <p className="text-stone-400 leading-relaxed mb-3">If you violate this policy, we may:</p>
        <ol className="list-decimal list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Issue a warning</li>
          <li>Temporarily suspend your account</li>
          <li>Permanently terminate your account</li>
          <li>Report illegal activity to authorities</li>
          <li>Pursue legal remedies</li>
        </ol>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Reporting Violations</h3>
        <p className="text-stone-400 leading-relaxed mb-3">
          To report violations, email{" "}
          <a href="mailto:abuse@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
            abuse@ventureready.ai
          </a>{" "}
          with:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Description of the violation</li>
          <li>Relevant account information</li>
          <li>Supporting evidence</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Content Moderation</h2>
        <p className="text-stone-400 leading-relaxed mb-3">We reserve the right to:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Review uploaded documents for compliance</li>
          <li>Remove content that violates this policy</li>
          <li>Refuse service to anyone for any reason</li>
        </ul>
        <p className="text-stone-400 leading-relaxed mt-3">
          We are not obligated to monitor all content but may do so.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">User Responsibility</h2>
        <p className="text-stone-400 leading-relaxed mb-3">You are responsible for:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>All content uploaded under your account</li>
          <li>Ensuring you have rights to submit documents</li>
          <li>Compliance with applicable laws</li>
          <li>Maintaining confidentiality of sensitive information</li>
          <li>Proper use of AI evaluations</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Intellectual Property</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Respecting Others&apos; Rights</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Do not upload copyrighted material without permission</li>
          <li>Respect trade secrets and confidential information</li>
          <li>Do not submit content you don&apos;t have rights to use</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Our Rights</h3>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>We own the VentureReady platform and evaluation frameworks</li>
          <li>AI-generated feedback is licensed to you for your use</li>
          <li>Do not copy, reproduce, or redistribute our proprietary methods</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Professional Standards</h2>
        <p className="text-stone-400 leading-relaxed mb-3">VentureReady users are expected to:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Use the service professionally and ethically</li>
          <li>Provide accurate information</li>
          <li>Respect the AI-generated nature of evaluations</li>
          <li>Not claim evaluations represent human expert opinions</li>
          <li>Use feedback for legitimate business purposes</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Consequences of Violations</h2>
        <div className="space-y-4">
          <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
            <h3 className="text-sm font-semibold text-stone-200 mb-1">First Violation</h3>
            <p className="text-stone-400 text-sm">Warning and removal of violating content</p>
          </div>
          <div className="bg-stone-900 rounded-xl p-4 border border-stone-800">
            <h3 className="text-sm font-semibold text-stone-200 mb-1">Repeated Violations</h3>
            <p className="text-stone-400 text-sm">Temporary account suspension</p>
          </div>
          <div className="bg-stone-900 rounded-xl p-4 border border-red-900/40">
            <h3 className="text-sm font-semibold text-red-400 mb-1">Serious Violations</h3>
            <p className="text-stone-400 text-sm">Immediate account termination, legal action if appropriate, and reporting to authorities for illegal activity</p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Appeals</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          If your account is suspended or terminated:
        </p>
        <ol className="list-decimal list-inside text-stone-400 space-y-2 ml-2">
          <li>
            Contact us at{" "}
            <a href="mailto:support@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              support@ventureready.ai
            </a>
          </li>
          <li>Explain why you believe the action was in error</li>
          <li>Provide relevant evidence</li>
          <li>We&apos;ll review and respond within 5 business days</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
        <p className="text-stone-400 leading-relaxed">
          We may update this Acceptable Use Policy at any time. Continued use of our Services
          after changes constitutes acceptance.
        </p>
      </section>

      <section className="bg-stone-900 rounded-xl p-6 border border-stone-800">
        <h2 className="text-base font-semibold text-white mb-3">Contact Us</h2>
        <div className="space-y-1 text-sm text-stone-400">
          <p>
            General inquiries:{" "}
            <a href="mailto:support@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              support@ventureready.ai
            </a>
          </p>
          <p>
            Abuse reports:{" "}
            <a href="mailto:abuse@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              abuse@ventureready.ai
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
