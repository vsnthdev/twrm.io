/*
 *  Animations for the main section.
 *  Created On 02 April 2022
 */

import gsap from 'gsap'
import { MutableRefObject } from "react"

interface AnimationRefs {
    main: MutableRefObject<null>
    box: MutableRefObject<null>
    blobLarge: MutableRefObject<null>
    blobMedium: MutableRefObject<null>
    blobSmall: MutableRefObject<null>
    dotsLarge: MutableRefObject<null>
    dotsMedium: MutableRefObject<null>
    dotsSmall: MutableRefObject<null>
}

export default (refs: AnimationRefs) => {
    const { main, box, blobLarge, blobMedium, blobSmall, dotsLarge, dotsMedium, dotsSmall } = refs

    const tl = gsap.timeline({
        defaults: {
            opacity: 0,
            ease: 'power3'
        }
    })

    // animating the blobs
    tl
        .from(main.current, {
            y: -100,
        })
        .from(blobLarge.current, {
            y: -100,
            stagger: 0
        })
        .from(blobMedium.current, {
            y: -100,
        }, 0.6)
        .from(blobSmall.current, {
            y: 100
        }, 0.7)
    
    // animating the dots
    tl
        .from(dotsSmall.current, {
            y: -100
        }, 0.5)
        .from(dotsMedium.current, {
            y: -100
        }, 0.7)
        .from(dotsLarge.current, {
            y: -100
        }, 0.9)
    
    // animating the box
    tl.from(box.current, {
        y: 20,
        duration: 0.3
    })
}

