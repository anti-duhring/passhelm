export const sortPasswordListById = (list: TPassword[]) => {
    const listSorted = [...list];
    listSorted.sort((a, b) => a.id - b.id)

    return listSorted;
}
