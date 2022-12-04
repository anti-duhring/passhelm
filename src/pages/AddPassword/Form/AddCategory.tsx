import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { 
  Incubator, 
  Colors, 
  ColorPalette, 
  ChipProps, 
  Chip,
  PanningProvider,
  Dialog,
  Button
} from 'react-native-ui-lib';
import { colors } from '../../../constants/colors';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import TextStyled from '../../../components/TextStyled';
const { ChipsInput } = Incubator;

type Props = {
  categories: ChipProps[],
  onChange: (newChips: any) => void,
  chosenCategory: any | null,
  chosenColor: string,
  setChosenColor: React.Dispatch<React.SetStateAction<string>>
}

type CreateCategoryProps = {
  categories: ChipProps[],
  onChange: (newChips: any) => void,
  chosenCategory: any | null,
  chosenColor: string,
  setChosenColor: React.Dispatch<React.SetStateAction<string>>,
  setShowCreateCategory: React.Dispatch<React.SetStateAction<boolean>>
}

const CreateCategory = (props: CreateCategoryProps) => {
  return (
    <View style={styles.dialogContainer}>
      <View style={styles.dialogTitle}>
        <TextStyled 
          variant='medium'
          style={styles.dialogTitleText}
        >
          Criar categoria
        </TextStyled>
        <TouchableOpacity
          onPress={() => props.setShowCreateCategory(value => !value)}
          style={styles.closeButton}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.dialogBody}>
        <ChipsInput
          placeholder={'Nome da categoria...'}
          chips={props.categories}
          onChange={props.onChange}
          style={styles.textField}
          containerStyle={{
            minHeight: 100
          }}
        />
        <ColorPalette
          colors={[
            colors.highlight, 
            Colors.green30, 
            Colors.yellow30, 
            Colors.red30,
            Colors.blue30,
            Colors.purple30,
            Colors.cyan30,
            Colors.dark,
            Colors.violet30,
            Colors.grey30,
            Colors.orange30
          ]}
          value={props.chosenColor}
          onValueChange={(value: string) => props.setChosenColor(value)}
        />
      </View>
      <View style={styles.dialogButton}>
        <Button 
          enableShadow
          label={'Criar'} 
          size={Button.sizes.large} 
          backgroundColor={colors.primary}
          style={styles.button}
            
        />
      </View>
    </View>
  )
}

const AddCategory = (props: Props) => {
  const [showCreateCategory, setShowCreateCategory] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      {
        props.categories?.map((category, index) => 
          <View
            key={index}
            style={styles.chip}
          >
            <Chip 
              useSizeAsMinimum
              {...category}
            />
          </View>
        )
      }
      <TouchableOpacity
        onPress={() => setShowCreateCategory(value => !value)}
        disabled={showCreateCategory}
      >
        <Entypo name="circle-with-plus" size={24} color="black" />
      </TouchableOpacity>
      <Dialog 
        visible={showCreateCategory} 
        onDismiss={() => setShowCreateCategory(value => !value)} 
        panDirection={PanningProvider.Directions.DOWN}
      >
        <CreateCategory {...props} setShowCreateCategory={setShowCreateCategory} />
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
    flexDirection: 'row'
  },
  chip: {
    marginRight: 10
  },
  dialogContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20
  },
  dialogBody: {
    paddingTop: 10
  },
  dialogTitle: {
    borderColor: colors.gray.main,
    borderBottomWidth: .3,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dialogTitleText: {
    fontSize: 20,
    textAlign: 'center',
    flex: 1
  },
  dialogButton: {},
  button: {
  },
  closeButton: {
    paddingRight: 5
  }
})