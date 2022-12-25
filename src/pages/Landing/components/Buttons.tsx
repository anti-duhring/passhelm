import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { Button } from 'react-native-ui-lib'
import { colors } from '../../../constants/colors'
import { LandingPageContext } from '../../../context/LandingPage'

type Props = {

}

const Buttons = (props: Props) => {
    const { 
        nextPage, 
        jumpPages,
        isLastPage 
    } = useContext(LandingPageContext)

  return (
    <View style={styles.container}>
        <Button 
            label={isLastPage ? 'Entrar' : 'Próximo'} 
            size='large' 
            backgroundColor={colors.highlight}
            style={styles.buttonNext}
            onPress={nextPage}
        />
        {!isLastPage &&
            <Button 
                label={'Pular'} 
                size='large' 
                backgroundColor={colors.secondary}
                style={styles.buttonSkip}
                color={colors.primary}
                onPress={jumpPages}
            />
        }
    </View>
  )
}

export default Buttons

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        width: '100%',
        height: '15%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonNext: {
        width: '100%',
        // borderRadius: 10
    },
    buttonSkip: {
        width: '100%',
        color: 'black'
    },
})