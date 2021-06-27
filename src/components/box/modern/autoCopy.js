/*
 *  Performs the copy operation to clipboard.
 *  Created On 27 June 2021
 */

// depending on the browser and operating system
// autoCopy may be disabled completely.

import { copyToClipboard } from './index'

let timer
const timeout = 1000
let previousText

const press = e => {
    // since we already copy when pressing
    // enter, autoCopy need not fire once again
    if (e.keyCode == 13) return

    // typing...
    window.clearTimeout(timer)
}

const up = e => {
    // since we already copy when pressing
    // enter, autoCopy need not fire once again
    if (e.keyCode == 13) return

    window.clearTimeout(timer)
    timer = setTimeout(copyToClipboard, timeout)
}

export default async box => {
    box.addEventListener('keypress', press)
    box.addEventListener('keyup', up)

    box.addEventListener('keyup', () => {
        if (document.querySelector('#box').value != previousText) {
            document.querySelector('svg#error').style.opacity = 0
            document.querySelector('svg#typing').style.opacity = 1
            document.querySelector('svg#success').style.opacity = 0
            previousText = document.querySelector('#box').value
        }
    })
}
