import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                sans: ['PPObjectSans', 'ui-sans-serif', 'system-ui'],
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            animation: {
                marquee: 'marquee 18s linear infinite',
            },
        },
    },
    plugins: [
        plugin(({ addComponents, theme }) => {
            addComponents({
                '.delivery-card': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: theme('spacing.3'),
                    borderRadius: '10px',
                    borderWidth: '2px',
                    borderColor: theme('#5F5F5F'),
                    padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
                    fontSize: theme('fontSize.sm')[0],
                    lineHeight: theme('fontSize.sm')[1].lineHeight,
                },
            })
        }),
    ],
}


