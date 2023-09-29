import { sample } from 'effector'
import * as dal from '@/dal'

import { $isLastTest, $testList, getTestsFx, loadTests } from './private'
import { checkAnswerFx } from '@/features/checkAnswer/model'
import { pushNavigate } from '@/features/app/model'
import { $test, getTestFx, loadTest } from './public'

$testList
    .on(getTestsFx.doneData, (_, tests) => tests)

$test
    .on(getTestFx.doneData, (_, test) => test)

sample({
    clock: loadTests,
    target: getTestsFx
})

sample({
    clock: loadTest,
    target: getTestFx
})

sample({
    clock: checkAnswerFx.finally,
    source: {
        test: $test,
        tests: $testList,
        isLastTest: $isLastTest,
    },
    filter: ({ isLastTest }) => !isLastTest,
    fn: ({ tests, test }) => {
        const currentTestId = tests.findIndex(
            (t) => t.id === Number(test!.id)
        )
        const nextTestId = tests[currentTestId + 1].id
        return `/test/${nextTestId}`
    },
    target: pushNavigate
})

getTestsFx.use(dal.getTestList)
getTestFx.use(dal.getTest)
