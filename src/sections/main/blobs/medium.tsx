/*
 *  Medium size blob shape for bachground.
 *  Created On 31 October 2022
 */

import { ReactElement } from 'react'

export const BlobMedium = (): ReactElement => <svg xmlns='http://www.w3.org/2000/svg'
     viewBox='0 0 500 500'>
    <defs>
        <linearGradient id='a'
                        x1='0.586'
                        x2='0.113'
                        y2='0.885'
                        gradientUnits='objectBoundingBox'>
            <stop offset='0'
                  stopColor='#5ed1fc' />
            <stop offset='1'
                  stopColor='#43CBFF' />
        </linearGradient>
        <clipPath id='c'>
            <rect width='500'
                  height='500' />
        </clipPath>
    </defs>
    <g id='b'
       clipPath='url(#c)'>
        <path d='M358.514,65.1c42.52,70.741,62.113,157.754,29,230-32.736,72.246-118.554,130.732-213,136s-198.016-42.13-230-114c-31.608-71.493,8.45-167.991,60-244,51.927-76.009,115.28-131.247,180-132S315.618-5.643,358.514,65.1Z'
              transform='translate(81.486 63.902)'
              fill='url(#a)' />
    </g>
</svg>