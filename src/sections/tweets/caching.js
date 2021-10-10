/*
 *  This file handles caching the tweets section
 *  so it can be loaded in background and saved into the cache.
 *  We follow the cache-first policy.
 *  Created On 10 October 2021
 */

export const getCache = async container => {
    // use the Caching API within the browser
    const cache = await caches.open('tweets')
    const inCache = await cache.match('/sections/tweets')

    // render from cache if found
    if (inCache) {
        const cachedOn = Number(inCache.headers.get('sw-fetched-on'))
        const shouldBe = cachedOn + 1000 * 60 * 60 * 23

        if (shouldBe > new Date().getTime()) container.innerHTML = await inCache.text()
    }
}

export const setCache = async container => {
    // open the cache again
    const cache = await caches.open('tweets')

    // create a new header where we store the UNIX epoch
    // when this cache is being saved
    const headers = new Headers()
    headers.append('sw-fetched-on', new Date().getTime())

    // along with the headers class we just initlized
    // store that section's output into cache
    const resp = new Response(container.innerHTML, {
        headers,
    })
    await cache.put('/sections/tweets', resp)
}
