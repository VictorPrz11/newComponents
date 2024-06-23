import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/GlobalStyles'
interface Props{
    style?:StyleProp<ViewStyle>
}
const Separator = ({style}:Props) => {
  return (
   <View style = {{
    backgroundColor: colors.cardBackground
   }}>
     <View style = {[{
        alignSelf:'center',
        width: '100%',
        height:1,
        opacity:0.1,
        marginVertical:8,
        backgroundColor:colors.text

    },style]}/>
   </View>
  )
}

export default Separator