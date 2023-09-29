import React from 'react'
import styled, { css } from 'styled-components'
import { ThemedStyledProps, themeVar } from '../theming'


type Props = {
    type?: string,
    placeholder?: string
    value: any,
    max?: number
    min?: number
    onChange: (text: any) => void,
    onBlur?: () => void,
    hasError?: boolean
    errorText?: string
    onClick?: () => void
    disabled?: boolean
}


export const Input = React.forwardRef<HTMLInputElement, Props>(({ onClick, placeholder, type, onChange, value, max, min, onBlur, hasError, errorText, disabled = false }, ref) => {
    return (
        <>
            <InputWrapper
                onClick={onClick}
                ref={ref}
                placeholder={placeholder}
                type={type}
                value={value}
                max={max}
                min={min}
                onChange={(e) => onChange(e.target.value)}
                hasError={hasError}
                disabled={disabled}
                onBlur={onBlur}
            />
            <ErrorText>
                {errorText}
            </ErrorText>
        </>
    )
})

type InputWrapperProps = {
    hasError?: boolean
}

const InputWrapper = styled.input<InputWrapperProps & ThemedStyledProps>`
    width:400px;
    height:30px;
    border-radius:7px;
    border:0px;
    box-shadow:${themeVar('boxShadow')};
    text-align:center;
    background: ${themeVar('secondary700')};
    color: ${themeVar('default400')};
    &::placeholder {
        color: ${themeVar('default400')};
    }
    ${({ hasError }) => hasError && css`
        border-color:red;
    `}
    `

const ErrorText = styled.div<ThemedStyledProps>`
    margin-top: 0px;
    font-size: 16px;
    color:${themeVar('error')};
    `
