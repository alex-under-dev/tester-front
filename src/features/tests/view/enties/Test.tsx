import React from 'react'
import { styled } from 'styled-components'
import { useUnit } from 'effector-react'

import { ThemedStyledProps, themeVar } from '@/ui/theming'

import { loadTests } from '../../model/private'
import { $test, $testLoading } from '../../model'
import { CircularProgress } from '@mui/material'
import { checkingAnswer } from '@/features/checkAnswer/model'

export const Test = () => {
    const [test, loading] = useUnit([
        $test, $testLoading
    ])
    React.useEffect(() => {
        loadTests()
    }, [])

    if (loading) {
        return <CircularProgress />
    }
    return (
        <Wrapper>
            <Header>
                {test?.title}
            </Header>
            <ContentAnswers>
                {test?.answers.map((e) => {
                    return (
                        <Answer key={e} onClick={() => checkingAnswer(e)}>
                            {e}
                        </Answer>
                    )
                })}
            </ContentAnswers>
        </Wrapper>
    )
}


const ContentAnswers = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    width: 1000px;
    height:500px;
    gap:9px;
`

const Answer = styled.div<ThemedStyledProps>`
    width: 100%;
    height:200px;
    min-height: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:25px;
    border-radius:9px;
    transition: transform 0.2s;
    text-align:center;
    color: ${themeVar('default400')};
    box-shadow:${themeVar('boxShadow')};
    background: ${themeVar('secondary700')};
    border:0px;
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`

const Wrapper = styled.div<ThemedStyledProps>`
    width:100%;
    height:100vh;
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:50px;
    padding:30px;
    background: ${themeVar('backgroundColor')};
`


const Header = styled.div<ThemedStyledProps>`
    font-size:40px;
    font-weight:700;
    text-align:center;
    color: ${themeVar('default400')};
`