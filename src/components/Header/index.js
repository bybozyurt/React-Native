import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import {colors,fonts} from '../../constants';
import { getIsDarkMode } from '../../redux/system/selector';

export default function Header({title}){
    const isDarkMode = getIsDarkMode();

    const background = isDarkMode ? colors.dark.primary[1] : colors.light.primary[1];


    return(
        <SafeAreaView style={Platform.OS === 'ios' ? {background} : {background, paddingTop:StatusBar.currentHeight}}>
        <StatusBar backgroundColor={background} barStyle={'light-content'}/>
        <View style={style.container}>
            <Text style={style.text}>{title}</Text>
        </View>
        </SafeAreaView>
    );

}

const style = StyleSheet.create({

    container:{
        marginLeft:10
    },
    
    text:{
        fontSize:fonts.f20,
        fontWeight:'bold',
        color:colors.dark.white[100]
    }


})