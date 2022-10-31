/*
 *  Contains additional functions to prepare & handle the state
 *  of the Settings component.
 *  Should only be invoked from parent component.
 *  Created On 17 March 2022
 */

import { LocalStorage, LocalKey } from 'ts-localstorage'
import { Dispatch, SetStateAction, useState } from 'react'
import { applyTheme, cleanLocalStorage,listenForThemeChange } from '../../utils/index'
import { config } from '../../utils/config'

export interface SettingsState {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>

    theme: number
    setTheme: (value: number) => void

    autoCopy: boolean
    setAutoCopy: (value: boolean) => void
}

export const saveOnLocalStorage = (key: LocalKey<any>, setter: Dispatch<SetStateAction<any>>, functions?: Array<(value: any) => any>) => {
    return (value: any) => {
        // fire the setter function
        setter(value)

        // call the functions one by one
        if (functions)
            for (const func of functions) func(value)

        // set in localStorage
        LocalStorage.setItem(key, value)
    }
}

export const initSettingsState = (): SettingsState => {
    const [ isOpen, setIsOpen ] = useState(false)

    const [ theme, updateTheme ] = useState(0)
    const setTheme = saveOnLocalStorage(config.theme, updateTheme, [ applyTheme ])

    const [ autoCopy, updateAutoCopy ] = useState(false)
    const setAutoCopy = saveOnLocalStorage(config.autoCopy, updateAutoCopy)

    return { isOpen, setIsOpen, theme, setTheme, autoCopy, setAutoCopy }
}

export const openSettings = (state: SettingsState) => state.setIsOpen(true)
export const closeSettings = (state: SettingsState) => state.setIsOpen(false)
export const toggleSettings = (state: SettingsState) => state.setIsOpen(!state.isOpen)

export const populateState = (state: SettingsState): void => {
    cleanLocalStorage()
    listenForThemeChange()

    // load the values from LocalStorage to React state
    state.setTheme(LocalStorage.getItem(config.theme) as number)
    state.setAutoCopy(LocalStorage.getItem(config.autoCopy) as boolean)
}

