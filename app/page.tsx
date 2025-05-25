'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { BlogPost, blogPosts } from '@/components/BlogPost';
import { Footer, Header } from '@/components';

export default function Home() {
    const [isContactMessageShown, setIsContactMessageShown] = useState(false);

    const handleContactFormSubmit = (
        event: React.FormEvent<HTMLFormElement>,
    ) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const email = formData.get('email') as string;
        const message = formData.get('message') as string;

        // Send the form data to the form system.
        fetch('https://formspree.io/f/mldgrqyj', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                message,
            }),
        })
            .then(response => {
                if (response.ok) {
                    setIsContactMessageShown(true);
                } else {
                    alert('An error occurred. Please try again.');
                }
            })
            .catch(() => {
                alert('An error occurred. Please try again.');
            });
    };

    return (
        <>
            <Header />
            <main className="w-full flex flex-col items-center">
                <section className="flex flex-col flex-auto min-w-0 w-full max-w-screen-2xl my-2 md:my-6 px-6 sm:px-4 prose">
                    <h1 className="text-4xl font-semibold tracking-tight mb-4">
                        George Wilde – Engineering Leadership &amp; Technical
                        Strategy
                    </h1>
                    <div className="flex flex-row">
                        <div className="md:mr-10 text-justify">
                            <p>
                                With over 20 years of experience, I lead
                                high-performing engineering teams to deliver
                                scalable, robust systems across fintech, energy,
                                and consultancy sectors. My passion lies in
                                aligning technology initiatives with business
                                objectives, fostering innovation, and mentoring
                                engineering talent.
                            </p>
                            <p>
                                My leadership approach combines deep technical
                                knowledge with a passion for mentoring and
                                empowering teams. I actively promote a culture
                                of excellence by embedding modern engineering
                                principles, tools, and agile methodologies. As a
                                collaborative leader, I foster strong
                                relationships with stakeholders, working closely
                                with cross-functional groups to bridge strategy
                                and delivery. Above all, I thrive on creating
                                environments where individuals are encouraged to
                                learn, collaborate, and take ownership of
                                delivering high-quality, impactful products.
                            </p>
                        </div>
                        <div className="hidden md:block w-[200px] min-w-[200px]">
                            <Image
                                className="rounded"
                                src="/images/profile.jpg"
                                alt="George Wilde"
                                width={200}
                                height={200}
                            />
                        </div>
                    </div>
                    <h2
                        className="text-3xl font-semibold tracking-tight mb-4 mt-8"
                        id="skills"
                    >
                        Key Skills
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-7 list-none not-prose">
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Leadership & Strategy
                            </h3>
                            <div>
                                Experienced in Technical Leadership, Stakeholder
                                Management, and Agile Methodologies.
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Architecture & Development
                            </h3>
                            <div>
                                Skilled in Software Architecture, Cloud
                                Infrastructure (AWS, Azure), and Microservices.
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Tools & Technologies
                            </h3>
                            <div>
                                Skilled in JavaScript, TypeScript, React,
                                Angular, Node.js, Python, GraphQL, C#, Next.js,
                                .NET Core, Docker, Kubernetes, AWS, Azure, Jest,
                                Playwright, SQL and PostgreSQL.
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">Practices</h3>
                            <div>
                                Experienced in CI/CD, TDD, Clean Code, and SOLID
                                Principles
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Mentoring & Coaching
                            </h3>
                            <div>
                                Developing engineering talent through targeted
                                mentorship and coaching.
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">Data & AI</h3>
                            <div>
                                Leveraging data-driven insights, GenAI, and
                                machine learning to drive innovation.
                            </div>
                        </li>
                    </ul>
                </section>
                <section
                    className="flex justify-center bg-neutral-200 w-full p-4 md:p-10"
                    id="testimonials"
                >
                    <div className="flex flex-row flex-wrap justify-center max-w-screen-2xl">
                        <div className="flex items-center flex-col min-w-[200px] max-w-[400px] flex-grow flex-shrink basis-0 mx-2 my-4">
                            <Image
                                className="rounded-full"
                                src="/images/testimonials/steven-jones.jpg"
                                alt="Steven Jones"
                                width={100}
                                height={100}
                            />
                            <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                                <em>
                                    &quot;George is a strong technical leader.
                                    He has consistently helped ensure our teams
                                    deliver our client&apos;s visions and is a
                                    key part of our technical leadership.&quot;
                                </em>
                            </div>
                            <div className="">Steven Jones</div>
                            <div className="text-xs">VP Digital Consulting</div>
                            <div className="text-xs">Ensono</div>
                        </div>
                        <div className="flex items-center flex-col min-w-[200px] max-w-[400px] flex-grow flex-shrink basis-0 mx-2 my-4">
                            <Image
                                className="rounded-full"
                                src="/images/testimonials/colm-campbell.jpg"
                                alt="Paul Brown"
                                width={100}
                                height={100}
                            />
                            <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                                <em>
                                    &quot;George's technology leadership was
                                    essential to the success of our largest
                                    digital transformation. He motivates teams,
                                    ensures robust architecture, and delivers
                                    beyond expectations.&quot;
                                </em>
                            </div>
                            <div className="">Colm Campbell</div>
                            <div className="text-xs">Head of Engineering</div>
                            <div className="text-xs">The Gym Group</div>
                        </div>
                        <div className="flex items-center flex-col min-w-[200px] max-w-[400px] flex-grow flex-shrink basis-0 mx-2 my-4">
                            <Image
                                className="rounded-full"
                                src="/images/testimonials/fiona-collis.jpg"
                                alt="Fiona Collis"
                                width={100}
                                height={100}
                            />
                            <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                                <em>
                                    &quot;George has helped shape our strategy
                                    and been a consistent leader.&quot;
                                </em>
                            </div>
                            <div className="">Fiona Collis</div>
                            <div className="text-xs">Operations Director</div>
                            <div className="text-xs">Ensono Digital</div>
                        </div>
                        <div className="flex items-center flex-col min-w-[200px] max-w-[400px] flex-grow flex-shrink basis-0 mx-2 my-4">
                            <Image
                                className="rounded-full"
                                src="/images/testimonials/andy-mcmillan.jpg"
                                alt="Andy McMillan"
                                width={100}
                                height={100}
                            />
                            <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                                <em>
                                    &quot;George is fantastic at managing a
                                    development team and implementing best
                                    practices to ensure code quality.&quot;
                                </em>
                            </div>
                            <div className="">Andy McMillan</div>
                            <div className="text-xs">
                                Digital Product Manager
                            </div>
                            <div className="text-xs">E.ON</div>
                        </div>
                        <div className="flex items-center flex-col min-w-[200px] max-w-[400px] flex-grow flex-shrink basis-0 mx-2 my-4">
                            <Image
                                className="rounded-full"
                                src="/images/testimonials/kully-chatha.jpg"
                                alt="Kully Chatha"
                                width={100}
                                height={100}
                            />
                            <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                                <em>
                                    &quot;George is a highly capable individual
                                    with excellent technical leadership and
                                    interpersonal skills.&quot;
                                </em>
                            </div>
                            <div className="">Kully Chatha</div>
                            <div className="text-xs">
                                Senior Solution Architect
                            </div>
                            <div className="text-xs">E.ON</div>
                        </div>
                        <div className="flex items-center flex-col min-w-[200px] max-w-[400px] flex-grow flex-shrink basis-0 mx-2 my-4">
                            <Image
                                className="rounded-full"
                                src="/images/testimonials/farooq-ali.jpg"
                                alt="Farooq Ali"
                                width={100}
                                height={100}
                            />
                            <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                                <em>
                                    &quot;All round great guy. Professional,
                                    dedicated and highly regarded as a technical
                                    lead.&quot;
                                </em>
                            </div>
                            <div className="">Farooq Ali</div>
                            <div className="text-xs">
                                Head of Business Agility
                            </div>
                            <div className="text-xs">Somo Global</div>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col flex-auto min-w-0 w-full max-w-screen-2xl my-2 md:my-6 px-6 sm:px-4">
                    <h2
                        className="text-4xl font-semibold tracking-tight mb-4 mt-10"
                        id="projects"
                    >
                        Projects
                    </h2>
                    <p className="mb-4">
                        Here are some recent projects I have had the pleasure of
                        being involved with.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-7 justify-items-center items-stretch mt-4">
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/the-gym-group.png"
                                alt="The Gym Group"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    The Gym Group
                                </div>
                                <div>
                                    Ecommerce, Payment &amp; Identity Platform
                                </div>
                                <div className="text-sm mt-4">
                                    Replatformed the digital estate for
                                    Europe&apos;s 5th largest gym operator. Read
                                    the{' '}
                                    <a
                                        target="_blank"
                                        className="underline"
                                        href="https://www.ensono.com/results/client-stories/supporting-growth-improving-customer-experience-and-increasing-business-agility-for-the-gym-group/"
                                    >
                                        case study
                                    </a>
                                    .
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/pay-uk.png"
                                alt="Pay.uk"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    Pay.UK
                                </div>
                                <div>
                                    Inter-Banking Fraud Prevention Platform
                                </div>
                                <div className="text-sm mt-4">
                                    Directory and API management system provided
                                    by the UK&apos;s leading retail payments
                                    authority to help prevent fraud in the
                                    banking system.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/next.png"
                                alt="NEXT"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    Next
                                </div>
                                <div>Ecommerce Platform</div>
                                <div className="text-sm mt-4">
                                    Mainframe to microservices migration for
                                    this multi-brand leading global retailer.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/purplebricks.png"
                                alt="Purplebricks"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    Purplebricks
                                </div>
                                <div>My Purplebricks Account Management</div>
                                <div className="text-sm mt-4">
                                    Platform used by customers to manage their
                                    property sales or lettings. Including sales
                                    negotiations, property management and
                                    arranging viewings.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/socket-energy.png"
                                alt="Socket Energy"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    Socket Energy
                                </div>
                                <div>Brochure and Account Management</div>
                                <div className="text-sm mt-4">
                                    Integrated platform for this disruptor
                                    energy provider developed by E.ON, including
                                    CRM, CMS and energy industry integrations.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/my-npower.jpg"
                                alt="My Npower"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    npower
                                </div>
                                <div>Customer Account Management Platform</div>
                                <div className="text-sm mt-4">
                                    Greenfield project to allow customers to
                                    manage their energy accounts. Providing
                                    meter readings, bills &amp; payments and
                                    future energy forecasting.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/EON-see.png"
                                alt="E.ON See"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    E.ON See
                                </div>
                                <div>
                                    Ecommerce Platform and Membership Area
                                </div>
                                <div className="text-sm mt-4">
                                    Account management system to help
                                    residential customers gain insights about
                                    their energy using real-time usage data.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/MINI-offers.png"
                                alt="Mini Offers"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    Mini Offers
                                </div>
                                <div>Marketing Platform</div>
                                <div className="text-sm mt-4">
                                    New car offers platform for the iconic MINI
                                    brand driven by custom stock management and
                                    CMS systems.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/showroom.png"
                                alt="Showroom Suite"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    Showroom Suite
                                </div>
                                <div>
                                    Automotive Dealership Management Portal
                                </div>
                                <div className="text-sm mt-4">
                                    Innovative motor finance dealer portal that
                                    delivers the tools to increase lead
                                    generation and deal conversion rates.
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">
                            <Image
                                className="rounded-t-md"
                                src="/images/projects/halo.png"
                                alt="Halo Case Management"
                                width={450}
                                height={450}
                            />
                            <div className="flex flex-col p-4 w-full">
                                <div className="text-lg font-semibold mb-2">
                                    Halo Case Management
                                </div>
                                <div>Case Management and CRM Platform</div>
                                <div className="text-sm mt-4">
                                    Specialised substance misuse system used by
                                    some of the largest addiction services
                                    across the UK.
                                </div>
                            </div>
                        </li>
                        {/* Old Projects */}
                        {/*<li className="flex items-center flex-col w-full max-w-[450px] border border-neutral-400 rounded-md">*/}
                        {/*    <Image*/}
                        {/*        className="rounded-t-md"*/}
                        {/*        src="/images/projects/spark.png"*/}
                        {/*        alt="Spark Compliance"*/}
                        {/*        width={450}*/}
                        {/*        height={450}*/}
                        {/*    />*/}
                        {/*    <div className="flex flex-col p-4 w-full">*/}
                        {/*        <div className="text-lg font-semibold mb-2">*/}
                        {/*            Spark Compliance*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            Incident tracking and Quality Control System*/}
                        {/*        </div>*/}
                        {/*        <div className="text-sm mt-4">*/}
                        {/*            Audit and quality improvement system for UK*/}
                        {/*            charities and public bodies who have*/}
                        {/*            responsibility to report to the CQC.*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>
                </section>
                <section className="flex flex-col flex-auto min-w-0 w-full max-w-screen-2xl my-2 md:my-6 px-6 sm:px-4">
                    <h2
                        className="text-4xl font-semibold tracking-tight mb-6 mt-10"
                        id="blog"
                    >
                        Blog
                    </h2>
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
                <section className="flex flex-col flex-auto min-w-0 w-full max-w-screen-2xl my-2 md:my-6 px-6 sm:px-4">
                    <h2
                        className="text-4xl font-semibold tracking-tight mb-4 mt-10"
                        id="contact"
                    >
                        Contact
                    </h2>
                    <p>
                        Interested in collaborating or discussing potential
                        opportunities? Please contact me.
                    </p>
                    <div className="flex flex-col md:flex-row">
                        <div className="flex-grow">
                            {!isContactMessageShown && (
                                <form
                                    onSubmit={handleContactFormSubmit}
                                    className="mt-6"
                                >
                                    <div className="mb-6 flex flex-col md:flex-row">
                                        <label
                                            htmlFor="email"
                                            className="min-w-[150px] text-gray-700 text-sm font-bold mb-2"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="Email"
                                            className="w-full min-w-[250px] shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                        />
                                    </div>
                                    <div className="mb-6 flex flex-col md:flex-row">
                                        <label
                                            htmlFor="message"
                                            className="min-w-[150px] text-gray-700 text-sm font-bold mb-2"
                                        >
                                            Your message
                                        </label>
                                        <textarea
                                            name="message"
                                            id="message"
                                            placeholder="Message"
                                            className="w-full min-w-[250px] shadow appearance-none border rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="ml-[150px] mb-6 bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                    >
                                        Send
                                    </button>
                                </form>
                            )}
                            {isContactMessageShown && (
                                <div className="mt-6 bg-green-900 p-6 text-center text-white border-green-950 border-2">
                                    Your message has been sent and I will be in
                                    touch soon. Thank you.
                                </div>
                            )}
                        </div>
                        <div className="pt-6 md:pt-0 md:ml-10 md:pl-10 min-w-[25%] md:border-l-2 border-l-neutral-200">
                            <p>George Wilde</p>
                            <p>
                                <a
                                    href="mailto:george@georgewilde.co.uk"
                                    className="text-blue-800"
                                >
                                    george@georgewilde.co.uk
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
