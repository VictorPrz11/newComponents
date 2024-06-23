import React from 'react'
import { Text, View } from 'react-native'
import { colors, globalStyles } from '../../../config/theme/GlobalStyles'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
interface Props{
    title : string,
    safe?:boolean,
    white?: boolean
}
export const Title = ({title, safe= false, white=false}: Props) => {
    const {top} = useSafeAreaInsets()
  return (
    <Text style = {{...globalStyles.title,marginTop:safe ? top : 0, marginBottom: 10, color: white ? 'white' : colors.text}}>
            {title}
    </Text>
  )
}
