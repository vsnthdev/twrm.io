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

    try {
        await navigator.clipboard.writeText(magic(value))
        setStatus(0)
    } catch {
        setStatus(1)
    }
}
