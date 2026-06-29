import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PortableText } from 'next-sanity'
import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import { POST_QUERY, POSTS_ALL_QUERY } from '@/sanity/queries'
import Footer from '@/components/Footer'

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
    <main className="bg-black min-h-screen">

      {/* Dot background */}
      <div className="fixed inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)] pointer-events-none" style={{ zIndex: 0 }} />
      <div className="fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] pointer-events-none" style={{ zIndex: 0 }} />

      <article className="relative z-10 px-8 md:px-30 lg:px-60 pt-32 pb-20 md:pb-28">

        {/* Back */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-white/30 text-[10px] tracking-[0.35em] uppercase hover:text-white transition-colors duration-200 mb-12"
        >
          ← Blog
        </Link>

        {/* Header */}
        <header className="mb-12 max-w-2xl">
          {post.categories && post.categories.length > 0 && (
            <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-4">
              {post.categories[0]?.title}
            </p>
          )}
          <h1 className="text-white text-3xl md:text-5xl tracking-tight leading-snug mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4">
            {post.author?.image?.asset?.url && (
              <Image
                src={post.author.image.asset.url}
                alt={post.author.name ?? ''}
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            )}
            <div className="flex items-center gap-3 text-white/30 text-[10px] tracking-widest uppercase">
              {post.author?.name && <span>{post.author.name}</span>}
              {post.author?.name && post.publishedAt && <span>·</span>}
              {post.publishedAt && <span>{formatDate(post.publishedAt)}</span>}
            </div>
          </div>
        </header>

        {/* Hero image */}
        {post.mainImage?.asset?.url && (
          <div className="relative w-full aspect-[16/7] rounded-xl overflow-hidden mb-12 border border-white/8">
            <Image
              src={post.mainImage.asset.url}
              alt={post.mainImage.alt ?? post.title ?? ''}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 80vw"
            />
          </div>
        )}

        {/* Body */}
        {Array.isArray(post.body) && (
          <div className="prose prose-invert prose-base max-w-2xl prose-headings:tracking-tight prose-headings:text-white prose-p:text-white/60 prose-p:leading-relaxed prose-a:text-[#FF4D00] prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl prose-img:border prose-img:border-white/8">
            <PortableText value={post.body} />
          </div>
        )}

      </article>

      <Footer />
    </main>
  )
}
