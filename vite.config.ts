import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
    plugins: [react()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./vitest.setup.ts'],
        include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        reporters: ['default'],
        coverage: {
            reportsDirectory: '../../coverage/libs/onboarding',
            provider: 'v8',
            reporter: ['text', 'html'],
            include: ['src/**/*.{js,jsx,ts,tsx}'],
            exclude: [
                '**/*.d.ts',
                '**/*.config.*',
                '**/_app.*',
                'src/**/layout.tsx',
            ],
            thresholds: {
                lines: 60,
                functions: 59,
                branches: 59,
                statements: 60,
            },
        },
    },
});
