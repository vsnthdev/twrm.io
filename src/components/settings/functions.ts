/*
 *  Contains additional functions to prepare & handle the state
 *  of the Settings component.
 *  Should only be invoked from parent component.
 *  Created On 17 March 2022
 */

import { Dispatch, SetStateAction, useState } from 'react'

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

export const saveOnLocalStorage = (key: string, setter: Dispatch<SetStateAction<string>>) => {
    return (value: string) => {
        // fire the setter function
        setter(value)

        // set in localStorage
        localStorage.setItem(key, value)
    }
}

export const initSettingsState = (): SettingsState => {
    const [ isOpen, setIsOpen ] = useState(false)

    const [ theme, updateTheme ] = useState('dark')
    const setTheme = saveOnLocalStorage('theme', updateTheme)

    const [ autoCopy, updateAutoCopy ] = useState('false')
    const setAutoCopy = saveOnLocalStorage('autoCopy', updateAutoCopy)

    const [ reducedMotion, updateReducedMotion ] = useState('false')
    const setReducedMotion = saveOnLocalStorage('reducedMotion', updateReducedMotion)

    return { isOpen, setIsOpen, theme, setTheme, autoCopy, setAutoCopy, reducedMotion, setReducedMotion }
}

export const populateState = (state: SettingsState): void => {
    state.setTheme(localStorage.getItem('theme') as string)
    state.setAutoCopy(localStorage.getItem('autoCopy') as string)
    state.setReducedMotion(localStorage.getItem('reducedMotion') as string)
}

export const openSettings = (state: SettingsState) => state.setIsOpen(true)
export const closeSettings = (state: SettingsState) => state.setIsOpen(false)
