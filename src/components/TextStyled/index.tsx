import { Text, TextStyle } from 'react-native'
import React from 'react'

type Props = {
    children?: React.ReactNode,
    color?: "light" | "dark",
    style?: TextStyle,
    variant?: 'regular' | 'medium' | 'bold' | 'light'
}

const TextStyled = (props: Props) => {
    const color = (!props.color || props.color == 'dark') ? 'black' : 'white'
  return (
      <Text
        style={[
            {
                color: color,
                fontSize: 15,
                fontFamily: `Montserrat${props.variant ? `${props.variant.charAt(0).toUpperCase()}${props.variant.slice(1)}` : 'Regular'}`
            },
            props.style
        ]}
      >{props.children}</Text>
  )
}

export default TextStyled;