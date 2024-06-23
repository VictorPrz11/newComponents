import { View, Text, Switch } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import Card from '../../components/ui/Card';
import CustomSwitch from '../../components/ui/CustomSwitch';
import Separator from '../../components/ui/Separator';

const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [state, setState] = useState({
    isActive: true,
    isHungry:false,
    isHappy: true
  })
  return (
    <CustomView style = {{marginTop:100,paddingHorizontal: 10}}>
      <Card>
        <CustomSwitch onChange={value=>setState({
          ...state, isActive:value
        })} isOn = {state.isActive} text='¿Esta activo?'/>
        <Separator/>
        <CustomSwitch onChange={value=>setState({
          ...state, isHungry:value
        })} isOn = {state.isHungry} text='¿Tiene hambre?'/>
        <Separator/>
        <CustomSwitch onChange={value=>setState({
          ...state, isHappy:value
        })} isOn = {state.isHappy} text='¿Es feliz?'/>
      </Card>
    </CustomView>

  )
}

export default SwitchScreen