import { sample } from "effector";
import * as dal from '@/dal'
import { pushNavigate } from "@/features/app/model";

import { registerForm } from "./forms";
import { registrationFx } from "./private";

sample({
    clock: registerForm.formValidated,
    target: registrationFx,
    fn: (({ name, password }) => ({ name, password }))
})

sample({
    clock: registrationFx.done,
    fn: () => '/',
    target: pushNavigate
})

registrationFx.use(async ({ name, password }) => {
    const data = await dal.register(name, password)
    return data
})
