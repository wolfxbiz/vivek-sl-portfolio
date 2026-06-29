import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import { POST_QUERY, POSTS_ALL_QUERY } from '@/sanity/queries'
import Footer from '@/components/Footer'
import BlogThemeWrapper from '@/components/BlogThemeWrapper'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export async function generateStaticParams() {
  const posts = await client.fetch(POSTS_ALL_QUERY)
  return (posts ?? []).map((p: { slug?: { current?: string } }) => ({ slug: p.slug?.current }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug })
  if (!post) return {}
  return {
    title: post.title ?? undefined,
    description: post.excerpt ?? undefined,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: post.mainImage?.asset?.url
      ? { images: [{ url: post.mainImage.asset.url }] }
      : undefined,
  }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = await client.fetch(POST_QUERY, { slug }, { next: { revalidate: 60 } })

  if (!post) return notFound()

  return (
    <BlogThemeWrapper>
      <article className="max-w-2xl mx-auto px-6 md:px-8 pt-28 pb-20 md:pb-28">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-[9px] tracking-[0.4em] uppercase transition-colors duration-200 mb-10 text-[var(--blog-text-muted)] hover:text-[var(--blog-text)]"
        >
          ← Blog
        </Link>

        {/* Category */}
        {post.categories && post.categories.length > 0 && (
          <p className="text-[#FF4D00] text-[9px] tracking-[0.45em] uppercase mb-4">
            {post.categories[0]?.title}
          </p>
        )}

        {/* Title */}
        <h1 className="text-3xl md:text-5xl tracking-tight leading-tight mb-5 text-[var(--blog-text)]">
          {post.title}
        </h1>

        {/* Byline */}
        <div className="flex items-center gap-3 mb-8">
          {post.author?.image?.asset?.url && (
            <Image
              src={post.author.image.asset.url}
              alt={post.author.name ?? ''}
              width={28}
              height={28}
              className="rounded-full object-cover"
            />
          )}
          <p className="text-[10px] tracking-widest uppercase text-[var(--blog-text-muted)]">
            {[post.author?.name, post.publishedAt ? formatDate(post.publishedAt) : null]
              .filter(Boolean)
              .join(' · ')}
          </p>
        </div>

        <hr className="mb-8" style={{ borderColor: 'var(--blog-divider)' }} />

        {/* Hero image */}
        {post.mainImage?.asset?.url && (
          <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden mb-10">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt ?? post.title ?? ''}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 672px"
            />
          </div>
        )}

        {/* Body */}
        {Array.isArray(post.body) && (
          <div
            className="prose prose-base prose-headings:tracking-tight prose-a:text-[#FF4D00] prose-a:no-underline hover:prose-a:underline"
            style={{
              '--tw-prose-body': 'var(--blog-text-muted)',
              '--tw-prose-headings': 'var(--blog-text)',
              '--tw-prose-bold': 'var(--blog-text)',
              '--tw-prose-links': '#FF4D00',
              '--tw-prose-hr': 'var(--blog-divider)',
              '--tw-prose-quotes': 'var(--blog-text-muted)',
              '--tw-prose-quote-borders': 'var(--blog-border)',
              '--tw-prose-captions': 'var(--blog-text-faint)',
              '--tw-prose-code': 'var(--blog-text)',
              '--tw-prose-pre-bg': 'var(--blog-card-bg)',
            } as React.CSSProperties}
          >
            <PortableText
              value={post.body}
              components={{
                types: {
                  image: ({ value }) => {
                    const url = value?.asset?.url
                    const w = value?.asset?.metadata?.dimensions?.width ?? 1200
                    const h = value?.asset?.metadata?.dimensions?.height ?? 800
                    if (!url) return null
                    return (
                      <div className="my-8 not-prose">
                        <Image
                          src={url}
                          alt={value?.alt ?? ''}
                          width={w}
                          height={h}
                          className="w-full rounded-xl"
                          style={{ border: '1px solid var(--blog-border)' }}
                          sizes="(max-width: 768px) 100vw, 672px"
                        />
                      </div>
                    )
                  },
                },
              }}
            />
          </div>
        )}

      </article>
      <Footer />
    </BlogThemeWrapper>
  )
}
