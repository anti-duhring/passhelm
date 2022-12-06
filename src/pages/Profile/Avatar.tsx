import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Avatar as AvatarE } from 'react-native-ui-lib';
import { colors } from '../../constants/colors';

type Props = {}

const Avatar = (props: Props) => {
  return (
    <View style={styles.container}>
        <AvatarE 
            source={require('../../../assets/avatar.jpg')} 
            label={'MV'}
            size={100} 
            labelColor={colors.primary}
            badgeProps={{
                backgroundColor: colors.green,
                borderColor: 'black',
                borderWidth: 2
            }}
            imageStyle={{
                borderColor: 'black',
                borderWidth: 2,
            }}
        />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        marginTop: -60,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})