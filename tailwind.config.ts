import type { Config } from 'tailwindcss';

export default {
    darkMode: 'selector', // TODO: Add a toggle to switch between dark and light mode to the UI
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
            },
            fontFamily: {
                raleway: ['var(--font-raleway-sans)'],
                lora: ['var(--font-lora)'],
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
} satisfies Config;
