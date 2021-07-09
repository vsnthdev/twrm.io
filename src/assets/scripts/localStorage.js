/*
 *  This file checks  if all files are required are initialized with defaults
 *  if not, we'll initialize with a default value.
 *  Created On 27 June 2021
 */

import { create, read } from 'localstorage-helpr'

const set = (key, value) => (read(key) == null ? create(key, value) : false)

const config = {
    theme: 'auto',
    motionReduced: false,
    autoCopy: navigator.clipboard ? true : false,
    copyMethod: navigator.clipboard ? 'modern' : 'legacy',
}

// these are the default values that are created
// upon a clean first visit.
export default () => {
    // delete old keys from localStorage
    for (const key in localStorage) {
        if (Object.keys(config).includes(key) == false) localStorage.removeItem(key)
    }

    // add new keys to localStorage
    for (const key in config) {
        set(key, config[key])
    }
}
