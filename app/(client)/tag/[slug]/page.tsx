import { getPostsByTag } from '@/app/api/getPostsByTag'
import { Header } from '@/app/components/Header'
import { PostComponent } from '@/app/components/PostComponent';
import { Post } from '@/app/utils/interfaces';
import React from 'react'

interface Params {
    params: {
        slug: string;
    };
}

const page = async ({params}: Params) => {

    const posts: Array<Post> = await getPostsByTag(params.slug);
    console.log(posts, "posts by tag")

  return (
    <div>
        <Header title={`#${params?.slug}`} tags/>
        <div>
            {posts?.length > 0 && 
                posts?.map((post) => <PostComponent key={post?._id} post={post}/>)}
        </div>
    </div>
  )
}

export default page