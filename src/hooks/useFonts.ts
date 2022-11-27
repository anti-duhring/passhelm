import * as Font from 'expo-font';

const useFonts = async () =>
  await Font.loadAsync({
    MontserratRegular: require('../../assets/fonts/Montserrat-Regular.ttf'),
    MontserratBlack: require('../../assets/fonts/Montserrat-Black.ttf'),
    MontserratBold: require('../../assets/fonts/Montserrat-Bold.ttf'),
    MontserratExtraBold: require('../../assets/fonts/Montserrat-ExtraBold.ttf'),
    MontserratExtraLight: require('../../assets/fonts/Montserrat-ExtraLight.ttf'),
    MontserratLight: require('../../assets/fonts/Montserrat-Light.ttf'),
    MontserratMedium: require('../../assets/fonts/Montserrat-Medium.ttf'),
    MontserratSemiBold: require('../../assets/fonts/Montserrat-SemiBold.ttf'),
    MontserratThin: require('../../assets/fonts/Montserrat-Thin.ttf'),
});

export default useFonts