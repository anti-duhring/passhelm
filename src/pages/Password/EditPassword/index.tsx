import { StyleSheet, View } from 'react-native'
import React from 'react'
import { colors } from '../../../constants/colors'
import { StatusBar } from 'expo-status-bar'
import Form from './Form'
import CreateCategoryProvider from '../../../context/createCategory'
import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native'

type Props = {
}

type TRoute = RouteProp<ParamListBase, string> & {
  params: {
    item: any
  }
}

const EditPassword = (props: Props) => {
  const route: TRoute = useRoute();

  return (
    <CreateCategoryProvider>
      <View style={styles.container}>
        <StatusBar 
          style='light' 
          backgroundColor={'black'}
          translucent={false}
        />
        <View style={styles.body}>
          <Form item={route.params.item} />
        </View>
      </View>
    </CreateCategoryProvider>
  )
}

export default EditPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  body: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginTop: 200,
    position: 'relative'
  }
})