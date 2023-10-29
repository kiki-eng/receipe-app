import React, {useState, useEffect} from "react";
import { View,Text, SafeAreaView,FlatList } from "react-native";
import colors from "../styles/colors";
import { getAllRecipes } from "../services/GetRecipeService";
import { RatingCard } from "../components/ratingCard/RatingCard";
import { Searchbar } from "react-native-paper";
import { SEARCH_ICON } from "../components/icon/svgIcons";
import Icon from "../components/icon/Icon";

export default function AllRecipes(){

    const [loading, setIsLoading] = useState(false)
    const [recipes, setRecipes] = useState([])
    const [initialRecipes, setInitialRecipes] = useState([])

    useEffect(()=>{
        fetchAllRecipes()
    },[])
    

    
    const fetchAllRecipes = async () => {
        setIsLoading(true);
        await getAllRecipes()
        .then((response)=>{
          if(response == null){
              alert("Something went wrong, Please try again");
              setIsLoading(false);
          }
          else if(response.status == 200){
            setRecipes(response.data.hits);
            setInitialRecipes(response.data.hits);
            setIsLoading(false);
          }else{
            alert(response);
            setIsLoading(false);
          }
        })
        .catch((error) => {
          alert(error);
          setIsLoading(false)
      }
          );         
      };

      const searchFilter=(text)=>{
        let temp=[];
        if(!text){
          setRecipes(initialRecipes);
        }else{
            recipes.filter(function(item){
              return JSON.stringify(item).toLowerCase().includes(text.toLowerCase())
            }
            )
            .forEach((item)=>{
              temp=[...temp,item]
            }
            )
            setRecipes(temp)
        }
       
      }
    
    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{backgroundColor:colors.WHITE,paddingHorizontal:20,paddingTop:30,flex:1}}>
              
                <Text style ={{fontSize:20,color:colors.BLACK,fontWeight:'bold',alignSelf:"center"}}>All recipes</Text>  

                
                {/* Search Bar */}
                <Searchbar
                        testID="Houses_searchBar"
                        style={{backgroundColor:colors.WHITE,borderWidth:1,borderColor:colors.LIGHT_GRAY,borderRadius:20,marginVertical:30}}
                        placeholder="Search receipe"
                        inputStyle={{fontSize:15,}}
                        onChangeText={(text)=>searchFilter(text)}
                        icon={({ size }) => (
                            <Icon name={SEARCH_ICON} size={size}/>
                        )}
                    />

                {loading?
                    <View style={{alignSelf:'center',justifyContent:"center",flex:1}}>
                        <Text style={{fontSize:40,color:colors.BRAND_PRIMARY,fontWeight:'bold'}}>Loading ...</Text>
                    </View> 
                :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={recipes}
                        renderItem={({item}) => <RatingCard item={item}/>}
                    /> 
                }

            </View>
        </SafeAreaView>
    )
}