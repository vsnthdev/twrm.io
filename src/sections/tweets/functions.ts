/*
 *  Used to fetch tweets from mahat.
 *  Created On 21 March 2022
 */

import axios from 'axios'

export const fixTweetRenderingProblems = () => {
    document.querySelectorAll('.fixTweetRenderingProblems .static-tweet-p').forEach(card => {
        let count = 0
    
        card.querySelectorAll('a').forEach(a => {
            if ((a.textContent as string).startsWith('#')) {
                if (count == 0) {
                    a.innerHTML = `\n\n${a.innerHTML}`
                    card.parentElement?.parentElement?.parentElement?.classList.remove('fixTweetRenderingProblems')
                } else {
                    (a.previousSibling as HTMLElement).style.display = 'none'
                }
    
                count++
            }
        })
    })

    document.querySelectorAll('.static-tweet-p').forEach(card => {
        const emojis = Array.from(card.querySelectorAll('.static-tweet-emoji'))
    
        for (const emoji of emojis) {
            if (Boolean(emoji.nextElementSibling) == false) continue
            if (emoji.nextElementSibling?.tagName.toLowerCase() == 'br') {
                const furtherNext = emoji.nextElementSibling.nextElementSibling
    
                if (Boolean(furtherNext) == false) return
                if (furtherNext?.tagName.toLowerCase() == 'a') {
                    (emoji.nextElementSibling as HTMLElement).style.display = 'none'
                }
            }
        }
    })
}

export const scrollGradientIndicators = (div: HTMLDivElement) => {
    const container = div.parentElement as HTMLDivElement
    const maxScroll = div.scrollWidth - div.clientWidth

    if (div.scrollLeft != 0) {
        container.classList.remove('md:before:opacity-0')
        container.classList.add('md:before:opacity-100')
    } else {
        container.classList.remove('md:before:opacity-100')
        container.classList.add('md:before:opacity-0')
    }

    if (div.scrollLeft == maxScroll) {
        container.classList.add('md:after:opacity-0')
        container.classList.remove('md:after:opacity-100')
    } else {
        container.classList.add('md:after:opacity-100')
        container.classList.remove('md:after:opacity-0')
    }
}

export const horizontalScrolling = ({ current }: { current: HTMLDivElement }) => {
    current.addEventListener('wheel', e => {
        e.preventDefault()
       current.scrollLeft = current.scrollLeft + e.deltaY
    },
    {
        passive: false
    })
}

export default async () => {
    const { data } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev/tweets'
    })

    return data
}
