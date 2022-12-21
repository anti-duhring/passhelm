import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react';
import { Avatar as AvatarE } from 'react-native-ui-lib';
import { colors } from '../../constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import ImageView from "react-native-image-viewing";
import * as ImagePicker from 'expo-image-picker';
import * as LocalAuthentication from 'expo-local-authentication';
import useAuthenticate from '../../hooks/useAuthenticate';


type Props = {}

const Avatar = (props: Props) => {
    const [avatarData, setAvatarData] = useState<any>(require('../../../assets/avatar.jpg'))
    const [imageOpened, setImageOpened] = useState<boolean>(false);

    const choseAvatar = async() => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            setAvatarData({uri: result.assets[0].uri});
        }
    }

  return (
    <View style={styles.container}>
        <AvatarE 
            source={avatarData} 
            // label={'MV'}
            // labelColor={colors.primary}
            size={80} 
            badgeProps={{
                backgroundColor: colors.highlight,
                borderColor: 'black',
                borderWidth: 2,
                size: 45,
                customElement: <MaterialIcons name="photo-camera" size={25} color={colors.secondary} />,
                onPress: () => choseAvatar()
            }}
            imageStyle={{
                borderColor: 'black',
                borderWidth: 2,
            }}
            onPress={() => setImageOpened(true)}
        />
        <ImageView
            images={[avatarData]}
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