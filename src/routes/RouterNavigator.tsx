import React from 'react'

import { useHistory } from 'react-router-dom'

import {
    pushNavigate,
    replaceNavigate,
    goBackNavigate,
} from '@/features/app/model'

export const RouterNavigator = () => {
    const history = useHistory()

    React.useEffect(() => {
        const unwatchPush = pushNavigate.watch((url) => history.push(url))
        const unwatchReplace = replaceNavigate.watch((url) => history.replace(url))
        const unwatchGoBack = goBackNavigate.watch(() => history.goBack())
        return () => {
            unwatchPush()
            unwatchGoBack()
            unwatchReplace()
        }
    }, [history])

    return null
}
