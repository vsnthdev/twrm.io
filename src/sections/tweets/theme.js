/*
 *  Handles reloading (if necessary) the tweets to match
 *  the current theme.
 *  Created On 10 October 2021
 */

import qs from 'qs'
import Url from 'url-parse'

import { setCache } from './caching.js'

export default theme => {
    let counter = 0

    document
        .querySelector('#tweets-content')
        .querySelectorAll('iframe')
        .forEach(frame => {
            const url = new Url(frame.src)
            const query = qs.parse(url.query)

            // switch to dark theme
            if (query.theme == theme) return
            query.theme = theme

            url.query = qs.stringify(query)
            frame.src = url.toString()

            frame.onload = () => {
                counter++
                if (counter == 10) setTimeout(() => setCache(document.querySelector('#tweets-content')), 1000)
            }
        })
}
