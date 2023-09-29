import React from 'react'
import { useStore } from 'effector-react'
import { styled } from 'styled-components'

import { $appState, loadApp } from './features/app/model'
import { Routes } from './routes'
import { ThemeProvider } from './ui/theming'

import './ui/theming/global.css'
import { CircularProgress } from '@mui/material'

export const App = () => {
    const appState = useStore($appState)
    React.useEffect(() => {
        loadApp()
    }, [])
    if (appState === 'loading') {
        return <CircularProgress />
    }
    return (
        <ThemeProvider>
            <Wrapper>
                <Routes />
            </Wrapper >
        </ThemeProvider>
    )
}

const Wrapper = styled.div`
   height:100%;
   width:100%;
   max-width:100vw;
   display:flex;
   flex-direction:row;
`