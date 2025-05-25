import React from 'react';

import { BlogPost, blogPosts } from '@/components/BlogPost';
import { Footer, Header } from '@/components';

export default function BlogPage() {
    return (
        <>
            <Header />
            <main className="w-full flex flex-col items-center">
                <section className="flex flex-col flex-auto min-w-0 w-full max-w-screen-2xl my-2 md:my-6 px-6 sm:px-4 prose">
                    <h1 className="text-4xl font-semibold tracking-tight mb-4">
                        Blog
                    </h1>
                    <p>Welcome to my blog!</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-7 justify-center mt-4">
                        {blogPosts.map((post, index) => (
                            <BlogPost
                                key={index}
                                title={post.title}
                                description={post.description}
                                link={post.link}
                                icon={post.icon}
                                colour={post.colour}
                                externalLink={post.externalLink}
                            />
                        ))}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
