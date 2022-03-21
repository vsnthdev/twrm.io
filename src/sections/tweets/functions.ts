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
        const emojis = card.querySelectorAll('.static-tweet-emoji')
    
        for (const emoji of emojis) {
            if (Boolean(emoji.nextElementSibling) == false) continue
            if (emoji.nextElementSibling.tagName.toLowerCase() == 'br') {
                const furtherNext = emoji.nextElementSibling.nextElementSibling
    
                if (Boolean(furtherNext) == false) return
                if (furtherNext.tagName.toLowerCase() == 'a') {
                    emoji.nextElementSibling.style.display = 'none'
                }
            }
        }
    })
}

export default async () => {
    const { data } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev/tweets'
    })

    return data
}
