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

// setBoxIndicator() shows a given element
// and hides others depending on the input
export const showBoxIndicator = status => {
    // grab the container
    const container = document.querySelector('#boxContainer')

    // map statuses to their elements
    const possible = {
        typing: 'svg#typing',
        failed: 'svg#failed',
        success: 'svg#success',
    }

    // handle errors
    if (Object.keys(possible).includes(status) == false) throw new Error(`Invalid status given to showBoxIndicator()`)

    // show the one we need
    const show = container.querySelector(possible[status])
    show.style.opacity = 1

    // hide others accordingly
    for (const key of Object.keys(possible).filter(key => key != status)) {
        const hide = container.querySelector(possible[key])
        hide.style.opacity = 0
    }
}

// copyToClipboard() will copy the text within
// #box using the newer clipboard API
export const copyToClipboard = async () => {
    if (!box.value) return

    try {
        await navigator.clipboard.writeText(magic(box.value))
        showBoxIndicator('success')
    } catch {
        showBoxIndicator('failed')
    }
}

export default async () => {
    // enable autoCopy if set
    autoCopy(read('autoCopy') && read('copyMethod') == 'modern')

    // copy the text when the user presses the
    // enter key regardless of whether we've autoCopy
    // enabled or not
    box.addEventListener('keyup', event => {
        if (event.keyCode != 13) return
        copyToClipboard()
    })
}
