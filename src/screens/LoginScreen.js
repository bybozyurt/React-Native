import React, { useState} from 'react';
import {StyleSheet,View, Image, Text, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView, ScrollView, Switch, TouchableOpacity} from 'react-native';
import {images,colors, fonts} from '../constants'
import Input from '../components/Input';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import DeviceInfo from 'react-native-device-info';
import I18n from '../i18n';
import { hideLoader, setUser, toogleLoader } from '../redux/system/action';
import {useDispatch,useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { AppScreens } from '../navigation/RootNavigation';
import {CustomView} from '../components/CustomView';
import { getUser } from '../redux/system/selector';






export default function LoginScreen(){

    const usernameText = I18n.t("username")
    const passwordText = I18n.t("password")
    const rememberMeText = I18n.t("rememberMe")
    const loginText = I18n.t("login")
    const registerText = I18n.t("register");

    let version = DeviceInfo.getVersion();
    

     const [pageData, setPageData] = useState({
         username:'',
         password:''
     });


    const onChangeText = (key,value) =>{
        console.log('key,value',pageData,key,value);
        setPageData(page => ({...page, [key]:value}))
    };



    const [isDarkMode, setIsDarkMode] = useState(false);
    const toogleSwitch = () => setIsDarkMode(previousState => !previousState);

    const theme = isDarkMode ? styles.lightTheme : styles.darkTheme;

    const [rememberMe, setRememberMe] = useState(false);

    const handleRememberMe = () =>{

        setRememberMe(remember => !remember);
    };

    const dispatch = useDispatch();

    const user = getUser();
    console.log("user",user);
    const userName = user.username;
    const passWord = user.password;

    

    const onLogin = () => {

        dispatch(toogleLoader());


        
        
   

         if(userName === pageData.username && passWord === pageData.password){

                  
            dispatch(setUser());
            
            

        }
        else{
            alert("Hatalı Deneme");
        }

        
        


        // }

        // else{
        // console.log("hata");
        // }




        
        dispatch(hideLoader());

    };

    
    



    const navigation = useNavigation();

    const goRegister = () =>{
        navigation.navigate(AppScreens.register);
        
    };
    

    

    


    

    return(
        
            
            <SafeAreaView 
                style = {styles.container}
                showsVerticalScrollIndicator = {false}>
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
                        onChangeText={text => onChangeText('username', text)}
                        value={pageData.username}
                        placeHolder={usernameText}
                        placeHolderTextColor={'gray'}
                        icon={'mail-outline'}
                        color={colors.cFFFFFF}
                        placeHolderTextColor={colors.cFFFFFF}
                        style={styles.input}
                    />
                    </View>
                    <View style={{marginVertical:15}}>
                    <Input 
                        isHidden
                        onChangeText={text => onChangeText('password',text)}
                        value={pageData.password}
                        placeHolder={passwordText}
                        placeHolderTextColor={'gray'}
                        icon={'lock-outline'}
                        color={colors.cFFFFFF}
                        placeHolderTextColor={colors.cFFFFFF}
                        style={styles.input}
                                            
 
                    />
                    </View>
                    <View style={styles.rememberMeContainer}>

                        <CheckBox 
                        checked={rememberMe}
                        onChangeState={() => handleRememberMe()}
                        color={colors.dark.white[50]}/>
                        <Text style={styles.rememberMeText}>{rememberMeText}</Text>

                    </View>

                    <View style={{marginVertical:5}}>
                        <Button
                        
                        onPress={() => onLogin()}
                        title={loginText}
                        />
                    </View>

                    <View style={{
                    alignItems:'center', 
                    justifyContent:'center', 
                    }}>
                    <TouchableOpacity onPress={()=> goRegister()}>
                        <Text style={{color:colors.cFFFFFF}}>{registerText}</Text>
                    </TouchableOpacity>
                    </View>

                    <View>
                        <Switch
                            value={isDarkMode}
                            onChange={toogleSwitch}
                        />
                    </View>

                    

                    <View style={styles.versionView}>
                        <Text style={styles.versionText}>v{version}</Text>

                    </View>
                    
                </View>
                </SafeAreaView>
            
        
    );

    
}

const styles = StyleSheet.create({
    container:{
        
        flex:1,
        
        
    },

    versionView:{
        marginVertical:130,
        justifyContent:'center', 
        alignItems:'center'

    },
    
    versionText:{
        fontSize:20,
        fontWeight:'bold',
        color:colors.cFFFFFF

    },

    lightTheme:{
        backgroundColor:colors.c000000,
        color:colors.c000000
    },
      darkTheme:{
        backgroundColor:'rgb(50,76,148)',
        color:colors.cFFFFFF
    },
    innerContainer:{
        flex:1,
        backgroundColor:colors.backgroundColor,
        justifyContent:'center', 
    },
    logo:{ 
        width:300, 
        height:100},

    logoContainer:{ 
        marginBottom:25, 
        alignItems:'center', 
        marginVertical:190},

    input:{
        marginVertical:5,
        alignItems:'center'
    },
    rememberMeContainer: {
        marginVertical: 15,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 17,
      },
      rememberMeText: {
        fontSize: fonts.f12,
        fontWeight: '500',
        color: colors.cFFFFFF,
        marginHorizontal:17
      },


        
});


