import React from 'react';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import Icon from 'react-native-vector-icons/MaterialIcons'
import store from  './src/redux';
import persistStore from 'redux-persist/es/persistStore';
import {PersistGate} from 'redux-persist/integration/react';

Icon.loadFont();
const persistor = persistStore(store);

export default function App(){

  return(
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </PersistGate>

  );   

}
