/*
 *  The actual core functionality of twrm.io lies here.
 *  Created On 21 March 2022
 */

import { ReactElement, useState } from 'react'
import FailedIcon from './icons/failed.svg'
import SuccessIcon from './icons/success.svg'
import TypingIcon from './icons/typing.svg'
import { copyToClipboard } from './functions'
import { SettingsState } from '../settings/functions'
import { useDebouncedCallback } from 'use-debounce'

export const MagicBox = ({state}: {state: SettingsState}): ReactElement => {
    // the state of the copy process
    // -1 = not started yet
    // 0 = successful
    // 1 = failed
    const [ status, setStatus ] = useState(-1)

    // the input value entered in magic box
    const [text, setText] = useState('')

    // changes typing indicator color basing on whether
    // there's text or not in the magic box
    const getTypingIndicatorColor = () => text.length == 0 ? 'text-slate-300' : 'text-slate-500'

    // wrap copyToClipboard() function
    const triggerCopy = (e: any) => e.key == 'Enter' && copyToClipboard(e.target.value, setStatus)

    // the autoCopy functionality
    const autoCopy = useDebouncedCallback(async (value: string) => {
        await copyToClipboard(value, setStatus)
    }, 750)

    return <div id="magicBox" className="relative flex w-[70vw] rounded-xl shadow-box max-w-2xl md:w-[80vw] backdrop-blur-sm bg-white/30 md:text-lg">
        {/* the input where the user enters */}
        <input autoFocus autoCorrect="off" autoComplete="off" autoCapitalize="false" type="text" className="font-medium m-2 w-full pl-6 pr-16 py-4 rounded-lg outline-none text-slate-600 placeholder:text-slate-400 placeholder:overflow-visible" placeholder="@mention, #hashtag or URL" value={text} onChange={e => {setText(e.target.value); setStatus(-1); if (state.autoCopy == 'true') autoCopy(e.target.value) }} onKeyUp={triggerCopy} />

        <div className="absolute pointer-events-none right-0 h-full px-8 flex items-center">
            {/* failed icon */}
            <div className={`absolute w-5 right-8 top-[27px] aspect-square text-[#ef4444] transition-opacity ${status == 1 ? 'opacity-100' : 'opacity-0'}`}><FailedIcon/></div>
            
            {/* success icon */}
            <div className={`absolute w-5 right-8 top-[27px] aspect-square text-primary transition-opacity ${status == 0 ? 'opacity-100' : 'opacity-0'}`}><SuccessIcon/></div>

            {/* typing indicator */}
            <div className={`absolute right-8 top-[27px] transition-opacity ${(status == -1 && state.autoCopy == 'true') ? 'opacity-100' : 'opacity-0'}`}>
                <div className={`w-5 aspect-square transition-colors duration-500 ${getTypingIndicatorColor()}`}><TypingIcon/></div>
            </div>
        </div>
    </div>
}
