import React from 'react';
import {Text,View} from 'react-native';
import CustomButton from '../components/Button';
import { setLogout } from '../redux/system/action';
import { useDispatch } from 'react-redux';
import { colors } from '../constants';

export default function HomeScreen(){

    const dispatch = useDispatch();

    const onLogOut = () => {
        dispatch(setLogout());

    };


    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:colors.backgroundColor}}>
            <Text>Home Screen</Text>
            <CustomButton 
            title='Çıkış' 
            onPress={()=> onLogOut()} 
            />
            
        </View>
    );
}