/* eslint-env node */

const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['**/*.html', '**/*.svg'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                gray: colors.blueGray,
                green: colors.emerald,
                primary: '#0496ff',
                dark: '#212738',
                twitter: '#1da1f2',
                default: '#F0F2F8',
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
                'main-md': '90vh',
                'main-lg': '95vh',
            },
            zIndex: {
                back: '-1',
            },
        },
        container: {
            center: true,
        },
        fontFamily: {
            sans: [
                'Manrope',
                'ui-sans-serif',
                'system-ui',
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                '"Noto Sans"',
                'sans-serif',
            ],
        },
    },
    plugins: [require('tailwind-caret-color')()],
}
