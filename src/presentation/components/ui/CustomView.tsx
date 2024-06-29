import { View, Text, ViewStyle } from 'react-native'
import React, { ReactNode, useContext } from 'react'
import { globalStyles } from '../../../config/theme/GlobalStyles'
import { StyleProp } from 'react-native'
import { ThemeContext } from '../../context/ThemeContext'
interface Props{
    style?: StyleProp<ViewStyle>
    children?: ReactNode,
    margin? : boolean
}
const CustomView = ({style, children, margin = false}:Props) => {
  const {colors} = useContext(ThemeContext)
  return (
    <View style = {[globalStyles.mainContainer,margin && globalStyles.globalMargin,style,
     {backgroundColor: colors.background}
    ]}> 
      {children}
    </View>
  )
}

export default CustomView