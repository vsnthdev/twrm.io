/*
 *  Next.js config file for twrm.io project.
 *  Created On 15 March 2022
 */

/**
 * @type {import('next').NextConfig}
 */
const config = {
    reactStrictMode: true,
    images: {
        domains: ['pbs.twimg.com']
    },
    webpack: config => {
        config.module.rules.push({
            test: /\.svg$/,
            use: [
                {
                    loader: '@svgr/webpack',
                    options: {
                        typescript: true,
                        svgoConfig: {
                            plugins: []
                        }
                    }
                }
            ],
            issuer: {
                and: [/\.(js|ts)x?$/]
            }
        })

        return config
    }
}

module.exports = config
