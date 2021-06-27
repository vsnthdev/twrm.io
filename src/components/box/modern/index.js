/*
 *  Does the magic and uses the modern Clipboard API to
 *  to copy the generated output into clipboard.
 *  Created On 27 June 2021
 */

import { read } from 'localstorage-helpr'

import autoCopy from './autoCopy'

// map elements with JavaScript
const box = document.querySelector('#box')

// this function contains in invisible character
// added to the replace Regex.
// eslint-disable-next-line no-useless-escape
export const magic = () => box.value.replace(/([@#\.])/gi, '$1​')

export const copyToClipboard = () => {
    if (!box.value) return

    try {
        navigator.clipboard.writeText(magic(box.value))
        document.querySelector('svg#error').style.opacity = 0
        document.querySelector('svg#typing').style.opacity = 0
        document.querySelector('svg#success').style.opacity = 1
    } catch {
        document.querySelector('svg#error').style.opacity = 1
        document.querySelector('svg#typing').style.opacity = 0
        document.querySelector('svg#success').style.opacity = 0
    }
}

export default async () => {
    // enable autoCopy if set
    if (read('autoCopy') == true) autoCopy(box)

    // hook the return key
    box.addEventListener('keyup', event => {
        if (event.keyCode != 13) return
        copyToClipboard()
    })
}
