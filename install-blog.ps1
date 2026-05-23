# VentureReady Blog Installer
# Run from: C:\Users\glavi\ventureready
# Usage: .\install-blog.ps1

$root = "C:\Users\glavi\ventureready"
Write-Host "Creating VentureReady blog structure..." -ForegroundColor Cyan

# Create directories
New-Item -ItemType Directory -Force -Path "$root\lib" | Out-Null
New-Item -ItemType Directory -Force -Path "$root\app\blog" | Out-Null
New-Item -ItemType Directory -Force -Path "$root\app\blog\[slug]" | Out-Null
New-Item -ItemType Directory -Force -Path "$root\content\posts" | Out-Null
Write-Host "  Directories created" -ForegroundColor Green

# ─── lib/posts.ts ───────────────────────────────────────────────────────────
Set-Content -Path "$root\lib\posts.ts" -Encoding UTF8 -Value @'
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author?: string;
}

export interface Post extends PostMeta {
  contentHtml: string;
}

export function getAllPostSlugs(): { slug: string }[] {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => ({ slug: fileName.replace(/\.md$/, '') }));
}

export function getAllPosts(): PostMeta[] {
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames
    .filter((f) => f.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
        author: data.author as string | undefined,
      };
    });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    author: data.author as string | undefined,
    contentHtml,
  };
}
'@
Write-Host "  lib/posts.ts created" -ForegroundColor Green

# ─── app/blog/page.tsx ───────────────────────────────────────────────────────
Set-Content -Path "$root\app\blog\page.tsx" -Encoding UTF8 -Value @'
import { getAllPosts } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog — VentureReady.ai',
  description: 'Pitch deck strategy, fundraising tips, and investor insights for early-stage founders.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog — VentureReady.ai',
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

      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-white border-b border-stone-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1.5 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
            <span className="text-sm font-semibold text-emerald-900">Founder Resources</span>
          </div>
          <h1 className="text-5xl font-bold text-stone-900 mb-4">
            The VentureReady Blog
          </h1>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Pitch deck strategy, fundraising insights, and investor frameworks — written for founders who are serious about raising capital.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-stone-500 py-20">No posts yet — check back soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white rounded-2xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow p-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm text-stone-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
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
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900 transition-colors"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-emerald-50 border-t border-emerald-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-stone-900 mb-4">Ready to Evaluate Your Deck?</h2>
          <p className="text-lg text-stone-600 mb-8">
            Get slide-by-slide feedback against the investor framework — delivered in 24 hours.
          </p>
          <a
            href="/#pricing"
            className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-teal-800 transition-all shadow-lg shadow-emerald-200"
          >
            See Pricing →
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-512.png" alt="VentureReady" className="w-7 h-7" />
            <span className="text-white font-bold">
              VentureReady<span className="text-teal-400">.ai</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/samples" className="hover:text-white transition-colors">Samples</a>
            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy</a>
            <a href="/legal/terms" className="hover:text-white transition-colors">Terms</a>
          </div>
          <p className="text-sm">&copy; 2026 VentureReady. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
'@
Write-Host "  app/blog/page.tsx created" -ForegroundColor Green

# ─── app/blog/[slug]/page.tsx ────────────────────────────────────────────────
Set-Content -Path "$root\app\blog\[slug]\page.tsx" -Encoding UTF8 -Value @'
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
      title: `${post.title} — VentureReady.ai`,
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
    return { title: 'Post Not Found — VentureReady.ai' };
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

      {/* Article Header */}
      <section className="pt-32 pb-12 px-6 bg-white border-b border-stone-100">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-emerald-700 font-semibold hover:text-emerald-900 transition-colors mb-8 text-sm"
          >
            ← Back to Blog
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
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-xl text-stone-600 leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div
            className="prose prose-stone prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-stone-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
              prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
              prose-p:text-stone-700 prose-p:leading-relaxed
              prose-strong:text-stone-900
              prose-ul:text-stone-700 prose-li:marker:text-emerald-500
              prose-a:text-emerald-700 prose-a:font-semibold hover:prose-a:text-emerald-900
              prose-hr:border-stone-200"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Find Out Where Your Deck Stands?
          </h2>
          <p className="text-lg text-emerald-50 mb-8 max-w-xl mx-auto">
            Get slide-by-slide feedback against the VentureReady 15-slide investor framework — delivered in 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#pricing"
              className="px-8 py-4 bg-white text-emerald-700 rounded-xl font-bold text-lg hover:bg-stone-50 transition-colors shadow-lg"
            >
              See Pricing →
            </a>
            <a
              href="/samples"
              className="px-8 py-4 bg-emerald-700 text-white rounded-xl font-bold text-lg border-2 border-emerald-400 hover:bg-emerald-800 transition-colors"
            >
              View Sample Reports
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo-512.png" alt="VentureReady" className="w-7 h-7" />
            <span className="text-white font-bold">
              VentureReady<span className="text-teal-400">.ai</span>
            </span>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <a href="/blog" className="hover:text-white transition-colors">Blog</a>
            <a href="/samples" className="hover:text-white transition-colors">Samples</a>
            <a href="/#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="/legal/privacy" className="hover:text-white transition-colors">Privacy</a>
          </div>
          <p className="text-sm">&copy; 2026 VentureReady. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
'@
Write-Host "  app/blog/[slug]/page.tsx created" -ForegroundColor Green

# ─── content/posts/why-pitch-decks-get-rejected.md ──────────────────────────
Set-Content -Path "$root\content\posts\why-pitch-decks-get-rejected.md" -Encoding UTF8 -Value @'
---
title: "Why Most Pitch Decks Get Rejected Before Slide 10 (And How to Fix It)"
date: "2026-05-20"
excerpt: "After evaluating hundreds of pitch decks, we see the same three gaps killing otherwise fundable companies. Here's what they are and how to fix them."
author: "VentureReady.ai"
---

You spent weeks building your pitch deck. The product is real. The market opportunity is massive. The team is strong. And yet — silence. No follow-up meeting. No term sheet. Just a polite pass and a vague "not the right fit for us right now."

Here's the uncomfortable truth: most pitch decks don't get rejected because the business is bad. They get rejected because the deck fails to answer the questions investors are silently asking — often before you even reach the halfway point.

After evaluating hundreds of pitch decks across medtech, SaaS, cleantech, PropTech, consumer, and hardware, we see the same gaps over and over. Three of them account for the majority of rejections from otherwise fundable companies.

## The Three Slides That Kill Most Decks

### 1. The Ask Slide Is Missing (or Buried)

This is the single most common — and most damaging — omission we see. Founders build a compelling story about the problem, the solution, the market, the team. And then the deck just... ends.

No Ask slide. No raise amount. No use of funds.

Investors are not buying a story. They are evaluating a specific financial transaction: you are asking them to write a check for a defined amount in exchange for equity. If you don't tell them what you're asking for, they have no transaction to evaluate.

**What investors need to see on your Ask slide:**

- The raise amount (e.g., "We are raising $2.5M")
- The instrument (SAFE, convertible note, priced round)
- The valuation cap or pre-money valuation
- Use of funds broken down by category (hiring, product, marketing, runway)
- The milestone this raise gets you to ("18 months of runway to $1M ARR")

A missing Ask slide doesn't read as humility. It reads as unpreparedness.

### 2. Financial Projections Are Absent or Unbelievable

Founders either skip financials entirely ("we're pre-revenue, so we don't have projections yet") or present hockey-stick numbers with no underlying logic. Both are equally damaging.

If you skip financials entirely, you signal that you haven't thought rigorously about unit economics, customer acquisition cost, or the path to profitability. Every investor is trying to model whether they can get a 10x return. You've just made that impossible.

If you present projections without assumptions, investors won't believe the numbers — and they'll wonder what else in the deck is unsupported. "We'll reach $50M ARR by Year 3" means nothing without explaining how many customers that requires, at what price point, through what channels, at what acquisition cost.

**What good financial projections look like:**

- 3-5 year revenue model (even pre-revenue companies can model this)
- Key assumptions spelled out: average contract value, conversion rates, headcount ramp
- Unit economics: CAC, LTV, LTV:CAC ratio, payback period
- A clear path to profitability or the conditions under which you'd be cash-flow positive

You don't need a CFO-level model. You need a defensible story told in numbers.

### 3. The Go-To-Market Slide Is Vague or Missing

"We'll use social media and word of mouth."

We see this constantly. It's the pitch deck equivalent of "we'll figure it out." Investors have seen a thousand companies fail not because the product was bad, but because the founders couldn't find customers efficiently.

Your Go-To-Market (GTM) slide answers one critical question: *How will you find, contact, and close customers at a cost that makes economic sense?*

Vague answers here are a red flag because they suggest the founder is product-focused but not commercially oriented — a very common early-stage failure mode.

**What investors want to see in a GTM slide:**

- **Channels**: Specific channels (outbound sales, partnerships, content/SEO, paid acquisition, events) with reasoning for why these channels reach your buyer
- **ICP**: Ideal Customer Profile — who exactly is your first customer, and why them first?
- **Sales motion**: Is this a self-serve product, a transactional sale, or an enterprise deal? What's the cycle length?
- **CAC estimate**: Even a rough estimate shows you've thought about acquisition economics
- **Beachhead market**: What's the specific segment you're winning first before expanding?

The best GTM slides tell investors: "Here's exactly who we're selling to, here's how we reach them, here's what it costs to acquire one, and here's why we can build an unfair advantage in this channel."

## The Pattern Behind the Pattern

What's striking about these three gaps is what they have in common: they're all **commercial** slides, not product slides.

Most founders are deeply comfortable talking about what they're building. They're less comfortable — or less practiced — at articulating the business mechanics: how much money they need, how they'll make money, and how they'll find customers.

Investors, almost by definition, are evaluating the business mechanics. They're not buying a product. They're buying a future outcome.

When your deck has a great Problem slide, a great Solution slide, and a great Team slide — but is missing the Ask, the Financials, and the GTM — what investors hear is: *this founder hasn't fully made the mental transition from builder to CEO.*

## How to Know Where Your Deck Stands

The fastest way to find out which of these gaps your deck has is to have it evaluated against a structured investor framework — the same kind top-tier investors use to screen deals.

At VentureReady.ai, we evaluate every pitch deck against our 15-slide investor framework, identifying exactly which slides are investor-ready, which need strengthening, and which are missing entirely. You get a detailed, prioritized report within 24 hours — the same quality of feedback that used to require a $500/hour consultant.

If you're preparing to fundraise, the single best investment you can make is knowing where your deck is weak before you're in the room with investors.

[**Get Your Pitch Deck Evaluated**](/#pricing)
'@
Write-Host "  content/posts/why-pitch-decks-get-rejected.md created" -ForegroundColor Green

# ─── content/posts/pitch-deck-checklist.md ──────────────────────────────────
Set-Content -Path "$root\content\posts\pitch-deck-checklist.md" -Encoding UTF8 -Value @'
---
title: "The 5-Minute Pitch Deck Self-Check Every Founder Should Do Before Sending"
date: "2026-05-15"
excerpt: "A quick five-minute review covering the most common gaps that cause pitch decks to get passed on — before you hit send."
author: "VentureReady.ai"
---

You're about to send your pitch deck to an investor. Before you hit send, run through this checklist. It takes five minutes and will catch the gaps that cause most decks to get passed on.

## 1. Does your deck have an Ask slide?

Not implied. Not buried in the financials. An actual slide that says:

- How much you're raising
- What instrument (SAFE, convertible note, priced round)
- What you'll spend it on
- What milestone it gets you to

If the answer is no, stop here and build it before sending.

## 2. Can a stranger understand what you do in 10 seconds?

Hand your Title slide to someone who has never heard of your company. Ask them to describe what the business does. If they can't, your tagline isn't working.

Investors see hundreds of decks. If your opening slide doesn't immediately communicate what you do and for whom, you've already lost the room.

## 3. Do your financial projections show the math?

Revenue projections without assumptions aren't projections — they're wishes. Your numbers need to connect to real inputs: number of customers, average contract value, conversion rate, headcount.

If you can't show the math, investors won't believe the output. Worse, they'll wonder what else in the deck isn't backed up.

## 4. Is your Go-To-Market slide specific?

"Social media and word of mouth" is not a go-to-market strategy. Your GTM slide should name:

- The specific customer segment you're targeting first
- The specific channel you'll use to reach them
- Why that channel works for this buyer

Vague GTM is one of the most common reasons investors pass on otherwise strong decks. It signals a founder who is product-focused but hasn't thought rigorously about customer acquisition.

## 5. Does every slide answer an investor question?

Investors move through a deck asking silent questions: *Is the problem real? Is the market big enough? Can this team execute? How do I make money?*

Read through your deck and ask whether each slide answers a question an investor would actually have — or whether it's there because it felt important to you as a founder. If you can't identify the investor question a slide answers, cut it or reframe it.

---

These five checks won't guarantee a yes. But they'll make sure you're not getting passed on for reasons that have nothing to do with whether your business is fundable.
'@
Write-Host "  content/posts/pitch-deck-checklist.md created" -ForegroundColor Green

# ─── next.config.ts ──────────────────────────────────────────────────────────
Set-Content -Path "$root\next.config.ts" -Encoding UTF8 -Value @'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
'@
Write-Host "  next.config.ts reset (Hashnode rewrite removed)" -ForegroundColor Green

Write-Host ""
Write-Host "All files installed successfully!" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Add @tailwindcss/typography to tailwind.config.ts plugins array"
Write-Host "  2. Run: npm install gray-matter remark remark-html"
Write-Host "  3. Run: npm install -D @tailwindcss/typography"
Write-Host "  4. Run: git add . && git commit -m 'feat: add native blog' && git push"
