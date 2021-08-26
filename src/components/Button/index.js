import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet } from 'react-native'
import styles from './style';

export default function Button({
    onPress,
    title,
    style
    
}) {
    return (
        <View style={styles.Container}>
        <TouchableOpacity onPress={onPress} style={styles.Button}>
            <Text  style={styles.Text}>{title}</Text>
        </TouchableOpacity>
        </View>
    )
};


