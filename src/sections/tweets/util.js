/*
 *  Contains utility functions realted to loading the tweets section.
 *  Created On 10 October 2021
 */

export const getUniqueId = id => {
    const letters = 'xwvkdrhjq'
    let returnable = ''

    for (const num of id) returnable = returnable.concat(letters.charAt(num))
    return returnable
}
