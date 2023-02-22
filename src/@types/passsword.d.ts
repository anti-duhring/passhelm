type TPassword = {
    id: number,
    userId: number,
    categoryId: number,
    title: string,
    login: string,
    password: string
}

type TCategory = {
    id: number,
    userId: number,
    label: string,
    color: string
}

type TPasswordWithCategory = {
    category: TCategory
} & TPassword