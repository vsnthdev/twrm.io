/*
 *  Contains additional functions to prepare & handle the state
 *  of the Settings component.
 *  Should only be invoked from parent component.
 *  Created On 17 March 2022
 */

import { useState } from 'react'

export interface SettingsState {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const initSettingsState = (): SettingsState => {
    const [ isOpen, setIsOpen ] = useState(false)

    return { isOpen, setIsOpen }
}

export const openSettings = (state: SettingsState) => state.setIsOpen(true)
export const closeSettings = (state: SettingsState) => state.setIsOpen(false)
