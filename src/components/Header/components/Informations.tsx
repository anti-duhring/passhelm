import { 
    View, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native';
import React from 'react';
import { colors } from '../../../constants/colors';
import TextStyled from '../../TextStyled';
import { Avatar, Colors } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';

type Props = {}

const Informations = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.informations}>
            <Avatar 
                source={require('../../../../assets/avatar.jpg')} 
                label={'MV'}
                size={50} 
                labelColor={colors.primary}
                badgeProps={{
                    backgroundColor: colors.secondary,
                    borderColor: colors.primary,
                    borderWidth: 2
                }}
            />
            <View>
            <TextStyled 
                style={styles.greetings}
                color='light'
                variant='medium'
            >
                Olá, Mateus
            </TextStyled>
            </View>
        </View>
        <TouchableOpacity>
            <Ionicons name="settings-outline" size={24} color={colors.secondary} />
        </TouchableOpacity>
    </View>
  )
}

export default Informations

const styles = StyleSheet.create({
    informations: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 25
    },
    greetings: {
        fontSize: 15,
        marginLeft: 15
    },
})