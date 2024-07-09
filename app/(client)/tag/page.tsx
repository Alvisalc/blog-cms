import { getAllTags } from '@/app/api/getAllTags';
import { Header } from '@/app/components/Header';
import { Tag } from '@/app/utils/interfaces';
import Link from 'next/link';
import React from 'react'

export const revalidate = 60;

const page = async () => {
  const tags: Tag[] = await getAllTags()
  console.log(tags, "tags");
  return (
    <div>
      <Header title="Tags"/>
      <div>
        {tags?.length > 0 && tags?.map((tag)=>(
          <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
            <div className='mb-2 p-2 text-sm'>
              #{tag.name} ({tag?.postCount})
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default page