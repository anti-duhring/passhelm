import { StyleSheet } from 'react-native'
import React from 'react';
import Svg, {Path} from 'react-native-svg';

type Props = {
    width: number,
    height: number
}

const Safe = (props: Props) => {
  return (
    <Svg 
        width={props.width} 
        height={props.height} 
        viewBox="0 0 512 512"
    >
        <Path d="M42.67,64V256s0,170.66,213.33,234.66C469.33,426.67,469.33,256,469.33,256V64L256,21.34Z" fill="#FFFFFF" />
        <Path d="M256,512a21.53,21.53,0,0,1-6.13-.9C24,443.32,21.34,257.87,21.34,256V64A21.33,21.33,0,0,1,38.49,43.09L251.82.42a20.94,20.94,0,0,1,8.36,0L473.51,43.09A21.33,21.33,0,0,1,490.66,64V256c0,1.86-2.61,187.32-228.53,255.1A21.53,21.53,0,0,1,256,512ZM64,81.49V256c.05,6.19,3.49,152.7,192,212.34C444.51,408.7,447.95,262.19,448,255.91V81.49L256,43.1Z" fill="#000000" />
        <Path d="M234.66,320a21.24,21.24,0,0,1-11.82-3.58l-64-42.67a21.33,21.33,0,1,1,23.67-35.5l48.05,32L324.94,157a21.33,21.33,0,0,1,32.78,27.31l-106.67,128A21.31,21.31,0,0,1,234.66,320Z" fill="#000000" />
    </Svg>
  )
}

export default Safe

const styles = StyleSheet.create({})