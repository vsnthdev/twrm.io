/*
 *  Contains copyright & licensing information.
 *  Created On 26 March 2022
 */

import { ReactElement } from 'react'
import { Logo } from '../../components/header/logo'
import { getLicense } from '../../utils/index';

export const Footer = (): ReactElement => {
    return <footer className="bg-white mt-auto flex flex-col items-center py-10 text-center dark:bg-secondary">
        <div className="container flex flex-col items-center space-y-10">
            <div className="w-full flex">
                <hr className="border-0 mx-10 w-full h-1 bg-slate-200 rounded-full md:mx-20 dark:opacity-20" />
            </div>
            <div className="flex flex-col items-center">
                <Logo/>
                <p className="mt-5 text-slate-600 dark:text-slate-300">Made with 💖 by <a href="https://vsnth.dev" className="text-slate-500 dark:text-white" target="_blank" rel="noopener">Vasanth Srivatsa</a>.</p>
                <p className="mb-5 mt-1 text-slate-400 text-xs">Copyright © Vasanth Developer. Licensed under <a className="text-slate-500 dark:text-white" href="https://github.com/vsnthdev/twrm.io/blob/main/LICENSE.md">{getLicense()}</a>.</p>
            </div>
        </div>
    </footer>
}
