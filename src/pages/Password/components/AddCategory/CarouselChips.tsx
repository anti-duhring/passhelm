import { StyleSheet, Text, View } from 'react-native'
import React, { useRef, useContext } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import type { ICarouselInstance } from "react-native-reanimated-carousel";
import { Chip } from 'react-native-ui-lib';
import { TCategory } from '../../../../context/createCategory/createCategory';
import { CreateCategoryContext } from '../../../../context/createCategory';
import Carousel from 'react-native-reanimated-carousel';

type Props = {
   
}

const CarouselChips = (props: Props) => {
    const { 
        categories
      } = useContext(CreateCategoryContext);
    const ref = useRef<any>(null)

    if(!categories?.length) return

  return (
    <GestureHandlerRootView>
        <View style={styles.container}>
        <Carousel
          ref={ref}
          width={150}
          height={50}
          style={{ width: "100%" }}
          data={categories}
          scrollAnimationDuration={1000}
          // onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={({ item, index }) => 
            <View
              key={index}
              style={styles.chip}
            >
              <Chip 
                size={{
                  height: 30
                }}
                {...item}
              />
            </View>
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
        maxWidth: 150
      }
})