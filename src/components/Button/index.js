import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from './style';

export default function Button({
    onPress,
    title,
    style
    
}) {
    return (
        <View style={[styles.Container],{...style}}>
        <TouchableOpacity onPress={onPress} style={styles.Button}>
            <Text  style={styles.Text}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
};


