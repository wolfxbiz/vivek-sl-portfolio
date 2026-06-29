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
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPage() {
  const posts = await client.fetch(POSTS_ALL_QUERY, {}, { next: { revalidate: 60 } })
  const [featured, ...rest] = (posts as PostPreview[]) ?? []

  return (
    <main className="relative bg-black min-h-screen">

      {/* Dot background */}
      <div className="fixed inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)] pointer-events-none" style={{ zIndex: 0 }} />
      <div className="fixed inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_30%,black)] pointer-events-none" style={{ zIndex: 0 }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 pt-36 pb-20 md:pb-28">

        {/* Masthead */}
        <div className="text-center mb-6">
          <p className="text-[#FF4D00] text-[9px] tracking-[0.5em] uppercase mb-5">Writing & Thinking</p>
          <h1 className="text-white text-6xl md:text-8xl tracking-tighter leading-none font-light">Blog</h1>
        </div>

        <hr className="border-white/10 mb-12" />

        {!posts || posts.length === 0 ? (
          <p className="text-center text-white/30 text-sm tracking-wide">No posts yet — check back soon.</p>
        ) : (
          <>
            {featured && (
              <Link href={`/blog/${featured.slug?.current}`} className="group block mb-12">
                {featured.mainImage?.asset?.url && (
                  <div className="relative w-full aspect-[16/7] overflow-hidden rounded-xl mb-6">
                    <Image
                      src={featured.mainImage.asset.url}
                      alt={featured.mainImage.alt ?? featured.title ?? ''}
                      fill
                      priority
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 768px) 100vw, 960px"
                    />
                  </div>
                )}
                <div className="max-w-2xl mx-auto text-center">
                  {featured.categories?.[0]?.title && (
                    <p className="text-[#FF4D00] text-[9px] tracking-[0.4em] uppercase mb-3">
                      {featured.categories[0].title}
                    </p>
                  )}
                  <h2 className="text-white text-2xl md:text-4xl tracking-tight leading-snug mb-3 group-hover:text-white/60 transition-colors duration-200">
                    {featured.title}
                  </h2>
                  {featured.excerpt && (
                    <p className="text-white/40 text-sm md:text-base leading-relaxed mb-4 line-clamp-2">
                      {featured.excerpt}
                    </p>
                  )}
                  <p className="text-white/20 text-[10px] tracking-widest uppercase">
                    {featured.publishedAt ? formatDate(featured.publishedAt) : ''}
                  </p>
                </div>
              </Link>
            )}

            {rest.length > 0 && (
              <>
                <hr className="border-white/10 mb-10" />
                <p className="text-white/30 text-[9px] tracking-[0.4em] uppercase text-center mb-8">More</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8">
                  {rest.map((post) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug?.current}`}
                      className="group flex flex-col bg-black p-6 md:p-8 hover:bg-white/[0.03] transition-colors duration-200"
                    >
                      {post.mainImage?.asset?.url && (
                        <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg mb-5">
                          <Image
                            src={post.mainImage.asset.url}
                            alt={post.mainImage.alt ?? post.title ?? ''}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      )}
                      {post.categories?.[0]?.title && (
                        <p className="text-[#FF4D00] text-[9px] tracking-[0.35em] uppercase mb-2">
                          {post.categories[0].title}
                        </p>
                      )}
                      <h3 className="text-white text-lg leading-snug tracking-tight mb-2 group-hover:text-white/60 transition-colors duration-200">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-white/40 text-sm leading-relaxed line-clamp-2 mb-4">{post.excerpt}</p>
                      )}
                      <p className="text-white/20 text-[10px] tracking-widest uppercase mt-auto">
                        {post.publishedAt ? formatDate(post.publishedAt) : ''}
                      </p>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </>
        )}

      </div>

      <Footer />
    </main>
  )
}
