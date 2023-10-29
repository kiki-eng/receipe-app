import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "../components/icon/Icon";
import { useIsFocused } from "@react-navigation/native";
import HomeScreen from "../screens/Home";
import { BOOK_MARK, HOME_SELECTED } from "../components/icon/svgIcons";
import Favourites from "../screens/Favourites";
import AllRecipes from "../screens/AllRecipes";

const Tab = createBottomTabNavigator();

const getTabBarIcon =(route,focused)=>{
    const routeName = route.name;

    if(routeName==='Home'){
        if (focused){
            return(<Icon name={HOME_SELECTED} size={20} />)
        }else{
                return(<Icon name={HOME_SELECTED} size={20} />)
            }
        }

    if(routeName==='Favourites'){
        if (focused){
            return(<Icon name={BOOK_MARK} size={20} />)
        }else{
            return(<Icon name={BOOK_MARK} size={20} />)
            }
        }

    if(routeName==='All Recipes'){
        if (focused){
            return(<Icon name={BOOK_MARK} size={20} />)
        }else{
            return(<Icon name={BOOK_MARK} size={20} />)
            }
    }

}

export default function BottomTab(){

    return(

        <Tab.Navigator
          screenOptions={{
            headerShown:false,
        }}
        >
            <Tab.Screen 
                    name="Home" 
                    component={HomeScreen}
                    options={({route})=>({
                        tabBarIcon:({focused})=>
                        getTabBarIcon(route,focused)
                    })}
            />
            <Tab.Screen
                name="Favourites"
                component={Favourites}
                options={({route})=>({
                    tabBarIcon:({focused})=>
                    getTabBarIcon(route,focused)
                })}
            />
            
            <Tab.Screen
                name="All Recipes"
                component={AllRecipes}
                options={({route})=>({
                    tabBarIcon:({focused})=>
                    getTabBarIcon(route,focused)
                })}
            />

        </Tab.Navigator>

    )

}