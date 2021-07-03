/*
 *  Run control for Vite bundler.
 *  Created On 22 June 2021
 */

import autoprefixer from 'autoprefixer'
import postCSSImport from 'postcss-import'
import inlineSVG from 'posthtml-inline-svg'
import modules from 'posthtml-modules'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'
import banner from 'vite-plugin-banner'
import { minifyHtml } from 'vite-plugin-html'
import { posthtmlPlugin } from 'vite-plugin-posthtml'
import { VitePWA } from 'vite-plugin-pwa'

const date = new Date()

export default ({ mode }) =>
    defineConfig({
        plugins: [
            // run PostHTML to construct the dist
            posthtmlPlugin({
                plugins: [
                    // render other HTML files as modules
                    modules({
                        root: 'src',
                    }),

                    // inline SVGs wherever required
                    // straight into HTML
                    inlineSVG({
                        cwd: 'src',
                        tag: 'vector',
                        attr: 'src',
                    }),
                ],
            }),

            // minify html during production
            mode == 'production' ? minifyHtml() : null,

            // add a banner to JavaScript bundles
            banner(
                `\n *  twrm.io — Turn off 🔗 linked mentions, #️⃣ hashtags on Twitter 🐦 tweets.\n *  GitHub: https://github.com/twrm/twrm.io\n *  Built on ${date.getDate()} ${date.toLocaleString(
                    'default',
                    { month: 'long' },
                )} ${date.getFullYear()}\n`,
            ),

            // configure and setup this website as a Progressive Web App
            VitePWA({
                manifest: {
                    // content of manifest
                },
                workbox: {
                    runtimeCaching: [
                        {
                            urlPattern: /.+fonts.googleapis.com.+|.+fonts.gstatic.com.+/,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'fonts',
                                expiration: {
                                    maxAgeSeconds: 60 * 60,
                                },
                            },
                        },
                        {
                            urlPattern: /.+twemoji.+|.+twimg.com.+/,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'emoji',
                                expiration: {
                                    maxAgeSeconds: 60 * 60,
                                },
                            },
                        },
                        {
                            urlPattern: /.+api.vasanthdeveloper.com.+/,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'api',
                                expiration: {
                                    maxAgeSeconds: 60 * 60,
                                },
                            },
                        },
                        {
                            urlPattern: /.+twitter.com.+/,
                            handler: 'CacheFirst',
                            options: {
                                cacheName: 'twitter',
                                expiration: {
                                    maxAgeSeconds: 60 * 60,
                                },
                            },
                        },
                    ],
                },
            }),
        ],
        css: {
            postcss: {
                plugins: [postCSSImport(), tailwindcss(), autoprefixer()],
            },
        },
        build: {
            emptyOutDir: true,
            outDir: '../dist',
        },
        server: {
            open: true,
            port: 2020,
        },
    })
