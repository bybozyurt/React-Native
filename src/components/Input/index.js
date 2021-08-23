import React, {useState} from 'react'
import { View, Text, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons';

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
        <View style={{
            flexDirection:'row', 
            paddingBottom:10, 
            borderBottomWidth:1, 
            borderBottomColor:'#97a1be',
            alignItems:'center',
            justifyContent:'center',
            marginTop:20,
            marginBottom:-15
            }}>
            
            <Icon name={icon} size={26} color={color} style={{marginRight:15}}/>
            <TextInput 
            onChangeText={onChangeText} 
            isHidden={isHidden} 
            value={value}
            placeholder={placeHolder}
            placeholderTextColor={placeHolderTextColor}
            // secureTextEntry={isHidden ? !showPass : false}
            secureTextEntry={secureTextEntry ? !showPass : false}
            style={[{
                marginTop:3,
                fontSize:13, 
                fontWeight:'600',
        
            },{color}]}
            
            />

            <Icon name={iconTwo} size={26} color={color} onPress={()=> alert('Parola Gözüktü')} />
        </View>
    )
}
