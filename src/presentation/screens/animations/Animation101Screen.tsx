import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native'
import React, { useContext, useRef } from 'react'
import useAnimation from '../../hooks/useAnimation'
import { ThemeContext } from '../../context/ThemeContext'

const Animation101Screen = () => {
  const {animatedOpacity, animatedTop, fadeIn,fadeOut, startMovePosition} = useAnimation()
  const {colors}  = useContext(ThemeContext)
  return (
    <Animated.View style={[styles.container, {backgroundColor: colors.background}]}>
      <View style = {styles.c}>

      <Animated.View  style={{ ...styles.purpleBox,backgroundColor: colors.primary, opacity:animatedOpacity, transform:[{translateY:animatedTop}]}} />
      <Animated.View  style={{ ...styles.purpleBox,backgroundColor: colors.primary,opacity:animatedOpacity,transform:[{translateY:animatedTop}]}} />
      <Animated.View  style={{ ...styles.purpleBox,backgroundColor: colors.primary,opacity:animatedOpacity,transform:[{translateY:animatedTop}]}} />

      </View>
      <Pressable onPress={()=>{
        fadeIn({})
        startMovePosition({initialPosition:-200., easing: Easing.elastic(2), duration: 1000})
      }} style={(pressed) => ({ marginTop: 10, opacity: pressed ? 0.8 : 1,})}>
        <Text style  = {{fontSize:40,color:colors.text}}>FadeIn</Text>
      </Pressable>
      <Pressable onPress={()=>fadeOut({toValue:0})} style={(pressed) => ({ marginTop: 10 })}>
        <Text style = {{color:colors.text}}>FadeOut</Text>
      </Pressable>
    </Animated.View>
  )
}

export default Animation101Screen


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    
  }, purpleBox: {
    height: 20,
    width: 20
    , borderRadius:100,
    marginHorizontal: 1
  },
  c:{
    flexDirection:'row',
    
  }
})  