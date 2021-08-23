import React from 'react';
import {
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import Navigation from './src/navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'

Icon.loadFont();

export default function App(){

  return(
    <Navigation/>

  );   

}
