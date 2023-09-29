import { Statistics } from "@/dal/interfaces";
import { d } from "./domain";



export const $statistics = d.createStore<Statistics | null>(null)
export const loadStatisticsFx = d.effect<void, Statistics, Error>()