import React from "react";
import { View,Text, Pressable, ImageBackground } from "react-native";
import { BOOK_MARK, TIMER } from "../icon/svgIcons";
import colors from "../../styles/colors";
import RatingInidcator from "../RatingIndicator/RatingIndicator";
import Icon from "../icon/Icon";
import { useDispatch, useSelector } from 'react-redux';
import { FavouriteRecipe, setIsFavourite } from "../../redux/FavouriteSlice";


export function RatingCard({item}){

    const favourites = useSelector(FavouriteRecipe)
    const dispatch = useDispatch();
    function setFavourite(){
        let found = ""
        for(var i = 0; i < favourites.length; i++) {
            if (favourites[i].recipe.label == item.recipe.label) {
                found = true;
                break;
            }
        }
        if(found != true){
        dispatch(setIsFavourite([...favourites,item]))
        alert("Favourite added sucessfully")
    }else{
        alert("Already a favourite")
    }
    }


    return(
        <View>
        <ImageBackground 
            source={{uri:item.recipe.image}}
            resizeMode="cover"
            style={{height:200,width:'100%',backgroundColor:colors.BLACK,borderRadius:16,marginBottom:10,}}
        >
        <RatingInidcator style={{position:'absolute',top:10,right:10}}/>

        <View style={{flexDirection:'row',justifyContent:'space-between',position:"absolute",width:"100%",paddingStart:10,bottom:10}}>
            <View style={{maxWidth:'60%'}}>
                <Text style={{color:colors.WHITE,fontWeight:'bold',fontSize:11}}>{item.recipe.label}</Text>
                <Text style={{color:colors.WHITE,fontSize:8}}>by Mark Kevin</Text>
            </View>

            <View style={{flexDirection:'row',alignItems:'center',marginEnd:10,paddingBottom:10}}>
                <Icon size={20} name={TIMER}/>
                <Text style={{fontSize:14,fontWeight:'600',textAlign:'center',color:colors.WHITE,marginHorizontal:10,marginBottom:5}}>15 mins</Text>
                <Pressable style={{backgroundColor:colors.WHITE,alignSelf:'baseline',padding:7,borderRadius:50}} onPress={()=>setFavourite()}>
                    <Icon name={BOOK_MARK} size={20}/>
                </Pressable>
            </View>

        </View>

        </ImageBackground>
        </View>
    );

}