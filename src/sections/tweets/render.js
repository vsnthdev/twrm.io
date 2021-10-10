/* global twttr */
/*
 *  Freshly render or updates the tweets.
 *  Created On 10 October 2021
 */

import axios from 'axios'
import { read } from 'localstorage-helpr'

import { validateTheme } from '../../assets/scripts/theme.js'
import applyTheme from './theme.js'
import { getUniqueId } from './util.js'

const render = (container, theme) =>
    new Promise(resolve => {
        // send a GET request to our API and get the
        // tweets as response the request should
        // be cached by a service worker for a short period
        axios({
            method: 'GET',
            url: 'https://api.vsnth.dev/tweets',
        }).then(({ data }) => {
            // where we'll store an array of promises
            // of cards to be finished
            const promises = []

            // let's reverse the array so it's easier to update
            // when a new tweet comes up
            data = data.reverse()

            // loop through each tweet in the response
            for (const index in data) {
                // grab the tweet and it's ID and generate a unique
                // string based on that ID we've got, since the ID is always unique
                // from Twitter, we can assume that our string ID will also be unique
                const tweet = data[index]
                const tid = tweet.url.split('/').filter(elm => Boolean(elm))[4]
                const id = getUniqueId(tid)

                // check if that tweet already exists
                const exists = Boolean(container.querySelector(`#${id}`))
                if (exists) continue

                // create an anchor that encapsulates the actual embed
                // to open the tweet in a new window when clicked
                const a = document.createElement('a')
                a.href = tweet.url
                a.id = id
                a.target = '_blank'
                a.rel = 'noopener'
                container.prepend(a)

                // using Twitter's widget.js which is loaded separately
                // (see index.html) we create our embeds of each of our tweets
                promises.push(twttr.widgets.createTweetEmbed(tid, a, { theme }))
            }

            Promise.all(promises).then(() => {
                setTimeout(() => resolve(), 1200)
            })
        })
    })

export default async container => {
    const theme = validateTheme(read('theme'))

    // render or update the tweets section
    await render(container, theme)

    // apply or update the theme of the tweets
    await applyTheme(theme)
}
