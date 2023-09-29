import { d } from './domain'

export const $appState = d.store<'loading' | 'ready'>('loading')
export const loadApp = d.event()


export const pushNavigate = d.event<string>()
export const goBackNavigate = d.event<void>()
export const replaceNavigate = d.event<string>()