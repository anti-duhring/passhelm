import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth";
import { convertCategoryModelToChip } from "../../functions/AddCategory";

const ManageCategoryContext = createContext<any>(null);


const ManageCategoryProvider = ({ children, password }) => {
    const { allCategories } = useContext(AuthContext);
    const [categoriesChipFormat, setCategoriesChipFormat] = useState<TCategoryChip[]>([]);
    const [chosedCategoryId, setChoosedCategoryId] = useState<number>(password.category.id);

    const chooseCategory = (id: number) => {
        setChoosedCategoryId(id);
        setCategoriesChipFormat(oldList => 
            // Remove previosly chosed category
            oldList.map(c => {
                return {
                    ...c,
                    backgroundColor: id == c.id? c.color : 'white',
                    labelStyle: { color: id == c.id? 'white' : c.color },
                    dismissColor: id == c.id? 'white': c.color
                }
            })
        )
    }
    
    useEffect(() => {
        setCategoriesChipFormat(
            convertCategoryModelToChip(allCategories).map(item => {
                return {
                    ...item,
                    backgroundColor: chosedCategoryId == item.id? item.color : 'white',
                    labelStyle: { color: chosedCategoryId == item.id? 'white' : item.color },
                    dismissColor: chosedCategoryId == item.id? 'white': item.color,
                    onPress: () => chooseCategory(item.id)
                }
            })
        )
    },[])

    return (
        <ManageCategoryContext.Provider value={{
            categories: categoriesChipFormat,
            setCategories: setCategoriesChipFormat,
            chosedCategoryId
        }}>
            {children}
        </ManageCategoryContext.Provider>
    )
}

export default ManageCategoryContext;
export { ManageCategoryProvider };