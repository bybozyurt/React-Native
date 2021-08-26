import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';

import { fonts, colors } from '../../constants';

export default function Input(
    {onChangeText, 
    isHidden, 
    icon, 
    iconTwo,
    placeHolder='',
    placeHolderTextColor,
    value='',
    style,
    color,
    onPress,
    secureTextEntry
    })
         
{
    const [showPass, setShowPass] = useState(false);
    

    return (
        <View style={[styles.container ,{...style}]}>
            
            <Icon name={icon} size={26} color={color} style={styles.icon}/>
            <TextInput 
            onChangeText={onChangeText} 
            value={value}
            placeholder={placeHolder}
            placeholderTextColor={placeHolderTextColor}
            secureTextEntry={isHidden ? !showPass : false}
            style={[styles.text,{color}]}
            
            />
            {isHidden && <Icon
             name ={showPass ? 'visibility' : 'visibility-off'} 
             onPress={()=> setShowPass(pass => !pass)}
             color={color}
             style={styles.icon}
             size={26}
             />
             }

            </View>
    )
}


const styles = StyleSheet.create({

    icon:{
        marginRight:15
    
    },

    container:{
    flexDirection:'row', 
    paddingBottom:10, 
    borderBottomWidth:1, 
    borderBottomColor:'#97a1be',
    marginHorizontal:17
    },

    text:{
    marginTop:3,
    fontSize:fonts.f13, 
    fontWeight:'600',
    fontSize:fonts.f13,
    letterSpacing:1,
    width:'80%'
    },
});