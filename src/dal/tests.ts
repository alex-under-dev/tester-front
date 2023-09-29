import { Axios } from "./axios"


export const getTestList = async () => {
    const { data } = await Axios.get('/tests')
    return data
}