/*
 *  Replaces Unicode emoji into Twemoji SVGs and caches them using
 *  a service worker.
 *  Created On 28 June 2021
 */

import twemoji from 'twemoji'

twemoji.parse(document.body, {
    ext: '.svg',
    folder: 'svg',
    className: 'emoji',
})
