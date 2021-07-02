/*
 *  Entry JavaScript bundle for twrm.io project.
 *  Created On 24 June 2021
 */

import './emoji.js'

import isMobile from 'is-mobile'
import { read } from 'localstorage-helpr'

import box from '../../components/box/box'
import localStorage from './localStorage'
import reveal from './reveal'
import theme from './theme'
import loadTweets from './tweets.js'

// main function
;(async () => {
    // create localStorage default keys
    await localStorage()

    // set application theme
    await theme()

    // initialize the core functionality
    await box()

    // check if the device is mobile
    if (isMobile() == false && read('motionReduced') == false) await reveal()

    // load the tweets
    loadTweets()
})()
