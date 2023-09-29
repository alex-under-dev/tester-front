export type Test = {
    id: number,
    title: string
}


export type SingleTest = {
    id: number,
    title: string,
    answers: string[]
}

export type Statistics = {
    allTestCount: number,
    passedTestCount: number,
    countRigthAnswers: number,
    countIncorrectAnswers: number,
    rightAnswers: string[],
    incorrectAnswers: string[]
}