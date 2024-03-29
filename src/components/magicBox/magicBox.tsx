/*
 *  The actual core functionality of twrm.io lies here.
 *  Created On 21 March 2022
 */

import { Failed } from './icons/failed'
import { Typing } from './icons/typing'
import { Success } from './icons/success'
import { copyToClipboard } from './functions'
import { ReactElement, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { SettingsState } from '../settings/functions'

export const MagicBox = ({ state }: { state: SettingsState }): ReactElement => {
    // the state of the copy process
    // -1 = not started yet
    // 0 = successful
    // 1 = failed
    const [status, setStatus] = useState(-1)

    // the input value entered in magic box
    const [text, setText] = useState('')

    // changes typing indicator color basing on whether
    // there's text or not in the magic box
    const getTypingIndicatorColor = () => text.length == 0 ? 'text-slate-300 dark:text-slate-500' : 'text-slate-500 dark:text-white'

    // wrap copyToClipboard() function
    const triggerCopy = (e: any) => e.key == 'Enter' && copyToClipboard(e.target.value, setStatus)

    // the autoCopy functionality
    const autoCopy = useDebouncedCallback(async (value: string) => {
        await copyToClipboard(value, setStatus)
    }, 750)

    return <div id='magicBox' className='relative flex w-[80vw] rounded-xl shadow-box max-w-2xl backdrop-blur-sm bg-white/30 md:text-lg dark:bg-slate-900/30'>
        {/* the input where the user enters */}
        <input autoCorrect='false' autoComplete='off' autoCapitalize='false' type='text' className='bg-white font-medium m-2 w-full pl-6 pr-16 py-4 rounded-lg outline-none text-slate-600 placeholder:text-slate-400 placeholder:overflow-visible dark:bg-secondary dark:text-white dark:placeholder:text-slate-500' placeholder='@mention, #hashtag or URL' value={text} onChange={e => { setText(e.target.value); setStatus(-1); if (state.autoCopy) autoCopy(e.target.value) }} onKeyUp={triggerCopy} />

        <div className='absolute pointer-events-none right-0 h-full px-8 flex items-center'>
            {/* failed icon */}
            <div className={`absolute w-5 right-8 top-[27px] aspect-square text-[#ef4444] transition-opacity ${status == 1 ? 'opacity-100' : 'opacity-0'}`}><Failed /></div>

            {/* success icon */}
            <div className={`absolute w-5 right-8 top-[27px] aspect-square text-primary transition-opacity ${status == 0 ? 'opacity-100' : 'opacity-0'}`}><Success /></div>

            {/* typing indicator */}
            <div className={`absolute right-8 top-[27px] transition-opacity ${(status == -1 && state.autoCopy) ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-5 aspect-square transition-colors duration-500 ${getTypingIndicatorColor()}`}><Typing /></div>
            </div>
        </div>
    </div>
}
