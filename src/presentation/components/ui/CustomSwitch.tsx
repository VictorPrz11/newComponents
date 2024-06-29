import { View, Text, Switch, StyleSheet, Platform } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../../context/ThemeContext'
interface Props{
    isOn: boolean
    text? : string
    onChange : (value: boolean)=>void
}
const CustomSwitch = ({isOn, text, onChange}:Props) => {
    const {colors} = useContext(ThemeContext)
  return (
   <View style = {styles.switchRow}>
    {
        text && <Text style = {{ color:colors.text, marginHorizontal:10, fontSize:20 }}>{text}</Text>
    }
         <Switch
          thumbColor={Platform.OS === 'android' ? colors.primary :  ''}
        
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChange}
          value={isOn}
        />
   </View>
  )
}

export default CustomSwitch
const styles =  StyleSheet.create({
    switchRow:{
        flexDirection: 'row',
        justifyContent: 'space-between'
        ,
        alignItems: 'center',
        marginVertical:5
    }
})