/*
 *  Largest blob shape for bachground.
 *  Created On 31 October 2022
 */

import { ReactElement } from 'react'

export const BlobLarge = (): ReactElement => <svg xmlns='http://www.w3.org/2000/svg'
     viewBox='0 0 500 500'>
    <defs>
        <linearGradient id='a'
                        x1='0.5'
                        x2='0.22'
                        y2='1'
                        gradientUnits='objectBoundingBox'>
            <stop offset='0'
                  stopColor='#0496ff' />
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
        <path d='M360.587-4.542c43.859,52.329,53.841,134.905,35.39,209.012S330.944,344.517,270.448,368.715c-60.8,24.5-135.208,7.26-202.055-25.408C1.848,310.942-57.135,263.151-73.772,202.353-90.71,141.252-65.3,67.145-19.326,14.211,26.651-38.42,93.5-70.18,165.791-74.717,238.386-79.254,316.425-56.871,360.587-4.542Z'
              transform='translate(87.043 97.289)'
              fill='url(#a)' />
    </g>
</svg>