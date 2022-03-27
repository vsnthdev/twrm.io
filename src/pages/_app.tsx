/*
 *  Entry Next.js page for twrm.io project.
 *  Created On 15 March 2022
 */

import 'react-static-tweets/styles.css'
import '../styles/index.css'
import type { AppProps } from 'next/app'

export default ({ Component, pageProps }: AppProps) =>
    <Component { ...pageProps } />
