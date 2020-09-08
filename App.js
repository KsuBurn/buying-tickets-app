import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStore} from 'redux';
import { Provider } from 'react-redux'
import RouteApp from './src/routes/RouteApp';
import reducers from './src/reducers';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

export const store = createStore(reducers);

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const loadApplication = async () => {
    await Font.loadAsync({
      'SF_Pro_Text': require('./assets/fonts/FontsFree-Net-SFProText-Regular.ttf'),
    });
  };

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadApplication}
        onError={err => console.log(err)}
        onFinish={() => setIsReady(true)}
      />
    )
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <RouteApp />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
