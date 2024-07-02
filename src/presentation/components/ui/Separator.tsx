import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
interface Props{
    style?:StyleProp<ViewStyle>
}
const Separator = ({style}:Props) => {
  const {colors} = useContext(ThemeContext)
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