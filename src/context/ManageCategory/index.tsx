import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth";
import { convertCategoryModelToChip } from "../../functions/AddCategory";
import { Colors } from "react-native-ui-lib";
import useCreateCategory from "../../hooks/useCreateCategory";
import { colors } from "../../constants/colors";

const ManageCategoryContext = createContext<any>(null);


const ManageCategoryProvider = ({ children, password }) => {
    const { allCategories } = useContext(AuthContext);
    const createCategory = useCreateCategory();
    const [categoriesChipFormat, setCategoriesChipFormat] = useState<TCategoryChip[]>([]);
    const [chosedCategoryId, setChoosedCategoryId] = useState<number>(password.category.id);
    const chosedCategory = allCategories.find(c => c.id == chosedCategoryId);

    const [showCreateCategoryDialog, setShowCreateCategoryDialog] = useState<boolean>(false);
    
    const [chosedCategoryColor, setChosedCategoryColor] = useState<string>(colors.highlight);

    const categoriesColors = [
        colors.highlight, 
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

    const createNewCategory = async(category: TCategory) => {
        const newCategory = await createCategory.create(category);
        if(!newCategory) {
            return
        }
        console.log(newCategory);

        const newCategoryAsChip = {
            ...newCategory,
            backgroundColor: newCategory.color,
            labelStyle: { color: 'white' },
            dismissColor: 'white',
            onPress: () => chooseCategory(newCategory.id)
        }

        setChoosedCategoryId(newCategory.id);
        setCategoriesChipFormat(oldCategories => {
            const oldCategoriesButRemoveThePreviouslyChosedOne = oldCategories.map(item => {
                return {
                    ...item,
                    backgroundColor: 'white',
                    labelStyle: { color: item.color },
                    dismissColor: item.color,
                    onPress: () => chooseCategory(item.id)
                }
            })

            return [...oldCategoriesButRemoveThePreviouslyChosedOne, newCategoryAsChip]
        })
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
            setChosedCategoryColor,
            createNewCategory
        }}>
            {children}
        </ManageCategoryContext.Provider>
    )
}

export default ManageCategoryContext;
export { ManageCategoryProvider };