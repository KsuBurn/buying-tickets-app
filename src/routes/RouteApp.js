import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Flights from '../components/Flights/Flights';
import FlightFavourites from '../components/FlightsFavourites/FlightFavourites';
import FlightsBrowse from '../components/FlightsBrowse/FlightsBrowse';
import FlightScreen from '../components/FlightScreen/FlightScreen';

const Stack = createStackNavigator();

const RouteApp = () => {
  return (
    <Stack.Navigator initialRouteName='Flights'  headerMode='none'>
      <Stack.Screen
        name='Flights'
        component={Flights}
      />
      <Stack.Screen
        name='FlightFavourites'
        component={FlightFavourites}
      />
      <Stack.Screen
        name='FlightsBrowse'
        component={FlightsBrowse}
      />
      <Stack.Screen
        name='FlightScreen'
        component={FlightScreen}
      />
    </Stack.Navigator>
  );
};

export default RouteApp;
