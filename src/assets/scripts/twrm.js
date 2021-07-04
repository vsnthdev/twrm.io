/*
 *  Entry JavaScript bundle for twrm.io project.
 *  Created On 24 June 2021
 */

import './emoji.js'
import '../../sections/footer/footer'

import isMobile from 'is-mobile'
import { read } from 'localstorage-helpr'

import box from '../../components/box/box'
import tweets from '../../sections/tweets/tweets'
import localStorage from './localStorage'
import reveal from './reveal'
import theme from './theme'

// main function
;(async () => {
    // create localStorage default keys
    localStorage()

    // set application theme
    theme()

    // load the tweets
    tweets()

    // initialize the core functionality
    const ready = box()

    // check if the device is mobile
    if (isMobile() == false && read('motionReduced') == false) await reveal(ready)

    const { registerSW } = await import('virtual:pwa-register')
    registerSW({
        immediate: true,
    })
})()
