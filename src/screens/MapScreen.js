import React from 'react'
import {StyleSheet } from 'react-native'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default function MapScreen() {
    return (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
        />
    );
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        
      },
});
