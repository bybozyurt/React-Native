import {
     NavigationContainer ,
     DefaultTheme,
     DarkTheme
} 
from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './RootNavigation';
import { getIsDarkMode } from '../redux/system/selector';

export default function Navigation(){
    const isDarkMode = getIsDarkMode();
    const barStyle = isDarkMode ? 'light-content' : 'dark-content';

    return(
        <NavigationContainer theme={isDarkMode ? DarkTheme : DefaultTheme}>
            <StatusBar 
            barStyle={barStyle}
            backgroundColor={'black'}
            />
            <RootNavigation/>
        </NavigationContainer>
    );
}