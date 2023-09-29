import { d } from "./domain";
import { LoginFxResponse, LoginPayload } from "./types";

export const loginFx = d.createEffect<LoginPayload, LoginFxResponse, Error>()
export const logoutFx = d.effect()

