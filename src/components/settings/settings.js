/*
 *  Initialize MicroModal library to be used for settings.
 *  Created On 04 July 2021
 */

import gsap from 'gsap'
import MicroModal from 'micromodal'

const modal = document.querySelector('#settings')
const btn = document.querySelector('.settings-btn')
const modalCard = modal.querySelector('#settings-card')

const reverseAnimation = (tl, timeScale = 1) => {
    if (tl.reversed()) {
        tl.timeScale(timeScale).play()
    } else {
        tl.timeScale(timeScale).reverse()
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
    } else {
        // scroll to the top of the page
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
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
            })
            .to(modal, {
                opacity: 1,
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
                card.play()
                background.play()
            },
        })
    }
})
