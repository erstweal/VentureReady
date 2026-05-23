import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  try {
    const post = await getPostBySlug(slug);
    return {
      title: `${post.title} - VentureReady.ai`,
      description: post.excerpt,
      alternates: { canonical: `/blog/${slug}` },
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `https://ventureready.ai/blog/${slug}`,
        siteName: 'VentureReady.ai',
        type: 'article',
        publishedTime: post.date,
      },
    };
  } catch {
    return { title: 'Post Not Found - VentureReady.ai' };
  }
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;

  let post;
  try {
    post = await getPostBySlug(slug);
  } catch {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <section className="pt-32 pb-12 px-6 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900 transition-colors mb-8 text-sm">
            Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-sm text-stone-500">{formattedDate}</span>
            {post.author && (
              <>
                <span className="text-stone-300">·</span>
                <span className="text-sm text-stone-500">{post.author}</span>
              </>
            )}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">{post.title}</h1>
          <p className="text-xl text-stone-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-stone prose-lg max-w-none prose-headings:font-bold prose-headings:text-stone-900 prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-stone-700 prose-p:leading-relaxed prose-strong:text-stone-900 prose-ul:text-stone-700 prose-a:text-emerald-700 prose-a:font-semibold prose-hr:border-stone-200"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Out Where Your Deck Stands?</h2>
          <p className="text-lg text-emerald-50 mb-8 max-w-xl mx-auto">
            Get slide-by-slide feedback against the VentureReady 15-slide investor framework - delivered in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/#pricing" className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold text-lg hover:bg-stone-50 transition-colors shadow-lg">
              See Pricing
            </a>
            <a href="/samples" className="px-8 py-4 bg-emerald-700 text-white rounded-xl font-bold text-lg border-2 border-emerald-400 hover:bg-emerald-800 transition-colors">
              View Sample Reports
            </a>
          </div>
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
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="/samples" className="hover:text-white transition-colors">Samples</a>
            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="text-sm">2026 VentureReady. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
