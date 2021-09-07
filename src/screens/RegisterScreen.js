import React, {useState} from 'react';
import {SafeAreaView, Text, View, StyleSheet, Image} from 'react-native';
import {colors, fonts, images} from '../constants';
import Input from '../components/Input';
import Button from '../components/Button';
import I18n from 'i18n-js';
import {setRegister} from '../redux/system/action';
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getIsDarkMode } from '../redux/system/selector';



export default function RegisterScreen(){

    

    const usernameText = I18n.t("username");
    const passwordText = I18n.t("password");
    const registerText = I18n.t("register");
    

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [secondPassword, setSecondPassword] = useState('');

    const isDarkMode = getIsDarkMode();
    const theme = isDarkMode ? styles.lightTheme : styles.darkTheme;

   




    

    const dispatch = useDispatch();

    const onRegister =  () => {

        try {

            if(password === secondPassword){
               
                dispatch(setRegister({
                    username:username,
                    password:password,
                    job:'Mobile Developer',
                    mobile:'050303030303',
                    profilePic:null,
                    country:'Turkey',
                    technologies:'React-native'                     
                }));
      
                console.log("Username ve Password kayıt edildi");
    
                

    
            }
            else{
                alert("Şifreler aynı olmalı");
            }

            
        } catch (e) {

            console.log("Multi set hata verdi", e);
            
        }


    }

    

   
        


    return(
        <SafeAreaView style={styles.container}>
        <View style={[styles.innerContainer, {backgroundColor:theme.backgroundColor}]}>


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
            value={username}
            color={colors.cFFFFFF}
            icon={'mail-outline'}
            style={{alignItems:'center',}}
            value={username}
            onChangeText={setUsername}
            
            />
        </View>

        <View style={{marginVertical:15}}>
            <Input
            isHidden
            placeHolder={passwordText}
            placeHolderTextColor={'gray'}
            value={password}
            color={colors.cFFFFFF}
            icon={'lock-outline'}
            style={{alignItems:'center'}}
            onChangeText={setPassword}
        
            
            />
        </View>

        <View style={{marginVertical:15}}>
            <Input
            isHidden
            placeHolder={passwordText}
            placeHolderTextColor={'gray'}
            value={secondPassword}
            color={colors.cFFFFFF}
            icon={'lock-outline'}
            style={{alignItems:'center'}}
            onChangeText={setSecondPassword}
            
            />
        </View>

        <View>
            <Button title={registerText} onPress={()=> onRegister()} style={{fontWeight:'bold'}}/>
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
        
    },
    innerContainer:{
        flex:1,
        backgroundColor:colors.backgroundColor,
        justifyContent:'center', 
    },
    lightTheme:{
        backgroundColor:colors.c000000,
        color:colors.c000000
    },
      darkTheme:{
        backgroundColor:'rgb(50,76,148)',
        color:colors.cFFFFFF
    },

})