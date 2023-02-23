import { AntDesign } from '@expo/vector-icons';
import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Button, ColorPalette, Incubator } from 'react-native-ui-lib';

import TextStyled from '../../../../components/TextStyled';
import { colors } from '../../../../constants/colors';
import ManageCategoryContext from '../../../../context/ManageCategory';
import TextFieldStyled from '../TextFieldStyled';
import CarouselChips from './CarouselChips';

const { ChipsInput } = Incubator;

type Props = {

}

const DialogAddCategory = (props: Props) => {
  const { 
    categoriesColors,
    chosedCategoryColor,
    setChosedCategoryColor,
    setShowCreateCategoryDialog 
  } = useContext(ManageCategoryContext);
  const [categoryLabel, setCategoryLabel] = useState<string>('')

    const onSubmit = () => {
      console.log('submited')

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
            onPress={() => setShowCreateCategoryDialog(value => !value)}
            style={styles.closeButton}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.dialogBody}>
          {/* <View style={styles.chipsBody}>
            {
              categories?.map((category, index) => 
                <View
                  key={index}
                  style={styles.chip}
                >
                  <Chip
                    size={{
                      height: 30
                    }}
                    onDismiss={() => handleDeleteChips(category)}
                    {...category}
                  />
                </View>
              )
            }
          </View> */}
          <CarouselChips dismiss />
          <TextFieldStyled
              placeholder='Nome da categoria'
              value={categoryLabel}
              onChange={(e: any) => setCategoryLabel(e)}
              error={false}
          />
          <ColorPalette
            colors={categoriesColors}
            value={chosedCategoryColor}
            onValueChange={(value: string) => setChosedCategoryColor(value)}
          />
        </View>
        <View style={styles.dialogButton}>
          <Button 
            enableShadow
            label={'Criar'} 
            size={Button.sizes.large} 
            backgroundColor={colors.primary}
            style={styles.button}
            onPress={onSubmit}
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
        borderColor: colors.gray.transparent,
        borderBottomWidth: .3,
        paddingBottom: 10,
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
      },
      chip: {
        marginRight: 10,
        marginTop: 10
      },
      chipsBody: {
        flexDirection: 'row',
        flexWrap: 'wrap'
      }
  })