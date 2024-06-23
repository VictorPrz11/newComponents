import { View, Text, StyleSheet, Pressable, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'
import { colors } from '../../../config/theme/GlobalStyles'
import useAnimation from '../../hooks/useAnimation'

const Animation101Screen = () => {
  const {animatedOpacity, animatedTop, fadeIn,fadeOut, startMovePosition} = useAnimation()
  return (
    <Animated.View style={styles.container}>
      <View style = {styles.c}>

      <Animated.View  style={{ ...styles.purpleBox,opacity:animatedOpacity, transform:[{translateY:animatedTop}]}} />
      <Animated.View  style={{ ...styles.purpleBox,opacity:animatedOpacity,transform:[{translateY:animatedTop}]}} />
      <Animated.View  style={{ ...styles.purpleBox,opacity:animatedOpacity,transform:[{translateY:animatedTop}]}} />

      </View>
      <Pressable onPress={()=>{
        fadeIn({})
        startMovePosition({initialPosition:-200., easing: Easing.elastic(2), duration: 1000})
      }} style={(pressed) => ({ marginTop: 10 })}>
        <Text>FadeIn</Text>
      </Pressable>
      <Pressable onPress={()=>fadeOut({toValue:0})} style={(pressed) => ({ marginTop: 10 })}>
        <Text >FadeOut</Text>
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
    backgroundColor: colors.primary,
    height: 20,
    width: 20
    , borderRadius:100,
    marginHorizontal: 1
    
  },
  c:{
    flexDirection:'row',
    
  }
})  