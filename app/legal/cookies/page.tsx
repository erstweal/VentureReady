import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy — VentureReady.ai",
  description: "How VentureReady.ai uses cookies and similar tracking technologies.",
};

export default function CookiesPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-white mb-2">Cookie Policy</h1>
      <p className="text-stone-500 text-sm mb-10 pb-10 border-b border-stone-800">
        Last Updated: February 5, 2026
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">What Are Cookies?</h2>
        <p className="text-stone-400 leading-relaxed">
          Cookies are small text files placed on your device when you visit our website. They help
          us provide you with a better experience and understand how our Services are used.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">How We Use Cookies</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Essential Cookies (Always Active)</h3>
        <p className="text-stone-400 leading-relaxed mb-3">
          These cookies are necessary for the website to function:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li><strong className="text-stone-300">Authentication:</strong> Keep you logged into your account</li>
          <li><strong className="text-stone-300">Security:</strong> Prevent fraudulent activity and protect your account</li>
          <li><strong className="text-stone-300">Session Management:</strong> Remember your actions during a browsing session</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Analytics Cookies</h3>
        <p className="text-stone-400 leading-relaxed mb-3">
          Help us understand how visitors use our Services:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li><strong className="text-stone-300">Usage Patterns:</strong> Which pages are visited most</li>
          <li><strong className="text-stone-300">Performance Metrics:</strong> Loading times and errors</li>
          <li><strong className="text-stone-300">User Behavior:</strong> How users navigate our platform</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Preference Cookies</h3>
        <p className="text-stone-400 leading-relaxed mb-3">Remember your settings and choices:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li><strong className="text-stone-300">Display Settings:</strong> Theme preferences, layout choices</li>
          <li><strong className="text-stone-300">Notification Settings:</strong> Your communication preferences</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Third-Party Cookies</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          Some cookies are placed by third-party services we use:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li><strong className="text-stone-300">Clerk:</strong> Authentication and user management</li>
          <li><strong className="text-stone-300">Stripe:</strong> Payment processing</li>
          <li><strong className="text-stone-300">Vercel Analytics:</strong> Website performance and analytics</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Managing Cookies</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Browser Controls</h3>
        <p className="text-stone-400 leading-relaxed mb-3">
          You can control cookies through your browser settings:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li><strong className="text-stone-300">Chrome:</strong> Settings › Privacy and Security › Cookies</li>
          <li><strong className="text-stone-300">Firefox:</strong> Settings › Privacy & Security › Cookies and Site Data</li>
          <li><strong className="text-stone-300">Safari:</strong> Preferences › Privacy › Cookies and website data</li>
          <li><strong className="text-stone-300">Edge:</strong> Settings › Cookies and site permissions</li>
        </ul>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Impact of Disabling Cookies</h3>
        <p className="text-stone-400 leading-relaxed mb-3">If you disable cookies:</p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Essential features may not work properly</li>
          <li>You&apos;ll need to log in each visit</li>
          <li>Preferences won&apos;t be saved</li>
          <li>We won&apos;t be able to improve our Services based on your usage</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Cookie Reference</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Essential Cookies</h3>
        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm text-stone-400 border-collapse">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left py-3 pr-6 text-stone-300 font-medium">Purpose</th>
                <th className="text-left py-3 pr-6 text-stone-300 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-800">
                <td className="py-3 pr-6">Maintain login session</td>
                <td className="py-3">Session</td>
              </tr>
              <tr className="border-b border-stone-800">
                <td className="py-3 pr-6">Authentication token</td>
                <td className="py-3">30 days</td>
              </tr>
              <tr>
                <td className="py-3 pr-6">Security / CSRF protection</td>
                <td className="py-3">Session</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Analytics Cookies</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-stone-400 border-collapse">
            <thead>
              <tr className="border-b border-stone-700">
                <th className="text-left py-3 pr-6 text-stone-300 font-medium">Purpose</th>
                <th className="text-left py-3 pr-6 text-stone-300 font-medium">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-stone-800">
                <td className="py-3 pr-6">Vercel Analytics usage tracking</td>
                <td className="py-3">Session</td>
              </tr>
              <tr>
                <td className="py-3 pr-6">Speed Insights performance tracking</td>
                <td className="py-3">Session</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Do Not Track</h2>
        <p className="text-stone-400 leading-relaxed">
          Some browsers have a "Do Not Track" feature. We currently do not respond to Do Not Track
          signals as there is no industry standard for compliance.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Updates to This Policy</h2>
        <p className="text-stone-400 leading-relaxed">
          We may update this Cookie Policy. Changes will be posted on this page with an updated
          "Last Updated" date.
        </p>
      </section>

      <section className="bg-stone-900 rounded-xl p-6 border border-stone-800">
        <h2 className="text-base font-semibold text-white mb-3">Contact Us</h2>
        <p className="text-stone-400 text-sm leading-relaxed mb-2">
          Questions about our use of cookies?
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
