import { Header } from '@/app/components/Header'
import { getPost } from '@/app/api/getPost'
import React from 'react'
import { Post } from '@/app/utils/interfaces';
import Link from 'next/link';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { urlForImage } from '@/sanity/lib/image';
import {notFound} from 'next/navigation';

interface Params {
    params: {
        slug: string;
    }
}

const myPortableTextComponents = {
    types: {
        image: ({ value }: any) => {
            return (
                <Image
                src={urlForImage(value)}
                alt="Post"
                width={700}
                height={700}
                />
        );
    },
  },
};

export const revalidate = 60;


const page = async ({params}: Params) => {
    const post: Post = await getPost(params?.slug);
    console.log(post, 'post')

    if(!post) {
        notFound();
    }

    return (
        <div>
            <Header title={post?.title} />
            <div className="text-center mt-12">
                <span>
                    {new Date(post?.publishedAt).toDateString()}
                </span>
                <div className="mt-5">
                    {post?.tags?.map((tag)=>(
                        <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                            <span className='mr-2'>
                                #{tag.name}
                            </span>
                        </Link>
                    ))}
                </div>

                <div className="mt-14 text-justify max-w-2xl m-auto ">
                    <PortableText
                        value={post?.body}
                        components={myPortableTextComponents}
                    />               
                </div>
            </div>
        </div>
    )
}

interface ImageUrlObject {
    url: () => string;
  }

export default page