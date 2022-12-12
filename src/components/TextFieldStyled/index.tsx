import { LayoutChangeEvent, StyleSheet, ViewStyle} from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../../constants/colors'
import { Incubator } from 'react-native-ui-lib';
const { TextField } = Incubator;

type Props = {
    placeholder?: string,
    maxLength?: number,
    value?: string,
    onChange?: (e: any) => void,
    style?: ViewStyle
}

const TextFieldStyled = (props: Props) => {
    const fieldRef = useRef(null);
    const [isFocused, setIsFocused] = useState(false)

    const toggleFocus = (e: LayoutChangeEvent) => {
        setIsFocused(currentFocus => !currentFocus)
    }
  return (
    <TextField
        ref={fieldRef}
        placeholder={props.placeholder}
        onFocus={toggleFocus}
        onBlur={toggleFocus}
        floatOnFocus
        floatingPlaceholder
        // onChangeText={() => console.log('changed')}
        showCharCounter={Boolean(props.maxLength)}
        value={props.value}
        onChangeText={props.onChange}
        validateOnChange
        fieldStyle={[
            styles.textinput,
            isFocused? styles.fieldFocused : styles.fieldBlured,
            props.style
        ]}
        floatingPlaceholderStyle={[
            styles.label,
            isFocused? styles.textFocused : styles.textBlured
        ]}
        charCounterStyle={[
            styles.charcounter,
            isFocused? styles.textFocused : styles.textBlured
        ]}
        maxLength={props.maxLength}
    />
  )
}

export default TextFieldStyled

const styles = StyleSheet.create({
    textinput: {
        borderColor: colors.gray.main,
        borderBottomWidth: 1,
    },
    label: {
        fontFamily: 'MontserratRegular'
    },
    charcounter: {
        color: colors.gray.main,
    },
    fieldFocused: {
        borderColor: colors.primary
    },
    fieldBlured: {
        borderColor: colors.gray.main
    },
    fieldError: {
        borderColor: 'red'
    },
    textFocused: {
        color: colors.primary
    },
    textBlured: {
        color: colors.gray.main
    },
    textError: {
        color: 'red'
    }
})