import React from 'react';
import {StyleSheet} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {getFetchUserInfo} from '../redux/system/selector';

export default function MapScreen() {

    const fetchUserInfo = getFetchUserInfo();
    console.log("fetchUser",fetchUserInfo);
    const fetchLati = fetchUserInfo.fetchLati;
    const fetchLongitude = fetchUserInfo.fetchLongitude;

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: parseFloat(fetchLati),
        longitude: parseFloat(fetchLongitude),
        latitudeDelta: 70,
        longitudeDelta: 45
      }}>
      <Marker
        coordinate={{"latitude": parseFloat(fetchLati), "longitude": parseFloat(fetchLongitude)}}
        title={'title'}
        description={'description'}
      />
    </MapView>
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