/*
 *  The tweets section that pulls my latest tweets from mahat.
 *  Created On 21 March 2022
 */

import { ReactElement, useEffect, useState } from 'react'
import { Tweet } from 'react-static-tweets'
import fetchTweets, { fixTweetRenderingProblems, scrollGradientIndicators } from './functions'

export const Tweets = (): ReactElement => {
    const [ tweets, setTweets ] = useState([])

    useEffect(() => {
        fetchTweets()
            .then(tw => setTweets(tw))
    }, [])

    return <section id="tweets" className="relative z-10 mt-14">
        <div className="container px-10">
            <h3 className="mb-3 font-body text-3xl font-bold md:text-4xl lg:text-5xl">Tweets</h3>
            <p className="text-slate-400 font-medium lg:text-xl">A curated feed of 💡 tips, tricks 🪄 and resources, I 🐦 tweet</p>

            {/* the left and right gradients */}
            <div className="relative before:bg-tweets-gradient-before before:absolute before:top-0 before:-left-1 before:z-20 before:h-full before:w-28 before:transition-opacity before:duration-100 after:bg-tweets-gradient-after after:absolute after:top-0 after:-right-1 after:z-20 after:h-full after:w-28 after:transition-opacity after:duration-100 before:opacity-0 after:opacity-0 md:after:opacity-100">
                <div className="relative flex flex-col space-y-6 items-center my-5 pb-5 md:space-y-0 md:flex-row md:items-start md:overflow-x-scroll md:overflow-y-hidden md:space-x-4" onScroll={e => scrollGradientIndicators(e.target as HTMLDivElement)}>
                    { tweets.map((tweet: any) => {
                        const id = tweet.url.split('/').filter((elm: string) => Boolean(elm))[4]
                        return <div className="w-full" key={id} onLoad={() => fixTweetRenderingProblems()} ><Tweet id={id} className="fixTweetRenderingProblems" /></div>
                    }) }
                </div>
            </div>
        </div>
    </section>
}
