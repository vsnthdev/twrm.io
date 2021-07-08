/*
 *  Performs the copy operation to clipboard.
 *  Created On 27 June 2021
 */

// depending on the browser and operating system
// autoCopy may be disabled completely.

import { read } from 'localstorage-helpr'

import { copyToClipboard } from './index'

let timer
const timeout = 1000

const press = e => {
    // since we already copy when pressing
    // enter, autoCopy need not fire once again
    if (e.keyCode == 13) return

    // typing...
    window.clearTimeout(timer)
}

const up = e => {
    // check if autoCopy is set to true
    if (read('autoCopy') == false) return

    // since we already copy when pressing
    // enter, autoCopy need not fire once again
    if (e.keyCode == 13) return

    window.clearTimeout(timer)
    timer = setTimeout(copyToClipboard, timeout)
}

export default async () => {
    const box = document.querySelector('#box')
    box.addEventListener('keypress', press)
    box.addEventListener('keyup', up)
}
