import React from 'react'
import { useStore } from 'effector-react'
import styled from 'styled-components'

import { BarButton } from '@/ui'
import { ThemedStyledProps, themeVar } from '@/ui/theming'
import { FaRegRectangleList } from 'react-icons/fa6'
import { HiOutlineLogout } from 'react-icons/hi'
import { LiaBrainSolid } from 'react-icons/lia'
import { LuArrowBigRight } from 'react-icons/lu'
import { FaArrowAltCircleLeft } from 'react-icons/fa'


import { $accessToken, logout } from '@/features/login/model'
import { goBackNavigate, pushNavigate } from '@/features/app/model'
import { loadStatistics } from '@/features/statistics/model'
import CustomizedSwitches from '../../ui/switch-theme/SwitchTheme'


export const NavigatePage = () => {
    const linkProgress = () => {
        pushNavigate('/progress')
        loadStatistics()
    }
    const goBack = () => {
        goBackNavigate()
    }
    const linkTests = () => {
        pushNavigate('/tests')
    }
    const isUnLogin = !!!(useStore($accessToken))

    return (
        <Bar>
            <ClosedIcons>
                <LuArrowBigRight />
            </ClosedIcons>
            <BarElement>
                <BarButton
                    text={'назад'}
                    icon={<FaArrowAltCircleLeft />}
                    onClick={goBack}
                />
            </BarElement>
            <BarElement>
                <BarButton
                    icon={<LiaBrainSolid />}
                    text="Прогресс"
                    onClick={linkProgress}
                />
            </BarElement>
            <BarElement>
                <BarButton
                    icon={<FaRegRectangleList />}
                    text={'Тесты'}
                    onClick={linkTests}

                />
            </BarElement>
            <Separator></Separator>
            <BarElement>
                <CustomizedSwitches />
            </BarElement>
            <BarElement>
                {!isUnLogin && <BarButton
                    icon={<HiOutlineLogout />}
                    text='Выйти'
                    onClick={logout}
                />}
            </BarElement>
        </Bar>
    )
}

const Bar = styled.div<ThemedStyledProps>`
    height:100vh;
    width:10px;
    position:absolute;
    display:flex;
    flex-direction:column;
    box-sizing: border-box;
    gap:20px;
    padding:12px 9px 12px;
    box-shadow: ${themeVar('boxShadow')};
    align-items:center;
    transition: width 0.3s;
    transition: 0.5s;
    background: ${themeVar('backgroundColor')};
    color: ${themeVar('default400')};
    &:hover{
        width:100px;
    }
`

const BarElement = styled.div`
    display: none; 
    ${Bar}:hover & {
        display:flex;
        justify-content:center;
        align-items:center;
    }
`

const ClosedIcons = styled.div`
   display: block; 
    
    ${Bar}:hover & {
        display: none;
    }
`
const Separator = styled.div`
flex:1
`