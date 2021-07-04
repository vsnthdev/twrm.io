/*
 *  Animates the buy me a coffee button on hover.
 *  Created On 04 July 2021
 */

import gsap from 'gsap'

const button = document.querySelector('#buymeacoffee')

const tl = gsap.timeline({
    paused: true,
    defaults: {
        repeat: -1,
        yoyo: true,
        transformOrigin: 'center',
    },
})

tl.to(button, {
    rotateZ: -5,
    rotateY: -20,
}).to(button, {
    rotateZ: 5,
})

button.addEventListener('mouseover', () => {
    tl.play()
})

button.addEventListener('mouseout', () => {
    tl.pause().progress(0)
})
