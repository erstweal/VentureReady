// components/Navbar.tsx
// Add this file to: C:\Users\glavi\ventureready\components\Navbar.tsx
// Then import it in any page that needs a nav

'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo-512.png" alt="VentureReady" className="w-9 h-9" />
            <span className="text-xl font-bold text-stone-900">
              VentureReady<span className="text-teal-500">.ai</span>
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#features" className="text-stone-600 hover:text-stone-900 transition-colors">Features</Link>
            <Link href="/samples" className="text-stone-600 hover:text-stone-900 transition-colors">Samples</Link>
            <Link href="/#pricing" className="text-stone-600 hover:text-stone-900 transition-colors">Pricing</Link>
            <Link href="/#how-it-works" className="text-stone-600 hover:text-stone-900 transition-colors">How It Works</Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/#pricing"
              className="px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold hover:from-emerald-700 hover:to-teal-800 transition-all"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 text-stone-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-3 space-y-3 border-t border-stone-200 mt-4">
            <Link href="/#features" className="block text-stone-600 hover:text-stone-900 py-2">Features</Link>
            <Link href="/samples" className="block text-stone-600 hover:text-stone-900 py-2">Samples</Link>
            <Link href="/#pricing" className="block text-stone-600 hover:text-stone-900 py-2">Pricing</Link>
            <Link href="/#how-it-works" className="block text-stone-600 hover:text-stone-900 py-2">How It Works</Link>
            <Link
              href="/#pricing"
              className="block w-full text-center px-6 py-2.5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-lg font-semibold"
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
