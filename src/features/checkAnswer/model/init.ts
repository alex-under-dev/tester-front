import { sample } from "effector";
import { checkAnswerFx, checkingAnswer } from "./public";
import * as dal from '@/dal'
import { $test } from "@/features/tests/model";

sample({
    clock: checkingAnswer,
    source: $test,
    fn: (test, payload) => ({
        id: test!.id,
        testName: test!.title,
        answer: payload
    }),
    target: checkAnswerFx
})

checkAnswerFx.use(dal.checkAnswer)
