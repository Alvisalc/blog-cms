import { client } from "@/sanity/lib/client";

// get the post by slug
export async function getPost(slug: string) {
    const query = `
    *[_type == "post" && slug.current == "${slug}"] [0] {
      title,
      slug,
      excerpt,
      publishedAt,
      _id,
      body,
      tags[]-> {
      _id,
      slug,
      name
      }
    }`;
    const data = await client.fetch(query);
    console.log('Fetched posts:', data); // Log the fetched data to check errors
    return data;
  }

