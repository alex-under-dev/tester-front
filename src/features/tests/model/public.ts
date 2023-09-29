import { SingleTest } from "@/dal/interfaces";
import { d } from "./domain";


export const getTestFx = d.effect<number, SingleTest, Error>()

export const $test = d.store<SingleTest | null>(null)
export const loadTest = d.event<number>()
export const $testLoading = getTestFx.pending