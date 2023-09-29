import { Button } from '@/ui'
import React from 'react'
import { clearingProgress } from '../model/private'
import { loadStatistics } from '@/features/statistics/model'



export const ClearProgress = () => {
    const clearingAndUpdateProgress = () => {
        clearingProgress()
        loadStatistics()
    }
    return (
        <Button
            text='Сбосить прогресс'
            onClick={clearingAndUpdateProgress}
        />
    )
}