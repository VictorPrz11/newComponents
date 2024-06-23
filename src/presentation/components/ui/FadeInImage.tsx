import { View, Text, StyleProp, ImageStyle, Animated, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import useAnimation from '../../hooks/useAnimation'
interface Props{
    uri:string,
    style? : StyleProp<ImageStyle>,

}
const FadeInImage = ({uri, style}:Props) => {
    const {animatedOpacity, fadeIn} = useAnimation()
    const [isLoading, setisLoading] = useState(true)
  return (
    <View style = {{justifyContent:'center', alignItems:'center'}}>
        <ActivityIndicator style= {{position:'absolute',}} color={'grey'} size={30}/>
        <Animated.Image source={{uri,}} onLoadEnd={()=>{
            fadeIn({});
            setisLoading(false);
        }} style = {[style,{opacity: animatedOpacity}]}/>

        <View style = {{height:30}}/>
    </View>
  )
}

export default FadeInImage