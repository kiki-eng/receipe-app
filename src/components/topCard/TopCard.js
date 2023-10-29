import React from "react";
import { View,Text, Image, Pressable } from "react-native";
import colors from "../../styles/colors";
import RatingInidcator from "../RatingIndicator/RatingIndicator";
import Icon from "../icon/Icon";
import { BOOK_MARK } from "../icon/svgIcons";

export default function TopCards(){

    return(
                <View style={{height:230,width:150,marginEnd:10}}>
                    <Image style={{height:100,width:100,borderRadius:50,backgroundColor:colors.BLACK,position:'absolute',top:0,zIndex:1,alignSelf:'center'}} source={{uri:"d6cbc6849fe48a0f9d7a0778502d14b5-removebg-preview.png"}}/>
                    <RatingInidcator style={{zIndex:2,position:'absolute',right:0,top:30}}/>
                    <View style={{height:176,width:150,backgroundColor:colors.LIGHT_GRAY,borderRadius:16,position:'absolute',bottom:0,padding:10}}>
                        <Text style={{fontSize:14,fontWeight:'600',textAlign:'center',color:colors.NEUTRAL_GRAY,paddingTop:50,paddingHorizontal:10}}>Classic Greek Salad</Text>
                        <Text style={{fontSize:14,fontWeight:'600',color:colors.LIGHT_TEXT,position:"absolute",bottom:35,left:10}}>Time</Text>

                        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',position:'absolute',bottom:20,width:'100%',paddingStart:10}}>
                            <Text style={{fontSize:14,fontWeight:'600',textAlign:'center',color:colors.NEUTRAL_GRAY}}>15 mins</Text>
                            <Pressable style={{backgroundColor:colors.WHITE,alignSelf:'baseline',padding:7,borderRadius:50}}>
                                <Icon name={BOOK_MARK} size={20}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )
        
}