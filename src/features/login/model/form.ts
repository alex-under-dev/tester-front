import { createForm } from "effector-forms";
import { requiredValidator } from "@/lib/validator";


export const loginForm = createForm({
    fields: {
        name: {
            init: '',
            rules: [requiredValidator],
        },
        password: {
            init: '',
            rules: [requiredValidator],
        },
    },
    validateOn: ['submit'],
})