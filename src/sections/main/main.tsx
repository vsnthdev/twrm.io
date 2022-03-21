/*
 *  The main section of the app, also the most important section.
 *  Created On 17 March 2022
 */

import { ReactElement } from 'react'
import Curve from './curve.svg'
// import BlobBig from './blobs/big.svg'

export const Main = (): ReactElement => {
    return <main className="relative flex bg-primary h-main md:h-main-md lg:h-main-lg">
        {/* the content */}

        {/* background curve */}
        <div className="absolute -bottom-[3px] -left-3 z-10 text-slate-100" style={{ width: '110vw' }}><Curve/></div>
        
        {/* blobs in background */}
        {/* <BlobBig/> */}

        {/* dots in background */}
    </main>
}
