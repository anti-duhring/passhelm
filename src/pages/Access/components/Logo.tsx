import { StyleSheet, Image, View } from 'react-native'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    <View style={styles.container}>
        <Image
            source={require('../../../../assets/logo_black.png')}
            style={{
                width: 120
            }}
            resizeMode='contain'
        />
    </View>
  )
}

export default Logo

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        marginTop: -140,
        width: '100%',
        zIndex: 9999,
        justifyContent: 'flex-start',
        alignItems: 'center',
    }
})