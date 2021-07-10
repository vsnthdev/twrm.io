/*
 *  Toggles animations when twrm.io gets loaded.
 *  Created On 09 July 2021
 */

import { read, update } from 'localstorage-helpr'

export default settings => {
    const toggle = settings.querySelector('input#motionReduced')
    toggle.checked = read('motionReduced')

    toggle.addEventListener('change', () => {
        // update in localStorage
        update('motionReduced', toggle.checked)
    })
}
