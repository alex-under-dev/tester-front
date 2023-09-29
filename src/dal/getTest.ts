import { Axios } from "./axios"



export const getTest = async (id: number) => {
    const { data } = await Axios.get(`/test/${id}`)
    return data
}