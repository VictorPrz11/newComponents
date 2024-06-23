import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colors } from '../../../config/theme/GlobalStyles'
interface Props extends PropsWithChildren{
    style ? : StyleProp<ViewStyle>
}
const Card = ({style, children}: Props) => {
  return (
    <View style = {[{
        backgroundColor: colors.cardBackground,
        borderRadius:10,
        padding:10
    },style]}>
      {children}
    </View>
  )
}

export default Card