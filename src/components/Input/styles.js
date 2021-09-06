
import {StyleSheet} from 'react-native';
import { fonts } from '../../constants';



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

export default styles;