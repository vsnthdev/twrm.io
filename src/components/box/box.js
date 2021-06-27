/*
 *  This file contains the core functionality which is
 *  to prevent Twitter from creating clickable links
 * of mentions, hashtags, and URLs.
 *  Created On 27 June 2021
 */

import { read } from 'localstorage-helpr'

import modern from './modern/index'

const typingIndicator = () => {
    const box = document.querySelector('#box')
    const indicator = document.querySelector('#typing')

    box.addEventListener('keyup', () =>
        box.value.length == 0 ? indicator.classList.remove('active') : indicator.classList.add('active'),
    )
}

export default async () => {
    // initialize the typing indicator
    typingIndicator()

    if (read('copyMethod') == 'legacy' || window.isSecureContext == false) {
        // dynamically import the legacy
        // bundle.
        const { default: legacy } = await import('./legacy/index')
        await legacy()
        return
    } else if (read('copyMethod') == 'modern') {
        await modern()
    }
}
