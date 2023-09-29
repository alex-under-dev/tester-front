import React from 'react'
import { useField } from 'effector-forms'
import { useStore } from 'effector-react'
import styled from 'styled-components'

import { Button, Input } from '@/ui'
import { ThemedStyledProps, themeVar } from '@/ui/theming'

import { registerForm } from '../../model/forms'
import { registrationFx } from '../../model/private'

export const RegisterForm = () => {
    const loading = useStore(registrationFx.pending)
    const loginField = useField(registerForm.fields.name)
    const passwordField = useField(registerForm.fields.password)
    const repeatPasswordField = useField(registerForm.fields.password2)
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        registerForm.submit()
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <Message>
                {passwordField.hasError() && (
                    <ErrorMessage>{passwordField.errorText()}</ErrorMessage>
                )}
            </Message>
            <Input
                disabled={loading}
                value={loginField.value}
                onChange={loginField.set}
                placeholder='login'
            />
            <Input
                disabled={loading}
                value={passwordField.value}
                onChange={passwordField.set}
                type='password'
                placeholder='password'
            />
            <Input
                disabled={loading}
                value={repeatPasswordField.value}
                onChange={repeatPasswordField.set}
                type='password'
                placeholder='repeat password'
            />
            <Button
                type={'submit'}
                text={'Зарегестрироваться'}
            />

        </Container >
    )
}


const Container = styled.form<ThemedStyledProps>`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap:20px;
    width:100vw;
    height: 100vh;
    background: ${themeVar('secondary700')};
    color: ${themeVar('default400')};
`

const ErrorMessage = styled.div`
    font-size:20px;
`

const Message = styled.div`
    position:fixed;
    transform: translate();
`