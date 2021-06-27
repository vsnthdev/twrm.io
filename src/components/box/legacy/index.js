/*
 *  Uses a much more widely supported copying method into
 *  the clipboard for old browsers.
 *  Created On 27 June 2021
 */

import Clipboard from 'clipboard'

import { magic } from '../modern/index'

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

    // handle events
    clip.on('success', () => {
        document.querySelector('svg#error').style.opacity = 0
        document.querySelector('svg#typing').style.opacity = 0
        document.querySelector('svg#success').style.opacity = 1
    })

    clip.on('error', () => {
        document.querySelector('svg#error').style.opacity = 1
        document.querySelector('svg#typing').style.opacity = 0
        document.querySelector('svg#success').style.opacity = 0
    })

    // attach the keyup event
    box.addEventListener('keyup', e => {
        if (e.keyCode != 13) return
        btn.click()
    })
}
