/*
 *  Uses a much more widely supported copying method into
 *  the clipboard for old browsers.
 *  Created On 27 June 2021
 */

import Clipboard from 'clipboard'

import { magic, showBoxIndicator } from '../modern/index'

// creates a virtual trigger button
// that is used to copy text to clipboard
// using Clipboard.js
const makeTrigger = () => {
    const btn = document.createElement('button')
    btn.style.display = 'none'
    btn.id = 'copyTrigger'
    btn.setAttribute('onmousedown', 'e.preventDefault()')
    document.querySelector('#boxContainer').appendChild(btn)
    return btn
}

export default async () => {
    // grab the box
    const box = document.querySelector('#box')

    // create a button
    const btn = await makeTrigger()

    // create a new instance of Clipboard.js
    const clip = new Clipboard(btn, {
        text: () => {
            return magic(box.value)
        },
    })

    // show appropriate indicator when an event is fired
    clip.on('success', () => showBoxIndicator('success'))
    clip.on('error', () => showBoxIndicator('failed'))

    // attach the keyup event
    box.addEventListener('keyup', e => {
        if (e.keyCode != 13) return
        btn.click()
    })
}
