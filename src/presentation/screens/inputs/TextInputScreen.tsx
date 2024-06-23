import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/GlobalStyles'
import Card from '../../components/ui/Card'
import { ScrollView } from 'react-native-gesture-handler'

const TextInputScreen = () => {
    const [text, setText] = useState({
        name:'',
        email:'',
        phone:''
    })
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding':undefined}>

    <ScrollView automaticallyAdjustKeyboardInsets>
        <CustomView margin>
        <Title safe title='Text inputs'/>
        <Card>
            <TextInput style = {globalStyles.input} placeholder='Nombre completo' autoCapitalize='words' autoCorrect = {false} onChangeText={value => setText({...text, name:value})} value = {text.name}/>
            <TextInput style = {globalStyles.input} placeholder='Email' autoCapitalize='none' keyboardType='email-address' autoCorrect = {false} onChangeText={value => setText({...text, email:value})} value = {text.email}/>
            <TextInput style = {globalStyles.input} placeholder='Phone' autoCapitalize='words' keyboardType='number-pad' autoCorrect = {false}  onChangeText={value => setText({...text, phone:value})} value = {text.phone}/>
        </Card>
    
        <View style = {{height:20}}/>
        <Card>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <Text>{JSON.stringify(text,null,2)}</Text>
            <TextInput style = {globalStyles.input} placeholder='Phone' autoCapitalize='words' keyboardType='number-pad' autoCorrect = {false}  onChangeText={value => setText({...text, phone:value})} value = {text.phone}/>
        </Card>

    </CustomView>
    <View style = {{height:20}} />
    </ScrollView>
    // </KeyboardAvoidingView>
    
  )
}

export default TextInputScreen