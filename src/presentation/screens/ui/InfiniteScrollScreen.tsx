import { View, Text, Image, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { FlatList } from 'react-native-gesture-handler'
import { colors } from '../../../config/theme/GlobalStyles';
import FadeInImage from '../../components/ui/FadeInImage'

const InfiniteScrollScreen = () => {
    const [numbers, setnumbers] = useState([0,1,2,3,4,5])
    const loadMore = ()=>{
        //To-DO: añadir numeros al arreglo
       const newArray = Array.from({length:5},(_,i)=>numbers.length + i)
       setTimeout(() => {
        setnumbers([...numbers,...newArray])
       }, 2000);
    }
  return (
    <View style = {{
        backgroundColor: 'black'
    }}>
        <FlatList keyExtractor={(item)=>item.toString()} onEndReachedThreshold={0.6} showsVerticalScrollIndicator = {false} data={numbers} onEndReached={loadMore} ListFooterComponent={()=>(
            <View style = {{height:80,justifyContent:'center'}}>
                <ActivityIndicator  size = {40} color = {colors.primary}/>
            </View>
        )} renderItem={({item, index})=>
            <ListItem number = {item}/>
        }/>
    </View>

  )
}

export default InfiniteScrollScreen
interface ListItemProps {
    number:number,

}
const ListItem = ({number}:ListItemProps)=>{
    return (

        <FadeInImage style = {{height:400,
            width:'100%'
            
        }} uri = {`https://picsum.photos/id/${number}/200/300`}/>
    )

}