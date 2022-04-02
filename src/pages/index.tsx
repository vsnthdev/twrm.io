/*
 *  The home page or the single page for twrm.io project.
 *  Created On 15 March 2022
 */

import type { NextPage } from 'next'
import { Header } from '../components/header/header';
import { initSettingsState } from '../components/settings/functions'
import { Settings } from '../components/settings/settings'
import { Main } from '../sections/main/main'
import { NextSeo } from 'next-seo'
import { getAppName, getAppTitle, getAppFullDescription, getHomepage } from '../utils/index'
import { Tweets } from '../sections/tweets/tweets'
import { Readme } from '../sections/readme/readme'
import { Footer } from '../sections/footer/footer'
import { useRef } from 'react';

const Home: NextPage = () => {
    // prepare settings modal state
    const settingsState = initSettingsState()
    const cog = useRef(null)

    return <>
        {/* SEO */}
        <NextSeo
            title={getAppTitle()}
            description={getAppFullDescription()}
            openGraph={{
                title: getAppTitle(),
                description: getAppFullDescription(),
                url: getHomepage(),
                type: 'website',
                site_name: getAppName(),
                images: [{
                    width: 2560,
                    height: 1280,
                    alt: 'cover',
                    type: 'image/png',
                    url: `${getHomepage()}/cover.png`,
                    secureUrl: `${getHomepage()}/cover.png`
                }]
            }}
            twitter={{
                cardType: 'summary_large_image',
                site: getHomepage(),
                handle: 'vsnthdev'
            }} />

        {/* the header common for the entire website */}
        <Header state={settingsState} cog={cog} />

        {/* Settings modal */}
        <Settings state={settingsState} cog={cog}></Settings>

        {/* the main section */}
        <Main state={settingsState}/>

        {/* tweets section */}
        <Tweets/>

        {/* readme section */}
        <Readme/>

        {/* footer section */}
        <Footer/>
    </>
}

export default Home
