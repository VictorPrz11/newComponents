import { View, Text } from 'react-native'
import React from 'react'
import { colors, globalStyles } from '../../../config/theme/GlobalStyles';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface Props{
    texto:string,
    safe?:boolean,
    backgroundColor: string
}
const Subtitle = ({texto, safe = false, backgroundColor = colors.background}:Props) => {
  
    const { top } = useSafeAreaInsets()
    return (
      <Text style = {{...globalStyles.subTitle, marginTop: safe ? top : 0, marginBottom: 10, backgroundColor:backgroundColor}}>{texto}</Text>

  )
}

export default Subtitle