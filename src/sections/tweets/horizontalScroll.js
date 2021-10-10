/*
 *  Sets up horizontal scrolling to the tweets section.
 *  Created On 10 October 2021
 */

import isMobile from 'is-mobile'

// will make sure that horizontal scrolling happens
// on the tweets section this function should ideally
// be invoked on desktop as mobiles will still use
// vertical scrolling
export default container => {
    // we capture the wheel event & override the scrolling direction
    // on desktop while preventing the natural behaviour
    if (isMobile()) return

    container.addEventListener('wheel', event => {
        event.preventDefault()

        if (event.shiftKey) {
            window.scrollTo({
                top: window.scrollY + event.deltaX,
            })
        } else {
            container.scrollLeft = container.scrollLeft + event.deltaY
        }
    })

    // add or remove the left and right gradient indicator
    // depending on whether there is more content in the direction
    // of scrolling or not
    container.addEventListener('scroll', () => {
        const maxScrollLeft = container.scrollWidth - container.clientWidth
        if (container.scrollLeft != 0) {
            container.parentElement.classList.remove('no-right')
        } else {
            container.parentElement.classList.add('no-right')
        }

        if (container.scrollLeft == maxScrollLeft) {
            container.parentElement.classList.add('no-left')
        } else {
            container.parentElement.classList.remove('no-left')
        }
    })
}
