'use client';

import React, { useState } from 'react';

import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    const NavigationLinks = () => (
        <div className="flex flex-col md:flex-row gap-6 items-center uppercase">
            <Link
                className="transition-all hover:text-blue-800 w-full text-center p-6 md:p-0 hover:bg-neutral-100 md:hover:bg-transparent"
                href="/"
                onClick={handleNavClick}
            >
                Home
            </Link>
            <a
                className="transition-all hover:text-blue-800 w-full text-center p-6 md:p-0 hover:bg-neutral-100 md:hover:bg-transparent"
                href="#skills"
                onClick={handleNavClick}
            >
                Skills
            </a>
            <a
                className="transition-all hover:text-blue-800 w-full text-center p-6 md:p-0 hover:bg-neutral-100 md:hover:bg-transparent"
                href="#testimonials"
                onClick={handleNavClick}
            >
                Testimonials
            </a>
            <a
                className="transition-all hover:text-blue-800 w-full text-center p-6 md:p-0 hover:bg-neutral-100 md:hover:bg-transparent"
                href="#projects"
                onClick={handleNavClick}
            >
                Projects
            </a>
            <a
                className="transition-all hover:text-blue-800 w-full text-center p-6 md:p-0 hover:bg-neutral-100 md:hover:bg-transparent"
                href="#blog"
                onClick={handleNavClick}
            >
                Blog
            </a>
            <a
                className="transition-all hover:text-blue-800 w-full text-center p-6 md:p-0 hover:bg-neutral-100 md:hover:bg-transparent"
                href="#contact"
                onClick={handleNavClick}
            >
                Contact
            </a>
        </div>
    );

    return (
        <header className="flex flex-col items-center w-full justify-between">
            <nav className="w-full max-w-screen-2xl mb-12 lg:mb-16 py-5 px-4">
                <div className="flex flex-row md:items-center justify-between">
                    <Link
                        className="text-3xl font-semibold tracking-tight"
                        href="/"
                    >
                        <Image
                            src="/images/logo.png"
                            alt="Wilde Creations"
                            width={128}
                            height={56}
                        />
                    </Link>
                    {isMobileMenuOpen ? (
                        <div className="fixed w-full top-0 left-0 right-0 bottom-0 bg-white px-4 py-7">
                            <div className="text-right mb-6">
                                <button
                                    className="md:hidden border border-neutral-500 rounded p-3"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    <Image
                                        src="/images/close.svg"
                                        alt="Close"
                                        width={32}
                                        height={32}
                                    />
                                </button>
                            </div>
                            <NavigationLinks />
                        </div>
                    ) : (
                        <button
                            className="md:hidden border border-neutral-500 rounded px-3 py-0"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Image
                                src="/images/menu.svg"
                                alt="Menu"
                                width={32}
                                height={32}
                            />
                        </button>
                    )}
                    <div className="mt-6 md:mt-0 hidden md:block">
                        <NavigationLinks />
                    </div>
                </div>
            </nav>
        </header>
    );
};
