import { View, Text, Alert } from 'react-native'
import React from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/GlobalStyles'
import Button from '../../components/ui/Button'
import prompt from 'react-native-prompt-android'
import { ShowPrompt } from '../../../config/adapters/prompt.adapter'

const AlertScreen = () => {

    const createTwoButtonAlert = () =>

        Alert.alert('Alert Title', 'My Alert Msg', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],{
            
        });
    const onshowPrompt = ()=>{
        // Alert.prompt('Confirmacion de correo',
        //     'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum suscipit eos laudantium placeat eveniet. Praesentium, excepturi, sunt alias quidem architecto ratione, non nesciunt ea corrupti exercitationem laborum! Necessitatibus, ipsa quis!',
        //    (valor: string)=>console.log({valor}),'secure-text'

        // )
       ShowPrompt({
        title: 'Nuevo prompt',
        message:'hola ingresa texto',
        components:[
            {
                text:'cancel',style:'destructive',onPress:()=>{}
            }
        ],

       })
    }
      const createThreeButtonAlert = () =>
        Alert.alert('Alert Title', 'My Alert Msg', [
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          {
            text: 'Ask me later',
            onPress: () => console.log('Ask me later pressed'),
          },
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'destructive',
          },
        ]);
    
  return (
    <CustomView style = {globalStyles.globalMargin}>
        <Title safe title='Alertas'/>
        <Button text='Alerta - 2 botones' onPress={createTwoButtonAlert}/>
        <View style ={{height:10}}/>
        <Button text='Alerta - 3 botones' onPress={createThreeButtonAlert}/>
        <View style ={{height:10}}/>
        <Button text='Prompt - input' onPress = {onshowPrompt}/>
    </CustomView>
  )
}

export default AlertScreen