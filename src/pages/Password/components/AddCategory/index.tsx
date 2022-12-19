import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { 
  PanningProvider,
  Dialog,
} from 'react-native-ui-lib';
import { Entypo } from '@expo/vector-icons';
import { CreateCategoryContext } from '../../../../context/createCategory';
import { TCreateCategoryContext } from '../../../../context/createCategory/createCategory';
import DialogAddCategory from './DialogAddCategory';
import { PasswordDataContext } from '../../../../context/passwordData';
import CarouselChips from './CarouselChips';

type Props = {
}

const AddCategory = (props: Props) => {
  const { 
    showDialog,
    setShowDialog
  } = useContext(CreateCategoryContext) as TCreateCategoryContext;
  const {
    handleChosenCategory
  } = useContext(PasswordDataContext);

  return (
    <View style={styles.container}>
      <View>
        <CarouselChips />
      </View>
      <TouchableOpacity
        onPress={() => setShowDialog(value => !value)}
        disabled={showDialog}
      >
        <Entypo name="circle-with-plus" size={24} color="black" />
      </TouchableOpacity>
      <Dialog 
        visible={showDialog} 
        onDismiss={() => setShowDialog(value => !value)} 
        panDirection={PanningProvider.Directions.DOWN}
      >
        <DialogAddCategory />
      </Dialog>
    </View>
  )
}

export default AddCategory

const styles = StyleSheet.create({
  textField: {
    fontFamily: 'MontserratRegular',
  },
  container: {
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    // justifyContent: 'flex-start',
    // alignItems: 'center'
  },
  chip: {
    marginRight: 10,
    marginTop: 10,
    maxWidth: 150
  }
})