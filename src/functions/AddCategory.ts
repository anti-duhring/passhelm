import { ChipProps } from "react-native-ui-lib"
import { TCategory } from "../context/createCategory/createCategory"

export const returnAllChategories = (
        categories: TCategory[],
        chosenCategory: TCategory | null,
        setChosenCategory: React.Dispatch<React.SetStateAction<ChipProps>>
    ) => {
    const handleClickChip = (category: any) => {
        setChosenCategory(old => ({...category}))
    }

    return categories.map(category => {
        return {
            label: category.label,
            backgroundColor: chosenCategory?.id == category.id? category.color : 'white',
            dismissColor: chosenCategory?.id == category.id? 'white' : category.color,
            labelStyle: {
                color: chosenCategory?.id == category.id?  'white' : category.color
            },
            containerStyle: {
                borderColor: category.color 
            },
            onPress: () => handleClickChip(category)
        }
    })
}
