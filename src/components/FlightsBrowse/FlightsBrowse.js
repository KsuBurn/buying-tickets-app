import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import flightList from '../../mapping/flightList.json';
import FlightCard from '../FlightCard/FlightCard';

const FlightsBrowse = () => {
  return (
    <View>
      <FlatList
        data={flightList}
        renderItem={(({item, index}) => (
          <View key={index}>
            <FlightCard item={item}/>
          </View>

        ))}
      />
    </View>
  );
};

export default FlightsBrowse;