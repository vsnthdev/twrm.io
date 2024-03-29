/*
 *  Site-wide header component contains navigation links
 *  and settings button.
 *  Created On 17 March 2022
 */

import { Logo } from './logo'
import { GitHub } from './icons/github'
import { Discord } from './icons/discord'
import { Twitter } from './icons/twitter'
import { Settings } from './icons/settings'
import { SettingsState, toggleSettings } from '../settings/functions'
import { MutableRefObject, ReactElement, useRef } from 'react'

interface HeaderParams {
    state: SettingsState
    cog: MutableRefObject<null>
}

export const Header = ({ state, cog }: HeaderParams): ReactElement => {
    const gradient = useRef(null)
    const logo = useRef(null)
    const github = useRef(null)
    const twitter = useRef(null)
    const discord = useRef(null)

    return <>
        {/* header gradient for PWAs to merge title bar appearance */}
        <div ref={gradient} className='absolute pointer-events-none z-30 w-full h-28 bg-gradient-to-b from-primary to-[transparent]'></div>

        <header className='absolute z-50 w-full px-6 py-10'>
            <div className='px-4 container justify-between flex text-white'>
                <div ref={logo}>
                    <a href='/'>
                        <Logo/>
                    </a>
                </div>
                <div className='flex items-center text-lg'>
                    {/* GitHub Icon */}
                    <a ref={github} href='https://github.com/vsnthdev/twrm.io' target='_blank' rel='noopener' className='mx-2 transition-opacity opacity-70 hover:opacity-100'>
                        <GitHub/>
                    </a>

                    {/* Twitter Icon */}
                    <a ref={twitter} href='https://vas.cx/twitter' target='_blank' rel='noopener' className='mx-2 transition-opacity opacity-70 hover:opacity-100'>
                        <Twitter/>
                    </a>

                    {/* Discord Icon */}
                    <a ref={discord} href='https://vas.cx/discord' target='_blank' rel='noopener' className='mx-2 transition-opacity opacity-70 hover:opacity-100'>
                        <Discord/>
                    </a>

                    {/* Settings Cog */}
                    <button ref={cog} className='ml-4 cursor-pointer' onClick={() => toggleSettings(state)}>
                        <Settings/>
                    </button>
                </div>
            </div>
        </header>
    </>
}
