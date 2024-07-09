import React from 'react'
import { getAllTags } from '../api/getAllTags';
import Link from 'next/link';
import { Tag } from '../utils/interfaces';

export const revalidate = 60;

const TagsBanner = async () => {
    // Fetch all tags from the API
    const tags: Tag[] = await getAllTags()
    
    return (
        <div className="py-14 px-4 mb-12 text-center border-b border-gray-300 dark:border-gray-700">
            <span className="text-lg font-semibold text-gray-800 dark:text-gray-200">Tags</span>
            <div className="mt-4 flex flex-wrap justify-center">
                {/* Tags */}
                {tags?.length > 0 && tags?.map((tag)=>(
                <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
                    <div className='mb-2 mx-2 p-2 text-sm bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors hover:bg-gray-300 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100'>
                    #{tag.name} ({tag?.postCount})
                    </div>
                </Link>
                ))}
            </div>
        </div>
    
    )
}

export default TagsBanner