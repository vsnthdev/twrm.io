/*
 *  Reveals the main section using mojs once all the assets
 *  are loaded and ready to be rendered.
 *  Created On 27 June 2021
 */

import gsap from 'gsap'

export default () => {
    // animate the main section
    gsap.from('main', {
        opacity: 0,
        y: -100,
        ease: 'power2',
    })

    // animate the circles
    gsap.from('main svg.circle.big', {
        opacity: 0,
        y: -100,
        delay: 0.5,
        ease: 'power3',
    })

    gsap.from('main svg.circle.smaller', {
        opacity: 0,
        y: -100,
        delay: 0.6,
        ease: 'power3',
    })

    gsap.from('main svg.circle.smallest', {
        opacity: 0,
        y: 100,
        delay: 0.8,
        ease: 'power3',
    })

    // animate the dots
    gsap.from('main svg.dots.smallest', {
        opacity: 0,
        y: -100,
        delay: 0.6,
        ease: 'power3',
    })

    gsap.from('main svg.dots.smaller', {
        opacity: 0,
        delay: 0.8,
        ease: 'power3',
    })

    gsap.from('main svg.dots.big', {
        opacity: 0,
        y: -100,
        delay: 0.8,
        ease: 'power3',
    })

    // animate the logo
    gsap.from('header .logo', {
        opacity: 0,
        y: -100,
        delay: 0.9,
        ease: 'power3',
    })

    // animate the icons
    gsap.from('header .github', {
        opacity: 0,
        y: -100,
        delay: 0.9,
        ease: 'power3',
    })

    gsap.from('header .twitter', {
        opacity: 0,
        y: -100,
        delay: 0.93,
        ease: 'power3',
    })

    gsap.from('header .discord', {
        opacity: 0,
        y: -100,
        delay: 0.96,
        ease: 'power3',
    })

    gsap.from('header .settings', {
        opacity: 0,
        y: -100,
        delay: 0.99,
        ease: 'power3',
    })

    gsap.from('main #boxContainer', {
        opacity: 0,
        ease: 'power3',
        delay: 1.2,
        y: 30,
        duration: 0.5,
    })
}
