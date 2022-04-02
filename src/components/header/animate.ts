/*
 *  Animations for the header section.
 *  Created On 02 April 2022
 */

import gsap from 'gsap'
import { MutableRefObject } from 'react'

interface AnimationRefs {
    gradient: MutableRefObject<null>
    logo:  MutableRefObject<null>
    github:  MutableRefObject<null>
    twitter:  MutableRefObject<null>
    discord:  MutableRefObject<null>
    cog:  MutableRefObject<null>
}

export default (refs: AnimationRefs) => {
    const { gradient, logo, github, twitter, discord, cog } = refs

    const tl = gsap.timeline({
        defaults: {
            ease: 'power4'
        }
    })

    tl
        .from(gradient.current, {
            opacity: 0
        })
        .from(logo.current, {
            y: -100
        })
        .from(github.current, {
            y: -100
        }, 0.6)
        .from(twitter.current, {
            y: -100
        }, 0.65)
        .from(discord.current, {
            y: -100
        }, 0.7)
        .from(cog.current, {
            y: -100
        }, 0.75)
}
