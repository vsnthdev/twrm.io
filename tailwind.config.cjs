/* eslint-env node */

const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['**/*.html', '**/*.svg'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0496ff',
                secondary: '#FF0054',
                dark: '#212738',
                twitter: '#1da1f2',
                success: '#1DD3B0',
            },
            textColor: {
                white: '#FFFFFF',
            },
            width: {
                box: '80vw',
                boxSm: '60vw',
                bigMd: '30rem',
                bigLg: '40rem',
                big2xl: '66rem',
            },
            height: {
                main: '50vh',
                mainMd: '90vh',
            },
            zIndex: {
                back: '-1',
            },
        },
        container: {
            center: true,
        },
        colors: {
            gray: colors.blueGray,
            green: colors.emerald,
        },
        fontFamily: {
            sans: ['Manrope', 'sans-serif'],
        },
    },
    plugins: [require('tailwind-caret-color')()],
}
