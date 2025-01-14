import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
    baseDirectory: import.meta.dirname,
});

const eslintConfig = [
    ...compat.config({
        extends: [
            'plugin:prettier/recommended',
            'plugin:unicorn/recommended',
            'plugin:compat/recommended',
            'plugin:import/recommended',
            'plugin:import/typescript',
            'plugin:jsx-a11y/recommended',
            'plugin:no-unsanitized/recommended-legacy',
            'plugin:testing-library/react',
            'plugin:vitest/recommended',
            'next/typescript',
            'next/core-web-vitals',
            'plugin:@next/next/recommended',
        ],
        rules: {
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'react/jsx-props-no-spreading': 'off',
            'testing-library/await-async-utils': 'error',
            'testing-library/await-async-queries': 'error',
            'testing-library/no-wait-for-side-effects': 'error',
            'testing-library/no-manual-cleanup': 'error',
            'testing-library/prefer-explicit-assert': 'warn',
            'testing-library/prefer-presence-queries': 'warn',
            'testing-library/prefer-user-event': 'warn',
            'testing-library/no-debugging-utils': 'off',
            'import/order': [
                'error',
                {
                    groups: [
                        ['builtin', 'external'],
                        ['parent', 'internal', 'sibling', 'index'],
                    ],
                    pathGroups: [
                        {
                            pattern: '@payuk-onboarding-app/**',
                            group: 'internal',
                        },
                    ],
                    alphabetize: {
                        order: 'asc',
                    },
                    'newlines-between': 'always',
                },
            ],
            'import/no-extraneous-dependencies': 'off',
            'import/prefer-default-export': 'off',
            'import/extensions': [
                'error',
                'always',
                {
                    ts: 'never',
                    tsx: 'never',
                    js: 'never',
                    jsx: 'never',
                },
            ],
            'no-console': 'off',
            'no-duplicate-imports': 'error',
            'no-irregular-whitespace': 'error',
            'no-shadow': 'off',
            'no-use-before-define': 'off',
            'no-restricted-exports': 'off',
            'security/detect-object-injection': 'off',
            'import/default': 'off',
            'unicorn/no-array-reduce': 'off',
            'unicorn/no-null': 'off',
            'unicorn/prefer-module': 'off',
            'unicorn/filename-case': 'off',
            'unicorn/no-array-for-each': 'off',
            'unicorn/no-for-loop': 'off',
            'unicorn/prevent-abbreviations': [
                'error',
                {
                    allowList: {
                        getServerSideProps: true,
                        getStaticProps: true,
                        EISCD: true,
                    },
                    replacements: {
                        env: {
                            environment: false,
                        },
                        props: {
                            properties: false,
                        },
                        lib: {
                            library: false,
                        },
                    },
                },
            ],
        },
    }),
];

export default eslintConfig;
