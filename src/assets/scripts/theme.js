/*
 *  Set the app theme according to the user preferrence.
 *  Created On 27 June 2021
 */

import { read, update } from 'localstorage-helpr'

import { applyThemeToTweets } from '../../sections/tweets/tweets'

const html = document.querySelector('html')

const getSystemTheme = () => {
    const dark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return dark ? 'dark' : 'light'
}

export const validateTheme = theme => {
    // resolve the auto value
    if (theme == 'auto') theme = getSystemTheme()

    // all possible theme values
    const possible = ['light', 'dark']

    // handle invalid theme given
    if (possible.includes(theme) == false) throw new Error(`Invalid value "${theme}" provided.`)

    // return a resolved theme if correct
    return theme
}

window.setTheme = ({ theme, apply = true }) => {
    // validate the inputs
    theme = validateTheme(theme)

    // set it on localStorage
    update('theme', theme)

    // optionally apply it
    if (apply == false) return
    applyTheme({ theme })
}

const applyTheme = ({ theme = read('theme') }) => {
    // validate the inputs
    theme = validateTheme(theme)

    // start applying
    if (theme == 'light') {
        html.classList.remove('dark')
        applyThemeToTweets(theme)
    } else if (theme == 'dark') {
        html.classList.add('dark')
        applyThemeToTweets(theme)
    }
}

export default () => {
    const userPref = read('theme')

    if (!userPref) {
        window.setTheme({
            theme: getSystemTheme(),
        })

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event =>
            window.setTheme({
                theme: event.matches ? 'dark' : 'light',
            }),
        )
    } else {
        applyTheme({
            theme: userPref,
        })
    }
}
