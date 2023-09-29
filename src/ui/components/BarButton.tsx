import React from 'react'
import { IconContext } from 'react-icons';
import styled from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'



type Props = {
    icon?: React.ReactNode;
    text?: string,
    onClick: () => void
}

export const BarButton = React.forwardRef<HTMLButtonElement, Props>(({ onClick, text, icon }, ref) => {
    return (
        <ButtonWrapper
            onClick={onClick}
            ref={ref}
        >
            <IconContext.Provider value={{ size: '20' }}>
                <>
                    {icon}
                </>
            </IconContext.Provider>
            {text}
        </ButtonWrapper >
    )
})

const ButtonWrapper = styled.button<ThemedStyledProps>`
        border-radius:50%;
        width:70px;
        height:70px;
        border:0px;
        box-shadow:${themeVar('boxShadow')};
        font-size:10px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction:column;
        cursor:pointer;
        transition: 0.5s;
        background: ${themeVar('secondary700')};
    color: ${themeVar('default400')};
        &:hover{
            transform: scale(1.3);
    }
        `
