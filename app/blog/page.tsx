import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { client } from '@/sanity/client'
import { POSTS_ALL_QUERY } from '@/sanity/queries'
import Footer from '@/components/Footer'
import type { PostPreview } from '@/sanity/types'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Thoughts on UI/UX design, growth strategy, and building digital products.',
  alternates: { canonical: '/blog' },
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_ALL_QUERY, {}, { next: { revalidate: 60 } })

  return (
    <main className="bg-black min-h-screen">

      {/* Dot background */}
      <div className="fixed inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)] pointer-events-none" style={{ zIndex: 0 }} />
      <div className="fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative z-10 px-8 md:px-30 lg:px-60 pt-32 pb-20 md:pb-28">

        <div className="mb-16">
          <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-4">Writing</p>
          <h1 className="text-white text-4xl md:text-5xl tracking-tight leading-snug">Blog</h1>
        </div>

        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {(posts as PostPreview[]).map((post) => (
              <Link
                key={post._id}
                href={`/blog/${post.slug?.current}`}
                className="group flex flex-col rounded-xl border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300 overflow-hidden"
              >
                {post.mainImage?.asset?.url && (
                  <div className="relative w-full aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt ?? post.title ?? ''}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                )}
                <div className="flex flex-col gap-3 p-5 flex-1">
                  {post.categories && post.categories.length > 0 && (
                    <span className="text-[#FF4D00] text-[9px] tracking-[0.35em] uppercase">
                      {post.categories[0]?.title}
                    </span>
                  )}
                  <h2 className="text-white text-base leading-snug tracking-tight group-hover:text-white/80 transition-colors duration-200">
                    {post.title}
                  </h2>
                  {post.excerpt && (
                    <p className="text-white/40 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
                  )}
                  <p className="text-white/20 text-[10px] tracking-widest uppercase mt-auto pt-2">
                    {post.publishedAt ? formatDate(post.publishedAt) : ''}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-white/30 text-sm tracking-wide">No posts yet — check back soon.</p>
        )}

      </div>

      <Footer />
    </main>
  )
}
