import { Axios } from "./axios"

export const register = async (login: string, password: string) => {
    const { data } = await Axios.post('/registration', {
        name: login,
        password
    }
    )
    return data
}