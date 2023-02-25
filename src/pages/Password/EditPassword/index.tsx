import { ParamListBase, RouteProp, useRoute } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../constants/colors';
import { ManageCategoryProvider } from '../../../context/ManageCategory';
import Form from './Form';
import { ManagePasswordProvider } from '../../../context/ManagePassword';

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
    <ManageCategoryProvider password={route.params.item}>
      <ManagePasswordProvider password={route.params.item}>
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
      </ManagePasswordProvider>
    </ManageCategoryProvider>
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