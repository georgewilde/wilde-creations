import type { Metadata } from 'next';
import { Raleway, Lora } from 'next/font/google';
import './globals.css';

const ralewaySans = Raleway({
    variable: '--font-raleway-sans',
    subsets: ['latin'],
});

const loraSerif = Lora({
    variable: '--font-lora',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'George Wilde - Technology Leader',
    description:
        'George Wilde is a technology leader with a passion for building and scaling high-performing teams.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${ralewaySans.variable} ${loraSerif.variable} antialiased font-raleway bg-white dark:bg-neutral-900 flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-0 text-neutral-900`}
            >
                {children}
            </body>
        </html>
    );
}
