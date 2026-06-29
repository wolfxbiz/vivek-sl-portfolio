import { defineQuery } from 'next-sanity'

export const POSTS_PREVIEW_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...3]{
    _id, title, slug, publishedAt, excerpt,
    mainImage { asset->{ url }, alt },
    categories[]->{ title }
  }`
)

export const POSTS_ALL_QUERY = defineQuery(
  `*[_type == "post" && defined(slug.current)] | order(publishedAt desc){
    _id, title, slug, publishedAt, excerpt,
    mainImage { asset->{ url }, alt },
    categories[]->{ title }
  }`
)

export const POST_QUERY = defineQuery(
  `*[_type == "post" && slug.current == $slug][0]{
    _id, title, slug, publishedAt, excerpt, body,
    mainImage { asset->{ url }, alt },
    categories[]->{ title },
    author->{ name, image { asset->{ url } } }
  }`
)
