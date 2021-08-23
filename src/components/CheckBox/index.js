import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../constants'

 export default function CheckBox({

     checked,
     style,
     onChangeState,
     color,
     size,
     onPress,
     
    
 }) {
     return (
        
        <TouchableOpacity style={styles.CheckBox} onPress={onPress}>
             <Icon name={checked ? 'check-box' : 'check-box-outline-blank'} color={color} size={size}/>
    
         </TouchableOpacity>
     );
 }



const styles = StyleSheet.create({
    checkBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor:'white'
    }
})




// color ={checked ? checkedColor : colors.cFFFFFF}