/*
 *  Contains utility functions used across the application.
 *  Created On 21 March 2022
 */

import app from '../../package.json'

export const getAppName = () => app.name
export const getAppTitle = (): string => `${app.name} — ${app.description}`
export const getAppFullDescription = () => "twrm.io lets you disable linked mentions, hashtags, and links on your Twitter tweets, using zero-width Unicode characters. Made with 💖 by Vasanth Srivatsa."
export const getHomepage = () => app.homepage

export const cleanLocalStorage = (): void => {
    const blackList = ['motionReduced']

    for (const name of blackList) localStorage.removeItem(name)
}

