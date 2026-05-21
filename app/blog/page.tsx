import { getAllPosts } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - VentureReady.ai',
  description: 'Pitch deck strategy, fundraising tips, and investor insights for early-stage founders.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog - VentureReady.ai',
    description: 'Pitch deck strategy, fundraising tips, and investor insights for early-stage founders.',
    url: 'https://ventureready.ai/blog',
    siteName: 'VentureReady.ai',
    type: 'website',
  },
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <section className="pt-32 pb-16 px-6 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-emerald-900">Founder Resources</span>
          </div>
          <h1 className="text-5xl font-bold text-stone-900 mb-4">The VentureReady Blog</h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Pitch deck strategy, fundraising insights, and investor frameworks - written for founders who are serious about raising capital.
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-stone-500 py-20">No posts yet - check back soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.slug} className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-stone-500">
                      {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </span>
                    {post.author && (
                      <>
                        <span className="text-stone-300">·</span>
                        <span className="text-sm text-stone-500">{post.author}</span>
                      </>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold text-stone-900 mb-3 hover:text-emerald-700 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-6">{post.excerpt}</p>
                  <Link href={`/blog/${post.slug}`} className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900 transition-colors">
                    Read more
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Ready to Evaluate Your Deck?</h2>
          <p className="text-lg text-stone-600 mb-8">
            Get slide-by-slide feedback against the investor framework - delivered in 24 hours.
          </p>
          <a href="/#pricing" className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-800 transition-all shadow-lg shadow-emerald-200">
            See Pricing
          </a>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-512.png" alt="VentureReady" className="w-7 h-7" />
            <span className="text-white font-bold">VentureReady<span className="text-teal-400">.ai</span></span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/samples" className="hover:text-white transition-colors">Samples</a>
            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/legal/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-sm">2026 VentureReady. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
