import Link from 'next/link';
import React from 'react';
import { Post } from '../utils/interfaces'

interface Props {
    post: Post;
}

export const revalidate = 60;

export const PostComponent = ({post}: Props) => {

    // Check if the fields are missing
    if ( !post.slug || !post.slug.current || !post.title || !post.publishedAt || !post.excerpt) {
        return <div>Post data is incomplete.</div>;
    }

    return(
        <div className="mb-8 p-4 border border-gray-900 rounded-md shadow-sm shadow-purple-950 hover:shadow-md hover:bg-purple-500 hover:text-white hover:dark:bg-gray-950">
            {/* Card Content */}
            <Link href={`/posts/${post.slug.current}`}>
                <h2 className="text-2xl">{post.title}</h2>
                <p className="my-2">{new Date(post.publishedAt).toDateString()}</p>
                <p className="dark:text-gray-400 mb-4 line-clamp-2">{post.excerpt}</p>
            </Link>
             {/* Tags */}
             <div >
                {post.tags.map((tag)=>(
                    <span className='mr-3' key={tag._id}>#{tag.name}</span>
                ))}
            </div>
        </div>
    )
}