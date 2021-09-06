import React, {useState} from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

import { fonts, colors } from '../../constants';

export default function Input(
    {onChangeText, 
    isHidden, 
    icon, 
    placeHolder='',
    placeHolderTextColor,
    value='',
    style,
    color,
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


