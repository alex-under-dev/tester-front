import { Test } from "@/dal/interfaces";
import { d } from "./domain";
import { combine } from "effector";
import { $test } from "./public";


export const $testList = d.store<Test[]>([])
export const getTestsFx = d.effect<void, Test[], Error>()

export const loadTests = d.event()


export const $isLastTest = combine(
    $testList,
    $test,
    (tests, currentTest) => tests
        ? Number(currentTest?.id) === tests[tests.length - 1]?.id
        : false
)
