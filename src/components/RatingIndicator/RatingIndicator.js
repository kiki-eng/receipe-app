import colors from "../../styles/colors";
import Icon from "../icon/Icon";
import { View,Text} from "react-native";
import { STAR } from "../icon/svgIcons";

export default function RatingInidcator({style}){

    return(
        <View style={[{flexDirection:'row',backgroundColor:colors.ROYAL_YELLOW,alignSelf:'baseline',borderRadius:8,paddingEnd:5,paddingVertical:3},style]}>
            <Icon size={20} name={STAR}/>
            <Text>4.0</Text>
        </View>
    )
}