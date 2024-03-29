/*
 *  The settings modal dialog to change site-wide settings.
 *  Created On 17 March 2022
 */

import { MutableRefObject, ReactElement, useEffect } from 'react'
import { SettingsState, closeSettings, populateState } from './functions'

interface SettingsParams {
    state: SettingsState
    cog: MutableRefObject<null>
}

export const Settings = ({state}: SettingsParams): ReactElement => {
    const { isOpen, theme, setTheme, autoCopy, setAutoCopy } = state

    // populate the state on the client side
    useEffect(() => populateState(state), [])

    return <div className={`fixed z-40 inset-0 overflow-y-auto transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0'} ${isOpen || 'pointer-events-none'}`}>
         <div className='flex justify-center items-center min-h-screen pt-4 px-4 pb-20'>
            <div className='fixed inset-0 bg-slate-700/60 backdrop-blur-sm dark:bg-slate-900/60' onClick={() => closeSettings(state)}></div>

            {/* modal content */}
            <div className='w-full rounded-xl overflow-hidden shadow-xl transform max-w-md'>
                {/* modal content */}
                <div className='bg-slate-100 p-8 flex flex-col space-y-6 dark:bg-slate-800'>
                    {/* modal header */}
                    <div className='flex items-center space-x-2'>
                        <div className='bg-primary/10 text-primary p-3 rounded-full'>
                            <svg xmlns='http://www.w3.org/2000/svg' className='w-6 aspect-square' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
                                <path strokeLinecap='round' strokeLinejoin='round' d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
                                <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-semibold'>Settings</h3>
                    </div>

                    {/* modal content */}
                    <div className='flex flex-col space-y-4'>
                        {/* change the app theme */}
                        <div className='flex items-center space-x-2'>
                            <label className='w-full' htmlFor='cmbTheme'>Theme</label>
                            <div className='group relative flex justify-end w-full items-center'>
                                <select className='bg-white appearance-none w-full px-3 py-[0.4rem] border-2 text-sm outline-none transition-colors border-slate-200 focus:border-primary rounded-md dark:bg-slate-900 dark:border-slate-700 dark:focus:border-primary' value={theme} onChange={e => setTheme(e.target.selectedIndex)}>
                                    <option value={0}>Auto</option>
                                    <option value={1}>Light</option>
                                    <option value={2}>Dark</option>
                                </select>
                                <svg xmlns='http://www.w3.org/2000/svg' className='absolute pointer-events-none stroke-slate-300 h-5 aspect-square mr-3 transition-stroke group-focus-within:stroke-primary' fill='none' viewBox='0 0 24 24' strokeWidth={2}>
                                        <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
                                </svg>
                            </div>
                        </div>

                        {/* enable or disable auto copy feature */}
                        <div className='flex items-center space-x-2'>
                            <label className='w-full' htmlFor='swAutoCopy'>Auto copy</label>
                            <div className='flex justify-center'>
                                <label className='relative flex justify-between items-center group'>
                                    <input type='checkbox' className='absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md' checked={autoCopy} onChange={e => setAutoCopy(e.target.checked)} />
                                    <span className='w-14 h-8 flex items-center flex-shrink-0 p-2 bg-slate-300 rounded-full duration-100 ease-in peer-checked:bg-primary after:w-5 after:h-5 after:border-4 after:border-white after:rounded-full after:shadow-md after:duration-100 peer-checked:after:translate-x-5 dark:bg-slate-900 dark:after:border-white/70 dark:peer-checked:after:border-white'></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                {/* modal footer */}
                <div className='bg-slate-200 p-8 flex flex-col dark:bg-slate-900'>
                    <button type='button' className='mt-3 w-full inline-flex justify-center rounded-md border border-slate-300  px-4 py-2 transition-colors bg-white text-base font-medium text-slate-700 hover:bg-slate-100 focus:ring-2 focus:ring-offset-2 focus:ring-slate-400 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm dark:bg-slate-800 dark:ring-offset-slate-800 dark:text-white dark:border-slate-700 dark:hover:bg-slate-700/50 dark:focus:ring-slate-600' onClick={() => closeSettings(state)}>Done</button>
                </div>
            </div>
         </div>
    </div>
}
