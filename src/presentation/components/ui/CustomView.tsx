import { View, Text, ViewStyle } from 'react-native'
import React, { ReactNode } from 'react'
import { globalStyles } from '../../../config/theme/GlobalStyles'
import { StyleProp } from 'react-native'
interface Props{
    style?: StyleProp<ViewStyle>
    children?: ReactNode,
    margin? : boolean
}
const CustomView = ({style, children, margin = false}:Props) => {
  return (
    <View style = {[globalStyles.mainContainer,margin && globalStyles.globalMargin,style,
     
    ]}> 
      {children}
    </View>
  )
}

export default CustomView