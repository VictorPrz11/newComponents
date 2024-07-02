import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { ThemeColors, darkColors, lightColors } from '../../config/theme/GlobalStyles';
import { AppState, useColorScheme } from "react-native";

export type LightOrDark = 'light' | 'dark';

interface ThemeContextProps {
  currentTheme: LightOrDark;
  colors: ThemeColors;
  setTheme: (theme: LightOrDark) => void,
};

export const ThemeContext = createContext({} as ThemeContextProps)
export const ThemeProvider = ({ children }: PropsWithChildren) => {

  const [currentTheme, setcurrentTheme] = useState<LightOrDark>('light')
  const colorScheme = useColorScheme()
  useEffect(() => {
    colorScheme === 'dark' ? setcurrentTheme ('dark') : setcurrentTheme('light')
    
    }, [colorScheme])
  const setTheme = (theme: LightOrDark) => {
   setcurrentTheme(theme)
  }
  return (
    <ThemeContext.Provider value={{ currentTheme: currentTheme, colors: currentTheme === 'light'  ? lightColors : darkColors, setTheme: setTheme}}>{children}</ThemeContext.Provider>
  )
}