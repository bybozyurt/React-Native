import React from 'react';
import { StyleSheet } from 'react-native';
import {colors, fonts} from '../../constants';


const styles = StyleSheet.create({
    Container: {
        flexDirection:'row',
        borderRadius: 5,
        padding:17
        
      },
      Text: {
        fontSize:fonts.f12,
        height:15,
        letterSpacing:1.2,
        fontWeight: "bold",
        alignSelf: "center",
        color:'black',
      },
      Button:{
          width:'100%',
          backgroundColor:colors.cFFFFFF,
          borderColor:colors.cf5f5fb,
          borderRadius:5,
          borderWidth:1,
          height:50,
          alignItems:'center',
          justifyContent:'center'

      }


});

export default styles;
