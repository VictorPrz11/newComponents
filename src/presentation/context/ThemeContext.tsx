import { PropsWithChildren, createContext, useState } from "react";
import { ThemeColors, darkColors, lightColors } from '../../config/theme/GlobalStyles';

type LightOrDark = 'Light' | 'Dark';

interface ThemeContextProps {
  currentTheme: LightOrDark;
  colors: ThemeColors;
  setTheme: (theme: LightOrDark) => void,
  estado : boolean,
  Onoff: ()=>void
};

export const ThemeContext = createContext({} as ThemeContextProps)
export const ThemeProvider = ({ children }: PropsWithChildren) => {
  const [currentTheme, setcurrentTheme] = useState<LightOrDark>('Light')
  const [estadoONOFF, setestadoONOFF] = useState(false)
  const setTheme = (theme: LightOrDark) => {
   setcurrentTheme(theme)
  }
  return (
    <ThemeContext.Provider value={{ currentTheme: currentTheme, colors: currentTheme === 'Light'  ? lightColors : darkColors, setTheme: setTheme, estado: estadoONOFF, Onoff: ()=>setestadoONOFF(!estadoONOFF)}}>{children}</ThemeContext.Provider>
  )
}