/*
 *  The actual core functionality of twrm.io lies here.
 *  Created On 21 March 2022
 */

import { ReactElement, useState } from 'react'
import FailedIcon from './icons/failed.svg'
import SuccessIcon from './icons/success.svg'
import TypingIcon from './icons/typing.svg'

export const MagicBox = (): ReactElement => {
    // the input value entered in magic box
    const [text, setText] = useState('')

    // changes typing indicator color basing on whether
    // there's text or not in the magic box
    const getTypingIndicatorColor = () => text.length == 0 ? 'text-slate-300' : 'text-slate-500'

    return <div id="magicBox" className="relative flex w-[70vw] rounded-xl shadow-box max-w-2xl md:w-[80vw] backdrop-blur-sm bg-white/20 md:text-lg">
        {/* the input where the user enters */}
        <input autoFocus autoCorrect="off" autoComplete="off" autoCapitalize="false" type="text" className="font-medium m-2 w-full pl-6 pr-16 py-4 rounded-lg outline-none text-slate-600 selection:bg-primary/10 placeholder:text-slate-400 placeholder:overflow-visible" placeholder="@mention, #hashtag or URL" value={text} onChange={e => setText(e.target.value)} />

        <div className="absolute pointer-events-none right-0 h-full px-8 flex items-center">
            {/* failed icon */}
            <div className="w-5 right-0 top-0 aspect-square text-[#ef4444] opacity-0"><FailedIcon/></div>
            
            {/* success icon */}
            <div className="w-5 right-0 top-0 aspect-square text-primary opacity-0"><SuccessIcon/></div>

            {/* typing indicator */}
            <div className={`w-5 right-0 top-0 aspect-square transition-colors duration-500 ${getTypingIndicatorColor()}`}><TypingIcon/></div>
        </div>
    </div>
}
