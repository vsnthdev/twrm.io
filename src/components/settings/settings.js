/*
 *  Initialize MicroModal library to be used for settings.
 *  Created On 04 July 2021
 */

import gsap from 'gsap'
import { read } from 'localstorage-helpr'
import MicroModal from 'micromodal'

import autoCopy from './modules/autoCopy/autoCopy'
import motionReduced from './modules/motionReduced/motionReduced'
import theme from './modules/theme/theme'

// reference to the settings modal
const modal = document.querySelector('#settings')
const btn = document.querySelector('.settings-btn')
const modalCard = modal.querySelector('#settings-card')

// initialize the modules settings modal
theme(modalCard)
autoCopy(modalCard)
motionReduced(modalCard)

// position the settings modal
const positionModal = () => {
    const cords = btn.getBoundingClientRect()
    const modalWidth = Number(getComputedStyle(modalCard).width.slice(0, -2))

    modalCard.style.top = `${cords.y + 32}px`
    modalCard.style.left = `${cords.left - modalWidth + 20}px`
}

// animate the settings modal and background
const animateModal = () => {
    // timeline for the modal background
    const background = gsap.timeline({
        paused: true,
        defaults: {
            ease: 'power4',
            duration: 0.5,
            yoyo: true,
        },
    })

    // timeline for the modal card
    const card = gsap.timeline({
        paused: true,
        defaults: {
            ease: 'power4',
            duration: 0.5,
            yoyo: true,
        },
    })

    // animate the modal background
    background
        .from(modal, {
            opacity: 0,
            pointerEvents: 'none',
        })
        .to(modal, {
            opacity: 1,
            pointerEvents: 'all',
        })

    // animate the modal card
    card.from(modalCard, {
        y: 10,
        opacity: 0,
    }).to(modalCard, {
        y: 0,
        opacity: 1,
    })

    // return both timelines
    return { background, card }
}

// reverses a given animation or timeline
const reverseAnimation = (tl, timeScale = 1) => {
    if (read('motionReduced')) {
        tl.pause().seek(0)
    } else {
        if (tl.reversed()) {
            tl.timeScale(timeScale).play()
        } else {
            tl.timeScale(timeScale).reverse()
        }
    }
}

// position the settings modal on load
positionModal()

// animate the modal
const { background, card } = animateModal()

// bind the settings modal to the settings button
btn.addEventListener('click', () => {
    // position the settings modal on click
    positionModal()

    if (modal.classList.contains('open')) {
        // close the settings modal
        MicroModal.close('settings')
        read('motionReduced') ||
            gsap.from(btn, {
                rotation: -90,
            })
    } else {
        // open the modal and spin the settings button
        read('motionReduced') ||
            gsap.from(btn, {
                rotation: 90,
            })

        // scroll to the top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: read('motionReduced') ? 'auto' : 'smooth',
        })

        // show the settings modal using MicroModal.js
        MicroModal.show('settings', {
            disableScroll: true,
            openClass: 'open',
            onClose: () => {
                reverseAnimation(background, 2)
                reverseAnimation(card, 2)
            },
            onShow: modal => {
                // initially the modal is set to display none, so we set
                // it to display: flex to show it
                modal.style.display = 'flex'

                // simply seek, if motionReduced is enabled
                if (read('motionReduced')) {
                    card.pause().seek(100)
                    background.pause().seek(100)
                } else {
                    // else play the animations at real time
                    card.play()
                    background.play()
                }
            },
        })
    }
})

// close the modal when clicked on the
// background
modal.addEventListener('click', event => {
    if (event.target != modal) return
    MicroModal.close('settings')
})
