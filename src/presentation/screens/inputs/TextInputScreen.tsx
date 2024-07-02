import { View, Text, TextInput, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { globalStyles } from '../../../config/theme/GlobalStyles'
import Card from '../../components/ui/Card'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemeContext } from '../../context/ThemeContext'
import { SafeAreaView } from 'react-native-safe-area-context'

const TextInputScreen = () => {
    const [text, setText] = useState({
        name:'',
        email:'',
        phone:''
    })
    const{ colors} =useContext(ThemeContext)
  return (
    // <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding':undefined}>

<ScrollView automaticallyAdjustKeyboardInsets  style = {{ backgroundColor:colors.background}}>
        <CustomView margin>
        <Title safe title='Text inputs'/>
        <Card>
            <TextInput style = {{...globalStyles.input, borderColor: colors.text}} placeholderTextColor={colors.text} placeholder='Nombre completo' autoCapitalize='words' autoCorrect = {false} onChangeText={value => setText({...text, name:value})} value = {text.name}/>
            <TextInput style = {{...globalStyles.input, borderColor: colors.text}} placeholderTextColor={colors.text} placeholder='Email' autoCapitalize='none' keyboardType='email-address' autoCorrect = {false} onChangeText={value => setText({...text, email:value})} value = {text.email}/>
            <TextInput style = {{...globalStyles.input, borderColor: colors.text}} placeholderTextColor={colors.text} placeholder='Phone' autoCapitalize='words' keyboardType='number-pad' autoCorrect = {false}  onChangeText={value => setText({...text, phone:value})} value = {text.phone}/>
        </Card>
    
        <View style = {{height:20}}/>
        <Card>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            <Text style ={{color:colors.text}}>{JSON.stringify(text,null,2)}</Text>
            
            <TextInput style = {{...globalStyles.input, borderColor: colors.text}} placeholderTextColor={colors.text} placeholder='Phone' autoCapitalize='words' keyboardType='number-pad' autoCorrect = {false}  onChangeText={value => setText({...text, phone:value})} value = {text.phone}/>
        </Card>

    </CustomView>
    <View style = {{height:20, backgroundColor:colors.background}} />
    </ScrollView>

    // </KeyboardAvoidingView>
    
  )
}

export default TextInputScreen