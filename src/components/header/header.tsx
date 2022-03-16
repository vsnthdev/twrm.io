/*
 *  Site-wide header component contains navigation links
 *  and settings button.
 *  Created On 17 March 2022
 */

import { ReactElement } from 'react'
import Logo from './logo.svg'
import GitHubIcon from './icons/github.svg'
import TwitterIcon from './icons/twitter.svg'
import DiscordIcon from './icons/discord.svg'
import SettingsIcon from './icons/settings.svg'

export const Header = (): ReactElement => {
    return <header className="px-6 py-10">
        <div className="px-4 container justify-between flex">
            <div>
                <a href="/">
                    <Logo/>
                </a>
            </div>
            <div className="flex items-center text-lg">
                {/* GitHub Icon */}
                <a href="https://github.com/vsnthdev/twrm.io" target="_blank" rel="noopener" className="mx-2 transition-opacity opacity-70 hover:opacity-100">
                    <GitHubIcon/>
                </a>

                {/* Twitter Icon */}
                <a href="https://vas.cx/twitter" target="_blank" rel="noopener" className="mx-2 transition-opacity opacity-70 hover:opacity-100">
                    <TwitterIcon/>
                </a>

                {/* Discord Icon */}
                <a href="https://vas.cx/discord" target="_blank" rel="noopener" className="mx-2 transition-opacity opacity-70 hover:opacity-100">
                    <DiscordIcon/>
                </a>

                {/* Settings Cog */}
                <button className="ml-4 cursor-pointer">
                    <SettingsIcon/>
                </button>
            </div>
        </div>
    </header>
}
