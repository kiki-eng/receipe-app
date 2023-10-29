import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";

const Stack = createStackNavigator();

export default function ReceipeHomeNav(){

    return(

                <Stack.Navigator screenOptions={{headerShown:false}}>
                    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
                        headerShown: false,
                    }} />

                </Stack.Navigator>
    )
    
}