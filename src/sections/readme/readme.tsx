/*
 *  Dynamically fetches the README.md & shows a 'How it works' section.
 *  Created On 26 March 2022
 */

import { ReactElement } from 'react'
import Curve from './curve.svg'

export const Readme = (): ReactElement => {
    return <>
        <div className='text-white dark:text-secondary-light'><Curve/></div>
    </>
}
