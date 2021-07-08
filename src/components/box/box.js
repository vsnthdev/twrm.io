/*
 *  This file contains the core functionality which is
 *  to prevent Twitter from creating clickable links
 *  of mentions, hashtags, and URLs.
 *  Created On 27 June 2021
 */

import { read } from 'localstorage-helpr'

import modern from './modern/index'
import { showBoxIndicator } from './modern/index'

let previousText

const typingIndicator = () => {
    const box = document.querySelector('#box')
    const indicator = document.querySelector('#typing')
    const checkBox = document.querySelector('#settings-card input#autoCopy')

    // handler is an eventHandler that will
    // trigger when the user is typing and show
    // an indicator accordingly
    const handler = () => {
        // read the current state from localStorage
        const state = read('autoCopy') && read('copyMethod') == 'modern'

        // decide whether to show or hide the element
        const display = state ? 'inline' : 'none'
        indicator.style.display = display

        // reset the status to typing if the text changed
        // to something other than what was previously stored
        if (document.querySelector('#box').value != previousText) {
            showBoxIndicator('typing')
            previousText = document.querySelector('#box').value
        }

        // we stop here if the state is false
        if (state == false) return

        // add or remove the class depending on
        // whether there's text in the input field
        // or not
        box.value.length == 0 ? indicator.classList.remove('active') : indicator.classList.add('active')
    }

    // run handler upon loading
    handler()

    // attach the handler to appropriate events
    box.addEventListener('keyup', handler)
    checkBox.addEventListener('change', handler)
}

export default async () => {
    // initialize the typing indicator
    typingIndicator()

    if (read('copyMethod') == 'legacy' || window.isSecureContext == false) {
        // dynamically import the legacy bundle
        // if we detect the modern way isn't possible
        const { default: legacy } = await import('./legacy/index')
        await legacy()
        return
    } else if (read('copyMethod') == 'modern') {
        await modern()
    }
}
