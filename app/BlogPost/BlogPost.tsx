import Image from 'next/image';
import React from 'react';

import { BlogPostType } from './blogPost.types';

export const BlogPost = ({
    title,
    description,
    link,
    icon,
    colour,
}: BlogPostType) => (
    <a
        className="flex items-start flex-row w-full border border-neutral-400 rounded-md justify-between hover:bg-neutral-100"
        target="_blank"
        href={link}
    >
        <div className="m-6 w-full">
            <div className="text-xl font-semibold">{title}</div>
            <p className="my-4">{description}</p>
            <p className="text-blue-800">Continue reading</p>
        </div>
        <div
            className={
                `min-w-[100px] bg-` +
                colour +
                ` h-full items-center rounded-tr-md rounded-br-md hidden md:flex`
                // Prevent tailwindcss from tree-shaking these classes as they are dynamic.
                // + `bg-orange-700 bg-blue-800 bg-amber-500 bg-green-600 bg-cyan-700 bg-fuchsia-800 bg-emerald-800 bg-pink-800 bg-violet-800`
            }
        >
            <Image
                className="m-5 lg:m-8"
                src={`/images/blog/` + icon + `.svg`}
                alt="Icon"
                width={100}
                height={100}
            />
        </div>
    </a>
);
