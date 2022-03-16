/*
 *  Document override page for twrm.io project.
 *  Created On 16 March 2022
 */

import { Html, Head, Main, NextScript } from 'next/document'
import { Header } from '../components/header/header'

export default () => <Html>
    <Head/>
    <body className='flex flex-col font-sans bg-slate-100'>
        {/* the header common for the entire website */}
        <Header/>
        
        {/* specific page content */}
        <Main/>

        {/* additional scripts to be injected by Next.js */}
        <NextScript/>
    </body>
</Html>
