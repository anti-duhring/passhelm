import { useEffect, useState } from "react";
import { convertCategoryModelToChip } from "../functions/AddCategory";

const useManageCategory = (allCategories: TCategory[]) => {
    const [categoriesChipFormat, setCategoriesChipFormat] = useState<TCategoryChip[]>([]);
    const [chosedCategoryId, setChoosedCategoryId] = useState<number>(-1);

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
                return {...item, onPress: () => chooseCategory(item.id)}
            })
        )
    },[])

    return { 
        categories: categoriesChipFormat,
        chosedCategoryId
     }

}

export default useManageCategory;