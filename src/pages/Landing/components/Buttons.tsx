import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-ui-lib'
import { colors } from '../../../constants/colors'

type Props = {
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    numOfPages: number;
}

const Buttons = (props: Props) => {
  return (
    <View style={styles.container}>
        <Button 
            label={'Próximo'} 
            size='large' 
            backgroundColor={colors.highlight}
            style={styles.buttonNext}
            onPress={() => props.setCurrentPage(currentPage => {
                console.log(currentPage, props.numOfPages)
                if(currentPage >= props.numOfPages - 1) return props.numOfPages - 1
            
                return currentPage + 1
            })}
        />
        <Button 
            label={'Pular'} 
            size='large' 
            backgroundColor={colors.secondary}
            style={styles.buttonSkip}
            color={colors.primary}
            onPress={() => props.setCurrentPage(0)}
        />
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