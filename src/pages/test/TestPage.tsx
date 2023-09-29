import React from 'react'
import { useParams } from 'react-router'

import { Test } from '@/features/tests/view'
import { loadTest } from '@/features/tests/model'


export const TestPage = () => {
    const { id } = useParams<{ id: string }>()
    React.useEffect(() => {
        loadTest(Number(id))
    }, [id])
    return (
        <Test />
    )
}