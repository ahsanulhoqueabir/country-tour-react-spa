import { BookmarkIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Post = ({data}) => {
    return (
        <div className='flex flex-col gap-4 text-xl'>
            <h1 className='font-bold flex gap-1 items-center'> <BookmarkIcon className='h-5 text-teal-600'></BookmarkIcon> {data.title} </h1>
            <p className='border-l-2 border-green-400 pl-3' > {data.description}</p>
        </div>
    );
};

export default Post;