import { View, Text, Platform } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { Modal } from 'react-native'
import Button from '../../components/ui/Button'

const ModalScreen = () => {
    const [modalShown, setmodalShown] = useState(false)
  return (
    <CustomView margin>
        <Title title = 'MODAL' safe/>
        <Button onPress={()=>{setmodalShown(true)}} text=  'SHOW'/>
        <Modal visible = {modalShown} animationType='slide'>
            <View style = {{flex: 1, backgroundColor: 'transparent'}}>
                <View style = {{paddingHorizontal:10, alignItems:'center'}}>
                <Title title='MODAL CONTENT' safe/>
                </View>
                <View style = {{flex: 1}}/>
                <Button text='HIDE' onPress={()=>setmodalShown(false)} style ={{height: Platform.OS == 'android' ? 40 : 60, borderRadius:0}}/>
                    
            </View>
        </Modal>
    </CustomView>
  )
}

export default ModalScreen