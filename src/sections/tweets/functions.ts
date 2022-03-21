/*
 *  Used to fetch tweets from mahat.
 *  Created On 21 March 2022
 */

import { Dispatch, SetStateAction } from "react";
import axios from 'axios'

export default async () => {
    const { data } = await axios({
        method: 'GET',
        url: 'https://api.vsnth.dev/tweets'
    })

    return data
}
