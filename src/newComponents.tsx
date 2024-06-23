import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { Text, View } from 'react-native'
import { MyStack } from './presentation/navigator/stack'
import {HomeScreen} from './presentation/screens/home/homeScreen'
const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  )
}
export default App