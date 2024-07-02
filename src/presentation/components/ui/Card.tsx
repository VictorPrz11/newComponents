import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React, { PropsWithChildren, useContext } from 'react'
import { colors } from '../../../config/theme/GlobalStyles'
import { ThemeContext } from '../../context/ThemeContext'
interface Props extends PropsWithChildren{
    style ? : StyleProp<ViewStyle>
}
const Card = ({style, children}: Props) => {
  const { colors } = useContext(ThemeContext)
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