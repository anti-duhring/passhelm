 type TAuthContext = {
    userData: TUserData,
    setUserData: React.Dispatch<React.SetStateAction<TUserData>>,
    allPasswords: TPassword[],
    setAllPasswords: React.Dispatch<React.SetStateAction<TPassword[]>>,
    allCategories: TCategory[],
    setAllCategories: React.Dispatch<React.SetStateAction<TCategory[]>>
}

type TUserData = {
    id: number,
    username: string,
    email: string,
    name: string
}