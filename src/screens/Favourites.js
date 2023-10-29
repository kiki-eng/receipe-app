import React from "react";
import { View,Text, SafeAreaView, FlatList } from "react-native";
import colors from "../styles/colors";
import {useSelector } from 'react-redux';
import { FavouriteRecipe } from "../redux/FavouriteSlice";
import { RatingCard } from "../components/ratingCard/RatingCard";

export default function Favourites(){

    const favourites = useSelector(FavouriteRecipe);
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:colors.WHITE,paddingHorizontal:20,paddingTop:30,flex:1}}>
                <Text style ={{fontSize:20,color:colors.BLACK,fontWeight:'bold',alignSelf:"center",marginBottom:20}}>Saved recipes</Text>

                { favourites.length == 0?
                    <View style={{alignSelf:'center',justifyContent:"center",flex:1}}>
                        <Text style={{fontSize:30,color:colors.BRAND_PRIMARY,fontWeight:'bold',textAlign:'center'}}>You currenty have no favourites</Text>
                    </View> 
                :
                <FlatList
                        showsVerticalScrollIndicator={false}
                        data={favourites}
                        renderItem={({item}) => <RatingCard item={item}/>}
                />
                }  

            </View>
        </SafeAreaView>
    )
}