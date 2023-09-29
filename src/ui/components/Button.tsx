import React from 'react'
import styled from "styled-components"
import { ThemedStyledProps, themeVar } from '../theming'


type Props = {
    type?: 'button' | 'submit' | 'reset' | undefined,
    text: string,
    onClick?: () => void,
}

export const Button = React.forwardRef<HTMLButtonElement, Props>(({ type = 'button', text, onClick }, ref) => {
    return (
        <>
            <ButtonWrapper
                type={type}
                ref={ref}
                onClick={onClick}
            >
                {text}
            </ButtonWrapper>
        </>
    )
})
const ButtonWrapper = styled.button<ThemedStyledProps>`
            width:200px;
            height: 40px;
            border-radius:10px;
            border:0px;
            background-color:white;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
            background: ${themeVar('secondary700')};
            color: ${themeVar('default400')};
            box-shadow:${themeVar('boxShadow')};
            &:hover{
            background-color:black;
            color:white;
            cursor: pointer;
    }
            `