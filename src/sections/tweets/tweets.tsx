/*
 *  The tweets section that pulls my latest tweets from mahat.
 *  Created On 21 March 2022
 */

import { ReactElement, useEffect, useState } from 'react'
import { Tweet } from 'react-static-tweets'
import fetchTweets, { fixTweetRenderingProblems } from './functions'

export const Tweets = (): ReactElement => {
    const [ tweets, setTweets ] = useState([])

    useEffect(() => {
        fetchTweets()
            .then(tw => setTweets(tw))
    }, [])

    return <section id="tweets" className="relative z-10 mt-14">
        <div className="container px-10">
            <h3 className="mb-3 font-body text-3xl font-bold md:text-4xl lg:text-5xl">Tweets</h3>
            <p className="text-slate-400 font-medium lg:text-xl">A curated feed of tips, tricks and resources, I tweet 🐦</p>

            <div className="gradient no-right relative">
                <div className="relative flex flex-col space-y-6 items-center my-5 pb-5 md:space-y-0 md:flex-row md:items-start md:overflow-x-scroll md:overflow-y-hidden md:space-x-4">
                    { tweets.map((tweet: any) => {
                        const id = tweet.url.split('/').filter((elm: string) => Boolean(elm))[4]

                        return <div className="w-full" key={id} onLoad={() => fixTweetRenderingProblems()} ><Tweet id={id} className="fixTweetRenderingProblems" /></div>
                    }) }
                </div>
            </div>
        </div>
    </section>
}
