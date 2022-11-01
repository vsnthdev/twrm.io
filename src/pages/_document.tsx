/*
 *  Document override page for twrm.io project.
 *  Created On 16 March 2022
 */

import { Html, Head, Main, NextScript } from 'next/document'

export default () => <Html className='dark'>
    <Head>
        <meta name='theme-color' content='#0d99fb' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='icon' type='image/svg' href='/appIcon.svg' />
    </Head>
    <body className='flex flex-col font-sans bg-slate-100 text-secondary selection:bg-primary/10 dark:bg-secondary dark:text-white dark:selection:bg-white/25'>
        {/* specific page content */}
        <Main/>

        {/* additional scripts to be injected by Next.js */}
        <NextScript/>
    </body>
</Html>
