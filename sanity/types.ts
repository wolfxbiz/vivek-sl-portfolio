export type PostPreview = {
  _id: string
  title?: string | null
  slug?: { current?: string | null } | null
  publishedAt?: string | null
  excerpt?: string | null
  mainImage?: { asset?: { url?: string | null } | null; alt?: string | null } | null
  categories?: ({ title?: string | null } | null)[] | null
}

export type Post = PostPreview & {
  body?: unknown[] | null
  author?: {
    name?: string | null
    image?: { asset?: { url?: string | null } | null } | null
  } | null
}
