import { LayoutChangeEvent, StyleSheet} from 'react-native'
import React, { useRef, useState } from 'react'
import { colors } from '../../constants/colors'
import { Incubator } from 'react-native-ui-lib';
const { TextField } = Incubator;

type Props = {
    placeholder?: string,
    validationMessage?: string[],
    validate?: (string | boolean | ((value: string) => boolean))[],
    error: boolean,
    maxLength?: number
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
        enableErrors
        validate={props.validate}
        validationMessage={props.validationMessage}
        showCharCounter={Boolean(props.maxLength)}
        validateOnChange
        fieldStyle={[
            styles.textinput,
            props.error? styles.fieldError : isFocused? styles.fieldFocused : styles.fieldBlured
        ]}
        floatingPlaceholderStyle={[
            styles.label,
            props.error? styles.textError : isFocused? styles.textFocused : styles.textBlured
        ]}
        charCounterStyle={[
            styles.charcounter,
            props.error? styles.textError : isFocused? styles.textFocused : styles.textBlured
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