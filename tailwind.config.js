/*
 *  TailwindCSS config file for twrm.io project.
 *  Created On 15 March 2022
 */

const colors = require('tailwindcss/colors')

module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,tsx,svg}",
        "./src/components/**/*.{js,ts,tsx,svg}",
    ],
    theme: {
        colors: {
            slate: colors.slate,
            primary: '#1e90ff',
            white: '#FFFFFF'
        },
        container: {
            center: true
        },
        extend: {
            transitionProperty: {
                stroke: 'stroke'
            }
        }
    },
    plugins: [],
}
