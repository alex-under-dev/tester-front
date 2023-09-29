import { d } from './domain'


export const $accessToken = d.store<string | null>(null)
export const $isUserAuthorized = $accessToken.map((e) => e !== null)

export const logout = d.event()
export const loadUserTokenFx = d.effect<void, string | null, Error>()