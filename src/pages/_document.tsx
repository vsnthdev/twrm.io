/*
 *  Document override page for twrm.io project.
 *  Created On 16 March 2022
 */

import { Html, Head, Main, NextScript } from 'next/document'

export default () => <Html>
    <Head/>
    <body className="flex flex-col font-sans bg-slate-100 text-slate-800 selection:bg-primary/10">
        {/* specific page content */}
        <Main/>

        {/* additional scripts to be injected by Next.js */}
        <NextScript/>
    </body>
</Html>
