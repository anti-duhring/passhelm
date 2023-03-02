type TSearchContext = {
    searchText: string,
    setSearchText: React.Dispatch<React.SetStateAction<string>>,
    allPasswords: TPassword[],
    allCategories: TCategory[]
}