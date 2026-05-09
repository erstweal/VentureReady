import Link from "next/link";

const legalLinks = [
  { href: "/legal/privacy", label: "Privacy Policy" },
  { href: "/legal/terms", label: "Terms of Service" },
  { href: "/legal/cookies", label: "Cookie Policy" },
  { href: "/legal/acceptable-use", label: "Acceptable Use" },
  { href: "/legal/disclaimer", label: "Disclaimer" },
  { href: "/legal/dmca", label: "DMCA Policy" },
];

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300">
      <header className="border-b border-stone-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="text-emerald-400 hover:text-emerald-300 text-sm transition-colors">
            ← Back to VentureReady.ai
          </Link>
          <span className="text-stone-500 text-sm">Legal</span>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-12 flex gap-16">
        <aside className="hidden lg:block w-52 shrink-0">
          <nav className="sticky top-8">
            <p className="text-xs font-semibold text-stone-500 uppercase tracking-wider mb-4">
              Documents
            </p>
            <ul className="space-y-0.5">
              {legalLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="block text-sm py-2 px-3 rounded-md text-stone-400 hover:bg-stone-800 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        <main className="flex-1 min-w-0 max-w-3xl">
          <div className="lg:hidden flex flex-wrap gap-2 mb-10">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs px-3 py-1.5 rounded-full bg-stone-800 text-stone-400 hover:bg-stone-700 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
          {children}
        </main>
      </div>
    </div>
  );
}
