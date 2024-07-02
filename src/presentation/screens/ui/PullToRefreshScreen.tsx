import { View, Text, RefreshControl } from 'react-native'
import React, { useContext, useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {globalStyles } from '../../../config/theme/GlobalStyles'
import { ThemeContext } from '../../context/ThemeContext'

const PullToRefreshScreen = () => {
  const [refreshing, setrefreshing] = useState(false)
  const {top} = useSafeAreaInsets()
  const onRefresh = ()=>{
    setrefreshing(true)
    setTimeout(() => {
      setrefreshing(false)
      console.log('refresh off')
    }, 2000);
  }
  const {colors} = useContext(ThemeContext)
  return (
    <ScrollView style={[globalStyles.mainContainer,globalStyles.globalMargin, {backgroundColor: colors.background}]} refreshControl={
      <RefreshControl  refreshing = {refreshing}  progressViewOffset={top} colors={['blue','red','orange']} onRefresh={onRefresh} />
    } >

      <Title title='PULL TO REFRESH' safe/>

    </ScrollView>
  )
}

export default PullToRefreshScreen