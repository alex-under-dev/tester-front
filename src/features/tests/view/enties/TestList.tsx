import React from 'react'
import { styled } from 'styled-components'
import { Link } from 'react-router-dom'
import { useStore } from 'effector-react'

import { ThemedStyledProps, themeVar } from '@/ui/theming'

import { $testList, loadTests } from '../../model/private'

export const TestList = () => {
    const testList = useStore($testList)
    React.useEffect(() => {
        loadTests()
    }, [])

    return (
        <Wrapper>
            {testList?.map((e) => (
                <Test key={e.id} to={`/test/${e.id}`}>
                    {e.title}
                </Test>
            )
            )}
        </Wrapper>
    )
}

const Wrapper = styled.div<ThemedStyledProps>`
    height:100vh;
    box-sizing: border-box;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    gap:20px;
    padding:30px;
    background: ${themeVar('secondary700')};
`

const Test = styled(Link) <ThemedStyledProps>`
    color: ${themeVar('default400')};
    background: ${themeVar('backgroundColor')};
    box-shadow:${themeVar('boxShadow')};
    text-decoration:none;
    width:500px;
    height:50px;
    border-radius:14px;
    border:0.3px solid black;
    display:flex;
    justify-content:center;
    align-items:center;
    border:0px;
    text-align:center;
    transition:transform 0.5s;
    &:hover{
        transform:scale(1.1);
    }
`