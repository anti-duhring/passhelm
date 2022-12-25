import { useNavigation } from '@react-navigation/native';
import React, { createContext, useState } from 'react';
import { landingPageSettings } from '../../constants/landingPage';

export const LandingPageContext = createContext<TLandingPageContext | null>(null);

export const LandingPageContextProvider = ({ children }) => {
    const navigation = useNavigation();
    const [currentPage, setCurrentPage] = useState<number>(0)
    const { pages, images, texts } = landingPageSettings
    const currentImage = images[currentPage]
    const currentText = {
        title: texts.titles[currentPage],
        legend: texts.legends[currentPage]
    }
    const isLastPage = currentPage >= pages - 1;

    const nextPage = () => {
        if(isLastPage) {
            navigation.navigate('Login' as never)
            return
        }
        setCurrentPage(currentPage => currentPage + 1)
    }

    const jumpPages = () => {
        navigation.navigate('Login' as never)
    }

    const onPagePress = (index: number) => {
        setCurrentPage(index)
    }

    return (
        <LandingPageContext.Provider 
            value={{
                pages,
                images,
                texts,
                currentPage,
                setCurrentPage,
                currentImage,
                currentText,
                nextPage,
                jumpPages,
                onPagePress,
                isLastPage
            }}
        >
            {children}
        </LandingPageContext.Provider>
    )
}