import { client } from "@/sanity/lib/client";

export async function getAllPosts() {
    const query = `
    *[_type == "post"]{
      title,
      slug,
      excerpt,
      publishedAt,
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

