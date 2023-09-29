import { Button, Input } from '@/ui'
import { useField } from 'effector-forms'
import React from 'react'
import { styled } from 'styled-components'
import { loginForm } from '../../model/form'
import { pushNavigate } from '@/features/app/model'
import { ThemedStyledProps, themeVar } from '@/ui/theming'


export const LoginForm = () => {
    const loginField = useField(loginForm.fields.name)
    const passwordField = useField(loginForm.fields.password)
    const handleSubmit = React.useCallback((e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        loginForm.submit()
    }, [])
    const goRegistration = React.useCallback(() => {
        pushNavigate('/registration')
    }, [])

    return (
        <Container onSubmit={handleSubmit}>
            <Input
                value={loginField.value}
                onChange={loginField.set}
                placeholder='login'
            />
            <Input
                value={passwordField.value}
                onChange={passwordField.set}
                type='password'
                placeholder='password'
            />
            <Button
                type={'submit'}
                text={'Войти'}
            />
            <Button
                text={'Зарегистрироваться'}
                onClick={goRegistration}
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