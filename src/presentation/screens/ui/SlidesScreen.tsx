import { View, Text, ImageSourcePropType, useWindowDimensions, Image, NativeSyntheticEvent, NativeScrollEvent } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { colors, globalStyles } from '../../../config/theme/GlobalStyles';
import { FlatList } from 'react-native-gesture-handler';
import Button from '../../components/ui/Button';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';
interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat curlpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../../assets/slide-3.png'),
  },
];
const SlidesScreen = () => {
  const navigate = useNavigation()
  const [currentSlideIndex, setcurrentSlideIndex] = useState(0)
  const {} = useContext(ThemeContext)
  const flatListRef = useRef<FlatList>(null)
  const OnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent
    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width)
    setcurrentSlideIndex(currentIndex > 0 ? currentIndex : 0)

  }
  const ScrollToSlide = (index: number) => {
      if(!flatListRef.current)return
      flatListRef.current.scrollToIndex({index:index, animated:true})
  }

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <FlatList ref={flatListRef} data={items} renderItem={({ item }) => (<SlideItem item={item} />)} keyExtractor={(item) => item.title} horizontal
        pagingEnabled onScroll={OnScroll} scrollEnabled = {false}/>

      {
        currentSlideIndex == items.length - 1 ? (<Button text={'Finalizar'} onPress={() => {navigate.goBack() }} style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }} />) :
          (<Button text={'Siguiente'} onPress={() => {

              ScrollToSlide(currentSlideIndex+1)

          }} style={{ position: 'absolute', bottom: 60, right: 30, width: 100 }} />)

      }
    </View>

  )
}

export default SlidesScreen
interface SlideItemProps {
  item: Slide
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions()
  const { title, img, desc } = item
  const {colors} = useContext(ThemeContext)
  return (
    <View style={{
      flex: 1,
      backgroundColor: colors.background,
      borderRadius: 5,
      padding: 40,
      justifyContent: 'center',
      width: width
    }}>
      <Image source={img} style={{
        width: width * 0.7,
        height: width * 0.7,
        resizeMode: 'center',
        alignSelf: 'center'
      }} />
      <Text style={[globalStyles.title, { color: colors.primary }]}>{title}</Text>
      <Text style={{ color: colors.text, marginTop: 20 }}>{desc}</Text>
    </View>
  )

}