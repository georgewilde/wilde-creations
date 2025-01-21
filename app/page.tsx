import Image from 'next/image';

export default function Home() {
    return (
        <>
            <header className="w-full">
                <nav className="lg:mb-16 mb-12 py-5 mx-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <div className="flex items-center">
                            <a
                                className="text-3xl font-semibold tracking-tight"
                                href="/"
                            >
                                Wilde Creations
                            </a>
                        </div>
                        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
                            <a
                                className="transition-all flex align-middle relative uppercase hover:text-black"
                                href="/"
                            >
                                Home
                            </a>
                            <a
                                className="transition-all hover:text-neutral-800 flex align-middle relative uppercase"
                                href="#skills"
                            >
                                Skills
                            </a>
                            <a
                                className="transition-all hover:text-neutral-800 flex align-middle relative uppercase"
                                href="#projects"
                            >
                                Projects
                            </a>
                            <a
                                className="transition-all hover:text-neutral-800 flex align-middle relative uppercase"
                                href="#blog"
                            >
                                Blog
                            </a>
                            <a
                                className="transition-all hover:text-neutral-800 flex align-middle relative uppercase"
                                href="#contact"
                            >
                                Contact
                            </a>
                        </div>
                    </div>
                </nav>
            </header>
            <main className="w-full flex flex-col items-center">
                <section className="flex-auto min-w-0 my-2 md:my-6 flex flex-col px-6 sm:px-4 max-w-screen-2xl w-full prose md:prose-lg lg:prose-xl">
                    <h1 className="text-4xl font-semibold tracking-tight mb-4">
                        Hi, I&apos;m George Wilde
                    </h1>
                    <div className="flex flex-row">
                        <div className="md:mr-6 text-justify">
                            <p>
                                I am an accomplished technology leader with a
                                consistent track record of guiding
                                high-performing engineering teams to deliver
                                robust, scalable distributed systems. Drawing on
                                over 20 years’ experience, I have served as a
                                technology leader for several organisations,
                                where I’ve shaped technical roadmaps, introduced
                                best practices, and established clear,
                                outcome-focused processes. My expertise lies in
                                architecting service-oriented web applications,
                                driving performance-critical solutions that
                                support business growth, and instilling a
                                culture of excellence and innovation.
                            </p>
                            <p>
                                My leadership approach combines deep technical
                                expertise with a passion for mentoring and
                                empowering teams. I actively cultivate a culture
                                of excellence by embedding modern engineering
                                principles, tools, and agile methodologies. As a
                                collaborative leader, I build strong
                                relationships with stakeholders, working closely
                                with cross-functional groups to bridge strategy
                                and delivery. Above all, I thrive on creating an
                                environment where individuals are empowered to
                                learn, collaborate, and take ownership of
                                delivering high-quality, impactful products.
                            </p>
                        </div>
                        <div className="md:min-w-[300px] hidden md:block">
                            <Image
                                src="/images/profile.jpg"
                                alt="George Wilde"
                                width={300}
                                height={300}
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
                                Technical Leadership & Team Building
                            </h3>
                            <div>
                                Experienced in guiding diverse engineering
                                teams, fostering collaboration, and promoting a
                                culture of continuous learning
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Software Architecture & Systems Design
                            </h3>
                            <div>
                                Skilled at designing scalable, secure, and
                                high-performing distributed systems to meet
                                complex business requirements
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Agile Methodologies & DevOps
                            </h3>
                            <div>
                                Adept at implementing Agile and DevOps
                                practices, accelerating delivery times, and
                                driving a culture of rapid iteration and
                                feedback
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Stakeholder Management & Strategic Alignment
                            </h3>
                            <div>
                                Effective in translating organisational goals
                                into actionable technical roadmaps, ensuring
                                clear communication and shared vision
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Cloud Infrastructure & Services
                            </h3>
                            <div>
                                Proficient in leveraging AWS, Azure, or similar
                                platforms, optimising deployment workflows, and
                                managing cost-effective cloud solutions
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Mentoring & Coaching
                            </h3>
                            <div>
                                Committed to developing future leaders through
                                active guidance, professional development plans,
                                and hands-on support
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                Performance Optimisation & Reliability
                            </h3>
                            <div>
                                Focused on enhancing system stability and
                                availability, reducing downtime, and ensuring
                                seamless end-user experiences
                            </div>
                        </li>
                        <li className="border border-neutral-700 rounded-md p-6">
                            <h3 className="text-xl font-semibold">
                                AI & Data Integration
                            </h3>
                            <div>
                                Skilled at embedding advanced analytics and
                                machine learning initiatives into engineering
                                teams, aligning data-driven innovations with
                                core business objectives, and fostering a
                                culture that maximises the tangible value of AI.
                            </div>
                        </li>
                    </ul>
                </section>
                <section className="bg-neutral-200 flex w-full p-4 md:p-10 flex-row flex-wrap justify-center">
                    <div className="flex items-center flex-col max-w-[400px] min-w-[300px] flex-grow flex-shrink basis-0 mx-2 my-4">
                        <Image
                            className="rounded-full"
                            src="/images/testimonials/steven-jones.jpg"
                            alt="Steven Jones"
                            width={100}
                            height={100}
                        />
                        <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                            <em>
                                &quot;George is a strong technical leader. He
                                has consistently helped ensure our teams deliver
                                our client&apos;s visions and is a key part of
                                our technical leadership.&quot;
                            </em>
                        </div>
                        <div className="">Steven Jones</div>
                        <div className="text-xs">VP Digital Consulting</div>
                        <div className="text-xs">Ensono</div>
                    </div>
                    <div className="flex items-center flex-col max-w-[400px] min-w-[300px] flex-grow flex-shrink basis-0 mx-2 my-4">
                        <Image
                            className="rounded-full"
                            src="/images/testimonials/fiona-collis.jpg"
                            alt="Fiona Collis"
                            width={100}
                            height={100}
                        />
                        <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                            <em>
                                &quot;George has helped shape our strategy and
                                been a consistent leader.&quot;
                            </em>
                        </div>
                        <div className="">Fiona Collis</div>
                        <div className="text-xs">Operations Director</div>
                        <div className="text-xs">Ensono Digital</div>
                    </div>
                    <div className="flex items-center flex-col max-w-[400px] min-w-[300px] flex-grow flex-shrink basis-0 mx-2 my-4">
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
                                development team and implementing best practices
                                to ensure code quality.&quot;
                            </em>
                        </div>
                        <div className="">Andy McMillan</div>
                        <div className="text-xs">Digital Product Manager</div>
                        <div className="text-xs">E.ON</div>
                    </div>
                    <div className="flex items-center flex-col max-w-[400px] min-w-[300px] flex-grow flex-shrink basis-0 mx-2 my-4">
                        <Image
                            className="rounded-full"
                            src="/images/testimonials/kully-chatha.jpg"
                            alt="Kully Chatha"
                            width={100}
                            height={100}
                        />
                        <div className="border border-neutral-300 bg-white m-2 p-2 text-center">
                            <em>
                                &quot;George is a highly capable individual with
                                excellent technical leadership and interpersonal
                                skills.&quot;
                            </em>
                        </div>
                        <div className="">Kully Chatha</div>
                        <div className="text-xs">Senior Solution Architect</div>
                        <div className="text-xs">E.ON</div>
                    </div>
                    <div className="flex items-center flex-col max-w-[400px] min-w-[300px] flex-grow flex-shrink basis-0 mx-2 my-4">
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
                        <div className="text-xs">Head of Business Agility</div>
                        <div className="text-xs">Somo Global</div>
                    </div>
                </section>
                <section className="w-full">
                    <div className="mx-6">
                        <h2
                            className="text-3xl font-semibold tracking-tight mb-4 mt-8"
                            id="projects"
                        >
                            Projects
                        </h2>
                        <p>
                            Here are some recent projects I have had the
                            pleasure of helping deliver.
                        </p>
                        <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-7 justify-center">
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/the-gym-group.png"
                                    alt="The Gym Group"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        The Gym Group
                                    </div>
                                    <div>
                                        Ecommerce, Payment &amp; Identity
                                        Platform
                                    </div>
                                    <div className="text-sm mt-4">
                                        Replatformed the digital estate for
                                        Europe&apos;s 5th largest gym operator.
                                        Read the{' '}
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
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/pay-uk.png"
                                    alt="Pay.uk"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Pay.UK
                                    </div>
                                    <div>
                                        Inter-Banking Fraud Prevention Platform
                                    </div>
                                    <div className="text-sm mt-4">
                                        Directory and API management system
                                        provided by the UK&apos;s leading retail
                                        payments authority to help prevent fraud
                                        in the banking system.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/next.png"
                                    alt="NEXT"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Next
                                    </div>
                                    <div>Ecommerce Platform</div>
                                    <div className="text-sm mt-4">
                                        Mainframe to microservices migration for
                                        this multi-brand leading global
                                        retailer.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/purplebricks.png"
                                    alt="Purplebricks"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Purplebricks
                                    </div>
                                    <div>
                                        My Purplebricks Account Management
                                    </div>
                                    <div className="text-sm mt-4">
                                        Platform used by customers to manage
                                        their property sales or lettings.
                                        Including sales negotiations, property
                                        management and arranging viewings.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/socket-energy.png"
                                    alt="Socket Energy"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Socket Energy
                                    </div>
                                    <div>Brochure and Account Management</div>
                                    <div className="text-sm mt-4">
                                        Integrated platform for this disruptor
                                        energy provider developed by E.ON,
                                        including CRM, CMS and energy industry
                                        integrations.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/my-npower.jpg"
                                    alt="My Npower"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        npower
                                    </div>
                                    <div>
                                        Customer Account Management Platform
                                    </div>
                                    <div className="text-sm mt-4">
                                        Greenfield project to allow customers to
                                        manage their energy accounts. Providing
                                        meter readings, bills &amp; payments and
                                        future energy forecasting.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/EON-see.png"
                                    alt="E.ON See"
                                    width={400}
                                    height={400}
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
                                        residential customers gain insights
                                        about their energy using real-time usage
                                        data.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-stretch flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/MINI-offers.png"
                                    alt="Mini Offers"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Mini Offers
                                    </div>
                                    <div>Marketing Platform</div>
                                    <div className="text-sm mt-4">
                                        New car offers platform for the iconic
                                        MINI brand driven by custom stock
                                        management and CMS systems.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/showroom.png"
                                    alt="Showroom Suite"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Showroom Suite
                                    </div>
                                    <div>
                                        Automotive Dealership Management Portal
                                    </div>
                                    <div className="text-sm mt-4">
                                        Innovative motor finance dealer portal
                                        that delivers the tools to increase lead
                                        generation and deal conversion rates.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/halo.png"
                                    alt="Halo Case Management"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Halo Case Management
                                    </div>
                                    <div>Case Management and CRM Platform</div>
                                    <div className="text-sm mt-4">
                                        Specialised substance misuse system used
                                        by some of the largest addiction
                                        services across the UK.
                                    </div>
                                </div>
                            </li>
                            <li className="flex items-center flex-col max-w-[400px] mx-12 my-4 border border-neutral-400 rounded-md">
                                <Image
                                    className="rounded-t-md"
                                    src="/images/projects/spark.png"
                                    alt="Spark Compliance"
                                    width={400}
                                    height={400}
                                />
                                <div className="flex flex-col p-4 w-full">
                                    <div className="text-lg font-semibold mb-2">
                                        Spark Compliance
                                    </div>
                                    <div>
                                        Incident tracking and Quality Control
                                        System
                                    </div>
                                    <div className="text-sm mt-4">
                                        Audit and quality improvement system for
                                        UK charities and public bodies who have
                                        responsibility to report to the CQC.
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full">
                    <div className="mx-6">
                        <h2
                            className="text-3xl font-semibold tracking-tight mb-4 mt-8"
                            id="blog"
                        >
                            Blog
                        </h2>
                        <ul className="list-disc list-inside">
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.ensono.com/insights-and-news/expert-opinions/transforming-your-digital-strategy-with-a-headless-cms/"
                                >
                                    Transforming Your Digital Strategy with a
                                    Headless CMS
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://www.ensono.com/insights-and-news/expert-opinions/leveraging-data-maturity-to-personalize-retail-shopping-experiences/"
                                >
                                    Leveraging Data Maturity to Personalize
                                    Retail Shopping Experiences
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://medium.com/@george_wilde/introducing-the-safe-assignment-operator-in-javascript-59a6c8fcd6ce"
                                >
                                    Introducing the Safe Assignment Operator in
                                    JavaScript
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://medium.com/@george_wilde/a-guide-to-writing-effective-user-stories-658823dec2e0"
                                >
                                    A Guide To Writing Effective User Stories
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://medium.com/@george_wilde/the-10-books-every-software-developer-should-read-5b6bd08755cc"
                                >
                                    The 10 books every software developer should
                                    read
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://medium.com/@george_wilde/why-sizing-user-stories-will-save-you-time-6e32561cfd81"
                                >
                                    Why sizing user stories will save you time
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://medium.com/@george_wilde/top-7-podcasts-of-2016-for-business-minded-programmers-6620af1cba43"
                                >
                                    Top 7 podcasts for business minded
                                    programmers
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://medium.com/@george_wilde/how-to-setup-a-custom-domain-on-github-pages-c481028c4fa"
                                >
                                    How to setup a custom domain on GitHub Pages
                                </a>
                            </li>
                            <li>
                                <a
                                    target="_blank"
                                    href="https://medium.com/@george_wilde/how-to-start-your-new-project-with-scrum-4136c93d1a25"
                                >
                                    How to start your new project with Scrum
                                </a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="w-full">
                    <div className="mx-6">
                        <h2
                            className="text-3xl font-semibold tracking-tight mb-4 mt-8"
                            id="contact"
                        >
                            Contact
                        </h2>
                        <p>
                            If you would like to discuss an opportunity or
                            project, please get in touch.
                        </p>
                        <p>
                            <a href="mailto:george@wildecreations.co.uk">
                                george@wildecreations.co.uk
                            </a>
                        </p>
                    </div>
                </section>
            </main>
            <footer className="w-full mt-6">
                <div className="bg-gray-800 text-white py-6 px-6">
                    <p>&copy; 2025 Wilde Creations. All rights reserved.</p>
                </div>
                <div className="bg-gray-900 text-white py-6 px-6">
                    <p>
                        Most of the showcased work displayed on this site was
                        created while working for past full-time employers or
                        while under contract to other companies, all of who
                        solely own the rights to these materials.
                    </p>
                </div>
            </footer>
        </>
    );
}
