/*
 *  The main section of the app, also the most important section.
 *  Created On 17 March 2022
 */

import { ReactElement, useEffect, useRef } from 'react'
import { MagicBox } from '../../components/magicBox/magicBox';
import Curve from './curve.svg'
import BlobLarge from './blobs/large.svg'
import BlobMedium from './blobs/medium.svg'
import BlobSmall from './blobs/small.svg'
import DotsLarge from './dots/large.svg'
import DotsMedium from './dots/medium.svg'
import DotsSmall from './dots/small.svg'
import { SettingsState } from '../../components/settings/functions';
import animate from './animate'

export const Main = ({state}: {state: SettingsState}): ReactElement => {
    const main = useRef(null)
    const box = useRef(null)
    const blobLarge = useRef(null)
    const blobMedium = useRef(null)
    const blobSmall = useRef(null)
    const dotsLarge = useRef(null)
    const dotsMedium = useRef(null)
    const dotsSmall = useRef(null)

    // trigger animations on the page load
    useEffect(() => animate({ main, box, blobLarge, blobMedium, blobSmall, dotsLarge, dotsMedium, dotsSmall }), [])

    return <main ref={main} className="relative overflow-hidden flex bg-primary h-main md:h-main-md lg:h-main-lg">
        {/* the content */}
        <div ref={box} className="z-10 flex items-center justify-center w-full md:-mt-20 lg:-mt-40"><MagicBox state={state} /></div>

        {/* background curve */}
        <div className="absolute -bottom-[3px] -left-3 z-10 text-slate-100 dark:text-secondary" style={{ width: '110vw' }}><Curve/></div>
        
        {/* blobs in background */}
        <div ref={blobLarge} className="absolute -top-20 -left-20 w-64 sm:w-[19rem] md:w-[35rem] md:-top-48 md:-left-48 lg:w-[44rem] lg:-top-52 lg:-left-52"><BlobLarge/></div>
        <div ref={blobMedium} className="absolute md:w-80 md:-right-20 md:-top-20 lg:w-96 lg:-right-28 lg:-top-28"><BlobMedium/></div>
        <div ref={blobSmall} className="absolute w-40 -bottom-8 right-28 sm:w-52 md:right-44 lg:w-64 xl:w-80 lg:right-[28vw]"><BlobSmall/></div>

        {/* dots in background */}
        <div ref={dotsLarge} className="opacity-50 absolute md:w-40 top-[50%] left-[50%] -mt-16 -ml-96"><DotsLarge/></div>
        <div ref={dotsMedium} className="opacity-50 absolute md:w-32 -bottom-5 right-0 lg:bottom-5 xl:bottom-16"><DotsMedium/></div>
        <div ref={dotsSmall} className="opacity-50 absolute md:w-24 top-[50%] left-[50%] -mt-44 ml-64"><DotsSmall/></div>
    </main>
}
