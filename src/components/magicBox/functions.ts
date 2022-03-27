/*
 *  Contains functions used by the magic box.
 *  Created On 21 March 2022
 */

import { Dispatch, SetStateAction } from "react"

// this function contains in invisible character
// added to the replace Regex.
// eslint-disable-next-line no-useless-escape
const magic = (value: string) => value.replace(/([@#\.])/gi, '$1​')

// copyToClipboard() will copy the text within
// #box using the newer clipboard API
export const copyToClipboard = async (value: string, setStatus: Dispatch<SetStateAction<number>>) => {
    if (!value) return

    const wrapSetStatus = (value: number) => {
        setStatus(value)

        setTimeout(() => {
            setStatus(-1)
        }, 1000)
    }

    try {
        await navigator.clipboard.writeText(magic(value))
        wrapSetStatus(0)
    } catch {
        wrapSetStatus(1)
    }
}
