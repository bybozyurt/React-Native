import React, { useState } from 'react';
import {StyleSheet,View, Image, Text, SafeAreaView, Platform, StatusBar, KeyboardAvoidingView, ScrollView, Switch} from 'react-native';
import {images,colors} from '../constants'
import Input from '../components/Input';
import Button from '../components/Button';
import CheckBox from '../components/CheckBox';
import DeviceInfo from 'react-native-device-info';
import {getUniqueI, getManufacturer } from 'react-native-device-info';
export default function LoginScreen(){

    let version = DeviceInfo.getVersion();
    console.log("Version", version);

    const [pageData, setPageData] = useState({
        username:'',
        password:''
    });

    const onChangeText = (key,value) =>{
        console.log('key,value',pageData,key,value);
        setPageData(page => ({...page, [key]:value}))
    };

    const [che, setChe] = useState(false);

    const [isDarkMode, setIsDarkMode] = useState(false);
    const toogleSwitch = () => setIsDarkMode(previousState => !previousState);

    const theme = isDarkMode ? styles.darkTheme : styles.lightTheme;


    

    return(
        // <KeyboardAvoidingView 
        // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // style={styles.container}>
            
                <ScrollView 
                style = {{backgroundColor:theme.backgroundColor}}
                showsVerticalScrollIndicator = {false}>
                <View style={{marginVertical:120}}>
                    <Image 
                    source={images.logo}
                    style={{width:300,height:100,marginLeft:50}}
                    resizeMethod='scale'
                    resizeMode='contain'
                    />
                    <View style={{marginVertical:15}}>
                    <Input 
                        onChangeText={text => onChangeText('username', text)}
                        value={pageData.username}
                        placeHolder={'Kullanıcı Adı'}
                        placeHolderTextColor={'gray'}
                        icon={'mail-outline'}
                        color={colors.cFFFFFF}
                        placeHolderTextColor={colors.cFFFFFF}
                    />
                    </View>
                    <View style={{marginVertical:15}}>
                    <Input 
                        onChangeText={text => onChangeText('password',text)}
                        value={pageData.password}
                        placeHolder={'Parola'}
                        placeHolderTextColor={'gray'}
                        icon={'lock-outline'}
                        color={colors.cFFFFFF}
                        placeHolderTextColor={colors.cFFFFFF}
                        iconTwo={'visibility-off'}
                        secureTextEntry={true}
                        
 
                    />
                    </View>
                    <View style={{marginVertical:15}}>

                        <CheckBox 
                        checked={che}
                        size={30}
                        onPress={setChe}
                        color={colors.cFFFFFF}
                        />

                    </View>

                    <View style={{marginVertical:15}}>
                        <Button
                        
                        onPress={()=> {alert("Giriş")}}
                        title='Giriş Yap'
                        />
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
                </ScrollView>
            
        
    );

    
}

const styles = StyleSheet.create({
    container:{
        
        flex:1, 
        justifyContent:'center', 
        alignItems:'center',
        backgroundColor:colors.backgroundColor,
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


        
});


