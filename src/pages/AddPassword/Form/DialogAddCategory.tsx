import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { 
  Incubator, 
  Colors, 
  ColorPalette, 
  Button
} from 'react-native-ui-lib';
import { colors } from '../../../constants/colors';
import { AntDesign } from '@expo/vector-icons';
import TextStyled from '../../../components/TextStyled';
import { CreateCategoryContext } from '../../../context/createCategory';
import { TCreateCategoryContext } from '../../../context/createCategory/createCategory';
const { ChipsInput } = Incubator;

type Props = {

}

const DialogAddCategory = (props: Props) => {
    const { 
        categories,
        setShowDialog,
        chosenColor,
        setChosenColor,
        handleChangeChips,
        categoriesColors
    } = useContext(CreateCategoryContext) as TCreateCategoryContext;

    const onChange = (e: any) => {
        handleChangeChips(e);
    }

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
            onPress={() => setShowDialog(value => !value)}
            style={styles.closeButton}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.dialogBody}>
          <ChipsInput
            placeholder={'Nome da categoria...'}
            chips={categories}
            onChange={onChange}
            style={styles.textField}
            containerStyle={{
              minHeight: 100
            }}
          />
          <ColorPalette
            colors={categoriesColors}
            value={chosenColor}
            onValueChange={(value: string) => setChosenColor(value)}
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

  export default DialogAddCategory;

  const styles = StyleSheet.create({
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
      },
      textField: {
        fontFamily: 'MontserratRegular',
      }
  })