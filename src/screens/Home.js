import React from "react";
import { View,Text, SafeAreaView, Image, FlatList } from "react-native";
import colors from "../styles/colors";
import { Searchbar } from "react-native-paper";
import { BOOK_MARK, SEARCH_ICON } from "../components/icon/svgIcons";
import Icon from "../components/icon/Icon";
import HomeSelector from "../components/homeSelector/HomeSelector";
import { HomeTabs } from "../utils/Lists";
import TopCards from "../components/topCard/TopCard";

export default function HomeScreen (){

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:colors.WHITE,paddingHorizontal:20,paddingTop:30,flex:1}}>
               
               {/* Header */}
                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <View>
                        <Text style ={{fontSize:20,color:colors.BLACK,fontWeight:'bold'}}>Hello Jega</Text>
                        <Text style ={{fontSize:11,color:colors.LIGHT_TEXT, marginTop:7}}>What are you cooking today</Text>
                    </View>
                    <Image style={{height:40,width:40,borderRadius:10,backgroundColor:colors.ROYAL_YELLOW}} source={{uri:"d6cbc6849fe48a0f9d7a0778502d14b5-removebg-preview.png"}}/>
                </View>

                {/* Search Bar */}
                <Searchbar
                        testID="Houses_searchBar"
                        style={{backgroundColor:colors.WHITE,borderWidth:1,borderColor:colors.LIGHT_GRAY,borderRadius:20,marginTop:30}}
                        placeholder="Search receipe"
                        inputStyle={{fontSize:15,}}
                        onChangeText={(text)=>{}}
                        icon={({ size }) => (
                            <Icon name={SEARCH_ICON} size={size}/>
                        )}
                    />
                
                {/* Tabs */}
                <HomeSelector/>

                {/* Top Cards */}

                <FlatList
                    style={{maxHeight:250}}
                    showsHorizontalScrollIndicator={false}
                    data={HomeTabs}
                    horizontal={true}
                    renderItem={({item}) => <TopCards/>}
                /> 

                <Text style={{fontSize:20,color:colors.BLACK,fontWeight:'bold'}}>New Recipies</Text>

                <View style={{height:50,width:'100%',shadowColor: colors.BLACK,
                backgroundColor:colors.WHITE,
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 0.9,
        shadowRadius:128/2,
        elevation: 10,}}>

                </View>
                

            </View>
        </SafeAreaView>
    )
}