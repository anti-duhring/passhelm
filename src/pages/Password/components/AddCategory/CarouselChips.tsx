import React, { useContext, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Carousel from 'react-native-reanimated-carousel';
import { Chip } from 'react-native-ui-lib';

import ManageCategoryContext from '../../../../context/ManageCategory';

type Props = {
   dismiss?: boolean;
   addIcon?: boolean;
}

type ChipItemProps = {
  item: any,
  index: number,
  length: number,
  dismiss?: () => void | null;
}

const ChipItem = (props: ChipItemProps) => {

  return (
    <>
      <View
        style={styles.chip}
      >
      <Chip 
        size={{
          height: 30
        }}
        onDismiss={props.dismiss}
        {...props.item}
      />
    </View>
  </>
  )
}

const CarouselChips = (props: Props) => {
    const { categories, setShowCreateCategoryDialog } = useContext(ManageCategoryContext);

    const ref = useRef<any>(null)
    const addCategoryChip = {
      backgroundColor: 'transparent',
      dismissColor: 'white',
      iconSource: require('../../../../../assets/add.png'),
      containerStyle: {
        borderWidth: 0,
        width: 40
      },
      iconStyle: {width: 27, height: 27},
      onPress: () => setShowCreateCategoryDialog(value => !value)
    }

    if(!categories.length) return

  return (
    <GestureHandlerRootView>
        <View style={styles.container}>
        <Carousel
          ref={ref}
          loop={false}
          width={150}
          height={50}
          style={{ width: "100%"}}
          data={
            props.addIcon?
            [...categories, addCategoryChip] :
            [...categories]
          }
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item, index }) => 
            <ChipItem 
              length={categories.length} 
              index={index} 
              item={item} 
              dismiss={props.dismiss? () => console.log('deleted') : null}
            /> 
          }
      />
      </View>
    </GestureHandlerRootView>
  )
}

export default CarouselChips

const styles = StyleSheet.create({
    container: {
        // flex: 1,
    },
    chip: {
        marginRight: 10,
        marginTop: 10,
        maxWidth: 150,
        flex: 1
      }
})