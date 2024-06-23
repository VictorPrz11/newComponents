
import Icon from "react-native-vector-icons/Ionicons"

interface Props{
    icon : string,
    size: number,
    color: string
}
export const Icono = ({icon, size, color}:Props)=> <Icon name={icon} size = {size} style = {{marginRight: 10}} color = {color}/>