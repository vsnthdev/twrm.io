import { LocalKey } from 'ts-localstorage'

const params = {
    hasDefaultValue: true
}

export const config = {
    theme: new LocalKey('theme', 0, params),
    autoCopy: new LocalKey('autoCopy', true, params)
}