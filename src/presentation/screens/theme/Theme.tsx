import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

export const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme,
    primary: 'rgb(255, 45, 85)',
  },
};