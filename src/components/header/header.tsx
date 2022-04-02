/*
 *  Site-wide header component contains navigation links
 *  and settings button.
 *  Created On 17 March 2022
 */

import { ReactElement, useEffect, useRef } from 'react'
import Logo from './logo.svg'
import GitHubIcon from './icons/github.svg'
import TwitterIcon from './icons/twitter.svg'
import DiscordIcon from './icons/discord.svg'
import SettingsIcon from './icons/settings.svg'
import animate from './animate'
import { SettingsState, toggleSettings } from '../settings/functions'

export const Header = ({ settingsState }: { settingsState: SettingsState }): ReactElement => {
    const gradient = useRef(null)
    const logo = useRef(null)
    const github = useRef(null)
    const twitter = useRef(null)
    const discord = useRef(null)
    const settings = useRef(null)

    useEffect(() => animate({ gradient, logo, github, twitter, discord, settings }), [])

    return <>
        {/* header gradient for PWAs to merge title bar appearance */}
        <div ref={gradient} className="absolute pointer-events-none z-30 w-full h-28 bg-gradient-to-b from-primary to-[transparent]"></div>

        <header className="absolute z-50 w-full px-6 py-10">
            <div className="px-4 container justify-between flex text-white">
                <div ref={logo}>
                    <a href="/">
                        <Logo/>
                    </a>
                </div>
                <div className="flex items-center text-lg">
                    {/* GitHub Icon */}
                    <a ref={github} href="https://github.com/vsnthdev/twrm.io" target="_blank" rel="noopener" className="mx-2 transition-opacity opacity-70 hover:opacity-100">
                        <GitHubIcon/>
                    </a>

                    {/* Twitter Icon */}
                    <a ref={twitter} href="https://vas.cx/twitter" target="_blank" rel="noopener" className="mx-2 transition-opacity opacity-70 hover:opacity-100">
                        <TwitterIcon/>
                    </a>

                    {/* Discord Icon */}
                    <a ref={discord} href="https://vas.cx/discord" target="_blank" rel="noopener" className="mx-2 transition-opacity opacity-70 hover:opacity-100">
                        <DiscordIcon/>
                    </a>

                    {/* Settings Cog */}
                    <button ref={settings} className="ml-4 cursor-pointer" onClick={() => toggleSettings(settingsState)}>
                        <SettingsIcon/>
                    </button>
                </div>
            </div>
        </header>
    </>
}
