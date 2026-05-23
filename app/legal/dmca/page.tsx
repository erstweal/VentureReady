import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DMCA Policy — VentureReady.ai",
  description: "VentureReady.ai's procedures for responding to copyright infringement claims under the DMCA.",
};

export default function DmcaPage() {
  return (
    <article>
      <h1 className="text-3xl font-bold text-white mb-2">DMCA Copyright Policy</h1>
      <p className="text-stone-500 text-sm mb-10 pb-10 border-b border-stone-800">
        Last Updated: February 5, 2026
      </p>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Digital Millennium Copyright Act Notice</h2>
        <p className="text-stone-400 leading-relaxed">
          VentureReady respects the intellectual property rights of others and expects users to do
          the same. This policy outlines our procedures for responding to copyright infringement
          claims under the Digital Millennium Copyright Act ("DMCA").
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Copyright Infringement Notification</h2>
        <p className="text-stone-400 leading-relaxed mb-4">
          If you believe content on VentureReady infringes your copyright, please provide our
          Designated Copyright Agent with the following information:
        </p>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Required Information</h3>
        <ol className="list-decimal list-inside text-stone-400 space-y-3 mb-8 ml-2">
          <li><strong className="text-stone-300">Identification of copyrighted work:</strong> Describe the work you believe has been infringed, or if multiple works, a representative list</li>
          <li><strong className="text-stone-300">Identification of infringing material:</strong> Provide specific URLs or descriptions of where the infringing material is located on our Services</li>
          <li><strong className="text-stone-300">Contact information:</strong> Your name, address, telephone number, and email address</li>
          <li><strong className="text-stone-300">Good faith statement:</strong> A statement that you have a good faith belief that use of the material is not authorized by the copyright owner, its agent, or the law</li>
          <li><strong className="text-stone-300">Accuracy statement:</strong> A statement that the information in your notice is accurate</li>
          <li><strong className="text-stone-300">Authority statement:</strong> A statement, under penalty of perjury, that you are authorized to act on behalf of the copyright owner</li>
          <li><strong className="text-stone-300">Signature:</strong> Your physical or electronic signature</li>
        </ol>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Where to Send Notice</h3>
        <div className="bg-stone-900 rounded-xl p-5 border border-stone-800">
          <p className="text-stone-300 text-sm font-medium mb-2">Designated Copyright Agent</p>
          <div className="text-stone-400 text-sm space-y-1">
            <p>VentureReady</p>
            <p>Attn: DMCA Copyright Agent</p>
            <p>PO Box 530031, Livonia, MI 48153-0031</p>
            <p>
              Email:{" "}
              <a href="mailto:dmca@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                dmca@ventureready.ai
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Counter-Notification</h2>
        <p className="text-stone-400 leading-relaxed mb-4">
          If your content was removed due to a DMCA notice and you believe the removal was in
          error, you may file a counter-notification.
        </p>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Counter-Notification Requirements</h3>
        <p className="text-stone-400 leading-relaxed mb-3">Your counter-notification must include:</p>
        <ol className="list-decimal list-inside text-stone-400 space-y-3 mb-6 ml-2">
          <li><strong className="text-stone-300">Your contact information:</strong> Name, address, phone number, and email</li>
          <li><strong className="text-stone-300">Identification of removed content:</strong> Description and location of the material before removal</li>
          <li><strong className="text-stone-300">Good faith statement:</strong> A statement under penalty of perjury that you have a good faith belief the material was removed by mistake or misidentification</li>
          <li><strong className="text-stone-300">Consent to jurisdiction:</strong> A statement consenting to jurisdiction of Federal District Court for your address (or the district in which VentureReady is located if you&apos;re outside the US)</li>
          <li><strong className="text-stone-300">Service acceptance:</strong> A statement that you accept service of process from the person who filed the original DMCA notice</li>
          <li><strong className="text-stone-300">Signature:</strong> Your physical or electronic signature</li>
        </ol>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Counter-Notification Process</h3>
        <ol className="list-decimal list-inside text-stone-400 space-y-2 ml-2">
          <li>Send counter-notification to our Copyright Agent (address above)</li>
          <li>We&apos;ll forward your counter-notification to the original complainant</li>
          <li>If they don&apos;t file a court action within 10–14 business days, we may restore the content</li>
        </ol>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Our Response Process</h2>

        <h3 className="text-base font-semibold text-stone-200 mb-3">Upon Receiving a Valid DMCA Notice</h3>
        <p className="text-stone-400 leading-relaxed mb-3">We will:</p>
        <ol className="list-decimal list-inside text-stone-400 space-y-2 mb-6 ml-2">
          <li>Remove or disable access to the allegedly infringing material</li>
          <li>Notify the user who posted the material</li>
          <li>Terminate accounts of repeat infringers</li>
        </ol>

        <p className="text-stone-400 leading-relaxed">
          We may review the claim to determine if it meets DMCA requirements. Invalid or incomplete
          notices may be rejected.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Repeat Infringer Policy</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          We will terminate user accounts of repeat copyright infringers in appropriate circumstances, including:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Multiple valid DMCA notices against the same account</li>
          <li>Repeated posting of infringing material</li>
          <li>Ignoring warnings about copyright infringement</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Misrepresentation</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          Making false claims in a DMCA notice or counter-notification may result in:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Liability for damages (including costs and attorney fees)</li>
          <li>Criminal prosecution</li>
          <li>Account termination</li>
        </ul>
        <p className="text-stone-400 leading-relaxed mt-4">
          Under 17 U.S.C. § 512(f), anyone who knowingly materially misrepresents that material is
          infringing, or that material was removed by mistake, may be liable for damages.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Fair Use Consideration</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          Before filing a DMCA notice, please consider whether the use might be "fair use" under
          copyright law. Fair use factors include:
        </p>
        <ol className="list-decimal list-inside text-stone-400 space-y-2 ml-2">
          <li>Purpose and character of use</li>
          <li>Nature of the copyrighted work</li>
          <li>Amount used relative to the whole</li>
          <li>Effect on the market for the original work</li>
        </ol>
        <p className="text-stone-400 leading-relaxed mt-4">
          VentureReady is not the arbiter of fair use disputes. If there&apos;s a dispute, parties
          must resolve it between themselves or in court.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Safe Harbor</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          VentureReady qualifies for DMCA safe harbor protections as a service provider under
          17 U.S.C. § 512(c). We:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>Do not have actual knowledge of infringing activity</li>
          <li>Do not receive financial benefit directly from infringing activity</li>
          <li>Respond expeditiously to proper DMCA notices</li>
          <li>Have a repeat infringer policy</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Non-Copyright Complaints</h2>
        <p className="text-stone-400 leading-relaxed mb-3">
          This policy applies only to copyright infringement under the DMCA. For other complaints:
        </p>
        <ul className="list-disc list-inside text-stone-400 space-y-2 ml-2">
          <li>
            <strong className="text-stone-300">Trademark issues:</strong>{" "}
            <a href="mailto:legal@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              legal@ventureready.ai
            </a>
          </li>
          <li>
            <strong className="text-stone-300">Privacy concerns:</strong> See our{" "}
            <a href="/legal/privacy" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Privacy Policy
            </a>
          </li>
          <li>
            <strong className="text-stone-300">Terms of Service violations:</strong>{" "}
            <a href="mailto:support@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              support@ventureready.ai
            </a>
          </li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">International Considerations</h2>
        <p className="text-stone-400 leading-relaxed">
          The DMCA is a U.S. law. Users from other countries should be aware that different
          copyright laws may apply in your jurisdiction. Our DMCA process follows U.S. law. You
          may have additional rights or obligations under local law.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-xl font-semibold text-white mb-4">Changes to This Policy</h2>
        <p className="text-stone-400 leading-relaxed">
          We may update this DMCA Policy at any time. Changes will be posted on this page with
          an updated "Last Updated" date.
        </p>
      </section>

      <section className="bg-stone-900 rounded-xl p-6 border border-stone-800">
        <h2 className="text-base font-semibold text-white mb-3">Contact Information</h2>
        <div className="space-y-2 text-sm text-stone-400">
          <p>
            DMCA Notices:{" "}
            <a href="mailto:dmca@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              dmca@ventureready.ai
            </a>
          </p>
          <p>
            General Legal:{" "}
            <a href="mailto:legal@ventureready.ai" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              legal@ventureready.ai
            </a>
          </p>
        </div>
      </section>
    </article>
  );
}
