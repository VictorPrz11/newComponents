import { View, Text, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import CustomView from '../../components/ui/CustomView'
import { Title } from '../../components/ui/Title'
import { ScrollView } from 'react-native-gesture-handler'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { colors, globalStyles } from '../../../config/theme/GlobalStyles'

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
  return (
    <ScrollView style={[globalStyles.mainContainer,globalStyles.globalMargin]} refreshControl={
      <RefreshControl  refreshing = {refreshing}  progressViewOffset={top} colors={['blue','red','orange']} onRefresh={onRefresh} />
    } >

      <Title title='PULL TO REFRESH' safe/>

    </ScrollView>
  )
}

export default PullToRefreshScreen