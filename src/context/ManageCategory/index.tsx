import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth";
import { convertCategoryModelToChip } from "../../functions/AddCategory";
import { Colors } from "react-native-ui-lib";

const ManageCategoryContext = createContext<any>(null);


const ManageCategoryProvider = ({ children, password }) => {
    const { allCategories } = useContext(AuthContext);
    const [categoriesChipFormat, setCategoriesChipFormat] = useState<TCategoryChip[]>([]);
    const [chosedCategoryId, setChoosedCategoryId] = useState<number>(password.category.id);
    const chosedCategory = allCategories.find(c => c.id == chosedCategoryId);

    const [showCreateCategoryDialog, setShowCreateCategoryDialog] = useState<boolean>(false);
    
    const [chosedCategoryColor, setChosedCategoryColor] = useState<string>(Colors.highlight);

    const categoriesColors = [
        Colors.highlight, 
        Colors.green30, 
        Colors.yellow30, 
        Colors.red30,
        Colors.purple30,
        Colors.cyan30,
        Colors.dark,
        Colors.violet30,
        Colors.grey30,
        Colors.orange30
    ]

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
            chosedCategoryId,
            chosedCategory,
            showCreateCategoryDialog,
            setShowCreateCategoryDialog,
            categoriesColors,
            chosedCategoryColor,
            setChosedCategoryColor
        }}>
            {children}
        </ManageCategoryContext.Provider>
    )
}

export default ManageCategoryContext;
export { ManageCategoryProvider };