import { Axios } from "./axios"


export const checkAnswer = async ({ id, testName, answer }: { id: number, answer: string, testName: string }) => {
    const { data } = await Axios.post('/check', { id, testName, answer })
    return data
}
