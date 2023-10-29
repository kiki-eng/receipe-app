import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ReceipeHomeNav from './src/navigation/ReceipeHomeNav'
import { Provider } from 'react-redux';
import { Store } from './src/redux/Store';
import BottomTab from './src/navigation/BottomTab';

export default function App(): JSX.Element {
  return (
    <Provider store={Store}>
      <NavigationContainer>
        <BottomTab>
          <ReceipeHomeNav/>
        </BottomTab>
      </NavigationContainer>
    </Provider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, { useState, useEffect } from 'react';
// import { View, Text, FlatList, Image } from 'react-native';
// import { fetchRecipes } from './src/apis/testEdamamAPI';

// const RecipeListScreen = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const loadRecipes = async () => {
//       const data = await fetchRecipes('chicken');
//       setRecipes(data);
//     };
//     loadRecipes();
//   }, []);

//   const renderItem = ({ item }: any) => {
//     return (
//       <View>
//         <Image source={{ uri: item.recipe.image }} style={{ width: 100, height: 100 }} />
//         <Text>{item.recipe.label}</Text>
//         <Text>{item.recipe.calories}</Text>
//       </View>
//     );
//   };

//   return (
//     <View>
//       <FlatList data={recipes} renderItem={renderItem} keyExtractor={(item: any) => item.recipe.uri} />
//     </View>
//   );
// };

// export default RecipeListScreen;
