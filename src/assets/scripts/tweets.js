/*
 *  Loads a feed of curated tweets from my API.
 *  Created On 28 June 2021
 */

import axios from 'axios'
import gsap from 'gsap'
import nprogress from 'nprogress'
import qs from 'qs'
import Url from 'url-parse'

const container = document.querySelector('#tweetsContent')

nprogress.start()

container.addEventListener('wheel', event => {
    container.scrollLeft = container.scrollLeft + event.deltaY
    event.preventDefault()
})

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

window.setTheme = () => {
    container.querySelectorAll('iframe').forEach(frame => {
        const url = new Url(frame.src)
        const query = qs.parse(url.query)

        // switch to dark theme
        query.theme = query.theme == 'light' ? 'dark' : 'light'

        url.query = qs.stringify(query)
        frame.src = url.toString()
    })
}

export default async () => {
    let { data: tweets } = await axios({
        method: 'GET',
        url: 'https://api.vasanthdeveloper.com/twitter',
    })

    let counter = 0

    for (const index in tweets) {
        const tweet = tweets[index]
        const id = tweet.url.split('/').filter(elm => Boolean(elm))[4]

        // create an anchor container
        const anchor = document.createElement('a')
        anchor.href = tweet.url
        anchor.target = '_blank'
        anchor.rel = 'noopener'
        container.appendChild(anchor)

        // add the iframe
        // eslint-disable-next-line no-undef
        twttr.widgets.createTweetEmbed(id, anchor).then(rendered => {
            counter = counter + 10
            counter / 100 == 1 ? nprogress.done() : nprogress.set(counter / 100)

            gsap.from(rendered, {
                opacity: 0,
                y: 50,
            })
        })
    }
}
