
export const requiredValidator = {
    name: "required",
    validator: (text: string) => text.length > 0,
}

export const isEqual = {
    name: "confirmation",
    validator: (password: string, { password2 }) => password === password2,
    errorText: 'Пароли не совпадают'
};