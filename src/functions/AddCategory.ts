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
            backgroundColor: category.color,
            dismissColor: 'white',
            labelStyle: {
                color: 'white'
            },
            containerStyle: {
                borderColor: chosenCategory?.id == category.id? 'black' : category.color 
            },
            onPress: () => handleClickChip(category)
        }
    })
}