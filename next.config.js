/*
 *  Next.js config file for twrm.io project.
 *  Created On 15 March 2022
 */

const nextPWA = require('next-pwa')

/**
 * @type {import('next').NextConfig}
 */
module.exports = {
    reactStrictMode: false,
    images: {
        domains: ['pbs.twimg.com']
    },
}
