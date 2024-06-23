import { View, Text, StyleProp, ViewStyle, Pressable } from 'react-native'
import React from 'react'
import { colors, globalStyles } from '../../../config/theme/GlobalStyles';
interface Props{
    text:string,
    style?: StyleProp<ViewStyle>
    onPress: ()=>void
}
const Button = ({text, style, onPress = ()=>{}}:Props) => {
  return (
      <Pressable onPress={onPress} style = {({pressed})=>(
      
      [globalStyles.btnPrimary, {
        opacity: pressed ? 0.8 : 1,
        backgroundColor: colors.primary
      }, style])

    }>
        <Text style = {[globalStyles.btnPrimaryText,{
            color: colors.buttonTextColor
        }]}>
            {text}
        </Text>
    </Pressable>
  )
}

export default Button