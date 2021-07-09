/*
 *  Loads a feed of curated tweets from my API.
 *  Created On 28 June 2021
 */

/* global twttr */

import axios from 'axios'
import isMobile from 'is-mobile'
import { read } from 'localstorage-helpr'
import nprogress from 'nprogress'
import qs from 'qs'
import Url from 'url-parse'

import { validateTheme } from '../../assets/scripts/theme'

// the division where we'll create embeds from Twitter
const container = document.querySelector('#tweets-content')

// TODO: export this function which reloads the embeds
// with a different theme
export const applyThemeToTweets = theme => {
    container.querySelectorAll('iframe').forEach(frame => {
        const url = new Url(frame.src)
        const query = qs.parse(url.query)

        // switch to dark theme
        query.theme = theme

        url.query = qs.stringify(query)
        frame.src = url.toString()
    })
}

// setupHorizontalScroll() will make sure that
// horizontal scrolling happens on the tweets section
// this function should ideally be invoked on desktop
// as mobiles will still use vertical scrolling
const setupHorizontalScroll = () => {
    // we capture the wheel event, and override
    // the scrolling direction on desktop
    // while preventing the natural behaviour
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

export default async () => {
    // start the progress bar as soon
    // as we start loading the embeds
    nprogress.start()

    // a counter to incrementally tick the progress bar
    let counter = 0

    // send a GET request to our API and get the
    // tweets as response the request should
    // be cached by a service worker for a shot period
    let { data: tweets } = await axios({
        method: 'GET',
        url: 'https://api.vasanthdeveloper.com/twitter',
    })

    // loop through each tweet in the response
    for (const index in tweets) {
        // grab the tweet and it's ID
        const tweet = tweets[index]
        const id = tweet.url.split('/').filter(elm => Boolean(elm))[4]

        // create an anchor container that encapsulates
        // the actual embed to open the tweet in a new window
        // when clicked
        const anchor = document.createElement('a')
        anchor.href = tweet.url
        anchor.target = '_blank'
        anchor.rel = 'noopener'
        container.appendChild(anchor)

        // using Twitter's widget.js which is loaded
        // separately (see index.html) we create our embeds
        // of each of our tweets
        twttr.widgets.createTweetEmbed(id, anchor, { theme: validateTheme(read('theme')) }).then(() => {
            // since these tweets are being loaded in async
            // the order at they load isn't predictable, so
            // we maintain a counter above and increment it
            // to show the progress bar
            counter = counter + 10

            // hide the progress if the percent is 100
            counter / 100 == 1 ? nprogress.done() : nprogress.set(counter / 100)
        })
    }

    // only run horizontal scrolling function if it's
    // a desktop or a tablet device, we use vertical scrolling
    // for mobile devices
    if (isMobile() == false) setupHorizontalScroll()
}
