import { View, Text, Animated, StyleSheet, PanResponder } from 'react-native'
import React, { useContext, useRef } from 'react'
import { ThemeContext } from '../../context/ThemeContext'

const Animation102Screen = () => {
    const pan =  useRef(new Animated.ValueXY()).current
    const {colors} = useContext(ThemeContext)
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: ()=> true,
        onPanResponderMove: Animated.event([
            null, {
                dx: pan.x,
                dy: pan.y
            }
        ],{
            useNativeDriver: false
        }
    ),
        onPanResponderRelease: ()=>{
            Animated.spring(pan, {
                toValue:{x:0,y:0},
                useNativeDriver: false,

            }).start(()=> console.log('restart'))
        }
    })
  return (
    <View style = {{...styles.container, backgroundColor: colors.background}}>
     <Animated.View {...panResponder.panHandlers} style = {[pan.getLayout(),styles.box]}>
     </Animated.View>
    </View>
  )
}

export default Animation102Screen

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        justifyContent:'center',
        alignItems: 'center'
    },
    box:{
        backgroundColor:"#61dafb",
        width: 80,
        height:80,
        borderRadius:10
    }
})