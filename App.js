import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import RouteApp from './src/routes/RouteApp';
import {reducers} from './src/reducers';

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteApp />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
