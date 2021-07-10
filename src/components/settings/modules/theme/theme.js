/*
 *  Applies the theme when the select box
 *  values changes.
 *  Created On 05 July 2021
 */

import { read } from 'localstorage-helpr'

import { setTheme } from '../../../../assets/scripts/theme'

export default settings => {
    const selectBox = settings.querySelector('select#theme')

    const indexMaps = {
        dark: 0,
        light: 1,
        auto: 2,
    }

    selectBox.selectedIndex = indexMaps[read('theme')]

    selectBox.addEventListener('change', event =>
        setTheme({
            theme: event.target.value,
        }),
    )
}
