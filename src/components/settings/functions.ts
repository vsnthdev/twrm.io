/*
 *  Contains additional functions to prepare & handle the state
 *  of the Settings component.
 *  Should only be invoked from parent component.
 *  Created On 17 March 2022
 */

import { Dispatch, SetStateAction, useState } from 'react'
import { applyTheme, cleanLocalStorage } from '../../utils/index'

export interface SettingsState {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

    theme: string
    setTheme: (value: string) => void

    autoCopy: string
    setAutoCopy: (value: string) => void

    reducedMotion: string
    setReducedMotion: (value: string) => void
}

export const saveOnLocalStorage = (key: string, setter: Dispatch<SetStateAction<string>>, functions?: Array<(value: string) => any>) => {
    return (value: string) => {
        // fire the setter function
        setter(value)

        // call the functions one by one
        if (functions)
            for (const func of functions) func(value)

        // set in localStorage
        localStorage.setItem(key, value)
    }
}

export const initSettingsState = (): SettingsState => {
    const [ isOpen, setIsOpen ] = useState(false)

    const [ theme, updateTheme ] = useState('dark')
    const setTheme = saveOnLocalStorage('theme', updateTheme, [ applyTheme ])

    const [ autoCopy, updateAutoCopy ] = useState('false')
    const setAutoCopy = saveOnLocalStorage('autoCopy', updateAutoCopy)

    const [ reducedMotion, updateReducedMotion ] = useState('false')
    const setReducedMotion = saveOnLocalStorage('reducedMotion', updateReducedMotion)

    return { isOpen, setIsOpen, theme, setTheme, autoCopy, setAutoCopy, reducedMotion, setReducedMotion }
}

export const openSettings = (state: SettingsState) => state.setIsOpen(true)
export const closeSettings = (state: SettingsState) => state.setIsOpen(false)
export const toggleSettings = (state: SettingsState) => state.setIsOpen(!state.isOpen)

export const populateState = (state: SettingsState): void => {
    cleanLocalStorage()
    const getStr = (key: string, def: string) => localStorage.getItem(key) || def
    
    state.setTheme(getStr('theme', 'Auto'))
    state.setAutoCopy(getStr('autoCopy', 'true'))
    state.setReducedMotion(getStr('reducedMotion', 'false'))
}
