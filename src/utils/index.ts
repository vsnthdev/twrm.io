/*
 *  Contains utility functions used across the application.
 *  Created On 21 March 2022
 */

import app from '../../package.json'

export const getAppTitle = (): string => `${app.name} — ${app.description}`

export const cleanLocalStorage = (): void => {
    const blackList = ['motionReduced']

    for (const name of blackList) localStorage.removeItem(name)
}

