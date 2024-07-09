import { client } from "@/sanity/lib/client";

export async function getAllTags () {
    const query = `
    *[_type == "tag"] {
    name,
    slug,
    id,
    "postCount": count(*[_type == "post" && references("tags", ^._id)])
   } `
   const tags = await client.fetch(query);
   console.log('Fetched posts:', tags); // Log the fetched data to check errors
   return tags;
}

