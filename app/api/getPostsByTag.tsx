import { client } from "@/sanity/lib/client";

export async function getPostsByTag(tag: string) {
    const query = `
    *[_type == "post" && references(*[_type == "tag" && slug.current == "${tag}"]._id)]{
        title,
        slug,
        excerpt,
        publishedAt,
        tags[]-> {
        _id,
        slug,
        name
    }
  }`

  const posts = await client.fetch(query);
  return posts;
}