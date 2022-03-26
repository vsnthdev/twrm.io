/*
 *  TailwindCSS config file for twrm.io project.
 *  Created On 15 March 2022
 */

const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    content: [
        "./src/styles/safeList.txt",
        "./src/pages/**/*.{js,ts,tsx,svg}",
        "./src/sections/**/*.{js,ts,tsx,svg}",
        "./src/components/**/*.{js,ts,tsx,svg}",
    ],
    theme: {
        colors: {
            slate: colors.slate,
            primary: '#0496ff',
            secondary: '#001e3d',
            'secondary-light': '#002952',
            'secondary-lighter': '#003366',
            'secondary-lightest': '#003D7A',
            white: '#FFFFFF'
        },
        fontFamily: {
            sans: [
                'Basically A Sans Serif',
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
            ]
        },
        container: {
            center: true
        },
        extend: {
            transitionProperty: {
                stroke: 'stroke'
            },
            height: {
                main: '50vh',
                'main-md': '90vh',
                'main-lg': '95vh',
            },
            boxShadow: {
                box: '0px 10px 15px -3px rgba(0, 0, 0, 0.03)'
            }
        }
    },
    plugins: [],
}
