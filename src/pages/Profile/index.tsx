import { StyleSheet} from 'react-native'
import React from 'react'
import PageContainer from '../../components/PageContainer'
import Avatar from './Avatar'
import Informations from './Informations'
import Name from './Name'
import { Button } from 'react-native-ui-lib'
import { colors } from '../../constants/colors'
import { MaterialIcons } from '@expo/vector-icons';

type Props = {}

const Profile = (props: Props) => {
  return (
    <PageContainer
      style={styles.container}
    >
        <Avatar />
        <Name />
        <Informations />
        <Button 
          label={'Atualizar'} 
          size={Button.sizes.large} 
          backgroundColor={colors.highlight}
          style={styles.updateButton}
          iconSource={() => <MaterialIcons name="update" size={24} color={colors.white} style={styles.updateIcon} />}
        />
    </PageContainer>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
  },
  updateIcon: {
    marginRight: 5
  },
  updateButton: {
    marginTop: 5,
    marginBottom: 15
  }
})