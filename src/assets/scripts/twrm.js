/*
 *  Entry JavaScript bundle for twrm.io project.
 *  Created On 24 June 2021
 */

import { read } from 'localstorage-helpr'

import box from '../../components/box/box'
import localStorage from './localStorage'
import theme from './theme'

// main function
;(async () => {
    // create localStorage default keys
    await localStorage()

    // set application theme
    await theme()

    // initialize the core functionality
    await box()

    // reveal the page by finishing AOS
    // init({
    //     once: true,
    //     disable: typeof read('animations') == 'boolean' ? !read('animations') : read('animations'),
    // })
})()
