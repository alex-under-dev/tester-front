import React, { useMemo } from 'react'
import { useUnit } from 'effector-react'
import styled from 'styled-components'

import { ThemedStyledProps, themeVar } from '@/ui/theming'
import { ClearProgress } from '@/features/progress/view'
import { $statistics, loadStatisticsFx } from '../../model/private'
import { CircularProgress } from '@mui/material'
import { loadStatistics } from '../../model'


export const Statistics = () => {
    React.useEffect(() => {
        loadStatistics()
    }, [])
    const [statistics, loading] = useUnit([$statistics, loadStatisticsFx.pending])
    const isStatisticsEmpty = useMemo(() => {
        return !statistics?.countRigthAnswers && !statistics?.countIncorrectAnswers
    }, [statistics])

    if (!statistics) {
        return null
    }
    if (loading) {
        return <CircularProgress />
    }
    if (isStatisticsEmpty) {
        return (
            <Wrapper>
                Вы пока не решили ни одного теста, пройдите их, чтобы увидеть статистику
            </Wrapper>
        )
    }
    return (
        <Wrapper>
            <ClearProgress />
            <Container>
                <GridElement>
                    решено/всего тестов
                </GridElement>
                <GridElement>
                    {statistics?.passedTestCount + '/' + statistics.allTestCount}
                </GridElement>
                <GridElement>
                    решено верно -   {statistics?.countRigthAnswers}
                </GridElement>
                <GridElement>
                    {statistics.rightAnswers.length > 0 ? statistics?.rightAnswers.map((e) => {
                        return (
                            <div key={e}>
                                {e}
                            </div>
                        )
                    }) : '-'}
                </GridElement>
                <GridElement>
                    решено неверно -    {statistics?.countIncorrectAnswers}
                </GridElement>
                <GridElement>
                    {statistics.incorrectAnswers.length > 0 ? statistics?.incorrectAnswers.map((e) => {
                        return (
                            <div key={e}>
                                {e}
                            </div>
                        )
                    }) : '-'}
                </GridElement>
            </Container>
        </Wrapper>
    )
}

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
    color: ${themeVar('default400')};
    justify-content:center;
    align-items:center;
`
const Container = styled.div<ThemedStyledProps>`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    border:0.3px solid ${themeVar('default700')};
`
const GridElement = styled.div<ThemedStyledProps>`
width:300px;
min-height:150px;
display:flex;
flex-direction:column;
gap:10px;
border:0.3px solid ${themeVar('default700')};
padding:7px;
`