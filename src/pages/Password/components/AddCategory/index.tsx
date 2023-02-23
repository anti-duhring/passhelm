import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import CarouselChips from './CarouselChips';
import ManageCategoryContext from '../../../../context/ManageCategory';
import { Dialog, PanningProvider } from 'react-native-ui-lib';
import DialogAddCategory from './DialogAddCategory';

type Props = {
}

const AddCategory = (props: Props) => {
  const { showCreateCategoryDialog, setShowCreateCategoryDialog } = useContext(ManageCategoryContext);

  return (
    <View style={styles.container}>
      <View>
        <CarouselChips addIcon />
      </View>
      <Dialog 
        visible={showCreateCategoryDialog} 
        onDismiss={() => setShowCreateCategoryDialog(value => !value)} 
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