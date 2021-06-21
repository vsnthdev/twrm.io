/*
 *  Run control for Vite bundler.
 *  Created On 22 June 2021
 */

import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        emptyOutDir: true,
        outDir: '../dist'
    },
    server: {
        open: true,
        port: 2020
    }
})