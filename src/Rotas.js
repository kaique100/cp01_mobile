import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Login from "./Login";
import Home from "./Home";

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Login" component={Login} 
                    options={{ title: 'Login' }}
                />               
                <Tab.Screen
                    name="Home" component={Home} options={{ title: 'Home' }}
                />               
            </Tab.Navigator>
        </NavigationContainer>
    )
}