/*
 *  Updates copyMethod in localStorage and modifies
 *  the current system to work accordingly.
 *  Created On 06 July 2021
 */

import { read, update } from 'localstorage-helpr'

import autoCopy from '../../../components/box/modern/autoCopy'

export default settings => {
    const checkBox = settings.querySelector('input#autoCopy')
    checkBox.checked = read('autoCopy')

    checkBox.addEventListener('change', () => {
        // update in localStorage
        update('autoCopy', checkBox.checked)

        // modifying current runtime to add or
        // remove autoCopy accordingly
        autoCopy(checkBox.checked)
    })
}
