type TManagePasswordContext = {
    password: TPassword,
    editPasswordProperty: (string, string) => void,
    labelErrors: TLabelErrors,
    submitPassword: () => void
}

type TLabelErrors = {
    title: boolean,
    login: boolean,
    password: boolean
}