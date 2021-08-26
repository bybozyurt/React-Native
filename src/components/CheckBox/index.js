import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../constants'

 export default function CheckBox({

     
    checked,
    style,
    onChangeState,
     
     

 }) {
     return (
        
        <TouchableOpacity onPress={()=> onChangeState && onChangeState(!checked)}
        style={[styles.container, {...style}]}>
        {checked && (
            <Icon 
            name={checked ? 'check-box' : 'check-box-outline-blank'}  
            size={20}/>
        )}
             
         </TouchableOpacity>
     );
 }



const styles = StyleSheet.create({
    container:{

    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    width: 25,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
        
    },
    
})




// color ={checked ? checkedColor : colors.cFFFFFF}