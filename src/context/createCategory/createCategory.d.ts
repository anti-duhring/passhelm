export interface TCreateCategoryContext {
    loginError: boolean,
    setLoginError: React.Dispatch<React.SetStateAction<boolean>>,
    passwordError: boolean,
    setPasswordError: React.Dispatch<React.SetStateAction<boolean>>,
    categories: ChipProps[] | null,
    setCategories: React.Dispatch<React.SetStateAction<ChipProps[] | null>>,
    chosenCategory: TCategory | null,
    setChosenCategory: React.Dispatch<React.SetStateAction<TCategory | null>>
    chosenColor: string,
    setChosenColor: React.Dispatch<React.SetStateAction<string>>,
    showDialog: boolean,
    setShowDialog: React.Dispatch<React.SetStateAction<boolean>>,
    categoriesColors: string[],
    validateLogin: (value: string) => boolean,
    validatePassword: (value: string) => boolean,
    handleChangeChips: (newChips: ChipProps[]) => void
}

export type TCategory = {
    id: number,
    label: string,
    color: string
}