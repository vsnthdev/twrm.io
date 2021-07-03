/*
 *  Set the app theme according to the user preferrence.
 *  Created On 27 June 2021
 */

import { read } from 'localstorage-helpr'

const html = document.querySelector('html')

const setTheme = dark => (dark == true ? html.classList.add('dark') : html.classList.remove('dark'))

export default () => {
    const userPref = read('theme')
    if (!userPref) {
        setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches)

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => setTheme(event.matches))
    } else {
        if (userPref == 'dark') html.classList.add('dark')
    }
}
