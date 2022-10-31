/*
 *  Smallest blob shape for bachground.
 *  Created On 31 October 2022
 */

import { ReactElement } from 'react'

export const BlobSmall = (): ReactElement => <svg xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 500 500">
    <defs>
        <linearGradient id="a"
                        x1="0.5"
                        x2="0.073"
                        y2="0.958"
                        gradientUnits="objectBoundingBox">
            <stop offset="0"
                  stopColor="#5ed8fc" />
            <stop offset="1"
                  stopColor="#43CBFF" />
        </linearGradient>
        <clipPath id="c">
            <rect width="500"
                  height="500" />
        </clipPath>
    </defs>
    <g id="b"
       clipPath="url(#c)">
        <path d="M337.538,39.753c51.091,63.255,88.512,139.184,76,208s-74.141,130.2-144,158c-70.207,27.8-149.525,22.366-210-11s-102.4-93.964-117-160c-14.25-66.383-.969-137.83,39-199,39.969-60.823,106.617-111.7,173-111C220.921-74.9,286.794-23.85,337.538,39.753Z"
              transform="translate(74.009 76.254)"
              fill="url(#a)" />
    </g>
</svg>