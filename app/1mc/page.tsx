"use client";

import { useState } from "react";
import Link from "next/link";

export default function OneMCPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [useful, setUseful] = useState<string | null>(null);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) {
      setError("Please enter your email address.");
      return;
    }
    if (!useful) {
      setError("Please let us know if VentureReady would be useful to you.");
      return;
    }
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("https://formspree.io/f/xbdknpjg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          useful,
          source: "1 Million Cups",
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or email us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#1A9E8F] focus:text-white focus:rounded-lg focus:font-semibold"
      >
        Skip to main content
      </a>
      <main id="main-content" className="min-h-screen bg-[#0D1B2A] flex flex-col items-center justify-center px-4 py-16">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1A9E8F] to-[#0D7A6E] flex items-center justify-center shadow-lg">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 14L7 10L10 13L14 7L17 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className="text-white text-2xl font-bold tracking-tight">VentureReady<span className="text-[#1A9E8F]">.ai</span></span>
      </div>

      <div className="w-full max-w-lg">
        {!submitted ? (
          <div className="bg-[#162232] rounded-2xl border border-white/10 px-8 py-10 shadow-2xl">
            {/* Header */}
            <div className="mb-8">
              <p className="text-[#1A9E8F] text-sm font-semibold uppercase tracking-widest mb-3">
                1 Million Cups — Ann Arbor
              </p>
              <h1 className="text-white text-3xl font-bold leading-tight mb-3">
                Thanks for stopping by today.
              </h1>
              <p className="text-white/60 text-base leading-relaxed">
                VentureReady evaluates your pitch deck against the same 15-slide framework that top investors use — and delivers a structured report in 24 hours. Drop your email below and let us know what you think.
              </p>
            </div>

            <form onSubmit={handleSubmit} noValidate>
              {/* Email */}
              <div className="mb-5">
                <label className="block text-white/80 text-sm font-medium mb-2" htmlFor="email">
                  Your email address
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="founder@startup.com"
                  autoComplete="email"
                  aria-required="true"
                  aria-describedby={error ? 'form-error' : undefined}
                  className="w-full bg-[#0D1B2A] border border-white/15 rounded-lg px-4 py-3 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#1A9E8F] focus:ring-1 focus:ring-[#1A9E8F] transition-all"
                />
              </div>

              {/* Usefulness question */}
              <div className="mb-7">
                <p id="useful-label" className="text-white/80 text-sm font-medium mb-3">
                  Is this something you&apos;d find useful?
                </p>
                <div className="grid grid-cols-1 gap-2" role="group" aria-labelledby="useful-label">
                  {[
                    { value: "yes_ready", label: "Yes — I'm actively working on a pitch" },
                    { value: "yes_future", label: "Yes — I could see using this in the future" },
                    { value: "not_sure", label: "Not sure yet, still exploring the idea" },
                    { value: "no", label: "Not for me right now" },
                  ].map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => setUseful(option.value)}
                      aria-pressed={useful === option.value}
                      className={`w-full text-left px-4 py-3 rounded-lg text-sm border transition-all ${
                        useful === option.value
                          ? "bg-[#1A9E8F]/15 border-[#1A9E8F] text-white"
                          : "bg-[#0D1B2A] border-white/15 text-white/60 hover:border-white/30 hover:text-white/80"
                      }`}
                    >
                      <span
                        aria-hidden="true"
                        className={`inline-block w-4 h-4 rounded-full border mr-3 align-middle transition-all ${
                          useful === option.value
                            ? "border-[#1A9E8F] bg-[#1A9E8F]"
                            : "border-white/30"
                        }`}
                      />
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {error && (
                <p id="form-error" role="alert" className="text-red-400 text-sm mb-4">{error}</p>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-[#1A9E8F] to-[#0D7A6E] text-white font-semibold rounded-lg py-3.5 text-sm hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {submitting ? "Submitting..." : "Send it →"}
              </button>
            </form>

            {/* Samples link */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-white/40 text-sm mb-2">Want to see what a report looks like first?</p>
              <Link
                href="/samples"
                className="text-[#1A9E8F] text-sm font-medium hover:text-[#22C9B7] transition-colors"
              >
                View sample evaluations →
              </Link>
            </div>
          </div>
        ) : (
          // Thank you state
          <div className="bg-[#162232] rounded-2xl border border-white/10 px-8 py-12 shadow-2xl text-center">
            <div className="w-16 h-16 rounded-full bg-[#1A9E8F]/20 flex items-center justify-center mx-auto mb-6">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M5 14L11 20L23 8" stroke="#1A9E8F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h1 className="text-white text-2xl font-bold mb-3">You&apos;re on the list.</h1>
            <p className="text-white/60 text-base leading-relaxed mb-8">
              Thanks for your interest in VentureReady. We&apos;ll be in touch soon — and if you have a deck ready to evaluate, just reply to our email and we&apos;ll get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/samples"
                className="px-6 py-2.5 bg-[#1A9E8F]/15 text-[#1A9E8F] border border-[#1A9E8F]/30 rounded-lg text-sm font-medium hover:bg-[#1A9E8F]/25 transition-all"
              >
                View sample reports
              </Link>
              <Link
                href="/"
                className="px-6 py-2.5 bg-white/5 text-white/70 border border-white/10 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
              >
                Back to home
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <p className="mt-8 text-white/20 text-xs text-center">
        © 2026 VentureReady.ai · We respect your inbox.
      </p>
    </main>
    </>
  );
}
