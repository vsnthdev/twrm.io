/*
 *  Run control for Vite bundler.
 *  Created On 22 June 2021
 */

import { defineConfig } from 'vite'
import { posthtmlPlugin } from 'vite-plugin-posthtml';
import modules from 'posthtml-modules';
import { minifyHtml } from 'vite-plugin-html';
import autoprefixer from 'autoprefixer';
import postCSSImport from 'postcss-import';
import tailwindcss from 'tailwindcss';

export default ({ mode }) => defineConfig({
    plugins: [
        // run PostHTML to construct the dist
        posthtmlPlugin({
            plugins: [
                modules({
                    root: 'src'
                })
            ]
        }),

        // minify html during production
        mode == 'production' ? minifyHtml() : null
    ],
    css: {
        postcss: {
            plugins: [
                postCSSImport(),
                tailwindcss(),
                autoprefixer()
            ]
        }
    },
    build: {
        emptyOutDir: true,
        outDir: '../dist'
    },
    server: {
        open: true,
        port: 2020
    }
})