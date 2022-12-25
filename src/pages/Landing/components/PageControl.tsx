import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { PageControl as PControl } from 'react-native-ui-lib'
import { colors } from '../../../constants/colors'
import { LandingPageContext } from '../../../context/LandingPage'

type Props = {
}

const PageControl = (props: Props) => {
  const { 
    pages, 
    currentPage,
    onPagePress 
  } = useContext(LandingPageContext);
  return (
    <View style={styles.pageControl}>
        <PControl 
            numOfPages={pages} 
            currentPage={currentPage}
            size={15}
            spacing={15}
            color={colors.highlight}
            onPagePress={onPagePress}
        />
    </View>
  )
}

export default PageControl

const styles = StyleSheet.create({
    pageControl: {

    }
})