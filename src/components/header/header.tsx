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
import { SettingsState, openSettings } from '../settings/functions'

export const Header = ({ settingsState }: { settingsState: SettingsState }): ReactElement => {
    return <>
        {/* header gradient for PWAs to merge title bar appearance */}
        <div className="absolute pointer-events-none z-30 w-full h-28 bg-gradient-to-b from-primary to-[transparent]"></div>

        <header className="absolute z-50 w-full px-6 py-10">
            <div className="px-4 container justify-between flex text-white">
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
                    <button className="ml-4 cursor-pointer" onClick={() => openSettings(settingsState)}>
                        <SettingsIcon/>
                    </button>
                </div>
            </div>
        </header>
    </>
}
