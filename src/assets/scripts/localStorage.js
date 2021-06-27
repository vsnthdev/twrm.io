/*
 *  This file checks  if all files are required are initialized with defaults
 *  if not, we'll initialize with a default value.
 *  Created On 27 June 2021
 */

import { create, read } from 'localstorage-helpr'

const set = (key, value) => (read(key) == null ? create(key, value) : false)

// these are the default values that are created
// upon a clean first visit.
export default async () => {
    set('theme', false)
    set('animations', 'mobile')
    set('autoCopy', navigator.clipboard ? true : false)
    set('copyMethod', navigator.clipboard ? 'modern' : 'legacy')
}
