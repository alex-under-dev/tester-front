import { Axios } from "./axios"

export const login = async (login: string, password: string) => {
    const { data } = await Axios.post('/auth', {
        name: login,
        password
    })
    return data
}