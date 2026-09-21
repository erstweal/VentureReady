'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';

const STORAGE_KEY = 'vr-cookie-notice-dismissed';

// Non-modal cookie notice. Shown until dismissed; dismissal is remembered in
// localStorage. The server snapshot reports "dismissed" so nothing renders
// during SSR, which avoids a hydration mismatch.
function readDismissed(): boolean {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

function subscribe(onChange: () => void) {
  window.addEventListener('storage', onChange);
  return () => window.removeEventListener('storage', onChange);
}

export default function CookieNotice() {
  const storedDismissed = useSyncExternalStore(subscribe, readDismissed, () => true);
  const [dismissedNow, setDismissedNow] = useState(false);
  const visible = !storedDismissed && !dismissedNow;

  const dismiss = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Storage unavailable (private mode, blocked site data) — hide for this page view only.
    }
    setDismissedNow(true);
  };

  if (!visible) return null;

  return (
    <section
      aria-label="Cookie notice"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-stone-700 bg-stone-900 px-4 py-4 text-stone-100 shadow-lg"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed">
          We use cookies, including from Google, to analyze site usage and measure our advertising. See our{' '}
          <Link
            href="/legal/cookies"
            className="font-semibold text-emerald-300 underline underline-offset-2 hover:text-emerald-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
          >
            Cookie Policy
          </Link>{' '}
          for details and opt-out options.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="shrink-0 rounded-lg bg-emerald-700 px-5 py-2 text-sm font-semibold text-white hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
        >
          Got it
        </button>
      </div>
    </section>
  );
}
