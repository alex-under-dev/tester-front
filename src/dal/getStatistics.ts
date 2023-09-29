import { Axios } from "./axios"




export const getStatixtics = async () => {
    const { data } = await Axios.get('/progress')
    return data
}