import Link from 'next/link'
import Image from 'next/image'
import { client } from '@/sanity/client'
import { POSTS_PREVIEW_QUERY } from '@/sanity/queries'
import type { PostPreview } from '@/sanity/types'

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default async function BlogSection() {
  const posts = await client.fetch(POSTS_PREVIEW_QUERY, {}, { next: { revalidate: 60 } })

  if (!posts || posts.length === 0) return null

  return (
    <section className="relative bg-black px-8 md:px-30 lg:px-60 pt-20 md:pt-28 pb-20 md:pb-28 border-t border-white/8">

      {/* Dot background */}
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)]" />

      <div className="relative z-10 flex items-end justify-between mb-12">
        <div>
          <p className="text-[#FF4D00] text-[10px] tracking-[0.4em] uppercase mb-3">Writing</p>
          <h2 className="text-white text-3xl md:text-4xl tracking-tight leading-snug">
            Blog
          </h2>
        </div>
        <Link
          href="/blog"
          className="text-white/30 text-xs tracking-widest uppercase hover:text-white transition-colors duration-300"
        >
          View All ↗
        </Link>
      </div>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
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
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            )}
            <div className="flex flex-col gap-3 p-5 flex-1">
              {post.categories && post.categories.length > 0 && (
                <span className="text-[#FF4D00] text-[9px] tracking-[0.35em] uppercase">
                  {post.categories[0]?.title}
                </span>
              )}
              <h3 className="text-white text-base leading-snug tracking-tight group-hover:text-white/80 transition-colors duration-200">
                {post.title}
              </h3>
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

    </section>
  )
}
