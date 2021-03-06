import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../navigation/TabNavigation';
import { useSelector } from 'react-redux';
import RegisterScreen from '../screens/RegisterScreen';
import { getUser } from '../redux/system/selector';



export const AppScreens = {
    login:'Login',
    home:'Home',
    register:'Register',
};




const Stack = createStackNavigator();

export default function StackNavigator(){

    const isLogin = useSelector(state => state.system.isLogin);
    
    const initialRouteName = isLogin ? AppScreens.home : AppScreens.login;



    return(
        <Stack.Navigator initialRouteName={initialRouteName} >
            {isLogin ? <Stack.Screen
             name={AppScreens.home} 
             component={HomeScreen}
             options={{headerShown:false}} /> 
            : <Stack.Screen  
            name={AppScreens.login} 
            component={LoginScreen}  
            options={{headerShown:false}}

            />}
        <Stack.Screen 
        name={AppScreens.register} 
        component={RegisterScreen}
        />
            
        </Stack.Navigator>
    );
}