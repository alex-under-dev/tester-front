import { sample } from "effector";
import * as dal from '@/dal'
import { loadApp } from "@/features/app/model";

import { loginForm } from "./form";
import { loginFx, logoutFx } from "./private";
import { $accessToken, loadUserTokenFx, logout } from "./public";

$accessToken
    .on(loadUserTokenFx.doneData, (_, token) => token)
    .on(loginFx.doneData, (_, { access_token }) => access_token)
    .reset(logoutFx.done)

sample({
    clock: loginForm.formValidated,
    target: loginFx
})

sample({
    clock: loadApp,
    target: loadUserTokenFx
})

sample({
    clock: logout,
    target: logoutFx
})

loginFx.use(async ({ name, password }) => {
    const loginResponse = await dal.login(name, password)
    localStorage.setItem('access_token', loginResponse.access_token)
    return loginResponse
})

logoutFx.use(() => {
    localStorage.clear()
})

loadUserTokenFx.use(() => localStorage.getItem('access_token'))