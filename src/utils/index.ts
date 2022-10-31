/*
 *  Contains utility functions used across the application.
 *  Created On 21 March 2022
 */

import { LocalStorage } from 'ts-localstorage'
import app from '../../package.json'
import { config } from './config'

export const getAppName = () => app.name
export const getAppTitle = (): string => `${app.name} — ${app.description}`
export const getAppFullDescription = () => "twrm.io lets you disable linked mentions, hashtags, and links on your Twitter tweets, using zero-width Unicode characters. Made with 💖 by Vasanth Srivatsa."
export const getHomepage = () => app.homepage
export const getLicense = () => app.license

export const applyTheme = (value: number): void => {
    if (value == 0)
        value = window.matchMedia('(prefers-color-scheme: dark)').matches ? 2 : 1
    
    if (value == 1) {
        document.querySelector('html')?.classList.remove('dark')
    } else if (value == 2) {
        document.querySelector('html')?.classList.add('dark')
    }
}

export const listenForThemeChange = (): void => {
    window.matchMedia('(prefers-color-scheme: dark)')
        .addEventListener('change', () => {
            if (LocalStorage.getItem(config.theme) == 0) {
                applyTheme(
                    window.matchMedia('(prefers-color-scheme: dark)').matches ? 2 : 1
                )
            }
        })
}

export const cleanLocalStorage = (): void => {
    const blackList = ['motionReduced', 'reducedMotion']

    for (const name of blackList) localStorage.removeItem(name)
}

