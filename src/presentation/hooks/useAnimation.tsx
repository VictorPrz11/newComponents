import { View, Text, Animated, Easing } from 'react-native'
import React, { useRef } from 'react'

const useAnimation = () => {
    const animatedOpacity = useRef(new Animated.Value(0)).current
  const animatedTop = useRef(new Animated.Value(0)).current
  const fadeIn = ({duration = 300, toValue = 1,callBack = ()=>{}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    }).start(() => console.log("animation ended"))
    // Animated.timing(animatedTop, {
    //   toValue: 0,
    //   duration: 1000,
    //   easing: Easing.bounce,
    //   useNativeDriver:true
    // }).start(fadeOut)
  }
  const fadeOut = ({duration = 300, toValue = 0.6,callBack = ()=>{}}) => {
    Animated.timing(animatedOpacity, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true
    }).start(()=>{
        callBack
        // animatedOpacity.resetAnimation()
    })
    // Animated.timing(animatedTop, {
    //   toValue: -20,
    //   duration: 1000,
    //   easing: Easing.bounce,
    //   useNativeDriver:true
    // }).start(fadeIn)
  }
  const startMovePosition = ({initialPosition = 0 , duration = 300, easing = Easing.linear, callback = ()=>{}})=>{
    animatedTop.setValue(initialPosition)
    Animated.timing(animatedTop, {
        toValue: 0,
        duration:duration,
        useNativeDriver: true,
        easing: easing
    }).start()
  }
  return {
    fadeIn,
    fadeOut,
    startMovePosition,
    animatedOpacity, animatedTop
  }
}

export default useAnimation