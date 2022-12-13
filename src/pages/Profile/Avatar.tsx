import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react';
import { Avatar as AvatarE } from 'react-native-ui-lib';
import { colors } from '../../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import ImageView from "react-native-image-viewing";
import * as NavigationBar from 'expo-navigation-bar';

type Props = {}

const Avatar = (props: Props) => {
    const [imageOpened, setImageOpened] = useState(false);

  return (
    <View style={styles.container}>
        <AvatarE 
            source={require('../../../assets/avatar.jpg')} 
            label={'MV'}
            size={80} 
            labelColor={colors.primary}
            badgeProps={{
                backgroundColor: colors.highlight,
                borderColor: 'black',
                borderWidth: 2,
                size: 35,
                customElement: <MaterialIcons name="photo-camera" size={20} color={colors.secondary} />
            }}
            imageStyle={{
                borderColor: 'black',
                borderWidth: 2,
            }}
            onPress={() => setImageOpened(true)}
        />
        <ImageView
            images={[require('../../../assets/avatar.jpg')]}
            imageIndex={0}
            swipeToCloseEnabled
            doubleTapToZoomEnabled
            visible={imageOpened}
            onRequestClose={() => setImageOpened(false)}
        />
    </View>
  )
}

export default Avatar

const styles = StyleSheet.create({
    container: {
        marginTop: -55,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})