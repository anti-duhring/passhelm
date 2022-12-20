import { StyleSheet, View } from 'react-native'
import React, { useContext } from 'react'
import { 
  PanningProvider,
  Dialog,
} from 'react-native-ui-lib';
import { CreateCategoryContext } from '../../../../context/createCategory';
import { TCreateCategoryContext } from '../../../../context/createCategory/createCategory';
import DialogAddCategory from './DialogAddCategory';
import CarouselChips from './CarouselChips';

type Props = {
}

const AddCategory = (props: Props) => {
  const { 
    showDialog,
    setShowDialog
  } = useContext(CreateCategoryContext) as TCreateCategoryContext;

  return (
    <View style={styles.container}>
      <View>
        <CarouselChips addIcon />
      </View>
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