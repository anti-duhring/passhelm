import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';

import CarouselChips from './CarouselChips';

type Props = {
}

const AddCategory = (props: Props) => {

  return (
    <View style={styles.container}>
      <View>
        <CarouselChips addIcon />
      </View>
      {/* <Dialog 
        visible={showDialog} 
        onDismiss={() => setShowDialog(value => !value)} 
        panDirection={PanningProvider.Directions.DOWN}
      >
        <DialogAddCategory />
      </Dialog> */}
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