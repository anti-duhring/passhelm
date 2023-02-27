 type TAuthContext = {
    userData: TUserData,
    setUserData: React.Dispatch<React.SetStateAction<TUserData>>,
    allPasswords: TPassword[],
    setAllPasswords: React.Dispatch<React.SetStateAction<TPassword[]>>,
    allCategories: TCategory[],
    setAllCategories: React.Dispatch<React.SetStateAction<TCategory[]>>,
    token: string | null,
    setToken: React.Dispatch<React.SetStateAction<string | null>>
}

type TUserData = {
    id: number,
    username: string,
    email: string,
    name: string
}