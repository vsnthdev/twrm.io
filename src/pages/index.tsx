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
import { getAppTitle } from '../utils/index'

const Home: NextPage = () => {
    // prepare settings modal state
    const settingsState = initSettingsState()

    return <>
        {/* SEO */}
        <NextSeo title={getAppTitle()} />

        {/* the header common for the entire website */}
        <Header settingsState={settingsState} />

        {/* Settings modal */}
        <Settings state={settingsState}></Settings>

        {/* the main section */}
        <Main/>
    </>
}

export default Home
