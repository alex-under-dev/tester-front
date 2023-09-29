import { d } from "./domain";
import { CheckAnswerPayload } from "./types";


export const $checking = d.store<boolean>(false)

export const checkAnswerFx = d.effect<CheckAnswerPayload, void, Error>()
export const checkingAnswer = d.event<string>()

export const isCheckingFx = d.effect()