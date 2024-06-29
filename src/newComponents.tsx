import { NavigationContainer } from '@react-navigation/native'
import React, { PropsWithChildren } from 'react'
import { Text, View } from 'react-native'
import { MyStack } from './presentation/navigator/stack'
import { HomeScreen } from './presentation/screens/home/homeScreen'
import { MyTheme } from './presentation/screens/theme/Theme'
import { ThemeProvider } from './presentation/context/ThemeContext'


const AppState = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <NavigationContainer>
        {children}
      </NavigationContainer>
    </ThemeProvider>
  )
}
const App = () => {
  return (
    <AppState>
      <MyStack />
    </AppState>

  )
}
export default App