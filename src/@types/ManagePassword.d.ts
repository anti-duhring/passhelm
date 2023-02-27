type TManagePasswordContext = {
    password: TPassword,
    editPasswordProperty: (string, string) => void,
    labelErrors: TLabelErrors,
    editPassword: () => void,
    createPassword: () => void
}

type TLabelErrors = {
    title: boolean,
    login: boolean,
    password: boolean
}