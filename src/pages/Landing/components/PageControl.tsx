import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PageControl as PControl } from 'react-native-ui-lib'
import { colors } from '../../../constants/colors'

type Props = {
  numOfPages: 3;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const PageControl = (props: Props) => {
  return (
    <View style={styles.pageControl}>
        <PControl 
            numOfPages={props.numOfPages} 
            currentPage={props.currentPage}
            size={15}
            color={colors.highlight}
        />
    </View>
  )
}

export default PageControl

const styles = StyleSheet.create({
    pageControl: {

    }
})