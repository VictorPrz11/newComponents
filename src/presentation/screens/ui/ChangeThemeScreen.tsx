import { View, Text, StyleSheet } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import Button from '../../components/ui/Button'
import { Switch } from 'react-native-gesture-handler'
import CustomSwitch from '../../components/ui/CustomSwitch'
import { ThemeContext } from '../../context/ThemeContext'
interface Props{
    darkOn : boolean
}
const ChangeThemeScreen = () => {

  
    const {setTheme, currentTheme,colors,estado,Onoff} = useContext(ThemeContext)
    return (
        <CustomView margin>
            <Title safe title={`Theme Screen ${currentTheme}`} />
            <View style={
                [styles.Contenedor,
                { flexDirection: 'row' }
                ]
            }>
                <CustomSwitch isOn= {estado} onChange={()=>{Onoff
                }} text= {estado?'Dark On':'Dark Off'} />
            </View>

            <View style = {{height:10}}/>
            <Text style = {{color: colors.text}}>{JSON.stringify(colors, null, 2)}</Text>
        </CustomView>
    )
}

export default ChangeThemeScreen
const styles = StyleSheet.create({
    Texto: {
        fontSize: 20,
        marginHorizontal:10,
        opacity: 0.7,
        fontWeight: 'bold'
    },
    Contenedor: {
        alignItems: 'center',
       
    }
})