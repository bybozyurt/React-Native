
import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import {colors, fonts, images} from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';
import I18n from 'i18n-js';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegisterScreen(){

    const [pageData, setPageData] = useState({
        username:'',
        password:'',
        secondPassword:'',
    });

    const usernameText = I18n.t("username");
    const passwordText = I18n.t("password");
    const registerText = I18n.t("register");


   
        


    return(
        <SafeAreaView style={styles.container}>
        <View style={{}}>


        <View style={styles.logoContainer}>
            <Image
            source={images.logo}
            style={styles.logo}
            resizeMethod='scale'
            resizeMode='contain'
            
            />
        </View>

        <View style={{marginVertical:15}}>
            <Input 
            placeHolder={usernameText}
            placeHolderTextColor={'gray'}
            value={pageData.username}
            color={colors.cFFFFFF}
            icon={'mail-outline'}
            style={{alignItems:'center',}}
            />
        </View>

        <View style={{marginVertical:15}}>
            <Input
            isHidden
            placeHolder={passwordText}
            placeHolderTextColor={'gray'}
            value={pageData.password}
            color={colors.cFFFFFF}
            icon={'lock-outline'}
            style={{alignItems:'center'}}
            />
        </View>

        <View style={{marginVertical:15}}>
            <Input
            isHidden
            placeHolder={passwordText}
            placeHolderTextColor={'gray'}
            value={pageData.secondPassword}
            color={colors.cFFFFFF}
            icon={'lock-outline'}
            style={{alignItems:'center'}}
            />
        </View>

        <View>
            <Button title={registerText} style={{fontWeight:'bold'}}/>
        </View>

    
        </View>
    
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: colors.backgroundColor
        
    },
    input:{
        marginVertical:5,
        alignItems:'center'
    },
    logo:{ 
        width:300, 
        height:100
    },
    logoContainer:{ 
        marginBottom:25, 
        alignItems:'center', 
        marginVertical:100
    },
    innerContainer:{
        flex:1,
        backgroundColor:colors.backgroundColor,
        justifyContent:'center', 
    },

})