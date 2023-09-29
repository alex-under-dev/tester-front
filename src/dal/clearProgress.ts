import { Axios } from "./axios"



export const clearPgogress = async () => {
    const { data } = await Axios.delete('/clear_progress')
    return data
}