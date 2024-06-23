import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { colors } from '../../../config/theme/GlobalStyles'
import { Icono } from '../../Icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Separator from './Separator';
interface Props {
    name: string,
    icon: string
    component: string,
    //To do
    isFirst ? : boolean,
    isLast ? : boolean
}
const MenuItem = ({ name, icon, component, isFirst = false, isLast = false}: Props) => {
    const navigation =  useNavigation<any>()
    return (
        <>
        <Pressable onPress={() => navigation.navigate(component)}>
            <View style={{ ...styles.container, backgroundColor: colors.cardBackground ,
                ...(isFirst &&{borderTopLeftRadius: 10, borderTopRightRadius:10, paddingTop:10}),
                ...(isLast &&{borderBottomLeftRadius: 10, borderBottomRightRadius:10, paddingBottom:10})
            }}>
                <Icono icon={icon} size={25} color={colors.primary} />
                <Text style={{ color: colors.text }}>{name}</Text>
                <Icon name='chevron-forward-outline' size={25} style = {{marginLeft: 'auto', color: colors.primary}} />
            </View>

        </Pressable>
        {
            !isLast && <Separator/>
       
        }
        </>
    )
}

export default MenuItem

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5

    }
})