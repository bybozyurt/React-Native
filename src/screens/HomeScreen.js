import React, { useState } from 'react';
import {Text,View, StyleSheet} from 'react-native';
import CustomButton from '../components/Button';
import { setLogout, saveProject } from '../redux/system/action';
import { useDispatch, useSelector} from 'react-redux';
import { colors } from '../constants';
import {layout} from '../constants';
import CustomView from '../components/CustomView';
import { useNavigation } from '@react-navigation/native';
import { AppScreens } from '../navigation/RootNavigation';
import Header from '../components/Header';
import Input from '../components/Input';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getProject} from '../redux/system/selector';


export default function HomeScreen({navigation}){

    const dispatch = useDispatch();

    const [time, setTime] = useState('');
    const [project, SetProject] = useState('');

    const timeKey = 'time';
    const projectKey = 'project';
    const keyS = [[timeKey,time],[projectKey,project]];
    

    const {width, height} = layout;
    // const userInfo = useSelector(state => state.system.userInfo);

    //console.log('userInfo', userInfo);

    const onLogOut = () => {
        dispatch(setLogout());
        console.log("logout");

    };

    const Save = async () => {

        try {
            await AsyncStorage.multiSet(keyS);
            console.log("Zaman ve Proje Kayıt Edildi");
            ShowProject();
            
        } catch (error) {
            console.log("Set hatası", error);
            
        }
        
    }

    const ShowProject = async () => {

        try {
            const showTime = await AsyncStorage.getItem(timeKey);
            const showProject = await AsyncStorage.getItem(projectKey);
            dispatch(saveProject({
                time:showTime,
                project:showProject,

            }));
            
        } catch (error) {
            console.log("Get Hatası", error);
            
        }
        

    }

    const projectDetail = getProject();
    

    


    return(
        <CustomView style={{flex:1}}>
            <Header title={'Home'}/>

           <View style={{marginVertical:15}}>
               <Input
               value={time}
               placeHolder={'Süre Giriniz'}
               placeHolderTextColor={colors.cFFFFFF}
               color={colors.cFFFFFF}
               style={styles.input}
               onChangeText={setTime}

               />
           </View>

           <View style={{marginVertical:15}}>
               <Input
               value={project}
               placeHolder={'Proje giriniz'}
               placeHolderTextColor={colors.cFFFFFF}
               color={colors.cFFFFFF}
               style={styles.input}
               onChangeText={SetProject}
               
               />
           </View>

           <View style={{marginVertical:15}}>
 
                <CustomButton
                    onPress={()=> Save()}
                    title={'Projeyi Kaydet'}
                />
           </View>

           <View style={styles.metaContainer}>
               <Text style={styles.text}>{projectDetail.project}</Text>
           </View>

           <View style={styles.metaContainer}>
               <Text style={styles.text}>{projectDetail.time}</Text>
           </View>


           <View style={{marginVertical:200}}>
 
                <CustomButton
                    onPress={()=> onLogOut()}
                    title={"Çıkış"}
                />
           </View>


            
                     
            
        </CustomView>
    );
}

const styles = StyleSheet.create({
    input:{
        marginVertical:5,
        alignItems:'center'
    },
    text:{
        fontSize:15, 
        fontWeight:'bold',

    },
    metaContainer:{
        marginVertical:15,
        alignItems:'center'

    }
});

