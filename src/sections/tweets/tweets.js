/*
 *  Loads a feed of curated tweets from my API.
 *  Created On 28 June 2021
 */

import { getCache, setCache } from './caching.js'
import horizontalScroll from './horizontalScroll.js'
import render from './render.js'

// the division where we'll create embeds from Twitter
const container = document.querySelector('#tweets-content')

export default async () => {
    // apply horizontal scrolling
    horizontalScroll(container)

    // render the tweets section if we have a cache
    await getCache(container)

    // render or update the tweets
    await render(container)

    // cache the rendered tweets section
    await setCache(container)
}
