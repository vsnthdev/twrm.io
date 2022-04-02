/*
 *  Animates the settings dialog & settings cog.
 *  Created On 02 April 2022
 */

import gsap from 'gsap'
import { MutableRefObject } from 'react'

interface AnimateParams {
    isOpen: boolean
    cog: MutableRefObject<null>
}

export default ({ cog, isOpen }: AnimateParams) => {
    if (isOpen) {
        // while opening
        gsap.from(cog.current,  {
            rotation: 90
        })
    } else {
        // while closing
        gsap.from(cog.current,  {
            rotation: -90
        })
    }
}
