import React, { useEffect, useState } from "react";
import useFonts from "./useFonts";
import * as NavigationBar from 'expo-navigation-bar';

type TUseLoadApp = () => TLoadResponse

type TLoadResponse = {
    isLoading: boolean;
    loadError: string | null;
}

const useLoadApp: TUseLoadApp = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadError, setLoadError] = useState<string | null>(null)

    const loadFonts = async() => {
        await useFonts();
        await NavigationBar.setBackgroundColorAsync('white');
        await NavigationBar.setButtonStyleAsync('dark');
        setIsLoading(false)
    }

    useEffect(() => {
        loadFonts()
        .then(res => res)
        .catch(err => {
            setLoadError(err)
        })
    },[])

    return {
        isLoading,
        loadError
    }
}

export default useLoadApp