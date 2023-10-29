import React,{useState} from "react";
import { Pressable, View, Text, ScrollView,StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../styles/colors";
import { HomeTabs } from "../../utils/Lists";

export default function HomeSelector(){

    const [selected, setSelected] = useState("All")

    return(
        <View style={{marginVertical:25}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{flexDirection:"row", flexWrap:'wrap',flexDirection:'row'}}>
                {HomeTabs.map((item,index)=> (
                    <Pressable key={index} style={[styles.baseContainer,selected == item.title?styles.containerSelected:null]} onPress={()=>setSelected(item.title)}>
                        <Text style={[selected == item.title?styles.textSelected:styles.text]}>{item.title}</Text>
                    </Pressable>
                ))}
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.WHITE,
    },
    containerSelected:{
        backgroundColor: colors.BRAND_PRIMARY,
    },
    text:{
        color:colors.BRAND_PRIMARY,
        fontSize:11,
        fontWeight:'600'
    },
    textSelected:{
        color:colors.WHITE,
        fontSize:11,
        fontWeight:'600'
    },
    baseContainer:{
        marginEnd:5,
        alignSelf:'baseline',
        borderRadius:10,
        justifyContent:'center',
        paddingHorizontal:10,
        height:30
    }
  });