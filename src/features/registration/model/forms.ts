import { createForm, FormFields } from "effector-forms";
import { isEqual, requiredValidator } from "../../../lib/validator";

export const registerForm = createForm({
    fields: {
        name: {
            init: '',
            rules: [requiredValidator],
        },
        password: {
            init: '',
            rules: [requiredValidator, isEqual,],
        },
        password2: {
            init: '',
            rules: [],
        },
    },
    validateOn: ['submit'],
})