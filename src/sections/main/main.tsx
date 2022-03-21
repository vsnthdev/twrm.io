/*
 *  The main section of the app, also the most important section.
 *  Created On 17 March 2022
 */

import { ReactElement } from 'react'
import Curve from './curve.svg'
import BlobLarge from './blobs/large.svg'
import BlobMedium from './blobs/medium.svg'
import BlobSmall from './blobs/small.svg'

export const Main = (): ReactElement => {
    return <main className="relative overflow-hidden flex bg-primary h-main md:h-main-md lg:h-main-lg">
        {/* the content */}

        {/* background curve */}
        <div className="absolute -bottom-[3px] -left-3 z-10 text-slate-100" style={{ width: '110vw' }}><Curve/></div>
        
        {/* blobs in background */}
        <div className="absolute -top-20 -left-20 w-64 sm:w-[19rem] md:w-[35rem] md:-top-48 md:-left-48 lg:w-[44rem] lg:-top-52 lg:-left-52"><BlobLarge/></div>
        <div className="absolute md:w-80 md:-right-20 md:-top-20 lg:w-96 lg:-right-28 lg:-top-28"><BlobMedium/></div>
        <div className="absolute w-40 -bottom-8 right-28 sm:w-52 md:right-44 lg:w-64 xl:w-80 lg:right-[28vw]"><BlobSmall/></div>

        {/* dots in background */}
    </main>
}
