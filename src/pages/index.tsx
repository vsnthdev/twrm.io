/*
 *  The home page or the single page for twrm.io project.
 *  Created On 15 March 2022
 */

import type { NextPage } from 'next'
import { Header } from '../components/header/header';
import { initSettingsState } from '../components/settings/functions'
import { Settings } from '../components/settings/settings'

const Home: NextPage = () => {
    // prepare settings modal state
    const settingsState = initSettingsState()

    return <>
        {/* the header common for the entire website */}
        <Header/>

        {/* Settings modal */}
        <Settings state={settingsState}></Settings>
    </>
}

export default Home
