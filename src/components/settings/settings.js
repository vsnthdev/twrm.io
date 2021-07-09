/*
 *  Initialize MicroModal library to be used for settings.
 *  Created On 04 July 2021
 */

import gsap from 'gsap'
import { read } from 'localstorage-helpr'
import MicroModal from 'micromodal'

import autoCopy from './scripts/autoCopy'
import motionReduced from './scripts/motionReduced'
import theme from './scripts/theme'

const modal = document.querySelector('#settings')
const btn = document.querySelector('.settings-btn')
const modalCard = modal.querySelector('#settings-card')

theme(modalCard)
autoCopy(modalCard)
motionReduced(modalCard)

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

const cords = btn.getBoundingClientRect()
const modalWidth = Number(getComputedStyle(modalCard).width.slice(0, -2))

modalCard.style.top = `${cords.y + 32}px`
modalCard.style.left = `${cords.left - modalWidth + 20}px`

btn.addEventListener('click', () => {
    modalCard.style.top = `${cords.y + 32}px`
    modalCard.style.left = `${cords.left - modalWidth + 20}px`

    if (modal.classList.contains('open')) {
        MicroModal.close('settings')
        read('motionReduced') ||
            gsap.from(btn, {
                rotation: -90,
            })
    } else {
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

        const background = gsap.timeline({
            paused: true,
            defaults: {
                ease: 'power4',
                duration: 0.5,
                yoyo: true,
            },
        })

        background
            .from(modal, {
                opacity: 0,
                pointerEvents: 'none',
            })
            .to(modal, {
                opacity: 1,
                pointerEvents: 'all',
            })

        const card = gsap.timeline({
            paused: true,
            defaults: {
                ease: 'power4',
                duration: 0.5,
                yoyo: true,
            },
        })

        card.from(modalCard, {
            y: 10,
            opacity: 0,
        }).to(modalCard, {
            y: 0,
            opacity: 1,
        })

        MicroModal.show('settings', {
            disableScroll: true,
            openClass: 'open',
            onClose: () => {
                reverseAnimation(background, 2)
                reverseAnimation(card, 2)
            },
            onShow: modal => {
                modal.style.display = 'flex'
                if (read('motionReduced')) {
                    card.pause().seek(100)
                    background.pause().seek(100)
                } else {
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
